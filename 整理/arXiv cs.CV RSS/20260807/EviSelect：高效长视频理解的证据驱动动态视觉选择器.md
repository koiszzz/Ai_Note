---
published: 2026-08-07
title: "EviSelect：高效长视频理解的证据驱动动态视觉选择器"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Evidence-Driven Dynamic Visual Selector for Efficient Long Video Understanding.md"
source_note: "[[信息源/arXiv cs.CV RSS/Evidence-Driven Dynamic Visual Selector for Efficient Long Video Understanding]]"
source_sha256: 10858967053838f82a705d3c6ccdf9806366bcd2987c2252e145fc414212c935
original_url: "https://arxiv.org/abs/2608.05780"
processed: 2026-08-07
language: zh-CN
---

# EviSelect：高效长视频理解的证据驱动动态视觉选择器

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Bo Zhang, Wenxin Wang, Feng Chen, Zhihao Zhang, Zixuan Wang, Changsheng Li, Yinjie Lei
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05780)

## 摘要

- 基于 MLLM 的长视频理解的近期进展经选择查询相关帧缓解推理时计算成本与有限上下文长度；现有方法主要依赖外部代理评分器与刚性启发式规则，不可避免遭受与目标 MLLM 内在证据的错位，且无法适应非均匀时空信息密度。
- 提出 EviSelect：锚定于目标 MLLM 内部注意力证据的细粒度动态视觉选择框架；经稀疏预填充高效探测视觉证据作为结构化先验，引导分布感知动态采样。
- 用高度压缩视觉输入与稀疏注意力高效近似目标 MLLM 的注意力图（与完整对应良好对齐）；基于该先验的三个互补注意力组件，设计轻量选择器：精确定位查询相关时间戳，并自适应调整局部采样率与空间分辨率；将选择器形式化为随机策略，在联合准确率-效率奖励下经 GRPO 优化。
- 通过组相对比较奖励较低视觉成本下的正确预测，鼓励策略按每视频信息密度动态分配计算；三个长视频理解基准上 EviSelect 优于现有方法，同时减少约 50% 所选视觉 token、实现 3.9 倍端到端加速。

## 正文

基于 MLLM 的长视频理解的近期进展通过选择查询相关的帧，缓解了推理时计算成本与有限上下文长度。然而，现有方法主要依赖外部代理评分器与刚性启发式规则，不可避免遭受与目标 MLLM 内在证据的错位，并且无法适应非均匀的时空信息密度。本文提出 EviSelect，一个锚定于目标 MLLM 内部注意力证据的细粒度动态视觉选择框架。方法经稀疏预填充高效探测视觉证据，作为结构化先验引导分布感知的动态采样。具体地，研究使用高度压缩的视觉输入与稀疏注意力，高效近似目标 MLLM 的注意力图，与完整对应良好对齐。基于从该先验派生的三个互补注意力组件，研究设计一个轻量选择器：不仅精确定位查询相关的时间戳，还自适应调整局部采样率与空间分辨率。为实现证据条件化的时空采样，研究将选择器形式化为随机策略，并在联合准确率-效率奖励下经 GRPO 优化。通过组相对比较奖励较低视觉成本下的正确预测，方法鼓励策略根据每个视频的信息密度动态分配计算。跨三个长视频理解基准，EviSelect 相对现有方法取得优越性能，同时将所选视觉 token 减少约 50%，并实现 3.9 倍端到端加速。

## 关键词

长视频理解、动态采样、注意力证据、GRPO、MLLM
