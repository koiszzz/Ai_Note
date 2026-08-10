---
published: 2026-08-07
title: "EA-Nav：带具身感知的安全视觉导航策略学习"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/EA-Nav- Learning Safe Visual Navigation Policies with Embodiment Awareness.md"
source_note: "[[信息源/arXiv cs.CV RSS/EA-Nav- Learning Safe Visual Navigation Policies with Embodiment Awareness]]"
source_sha256: 0cfeac034ae4d4e4a3afa61c059beff55414cda28cd71c3c290c71659e29fe30
original_url: "https://arxiv.org/abs/2607.19880"
processed: 2026-08-07
language: zh-CN
---

# EA-Nav：带具身感知的安全视觉导航策略学习

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jialu Zhang, Yong Du, Xianda Guo, Shunwang Sun, Xinqi Liu, Yue Sun, Guodong Lu, Wei Sui, Jituo Li
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2607.19880)

## 摘要

- 跨具身导航是具身智能的关键挑战；因具身差异，相同视觉观测对不同智能体可能意味不同动作，仅依赖视觉时预测有歧义。
- 现有研究主要依赖强化学习：需大规模交互与仔细奖励设计，难以支持可扩展预训练与真实适配；模仿学习方法仍有限。
- 提出基于模仿学习的具身感知导航框架，模块化多阶段设计：预训练中从互联网视频构建跨具身导航数据集，引入具身几何作为条件 token 减少相同观测下动作歧义；微调中基于解耦架构设计多模态信息注入机制；设计轨迹增广策略生成高风险样本，用于分别训练空间感知与风险感知校正，显式纳入具身几何实现安全导航。
- 实验显示方法有效改进不同具身设定下的导航性能，证明将具身几何纳入具身导航的有效性。

## 正文

跨具身（cross-embodiment）导航是具身智能的关键挑战。由于具身差异，相同的视觉观测对不同的智能体可能意味着不同的动作，使仅依赖视觉时的预测有歧义。现有研究主要依赖强化学习：这需要大规模交互与仔细的奖励设计，难以支持可扩展的预训练与真实世界适配。相比之下，基于模仿学习的方法仍有限。为应对这些挑战，研究提出一个基于模仿学习的具身感知导航框架，采用模块化多阶段设计。预训练中，研究从互联网视频构建跨具身导航数据集，并引入具身几何作为条件 token，以减少相同观测下的动作歧义。微调中，研究基于解耦架构设计一个多模态信息注入机制。具体地，研究设计一个轨迹增广策略生成高风险样本，用于分别训练空间感知与风险感知校正，从而显式纳入具身几何以实现安全导航。实验结果显示，所提方法有效改进不同具身设定下的导航性能，证明了将具身几何纳入具身导航的有效性。

## 关键词

跨具身导航、模仿学习、具身几何、安全导航、视觉导航
