---
published: 2026-08-05
title: "通过结构感知微调增强 VLM 奖励模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Enhancing VLM Reward Models Through Structure-Aware Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Enhancing VLM Reward Models Through Structure-Aware Fine-Tuning]]"
source_sha256: e938526edf66ef3b15b96103dcdb9ebeab21b2b0943c0eafababb709eff7dd9b
original_url: "https://arxiv.org/abs/2608.03875"
processed: 2026-08-05
language: zh-CN
---

# 通过结构感知微调增强 VLM 奖励模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pyrros Koussios、Chenhao Li、Xin Chen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03875)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Enhancing VLM Reward Models Through Structure-Aware Fine-Tuning|查看原始文件]]

## 摘要

- 提出 SAFT（结构感知微调）：简单、自监督的方法，无需真实监督即可在线精炼不完美的奖励信号；利用内在结构先验通过 LoRA 适配器正则化 VLM 的潜空间。
- 在基础模型能力谱系上严格评估 SAFT 以展示其通用性。
- SAFT 一致地给奖励景观去噪，带来更快的策略收敛与相对基础模型大幅改善的对齐（EPIC 距离），表明失败往往可归因于结构脆弱性而非语义误解。
- 用任务固有的结构归纳偏置替代大量人工偏好标注，为稳定文本条件 RL 提供可扩展路径。

## 正文

论文编号：arXiv:2608.03875v1（更新类型：cross）。以下为摘要全文翻译。

设计有效的奖励函数仍是强化学习（RL）中的主要瓶颈。近期工作使用大型基础视觉-语言模型（VLM）作为奖励模型，通过计算文本-观测相似度绕开人工奖励工程。虽然前景可观，但这些奖励往往带噪且不可靠，限制了其在部署期间的直接效用。我们提出 SAFT（Structure-Aware Fine-Tuning，结构感知微调），一种简单、自监督的方法，无需真实监督即可在线精炼这些不完美的奖励信号。SAFT 利用内在结构先验，通过 LoRA 适配器正则化 VLM 的潜空间。我们在基础模型能力谱系上严格评估 SAFT，以展示其通用性。结果表明，SAFT 一致地给奖励景观去噪，带来更快的策略收敛和相对基础模型大幅改善的对齐（EPIC 距离），说明失败往往可归因于结构脆弱性而非语义误解。通过用任务固有的结构归纳偏置替代大量人工偏好标注，SAFT 为稳定文本条件 RL 提供了可扩展路径，并凸显了把任务结构作为通用归纳偏置的更广泛价值。

## 关键词

#奖励模型 #VLM #强化学习 #自监督微调
