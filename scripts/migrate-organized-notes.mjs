/**
 * 整理稿迁移与规范化脚本
 *
 * 功能：
 * 1. 为所有整理稿补充 published（文章原始发布日期），并确保它是 YAML frontmatter 的第一个属性。
 *    published 的确定优先级：已有 published → 源文件头部“发布时间”行 → original_url 中的 /YYYY/MM/DD/ → 文件名中的 YYYY-MM-DD。
 *    全部无法确定时保留 published: null，并放入 unknown 日期目录。
 * 2. 把所有整理稿移动到“整理/<数据源>/<YYYYMMDD|unknown>/<文章>.md”的日期目录结构。
 * 3. 按数据源目录统计：待迁移数、已迁移数、无需变更数、失败数、删除的重复副本数。
 * 4. 迁移完成后自动核对数量：迁移前后文件总数应一致；每个目录已迁移数应等于待迁移数；
 *    完成后整理/ 下不应有任何文件留在非日期目录。核对失败时退出码为 1。
 *
 * 用法：
 *   node scripts/migrate-organized-notes.mjs [--vault=.] [--dry] [--check-only]
 *
 * 说明：
 * - 脚本只做机械操作（解析、重排 frontmatter、移动文件），不代替 LLM 翻译或整理正文。
 * - 使用 fs.unlinkSync 删除旧文件，避免 Windows 上 fs.rmSync 的原生崩溃。
 * - 幂等：重复运行不会产生副作用；已处于正确位置且 published 正确的文件计入“无需变更”。
 * - 移动会改变 git 视角下文件的路径（旧路径显示为删除、新路径为未跟踪），属正常现象。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const vault = process.cwd();
const args = process.argv.slice(2);
let vaultRoot = '.';
let DRY = false;
let CHECK_ONLY = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vaultRoot = arg.slice('--vault='.length);
  else if (arg === '--dry') DRY = true;
  else if (arg === '--check-only') CHECK_ONLY = true;
  else throw new Error(`未知参数：${arg}`);
}
const outputRoot = path.join(vaultRoot, '整理');

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

function parseFrontmatter(markdown) {
  const m = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!m) return null;
  return { block: m[1], raw: m[0] };
}

function fieldValue(block, name) {
  for (const line of block.split(/\r?\n/)) {
    const m = line.match(new RegExp(`^${name}:\\s*(.*)$`));
    if (m) return m[1].trim();
  }
  return undefined;
}

function unquote(v) {
  if (!v) return v;
  if (v.startsWith('"') && v.endsWith('"')) { try { return JSON.parse(v); } catch { return v.slice(1, -1); } }
  if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  return v;
}

function parseSourceDate(text) {
  const p1 = text.match(/发布时间[:：]\s*(?:[A-Za-z]{3,9},\s*)?(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})/);
  const months = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
  if (p1 && months[p1[2]] !== undefined) {
    return `${p1[3]}-${String(months[p1[2]]).padStart(2, '0')}-${String(Number(p1[1])).padStart(2, '0')}`;
  }
  const p2 = text.match(/发布时间[:：]\s*(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/);
  if (p2) return `${p2[1]}-${String(Number(p2[2])).padStart(2, '0')}-${String(Number(p2[3])).padStart(2, '0')}`;
  return null;
}

function parseUrlDate(url) {
  const m = url && url.match(/\/(\d{4})\/(\d{1,2})\/(\d{1,2})\//);
  if (m) return `${m[1]}-${String(Number(m[2])).padStart(2, '0')}-${String(Number(m[3])).padStart(2, '0')}`;
  return null;
}

function parseNameDate(name) {
  const m = name.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  return null;
}

function normalizeDate(d) {
  const m = String(d).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return `${m[1]}${m[2]}${m[3]}`;
  return null;
}

function isInDateDir(relParts) {
  return relParts.length === 3 && /^\d{8}$|^unknown$/.test(relParts[1]);
}

const outputs = walk(outputRoot);
const beforeTotal = outputs.length;

// ---------- 预清理：删除内容相同的 -N 后缀重复副本 ----------
function sha256(buf) { return crypto.createHash('sha256').update(buf).digest('hex'); }
function originalFileOf(md) {
  const m = md.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return undefined;
  const f = m[1].match(/^original_file:\s*(.+)$/m);
  return f ? f[1].trim().replace(/^"|"$/g, '') : undefined;
}
const shaCache = new Map();
const origCache = new Map();
for (const o of outputs) {
  const buf = fs.readFileSync(o);
  shaCache.set(o, sha256(buf));
  origCache.set(o, originalFileOf(buf.toString('utf8')));
}
const dupCopies = new Set();
for (const o of outputs) {
  const base = path.basename(o);
  const m = base.match(/^(.*)-(\d+)(\.md)$/i);
  if (!m) continue;
  const mainPath = path.join(path.dirname(o), `${m[1]}${m[3]}`);
  if (!fs.existsSync(mainPath)) continue;
  // 内容相同，或指向同一 original_file（旧内容副本）→ 视为重复副本
  const isDup = shaCache.get(o) === shaCache.get(mainPath)
    || (origCache.get(o) && origCache.get(o) === origCache.get(mainPath));
  if (isDup) dupCopies.add(o);
}
let dupRemoved = 0;
for (const o of dupCopies) {
  if (!DRY && !CHECK_ONLY) {
    try { fs.unlinkSync(o); dupRemoved++; } catch (e) { console.error(`[FAIL-DEL] ${o}: ${e.message}`); }
  }
}
const scanned = outputs.filter((o) => !dupCopies.has(o));

// ---------- 计划阶段：解析 published 与目标路径 ----------
const plans = []; // { out, target, content, baseName, sourceName, dateDir, date, needMove, needRewrite }
const unresolved = [];
for (const out of scanned) {
  try {
    const md = fs.readFileSync(out, 'utf8');
    const fm = parseFrontmatter(md);
    if (!fm) { unresolved.push({ out, reason: '无 frontmatter' }); continue; }
    const lines = fm.block.split(/\r?\n/);
    const origFile = unquote(fieldValue(fm.block, 'original_file'));
    const url = unquote(fieldValue(fm.block, 'original_url'));
    const existingPub = unquote(fieldValue(fm.block, 'published'));

    let date = null;
    if (existingPub && existingPub.toLowerCase() !== 'null' && existingPub !== '') date = existingPub;
    else {
      const srcAbs = origFile ? path.join(vaultRoot, origFile) : null;
      if (srcAbs && fs.existsSync(srcAbs)) date = parseSourceDate(fs.readFileSync(srcAbs, 'utf8'));
      if (!date) date = parseUrlDate(url);
      if (!date) date = parseNameDate(path.basename(out));
    }

    const dateDir = date ? (normalizeDate(date) || 'unknown') : 'unknown';
    if (!date) unresolved.push({ out, reason: '无法确定发布日期' });
    const sourceName = origFile ? origFile.split('/')[1] : '(none)';
    const baseName = path.basename(out);
    const target = path.join(outputRoot, sourceName, dateDir, baseName);

    const hasPub = lines.some((l) => /^published:\s*/.test(l));
    const pubFirst = hasPub && /^published:\s*/.test(lines[0]);
    let content;
    if (hasPub) {
      const pubLine = lines.find((l) => /^published:\s*/.test(l));
      content = md.replace(fm.raw, `---\n${[pubLine, ...lines.filter((l) => !/^published:\s*/.test(l))].join('\n')}\n---\n`);
    } else {
      content = md.replace(fm.raw, `---\n${[`published: ${date || 'null'}`, ...lines].join('\n')}\n---\n`);
    }

    const samePath = path.normalize(target).toLowerCase() === path.normalize(out).toLowerCase();
    const needMove = !samePath;
    const needRewrite = !pubFirst;
    plans.push({ out, target, content, baseName, sourceName, dateDir, date, needMove, needRewrite });
  } catch (e) {
    unresolved.push({ out, reason: `读取失败：${e.message}` });
  }
}

