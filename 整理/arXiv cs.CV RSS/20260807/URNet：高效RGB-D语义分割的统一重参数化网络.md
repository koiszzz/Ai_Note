---
published: 2026-08-07
title: "URNet：高效 RGB-D 语义分割的统一重参数化网络"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/URNet- A Unified Reparameterized Network for Efficient RGB-D Semantic Segmentation.md"
source_note: "[[信息源/arXiv cs.CV RSS/URNet- A Unified Reparameterized Network for Efficient RGB-D Semantic Segmentation]]"
source_sha256: cf67f46af31b5fb90a4a08959f6aec71411c41b0f88363cd9f79bcd77b1b98a5
original_url: "https://arxiv.org/abs/2608.05671"
processed: 2026-08-07
language: zh-CN
---

# URNet：高效 RGB-D 语义分割的统一重参数化网络

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Guoan Xu, Zhengxue Wang, Yang Xiao, Ligeng Chen, Guangwei Gao, Dongchen Zhu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05671)

## 摘要

- 先前 RGB-D 语义分割方法通常采用双编码器分别处理 RGB 与深度输入，后接专用跨模态特征融合模块；此类设计常无法充分捕捉深度表征，限制有效跨模态交互，额外编码器分支引入冗余计算阻碍轻量执行。
- 提出 URNet：统一重参数化 RGB-D 网络，在单一编码器内同时进行多模态特征提取与跨模态融合。
- 采用重参数化策略紧凑网络架构、促进快速推理；每个重参数化块（RepBlock）内引入线性门控注意力（LGA）模块，充分挖掘不同特征尺度的互补 RGB 与深度线索；考虑解码器设计在现有 RGB-D 分割模型中被相对忽视，开发简洁而有效的通用解码器：金字塔合并解码器（PMD）。
- 多个 RGB-D 分割基准大量实验显示 URNet 在保持高效率的同时取得 SOTA 性能；代码公开。

## 正文

先前的 RGB-D 语义分割方法通常采用双编码器分别处理 RGB 与深度输入，后接用于跨模态特征融合的专用模块。然而，此类设计往往无法充分捕捉深度表征，从而限制有效的跨模态交互，而额外的编码器分支引入冗余计算，阻碍轻量执行。为应对这些挑战，研究提出 URNet，一个统一重参数化 RGB-D 网络：在单一编码器内同时执行多模态特征提取与跨模态融合。具体地，研究采用重参数化策略紧凑网络架构并促进快速推理。在每个重参数化块（Reparameterized Block, RepBlock）内，引入一个线性门控注意力（Linear Gated Attention, LGA）模块，充分挖掘不同特征尺度上的互补 RGB 与深度线索。此外，考虑到解码器设计在现有 RGB-D 分割模型中相对未被探索，研究开发一个简洁而有效的通用解码器：金字塔合并解码器（Pyramid Merging Decoder, PMD）。多个 RGB-D 分割基准上的大量实验表明，URNet 在保持高效率的同时取得最先进性能。代码见 https://github.com/Wild-Stephen/URNet。

## 关键词

RGB-D 分割、重参数化、单编码器、线性门控注意力、高效
