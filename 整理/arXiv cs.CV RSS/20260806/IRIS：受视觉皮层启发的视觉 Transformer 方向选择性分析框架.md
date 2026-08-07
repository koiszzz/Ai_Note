---
published: 2026-08-06
title: IRIS：受视觉皮层启发的视觉 Transformer 方向选择性分析框架
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/IRIS- A Visual Cortex-Inspired Framework for Analyzing Orientation Selectivity in Vision Transformer.md
source_note: "[[信息源/arXiv cs.CV RSS/IRIS- A Visual Cortex-Inspired Framework for Analyzing Orientation Selectivity in Vision Transformer]]"
source_sha256: 98b6a8b43b527c6812c0fcad593d844c27ea7baa8077e94a17e44adf1338a04e
original_url: https://arxiv.org/abs/2608.05122
processed: 2026-08-07
language: zh-CN
---

# IRIS：受视觉皮层启发的视觉 Transformer 方向选择性分析框架

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05122)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/IRIS- A Visual Cortex-Inspired Framework for Analyzing Orientation Selectivity in Vision Transformer|查看原始文件]]

## 摘要

- 引入一套受神经科学启发的度量（RSS、ORS、方向调谐带宽），系统研究视觉 Transformer（ViT）中方向选择性如何涌现。
- 发现训练范式是方向选择性的最强决定因素；训练早期许多单元即具方向选择性，深层则转向语义编码。
- 提出的度量可作为判断解冻多少层以获最佳下游泛化的机制启发式，并支持追踪 ViT 训练中的生物学基础特征。

## 正文

视觉 Transformer（ViT）已成为众多感知任务中图像编码的事实标准。尽管取得了经验上的成功，但鉴于其缺乏归纳偏置，它们在机制层面如何编码低层特征仍不清楚：ViT 全局地处理信息，而非依赖局部结构。相比之下，生物视觉系统通过整合视野中小的局部区域的信息来构建低层特征，例如初级视觉皮层中的方向选择性。这些特征是一种通用表示，为多条特化的神经通路所共享且必需，不同于高层、任务特化的语义特征。这引发了一个问题：此类源自生物学的特征是否会在 ViT 中涌现。

在本工作中，我们通过引入一套受神经科学启发的度量来系统研究方向选择性如何在 ViT 中涌现：表征相似性得分（representational similarity score, RSS）、方向招募得分（orientation recruitment score, ORS）和方向调谐带宽（orientation tuning bandwidth），用以量化方向如何在表征几何中、以及作为模型深度的函数被编码。

通过大量分析我们发现：（1）训练范式是方向选择性的最强决定因素，共享同一目标的模型无论规模如何，都在相近的相对深度处达到峰值；（2）许多单元在训练早期就具有方向选择性，中早期层随时间招募更多此类单元，而深层则丧失选择性，将调谐扩展至语义编码；（3）我们的度量提供了一种机制启发式，用于判断解冻多少层可获得最佳下游泛化。

我们的框架提供了一种在 ViT 训练期间追踪生物学基础特征的方法，探测期望属性如何在 Transformer 表征中被编码，并系统性地构建对 ViT 跨任务泛化的理解。

## 关键词

#视觉Transformer #方向选择性 #可解释性 #表征分析
