import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { auditVault } from './audit-organized-notes.mjs';

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'obsidian-audit-'));
  fs.mkdirSync(path.join(root, '信息源', '测试源'), { recursive: true });
  fs.mkdirSync(path.join(root, '整理', '测试源'), { recursive: true });
  return root;
}

function source(root, name, body) {
  const relative = `信息源/测试源/${name}.md`;
  fs.writeFileSync(path.join(root, ...relative.split('/')), body, 'utf8');
  return { relative, hash: crypto.createHash('sha256').update(Buffer.from(body)).digest('hex') };
}

function output(root, name, original, body, extra = '') {
  const markdown = `---\ntitle: "测试整理稿"\nsource: "测试源"\noriginal_file: "${original.relative}"\nsource_sha256: ${original.hash}\nlanguage: zh-CN\n${extra}---\n\n# 测试整理稿\n\n## 摘要\n\n- 这是忠于原文内容的测试摘要，用于确认审计脚本能够识别完整且有效的中文整理结果。\n\n## 正文\n\n${body}\n\n## 关键词\n\n#测试 #审计 #中文\n`;
  fs.writeFileSync(path.join(root, '整理', '测试源', `${name}.md`), markdown, 'utf8');
}

const chineseBody = '这是用于审计测试的完整中文正文。'.repeat(40);

test('全部源文件覆盖且输出通过时审计成功', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const original = source(root, '完整文章', chineseBody);
  output(root, '完整文章', original, chineseBody);
  const result = auditVault(root);
  assert.equal(result.ok, true);
  assert.equal(result.exit_code, 0);
  assert.equal(result.pending_source_files, 0);
  assert.equal(result.failed_outputs, 0);
});

test('存在未整理源文件时审计失败', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  source(root, '待处理文章', chineseBody);
  const result = auditVault(root);
  assert.equal(result.ok, false);
  assert.equal(result.exit_code, 1);
  assert.equal(result.pending_source_files, 1);
});

test('源文件变化后旧哈希不能通过', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const original = source(root, '变化文章', chineseBody);
  output(root, '变化文章', original, chineseBody);
  fs.appendFileSync(path.join(root, ...original.relative.split('/')), '新增内容', 'utf8');
  const result = auditVault(root);
  assert.equal(result.ok, false);
  assert.equal(result.changed_source_files, 1);
  assert.equal(result.failed_outputs, 1);
});

test('源文件仅新增发布时间标记时审计仍通过', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const sourceText = `> 原文：[打开链接](https://example.com)\n\n${chineseBody}`;
  const original = source(root, '标记文章', sourceText);
  output(root, '标记文章', original, chineseBody);
  const sourcePath = path.join(root, ...original.relative.split('/'));
  fs.writeFileSync(sourcePath, `> 发布时间：2026-08-06　|　原文：[打开链接](https://example.com)\n\n${chineseBody}`, 'utf8');
  const result = auditVault(root);
  assert.equal(result.ok, true);
  assert.equal(result.exit_code, 0);
  assert.equal(result.pending_source_files, 0);
  assert.equal(result.changed_source_files, 0);
  assert.equal(result.failed_outputs, 0);
  assert.equal(result.published_marker_only_outputs, 1);
});

test('合集缺少任一 source_fragment 时不能算覆盖', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const collection = `# 合集\n\n### [第一篇](https://example.com/one)\n\n${chineseBody}\n\n### [第二篇](https://example.com/two)\n\n${chineseBody}`;
  const original = source(root, '合集', collection);
  output(root, '第一篇', original, chineseBody, 'source_fragment: "第一篇"\n');
  const result = auditVault(root);
  assert.equal(result.ok, false);
  assert.equal(result.pending_source_files, 1);
  assert.equal(result.details.missing_fragments.total, 1);
  assert.deepEqual(result.details.missing_fragments.shown[0].missing, ['第二篇']);
});

test('AI资讯日报按列表项核对每篇 source_fragment', (t) => {
  const root = fixture();
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const sourceDir = path.join(root, '信息源', 'AI资讯日报');
  const outputDir = path.join(root, '整理', 'AI资讯日报');
  fs.mkdirSync(sourceDir, { recursive: true });
  fs.mkdirSync(outputDir, { recursive: true });
  const body = '这是用于列表项拆分测试的完整中文正文。'.repeat(40);
  const collection = `# 2026-08-05日刊\n\n### 产品与功能更新\n\n- 第一篇。${body}\n\n- 第二篇。${body}\n\n## AI资讯日报多渠道`;
  const sourcePath = path.join(sourceDir, '2026-08-05日刊.md');
  fs.writeFileSync(sourcePath, collection, 'utf8');
  const original = {
    relative: '信息源/AI资讯日报/2026-08-05日刊.md',
    hash: crypto.createHash('sha256').update(Buffer.from(collection)).digest('hex'),
  };
  output(root, '第一篇', original, body, 'source_fragment: "第一篇"\n');
  const result = auditVault(root);
  assert.equal(result.ok, false);
  assert.equal(result.pending_source_files, 1);
  assert.deepEqual(result.details.missing_fragments.shown[0].missing, ['第二篇']);
});
