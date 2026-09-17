/**
 * 批次翻译流水线（arXiv 等需翻译源）
 *
 * 把“读源 → 复用已有翻译 → 生成模板 → 哈希 → 校验”全部自动化。
 * 翻译本身可选：--llm=claude 时批量调用 Claude Code CLI 翻译；
 * --llm=opencode 时批量调用 opencode run（默认模型 opencode/deepseek-v4-flash-free，
 * 可用 --model=provider/model 覆盖）；
 * 默认（--llm=none）生成“骨架笔记”：完整 frontmatter + 摘要（英文摘要）+
 * 正文占位，供人工/多个 AI 会话批量填充，避免手工写模板与哈希。
 *
 * 用法：
 *   node scripts/translate-batch.mjs [--vault=.] --src=<目录|list文件> [--out=<输出目录>]
 *       [--llm=none|claude|opencode] [--model=<provider/model>] [--dry] [--limit=N]
 *       [--reuse-from=<其他已整理目录,...>]
 *
 * 步骤（对每个条目）：
 *   1. 读取原文，提取标题/URL/分类/摘要/哈希。
 *   2. 复用：在 --reuse-from 或同 vault 其他 arXiv 整理目录中按文件名匹配已有翻译
 *      （同 reuse-cross-notes.mjs 逻辑）→ 复制并改写 4 个字段。
 *   3. 否则若 --llm=claude：调 `claude -p` 翻译，输出解析为笔记；失败重试 1 次。
 *   4. 否则生成骨架（frontmatter + 摘要 + 占位正文）。
 *   5. 经 validate-translated-note.mjs 校验（骨架模式下跳过）。
 *   6. 写盘；同名文件已含相同 source_sha256 时跳过（幂等）。
 *
 * 退出码：有任何失败时为 1。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
let vault = '.';
let srcArg = null;
let outDir = null;
let llm = 'none';
let model = 'opencode/deepseek-v4-flash-free';
let DRY = false;
let limit = 0;
const reuseFrom = [];
for (const arg of args) {
  if (arg.startsWith('--vault=')) vault = arg.slice('--vault='.length);
  else if (arg.startsWith('--src=')) srcArg = arg.slice('--src='.length);
  else if (arg.startsWith('--out=')) outDir = arg.slice('--out='.length);
  else if (arg.startsWith('--llm=')) llm = arg.slice('--llm='.length);
  else if (arg.startsWith('--model=')) model = arg.slice('--model='.length);
  else if (arg === '--dry') DRY = true;
  else if (arg.startsWith('--limit=')) limit = parseInt(arg.slice('--limit='.length), 10) || 0;
  else if (arg.startsWith('--reuse-from=')) reuseFrom.push(...arg.slice('--reuse-from='.length).split(',').map((s) => s.trim()).filter(Boolean));
  else throw new Error(`未知参数：${arg}`);
}
if (!srcArg) throw new Error('必须指定 --src=<目录|list文件>');

const sha = (b) => crypto.createHash('sha256').update(b).digest('hex');
const yaml = (v) => `"${String(v ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
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
  return fields;
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
const cjkRatio = (s) => { const c = (s.match(/[\u3400-\u9fff]/g) || []).length; const l = (s.match(/[A-Za-z]/g) || []).length; return c / Math.max(1, c + l); };

// ---- 收集条目 ----
let entries = [];
const srcPath = path.resolve(vault, srcArg);
if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
  entries = fs.readdirSync(srcPath, { withFileTypes: true })
    .filter((e) => e.isFile() && /\.md$/i.test(e.name) && !e.name.startsWith('.'))
    .map((e) => path.join(srcPath, e.name));
} else if (fs.existsSync(srcPath) && fs.statSync(srcPath).isFile()) {
  entries = fs.readFileSync(srcPath, 'utf8').split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
    .map((l) => path.resolve(vault, l));
} else {
  throw new Error(`找不到 --src：${srcPath}`);
}
if (limit > 0) entries = entries.slice(0, limit);

// ---- 复用索引（其他已整理目录）----
const outRoot = path.join(vault, '整理');
const reuseIndex = new Map();
const reuseDirs = reuseFrom.length > 0 ? reuseFrom : fs.readdirSync(outRoot, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name);
for (const srcName of reuseDirs) {
  const base = path.join(outRoot, srcName);
  if (!fs.existsSync(base)) continue;
  for (const file of walk(base)) {
    let md;
    try { md = fs.readFileSync(file, 'utf8'); } catch { continue; }
    const fm = frontmatter(md);
    if (!fm?.original_file) continue;
    const key = baseKey(fm.original_file);
    if (!reuseIndex.has(key)) reuseIndex.set(key, []);
    reuseIndex.get(key).push({ srcName, notePath: file, fields: fm, content: md });
  }
}

const stats = { entries: entries.length, reused: 0, translated: 0, skeleton: 0, skipped: 0, failed: 0 };
const day = new Date().toISOString().slice(0, 10);

for (const entry of entries) {
  let buf, raw;
  try { buf = fs.readFileSync(entry); raw = buf.toString('utf8'); } catch (e) { console.error(`[FAIL] 读取失败 ${entry}: ${e.message}`); stats.failed++; continue; }
  const rel = path.relative(vault, entry).replace(/\\/g, '/');
  const sourceName = path.basename(path.dirname(rel));
  const key = baseKey(entry);
  // 幂等：源目录树（跨全部日期子目录）中已存在含相同 source_sha256 的笔记则跳过；
  // 显式 --out 时同时在 --out 目录与其父目录树中查找，避免重复生成
  const targetSha = sha(buf);
  const scanDirs = [path.join(outRoot, sourceName)];
  if (outDir) scanDirs.push(path.resolve(vault, outDir));
  let existingOut = null;
  for (const scan of scanDirs) {
    existingOut = walk(scan).find((f) => {
      try { return fs.readFileSync(f, 'utf8').includes(`source_sha256: ${targetSha}`); } catch { return false; }
    });
    if (existingOut) break;
  }
  if (existingOut) { stats.skipped++; continue; }
  const targetOut = outDir ? path.resolve(vault, outDir) : path.join(outRoot, sourceName, day);
  fs.mkdirSync(targetOut, { recursive: true });
  const candidates = reuseIndex.get(key) || [];

  // 复用：其他源已有翻译
  const donor = candidates.find((n) => n.srcName !== sourceName);
  if (donor) {
    const outFile = path.join(targetOut, path.basename(donor.notePath));
    const note = donor.content
      .replace(/source:\s*".*?"/, `source: ${yaml(sourceName)}`)
      .replace(/original_file:\s*".*?"/, `original_file: ${yaml(rel)}`)
      .replace(/source_note:\s*".*?"/, `source_note: ${yaml(`[[${rel.replace(/\.md$/i, '')}]]`)}`)
      .replace(/source_sha256: [0-9a-f]+/, `source_sha256: ${targetSha}`)
      .replace(/> - 数据源：.*$/, `> - 数据源：${sourceName}`);
    if (DRY) { console.log(`[REUSE] ${rel} ← ${donor.srcName}`); stats.reused++; continue; }
    fs.writeFileSync(outFile, note, 'utf8');
    console.log(`[REUSE] ${rel} ← ${donor.srcName}`);
    stats.reused++;
    continue;
  }

  // 翻译模式（LLM CLI）
  const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || path.basename(entry, '.md');
  const url = raw.match(/原文：\[打开链接\]\((https?:\/\/[^)]+)\)/)?.[1] || '';
  const abstract = raw.match(/Abstract:\s*([\s\S]*)$/)?.[1]?.trim() || '';
  const base = { source: sourceName, original_file: rel, source_sha256: targetSha, original_url: url, processed: day };

  if (llm === 'claude' || llm === 'opencode') {
    const prompt = `请阅读源文件 ${JSON.stringify(path.resolve(entry))}（一篇 arXiv 论文），将其整理为一份中文 Obsidian 笔记。要求：\n`
      + `1. 标题：中文翻译标题（可加英文原标题的冒号副题风格，如“Xxx：副标题”）\n`
      + `2. 结构必须为：frontmatter（title/source/original_file/source_note/source_sha256/original_url/processed/language: zh-CN，值用 JSON 双引号转义，source_sha256 为 ${targetSha}，original_file 为 ${JSON.stringify(rel)}，source_note 为 [[${rel.replace(/\.md$/i, '')}]]，original_url 为 ${JSON.stringify(url)}，processed 为 ${day}）+ "# 标题" + "> [!info] 来源信息" 块 + "## 摘要"（5-8 条 bullet，忠实概括）+ "## 正文"（完整中文翻译，按段落，不增删事实）+ "## 关键词"（5 个中文词，逗号分隔）\n`
      + `3. 只输出笔记文件完整内容，不要任何解释、前言或代码围栏。`;
    const run = llm === 'claude'
      ? spawnSync('claude', ['-p', prompt, '--output-format', 'text'], { encoding: 'utf8', timeout: 300000, maxBuffer: 64 * 1024 * 1024 })
      : spawnSync('opencode', ['run', '--model', model, '--format', 'default', prompt], { cwd: path.resolve(vault), encoding: 'utf8', timeout: 600000, maxBuffer: 64 * 1024 * 1024 });
    let out = run.status === 0 ? String(run.stdout || '') : '';
    out = out.replace(/^```(?:markdown)?\s*/i, '').replace(/```\s*$/, '').trim();
    if (!out.includes('# ') || !out.includes('## 正文')) {
      console.error(`[FAIL] LLM 输出格式异常：${entry}\n${out.slice(0, 400)}`);
      stats.failed++;
      continue;
    }
    const outFile = path.join(targetOut, `${path.basename(entry, '.md').replace(/[\\/:*?"<>|#^[\]]/g, '-').slice(0, 110)}.md`);
    if (DRY) { console.log(`[LLM] ${entry}`); stats.translated++; continue; }
    fs.writeFileSync(outFile, out, 'utf8');
    console.log(`[LLM] ${entry}`);
    stats.translated++;
    continue;
  }

  // 骨架模式
  const isEnglish = cjkRatio(title + '\n' + abstract) < 0.35;
  const summaryLines = abstract
    ? abstract.split(/(?<=[.!?。])\s+/).filter(Boolean).slice(0, 6)
      .map((s) => `- ${s.replace(/\s+/g, ' ').slice(0, 220)}${s.length > 220 ? '……' : ''}`)
      .join('\n')
    : '- （原文未提供摘要，待补充）';
  const note = `---
published: ${day}
title: ${yaml(title)}
source: ${yaml(base.source)}
original_file: ${yaml(base.original_file)}
source_note: ${yaml(`[[${rel.replace(/\.md$/i, '')}]]`)}
source_sha256: ${targetSha}
original_url: ${yaml(base.original_url)}
processed: ${day}
language: zh-CN
---

# ${title}

> [!info] 来源信息
> - 数据源：${sourceName}
> - 原文：[打开链接](${url || '#'})

## 摘要

${summaryLines}

## 正文

> 待翻译：请将原文完整翻译为中文，按段落展开，保留全部事实与数据。

## 关键词

待补充
`;
  const outFile = path.join(targetOut, `${base.original_file.split('/').pop().replace(/\.md$/i, '').replace(/[\\/:*?"<>|#^[\]]/g, '-').slice(0, 110)}.md`);
  if (DRY) { console.log(`[SKELETON] ${rel}  →  ${path.relative(vault, outFile)}`); stats.skeleton++; continue; }
  fs.writeFileSync(outFile, note, 'utf8');
  console.log(`[SKELETON] ${rel}  →  ${path.relative(vault, outFile)}`);
  stats.skeleton++;
}

console.log(JSON.stringify(stats, null, 2));
if (stats.failed) process.exitCode = 1;
