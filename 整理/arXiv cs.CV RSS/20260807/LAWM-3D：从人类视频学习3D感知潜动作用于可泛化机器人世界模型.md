---
published: 2026-08-07
title: "LAWM-3D：从人类视频学习 3D 感知潜动作用于可泛化机器人世界模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/LAWM-3D- Learning 3D-Aware Latent Actions from Human Videos for Generalizable Robot World Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/LAWM-3D- Learning 3D-Aware Latent Actions from Human Videos for Generalizable Robot World Models]]"
source_sha256: 4398f30ae67b28b3f8cff602ceead07a64782811a82b2d3bbf3e4fefd830d973
original_url: "https://arxiv.org/abs/2608.05706"
processed: 2026-08-07
language: zh-CN
---

# LAWM-3D：从人类视频学习 3D 感知潜动作用于可泛化机器人世界模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jiarui Yang, Jiale Zhange, Jiawei Li, Hang Guo, Wen Huang, Jinpeng Wang, Peidong Liu, Shu-Tao Xia
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05706)

## 摘要

- 世界模型使智能体无需真实交互即可前向 rollout 与规划；其在开放世界具身智能的应用仍受动作标注高成本与跨平台动作空间异质性限制；潜动作模型（LAMs）经自监督方式直接从无标注人类视频学习动作表征缓解该瓶颈。
- 多数现有 LAM 依赖单视图输入、主要在 2D 像素空间运行，引发根本问题：仅将多视图视频纳入 LAM 训练能否赋予学习潜动作 3D 感知？研究显示答案是否定的：主因是未来帧外观泄漏以及相机间外观差异与视点变化。
- 提出 LAWM-3D，三个紧耦合关键设计：(1) 多视图不变统一动作 token 化方案学习 3D 感知潜动作；(2) 几何对齐约束将中间编码器特征锚定到预训练 3D 基础模型，显式提供跨视图几何对应；(3) 非单射 RGB-D 联合重建目标防止从未来帧外观信息走捷径，迫使 LAM 将监督聚焦于具几何意义的运动线索。
- 组件非简单堆叠，经统一动机紧耦合；基于大规模人类视频预训练加机器人微调的两阶段范式，大量实验显示所提 3D 感知潜动作显著改进世界模型性能：生成质量、物理一致性与泛化能力取得 SOTA。

## 正文

世界模型使智能体无需真实世界交互即可执行前向 rollout 与规划。然而，它们在开放世界具身智能中的应用仍受动作标注的高成本与跨平台动作空间的异质性限制。近期，潜动作模型（latent action models, LAMs）通过以自监督方式直接从无标注人类视频学习动作表征，缓解了该瓶颈。然而，大多数现有 LAM 依赖单视图输入，主要在 2D 像素空间运行，引发一个根本问题：仅将多视图视频纳入 LAM 训练，能否赋予学习到的潜动作 3D 感知？研究表明答案是否定的。主要原因在于未来帧外观泄漏（future-frame appearance leakage），以及相机间外观差异与视点变化。为解决这些问题，研究提出 LAWM-3D，引入三个紧耦合的关键设计：(1) 一个多视图不变统一动作 token 化（multi-view invariant unified action tokenization）方案，用于学习 3D 感知潜动作；(2) 一个几何对齐约束，将中间编码器特征锚定到预训练 3D 基础模型，从而显式提供跨视图几何对应；(3) 一个非单射 RGB-D 联合重建目标，防止从未来帧外观信息的捷径学习，迫使 LAM 将监督聚焦于具有几何意义的运动线索。重要的是，这些组件不是简单堆叠，而是通过一个统一动机紧耦合。基于大规模人类视频预训练后接机器人微调的两阶段范式，大量实验表明，所提出的 3D 感知潜动作显著改进世界模型性能：在生成质量、物理一致性与泛化能力上取得最先进结果。

## 关键词

潜动作、世界模型、3D 感知、人类视频、机器人
