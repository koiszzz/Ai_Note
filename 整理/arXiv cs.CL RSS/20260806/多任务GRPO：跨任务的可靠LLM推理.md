---
published: 2026-08-06
title: 多任务GRPO：跨任务的可靠LLM推理
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks.md
source_note: "[[信息源/arXiv cs.CL RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks|查看原始文件]]"
source_sha256: b51b05ea07cc50721de970db4e8638b32e501c48589bc7c98a272fea716890a9
original_url: https://arxiv.org/abs/2602.05547
processed: 2026-08-07
language: zh-CN
---

# 多任务GRPO：跨任务的可靠LLM推理

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.05547)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks|查看原始文件]]

## 摘要

- 基于强化学习的 GRPO 后训练被广泛用于提升大语言模型在单个推理任务上的表现，但实际部署需要跨多样任务的可靠性能。
- 直接的多任务 GRPO 适配往往导致结果失衡：某些任务主导优化而另一些停滞；此外，任务在"提示产生零优势（因而零梯度）"的频率上差异很大，进一步扭曲了它们对优化信号的有效贡献。
- 本文提出新的多任务 GRPO（MT-GRPO）算法：（1）动态调整任务权重，显式优化最差任务性能并促进跨任务均衡进展；（2）引入保比率采样器（ratio-preserving sampler），确保按任务划分的策略梯度反映调整后的权重。
- 在 3 任务和 9 任务设定上的实验表明，MT-GRPO 在最差任务准确率上持续超越基线：相对标准 GRPO 提升 16%-28% 绝对点，相对 DAPO 提升 6%，同时保持有竞争力的平均准确率。
- MT-GRPO 在 3 任务设定中达到 50% 最差任务准确率所需的训练步数减少 50%，展现出实现跨任务可靠性能的效率显著提升。

## 正文

基于强化学习的 GRPO 后训练被广泛用于在大语言模型上改进单个推理任务。然而，实际部署需要跨多样化任务的可靠性能。直接的多任务 GRPO 适配往往导致失衡的结果：某些任务主导优化，而另一些停滞不前。此外，任务在提示产生零优势（从而零梯度）的频率上差异很大，这进一步扭曲了它们对优化信号的有效贡献。

为解决这些问题，我们提出一种新颖的多任务 GRPO（MT-GRPO）算法，它（i）动态调整任务权重，以显式优化最差任务性能并促进跨任务的均衡进展，以及（ii）引入一个保比率采样器，确保按任务划分的策略梯度反映调整后的权重。

在 3 任务和 9 任务设定上的实验表明，MT-GRPO 在最差任务准确率上持续优于基线。特别是，MT-GRPO 在最差任务性能上相对标准 GRPO 和 DAPO 分别取得了 16%-28% 和 6% 的绝对提升，同时保持了有竞争力的平均准确率。此外，MT-GRPO 在 3 任务设定中达到 50% 最差任务准确率所需的训练步数减少了 50%，表明其在跨任务实现可靠性能方面的效率显著提升。

## 关键词

#GRPO #多任务强化学习 #LLM推理 #后训练 #arXiv
