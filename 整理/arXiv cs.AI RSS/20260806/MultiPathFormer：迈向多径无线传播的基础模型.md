---
published: 20260806
title: "MultiPathFormer：迈向多径无线传播的基础模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation.md"
source_note: "[[信息源/arXiv cs.AI RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation]]"
source_sha256: d51bf38b1c77c5c5acc7daf427ccc164396a65ff0f224d3acf9c2e0d587bc198
original_url: "https://arxiv.org/abs/2608.05076"
processed: 2026-08-06
language: zh-CN

---

# MultiPathFormer：迈向多径无线传播的基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Blessed Guda, Kayley Sze, Carlee Joe-Wong
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05076)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MultiPathFormer- Towards a Foundation Model for Multipath Wireless Propagation|查看原始文件]]

## 摘要

- 机器学习近期进展使无线基础模型训练成为可能，旨在支持基于无线信号的信道估计、波束预测和定位等任务；现有无线基础模型通常通过子载波、天线或时间上的掩蔽重建预训练信道张量，但忽略无线传播的物理特性。
- 本文提出以多径传播作为基本预训练对象：呈现 MultiPathFormer，一个自回归基础模型，将每个发射-接收链路表示为连续值路径 token 的有序序列，并用下一路径预测预训练。
- 引入环境 RAG（检索增强生成）机制和 Transformer 骨干上的首路径码本，利用环境知识将延迟和功率等路径统计估计改进最多 59%；在 27 个环境预训练的 MultiPathFormer 迁移到未见用户，场景特定微调后优于在新环境从零训练，跨下游任务超越最先进基于信道的基金模型。

## 正文

机器学习近期进展使无线基础模型训练成为可能，旨在支持基于无线信号的信道估计、波束预测和定位等任务。现有无线基础模型通常通过子载波、天线或时间上的掩蔽重建预训练信道张量，但忽略无线传播的物理特性。在本工作中，我们提出以多径传播作为基本预训练对象。我们呈现 MultiPathFormer，一个自回归基础模型，将每个发射-接收链路表示为连续值路径 token 的有序序列，并用下一路径预测（next-path prediction）预训练。我们在 Transformer 骨干上引入环境 RAG（检索增强生成）机制和首路径码本，利用环境知识将延迟和功率等路径统计估计改进最多 59%。在 27 个环境预训练的 MultiPathFormer 迁移到未见用户，场景特定微调后优于在新环境从零训练相应模型。跨下游任务，它超越最先进基于信道的基金模型，实现 5.57 m 平均定位误差、0.914 top-3 波束准确率、0.994 视线分类准确率和 0.561 信道估计 NMSE。这些结果表明，路径级预训练可学习无线传播的可复用表示。

## 关键词

#无线基础模型 #多径传播 #自回归预训练 #信道估计 #arXiv