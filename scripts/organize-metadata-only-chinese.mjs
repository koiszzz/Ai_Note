import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const vault = path.resolve(process.argv[2] || '.');
const sourceName = process.argv[3] || '掘金人工智能';
const sourceDir = path.join(vault, '信息源', sourceName);
const outputDir = path.join(vault, '整理', sourceName);
fs.mkdirSync(outputDir, { recursive: true });

function yamlQuote(value) {
  return JSON.stringify(String(value));
}

function safeName(value) {
  return value.replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
}

let created = 0;
let skipped = 0;
let failed = 0;

for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
  if (!entry.isFile() || !/\.md$/i.test(entry.name)) continue;
  const sourcePath = path.join(sourceDir, entry.name);
  const sourceText = fs.readFileSync(sourcePath, 'utf8');
  const title = sourceText.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const author = sourceText.match(/^> 作者：(.+?)\s*[　|]\s*发布时间：/m)?.[1]?.trim();
  const publishedRaw = sourceText.match(/发布时间：(.+?)\s*[　|]\s*原文：/m)?.[1]?.trim();
  const originalUrl = sourceText.match(/原文：\[打开链接\]\((https?:\/\/[^)]+)\)/m)?.[1];
  const body = sourceText.split(/^------\s*$/m)[1]?.trim() || '';
  if (!title || !originalUrl || body !== title) {
    console.error(`跳过非“仅标题”文件：${sourcePath}`);
    failed++;
    continue;
  }
  const hash = crypto.createHash('sha256').update(fs.readFileSync(sourcePath)).digest('hex');
  const relativeSource = path.relative(vault, sourcePath).replace(/\\/g, '/');
  const wikiTarget = relativeSource.replace(/\.md$/i, '');
  const outputPath = path.join(outputDir, `${safeName(title)}.md`);
  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, 'utf8');
    if (existing.includes(`source_sha256: ${hash}`)) {
      const existingValidation = spawnSync(process.execPath, [path.join(vault, 'scripts', 'validate-translated-note.mjs'), outputPath, `--source=${sourcePath}`, '--attempt=1'], { encoding: 'utf8' });
      if (existingValidation.status === 0) {
        skipped++;
        continue;
      }
    }
  }
  const publishedDate = publishedRaw ? new Date(publishedRaw).toISOString().slice(0, 10) : '';
  const note = `---
title: ${yamlQuote(title)}
source: ${yamlQuote(sourceName)}
original_file: ${yamlQuote(relativeSource)}
source_note: ${yamlQuote(`[[${wikiTarget}]]`)}
source_sha256: ${hash}
original_url: ${originalUrl}
published: ${publishedDate}
processed: ${new Date().toISOString().slice(0, 10)}
language: zh-CN
---

# ${title}

> [!info] 来源信息
> - 数据源：${sourceName}
> - 作者：${author || '原始来源未提供'}
> - 发布时间：${publishedDate || '原始来源未提供'}
> - 原文链接：[打开原文](${originalUrl})
> - Vault 原文件：[[${wikiTarget}|查看原始文件]]

## 摘要

- 原始 RSS 条目仅提供文章标题及来源元数据，没有提供可供整理的正文或摘要。
- 条目标题为“${title}”，除此之外无法从原始文件可靠提取更多内容。
- 如需阅读全文，请通过来源信息中的原文链接访问原页面。

## 正文

原始来源仅提供标题，没有提供正文或摘要。为避免编造内容，此处不根据标题推测文章论点。

## 关键词

#人工智能 #掘金 #仅标题
`;
  fs.writeFileSync(outputPath, note, 'utf8');
  const validation = spawnSync(process.execPath, [path.join(vault, 'scripts', 'validate-translated-note.mjs'), outputPath, `--source=${sourcePath}`, '--attempt=1'], { encoding: 'utf8' });
  process.stdout.write(validation.stdout);
  process.stderr.write(validation.stderr);
  if (validation.status !== 0) {
    fs.rmSync(outputPath);
    failed++;
  } else {
    created++;
  }
}

console.log(JSON.stringify({ source: sourceName, created, skipped, failed }, null, 2));
process.exitCode = failed ? 1 : 0;
