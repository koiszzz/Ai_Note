---
published: 2026-08-06
title: MME：随机游走Transformer门控的网格专家混合模型
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MME- Mixture of Mesh Experts with Random Walk Transformer Gating.md
source_note: "[[信息源/arXiv cs.CV RSS/MME- Mixture of Mesh Experts with Random Walk Transformer Gating|查看原始文件]]"
source_sha256: 2fbd22775968e00f9fe94c8dd2d90f42a3b1cadb5b951f77cd96380ddcfb239f
original_url: https://arxiv.org/abs/2603.00828
processed: 2026-08-07
language: zh-CN
---

# MME：随机游走Transformer门控的网格专家混合模型

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.00828)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MME- Mixture of Mesh Experts with Random Walk Transformer Gating|查看原始文件]]

## 摘要

- 提出一种新颖的专家混合（MoE）框架，利用多种网格分析方法互补的优势
- 新门控架构基于两个关键思想：网格表面上的随机游走能有效捕捉各专家关注的区域；注意力机制使门控聚焦于对每个专家决策最有信息量的区域
- 引入动态损失平衡方案，训练中动态调整多样性与相似性损失之间的权衡，分别促进专家专业化与知识共享
- 在网格分类、检索和语义分割任务上达到最先进水平

## 正文

近年来，人们提出了多种网格分析方法，每种方法都有各自的优势，并且通常在不同的物体类别上表现优异。我们提出一种新颖的专家混合（Mixture of Experts，MoE）框架，旨在利用这些多样化方法的互补优势。我们提出一种新的门控架构，鼓励每个专家在其擅长的类别上实现专业化。

我们的设计由两个关键思想引导：（1）网格表面上的随机游走能够有效捕捉各个专家所关注的区域；（2）注意力机制使门控能够聚焦于对每个专家决策最有信息量的区域。为进一步提升性能，我们引入一种动态损失平衡方案，在训练过程中动态调整多样性损失与相似性损失之间的权衡，其中多样性促使专家专业化，相似性则使专家之间能够共享知识。

我们的框架在网格分类、检索和语义分割任务上达到了最先进的结果。代码可在 https://github.com/amirbelder/MME-Mixture-of-Mesh-Experts 获取。

## 关键词

#3D网格分析 #专家混合 #门控网络 #随机游走 #Transformer
