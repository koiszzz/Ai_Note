import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { validateTranslatedNote } from './validate-translated-note.mjs';

const root = path.resolve(process.argv[2] || '.');
const sourceRoot = path.join(root, '信息源', 'AI资讯日报');
const outputRoot = path.join(root, '整理', 'AI资讯日报');
const processed = new Date().toISOString().slice(0, 10);

function clean(text) {
  return text
    .replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function yaml(value) {
  return JSON.stringify(String(value || '').replace(/\r?\n/g, ' '));
}

function safeName(value) {
  return value
    .replace(/[\\/:*?"<>|#[\]]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 110) || '未命名文章';
}

function titleAndBody(text) {
  const separator = text.indexOf('。');
  if (separator < 0) return { title: text.trim(), body: '' };
  return {
    title: text.slice(0, separator).trim(),
    body: text.slice(separator + 1).trim(),
  };
}

function sourceMeta(raw, fileName) {
  return {
    source: raw.match(/^>\s*数据源：(.+)$/m)?.[1]?.trim() || 'AI资讯日报',
    published: raw.match(/^>\s*发布时间：.*?(\d{4}-\d{2}-\d{2})/m)?.[1]
      || fileName.match(/\d{4}-\d{2}-\d{2}/)?.[0]
      || '',
    originalUrl: raw.match(/^>\s*发布时间：.*?原文：\[打开链接\]\((https?:\/\/[^)]+)\)/m)?.[1] || '',
  };
}

function splitArticles(raw) {
  const results = [];
  let category = '未分类';
  let current = null;

  function finish() {
    if (!current) return;
    const body = clean(current.lines.join('\n'));
    if (current.title) results.push({ ...current, body });
    current = null;
  }

  for (const line of raw.split('\n')) {
    const categoryHeading = line.match(/^###\s+(.+)$/);
    if (categoryHeading) {
      finish();
      category = categoryHeading[1].trim();
      continue;
    }

    // The daily digest uses one top-level list item per article. A following
    // image belongs to the article before the next list item or category.
    const articleLine = line.match(/^[-*+]\s+(.+)$/);
    if (articleLine && category !== '未分类') {
      finish();
      const parsed = titleAndBody(articleLine[1].trim());
      current = {
        category,
        title: parsed.title,
        url: parsed.body.match(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/)?.[1] || '',
        lines: parsed.body ? [parsed.body] : [],
      };
      continue;
    }

    // Stop collecting when the source leaves the article sections (for
    // example, the channel-promotion footer uses level-two headings).
    if (/^##\s+/.test(line)) {
      finish();
      category = '未分类';
      continue;
    }

    if (current) current.lines.push(line);
  }
  finish();
  return results.filter((article) => article.body);
}

function summary(body) {
  const paragraph = body.split(/\n\s*\n/).find(Boolean) || body;
  const compact = paragraph.replace(/\s+/g, ' ').trim();
  return `- ${compact.slice(0, 240)}${compact.length > 240 ? '……' : ''}`;
}

function tags(category) {
  return [...new Set(['#AI资讯日报', `#${category.replace(/\s+/g, '-')}`])].join(' ');
}

function hash(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('~')) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(entryPath));
    else if (entry.isFile() && /\.md$/i.test(entry.name)) files.push(entryPath);
  }
  return files;
}

function yamlScalar(raw = '') {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try { return JSON.parse(value); } catch { return value.slice(1, -1); }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
  return value;
}

function indexExistingOutputs(outputRootPath) {
  const index = new Map();
  for (const file of walkFiles(outputRootPath)) {
    const markdown = fs.readFileSync(file, 'utf8');
    const block = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
    if (!block) continue;
    const fields = {};
    for (const line of block.split(/\r?\n/)) {
      const match = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
      if (match) fields[match[1]] = yamlScalar(match[2]);
    }
    if (fields.original_file && fields.source_fragment) {
      index.set(`${fields.original_file}|${fields.source_fragment}`, fields.source_sha256 || '');
    }
  }
  return index;
}