// ---------- 冲突处理：同一目标多份 ----------
const byTarget = new Map();
for (const p of plans) {
  const k = path.normalize(p.target).toLowerCase();
  if (!byTarget.has(k)) byTarget.set(k, []);
  byTarget.get(k).push(p);
}
const finalPlans = [];
const drop = new Set();
for (const [k, group] of byTarget) {
  if (group.length === 1) { finalPlans.push(group[0]); continue; }
  const seenContent = new Map();
  let idx = 0;
  for (const p of group) {
    const h = sha256(Buffer.from(p.content, 'utf8'));
    if (seenContent.has(h)) { drop.add(p.out); continue; }
    seenContent.set(h, p.out);
    if (idx > 0) {
      const ext = path.extname(p.baseName);
      p.target = path.join(path.dirname(p.target), `${path.basename(p.baseName, ext)}-${idx}${ext}`);
    }
    idx++;
    finalPlans.push(p);
  }
}

// ---------- 按数据源目录统计 ----------
const perDir = new Map(); // sourceName -> { total, pending, done, unchanged, failed }
const stat = (name) => {
  if (!perDir.has(name)) perDir.set(name, { total: 0, pending: 0, done: 0, unchanged: 0, failed: 0 });
  return perDir.get(name);
};
for (const p of finalPlans) stat(p.sourceName).total++;
for (const p of finalPlans) {
  const s = stat(p.sourceName);
  if (p.needMove || p.needRewrite) s.pending++;
  else s.unchanged++;
}

