---
published: 2026-08-06
title: OutLangSplat：面向无人机室外场景的三维语言高斯泼溅
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/OutLangSplat- 3D Language Gaussian Splatting for UAV Outdoor Scenes.md
source_note: "[[信息源/arXiv cs.CV RSS/OutLangSplat- 3D Language Gaussian Splatting for UAV Outdoor Scenes]]"
source_sha256: 46ccd99c415a435a8a7270b8a3f04944186c4f33c4ad430a518018cc6ca9c9a8
original_url: https://arxiv.org/abs/2608.04560
processed: 2026-08-07
language: zh-CN
---

# OutLangSplat：面向无人机室外场景的三维语言高斯泼溅

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04560)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/OutLangSplat- 3D Language Gaussian Splatting for UAV Outdoor Scenes|查看原始文件]]

## 摘要

- 将语言高斯表示适配到无人机室外场景，解决严重遮挡与远距离视角导致的错误语义激活和响应缺失。
- 提出 2D-3D 双分支特征表示（区域对齐与融合）以及免训练的贡献与一致性感知高斯特征聚合策略。
- 首个面向无人机室外场景的开放词汇三维场景理解数据集；在开放词汇语义分割与实例定位上超越 SOTA 方法。

## 正文

三维语言高斯泼溅（3D Language Gaussian Splatting）将开放词汇语言特征嵌入三维高斯泼溅，为文本驱动的三维场景理解提供了一种高效的显式表示。然而，现有方法仅限于室内或小规模场景，在无人机（UAV）室外场景中往往失效——严重的遮挡和远距离视角常导致错误的语义激活和目标响应缺失。本文提出 OutLangSplat，通过改进特征表示与聚合可靠性，将语言高斯表示适配到无人机室外场景。在特征表示方面，设计了基于区域对齐与融合的 2D-3D 双分支表示，以提升空间一致性，减少目标响应缺失与背景误激活。在特征聚合方面，我们引入了一种免训练的、基于贡献与一致性感知的高斯特征聚合策略，利用像素贡献可靠性和跨视角语义一致性来抑制来自噪声视角的不可靠响应。我们还通过人工标注四个真实公开无人机室外场景数据集中的多种物体，构建了一个新数据集。据我们所知，这是首个面向无人机室外场景的开放词汇三维场景理解数据集。定量评估和消融研究表明，OutLangSplat 在开放词汇语义分割和实例定位任务上均优于现有最优方法（SOTA）。数据集和代码将开源。

## 关键词

#三维高斯泼溅 #开放词汇 #无人机 #场景理解 #语义分割
