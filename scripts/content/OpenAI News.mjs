/**
 * OpenAI News 文章正文抓取脚本
 *
 * 功能：
 * 1. 抓取 openai.com 文章页面（RSS 条目通常只含标题/摘要，正文需要访问原文页面）。
 * 2. 从 HTML 中提取标题与正文，去除导航、页脚、脚本等非正文内容，代码块保留为围栏。
 * 3. URL 来源两种方式：--url 直接指定，或 --all 扫描 Vault 中本源的整理稿 frontmatter 的 original_url。
 * 4. 默认输出到 stdout；指定 --out=<目录> 时按“文章标题.md”写入抓取结果。
 *
 * 用法：
 *   node "scripts/content/OpenAI News.mjs" --url="https://openai.com/index/unrolling-the-codex-agent-loop"
 *   node "scripts/content/OpenAI News.mjs" --url="https://...url1" --url="https://...url2" --out="临时正文目录"
 *   node "scripts/content/OpenAI News.mjs" --all --vault="." --out="临时正文目录"
 *   node "scripts/content/OpenAI News.mjs" --all --dry
 *   node "scripts/content/OpenAI News.mjs" --url="https://..." --proxy="http://localhost:10800"
 *
 * 说明：
 * - 抓取策略：Node fetch 直连 → curl 直连 → curl 走代理（--proxy 或环境变量 HTTPS_PROXY/HTTP_PROXY）。
 *   站点返回 Cloudflare 挑战页时自动换下一策略并重试（最多 3 轮，含退避等待）。
 * - 本脚本只抓取与提取，不修改 信息源/ 与 整理/ 下的任何文件；是否更新笔记由后续处理决定。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const args = new Map(process.argv.slice(2).map((arg) => {
  const [key, ...value] = arg.replace(/^--/, '').split('=');
  return [key, value.join('=') || true];
}));
const vault = path.resolve(String(args.get('vault') || process.cwd()));
const outDir = args.has('out') ? path.resolve(String(args.get('out'))) : null;
const dryRun = args.has('dry');
// 直连被反爬（Cloudflare 挑战）时使用的代理；默认取环境变量，也可 --proxy 显式指定
const proxyUrl = String(args.get('proxy') || '')
  || process.env.HTTPS_PROXY || process.env.HTTP_PROXY || '';

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

// ---------- URL 收集 ----------
const urls = [];
for (const arg of process.argv.slice(2)) {
  if (arg.startsWith('--url=')) urls.push(arg.slice('--url='.length));
}
if (args.has('all')) {
  const noteRoot = path.join(vault, '整理', 'OpenAI News');
  for (const f of walk(noteRoot)) {
    const m = fs.readFileSync(f, 'utf8').match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
    const u = m && m[1].match(/^original_url:\s*(.+)$/m);
    if (u) {
      let v = u[1].trim();
      if (v.startsWith('"') && v.endsWith('"')) { try { v = JSON.parse(v); } catch { v = v.slice(1, -1); } }
      if (v && !urls.includes(v)) urls.push(v);
    }
  }
}
const uniqueUrls = [...new Set(urls)];
if (uniqueUrls.length === 0) {
  console.error('未提供 URL。用法：--url=<原文链接>（可多个），或 --all 扫描 Vault 整理稿的 original_url。');
  process.exit(2);
}

// ---------- 抓取（fetch 优先，curl 回退；挑战页检测 + 重试） ----------
function requestHeaders() {
  return {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
  };
}

async function fetchViaFetch(url) {
  const res = await fetch(url, { headers: requestHeaders(), redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.text();
}

// 某些网络环境下 Node 的 TLS 连接会被代理重置或指纹被识别；curl 会自动使用
// HTTPS_PROXY/HTTP_PROXY，因此仅在 fetch 失败或返回挑战页时作为兼容回退。
async function fetchViaCurl(url, proxy = '') {
  const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
  const h = requestHeaders();
  const argsList = ['-L', '--silent', '--show-error', '--max-time', '60', '-A', h['user-agent'], '-H', `accept: ${h.accept}`, '-H', `accept-language: ${h['accept-language']}`];
  if (proxy) argsList.push('--proxy', proxy);
  argsList.push(url);
  let result;
  try {
    result = await execFileAsync(curl, argsList, { encoding: null, maxBuffer: 16 * 1024 * 1024 });
  } catch (error) {
    throw new Error(`curl 回退失败：${error.stderr?.toString().trim() || error.message}`);
  }
  return Buffer.isBuffer(result.stdout) ? result.stdout.toString('utf8') : String(result.stdout);
}

// 抓取策略：fetch 直连 → curl 直连 → curl 走代理（若可用），任一返回非挑战页即成功
async function fetchOnce(url) {
  try {
    const html = await fetchViaFetch(url);
    if (!isChallengePage(html)) return html;
  } catch { /* 继续回退 */ }
  try {
    const html = await fetchViaCurl(url);
    if (!isChallengePage(html)) return html;
  } catch { /* 继续回退 */ }
  if (proxyUrl) return fetchViaCurl(url, proxyUrl);
  throw new Error('直连与代理均返回反爬验证页或失败');
}

function isChallengePage(html) {
  if (html.length < 500) return true;
  if (/<meta http-equiv="refresh"[^>]*content="\s*360\s*"/i.test(html)) return true;
  // 真正的 OpenAI 文章页必然包含 <main> 正文容器；注意 Cloudflare 也会向真实页面注入
  // /cdn-cgi/challenge-platform/ 脚本，因此不能以该字符串作为挑战页依据，以 <main> 缺失为准。
  if (!/<main[\s\S]*?<\/main>/i.test(html)) return true;
  return false;
}