// ---------- 执行阶段 ----------
let dropRemoved = 0;
if (!CHECK_ONLY) {
  let moved = 0, rewritten = 0, failed = 0;
  for (const p of finalPlans) {
    if (!p.needMove && !p.needRewrite) continue;
    try {
      fs.mkdirSync(path.dirname(p.target), { recursive: true });
      fs.writeFileSync(p.target, p.content, 'utf8');
      if (p.needMove) { fs.unlinkSync(p.out); moved++; stat(p.sourceName).done++; }
      else { rewritten++; stat(p.sourceName).done++; }
    } catch (e) {
      failed++;
      stat(p.sourceName).failed++;
      console.error(`[FAIL] ${p.out}: ${e.message}`);
    }
  }
  for (const d of drop) {
    try { fs.unlinkSync(d); dropRemoved++; } catch { /* ignore */ }
  }
  if (!DRY) {
    // 清理空目录
    let changed = true;
    while (changed) {
      changed = false;
      for (const e of fs.readdirSync(outputRoot, { withFileTypes: true })) {
        if (!e.isDirectory()) continue;
        for (const ie of fs.readdirSync(path.join(outputRoot, e.name), { withFileTypes: true })) {
          if (!ie.isDirectory()) continue;
          const ip = path.join(outputRoot, e.name, ie.name);
          try { if (fs.readdirSync(ip).length === 0) { fs.rmdirSync(ip); changed = true; } } catch { /* ignore */ }
        }
      }
    }
  }
}

// ---------- 数量核对 ----------
const afterOutputs = walk(outputRoot);
const afterTotal = afterOutputs.length;
let notInDateDir = 0;
const misplaced = [];
for (const o of afterOutputs) {
  const rel = path.relative(outputRoot, o).split(path.sep);
  if (!isInDateDir(rel)) { notInDateDir++; misplaced.push(o); }
}
const totalPending = [...perDir.values()].reduce((a, s) => a + s.pending, 0);
const totalDone = [...perDir.values()].reduce((a, s) => a + s.done, 0);
const totalFailed = [...perDir.values()].reduce((a, s) => a + s.failed, 0);

const countOk = (afterTotal === beforeTotal - dupRemoved - dropRemoved)
  && notInDateDir === 0
  && totalFailed === 0
  && (CHECK_ONLY || totalDone === totalPending);
const exitCode = countOk ? 0 : 1;

// ---------- 输出报告 ----------
console.log('==== 迁移统计（按数据源目录） ====');
for (const [name, s] of [...perDir.entries()].sort()) {
  console.log(
    `${name.padEnd(24)} 总计 ${String(s.total).padStart(4)} | 待迁移 ${String(s.pending).padStart(4)} | 已迁移 ${String(s.done).padStart(4)} | 无需变更 ${String(s.unchanged).padStart(4)} | 失败 ${String(s.failed).padStart(2)}`
  );
}
console.log('\n==== 汇总 ====');
console.log(`迁移前文件总数：${beforeTotal}`);
console.log(`删除的重复副本：${dupRemoved}（-N 后缀且与主文件同源的内容副本）`);
console.log(`同目标去重丢弃：${dropRemoved}`);
console.log(`迁移后文件总数：${afterTotal}`);
console.log(`待迁移合计：${totalPending} | 已迁移合计：${totalDone} | 失败：${totalFailed}`);
console.log(`无法确定日期的文件：${unresolved.length}`);
for (const u of unresolved) console.log(`  [NO-DATE] ${u.out}（${u.reason}）`);
console.log(`迁移后仍在非日期目录的文件：${notInDateDir}`);
for (const m of misplaced) console.log(`  [MISPLACED] ${m}`);

console.log('\n==== 数量核对 ====');
console.log(`前后总数一致（${afterTotal} == ${beforeTotal} - ${dupRemoved} - ${dropRemoved}）：${afterTotal === beforeTotal - dupRemoved - dropRemoved ? '通过' : '不通过'}`);
console.log(`无文件残留非日期目录：${notInDateDir === 0 ? '通过' : '不通过'}`);
console.log(`每个目录已迁移数 == 待迁移数（失败为 0）：${totalFailed === 0 && (CHECK_ONLY || totalDone === totalPending) ? '通过' : '不通过'}`);
console.log(`核对结果：${countOk ? '通过（ok: true）' : '不通过（ok: false）'}`);
process.exitCode = exitCode;
