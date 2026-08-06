---
published: 2026-08-05
title: "快速思考：估计前沿 AI 模型的无 CoT 任务完成时间视界"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Think Fast- Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/Think Fast- Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models]]"
source_sha256: 60c16cee218d65c82c088ad3964ef73fb574a2627974b09d172ed44a08ecf760
original_url: "https://arxiv.org/abs/2606.07157"
processed: 2026-08-05
language: zh-CN
---

# 快速思考：估计前沿 AI 模型的无 CoT 任务完成时间视界

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dewi Gould 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.07157)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Think Fast- Estimating No-CoT Task-Completion Time Horizons of Frontier AI Models|查看原始文件]]

## 摘要

- 测量前沿模型在无 CoT 情况下跨 43 个基准、30,000 多个问题的推理套件（涵盖数学、编码、谜题、因果、心智理论与战略推理）的推理能力；为与人类比较，估计 50% 任务完成时间视界（TH）：模型以 50% 成功率完成的任务所需的人类时间；并补充 50% 推理 token 视界：模型以 50% 成功率解决的问题所需的最小 o3-mini 推理 token 数。
- 许多确保前沿 AI 模型安全的努力依赖监控其思维链（CoT）推理；如果模型能在无显式思考 token 的情况下执行足够复杂的内部推理，将削弱此类监督。
- 发现前沿模型的无 CoT 50% TH 在过去六年约每年翻倍，GPT-5.5 的 TH 超过 3 分钟、推理 token 视界超过 1,500 token。
- 中位估计预测：到 2028 年前沿无 CoT TH 可能超过 7 分钟、到 2030 年超过 25 分钟（尽管这些预测带大量不确定性）；建议前沿开发者显式跟踪这一指标。

## 正文

论文编号：arXiv:2606.07157v4（更新类型：replace）。以下为摘要全文翻译。

许多确保前沿 AI 模型安全的努力依赖监控其思维链（CoT）推理。如果模型能够在没有显式思考 token 的情况下执行足够复杂的内部推理，这将削弱此类监督。我们测量前沿模型在无 CoT 情况下跨 43 个基准、30,000 多个问题套件（涵盖数学、编码、谜题、因果、心智理论与战略推理领域）的推理能力。为把模型与人类比较，我们估计 50% 任务完成时间视界（TH）：模型以 50% 成功率完成的任务所需的人类时间。我们补充一个 50% 推理 token 视界：模型以 50% 成功率解决的问题所需的最小 o3-mini 推理 token 数。我们发现，前沿模型的无 CoT 50% TH 在过去六年大约每年翻倍，GPT-5.5 的 TH 超过 3 分钟、推理 token 视界超过 1,500 token。我们的中位估计预测：到 2028 年前沿无 CoT TH 可能超过 7 分钟，到 2030 年超过 25 分钟，尽管这些预测带有大量不确定性。我们建议前沿开发者显式跟踪这一指标。

## 关键词

#AI安全 #思维链 #能力评估 #时间视界
