---
published: 2026-08-06
title: 多任务 GRPO：跨任务的可靠 LLM 推理
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks.md
source_note: "[[信息源/arXiv cs.LG RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks|查看原始文件]]"
source_sha256: 7581dbeb6486ecef486a3f84eea4a97a608600c46ead334a6042ebe03ff60ab9
original_url: https://arxiv.org/abs/2602.05547
processed: 2026-08-07
language: zh-CN
---

# 多任务 GRPO：跨任务的可靠 LLM 推理

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.05547)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks|查看原始文件]]

## 摘要

- 基于 RL 的 GRPO 后训练常用于提升大语言模型在单个推理任务上的表现，但多任务直接适配会导致任务间结果失衡
- 提出多任务 GRPO（MT-GRPO）算法：动态调整任务权重以显式优化最差任务表现，并引入保比率采样器确保逐任务策略梯度反映自适应权重
- 在 3 任务与 9 任务设置中，最差任务精度比标准 GRPO 提升 16–28%、比 DAPO 提升 6%，且训练步数减少 50%

## 正文

基于强化学习（RL）并使用 GRPO 的后训练被广泛用于提升大语言模型在单个推理任务上的表现。然而，实际部署需要在多样化任务上实现可靠性能。GRPO 的直接多任务适配常常导致结果失衡：一些任务主导优化，而另一些停滞不前。此外，不同任务在提示产生零优势（从而产生零梯度）的频率上差异很大，这进一步扭曲了它们对优化信号的有效贡献。为解决这些问题，我们提出了一种新颖的多任务 GRPO（MT-GRPO）算法，它（i）动态调整任务权重，以显式优化最差任务表现并促进任务间的均衡进展，以及（ii）引入一个保比率采样器，确保逐任务策略梯度反映自适应权重。在 3 任务和 9 任务两种设置下的实验表明，MT-GRPO 在最差任务精度上始终优于基线。特别是，MT-GRPO 在最差任务表现上比标准 GRPO 和 DAPO 分别实现了 16–28% 和 6% 的绝对提升，同时保持具有竞争力的平均精度。此外，在 3 任务设置中，MT-GRPO 达到 50% 最差任务精度所需的训练步数减少了 50%，展示了在跨任务实现可靠性能方面效率的大幅提升。

## 关键词

#GRPO #多任务学习 #大语言模型 #强化学习 #推理
