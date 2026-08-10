---
published: 2026-08-07
title: "PhyLatent：为 JEPA 世界模型学习动力学相关表征"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/PhyLatent- Learning Dynamics-Relevant Representations for JEPA World Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/PhyLatent- Learning Dynamics-Relevant Representations for JEPA World Models]]"
source_sha256: bf985891d618be29fa926acfc65070ed77483b3b4ca46971d7bc4e693681e63f
original_url: "https://arxiv.org/abs/2608.05720"
processed: 2026-08-07
language: zh-CN
---

# PhyLatent：为 JEPA 世界模型学习动力学相关表征

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xi Zeng, Haojie Ren, Ziying Song
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05720)

## 摘要

- 提出 PhyLatent：联合嵌入预测架构（JEPA）世界模型的动力学相关训练目标；关键观察：防止全局潜坍缩不能确保表征保留物理状态与动作后果。
- 识别 JEPA 世界模型三种失败模式：物理不变性坍缩、物理可识别性坍缩与反事实动力学坍缩。
- PhyLatent 经三条训练路径应对：物理不变性、物理可识别性与反事实动力学，实现方式为物理状态锚定、未来表征对齐、静态视觉不变性、反事实分支分离与潜去噪。
- OGBench-Cube 上 PhyLatent 将三种失败率从 15.60%、6.71%、8.41% 降至 7.53%、0.95%、4.62%，模型预测控制（MPC）成功从 70.0% 提升至 78.1%；相同架构与规划器下 TwoRooms 成功从 81.0% 提升至 98.0%，Reacher 与 PushT 保持竞争；全局非坍缩本身不足以学习可靠 JEPA 世界模型状态空间。

## 正文

研究提出 PhyLatent，一个用于联合嵌入预测架构（JointEmbedding Predictive Architecture, JEPA）世界模型的动力学相关训练目标。关键观察是：防止全局潜坍缩（global latent collapse）并不能确保表征保留物理状态与动作后果。研究识别 JEPA 世界模型中的三种失败模式：物理不变性坍缩（physical invariance collapse）、物理可识别性坍缩（physical identifiability collapse）与反事实动力学坍缩（counterfactual dynamics collapse）。PhyLatent 通过三条训练路径应对它们：物理不变性、物理可识别性与反事实动力学，实现方式包括物理状态锚定、未来表征对齐、静态视觉不变性、反事实分支分离与潜去噪。在 OGBench-Cube 上，PhyLatent 将三种失败率分别从 15.60%、6.71% 与 8.41% 降至 7.53%、0.95% 与 4.62%，并将模型预测控制（MPC）成功从 70.0% 提升到 78.1%。在相同架构与规划器下，它在 TwoRooms 上进一步将成功从 81.0% 提升到 98.0%，并在 Reacher 与 PushT 上保持竞争。这些结果表明，仅全局非坍缩不足以学习可靠的 JEPA 世界模型状态空间。

## 关键词

JEPA、世界模型、动力学表征、物理一致性、模型预测控制
