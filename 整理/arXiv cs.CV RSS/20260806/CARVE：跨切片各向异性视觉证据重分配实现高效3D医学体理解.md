---
published: 2026-08-06
title: CARVE：跨切片各向异性视觉证据重分配实现高效3D医学体理解
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under.md
source_note: "[[信息源/arXiv cs.CV RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under|查看原始文件]]"
source_sha256: 77beb10e574f16a74f5c53d139ca59b1549c763b6c2f73363c683cdaf5504983
original_url: https://arxiv.org/abs/2608.04515
processed: 2026-08-07
language: zh-CN
---

# CARVE：跨切片各向异性视觉证据重分配实现高效3D医学体理解

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04515)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under|查看原始文件]]

## 摘要

- 基于切片的多模态大语言模型（MLLM）将 3D 体表示为 2D 切片序列以利用成熟的 2D 编码器，但该形式产生数千个视觉令牌，其中许多在相邻切片间捕捉重叠的视觉证据；在 3D 医学 VQA 基准上的扩展分析显示收益递减：成本持续上升而准确率饱和，预算相近时提高平面内分辨率比增加切片更有效。
- 预算应被更有选择性地分配而非简单扩大，但多数令牌压缩方法面向 2D 图像或视频设计，其冗余源于空间布局或时间运动，而非深度轴上近重复的内容；提出 CARVE，一个免训练框架，在 LLM 推理前压缩视觉令牌，将令牌削减表述为预算受限的 2.5D 分配。
- CARVE 将深度轴划分为连贯窗口，按归一化跨切片证据非均匀分配令牌；在共享预算下在代表性切片上构建空间锚点并从整个体检索局部变化证据，然后合并窗口内剩余合格令牌到邻近锚点；移除约 80% 视觉令牌（Hulu-Med-7B）后，CARVE 在 AMOS-MM 每项报告生成指标上领先所有压缩基线，保留质量比最强基线高 6.2 个点，并在三个 VQA 基准上保留 98.1% 的全令牌性能。

## 正文

基于切片的多模态大语言模型（MLLMs）通过将 3D 体表示为 2D 切片序列，利用成熟的 2D 编码器。然而，这种逐切片形式会产生数千个视觉令牌，给 LLM 骨干带来负担，其中许多令牌在相邻切片间捕捉重叠的视觉证据。为理解不断增长的视觉令牌预算如何有效提升性能，本文在两个 3D 医学 VQA 基准上进行了扩展分析，发现收益递减：成本持续上升而准确率趋于饱和，且在预算相近时，提高平面内分辨率比增加切片更有效。因此，预算应被更有选择性地分配，而非简单地扩大，然而大多数令牌压缩方法是为 2D 图像或视频设计的，其冗余源于空间布局或时间运动，而非深度轴上的近重复内容。本文提出 CARVE，一个免训练框架，在 LLM 推理之前压缩视觉令牌，并将令牌削减表述为预算受限的 2.5D 分配。CARVE 将深度轴划分为连贯的窗口，并根据归一化的跨切片证据非均匀地分配令牌。在共享预算下，CARVE 在代表性切片上构建空间锚点，并从整个体中检索局部变化的证据，然后在每个窗口内将剩余的合格令牌合并到邻近锚点。在 Hulu-Med-7B 上移除约 80% 的视觉令牌后，CARVE 在 AMOS-MM 的每项报告生成指标上领先所有压缩基线，全令牌质量保留率比最强基线高 6.2 个百分点，并在三个 VQA 基准上保留了 98.1% 的全令牌性能。

## 关键词

#3D医学影像 #视觉令牌压缩 #多模态大语言模型 #免训练 #体理解 #医学VQA
