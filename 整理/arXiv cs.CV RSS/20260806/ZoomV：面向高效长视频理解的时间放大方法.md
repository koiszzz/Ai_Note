---
published: 2026-08-06
title: ZoomV：面向高效长视频理解的时间放大方法
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding]]"
source_sha256: 474d30fe9ab7127ab8eca426b6b3430c68e02aec3e44383602d9de8d547ed1d7
original_url: https://arxiv.org/abs/2504.01407
processed: 2026-08-07
language: zh-CN
---

# ZoomV：面向高效长视频理解的时间放大方法

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2504.01407)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding|查看原始文件]]

## 摘要

- 提出 ZoomV，一种查询感知的时间放大（temporal zoom-in）框架，用于高效、准确的长视频理解。
- 三阶段流程：时间兴趣定位、事件兴趣聚焦与紧凑表示。
- 在 Charades-STA 时间定位上取得 11.8% 的 mIoU 提升，在 LVBench 上准确率提升 9.7%。

## 正文

长视频理解对大型视频-语言模型（LVLMs）提出了根本性挑战，原因在于帧数量过于庞大，以及朴素下采样可能导致关键上下文丢失。受人类在手机上观看视频时不断放大感兴趣帧这一方式的启发，我们提出 ZoomV，一个面向高效、准确长视频理解的查询感知时间放大框架。具体而言，ZoomV 分三个阶段运作：（1）时间兴趣定位（Temporal interests grounding）：在查询引导下，ZoomV 检索相关事件及其关联的时间窗口作为候选。（2）事件兴趣聚焦（Event interests spotlighting）：在候选窗口池中，每个窗口通过模型自身的反思进行打分并相应过滤，置信度更高的窗口更具代表性。（3）紧凑表示（Compact representation）：对选定事件进行编码并做时间下采样，在显著减少冗余的同时保留关键语义。

大量实验表明，ZoomV 显著优于先前的视频智能体方法。在时间定位方面，ZoomV 解锁了 LVLM 的潜在能力，在 Charades-STA 上取得了 11.8% 的 mIoU 提升。值得注意的是，ZoomV 在 LVBench 上进一步将准确率提升了 9.7%，突显了其在长视频基准上的有效性。

## 关键词

#长视频理解 #ZoomV #时间定位 #LVLM
