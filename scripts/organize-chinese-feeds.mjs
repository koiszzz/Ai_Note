import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { validateTranslatedNote } from './validate-translated-note.mjs';

const root = path.resolve(process.argv[2] || '.');
const manuallyApprovedFragments = new Set(process.argv.slice(3).filter((arg) => arg.startsWith('--manual-approve-fragment=')).map((arg) => arg.slice('--manual-approve-fragment='.length)));
const sourceRoot = path.join(root, '信息源', 'Horizon Daily（中文摘要）');
const outputRoot = path.join(root, '整理', 'Horizon Daily（中文摘要）');
const processed = new Date().toISOString().slice(0, 10);

function clean(text) {
  return text.replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '')
    .replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim();
}

function safeName(value) {
  return value.replace(/[\\/:*?"<>|#^[\]]/g, '-').replace(/\s+/g, ' ').trim().slice(0, 110) || '未命名文章';
}

function yaml(value) {
  return `"${String(value || '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
}

function sourceMeta(raw) {
  const field = (label) => raw.match(new RegExp(`${label}：([^　\\n|]+)`))?.[1]?.trim() || '';
  return {
    source: field('数据源') || 'Horizon Daily（中文摘要）',
    published: field('发布时间').match(/\d{4}-\d{2}-\d{2}/)?.[0] || '',
    originalUrl: raw.match(/原文：\[打开链接\]\((https?:\/\/[^)]+)\)/)?.[1] || '',
  };
}

function splitArticles(raw) {
  const lines = raw.split('\n');
  const directHeadingMode = !lines.some((line) => /^###\s+/.test(line)) && lines.some((line) => /^##\s+\[[^\]]+\]\(https?:\/\//.test(line));
  const results = [];
  let category = '未分类';
  let current = null;
  for (const line of lines) {
    if (directHeadingMode && /^##\s+/.test(line)) {
      if (current) results.push(current);
      const heading = line.replace(/^##\s+/, '').trim();
      const linked = heading.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)(.*)$/);
      current = {
        category: '综合',
        title: (linked?.[1] || heading).replace(/\s*⭐️?\s*\d+(?:\.\d+)?\/10\s*$/, '').trim(),
        url: linked?.[2] || '',
        rating: linked?.[3]?.trim() || '',
        lines: [],
      };
      continue;
    }
    if (/^##\s+/.test(line) && !/^###\s+/.test(line)) {
      category = line.replace(/^##\s+/, '').trim();
      continue;
    }
    if (/^###\s+/.test(line)) {
      if (current) results.push(current);
      const heading = line.replace(/^###\s+/, '').trim();
      const linked = heading.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)(.*)$/);
      current = {
        category,
        title: (linked?.[1] || heading).replace(/\s*⭐️?\s*\d+(?:\.\d+)?\/10\s*$/, '').trim(),
        url: linked?.[2] || '',
        rating: linked?.[3]?.trim() || '',
        lines: [],
      };
    } else if (current) current.lines.push(line);
  }
  if (current) results.push(current);
  return results.map((item) => ({ ...item, body: clean(item.lines.join('\n')) })).filter((item) => item.body);
}

function summary(body) {
  const paragraph = body.split(/\n\s*\n/).find((part) => part.trim() && !/^(?:rss|telegram|hackernews)\s*·/i.test(part));
  return paragraph ? `- ${paragraph.replace(/\s+/g, ' ').slice(0, 240)}${paragraph.length > 240 ? '……' : ''}` : '- 原始条目未提供可用摘要。';
}

function tags(body, category) {
  const found = body.match(/^标签:\s*(.+)$/m)?.[1]?.split(/[,，]\s*/).map((tag) => tag.trim()).filter(Boolean) || [];
  const normalized = found.map((tag) => tag.startsWith('#') ? tag.replace(/\s+/g, '-') : `#${tag.replace(/\s+/g, '-')}`);
  return [...new Set([...normalized, `#${category.replace(/\s+/g, '-')}`])].slice(0, 10).join(' ');
}

fs.mkdirSync(outputRoot, { recursive: true });
const stats = { source_files: 0, articles_found: 0, added: 0, updated: 0, skipped: 0, failed_validation: 0 };

for (const name of fs.readdirSync(sourceRoot)) {
  if (!name.toLowerCase().endsWith('.md') || name.startsWith('.') || name.startsWith('~')) continue;
  stats.source_files++;
  const sourcePath = path.join(sourceRoot, name);
  const sourceBuffer = fs.readFileSync(sourcePath);
  const raw = clean(sourceBuffer.toString('utf8'));
  const sha = crypto.createHash('sha256').update(sourceBuffer).digest('hex');
  const meta = sourceMeta(raw);
  const rel = `信息源/Horizon Daily（中文摘要）/${name}`;
  const note = rel.replace(/\.md$/i, '');
  const articles = splitArticles(raw);
  stats.articles_found += articles.length;

  for (const article of articles) {
    const suffix = meta.published ? ` (${meta.published})` : '';
    const outPath = path.join(outputRoot, `${safeName(article.title)}${suffix}.md`);
    const existed = fs.existsSync(outPath);
    if (existed && fs.readFileSync(outPath, 'utf8').includes(`source_sha256: ${sha}`)) {
      stats.skipped++;
      continue;
    }
    const output = `---\ntitle: ${yaml(article.title)}\nsource: ${yaml(meta.source)}\nsource_category: ${yaml(article.category)}\noriginal_file: ${yaml(rel)}\nsource_note: ${yaml(`[[${note}]]`)}\nsource_fragment: ${yaml(article.title)}\nsource_sha256: ${sha}\noriginal_url: ${yaml(article.url || meta.originalUrl)}\n${meta.published ? `published: ${meta.published}\n` : ''}processed: ${processed}\nlanguage: zh-CN\n---\n\n# ${article.title}\n\n> [!info] 来源信息\n> - 数据源：${meta.source}\n> - 所属分类：${article.category}\n> - 发布时间：${meta.published || '原文未注明'}\n> - 原文链接：${article.url ? `[打开原文](${article.url})` : meta.originalUrl ? `[打开日报](${meta.originalUrl})` : '原文未提供'}\n> - Vault 原文件：[[${note}|查看原始日报]]\n\n## 摘要\n\n${summary(article.body)}\n\n## 正文\n\n${article.body}\n\n## 关键词\n\n${tags(article.body, article.category)}\n`;
    let validation = validateTranslatedNote(output, { sourceText: article.body, attempt: 1 });
    if (!validation.ok && manuallyApprovedFragments.has(article.title)) {
      validation = validateTranslatedNote(output, { sourceText: article.body, attempt: 2, manualApproved: true });
    }
    if (!validation.ok) {
      stats.failed_validation++;
      console.warn(JSON.stringify({ file: outPath, validation }, null, 2));
      continue;
    }
    fs.writeFileSync(outPath, output, 'utf8');
    existed ? stats.updated++ : stats.added++;
  }
}

console.log(JSON.stringify(stats, null, 2));
if (stats.failed_validation) process.exitCode = 1;
