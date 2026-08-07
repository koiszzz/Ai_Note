---
published: 2026-08-06
title: UBLLIE：统一的背光与低光图像增强
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/UBLLIE- Unified Backlight and Low-Light Image Enhancement.md
source_note: "[[信息源/arXiv cs.CV RSS/UBLLIE- Unified Backlight and Low-Light Image Enhancement]]"
source_sha256: 6f192c4527c9afe6b2ac7acb751e937fed786b989e25f634b3b27de034e3334f
original_url: https://arxiv.org/abs/2608.04429
processed: 2026-08-07
language: zh-CN
---

# UBLLIE：统一的背光与低光图像增强

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04429)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/UBLLIE- Unified Backlight and Low-Light Image Enhancement|查看原始文件]]

## 摘要

- 提出统一的无监督增强框架，同时处理背光与低光两类退化，无需成对的真值数据。
- 采用 CLIP 引导的提示学习进行语义监督，并设计带空洞空间金字塔池化的对称残差 U-Net 主干，捕捉多尺度上下文信息。
- 在 BAID、Backlit300、LOL 与 VE-LOL-L 等成对与非成对数据集上，在保真度、感知质量与泛化性上一致超越最先进的有监督与无监督方法。

## 正文

背光与低光图像常遭受严重的曝光失衡或整体欠曝，对视觉感知与下游计算机视觉任务都构成重大挑战。本文提出一个统一的无监督增强框架，在无需成对真值数据的前提下同时处理这两类退化。我们的方法建立在 CLIP 引导的提示学习之上，利用学习到的正负文本提示进行语义级监督。为在先前工作的基础上进一步提升质量，我们设计了带空洞空间金字塔池化（Atrous Spatial Pyramid Pooling）模块的对称残差 U-Net 主干。该架构捕捉多尺度上下文信息，能够在空间异质光照下进行自适应校正。训练期间，增强网络由基于 CLIP 的语义相似度损失引导，并通过迭代提示优化机制进行细化。在成对与非成对数据集（包括 BAID、Backlit300、LOL 和 VE-LOL-L）上的大量实验表明，我们的框架在保真度、感知质量与泛化性方面一致优于最先进的有监督与无监督方法。此外，我们的工作强调需要为背光增强（一个相对未被充分探索的领域）建立更强的基准评测协议。所提出的框架为多样光照条件下的真实世界光照增强提供了稳健、可扩展的解决方案。

## 关键词

#图像增强 #背光 #低光 #CLIP #无监督学习
