---
published: 2026-08-06
title: MobileWAM：借助链式前瞻桥接世界动作模型与移动操作
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MobileWAM- Bridging World Action Models to Mobile Manipulation with Chain-of-Foresight.md
source_note: "[[信息源/arXiv cs.CV RSS/MobileWAM- Bridging World Action Models to Mobile Manipulation with Chain-of-Foresight|查看原始文件]]"
source_sha256: 6241def9e09f99904ecd342714cb8075ac9af886d5b552bfc6e0c8b79ba82bd0
original_url: https://arxiv.org/abs/2608.04657
processed: 2026-08-07
language: zh-CN
---

# MobileWAM：借助链式前瞻桥接世界动作模型与移动操作

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04657)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MobileWAM- Bridging World Action Models to Mobile Manipulation with Chain-of-Foresight|查看原始文件]]

## 摘要

- 基于视频生成主干的世界动作模型（WAM）是机器人学习的新兴方案，但仍局限于桌面操作；移动操作要求运动与全身操作在场景级动态中同时进行，却仍由忽视动态的视觉编码器与手工协调支配
- MobileWAM 采用混合 Transformer 架构，通过逐层联合注意力融合预训练视频扩散 Transformer 与轻量动作专家，将互联网规模的运动先验转化为全身控制
- 动作专家每个前馈层成为共享、运动与操作三个专家的混合，由动作 Token 中的运动意图软路由，以调和移动与操作的不同动态
- 提出链式前瞻（CoF）稠密监督：中间表示依次预测未来潜变量块链，每步以其前驱为条件；部署时 WAM 仅作当前帧编码器，推理时丢弃前瞻链与视频生成，仅保留策略级开销
- 在 ManiSkill-HAB 上超越最先进移动操作策略，并可微调到真实 ARX Lift2 移动机械臂，跨多样任务强泛化

## 正文

基于视频生成主干构建的世界动作模型（WAM）是机器人学习中正在崛起的新范式，但仍局限于桌面操作。移动操作要求在场景级动态中同时进行运动控制与全身操作，然而这一领域目前仍由忽视动态的视觉编码器配合手工设计的协调机制所主导。

我们用 MobileWAM 弥合这一差距：它是一种混合 Transformer 架构，通过逐层联合注意力（layerwise joint attention）将预训练的视频扩散 Transformer 与轻量级动作专家融合，从而把互联网规模的运动先验转化为全身控制。为调和移动与操作之间异构的动态特性，动作专家的每个前馈层都成为由共享、运动、操作三个专家构成的专家混合（mixture），并由动作 Token 中的运动意图软路由（softly routed）。

为稠密化监督信号，我们进一步提出链式前瞻（Chain-of-Foresight，CoF）：中间表示依次预测一连串未来潜变量块（latent chunks），每一步都以其前驱为条件。CoF 与我们解耦的视频—动作去噪方案自然契合。部署时，WAM 仅充当纯当前帧编码器；前瞻只通过梯度发挥作用，因此在推理时前瞻链与视频生成都会被丢弃，只留下策略级开销。

MobileWAM 在 ManiSkill-HAB 上超越了最先进的移动操作策略，并微调到了真实的 ARX Lift2 移动机械臂上，在多样化任务中表现出很强的泛化能力。代码即将发布。

## 关键词

#世界动作模型 #移动操作 #机器人学习 #视频扩散 #全身控制
