import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateTranslatedNote } from './validate-translated-note.mjs';

const SOURCE_EXTENSIONS = /\.(?:md|markdown|html?|txt)$/i;
const OUTPUT_EXTENSION = /\.md$/i;

function walkFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('~') || entry.name.endsWith('.tmp')) continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(entryPath));
    else if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

function normalizeRelative(value) {
  return value.replace(/\\/g, '/').replace(/^\.\//, '');
}

function yamlScalar(raw = '') {
  const value = raw.trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    try { return JSON.parse(value); } catch { return value.slice(1, -1); }
  }
  if (value.startsWith("'") && value.endsWith("'")) return value.slice(1, -1).replace(/''/g, "'");
  return value;
}

function frontmatterFields(markdown) {
  const block = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)?.[1];
  if (!block) return {};
  const fields = {};
  for (const line of block.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_-]*):\s*(.*)$/);
    if (match) fields[match[1]] = yamlScalar(match[2]);
  }
  return fields;
}

function cleanFragmentTitle(heading) {
  const linked = heading.match(/^\[([^\]]+)\]\(https?:\/\/[^)]+\)(.*)$/);
  return (linked?.[1] || heading)
    .replace(/\s*⭐️?\s*\d+(?:\.\d+)?\/10\s*$/, '')
    .trim();
}

function cleanAiDailyTitle(line) {
  const content = line.replace(/^[-*+]\s+/, '').trim();
  const separator = content.indexOf('。');
  return (separator >= 0 ? content.slice(0, separator) : content).trim();
}

