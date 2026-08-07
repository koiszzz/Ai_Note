---
published: 2026-08-06
title: MultiPathFormer：迈向多径无线传播的基础模型
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation.md
source_note: "[[信息源/arXiv cs.LG RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation|查看原始文件]]"
source_sha256: 2e0975f82497fa4a7a7e0e79b39795f5e2131519ff6302fe072e095d0bf1816c
original_url: https://arxiv.org/abs/2608.05076
processed: 2026-08-07
language: zh-CN
---

# MultiPathFormer：迈向多径无线传播的基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05076)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation|查看原始文件]]

## 摘要

- 现有无线基础模型通常在信道张量上进行子载波、天线或时间维度的掩码重建预训练，但忽略了无线传播的物理特性
- 提出以多径传播作为基本预训练对象，MultiPathFormer 将每个收发链路表示为有序的连续值路径令牌序列，用下一路径预测进行预训练
- 引入环境 RAG 机制与首路径码本，将延迟与功率等路径统计估计提升最多 59%，在 27 个环境预训练后可在下游任务上超越 SOTA 信道基础模型

## 正文

机器学习的最新进展使得训练无线基础模型成为可能，这些模型旨在支持基于无线信号的信道估计、波束预测和定位等任务。现有的无线基础模型通常通过子载波、天线或时间维度上的掩码重建在信道张量上进行预训练，但忽略了无线传播的物理特性。在这项工作中，我们提出改用多径传播作为基本的预训练对象。我们提出 MultiPathFormer，一个自回归基础模型，它将每个发射-接收链路表示为有序的连续值路径令牌序列，并通过下一路径预测进行预训练。我们在 Transformer 主干之上引入了一种环境 RAG（检索增强生成）机制和一个首路径码本，利用环境知识将延迟和功率等路径统计估计提升多达 59%。在 27 个环境上预训练的 MultiPathFormer 可以迁移到未见过的用户，并且在针对特定场景微调后，在新环境中的表现优于从头训练相应模型。在下游任务中，它超越了 SOTA 的基于信道的模型，实现了 5.57 米（m）的平均定位误差、0.914 的 Top-3 波束准确率、0.994 的视距（LOS）分类准确率以及 0.561 的信道估计 NMSE。这些结果表明，路径级预训练可以学习到无线传播的可复用表示。

## 关键词

#无线基础模型 #多径传播 #信道估计 #自回归 #预训练
