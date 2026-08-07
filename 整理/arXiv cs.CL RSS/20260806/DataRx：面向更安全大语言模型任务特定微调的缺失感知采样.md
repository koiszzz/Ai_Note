---
published: 2026-08-06
title: "DataRx：面向更安全大语言模型任务特定微调的缺失感知采样"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/DataRx- Missingness-Aware Sampling for Safer Large Language Model Task-Specific Fine-Tuning.md
source_note: "[[信息源/arXiv cs.CL RSS/DataRx- Missingness-Aware Sampling for Safer Large Language Model Task-Specific Fine-Tuning]]"
source_sha256: a2e947d249bf02c88276f5cfe183f1126fcb7a88353b8e56be1f379bb26f33dc
original_url: https://arxiv.org/abs/2608.04322
processed: 2026-08-07
language: zh-CN
---

# DataRx：面向更安全大语言模型任务特定微调的缺失感知采样

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04322)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/DataRx- Missingness-Aware Sampling for Safer Large Language Model Task-Specific Fine-Tuning|查看原始文件]]

## 摘要

- 任务特定微调在提升下游任务性能的同时，会削弱已对齐 LLM 的安全护栏；混入安全数据是常用对策，但不同安全样本效果差异的原理不明
- 提出 DataRx：基于"样本安全信号填补 LLM 安全能力缺失部分时更有效"的假设，用高维隐藏表示而非离散词元量化安全信号差距
- 仅用 BeaverTails 中 1% 的额外安全样本，DataRx 即将 Llama3-8B-Instruct 在七个下游任务的平均攻击成功率从随机采样的 59.23% 降至 13.70%
- DataRx 可与现有安全数据合成方法结合，进一步增强微调期间的安全防御

## 正文

任务特定微调可以提升大语言模型（LLMs）在下游任务上的性能。然而，我们的研究揭示，任务特定微调也会削弱已对齐 LLM 的安全护栏。在微调期间保持安全性的一种被广泛采用的策略是引入安全数据。尽管此前的研究表明，随机混入安全数据可以缓解安全退化，但为什么某些安全示例比其他示例更有效，其背后的原理仍不清楚。在本文中，我们提出了 DataRx，一种用于挑选安全关键样本的缺失感知采样方法。DataRx 基于这样的假设：当选出的示例所提供的安全信号填补了 LLM 安全能力中的缺失部分时，该安全样本更有效。DataRx 的关键洞察在于利用高维隐藏表示而非离散词元，来量化目标模型原生响应与安全参考响应之间的安全信号差距。结果表明，仅使用来自 BeaverTails 的 1% 额外安全样本，DataRx 就能将 Llama3-8B-Instruct 在七个下游任务上的平均攻击成功率从随机采样下的 59.23% 降至 13.70%。此外，DataRx 可以与现有的安全数据合成方法相结合，进一步增强微调期间的安全防御。我们希望 DataRx 能够启发更多以数据为中心的防御研究。

## 关键词

#大语言模型 #安全微调 #数据采样 #对齐 #安全防御
