---
published: 2026-08-06
title: BnBERT-iPET基于彩票假说剪枝的孟加拉语稀疏少样本语言建模
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/BnBERT-iPET- Sparse Few-Shot Language Modeling for Bengali via Lottery Ticket Pruning.md
source_note: "[[信息源/arXiv cs.LG RSS/BnBERT-iPET- Sparse Few-Shot Language Modeling for Bengali via Lottery Ticket Pruning]]"
source_sha256: 04294dc70358fd4f2baeabf80a8ca2bb44353174a6a7352923f26010c96d654b
original_url: https://arxiv.org/abs/2608.05104
processed: 2026-08-07
language: zh-CN
---

# BnBERT-iPET基于彩票假说剪枝的孟加拉语稀疏少样本语言建模

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05104)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/BnBERT-iPET- Sparse Few-Shot Language Modeling for Bengali via Lottery Ticket Pruning|查看原始文件]]

## 摘要

- 提出 BnBERT-iPET：面向孟加拉语的稀疏少样本语言建模方法。
- 仅保留初始模型 10% 边的轻量级模型即可在资源受限语言的任务上与更大的模型并驾齐驱。
- 通过迭代模式利用训练实现少样本学习，并以彩票假说剪枝达到 90% 稀疏度。

## 正文

深度神经网络凭借其复杂的结构和海量的边（连接）在自然语言处理（NLP）任务中取得了令人瞩目的成功。使用诸如 BERT 这样的大型预训练模型在自然语言处理中达到最先进的性能既昂贵又耗时，碳足迹巨大，并且在计算能力有限的机器上难以实现。这为孟加拉语等资源受限语言的复杂模型训练设置了障碍。然而，在复杂的神经模型中，并非所有边都同等重要，其中一些边的贡献可以被忽略。剪枝有望减少常规网络的内存占用，缩短不断增长的网络的训练时间，并在不牺牲可比性能的前提下提高推理效率。在这项工作中，我们提出了 BnBERT-iPET，一种面向孟加拉语的稀疏少样本语言建模方法，并通过实验表明，一个仅保留初始模型（如 BERT）10% 边的轻量级少样本学习语言模型，可以在孟加拉语这类资源受限语言上的具有挑战性的任务中与更大的模型并驾齐驱。通过迭代模式利用训练进行少样本学习，并借助彩票假说（Lottery Ticket Hypothesis）剪枝技术实现 90% 的稀疏度，我们剪枝后的 BnBERT-iPET 模型在孟加拉语标准基准数据集的下游任务上被证明是 Bangla Electra、Indic-BERT 和 XLM-RoBERTa 等最先进语言模型的有力竞争对手。

## 关键词

#BnBERT #少样本学习 #彩票假说 #剪枝 #孟加拉语 #资源受限语言
