/**
 * 信息源整理一键流水线
 *
 * 依次执行（任一步失败即停止，退出码非 0）：
 *   1. 中文源整理     node scripts/organize-chinese-rss.mjs
 *   2. AI 资讯日报    node scripts/organize-ai-daily.mjs
 *   3. Horizon Daily  node scripts/organize-chinese-feeds.mjs
 *   4. 哈希对账       node scripts/reconcile-sha.mjs --fix
 *   5. 迁移           node scripts/migrate-organized-notes.mjs
 *   6. 审计           node scripts/audit-organized-notes.mjs --vault=. --max-details=1000000
 *
 * 用法：
 *   node scripts/pipeline.mjs [--vault=.] [--steps=chinese,daily,horizon,reconcile,migrate,audit]
 *       [--migrate-dry] [--no-audit]
 *
 * 说明：
 * - --steps 按需裁剪；默认全部执行。
 * - --migrate-dry 迁移只做计划（--dry），便于先观察。
 * - --no-audit 跳过最终审计（审计约 5 分钟，日常增量可跳过）。
 * - 全部子进程输出实时透传。
 */
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
let vault = '.';
let steps = ['chinese', 'daily', 'horizon', 'reconcile', 'migrate', 'audit'];
let migrateDry = false;
for (const arg of args) {
  if (arg.startsWith('--vault=')) vault = arg.slice('--vault='.length);
  else if (arg.startsWith('--steps=')) steps = arg.slice('--steps='.length).split(',').map((s) => s.trim()).filter(Boolean);
  else if (arg === '--migrate-dry') migrateDry = true;
  else if (arg === '--no-audit') steps = steps.filter((s) => s !== 'audit');
  else throw new Error(`未知参数：${arg}`);
}

const COMMANDS = {
  chinese: { cmd: 'node', args: ['scripts/organize-chinese-rss.mjs', `--vault=${vault}`] },
  daily: { cmd: 'node', args: ['scripts/organize-ai-daily.mjs', vault] },
  horizon: { cmd: 'node', args: ['scripts/organize-chinese-feeds.mjs', vault] },
  reconcile: { cmd: 'node', args: ['scripts/reconcile-sha.mjs', `--vault=${vault}`, '--fix'] },
  migrate: { cmd: 'node', args: ['scripts/migrate-organized-notes.mjs', `--vault=${vault}`, ...(migrateDry ? ['--dry'] : [])] },
  audit: { cmd: 'node', args: ['scripts/audit-organized-notes.mjs', '--vault=.', '--max-details=1000000'] },
};

let failed = null;
for (const step of steps) {
  if (!COMMANDS[step]) throw new Error(`未知步骤：${step}`);
  const { cmd, args: stepArgs } = COMMANDS[step];
  console.log(`\n===== 步骤 ${step} =====`);
  const result = spawnSync(cmd, stepArgs, {
    cwd: path.resolve(vault),
    encoding: 'utf8',
    timeout: 20 * 60 * 1000,
    maxBuffer: 512 * 1024 * 1024,
  });
  process.stdout.write(String(result.stdout || ''));
  process.stderr.write(String(result.stderr || ''));
  if (result.status !== 0) {
    failed = step;
    console.error(`[PIPELINE] 步骤 ${step} 失败（exit ${result.status}）`);
    break;
  }
}

if (failed) {
  console.log(`\n===== 流水线未完成：失败于 ${failed} =====`);
  process.exitCode = 1;
} else {
  console.log('\n===== 流水线全部完成 =====');
}
