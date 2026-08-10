---
published: 2026-08-07
title: "VLAff：统一可行动作可供性的视觉语言可供性模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/VLAff- Vision-Language-Affordance Model for Unified Actionable Affordances.md"
source_note: "[[信息源/arXiv cs.CV RSS/VLAff- Vision-Language-Affordance Model for Unified Actionable Affordances]]"
source_sha256: 54990f8cf7a059f6117f7320ac493c11a2d5a683fd6fb7e3d5554d07706b87cb
original_url: "https://arxiv.org/abs/2608.05215"
processed: 2026-08-07
language: zh-CN
---

# VLAff：统一可行动作可供性的视觉语言可供性模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jihoon Oh, Kento Kawaharazuka, Kei Okada
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05215)

## 摘要

- 从人类视频学习操作技能对可扩展机器人学习有前景；人类与机器人间具身错配使其具挑战；有前景的解决方案是学习对象中心、具身无关的可行动作可供性。
- 提出框架：利用自我中心人类视频与最先进 3D 运动恢复结构与手网格重建，提取视觉、抓取与轨迹可供性等可行动作可供性，显式编码何处交互、如何抓取与如何移动。
- 构建 EgoAffordance：大规模数据集，204K 集、560 万视觉可供性与 1160 万抓取与轨迹可供性；引入 VLAff：大型视觉语言模型基统一基础模型，学习所有可行动作可供性间跨模态相关。
- 给定视觉观测与指令，VLAff 生成视觉可供性热图、抓取姿态与轨迹，经利用 3D 场景信息转为可直接执行动作；大量实验显示 VLAff 不仅视觉可供性预测 SOTA，还能有效应用于真实机器人应用（零样本操作与可供性引导机器人学习）。

## 正文

从人类视频学习操作技能对可扩展的机器人学习很有前景。然而，人类与机器人之间的具身错配使其具有挑战性。一个有前景的解决方案是学习对象中心、具身无关（embodiment-agnostic）的可行动作可供性（actionable affordances）。本文提出一个框架：利用自我中心人类视频与最先进的 3D 运动恢复结构（Structure-from-Motion）与手网格重建，提取可行动作可供性，如视觉、抓取与轨迹可供性，显式编码在哪里交互、如何抓取与如何移动。研究构建 EgoAffordance，一个大规模数据集：204K 集，包含 560 万视觉可供性与 1160 万抓取与轨迹可供性。在此基础上，研究引入 VLAff，一个基于大型视觉语言模型的统一基础模型：学习所有可行动作可供性之间的跨模态相关。给定视觉观测与指令，VLAff 生成视觉可供性热图、抓取姿态与轨迹，这些通过利用 3D 场景信息转化为可直接执行的动作。通过大量实验，研究证明 VLAff 不仅在视觉可供性预测上取得最先进性能，还可以有效应用于真实机器人应用，如零样本操作与可供性引导的机器人学习。

## 关键词

可供性、视觉语言模型、机器人学习、抓取、轨迹
