import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function stripNonProse(markdown) {
  return markdown
    .replace(/^---\s*$[\s\S]*?^---\s*$/m, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!?(\[[^\]]*\])\((?:[^()]|\([^)]*\))*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, '')
    .replace(/\[\[[^\]|]+\|?([^\]]*)\]\]/g, '$1');
}

function ratio(part, whole) {
  return whole ? Number((part / whole).toFixed(4)) : 0;
}

function sourceFragment(markdown, sourceText) {
  if (!sourceText) return sourceText;
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || '';
  const raw = frontmatter.match(/^source_fragment:\s*(.+)$/m)?.[1]?.trim() || '';
  const fragment = raw.replace(/^['"]|['"]$/g, '').replace(/\\"/g, '"');
  if (!fragment) return sourceText;
  const lines = sourceText.split(/\r?\n/);
  let start = lines.findIndex((line) => /^#{1,6}\s+/.test(line) && line.includes(fragment));
  let isListFragment = false;
  if (start < 0) {
    start = lines.findIndex((line) => /^[-*+]\s+/.test(line) && line.includes(fragment));
    isListFragment = start >= 0;
  }
  if (start < 0) return sourceText;
  const level = lines[start].match(/^(#+)/)?.[1].length || 6;
  let end = lines.length;
  for (let index = start + 1; index < lines.length; index++) {
    const nextLevel = lines[index].match(/^(#+)\s+/)?.[1].length;
    if ((isListFragment && (/^[-*+]\s+/.test(lines[index]) || nextLevel))
      || (nextLevel && nextLevel <= level)) {
      end = index;
      break;
    }
  }
  return lines.slice(start, end).join('\n');
}

export function validateTranslatedNote(markdown, options = {}) {
  const errors = [];
  const warnings = [];
  const text = stripNonProse(markdown);
  const cjk = (text.match(/[\u3400-\u4dbf\u4e00-\u9fff]/g) || []).length;
  const latin = (text.match(/[A-Za-z]/g) || []).length;
  const letters = cjk + latin;
  const chineseRatio = ratio(cjk, letters);

  const required = ['title', 'source', 'original_file', 'source_sha256', 'language'];
  const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontmatter) errors.push('缺少 YAML frontmatter。');
  else {
    for (const field of required) {
      if (!new RegExp(`^${field}:\\s*\\S+`, 'm').test(frontmatter[1])) errors.push(`YAML 缺少 ${field}。`);
    }
  }

  for (const heading of ['# ', '## 摘要', '## 正文', '## 关键词']) {
    if (!markdown.split(/\r?\n/).some((line) => line.startsWith(heading))) errors.push(`缺少必要结构：${heading.trim()}。`);
  }

  if (cjk < 30) errors.push(`中文字符过少（${cjk} 个），内容可能未翻译。`);
  if (letters >= 100 && chineseRatio < 0.35) errors.push(`中文字符占比过低（${(chineseRatio * 100).toFixed(1)}%）。`);

  const encoded = {
    '十六进制转义': (text.match(/(?:(?:0x|\\x)[0-9a-f]{2}[\s,;:]*){4,}/gi) || []).length,
    'Unicode 转义': (text.match(/(?:\\u[0-9a-f]{4}[\s,;:]*){3,}/gi) || []).length,
    'HTML 数字实体': (text.match(/(?:&#(?:x[0-9a-f]+|\d+);\s*){3,}/gi) || []).length,
    Base64: (text.match(/(?:[A-Za-z0-9+/]{100,}={0,2})/g) || []).length,
  };
  for (const [name, count] of Object.entries(encoded)) {
    if (count) errors.push(`检测到疑似${name}正文（${count} 处）。`);
  }

  const replacements = (text.match(/�/g) || []).length;
  const bodyOnly = markdown.replace(/^---\s*\n[\s\S]*?\n---/, '');
  const zeroWidth = (bodyOnly.match(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g) || []).length;
  const mojibake = (text.match(/(?:Ã.|Â.|â€|锟斤拷|烫烫烫|屯屯屯)/g) || []).length;
  if (replacements) errors.push(`检测到 Unicode 替换字符 �（${replacements} 个）。`);
  if (mojibake) errors.push(`检测到疑似错误解码文本（${mojibake} 处）。`);
  if (zeroWidth) errors.push(`检测到零宽或双向控制字符（${zeroWidth} 个）。`);

  const foreignParagraphs = text.split(/\n\s*\n/).filter((paragraph) => {
    const words = paragraph.match(/\b[A-Za-z][A-Za-z'-]*\b/g) || [];
    const zh = (paragraph.match(/[\u3400-\u4dbf\u4e00-\u9fff]/g) || []).length;
    return words.length >= 20 && zh < words.length * 0.25;
  });
  if (foreignParagraphs.length) errors.push(`检测到 ${foreignParagraphs.length} 个疑似未翻译的外文段落。`);

  if (options.sourceText) {
    const comparableSource = sourceFragment(markdown, options.sourceText);
    const cleanedSource = comparableSource.replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF\u00AD]/g, '');
    const sourceLength = stripNonProse(cleanedSource).replace(/\s/g, '').length;
    const outputLength = text.replace(/\s/g, '').length;
    const lengthRatio = ratio(outputLength, sourceLength);
    if (sourceLength > 500 && lengthRatio < 0.35) errors.push(`译文相对原文异常短（长度比 ${lengthRatio}），可能只生成了摘要。`);
    if (lengthRatio > 4) warnings.push(`译文相对原文异常长（长度比 ${lengthRatio}），请检查是否发生重复或扩写。`);
  }

  if (/待翻译|TODO\s*[:：]?\s*翻译|原文略|省略译文/i.test(text)) errors.push('检测到待翻译或省略译文占位文字。');

  const attempt = Number(options.attempt || 1);
  const hardErrorPattern = /缺少|过少|编码|转义|Base64|替换字符|错误解码|零宽|占位文字/;
  const hardErrors = errors.filter((error) => hardErrorPattern.test(error));
  const reviewableErrors = errors.filter((error) => !hardErrorPattern.test(error));
  const manuallyAccepted = Boolean(options.manualApproved) && attempt >= 2 && hardErrors.length === 0;
  return {
    ok: errors.length === 0 || manuallyAccepted,
    attempt,
    manual_review_required: errors.length > 0 && attempt >= 2 && !manuallyAccepted,
    manual_approval_accepted: manuallyAccepted,
    metrics: { cjk, latin, chinese_ratio: chineseRatio, foreign_paragraphs: foreignParagraphs.length },
    errors,
    hard_errors: hardErrors,
    reviewable_errors: reviewableErrors,
    warnings,
    manual_checks: ['逐段核对人物、数字、日期、单位和否定关系', '确认结论、因果关系和技术术语没有误译', '确认没有遗漏正文或用摘要替代全文'],
  };
}

function parseArgs(argv) {
  const positional = [];
  const options = {};
  for (const arg of argv) {
    if (arg.startsWith('--source=')) options.source = arg.slice(9);
    else if (arg.startsWith('--attempt=')) options.attempt = Number(arg.slice(10));
    else if (arg === '--manual-approved') options.manualApproved = true;
    else positional.push(arg);
  }
  return { file: positional[0], ...options };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = parseArgs(process.argv.slice(2));
  if (!args.file) {
    console.error('用法：node scripts/validate-translated-note.mjs <整理稿.md> [--source=<原文件>] [--attempt=1] [--manual-approved]');
    process.exit(2);
  }
  try {
    const markdown = fs.readFileSync(path.resolve(args.file), 'utf8');
    const sourceText = args.source ? fs.readFileSync(path.resolve(args.source), 'utf8') : undefined;
    const result = validateTranslatedNote(markdown, { sourceText, attempt: args.attempt, manualApproved: args.manualApproved });
    console.log(JSON.stringify({ file: path.resolve(args.file), source: args.source ? path.resolve(args.source) : null, ...result }, null, 2));
    process.exitCode = result.ok ? 0 : 1;
  } catch (error) {
    console.error(JSON.stringify({ ok: false, error: error.message }, null, 2));
    process.exitCode = 2;
  }
}
