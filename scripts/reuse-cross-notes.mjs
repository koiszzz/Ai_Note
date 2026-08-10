/**
 * 跨源翻译复用（arXiv 类别间重复论文）
 *
 * 同一篇 arXiv 论文会出现在多个类别 RSS（Announce Type: cross），此前各源重复
 * 翻译全靠手工复制。本脚本按 original_file 的文件名（去掉 .md、小写）归一化匹配：
 *   - --report  报告：哪些目标条目在其他源已有翻译（可复用），内容是否一致
 *   - --apply   执行：把已有翻译复制到目标源，仅改写 source / original_file /
 *               source_note / source_sha256（目标源哈希自动计算）
 *
 * 用法：
 *   node scripts/reuse-cross-notes.mjs [--vault=.] [--target=arXiv cs.CV RSS]
 *       [--report] [--apply] [--dry]
 *
 * 注意：--target 的输入源是“信息源/<target>/”下的原文（尚未整理的批次），
 * 输出写“整理/<target>/20260807/”；也可以对已整理目录运行 --report 检查一致性。
 * 匹配键：原文文件名（basename, 去扩展名, 小写）。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const args = process.argv.slice(2);
let vault = '.';
let target = null;
let MODE = 'report';
let DRY = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vault = arg.slice('--vault='.length);
  else if (arg.startsWith('--target=')) target = arg.slice('--target='.length);
  else if (arg === '--report') MODE = 'report';
  else if (arg === '--apply') MODE = 'apply';
  else if (arg === '--dry') DRY = true;
  else throw new Error(`未知参数：${arg}`);
}

const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');
function yamlScalar(raw = '') {
  const v = raw.trim();
  if (v.startsWith('"') && v.endsWith('"')) { try { return JSON.parse(v); } catch { return v.slice(1, -1); } }
  if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  return v;
}
function frontmatter(markdown) {
  const m = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!m) return null;
  const fields = {};
  for (const line of m[1].split(/\r?\n/)) {
    const hit = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (hit) fields[hit[1]] = yamlScalar(hit[2]);
  }
  return { fields, rawBlock: m[0] };
}
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name.startsWith('~')) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(p));
    else if (e.isFile() && /\.md$/i.test(e.name)) files.push(p);
  }
  return files;
}
const baseKey = (relPath) => path.basename(relPath).replace(/\.md$/i, '').toLowerCase();
const yaml = (v) => `"${String(v ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;

// ---- 1. 索引全部已整理笔记：key -> [{src, notePath, fields, rawBlock, content}] ----
const outRoot = path.join(vault, '整理');
const index = new Map();
for (const src of fs.readdirSync(outRoot, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name)) {
  for (const file of walk(path.join(outRoot, src))) {
    let md;
    try { md = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const fm = frontmatter(md);
    if (!fm?.fields?.original_file) continue;
    const key = baseKey(fm.fields.original_file);
    if (!index.has(key)) index.set(key, []);
    index.get(key).push({ src, notePath: file, fields: fm.fields, content: md });
  }
}

// ---- 2. 确定目标源要处理的原文 ----
const targetName = target;
if (!targetName) throw new Error('必须指定 --target=<数据源名>');
const srcDir = path.join(vault, '信息源', targetName);
const outDir = path.join(vault, '整理', targetName);
if (!fs.existsSync(srcDir)) throw new Error(`找不到源目录：${srcDir}`);

const candidates = [];
const missing = [];
for (const e of fs.readdirSync(srcDir, { withFileTypes: true })) {
  if (!e.isFile() || !/\.md$/i.test(e.name) || e.name.startsWith('.')) continue;
  const rel = `信息源/${targetName}/${e.name}`;
  const key = baseKey(e.name);
  const existing = index.get(key) || [];
  const usable = existing.filter((n) => n.src !== targetName);
  if (usable.length === 0) { missing.push(rel); continue; }
  const sourceSha = sha(fs.readFileSync(path.join(srcDir, e.name)));
  candidates.push({ rel, key, sourceSha, usable });
}

console.log(`目标源原文：${candidates.length + missing.length}，可复用 ${candidates.length}，无复用 ${missing.length}`);

if (MODE === 'report') {
  let consistent = 0, inconsistent = 0;
  const normalize = (c) => c
    .replace(/source_sha256: [0-9a-f]+/, 'source_sha256: X')
    .replace(/source:\s*".*?"/s, 'source: "X"')
    .replace(/original_file:\s*".*?"/s, 'original_file: "X"')
    .replace(/source_note:\s*".*?"/s, 'source_note: "X"')
    .replace(/processed: \d{4}-\d{2}-\d{2}/, 'processed: X')
    .replace(/> - 数据源：.*$/m, '> - 数据源：X')
    .replace(/> 数据源：.*$/m, '> 数据源：X');
  const rows = [];
  for (const c of candidates) {
    const bodies = new Set(c.usable.map((n) => normalize(n.content)));
    const same = bodies.size === 1;
    if (same) consistent++; else inconsistent++;
    rows.push({ rel: c.rel, sources: c.usable.map((n) => n.src), same });
  }
  console.log(JSON.stringify({ reusable: candidates.length, consistent, inconsistent, rows: rows.slice(0, 30) }, null, 2));
  process.exitCode = 0;
  process.exit(0);
}

// ---- 3. --apply 执行复制 ----
let applied = 0, failed = 0, skippedExisting = 0;
const applyOutDir = path.join(outRoot, targetName, new Date().toISOString().slice(0, 10).replace(/-/g, ''));
fs.mkdirSync(applyOutDir, { recursive: true });
for (const c of candidates) {
  const donor = c.usable[0];
  const targetSha = c.sourceSha;
  // 幂等：目标源整棵输出树（含全部日期目录）已有同哈希笔记则跳过
  const existing = walk(path.join(outRoot, targetName)).find((f) => {
    try { return fs.readFileSync(f, 'utf8').includes(`source_sha256: ${targetSha}`); } catch { return false; }
  });
  if (existing) { skippedExisting++; continue; }
  const out = path.join(applyOutDir, path.basename(donor.notePath));
  const note = donor.content
    .replace(/^source:.*$/m, `source: ${yaml(targetName)}`)
    .replace(/^original_file:.*$/m, `original_file: ${yaml(c.rel)}`)
    .replace(/^source_note:.*$/m, `source_note: ${yaml(`[[${c.rel.replace(/\.md$/i, '')}]]`)}`)
    .replace(/^source_sha256:.*$/m, `source_sha256: ${targetSha}`)
    .replace(/> - 数据源：.*$/, `> - 数据源：${targetName}`);
  if (!note.includes(`source_sha256: ${targetSha}`) || !note.includes(`original_file: ${yaml(c.rel)}`)) {
    console.error(`[FAIL] 字段替换未生效：${c.rel}`);
    failed++;
    continue;
  }
  if (DRY) { console.log(`[DRY] ${c.rel}  ←  ${donor.src}/${path.basename(donor.notePath)}`); applied++; continue; }
  try {
    fs.writeFileSync(out, note, 'utf8');
    console.log(`[OK] ${c.rel}  ←  ${donor.src}`);
    applied++;
  } catch (e) {
    console.error(`[FAIL] ${c.rel}: ${e.message}`);
    failed++;
  }
}
console.log(JSON.stringify({ mode: 'apply', reusable: candidates.length, applied, skipped_existing: skippedExisting, failed, missing: missing.length }, null, 2));
if (failed) process.exitCode = 1;
