import { access, mkdir, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';

const execFileAsync = promisify(execFile);

// 数据源清单：不再依赖 Obsidian 中的 Markdown 配置文件。
// kind 只使用 rss、atom、html 三种抓取规则；formatter 用于兼容
// Horizon 这种“feed 条目里嵌套完整日报 HTML”的特殊正文格式。
const resources = [
  ['Horizon Daily（中文摘要）', 'https://thysrael.github.io/Horizon/feed-zh.xml', 'atom', 'horizon'],
  ['NASA 每日天文图', 'https://apod.nasa.gov/apod.rss', 'rss'],
  //['Hacker News 热门', 'https://hnrss.org/frontpage', 'rss'],
  ['GitHub Blog', 'https://github.blog/feed/', 'rss'],
  ['Stack Overflow Blog', 'https://stackoverflow.blog/feed/', 'rss'],
  ['Mozilla Hacks', 'https://hacks.mozilla.org/feed/', 'rss'],
  ['EFF 数字权利动态', 'https://www.eff.org/rss/updates.xml', 'rss'],
  ['Google Blog Feed', 'https://blog.google/intl/zh-tw/rss/', 'rss'],
  //['The Batch（DeepLearning.AI）', 'https://www.deeplearning.ai/the-batch/feed/', 'rss'],
  //['Hugging Face Blog Feed', 'https://huggingface.co/blog/feed.xml', 'rss'], // 条目仅含标题/链接，无正文，验证失败
  //['Anthropic Blog', 'https://www.anthropic.com/rss.xml', 'rss'],
  //['LlamaIndex Blog', 'https://www.llamaindex.ai/blog/rss.xml', 'rss'],
  //['Papers With Code', 'https://paperswithcode.com/feeds/latest', 'rss'],
  //['GitHub Trending RSS', 'https://mshibanami.github.io/GitHubTrendingRSS/', 'rss'],
  ['Import AI', 'https://jack-clark.net/feed/', 'rss'],
  ['MIT Technology Review AI', 'https://www.technologyreview.com/topic/artificial-intelligence/feed', 'rss'],
  ['Ben\'s Bites', 'https://bensbites.com/feed', 'rss'],
  ['OpenAI News', 'https://openai.com/news/rss.xml', 'rss'],
  ['Google DeepMind Blog', 'https://deepmind.google/blog/rss.xml', 'rss'],
  ['LangChain Blog', 'https://www.langchain.com/blog/rss.xml', 'rss'],
  ['Simon Willison Blog', 'https://simonwillison.net/atom/everything/', 'atom'],
  ['Sebastian Raschka Blog', 'https://sebastianraschka.com/rss_feed.xml', 'rss'],
  ['arXiv cs.AI RSS', 'https://export.arxiv.org/rss/cs.AI', 'rss'],
  ['arXiv cs.LG RSS', 'https://export.arxiv.org/rss/cs.LG', 'rss'],
  ['arXiv cs.CL RSS', 'https://export.arxiv.org/rss/cs.CL', 'rss'],
  ['arXiv cs.CV RSS', 'https://export.arxiv.org/rss/cs.CV', 'rss'],
  ['阮一峰的网络日志', 'https://www.ruanyifeng.com/blog/atom.xml', 'atom'],
  ['美团技术团队', 'https://tech.meituan.com/feed', 'rss'],
  ['机核', 'https://www.gcores.com/rss', 'rss'],
  ['小众软件', 'https://www.appinn.com/feed/', 'rss'],
  ['iDaily 每日环球视野', 'https://plink.anyfeeder.com/idaily/today', 'rss'],
  ['游戏研究社', 'https://www.yystv.cn/rss/feed', 'rss'],
  ['AI资讯日报', 'https://justlovemaki.github.io/CloudFlare-AI-Insight-Daily/rss.xml', 'rss'],
  ['华尔街见闻', 'https://feed.wallstreetcn.com/wallstreetcn/news/global', 'rss'],
  //['it之家', 'https://www.ithome.com/rss/', 'rss'],
  ['虎嗅', 'https://rss.huxiu.com/', 'rss'],
  ['掘金人工智能', 'https://rss.injahow.cn/juejin/category/ai', 'rss'],
  //['机器之心', 'https://www.jiqizhixin.com/rss', 'rss'],
  ['量子位', 'https://www.qbitai.com/feed', 'rss']
].map(([name, url, kind, formatter]) => ({ name, url, kind, formatter }));

const supportedKinds = new Set(['rss', 'atom', 'html']);

const args = new Map(process.argv.slice(2).map((arg) => { const [key, ...value] = arg.replace(/^--/, '').split('='); return [key, value.join('=') || true]; }));
const vault = path.resolve(String(args.get('vault') || process.cwd()));
const limit = args.has('limit') ? Number(args.get('limit')) : Infinity;
const validateOnly = args.has('validate');
const outputDir = path.join(vault, '信息源');

function decode(value = '') {
  const names = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’', mdash: '—', ndash: '–', hellip: '…' };
  return String(value).replace(/&(#x?[\da-f]+|[a-z]+);/gi, (all, code) => {
    if (names[code.toLowerCase()]) return names[code.toLowerCase()];
    if (code[0] === '#') return String.fromCodePoint(parseInt(code.slice(1).replace(/^x/i, ''), code[1].toLowerCase() === 'x' ? 16 : 10));
    return all;
  });
}
function unwrap(value = '') { return String(value).replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '').trim(); }
function tag(xml, name) { return xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'))?.[1] || ''; }
function first(xml, names) { for (const name of names) { const value = tag(xml, name); if (value) return value; } return ''; }
function plain(value = '') { return decode(unwrap(value).replace(/<[^>]+>/g, ' ').replace(/[ \t]+/g, ' ').trim()); }
function link(xml) { return xml.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*>/i)?.[1] || plain(first(xml, ['link', 'guid', 'id'])); }
function slug(value) { return value.replace(/[\\/:*?"<>|]/g, '-').replace(/[\u0000-\u001f]/g, '').trim().slice(0, 100) || '未命名来源'; }
function htmlToMarkdown(value = '') {
  let html = unwrap(value).replace(/<(script|style|nav|header|footer|aside|form)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  html = html.replace(/<img\b[^>]*src=["']([^"']+)["'][^>]*>/gi, (_, src) => `\n![图片](${src})\n`)
    .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `[${plain(text)}](${href})`)
    .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, (_, x) => `\n\n# ${plain(x)}\n\n`)
    .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, (_, x) => `\n\n## ${plain(x)}\n\n`)
    .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, (_, x) => `\n\n### ${plain(x)}\n\n`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, x) => `\n- ${inline(x)}\n`)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\s*\/\s*(p|div|section|article|blockquote|pre|li|table|tr|details)\s*>/gi, '\n\n')
    .replace(/<\s*(p|div|section|article|blockquote|pre|ul|ol|table|tr|details)\b[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '');
  return decode(html).replace(/[ \t]+/g, ' ').split(/\r?\n/).map((line) => line.trim()).filter(Boolean).join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}
