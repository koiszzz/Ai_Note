---
published: 2026-08-06
title: CARVE：面向高效 3D 医学体数据理解的跨切片各向异性视觉证据再分配
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under.md
source_note: "[[信息源/arXiv cs.CL RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under]]"
source_sha256: 6c5210e681608b50d0a9028889552087060f6168868556cce70bb7e6c36fe024
original_url: https://arxiv.org/abs/2608.04515
processed: 2026-08-07
language: zh-CN
---

# CARVE：面向高效 3D 医学体数据理解的跨切片各向异性视觉证据再分配

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04515)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under|查看原始文件]]

## 摘要

- 规模分析显示，增加视觉 token 预算收益递减：成本持续上升而准确率饱和，提高平面内分辨率比增加切片更有效
- 提出 CARVE，一种免训练框架，将 token 缩减视为预算约束的 2.5D 分配问题，在 LLM 推理前压缩视觉 token
- CARVE 将深度轴划分为连贯窗口，根据归一化跨切片证据非均匀分配 token，并将剩余 token 合并到空间锚点
- 移除约 80% 视觉 token 后，在 AMOS-MM 每项指标上领先所有压缩基线，并在三个 VQA 基准上保留全 token 性能的 98.1%

## 正文

基于切片的 MLLM 通过将 3D 体数据表示为 2D 切片序列来利用成熟的 2D 编码器。然而，这种逐切片公式会产生数千个视觉 token，给 LLM 主干带来负担，其中许多 token 捕获了相邻切片之间重叠的视觉证据。

为了理解不断增长的视觉 token 预算在多大程度上有效提升性能，我们在两个 3D 医学 VQA 基准上进行了规模分析，发现收益递减：成本持续上升而准确率趋于饱和，并且在相当的预算下，提高平面内分辨率比增加切片更有效。因此，预算应更选择性地分配而非简单扩大。然而，大多数 token 压缩方法是为 2D 图像或视频设计的，其冗余来自空间布局或时间运动，而非沿深度轴的近重复内容。

我们提出 CARVE，一个免训练框架，在 LLM 推理前压缩视觉 token，并将 token 缩减视为预算约束的 2.5D 分配问题。CARVE 将深度轴划分为连贯窗口，并根据归一化的跨切片证据非均匀分配 token。在共享预算下，CARVE 在代表性切片上构建空间锚点，并从完整体数据中检索局部变化的证据，然后在每个窗口内将剩余符合条件的 token 合并到附近锚点。

在 Hulu-Med-7B 上移除约 80% 的视觉 token 后，CARVE 在 AMOS-MM 的每项报告生成指标上都领先所有压缩基线，全 token 质量保持率比最强基线高 6.2 个百分点，并在三个 VQA 基准上保留了全 token 性能的 98.1%。

## 关键词

#3D医学影像 #MLLM #token压缩 #视觉理解 #CARVE #arXiv
