/**
 * 哈希对账脚本（防回归）
 *
 * 扫描“整理/<源>/”下全部笔记（含日期子目录），对照 frontmatter 的 original_file
 * 定位“信息源/”源文件，重算 SHA-256 并与 source_sha256 比对：
 *   - hash_mismatch：源文件存在但哈希不匹配（源文件被更新/重写）
 *   - source_missing：源文件不存在
 *   - no_reference：笔记缺少 original_file 或 source_sha256
 *   - ok：一致
 *
 * 用法：
 *   node scripts/reconcile-sha.mjs [--vault=.] [--source=量子位] [--fix] [--dry]
 *
 *   --fix   把哈希不匹配的 source_sha256 更新为当前源文件哈希（不处理 source_missing）
 *   --dry   只报告，不写盘
 * 退出码：存在 hash_mismatch/source_missing/no_reference 且未 --fix 修复全部时为 1。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const args = process.argv.slice(2);
let vault = '.';
let onlySource = null;
let FIX = false;
let DRY = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vault = arg.slice('--vault='.length);
  else if (arg.startsWith('--source=')) onlySource = arg.slice('--source='.length);
  else if (arg === '--fix') FIX = true;
  else if (arg === '--dry') DRY = true;
  else throw new Error(`未知参数：${arg}`);
}
const infoRoot = path.join(vault, '信息源');
const outRoot = path.join(vault, '整理');

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
const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');
function yamlScalar(raw = '') {
  const v = raw.trim();
  if (v.startsWith('"') && v.endsWith('"')) { try { return JSON.parse(v); } catch { return v.slice(1, -1); } }
  if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  return v;
}

const reports = { hash_mismatch: [], source_missing: [], no_reference: [], ok: 0, fixed: 0, notes: 0 };
const sources = fs.readdirSync(outRoot, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name)
  .filter((name) => !onlySource || name === onlySource);

// 源哈希缓存（一源多输出时避免重复计算）+ 只读 frontmatter 前缀
const shaCache = new Map();
function sourceHash(srcPath) {
  if (!shaCache.has(srcPath)) shaCache.set(srcPath, sha(fs.readFileSync(srcPath)));
  return shaCache.get(srcPath);
}
function readFrontmatter(file) {
  try {
    const fd = fs.openSync(file, 'r');
    const buf = Buffer.alloc(8192);
    const n = fs.readSync(fd, buf, 0, buf.length, 0);
    fs.closeSync(fd);
    return buf.toString('utf8', 0, n).match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1] || null;
  } catch { return null; }
}

for (const src of sources) {
  for (const file of walk(path.join(outRoot, src))) {
    reports.notes++;
    const block = readFrontmatter(file);
    if (!block) {
      reports.no_reference.push({ note: path.relative(vault, file), reason: '缺少 frontmatter' });
      continue;
    }
    const fm = {};
    for (const line of block.split(/\r?\n/)) {
      const hit = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
      if (hit) fm[hit[1]] = yamlScalar(hit[2]);
    }
    const original = fm.original_file;
    const stored = fm.source_sha256;
    if (!original || !stored) {
      reports.no_reference.push({ note: path.relative(vault, file), reason: original ? '缺少 source_sha256' : '缺少 original_file' });
      continue;
    }
    const srcPath = path.join(vault, original);
    if (!fs.existsSync(srcPath)) {
      reports.source_missing.push({ note: path.relative(vault, file), original });
      continue;
    }
    const current = sourceHash(srcPath);
    if (current === stored) { reports.ok++; continue; }
    reports.hash_mismatch.push({ note: path.relative(vault, file), original, stored, current });
    if (FIX && !DRY) {
      const full = fs.readFileSync(file, 'utf8');
      const fixed = full.replace(/source_sha256: [0-9a-f]+/, `source_sha256: ${current}`);
      if (fixed !== full) {
        fs.writeFileSync(file, fixed, 'utf8');
        reports.fixed++;
      }
    }
  }
}

console.log(JSON.stringify({
  notes: reports.notes,
  ok: reports.ok,
  hash_mismatch: reports.hash_mismatch.length,
  source_missing: reports.source_missing.length,
  no_reference: reports.no_reference.length,
  fixed: reports.fixed,
  mode: FIX ? (DRY ? 'fix-dry' : 'fix') : 'report',
  details: reports.hash_mismatch.slice(0, 20),
  missing: reports.source_missing.slice(0, 20),
  noref: reports.no_reference.slice(0, 20),
}, null, 2));

const remaining = reports.source_missing.length + reports.no_reference.length + (reports.hash_mismatch.length - reports.fixed);
process.exitCode = remaining > 0 ? 1 : 0;
