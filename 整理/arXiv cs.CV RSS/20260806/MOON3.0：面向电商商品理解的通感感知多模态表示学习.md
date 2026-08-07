---
published: 2026-08-06
title: MOON3.0：面向电商商品理解的通感感知多模态表示学习
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding|查看原始文件]]"
source_sha256: 43d223787d83f6f7aad48cbbee32bdd91f9e01dc37067607015416a9535e6705
original_url: https://arxiv.org/abs/2604.00513
processed: 2026-08-07
language: zh-CN
---

# MOON3.0：面向电商商品理解的通感感知多模态表示学习

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.00513)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MOON3.0- Reasoning-aware Multimodal Representation Learning for E-commerce Product Understanding|查看原始文件]]

## 摘要

- 电商快速增长下，探索通用表示而非任务特定表示日益受到关注；MLLM 常被用作特征提取器，将商品信息隐式编码进全局嵌入，难以捕捉细粒度属性
- 提出 MOON3.0：首个面向商品表示学习的通感感知（reasoning-aware）MLLM 模型
- 三个关键模块：多头模态融合模块自适应整合原始信号；联合对比学习与强化学习框架自主探索更有效的推理策略；细粒度残差增强模块在网络中逐步保留局部细节
- 发布大规模多模态电商基准 MBE3.0；在基准与公开数据集上各类下游任务实现 SOTA 零样本性能

## 正文

随着电子商务的快速增长，探索通用表示而非任务特定表示日益受到关注。尽管近年来的多模态大语言模型（MLLM）在商品理解方面取得了显著进展，但它们通常被用作特征提取器，将商品信息隐式编码为全局嵌入，从而限制了其捕捉细粒度属性的能力。因此，我们认为利用 MLLM 的推理能力来显式建模细粒度商品属性具有巨大潜力。

然而，实现这一目标仍非易事，这源于几个关键挑战：（i）长上下文推理往往会稀释模型对原始输入中显著信息的注意力；（ii）监督微调（SFT）主要鼓励僵化的模仿，限制了对有效推理策略的探索；（iii）细粒度细节在前向传播过程中逐渐衰减。为应对这些问题，我们提出 MOON3.0——首个面向商品表示学习的通感感知 MLLM 模型。我们的方法（1）采用多头模态融合模块自适应整合原始信号；（2）引入联合对比学习与强化学习框架，自主探索更有效的推理策略；（3）提出细粒度残差增强模块，在网络中逐步保留局部细节。

此外，我们发布了一个大规模多模态电商基准 MBE3.0。实验表明，我们的模型在我们自己的基准以及公开数据集上的各类下游任务中均展现出最先进的零样本性能。

## 关键词

#多模态大语言模型 #表示学习 #电商 #商品理解 #强化学习
