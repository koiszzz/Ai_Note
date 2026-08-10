/**
 * 通用中文 RSS/网页源批量整理（工程化、幂等）
 *
 * 功能：
 * 1. 扫描“信息源/<源名>/”下的 .md 条目，按 CJK 占比过滤纯中文内容（阈值可调）。
 * 2. 提取标题、作者、发布时间、原文链接、正文（------ 分隔符之后），生成统一模板笔记。
 * 3. 写入“整理/<源名>/”平铺目录，含 published（YYYY-MM-DD，供迁移脚本归日期目录）。
 * 4. 幂等：已存在且 source_sha256 相同的输出跳过；每个新输出经 validate-translated-note.mjs 校验。
 *
 * 用法：
 *   node scripts/organize-chinese-rss.mjs [--vault=.] [--source=量子位] [--skip=源A,源B]
 *       [--threshold=0.35] [--dry]
 *
 * 参数：
 *   --vault       vault 根目录（默认当前目录）
 *   --source      只处理指定数据源；不传则处理除默认跳过列表外的全部中文源
 *   --skip        追加跳过源（逗号分隔）
 *   --threshold   CJK 占比阈值，低于该值的条目跳过（默认 0.35）
 *   --dry         只打印计划，不写盘
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { validateTranslatedNote } from './validate-translated-note.mjs';

const args = process.argv.slice(2);
let vault = '.';
let onlySource = null;
let extraSkip = new Set();
let threshold = 0.35;
let DRY = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vault = arg.slice('--vault='.length);
  else if (arg.startsWith('--source=')) onlySource = arg.slice('--source='.length);
  else if (arg.startsWith('--skip=')) extraSkip = new Set(arg.slice('--skip='.length).split(',').map((s) => s.trim()).filter(Boolean));
  else if (arg.startsWith('--threshold=')) threshold = parseFloat(arg.slice('--threshold='.length));
  else if (arg === '--dry') DRY = true;
  else throw new Error(`未知参数：${arg}`);
}

const skip = new Set([
  'Horizon Daily（中文摘要）', 'AI资讯日报', '掘金人工智能',
  'arXiv cs.AI RSS', 'arXiv cs.LG RSS', 'arXiv cs.CV RSS', 'arXiv cs.CL RSS',
  'EFF 数字权利动态', 'Stack Overflow Blog', 'Mozilla Hacks', 'NASA 每日天文图', 'GitHub Blog',
  ...extraSkip,
]);
const sourceRoot = path.join(vault, '信息源');
const day = new Date().toISOString().slice(0, 10);
const quote = (v) => JSON.stringify(String(v ?? ''));
const safe = (v) => v.replace(/[\\/:*?"<>|#^[\]]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120) || '未命名文章';
const hash = (b) => crypto.createHash('sha256').update(b).digest('hex');
const cjkRatio = (s) => { const c = (s.match(/[\u3400-\u9fff]/g) || []).length; const l = (s.match(/[A-Za-z]/g) || []).length; return c / Math.max(1, c + l); };

const MONTHS = { Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06', Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12' };
// "Fri, 07 Aug 2026 03:23:54 +0000" | "2026-08-07" | "2026年8月7日" → YYYY-MM-DD
function normalizeDate(raw) {
  if (!raw) return '';
  const s = String(raw).trim();
  let m = s.match(/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
  if (m) return `${m[1]}-${String(m[2]).padStart(2, '0')}-${String(m[3]).padStart(2, '0')}`;
  m = s.match(/\b(\d{2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})\b/);
  if (m) return `${m[3]}-${MONTHS[m[2]]}-${m[1]}`;
  return '';
}

let created = 0, skipped = 0, failed = 0, sourcesSeen = 0, entriesSeen = 0, filtered = 0;

for (const dir of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
  if (!dir.isDirectory() || skip.has(dir.name)) continue;
  if (onlySource && dir.name !== onlySource) continue;
  const sourceDir = path.join(sourceRoot, dir.name);
  const outDir = path.join(vault, '整理', dir.name);
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true }).filter((e) => e.isFile() && /\.md$/i.test(e.name) && !e.name.startsWith('.'));
  if (entries.length === 0) continue;
  sourcesSeen++;
  fs.mkdirSync(outDir, { recursive: true });

  for (const entry of entries) {
    entriesSeen++;
    const sourcePath = path.join(sourceDir, entry.name);
    let buf, raw;
    try { buf = fs.readFileSync(sourcePath); raw = buf.toString('utf8'); } catch (error) { console.error('读取失败：' + sourcePath + ' ' + error.message); failed++; continue; }
    const body = raw.split(/^------\s*$/m)[1]?.trim() || raw;
    const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || entry.name.replace(/\.md$/i, '');
    if (cjkRatio(title + '\n' + body) < threshold) { filtered++; continue; }
    const rel = path.relative(vault, sourcePath).replace(/\\/g, '/');
    const target = rel.replace(/\.md$/i, '');
    const out = path.join(outDir, `${safe(title)}.md`);
    const sha = hash(buf);
    const existingOut = (!DRY && fs.existsSync(out)) ? fs.readFileSync(out, 'utf8') : '';
    if (existingOut && existingOut.includes(`source_sha256: ${sha}`) && /^published: \d{4}-\d{2}-\d{2}/m.test(existingOut)) { skipped++; continue; }
    const url = raw.match(/原文：\[打开链接\]\((https?:\/\/[^)]+)\)/)?.[1] || '';
    const author = raw.match(/作者：(.+?)\s*[　|]\s*发布时间：/m)?.[1]?.trim() || '';
    const publishedRaw = raw.match(/发布时间：(.+?)\s*[　|]\s*原文：/m)?.[1]?.trim()
      || raw.match(/发布时间：(.+?)(?:\s*[　|]\s*|$)/m)?.[1]?.trim() || '';
    const published = normalizeDate(publishedRaw);
    const note = `---
title: ${quote(title)}
source: ${quote(dir.name)}
original_file: ${quote(rel)}
source_note: ${quote(`[[${target}]]`)}
source_sha256: ${sha}
original_url: ${quote(url)}
${published ? `published: ${published}\n` : ''}processed: ${day}
language: zh-CN
---

# ${title}

> [!info] 来源信息
> - 数据源：${dir.name}
${author ? `> - 作者：${author}\n` : ''}${published ? `> - 发布时间：${published}\n` : ''}> - 原文链接：${url ? `[打开原文](${url})` : '原文未提供'}
> - Vault 原文件：[[${target}|查看原始文件]]

## 摘要

- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。

## 正文

${body}

## 关键词

#${dir.name.replace(/\s+/g, '-')}`.replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '');
    if (DRY) { created++; console.log(`[DRY] ${rel}  →  ${path.relative(vault, out)}`); continue; }
    try { fs.writeFileSync(out, note, 'utf8'); } catch (error) { console.error('写入失败：' + out + ' ' + error.message); failed++; continue; }
    const validation = validateTranslatedNote(note, { sourceText: body, attempt: 1, allowForeign: true });
    if (!validation.ok) { try { fs.unlinkSync(out); } catch {} console.error('校验未通过：' + out + ' ' + JSON.stringify(validation.errors)); failed++; } else created++;
  }
}
console.log(JSON.stringify({ sources: sourcesSeen, entries: entriesSeen, filtered_by_cjk: filtered, created, skipped, failed }, null, 2));
if (failed) process.exitCode = 1;
