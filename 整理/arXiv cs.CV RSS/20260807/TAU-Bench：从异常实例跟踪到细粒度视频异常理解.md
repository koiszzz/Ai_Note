---
published: 2026-08-07
title: "TAU-Bench：从异常实例跟踪到细粒度视频异常理解"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/TAU-Bench- From Anomaly Instance Tracking to Fine-Grained Video Anomaly Understanding.md"
source_note: "[[信息源/arXiv cs.CV RSS/TAU-Bench- From Anomaly Instance Tracking to Fine-Grained Video Anomaly Understanding]]"
source_sha256: 917d1e8448b6941d66415f0afad803b6c30902d45a56bde9204e4afa28209752
original_url: "https://arxiv.org/abs/2608.05699"
processed: 2026-08-07
language: zh-CN
---

# TAU-Bench：从异常实例跟踪到细粒度视频异常理解

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Kepeng Yang, Dongxuan Liu, Rongxin Gao, Zixin Su, Rui Wu, Shuzhao Xie, Chenxin Li, Panwang Pan, Yuzhi Huang, Yue Huang, Jingyan Jiang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05699)

## 摘要

- 人类经连贯感知过程理解异常事件：识别焦点实例、随事件展开跟踪其行为、解释为何违反周围场景预期；视频异常理解（VAU）寻求赋予模型类似能力，超越判定视频是否异常，转向解释事件如何发展及为何重要。
- 近期视觉语言模型（VLM）可生成详细且看似合理的异常描述，但其语义流畅性不确保这些解释随时间保持锚定于正确异常实例；现有基准通常经分离协议评估跟踪与语义理解，使此类实例-语义不一致基本未测量。
- 引入 TAU-Bench：轨道中心基准，联合评估异常实例跟踪与细粒度异常理解；含 1118 个视频、1454 条轨道与 202438 个像素级掩码，覆盖 49 个事件与 45 个场景类别，带连接实例级识别、事件级理解与场景级推理的轨道中心标注。
- 规模化构建 TAU-Bench：开发自动化数据引擎，整合异常适宜性过滤、异常实例轨道构建、层级字幕标注与人工质量控制；代表性 VLM 家族评估显示产生合理异常解释的模型仍可能无法可靠定位与跟踪正确实例，揭示语义推理与视觉锚定间的持续差距；强调实例锚定评估为更忠实可靠 VAU 系统的重要一步。

## 正文

人类通过一个连贯的感知过程理解异常事件：识别焦点实例，随事件展开跟踪其行为，并解释它为何违反周围场景的预期。视频异常理解（video anomaly understanding, VAU）寻求赋予模型类似的能力，超越判定视频是否异常，转向解释事件如何发展以及为何重要。虽然近期视觉语言模型（VLMs）可以生成详细且看似合理的异常描述，它们的语义流畅性并不确保这些解释随时间保持锚定于正确的异常实例。现有基准通常通过分离的协议评估跟踪与语义理解，使此类实例-语义不一致（instance-semantic inconsistency）基本未被测量。因此研究引入 TAU-Bench，一个轨道中心（track-centric）基准：联合评估异常实例跟踪与细粒度异常理解。TAU-Bench 包含 1,118 个视频、1,454 条轨道与 202,438 个像素级掩码，覆盖 49 个事件与 45 个场景类别，并带有连接实例级识别、事件级理解与场景级推理的轨道中心标注。为规模化构建 TAU-Bench，研究开发了一个自动化数据引擎，整合异常适宜性过滤、异常实例轨道构建、层级字幕标注与人工质量控制。跨代表性 VLM 家族的评估表明，产生合理异常解释的模型仍可能无法可靠地定位并跟踪正确的实例，揭示语义推理与视觉锚定之间持续的差距。这些发现因此强调实例锚定评估是迈向更忠实可靠 VAU 系统的重要一步。

## 关键词

视频异常理解、实例跟踪、基准、VLM、语义锚定
