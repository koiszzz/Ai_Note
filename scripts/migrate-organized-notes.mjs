/**
 * 整理稿迁移脚本（覆盖式）
 *
 * 功能：
 * 1. 只处理散落在“整理/<数据源>/”下的平铺 .md 文件（已进入日期目录的文件不处理）。
 * 2. 日期确定优先级：frontmatter 的 published（默认优先）→ processed → 当天日期；统一格式为 YYYYMMDD。
 * 3. 覆盖式移动到“整理/<数据源>/<YYYYMMDD>/<文章>.md”：目标已存在时直接覆盖，不产生 -N 后缀副本。
 * 4. 移动完成后，在每个数据源目录（整理/<数据源>/，含其下全部日期子目录）内按
 *    （内容 SHA-256，文章标题）分组查重：同一数据源目录内存在多个哈希与标题一致的文件时，
 *    保留刚移入的文件（或按文件名排序的第一个），删除其余重复文件。
 * 5. 按数据源目录统计：待迁移、已迁移、覆盖更新、失败、删除的重复文件，并做数量核对：
 *    迁移后文件总数应等于迁移前总数 − 删除的重复数 − 覆盖更新数，失败为 0，
 *    处理后数据源根目录不得残留 .md 文件。
 *
 * 用法：
 *   node scripts/migrate-organized-notes.mjs [--vault=.] [--source=<数据源>] [--dry] [--check-only]
 *
 * 说明：
 * - --source 只处理指定的单个数据源，用于小范围测试。
 * - --dry 只统计与打印计划，不写盘；--check-only 只核对当前状态，不迁移。
 * - 脚本只做机械操作（解析 frontmatter、移动、覆盖、去重删除），不修改正文与源文件。
 * - 使用 fs.unlinkSync 删除旧文件，避免 Windows 上 fs.rmSync 的原生崩溃。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const args = process.argv.slice(2);
let vaultRoot = '.';
let onlySource = null;
let DRY = false;
let CHECK_ONLY = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vaultRoot = arg.slice('--vault='.length);
  else if (arg.startsWith('--source=')) onlySource = arg.slice('--source='.length);
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

function sha256(buf) { return crypto.createHash('sha256').update(buf).digest('hex'); }

const pad = (n) => String(n).padStart(2, '0');

// 任意可识别的日期写法 → YYYYMMDD；无法识别返回 null
function normalizeToYmd(value) {
  const s = String(value).trim();
  if (/^\d{8}$/.test(s)) return s;
  const m1 = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m1) return `${m1[1]}${pad(m1[2])}${pad(m1[3])}`;
  const m2 = s.match(/^(\d{4})[年/](\d{1,2})[月/](\d{1,2})/);
  if (m2) return `${m2[1]}${pad(m2[2])}${pad(m2[3])}`;
  return null;
}

function todayYmd() {
  const d = new Date();
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
}

function titleOf(markdown, fallback) {
  const fm = parseFrontmatter(markdown);
  const t = fm && unquote(fieldValue(fm.block, 'title'));
  return (t && t.length > 0) ? t : fallback;
}

// ---------- 收集数据源目录 ----------
const sourceDirs = fs.readdirSync(outputRoot, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);
const sources = onlySource ? sourceDirs.filter((s) => s === onlySource) : sourceDirs;
if (onlySource && sources.length === 0) {
  console.error(`[ERROR] 未找到数据源目录：${onlySource}`);
  process.exit(2);
}

// ---------- 计划阶段：解析日期与目标路径 ----------
const beforeTotal = walk(outputRoot).length;
const plans = []; // { out, target, sourceName, dateDir, usedField }
const skipped = []; // 非平铺位置的文件（日期目录内等），不处理
for (const src of sources) {
  const srcDir = path.join(outputRoot, src);
  if (!fs.existsSync(srcDir)) continue;
  for (const e of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (!e.isFile() || e.name.startsWith('.') || e.name.startsWith('~') || !/\.md$/i.test(e.name)) continue;
    const out = path.join(srcDir, e.name);
    let md;
    try { md = fs.readFileSync(out, 'utf8'); } catch (err) { skipped.push({ out, reason: `读取失败：${err.message}` }); continue; }
    const fm = parseFrontmatter(md);
    let date = null;
    let usedField = 'today';
    for (const f of ['published', 'processed']) {
      const v = unquote(fm && fieldValue(fm.block, f));
      if (v && v.toLowerCase() !== 'null' && v !== '') {
        const y = normalizeToYmd(v);
        if (y) { date = y; usedField = f; break; }
      }
    }
    if (!date) date = todayYmd();
    plans.push({ out, target: path.join(outputRoot, src, date, e.name), sourceName: src, dateDir: date, usedField });
  }
}

// ---------- 去重计划（数据源目录：相同内容哈希 + 相同标题） ----------
function dedupPlan(sourceNames, movedTargets = null) {
  const deletions = []; // { path, reason }
  for (const name of sourceNames.sort()) {
    const folder = path.join(outputRoot, name);
    const files = walk(folder).sort();
    const groups = new Map(); // key -> { moved: path|null, others: [] }
    for (const f of files) {
      const buf = fs.readFileSync(f);
      const key = `${sha256(buf)}|${titleOf(buf.toString('utf8'), path.basename(f, '.md'))}`;
      if (!groups.has(key)) groups.set(key, { moved: null, others: [] });
      const g = groups.get(key);
      if (movedTargets && movedTargets.has(path.normalize(f).toLowerCase())) g.moved = f;
      else g.others.push(f);
    }
    for (const g of groups.values()) {
      const all = g.moved ? [g.moved, ...g.others] : g.others;
      if (all.length <= 1) continue;
      const keep = g.moved || all[0];
      for (const f of all) {
        if (f !== keep) deletions.push({ path: f, reason: `与 ${path.basename(keep)} 内容哈希与标题一致` });
      }
    }
  }
  return deletions;
}

const plannedDeletions = dedupPlan(sources);

// ---------- 按数据源目录统计 ----------
const perDir = new Map();
const stat = (name) => {
  if (!perDir.has(name)) perDir.set(name, { total: 0, moved: 0, overwritten: 0, failed: 0, deleted: 0 });
  return perDir.get(name);
};
for (const p of plans) stat(p.sourceName).total++;
const countDeletions = (list) => {
  for (const d of list) {
    const rel = path.relative(outputRoot, d.path).split(path.sep);
    if (rel.length >= 2) stat(rel[0]).deleted++;
  }
};
const totalPending = plans.length;
const fieldCounts = { published: 0, processed: 0, today: 0 };
for (const p of plans) fieldCounts[p.usedField]++;

if (CHECK_ONLY) {
  countDeletions(plannedDeletions);
  console.log('==== 当前状态核对（--check-only，不迁移） ====');
  for (const [name, s] of [...perDir.entries()].sort()) {
    console.log(`${name.padEnd(24)} 待迁移 ${String(s.total).padStart(4)} | 将删除重复 ${String(s.deleted).padStart(3)}`);
  }
  console.log(`\n日期来源：published ${fieldCounts.published} | processed ${fieldCounts.processed} | 当天 ${fieldCounts.today}`);
  console.log(`待迁移合计：${totalPending}，将删除重复：${plannedDeletions.length}`);
  process.exit(0);
}

// ---------- 打印计划 ----------
if (DRY) console.log('==== 迁移计划（--dry，不写盘） ====');
else console.log('==== 迁移明细 ====');
for (const p of plans) {
  const rel = path.relative(vaultRoot, p.out).replace(/\\/g, '/');
  const target = path.relative(vaultRoot, p.target).replace(/\\/g, '/');
  const flag = DRY ? '[DRY]' : '';
  console.log(`${flag} ${p.usedField.padEnd(9)} ${rel}  →  ${target}`);
}

// ---------- 执行阶段 ----------
let moved = 0;
let overwritten = 0;
let failed = 0;
let dupDeletions = [];
if (!DRY && !CHECK_ONLY) {
  const movedTargets = new Set();
  for (const p of plans) {
    try {
      fs.mkdirSync(path.dirname(p.target), { recursive: true });
      const existed = fs.existsSync(p.target);
      fs.writeFileSync(p.target, fs.readFileSync(p.out));
      fs.unlinkSync(p.out);
      moved++;
      stat(p.sourceName).moved++;
      if (existed) { overwritten++; stat(p.sourceName).overwritten++; }
      movedTargets.add(path.normalize(p.target).toLowerCase());
    } catch (e) {
      failed++;
      stat(p.sourceName).failed++;
      console.error(`[FAIL] ${p.out}: ${e.message}`);
    }
  }
  // 移动完成后，基于实际落盘内容计算重复（哈希+标题一致），并删除重复副本
  dupDeletions = dedupPlan(sources, movedTargets);
  for (const d of dupDeletions) {
    try {
      fs.unlinkSync(d.path);
      const rel = path.relative(outputRoot, d.path).split(path.sep);
      if (rel.length >= 2) stat(rel[0]).deleted++;
    } catch (e) { console.error(`[FAIL-DEL] ${d.path}: ${e.message}`); }
  }
} else if (DRY) {
  dupDeletions = plannedDeletions;
}

// ---------- 数量核对 ----------
const afterTotal = walk(outputRoot).length;
const flatLeft = [];
for (const src of sources) {
  const srcDir = path.join(outputRoot, src);
  if (!fs.existsSync(srcDir)) continue;
  for (const e of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (e.isFile() && /\.md$/i.test(e.name)) flatLeft.push(path.join(srcDir, e.name));
  }
}
const dupLeft = dedupPlan(sources);

const totalMoved = [...perDir.values()].reduce((a, s) => a + s.moved, 0);
const totalFailed = [...perDir.values()].reduce((a, s) => a + s.failed, 0);
const totalDupDeletions = dupDeletions.length;
const countOk = failed === 0
  && afterTotal === beforeTotal - totalDupDeletions - overwritten
  && flatLeft.length === 0
  && dupLeft.length === 0;
process.exitCode = countOk ? 0 : 1;

console.log('\n==== 汇总 ====');
console.log(`迁移前文件总数：${beforeTotal}`);
console.log(`待迁移（平铺文件）：${totalPending}`);
console.log(`已迁移：${totalMoved}（其中覆盖更新 ${overwritten}）`);
console.log(`失败：${totalFailed}`);
console.log(`日期来源：published ${fieldCounts.published} | processed ${fieldCounts.processed} | 当天 ${fieldCounts.today}`);
if (skipped.length > 0) {
  console.log(`跳过（读取失败，未迁移）：${skipped.length}`);
  for (const s of skipped) console.log(`  [SKIPPED] ${s.out}（${s.reason}）`);
}
console.log(`删除的重复文件：${totalDupDeletions}`);
for (const d of dupDeletions) console.log(`  [DUP-DEL] ${d.path}（${d.reason}）`);
console.log(`迁移后文件总数：${afterTotal}`);
console.log(`处理后仍留在数据源根目录的 .md：${flatLeft.length}`);
for (const f of flatLeft) console.log(`  [FLAT-LEFT] ${f}`);
console.log(`数据源目录剩余重复（哈希+标题一致）：${dupLeft.length}`);

console.log('\n==== 数量核对 ====');
console.log(`失败为 0：${failed === 0 ? '通过' : '不通过'}`);
console.log(`前后总数一致（${afterTotal} == ${beforeTotal} - ${totalDupDeletions} - ${overwritten}）：${afterTotal === beforeTotal - totalDupDeletions - overwritten ? '通过' : '不通过'}`);
console.log(`数据源根目录无残留平铺文件：${flatLeft.length === 0 ? '通过' : '不通过'}`);
console.log(`数据源目录无重复文件（哈希+标题一致）：${dupLeft.length === 0 ? '通过' : '不通过'}`);
console.log(`核对结果：${countOk ? '通过（ok: true）' : '不通过（ok: false）'}`);