function expectedFragments(sourceText, sourceRelative = '') {
  if (sourceRelative.startsWith('信息源/AI资讯日报/')) {
    const fragments = [];
    let inCategory = false;
    for (const line of sourceText.split(/\r?\n/)) {
      if (/^###\s+/.test(line)) {
        inCategory = true;
        continue;
      }
      if (/^##\s+/.test(line)) {
        inCategory = false;
        continue;
      }
      if (inCategory && /^[-*+]\s+/.test(line)) fragments.push(cleanAiDailyTitle(line));
    }
    return [...new Set(fragments.filter(Boolean))];
  }

  const lines = sourceText.split(/\r?\n/);
  const linkedLevelThree = lines
    .map((line) => line.match(/^###\s+(\[[^\]]+\]\(https?:\/\/[^)]+\).*)$/)?.[1])
    .filter(Boolean)
    .map(cleanFragmentTitle);
  if (linkedLevelThree.length) return [...new Set(linkedLevelThree)];

  const linkedLevelTwo = lines
    .map((line) => line.match(/^##\s+(\[[^\]]+\]\(https?:\/\/[^)]+\).*)$/)?.[1])
    .filter(Boolean)
    .map(cleanFragmentTitle);
  if (linkedLevelTwo.length > 1) return [...new Set(linkedLevelTwo)];

  const linkedLevelOne = lines
    .map((line) => line.match(/^#\s+(\[[^\]]+\]\(https?:\/\/[^)]+\).*)$/)?.[1])
    .filter(Boolean)
    .map(cleanFragmentTitle);
  return linkedLevelOne.length > 1 ? [...new Set(linkedLevelOne)] : [];
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function stripPublishedMarker(text) {
  return text
    .split(/\r?\n/)
    .map((line) => {
      const index = line.indexOf('发布时间：');
      if (index < 0) return line;
      const head = line.slice(0, index);
      const rest = line.slice(index + '发布时间：'.length);
      const value = rest.match(/^[^　|]*/)?.[0] || '';
      const tail = rest.slice(value.length).replace(/^[　|]+/, '');
      const normalized = head + tail;
      return /^>\s*$/.test(normalized) ? '' : normalized;
    })
    .join('\n');
}

function isWithinSourceRoot(relativePath) {
  return relativePath === '信息源' || relativePath.startsWith('信息源/');
}

function parseOptions(argv) {
  const options = { vault: '.', maxDetails: 50 };
  for (const arg of argv) {
    if (arg.startsWith('--vault=')) options.vault = arg.slice('--vault='.length);
    else if (arg.startsWith('--max-details=')) options.maxDetails = Number(arg.slice('--max-details='.length));
    else if (arg === '--help') options.help = true;
    else throw new Error(`未知参数：${arg}`);
  }
  if (!Number.isInteger(options.maxDetails) || options.maxDetails < 0) throw new Error('--max-details 必须是非负整数。');
  return options;
}

function sample(values, maxDetails) {
  return {
    total: values.length,
    shown: values.slice(0, maxDetails),
    omitted: Math.max(0, values.length - maxDetails),
  };
}

export function auditVault(vaultPath, options = {}) {
  const root = path.resolve(vaultPath);
  const sourceRoot = path.join(root, '信息源');
  const outputRoot = path.join(root, '整理');
  const maxDetails = options.maxDetails ?? 50;
  const sourcePaths = walkFiles(sourceRoot).filter((file) => SOURCE_EXTENSIONS.test(file));
  const outputPaths = walkFiles(outputRoot).filter((file) => OUTPUT_EXTENSION.test(file));

  const sources = new Map();
  const unreadableSources = [];
  for (const sourcePath of sourcePaths) {
    const relative = normalizeRelative(path.relative(root, sourcePath));
    try {
      const buffer = fs.readFileSync(sourcePath);
      const text = buffer.toString('utf8');
      sources.set(relative, {
        path: sourcePath,
        relative,
        text,
        hash: sha256(buffer),
        normalizedHash: sha256(Buffer.from(stripPublishedMarker(text), 'utf8')),
        fragments: expectedFragments(text, relative),
      });
    } catch (error) {
      unreadableSources.push({ source: relative, error: error.message });
    }
  }

  const outputsBySource = new Map();
  const outputFailures = [];
  let passedOutputs = 0;
  let publishedMarkerOnlyOutputs = 0;
  for (const outputPath of outputPaths) {
    const outputRelative = normalizeRelative(path.relative(root, outputPath));
    let markdown;
    try {
      markdown = fs.readFileSync(outputPath, 'utf8');
    } catch (error) {
      outputFailures.push({ output: outputRelative, errors: [`无法读取输出：${error.message}`] });
      continue;
    }

    const fields = frontmatterFields(markdown);
    const originalFile = normalizeRelative(fields.original_file || '');
    const errors = [];
    if (!originalFile) errors.push('YAML 缺少 original_file。');
    if (path.isAbsolute(originalFile) || originalFile.split('/').includes('..') || !isWithinSourceRoot(originalFile)) {
      errors.push('original_file 必须是信息源/ 下的 Vault 相对路径。');
    }
    const source = sources.get(originalFile);
    if (!source) errors.push('original_file 对应的可读取源文件不存在。');
    let publishedMarkerOnlyChange = false;
    if (source) {
      const recorded = String(fields.source_sha256 || '').toLowerCase();
      const rawMatch = recorded === source.hash;
      const markerOnlyMatch = !rawMatch && recorded === source.normalizedHash;
      if (!rawMatch && !markerOnlyMatch) errors.push('source_sha256 与当前源文件不一致。');
      else publishedMarkerOnlyChange = !rawMatch;
    }

    const manualApproved = String(fields.validation_manual_approved || '').toLowerCase() === 'true';
    const validationAttempt = Number(fields.validation_attempt || (manualApproved ? 2 : 1));
    if (manualApproved && validationAttempt < 2) errors.push('人工放行必须记录 validation_attempt: 2 或更高。');
    if (manualApproved && !fields.validation_manual_approval_reason) errors.push('人工放行必须记录 validation_manual_approval_reason。');

    let validation = null;
    if (source) {
      // 中文“原样搬运”源（非翻译产物）允许正文保留原文引文，跳过外文段落检查
      const allowForeign = ['虎嗅', '华尔街见闻', '机核', '量子位', '美团技术团队', '阮一峰的网络日志', '小众软件', '游戏研究社', 'AI资讯日报', 'Horizon Daily（中文摘要）'].includes(fields.source);
      validation = validateTranslatedNote(markdown, {
        sourceText: source.text,
        attempt: validationAttempt,
        manualApproved,
        allowForeign,
      });
      if (!validation.ok) errors.push(...validation.errors);
    }

    const record = {
      output: outputRelative,
      originalFile,
      fragment: fields.source_fragment || '',
      valid: errors.length === 0,
    };
    if (originalFile) {
      if (!outputsBySource.has(originalFile)) outputsBySource.set(originalFile, []);
      outputsBySource.get(originalFile).push(record);
    }
    if (record.valid) passedOutputs++;
    if (publishedMarkerOnlyChange) publishedMarkerOnlyOutputs++;
    if (!record.valid) outputFailures.push({ output: outputRelative, source: originalFile || null, errors: [...new Set(errors)] });
  }

  const coveredSources = [];
  const pendingSources = [];
  const changedSources = new Set();
  const missingFragments = [];
  for (const source of sources.values()) {
    const records = outputsBySource.get(source.relative) || [];
    const validRecords = records.filter((record) => record.valid);
    if (records.some((record) => record.valid === false && outputFailures.some((failure) => failure.output === record.output && failure.errors.some((error) => error.includes('source_sha256'))))) {
      changedSources.add(source.relative);
    }

    let covered = validRecords.length > 0;
    if (source.fragments.length) {
      const validFragments = new Set(validRecords.map((record) => record.fragment).filter(Boolean));
      const missing = source.fragments.filter((fragment) => !validFragments.has(fragment));
      if (missing.length) {
        covered = false;
        missingFragments.push({ source: source.relative, missing });
      }
    }
    if (covered) coveredSources.push(source.relative);
    else pendingSources.push(source.relative);
  }

  const failedOutputs = outputFailures.length;
  const complete = pendingSources.length === 0
    && changedSources.size === 0
    && failedOutputs === 0
    && unreadableSources.length === 0;

  return {
    ok: complete,
    exit_code: complete ? 0 : 1,
    vault: root,
    total_source_files: sources.size,
    covered_source_files: coveredSources.length,
    pending_source_files: pendingSources.length,
    changed_source_files: changedSources.size,
    output_articles: outputPaths.length,
    passed_outputs: passedOutputs,
    published_marker_only_outputs: publishedMarkerOnlyOutputs,
    failed_outputs: failedOutputs,
    unreadable_source_files: unreadableSources.length,
    details: {
      pending_sources: sample(pendingSources, maxDetails),
      changed_sources: sample([...changedSources], maxDetails),
      missing_fragments: sample(missingFragments, maxDetails),
      output_failures: sample(outputFailures, maxDetails),
      unreadable_sources: sample(unreadableSources, maxDetails),
    },
  };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  try {
    const options = parseOptions(process.argv.slice(2));
    if (options.help) {
      console.log('用法：node scripts/audit-organized-notes.mjs [--vault=.] [--max-details=50]');
      process.exit(0);
    }
    const result = auditVault(options.vault, { maxDetails: options.maxDetails });
    console.log(JSON.stringify(result, null, 2));
    process.exitCode = result.exit_code;
  } catch (error) {
    console.error(JSON.stringify({ ok: false, exit_code: 2, error: error.message }, null, 2));
    process.exitCode = 2;
  }
}