function inline(value = '') { return decode(unwrap(value).replace(/<[^>]+>/g, '').replace(/[ \t]+/g, ' ').trim()); }

function parseItems(xml) {
  const chunks = [...xml.matchAll(/<item\b[^>]*>[\s\S]*?<\/item>/gi), ...xml.matchAll(/<entry\b[^>]*>[\s\S]*?<\/entry>/gi)]
    .sort((a, b) => a.index - b.index).map((m) => m[0]).slice(0, limit);
  return chunks.map((item) => ({
    title: plain(first(item, ['title'])) || '未命名文章',
    url: link(item),
    date: plain(first(item, ['pubDate', 'published', 'updated', 'dc:date'])),
    author: plain(first(item, ['author', 'dc:creator', 'creator', 'name'])),
    organization: plain(first(item, ['source', 'site_name', 'publisher', 'organization'])),
    category: plain(first(item, ['category', 'dc:subject'])),
    body: first(item, ['content:encoded', 'content', 'description', 'summary'])
  }));
}

function parseHtmlPage(html, source) {
  const title = plain(tag(html, 'title')) || source.name;
  const canonical = html.match(/<link\b[^>]*rel=["'][^"']*canonical[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>/i)?.[1]
    || html.match(/<meta\b[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/i)?.[1]
    || source.url;
  const body = html.match(/<article\b[^>]*>[\s\S]*?<\/article>/i)?.[0]
    || html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0]
    || html.match(/<body\b[^>]*>[\s\S]*?<\/body>/i)?.[0]
    || html;
  return [{ title, url: canonical, date: '', author: '', organization: '', category: '', body }].slice(0, limit);
}

function encodingFor(contentType, head) {
  return (contentType.match(/charset\s*=\s*["']?([\w.-]+)/i)?.[1]
    || head.match(/<\?xml[^>]*encoding=["']([\w.-]+)["']/i)?.[1]
    || head.match(/<meta[^>]+charset=["']?([\w.-]+)/i)?.[1]
    || 'utf-8').toLowerCase();
}

async function readResponse(response) {
  const bytes = new Uint8Array(await response.arrayBuffer());
  const head = Buffer.from(bytes.subarray(0, 512)).toString('latin1');
  const declared = encodingFor(response.headers.get('content-type') || '', head);
  const encoding = declared === 'gb2312' || declared === 'gbk' ? 'gb18030' : declared;
  let text;
  try { text = new TextDecoder(encoding, { fatal: false }).decode(bytes); }
  catch { text = new TextDecoder('utf-8', { fatal: false }).decode(bytes); }
  return { text, encoding, bytes: bytes.byteLength };
}

async function requestFeed(url, options) {
  try {
    return await fetch(url, options);
  } catch (firstError) {
    // 某些网络环境下 Node 的 TLS 连接会被代理重置；curl 会自动使用
    // HTTPS_PROXY/HTTP_PROXY，因此仅在 fetch 失败时作为兼容回退。
    const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
    const accept = options?.headers?.accept || '*/*';
    const userAgent = options?.headers?.['user-agent'] || 'AI Feed Fetcher/1.0';
    const trailer = '\n__AI_FEED_STATUS__\n%{http_code}\n%{content_type}\n%{url_effective}\n';
    let result;
    try {
      result = await execFileAsync(curl, ['-L', '--silent', '--show-error', '--max-time', '30', '-A', userAgent, '-H', `accept: ${accept}`, '-w', trailer, url], { encoding: null, maxBuffer: 16 * 1024 * 1024 });
    } catch (error) {
      throw new Error(`${firstError.message}; curl 回退也失败：${error.stderr?.toString().trim() || error.message}`);
    }
    const stdout = Buffer.isBuffer(result.stdout) ? result.stdout : Buffer.from(result.stdout);
    const marker = Buffer.from('\n__AI_FEED_STATUS__\n');
    const index = stdout.lastIndexOf(marker);
    if (index < 0) throw new Error(`${firstError.message}; curl 未返回可识别响应`);
    const meta = stdout.subarray(index + marker.length).toString('utf8').trim().split(/\r?\n/);
    const body = stdout.subarray(0, index);
    const status = Number(meta[0] || 0);
    const contentType = meta[1] || '';
    const finalUrl = meta[2] || url;
    return {
      ok: status >= 200 && status < 300,
      status,
      statusText: 'curl',
      url: finalUrl,
      headers: { get: (name) => name.toLowerCase() === 'content-type' ? contentType : null },
      arrayBuffer: async () => body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength)
    };
  }
}

function validateParsedItems(source, items, text) {
  const errors = [];
  const warnings = [];
  if (!items.length) errors.push('未解析出 RSS/Atom 条目或 HTML 正文');
  if (text.includes('\uFFFD')) errors.push('解码结果含替换字符 �');
  if (/(?:0x|\\x)[0-9a-f]{2}(?:\s+(?:0x|\\x)[0-9a-f]{2}){2,}/i.test(text)) errors.push('疑似十六进制编码文本');
  if (/(?:\\u[0-9a-f]{4}\s*){3,}/i.test(text)) errors.push('疑似 Unicode 转义文本');
  if (source.kind === 'rss' && !/<(?:rss|rdf:RDF)\b/i.test(text)) errors.push('声明为 rss，但响应没有 RSS 根节点');
  if (source.kind === 'atom' && !/<feed\b/i.test(text)) errors.push('声明为 atom，但响应没有 Atom feed 根节点');
  if (source.kind === 'html' && !/<(?:html|body|main|article)\b/i.test(text)) errors.push('声明为 html，但响应没有 HTML 正文节点');
  const missingBodyCount = items.filter((item) => !item.body.trim()).length;
  if (missingBodyCount && missingBodyCount < items.length) warnings.push(`${missingBodyCount} 条仅有标题/元数据，正文将标注为“没有提供正文或摘要”`);
  if (items.length && missingBodyCount === items.length) errors.push('所有条目都缺少正文/摘要');
  for (const [index, item] of items.entries()) {
    if (!item.title.trim()) errors.push(`第 ${index + 1} 条缺少标题`);
    const converted = formatItem(item, source);
    if (converted.includes('\uFFFD')) errors.push(`第 ${index + 1} 条转换结果含替换字符 �`);
    if (item.body.trim() && !converted.trim()) errors.push(`第 ${index + 1} 条转换后正文为空`);
  }
  return { errors, warnings };
}
function formatHorizon(body) {
  // Horizon 的 content 是完整 HTML 摘要，跳过开头目录，从第一组正文分类开始排版。
  return htmlToMarkdown(body.replace(/^[\s\S]*?(?=<h2\b)/i, '').replace(/<a\s+id=["'][^"']+["']\s*><\/a>/gi, ''));
}
function formatItem(item, source) {
  const content = source.formatter === 'horizon' ? formatHorizon(item.body) : htmlToMarkdown(item.body);
  const meta = [item.author && `作者：${item.author}`, item.organization && `组织：${item.organization}`, item.date && `发布时间：${item.date}`, item.category && `分类：${item.category}`, item.url && `原文：[打开链接](${item.url})`].filter(Boolean);
  return [...(meta.length ? [`> ${meta.join('　|　')}`, '', '------', ''] : []), content || '（没有提供正文或摘要。）', ''].join('\n');
}
function markdownFor(source, item) {
  const kindLabel = source.kind === 'atom' ? 'Atom' : source.kind === 'html' ? 'HTML' : 'RSS';
  return [`# ${item.title}`, '', `> 数据源：${source.name}`, `> ${kindLabel}：[打开源文件](${source.url})`, '', formatItem(item, source)].join('\n');
}

await mkdir(outputDir, { recursive: true });
for (const source of resources) {
  try {
    if (!supportedKinds.has(source.kind)) throw new Error(`不支持的抓取类型 ${source.kind}`);
    const response = await requestFeed(source.url, { headers: { 'user-agent': 'AI Feed Fetcher/1.0', accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, text/html;q=0.9, */*;q=0.8' }, signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const { text, encoding, bytes } = await readResponse(response);
    const items = source.kind === 'html' ? parseHtmlPage(text, source) : parseItems(text);
    const { errors, warnings } = validateParsedItems(source, items, text);
    if (errors.length) throw new Error(`验证失败：${errors.join('；')}`);
    const warningText = warnings.length ? `；警告：${warnings.join('；')}` : '';
    if (validateOnly) {
      console.log(`${source.name}: 验证通过（${source.kind}，${encoding}，${bytes} 字节，${items.length} 条）${warningText}`);
      continue;
    }
    const sourceDir = path.join(outputDir, slug(source.name));
    await mkdir(sourceDir, { recursive: true });
    let saved = 0;
    let skipped = 0;
    for (const item of items) {
      const output = path.join(sourceDir, `${slug(item.title)}.md`);
      try {
        await access(output);
        skipped += 1;
        continue;
      } catch { /* 文件不存在，可以保存 */ }
      await writeFile(output, markdownFor(source, item), 'utf8');
      saved += 1;
    }
    console.log(`${source.name}: 抓取 ${items.length} 条，新增 ${saved} 条，跳过重复 ${skipped} 条${warningText} -> ${sourceDir}`);
  } catch (error) { console.warn(`跳过 ${source.name}: ${error.message}`); }
}
