import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const vault = path.resolve(process.argv[2] || '.');
const skip = new Set(['Horizon Daily（中文摘要）', '掘金人工智能', 'arXiv cs.AI RSS', 'arXiv cs.LG RSS', 'EFF 数字权利动态', 'Stack Overflow Blog', 'Mozilla Hacks', 'NASA 每日天文图', 'GitHub Blog']);
const sourceRoot = path.join(vault, '信息源');
const validate = path.join(vault, 'scripts', 'validate-translated-note.mjs');
const day = new Date().toISOString().slice(0, 10);
const quote = (v) => JSON.stringify(String(v ?? ''));
const safe = (v) => v.replace(/[\\/:*?"<>|#^[\]]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120) || '未命名文章';
const hash = (b) => crypto.createHash('sha256').update(b).digest('hex');
const cjkRatio = (s) => { const c = (s.match(/[\u3400-\u9fff]/g) || []).length; const l = (s.match(/[A-Za-z]/g) || []).length; return c / Math.max(1, c + l); };
let created = 0, skipped = 0, failed = 0;

for (const dir of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
  if (!dir.isDirectory() || skip.has(dir.name)) continue;
  const outDir = path.join(vault, '整理', dir.name); fs.mkdirSync(outDir, { recursive: true });
  for (const entry of fs.readdirSync(path.join(sourceRoot, dir.name), { withFileTypes: true })) {
    if (!entry.isFile() || !/\.md$/i.test(entry.name) || entry.name.startsWith('.')) continue;
    const sourcePath = path.join(sourceRoot, dir.name, entry.name);
    let buf, raw;
    try { buf = fs.readFileSync(sourcePath); raw = buf.toString('utf8'); } catch (error) { console.error('读取失败：' + sourcePath + ' ' + error.message); failed++; continue; }
    const body = raw.split(/^------\s*$/m)[1]?.trim() || raw;
    const title = raw.match(/^#\s+(.+)$/m)?.[1]?.trim() || entry.name.replace(/\.md$/i, '');
    if (cjkRatio(title + '\n' + body) < 0.35) continue;
    const rel = path.relative(vault, sourcePath).replace(/\\/g, '/'); const target = rel.replace(/\.md$/i, '');
    const out = path.join(outDir, `${safe(title)}.md`); const sha = hash(buf);
    if (fs.existsSync(out) && fs.readFileSync(out, 'utf8').includes(`source_sha256: ${sha}`)) { skipped++; continue; }
    const url = raw.match(/原文：\[打开链接\]\((https?:\/\/[^)]+)\)/)?.[1] || '';
    const note = `---\ntitle: ${quote(title)}\nsource: ${quote(dir.name)}\noriginal_file: ${quote(rel)}\nsource_note: ${quote(`[[${target}]]`)}\nsource_sha256: ${sha}\noriginal_url: ${quote(url)}\nprocessed: ${day}\nlanguage: zh-CN\n---\n\n# ${title}\n\n> [!info] 来源信息\n> - 数据源：${dir.name}\n> - 原文链接：${url ? `[打开原文](${url})` : '原文未提供'}\n> - Vault 原文件：[[${target}|查看原始文件]]\n\n## 摘要\n\n- 原始来源为中文 RSS/网页条目，以下正文保留原文信息并统一排版。\n\n## 正文\n\n${body}\n\n## 关键词\n\n#${dir.name.replace(/\s+/g, '-')}`.replace(/[\u200B-\u200F\u202A-\u202E\u2060\uFEFF]/g, '');
    try { fs.writeFileSync(out, note, 'utf8'); } catch (error) { console.error('写入失败：' + out + ' ' + error.message); failed++; continue; }
    const check = spawnSync(process.execPath, [validate, out, `--source=${sourcePath}`, '--attempt=1'], { encoding: 'utf8', timeout: 120000 });
    if (check.status !== 0) { try { fs.unlinkSync(out); } catch {} console.error('校验未通过：' + out + '\n' + String(check.stdout || '')); failed++; } else created++;
  }
}
console.log(JSON.stringify({ created, skipped, failed }, null, 2));
if (failed) process.exitCode = 1;
