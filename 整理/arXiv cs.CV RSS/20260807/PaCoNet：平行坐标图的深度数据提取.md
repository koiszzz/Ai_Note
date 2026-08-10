---
published: 2026-08-07
title: "PaCoNet：平行坐标图的深度数据提取"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/PaCoNet- Deep Data Extraction for Parallel Coordinates.md"
source_note: "[[信息源/arXiv cs.CV RSS/PaCoNet- Deep Data Extraction for Parallel Coordinates]]"
source_sha256: 8a81997f875c4e691ad39b0ce06ebc9ab7c18bb5f7a2592035553886400d6db9
original_url: "https://arxiv.org/abs/2608.06030"
processed: 2026-08-07
language: zh-CN
---

# PaCoNet：平行坐标图的深度数据提取

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Poonam Poonam, Hannah Kniesel, Pere-Pau Vázquez, Timo Ropinski
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06030)

## 摘要

- 从可视化提取数据长期挑战计算机视觉，当前研究聚焦条形图、线图与饼图等低维可视化；平行坐标作为广泛使用的高维数据可视化方法，在此背景下仍基本未探索。
- 平行坐标图设计差或数据密集时快速变得杂乱难解释，从此类可视化自动提取数据特别有价值。
- 提出 PaCoNet：首个平行坐标数据提取方法；不仅提取线坐标，还支持提取单个数据样本供进一步分析；贡献：首个针对平行坐标分析的深度学习方案，显著超越未适配基线；引入大规模平行坐标数据集用于训练与测试。
- 首次实现平行坐标图的自动化分析与重新设计；为复杂可视化分析奠定基础，推进计算机视觉与数据可视化交叉；代码、训练模型与数据生成脚本将公开。

## 正文

从可视化中提取数据长期挑战计算机视觉，当前研究聚焦条形图、折线图与饼图等低维可视化。然而，平行坐标（parallel coordinates）作为一种广泛使用的高维数据可视化方法，在此背景下仍基本未被探索。由于平行坐标图在设计不佳或数据密集时可能迅速变得杂乱且难以解释，从此类可视化中自动提取数据特别有价值。本文提出 PaCoNet，第一个平行坐标数据提取方法。PaCoNet 不仅提取线的坐标，还支持提取单个数据样本以供进一步分析。为此，研究做出以下贡献。研究呈现第一个针对平行坐标分析定制的深度学习方法，并证明它显著优于未适配的基线。研究还引入一个用于训练与测试的大规模平行坐标数据集。这些关键贡献共同首次实现平行坐标图的自动化分析与重新设计。PaCoNet 因此为复杂可视化分析奠定基础，并进一步推进计算机视觉与数据可视化的交叉。论文接收后，所有代码、训练模型与数据生成脚本将公开。

## 关键词

平行坐标、数据提取、可视化、深度学习、图表理解
