---
published: 2026-08-07
title: "DARAD：持续遥感图像文本检索的双适配器与排序感知蒸馏"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DARAD- Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieva.md"
source_note: "[[信息源/arXiv cs.CV RSS/DARAD- Dual Adapters and Ranking-Aware Distillation for Continual Remote Sensing Image-Text Retrieva]]"
source_sha256: 4da6edfb93df174edd18e06d6a1ba03eee0cc9a36054a78b641f0959ae0f7450
original_url: "https://arxiv.org/abs/2608.06059"
processed: 2026-08-07
language: zh-CN
---

# DARAD：持续遥感图像文本检索的双适配器与排序感知蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xi Chen, Xu Chen, Xiangyang Jia, Wei Wang, Xu Zhang, Zhenyuan Sun
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06059)

## 摘要

- 地球观测技术快速增长使遥感档案迅速扩展，遥感图像文本检索（RS-ITR）日益重要；持续 RS-ITR 仍具挑战：RS 的尺度变化与分布漂移加剧跨模态对齐空间失真，现有持续学习（CL）方法难以支持可靠持续检索。
- 提出 DARAD：双适配器与排序感知蒸馏框架，学习新视觉与文本概念的同时保留历史跨模态排序结构。
- 视觉分支引入空间融合适配器：整合粗区域线索与细粒度补丁线索以适应 RS 尺度变化，同时将视觉更新锚定到预训练对齐空间；文本分支采用多专家语义路由：分离共享文本语义与语义专用残差，吸收新出现描述同时约束全局文本嵌入漂移。
- 双向排序蒸馏用冻结教师模型与历史锚点保留历史跨模态排序结构，缓解跨持续阶段的对齐空间失真；多阶段持续检索协议实验显示 DARAD 优于现有 CL 方法：改进对新到达数据的适配，同时保持历史数据有效性。

## 正文

随着地球观测技术的快速增长，遥感档案迅速扩张，使遥感图像文本检索（remote sensing image-text retrieval, RS-ITR）日益重要。然而，持续 RS-ITR 仍具挑战：RS 中的尺度变化与分布漂移加剧跨模态对齐空间失真，使现有持续学习（CL）方法难以支持可靠的持续检索。为应对该挑战，研究提出 DARAD，一个双适配器与排序感知蒸馏框架：从演化档案学习新视觉与文本概念的同时，保留历史跨模态排序结构。具体地，视觉分支引入空间融合适配器（spatial fusion adapter）：整合粗粒度区域线索与细粒度补丁线索以适应 RS 尺度变化，同时将视觉更新锚定到预训练对齐空间。文本分支采用多专家语义路由（multi-expert semantic routing）：将共享文本语义与语义专用残差分离，以吸收新出现的描述，同时约束全局文本嵌入漂移。此外，双向排序蒸馏（bidirectional ranking distillation）使用冻结教师模型与历史锚点保留历史跨模态排序结构，从而缓解跨持续阶段的对齐空间失真。多阶段持续检索协议下的实验表明，DARAD 取得优于现有 CL 方法的性能：改进对新到达数据的适配，同时保持历史数据的有效性。

## 关键词

遥感检索、持续学习、适配器、蒸馏、跨模态
