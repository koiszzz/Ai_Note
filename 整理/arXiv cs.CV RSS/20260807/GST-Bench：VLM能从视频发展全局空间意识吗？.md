---
published: 2026-08-07
title: "GST-Bench：VLM 能从视频发展全局空间意识吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/GST-Bench- Can VLMs Develop Global Spatial Awareness from Video-.md"
source_note: "[[信息源/arXiv cs.CV RSS/GST-Bench- Can VLMs Develop Global Spatial Awareness from Video-]]"
source_sha256: b55482360e9e2a5902954cfba37c5a7afa7ebc339ddb337f36742ddcb562e868
original_url: "https://arxiv.org/abs/2608.05747"
processed: 2026-08-07
language: zh-CN
---

# GST-Bench：VLM 能从视频发展全局空间意识吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Qifeng Zhang, Kaixiang Huang, Heng Dong, Huang Fang, Junting Chen, Junjie Zhu, Yonghang Chen, Zhiyu Zhang, Wei Li
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05747)

## 摘要

- 空间智能对具身智能体是基础性的，但现有基准聚焦单或少数视点的局部空间感知，忽视连续、长时程视觉流上的全局空间意识。
- 引入全局-空间-时间基准（GST-Bench）：视频理解全局空间智能的 VQA 基准，含源自 6790 分钟合成视频的人工验证问题；要求模型从输入视频未见的新颖视点执行准确空间推断，并将自我中心观测映射到全局俯视图。
- 22 个 SOTA VLM 综合评估暴露模型与人类的惊人差距：最强零样本模型仅 42.68，远低于人类 79.08。
- 构造 GST-Bench-Local 探针原因：模型虽在相同任务形式下局部空间理解强，仍无法将长时程观测整合为全局一致场景表征；提供 GST-Train 全局空间推理数据集作为补充资源。

## 正文

空间智能对具身智能体是基础性的，然而现有基准聚焦来自单一或少量视点的局部空间感知，忽视连续、长时程视觉流上的全局空间意识。为弥补该局限，研究引入全局-空间-时间基准（Global-Spatial-Temporal Benchmark, GST-Bench），一个视频理解中全局空间智能的 VQA 基准：包含源自 6,790 分钟合成视频的人工验证问题。它要求模型从输入视频中未见的新颖视点执行准确的空间推断，并将自我中心（egocentric）观测映射到全局俯视图。对 22 个最先进 VLM 的综合评估暴露了模型与人类之间的惊人差距：最强零样本模型仅取得 42.68，远低于人类的 79.08。为探明该差距的原因，研究构造 GST-Bench-Local，发现模型尽管在相同任务形式下具有强大的局部空间理解，仍无法将长时程观测整合为全局一致的场景表征。研究还提供 GST-Train，一个全局空间推理数据集，作为促进该挑战未来研究的补充资源。

## 关键词

全局空间意识、视频理解、VQA 基准、具身智能体、空间推理
