---
published: 2026-08-07
title: "LumaGuide：扩散模型免训练 HDR 生成的分布塑形"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/LumaGuide- Distribution Shaping for Training-Free HDR Generation in Diffusion Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/LumaGuide- Distribution Shaping for Training-Free HDR Generation in Diffusion Models]]"
source_sha256: 4ba46bc9e8b986c9af6c6a97fcd5ad16be3a99c1a3bd85b5f79667dace7add24
original_url: "https://arxiv.org/abs/2607.26237"
processed: 2026-08-07
language: zh-CN
---

# LumaGuide：扩散模型免训练 HDR 生成的分布塑形

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Bowen Chen, Shreshth Saini, Balu Adsumilli, Alan C. Bovik
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.26237)

## 摘要

- 预训练扩散模型生成逼真图像，但受训练数据统计偏置约束，限制生成高动态范围（HDR）内容的能力。
- 引入 LumaGuide：扩散模型分布塑形的免训练框架；不修改模型参数，经可微能量基引导将采样过程导向匹配目标特征分布。
- 在感知均匀 PQ 空间控制亮度分布实例化该框架用于 HDR 生成；结果证明对齐亮度直方图足以诱导 HDR 一致行为，包括连贯高光与保留阴影细节，同时保持语义保真度。
- 超越 HDR，LumaGuide 经数据驱动预设、参考图像或文本驱动预测器灵活指定目标分布，并以时间一致性约束自然扩展到视频生成；更广泛地证明可控生成可经在采样时直接塑形输出分布实现，无需重训扩散模型。

## 正文

预训练扩散模型生成逼真的图像，但受其训练数据统计偏置的约束，限制其产生高动态范围（high dynamic range, HDR）内容的能力。本文引入 LumaGuide，一个用于扩散模型分布塑形（distribution shaping）的免训练框架。不修改模型参数，LumaGuide 经可微的能量基引导（energy-based guidance），将采样过程导向匹配目标特征分布。研究通过控制感知均匀 PQ 空间中的亮度分布，将该框架实例化用于 HDR 生成。结果显示，对齐亮度直方图足以诱导 HDR 一致的行为，包括连贯高光与保留的阴影细节，同时保持语义保真度。超越 HDR，LumaGuide 支持通过数据驱动预设、参考图像或文本驱动预测器灵活指定目标分布，并以时间一致性约束自然扩展到视频生成。更广泛地，该工作证明可控生成可以通过在采样时直接塑形输出分布实现，无需重训练扩散模型。

## 关键词

HDR 生成、扩散模型、分布塑形、能量引导、免训练
