---
published: 2026-08-06
title: ZoomV：面向高效长视频理解的时间缩放聚焦
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding.md
source_note: "[[信息源/arXiv cs.AI RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding]]"
source_sha256: 734985691edcd5dcad23061db7eba930c80bf53d6c5b3c8c571dd24191d296fa
original_url: https://arxiv.org/abs/2504.01407
processed: 2026-08-07
language: zh-CN
---

# ZoomV：面向高效长视频理解的时间缩放聚焦

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2504.01407)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ZoomV- Temporal Zoom-in for Efficient Long Video Understanding|查看原始文件]]

## 摘要

- 长视频理解对 LVLM 的根本挑战：帧数庞大，朴素降采样有丢失关键上下文的风险；ZoomV 模仿人类在手机上"放大感兴趣帧"的观看方式
- 三阶段：查询引导的时间兴趣定位（检索事件与时间窗口候选）→ 事件兴趣聚焦（模型自身反思打分过滤，高置信窗口更具代表性）→ 紧凑表示（编码并时间降采样，保留关键语义减少冗余）
- 时间定位解锁 LVLM 潜在能力：Charades-STA 上 mIoU 提升 11.8%，LVBench 准确率提升 9.7%，大幅优于此前的视频智能体方法

## 正文

长视频理解对大型视频语言模型（LVLMs）构成根本性挑战：帧数量庞大，而朴素降采样有丢失关键上下文的风险。受人类在手机上观看视频时不断放大感兴趣帧的方式启发，我们提出 ZoomV，一个面向高效、准确长视频理解的查询感知时间缩放聚焦框架。具体而言，ZoomV 分三阶段运行：（1）时间兴趣定位：在查询引导下，ZoomV 检索相关事件及其关联时间窗口作为候选。（2）事件兴趣聚焦：在候选窗口池中，每个窗口通过模型自身的反思打分并按此过滤，置信度更高的窗口更具代表性。（3）紧凑表示：所选事件被编码并随时间降采样，以保留关键语义同时显著减少冗余。大量实验表明 ZoomV 大幅优于此前的视频智能体方法。在时间定位上，ZoomV 解锁了 LVLM 的潜在能力，在 Charades-STA 上获得 11.8% 的 mIoU 提升。值得注意的是，ZoomV 进一步在 LVBench 上将准确率提升 9.7%，凸显其在长视频基准上的有效性。

## 关键词

#长视频理解 #视频语言模型 #时间定位 #ZoomV
