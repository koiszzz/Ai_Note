---
published: 20260806
title: "CARVE：高效 3D 医学体理解中视觉证据的跨切片各向异性再分配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under.md"
source_note: "[[信息源/arXiv cs.AI RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under]]"
source_sha256: 93e303e5a13902aa04959bf29e7922ab3a864393e41244b74a23b608c827a292
original_url: "https://arxiv.org/abs/2608.04515"
processed: 2026-08-06
language: zh-CN

---

# CARVE：高效 3D 医学体理解中视觉证据的跨切片各向异性再分配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhenyu Yi, Qiang Hu, Zhenhao Li, Jiaxuan Zhao, Yusong Sun, Lichi Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04515)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CARVE- Cross-Slice Anisotropic Reallocation of Visual Evidence for Efficient 3D Medical Volume Under|查看原始文件]]

## 摘要

- 基于切片的 MLLM 通过将 3D 体表示为 2D 切片序列利用成熟 2D 编码器，但此切片式表述产生数千个负担 LLM 骨干的视觉 token，其中许多跨相邻切片捕捉重叠视觉证据。
- 本文在两个 3D 医学 VQA 基准上进行扩展分析，发现收益递减：成本持续上升而准确率饱和，同等预算下改进平面内分辨率比增加切片更有效；预算应更选择性分配而非简单扩大。
- 提出 CARVE，一个免训练框架，在 LLM 推理前压缩视觉 token，将 token 缩减表述为预算约束的 2.5D 分配：将深度轴划分为连贯窗口，根据归一化跨切片证据非均匀分配 token；移除约 80% 视觉 token 后在所有 AMOS-MM 报告生成指标上领先所有压缩基线。

## 正文

基于切片的 MLLM 通过将 3D 体积表示为 2D 切片序列利用成熟 2D 编码器。然而，这种切片式表述产生数千个负担 LLM 骨干的视觉 token，其中许多跨相邻切片捕捉重叠视觉证据。为理解增长的视觉 token 预算如何有效改进性能，我们在两个 3D 医学 VQA 基准上进行扩展分析，发现收益递减：成本持续上升而准确率饱和，同等预算下改进平面内分辨率比增加切片更有效。因此预算应更选择性分配而非简单扩大，然而大多数 token 压缩方法为 2D 图像或视频设计，其冗余来自空间布局或时间运动而非沿深度轴的近重复内容。我们提出 CARVE，一个免训练框架，在 LLM 推理前压缩视觉 token，并将 token 缩减表述为预算约束的 2.5D 分配。CARVE 将深度轴划分为连贯窗口，根据归一化跨切片证据非均匀分配 token。在共享预算下，CARVE 在代表性切片上构建空间锚点并从完整体积检索局部变化证据，然后在每个窗口内将剩余合格 token 合并到附近锚点。在 Hulu-Med-7B 上移除约 80% 视觉 token，CARVE 在每个 AMOS-MM 报告生成指标上领先所有压缩基线，全 token 质量保留比最强基线高 6.2 点，并在三个 VQA 基准上保留 98.1% 的全 token 性能。

## 关键词

#医学影像 #3D体理解 #token压缩 #MLLM #arXiv