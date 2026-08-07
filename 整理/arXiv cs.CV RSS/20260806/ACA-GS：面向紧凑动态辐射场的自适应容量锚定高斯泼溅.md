---
published: 2026-08-06
title: ACA-GS：面向紧凑动态辐射场的自适应容量锚定高斯泼溅
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ACA-GS- Adaptive-Capacity Anchored Gaussian Splatting for Compact Dynamic Radiance Fields.md
source_note: "[[信息源/arXiv cs.CV RSS/ACA-GS- Adaptive-Capacity Anchored Gaussian Splatting for Compact Dynamic Radiance Fields|查看原始文件]]"
source_sha256: 7d9fa4aba7c2765f649c5814dead0e81c6345f46b984ee18e08e1cec83ea2bce
original_url: https://arxiv.org/abs/2608.04581
processed: 2026-08-07
language: zh-CN
---

# ACA-GS：面向紧凑动态辐射场的自适应容量锚定高斯泼溅

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04581)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ACA-GS- Adaptive-Capacity Anchored Gaussian Splatting for Compact Dynamic Radiance Fields|查看原始文件]]

## 摘要

- 4D 高斯泼溅（4DGS）实现高保真实时时空渲染，但运动表现力与存储效率之间存在根本权衡
- 锚定设计通过锚级参数共享实现紧凑性，但刚性统一参数化强制每个锚固定数量的神经高斯与特征预算，导致内存浪费
- 提出自适应容量锚定框架：自适应锚基数动态调整每锚神经高斯数，自适应锚特征掩码调制特征通道
- 在 MPEG、Panoptic Sports 与 N3DV 数据集上显著降低存储且不损视觉质量，MPEG 复杂运动序列上压缩率最高提升 1.5 倍

## 正文

4D 高斯泼溅（4DGS）的最新进展实现了高保真、实时的时空渲染，但也暴露出运动表现力与存储效率之间的根本性权衡。锚定设计（anchor-based designs）通过锚级参数共享实现紧凑性，但其刚性的统一参数化强制每个锚拥有固定的神经高斯数量和特征预算。因此，保真度不足时只能通过过密的锚密度来弥补，而非通过轻量、针对性的神经高斯数量或特征容量提升，从而造成内存浪费。

为克服这种刚性，我们引入了一种自适应容量锚定框架，根据局部时空需求动态分配表征容量。自适应锚基数（Adaptive Anchor Cardinality）改变每个锚的神经高斯数量，将基元集中在几何或运动复杂度高的区域，同时抑制冗余。与之并行，自适应锚特征掩码（Adaptive Anchor Feature Masking）调制锚级特征通道，为复杂区域分配丰富特征，为简单区域分配轻量表征。

在 MPEG、Panoptic Sports 和 N3DV 数据集上的实验表明，我们的方法在显著减少存储的同时不降低视觉质量。值得注意的是，在具有复杂运动的挑战性 MPEG 序列上，我们的方法相比最先进的锚定方法实现了最高 1.5 倍的更高压缩率，同时保持相当的质量。

## 关键词

#高斯泼溅 #动态辐射场 #4DGS #压缩 #渲染
