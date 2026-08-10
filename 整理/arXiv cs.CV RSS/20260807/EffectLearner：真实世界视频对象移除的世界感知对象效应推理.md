---
published: 2026-08-07
title: "EffectLearner：真实世界视频对象移除的世界感知对象效应推理"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/EffectLearner- World-Aware Object-Effect Reasoning for Real-World Video Object Removal.md"
source_note: "[[信息源/arXiv cs.CV RSS/EffectLearner- World-Aware Object-Effect Reasoning for Real-World Video Object Removal]]"
source_sha256: e7c97e5a919efdab1382a2111136a8454d744f88891ce1057660fc744d5cbff7
original_url: "https://arxiv.org/abs/2608.05565"
processed: 2026-08-07
language: zh-CN
---

# EffectLearner：真实世界视频对象移除的世界感知对象效应推理

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Feier Wu, Wanke Xia, Xu He, Zilang Zhou, Si Chen, Dongxia Liu, Liyang Chen, Qimeng Wu, Zhengbo Zhang, Wenming Yang, Zhiyong Wu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05565)

## 摘要

- 视频对象移除必须不仅消除目标对象，还消除其诱导效应，同时保持高保真与时空连贯恢复；现有方法主要从预定义效应类别与固定数据分布隐式学习对象-效应对应，限制对涉及组合效应、空间脱离或弱相关效应、长尾物理现象与动态演化交互的复杂真实场景的泛化。
- 提出 EffectLearner：语义推理增强框架，结合 VLM 基对象效应推理器与 DiT 基视频擦除器。
- 结构化效应分析提示引导推理器对目标高亮视频执行跨模态推理并提取紧凑效应感知上下文，引导视频擦除器进行全面对象-效应移除；运动感知掩码引导与运动一致性监督进一步改进对象运动与演化场景动态下的移除覆盖与时空稳定性。
- 构建 EffectWorld：专门针对复杂对象诱导效应的配对视频数据集，引入结合通用监督与复杂效应数据的渐进训练课程；标准 ROSE-Bench 上多数指标超越现有基线，EffectWorld-Eval 与挑战性 EffectWorld-Wild 上取得明显优势。

## 正文

视频对象移除必须不仅消除目标对象，还要消除其诱导的效应，同时保持高保真且时空连贯的恢复。现有方法主要从预定义的效应类别与固定数据分布隐式学习对象-效应对应，限制了它们对涉及组合效应、空间脱离或弱相关效应、长尾物理现象与动态演化交互的复杂真实世界场景的泛化。研究提出 EffectLearner，一个语义推理增强框架：结合基于 VLM 的对象效应推理器（Object-Effect Reasoner）与基于 DiT 的视频擦除器（Video Eraser）。由结构化效应分析提示引导，推理器对目标高亮的视频执行跨模态推理，并提取紧凑的效应感知上下文，引导视频擦除器进行全面的对象-效应移除。运动感知的掩码引导与运动一致性监督进一步改进对象运动与演化场景动态下的移除覆盖与时空稳定性。为在挑战性真实场景中充分利用该框架，研究还构建 EffectWorld，一个专门为复杂对象诱导效应设计的配对视频数据集，并引入结合通用监督与复杂效应数据的渐进训练课程。在标准 ROSE-Bench 上，EffectLearner 在大多数指标上超越现有基线，并在 EffectWorld-Eval 与挑战性的 EffectWorld-Wild 上取得明显优势，展示了其在复杂真实世界场景中交付高质量视频对象移除的能力。

## 关键词

视频对象移除、效应推理、VLM、DiT、语义