async function fetchHtml(url) {
  const maxAttempts = 3;
  let lastError = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const html = await fetchOnce(url);
      if (isChallengePage(html)) {
        lastError = new Error('页面返回反爬验证页（疑似 Cloudflare 挑战），请稍后重试');
        // 挑战页通常是瞬时的，短暂等待后重试
        await new Promise((r) => setTimeout(r, 5000 * attempt));
        continue;
      }
      return html;
    } catch (e) {
      lastError = e;
      if (attempt < maxAttempts) await new Promise((r) => setTimeout(r, 3000 * attempt));
    }
  }
  throw lastError || new Error('抓取失败');
}

// ---------- HTML → 提取标题与正文 ----------
function decodeEntities(s) {
  const names = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', mdash: '—', ndash: '–', hellip: '…', copy: '©', middot: '·' };
  return String(s).replace(/&(#x?[\da-f]+|[a-z]+);/gi, (all, code) => {
    if (names[code.toLowerCase()]) return names[code.toLowerCase()];
    if (code[0] === '#') return String.fromCodePoint(parseInt(code.slice(1).replace(/^x/i, ''), code[1].toLowerCase() === 'x' ? 16 : 10));
    return all;
  });
}

function plain(s) { return decodeEntities(String(s).replace(/<[^>]+>/g, ' ').replace(/[ \t]+/g, ' ').trim()); }

function extract(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, ' ');
  s = s.replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  s = s.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, ' ');
  s = s.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, ' ');
  // 只保留 <main> 正文容器，去掉站点导航/页脚等周边内容
  const main = s.match(/<main[\s\S]*?<\/main>/i);
  if (main) s = main[0];
  // 代码块：OpenAI 页面每行是“行号 span + flex-1 内容 div”，按行还原并保留为围栏代码
  s = s.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/gi, (_, code) => {
    const rows = code.match(/<div class="flex flex-row[^>]*">[\s\S]*?<\/div>/gi) || [];
    let text;
    if (rows.length > 0) {
      text = rows.map((row) => row
        .replace(/<span class="ms-5[^>]*">\d+<\/span>/, '')
        .replace(/<[^>]+>/g, '')
        .replace(/\s+$/, '')).join('\n');
    } else {
      text = code.replace(/<[^>]+>/g, '');
    }
    text = decodeEntities(text).replace(/\n\s*\n+/g, '\n').trim();
    return `\n\n\`\`\`\n${text}\n\`\`\`\n\n`;
  });
  // 标题与段落
  s = s.replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i, ' '); // 页面主标题已由脚本前置，正文内去掉首个 h1
  s = s.replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, x) => `${'\n'.repeat(2)}${'#'.repeat(Number(n))} ${plain(x)}\n`);
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/(p|li|div|section|article|blockquote|figcaption)>/gi, '\n');
  s = s.replace(/<li\b[^>]*>/gi, '- ');
  s = s.replace(/<[^>]+>/g, ' ');
  s = decodeEntities(s);
  s = s.replace(/\u2060/g, '').replace(/\(opens in a new window\)/g, '').replace(/Loading…/g, '');
  // 裁掉结尾的“Keep reading / View all”推荐文章区块
  const keepReading = s.search(/\n#+\s*Keep reading\b|^\s*View all\b/m);
  if (keepReading >= 0) s = s.slice(0, keepReading);
  s = s.replace(/[ \t]+/g, ' ').replace(/\n[ \t]+/g, '\n').replace(/\n\s*\n+/g, '\n\n');
  return s.trim();
}

function articleTitle(html) {
  const og = html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]*)"/);
  if (og) return decodeEntities(og[1]).trim();
  const t = html.match(/<title>([^<]*)<\/title>/);
  if (t) return decodeEntities(t[1]).replace(/\s*\|\s*OpenAI\s*$/i, '').trim();
  return '未命名文章';
}

function slug(value) {
  return value.replace(/[\\/:*?"<>|]/g, '-').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 100) || '未命名文章';
}

// ---------- 执行 ----------
let okCount = 0;
let failCount = 0;
for (const url of uniqueUrls) {
  console.log(`[FETCH] ${url}`);
  if (dryRun) continue;
  try {
    const html = await fetchHtml(url);
    const title = articleTitle(html);
    const body = extract(html);
    const markdown = `# ${title}\n\n> 原文链接：${url}\n\n${body}\n`;
    if (outDir) {
      const file = path.join(outDir, `${slug(title)}.md`);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(file, markdown, 'utf8');
      console.log(`  [OK] ${title}（${body.length} 字符）→ ${file}`);
    } else {
      console.log(`  [OK] ${title}（${body.length} 字符）`);
      console.log(markdown);
    }
    okCount++;
  } catch (e) {
    failCount++;
    console.error(`  [FAIL] ${url}: ${e.message}`);
  }
  // 连续请求之间稍作停顿，降低触发站点限流/反爬的概率
  if (url !== uniqueUrls[uniqueUrls.length - 1]) await new Promise((r) => setTimeout(r, 1500));
}
console.log(`\n==== 抓取汇总 ====`);
console.log(`总数：${uniqueUrls.length} | 成功：${okCount} | 失败：${failCount}`);
process.exitCode = dryRun ? 0 : (failCount > 0 ? 1 : 0);
