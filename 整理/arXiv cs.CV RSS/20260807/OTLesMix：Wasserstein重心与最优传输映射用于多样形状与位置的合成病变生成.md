---
published: 2026-08-07
title: "OTLesMix：Wasserstein 重心与最优传输映射用于多样形状与位置的合成病变生成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/OTLesMix- Wasserstein Barycenter and Optimal Transport Map for Synthetic Lesion Generation with Dive.md"
source_note: "[[信息源/arXiv cs.CV RSS/OTLesMix- Wasserstein Barycenter and Optimal Transport Map for Synthetic Lesion Generation with Dive]]"
source_sha256: 6d67b767c0d33ca9ef234f7f21eb8a915a8d2f88b8d4f37f4306b37d27c89100
original_url: "https://arxiv.org/abs/2608.06264"
processed: 2026-08-07
language: zh-CN
---

# OTLesMix：Wasserstein 重心与最优传输映射用于多样形状与位置的合成病变生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Robin Trombetta, Carole Lartizien
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06264)

## 摘要

- 深度学习革命性改变医学影像分割，可从大体积中提取精确描述符表征病理；数据增广是广泛认可的改进模型训练的技术，包括简单变换（空间操作、强度修改）与更高级的合成技术，目标是从现有数据集生成真实新样本以多样化训练图像。
- 现有混合策略组合真实样本，但主要不足是生成的病变形状与位置可变性有限。
- 引入 OTLesMix：利用 Wasserstein 重心与最优传输计划生成真实且多样的样本。
- 三个脑病变分割任务上，相对无合成数据训练模型 Dice 提升 2.9–6.6 点，并超越最先进的基于混合的方法。

## 正文

过去十年深度学习的发展革命性改变了医学影像分割，允许从大体积中提取精确描述符以表征病理。数据增广被广泛视为改进模型训练的技术，包括空间操作或强度修改等简单变换，以及更高级的合成技术。其目标是从现有数据集生成新的真实样本，以多样化训练所用图像。其中，若干技术提出不同混合策略组合真实样本。然而，它们的主要不足之一是生成的病变形状与位置可变性有限。本文引入新颖图像合成方法 OTLesMix，利用 Wasserstein 重心与最优传输计划生成真实且多样的样本。研究在三个脑病变分割任务上评估该方法，相对不使用合成数据训练的模型，Dice 分数提升 2.9 至 6.6 点，并超越最先进的基于混合的方法。

## 关键词

最优传输、Wasserstein 重心、数据增广、病变分割、医学影像
