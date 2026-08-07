---
published: 20260806
title: "多任务 GRPO：跨任务可靠 LLM 推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks.md"
source_note: "[[信息源/arXiv cs.AI RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks]]"
source_sha256: 51ee841716eb5ea6c34813722bc49f8086d06b2e8acfb4f893d55f0e34f8089d
original_url: "https://arxiv.org/abs/2602.05547"
processed: 2026-08-06
language: zh-CN

---

# 多任务 GRPO：跨任务可靠 LLM 推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shyam Sundhar Ramesh, Xiaotong Ji, Matthieu Zimmer, Sangwoong Yoon, Zhiyong Wang, Haitham Bou Ammar, Aurelien Lucchi, Ilija Bogunovic
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.05547)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Multi-Task GRPO- Reliable LLM Reasoning Across Tasks|查看原始文件]]

## 摘要

- 基于 RL 的 GRPO 训练后广泛用于在单个推理任务上改进大语言模型，但真实部署需要跨多样任务的可靠性能；GRPO 的直接多任务适应常导致不平衡结果，一些任务支配优化而其他停滞，且任务在提示产生零优势（从而零梯度）的频率上差异很大。
- 本文提出新颖多任务 GRPO（MT-GRPO）算法：（i）动态适应任务权重以显式优化最差任务性能并促进跨任务平衡进展；（ii）引入保比采样器确保任务策略梯度反映适应权重。
- 3 任务和 9 任务设置实验显示 MT-GRPO 在最差任务准确率上持续优于基线：相对标准 GRPO 和 DAPO 分别实现 16-28% 和 6% 的绝对改进，同时保持竞争平均准确率；3 任务设置中达到 50% 最差任务准确率所需训练步数减少 50%。

## 正文

基于 RL 的 GRPO 训练后广泛用于在单个推理任务上改进大语言模型。然而，真实世界部署需要跨多样任务的可靠性能。GRPO 的直接多任务适应常导致不平衡结果，一些任务支配优化而其他停滞。此外，任务在提示产生零优势（从而零梯度）的频率上差异很大，进一步扭曲其对优化信号的有效贡献。为解决这些问题，我们提出新颖多任务 GRPO（Multi-Task GRPO，MT-GRPO）算法：（i）动态适应任务权重，显式优化最差任务性能并促进跨任务平衡进展；（ii）引入保比采样器，确保任务策略梯度反映适应权重。3 任务和 9 任务设置实验表明，MT-GRPO 在最差任务准确率上持续优于基线。特别是，MT-GRPO 相对标准 GRPO 和 DAPO 在最差任务性能上分别实现 16-28% 和 6% 的绝对改进，同时保持竞争平均准确率。此外，MT-GRPO 在 3 任务设置中达到 50% 最差任务准确率所需训练步数减少 50%，展示跨任务可靠性能的效率大幅改进。

## 关键词

#GRPO #多任务学习 #强化学习 #LLM推理 #arXiv