function outputPathFor(article, published, sourceRootPath, outputRootPath) {
  const suffix = published ? ` (${published})` : '';
  const base = `${safeName(article.title)}${suffix}`;
  let candidate = path.join(outputRootPath, `${base}.md`);
  let index = 2;
  while (fs.existsSync(candidate)) {
    const existing = fs.readFileSync(candidate, 'utf8');
    if (existing.includes(`source_fragment: ${yaml(article.title)}`)
      && existing.includes(`original_file: ${yaml(path.relative(root, sourceRootPath).replace(/\\/g, '/'))}`)) {
      return candidate;
    }
    candidate = path.join(outputRootPath, `${base} - ${index}.md`);
    index++;
  }
  return candidate;
}

if (!fs.existsSync(sourceRoot)) {
  throw new Error(`找不到源目录：${sourceRoot}`);
}

fs.mkdirSync(outputRoot, { recursive: true });
const existingOutputs = indexExistingOutputs(outputRoot);
const stats = {
  source_files: 0,
  articles_found: 0,
  added: 0,
  updated: 0,
  skipped: 0,
  failed_validation: 0,
};

for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
  if (!entry.isFile() || !/\.md$/i.test(entry.name) || entry.name.startsWith('.') || entry.name.startsWith('~')) continue;

  stats.source_files++;
  const sourcePath = path.join(sourceRoot, entry.name);
  const sourceBuffer = fs.readFileSync(sourcePath);
  const raw = clean(sourceBuffer.toString('utf8'));
  const sourceSha = hash(sourceBuffer);
  const meta = sourceMeta(raw, entry.name);
  const relative = path.relative(root, sourcePath).replace(/\\/g, '/');
  const note = relative.replace(/\.md$/i, '');
  const articles = splitArticles(raw);
  stats.articles_found += articles.length;

  for (const article of articles) {
    const prior = existingOutputs.get(`${relative}|${article.title}`);
    if (prior === sourceSha) {
      stats.skipped++;
      continue;
    }
    const outputPath = outputPathFor(article, meta.published, sourcePath, outputRoot);
    const existed = fs.existsSync(outputPath);
    if (existed && fs.readFileSync(outputPath, 'utf8').includes(`source_sha256: ${sourceSha}`)) {
      stats.skipped++;
      continue;
    }

    const articleUrl = article.url || meta.originalUrl;
    const output = `---
title: ${yaml(article.title)}
source: ${yaml(meta.source)}
source_category: ${yaml(article.category)}
original_file: ${yaml(relative)}
source_note: ${yaml(`[[${note}]]`)}
source_fragment: ${yaml(article.title)}
source_sha256: ${sourceSha}
original_url: ${yaml(articleUrl)}
${meta.published ? `published: ${meta.published}\n` : ''}processed: ${processed}
language: zh-CN
---

# ${article.title}

> [!info] 来源信息
> - 数据源：${meta.source}
> - 所属分类：${article.category}
> - 发布时间：${meta.published || '原文未注明'}
> - 原文链接：${articleUrl ? `[打开原文](${articleUrl})` : '原文未提供'}
> - Vault 原文件：[[${note}|查看原始日报]]

## 摘要

${summary(article.body)}

## 正文

${article.body}

## 关键词

${tags(article.category)}
`;

    const validation = validateTranslatedNote(output, {
      sourceText: article.body,
      attempt: 1,
    });
    if (!validation.ok) {
      stats.failed_validation++;
      console.warn(JSON.stringify({ file: outputPath, title: article.title, validation }, null, 2));
      continue;
    }

    fs.writeFileSync(outputPath, output, 'utf8');
    existingOutputs.set(`${relative}|${article.title}`, sourceSha);
    if (existed) stats.updated++;
    else stats.added++;
  }
}

console.log(JSON.stringify(stats, null, 2));
if (stats.failed_validation) process.exitCode = 1;
