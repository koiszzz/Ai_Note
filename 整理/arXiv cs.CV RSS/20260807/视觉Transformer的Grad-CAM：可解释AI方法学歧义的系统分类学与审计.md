---
published: 2026-08-07
title: "视觉 Transformer 的 Grad-CAM：可解释 AI 方法学歧义的系统分类学与审计"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Grad-CAM for Vision Transformers- A Systematic Taxonomy and Audit of Methodological Ambiguity in Exp.md"
source_note: "[[信息源/arXiv cs.CV RSS/Grad-CAM for Vision Transformers- A Systematic Taxonomy and Audit of Methodological Ambiguity in Exp]]"
source_sha256: b5fc9e2691a40417994e6d8a59b0c04d06fd6c3bc2f52c1ccc14bebe20d2405a
original_url: "https://arxiv.org/abs/2608.05258"
processed: 2026-08-07
language: zh-CN
---

# 视觉 Transformer 的 Grad-CAM：可解释 AI 方法学歧义的系统分类学与审计

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Casey Wall, Longwei Wang, Rodrigue Rizk, KC Santosh
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05258)

## 摘要

- 梯度加权类激活映射（Grad-CAM）广泛用于可视化模型决策，但最初为卷积神经网络形式化，其中空间特征图与通道维度有清晰架构意义。
- 视觉 Transformer（ViT）不提供相同结构，而是经 token、注意力、残差流与多模态交互表示图像。
- 呈现 Grad-CAM 及相关方法如何为 ViT 基架构适配、论证与报告的系统分类学与文献审计；从 550+ 论文初始搜索识别 175 篇将 Grad-CAM 或邻近方法应用于 ViT 的论文。
- 多数论文未提供 Grad-CAM 如何适配 transformer 表征的完整数学或实现级说明；引入 ViT Grad-CAM 适配的描述性分类学，使常被隐含的特征位置、梯度目标、空间重建步骤与聚合选择显式化；分类学不预设单一正确适配，而是澄清所做出的方法学选择范围；ViT 上的 Grad-CAM 常被视为 CNN 基 Grad-CAM 的平凡扩展，尽管它需要影响严谨性、可复现性与解读的非平凡选择。

## 正文

梯度加权类激活映射（Gradient-weighted Class Activation Mapping, Grad-CAM）广泛用于可视化模型决策，但它最初为卷积神经网络形式化，其中空间特征图与通道维度具有清晰的架构意义。视觉 Transformer（ViTs）不提供相同结构，而是通过 token、注意力、残差流与多模态交互表示图像。本文呈现一个系统分类学与文献审计：Grad-CAM 及相关方法如何为基于 ViT 的架构适配、论证与报告。从 550 多篇论文的初始搜索中，研究识别出 175 篇将 Grad-CAM 或 Grad-CAM 邻近方法应用于 ViT 的论文。研究发现，大多数论文没有提供 Grad-CAM 如何适配 transformer 表征的完整数学或实现级说明。为刻画该差距，研究引入一个 ViT Grad-CAM 适配的描述性分类学，使常被隐含的特征位置、梯度目标、空间重建步骤与聚合选择显式化。该分类学并非预设单一正确适配，而是澄清所做出的方法学选择范围。研究表明，ViT 上的 Grad-CAM 常被视为 CNN 基 Grad-CAM 的平凡扩展，尽管它要求影响严谨性、可复现性与解读的非平凡选择。

## 关键词

Grad-CAM、视觉 Transformer、可解释性、分类学、审计
