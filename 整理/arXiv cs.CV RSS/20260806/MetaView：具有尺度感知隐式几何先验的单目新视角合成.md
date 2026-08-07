---
published: 2026-08-06
title: MetaView：具有尺度感知隐式几何先验的单目新视角合成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MetaView- Monocular Novel View Synthesis with Scale-Aware Implicit Geometry Priors.md
source_note: "[[信息源/arXiv cs.CV RSS/MetaView- Monocular Novel View Synthesis with Scale-Aware Implicit Geometry Priors]]"
source_sha256: 52aafd50800618986112f8c8f59bdb2a8506bd6a5fcb1e213df2872ae3b4e27a
original_url: https://arxiv.org/abs/2607.12000
processed: 2026-08-07
language: zh-CN
---

# MetaView：具有尺度感知隐式几何先验的单目新视角合成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.12000)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MetaView- Monocular Novel View Synthesis with Scale-Aware Implicit Geometry Priors|查看原始文件]]

## 摘要

- 提出 MetaView：基于扩散的单目新视角合成框架，从单张图像实现大视角变化下的渲染，将隐式几何建模与最少且必要的显式 3D 线索（度量深度）相结合。
- 从前馈几何感知网络引入隐式几何先验以正则化结构，无需限制性重建流水线；利用度量深度将生成锚定到度量尺度，兼顾几何一致性与精确可控性。
- 在具有挑战性的单目大视角变化下显著优于现有方法并展现卓越泛化；代码已开源。

## 正文

当前的视觉生成模型能够产生高质量内容，但缺乏对空间结构的连贯感知。现有的生成式新视角合成方法通常引入显式几何先验，这虽然保证了空间一致性，但内在限制了大视角变化下的泛化能力。相比之下，近期交互式生成方法倾向于隐式场景建模，以牺牲精确相机控制和几何一致性为代价换取更大灵活性。

在本文中，我们提出 MetaView——一个基于扩散的单目新视角合成框架，支持从单张图像在较大视角变化下进行渲染。我们的关键洞察是将隐式几何建模与最少但必要的显式 3D 线索相结合：我们引入来自前馈几何感知网络的隐式几何先验来正则化结构，而无需强加限制性的重建流水线，同时利用度量深度将生成锚定到度量尺度。

这种设计使 MetaView 同时实现几何一致性和精确可控性。大量实验表明，在具有挑战性的单目大视角变化下，MetaView 显著优于现有方法，并展现出卓越的泛化能力。我们的代码已在 https://github.com/KlingAIResearch/MetaView 公开发布。

## 关键词

#新视角合成 #单目几何 #扩散模型 #隐式几何先验
