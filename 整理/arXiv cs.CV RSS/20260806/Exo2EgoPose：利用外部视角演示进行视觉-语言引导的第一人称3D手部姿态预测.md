---
published: 2026-08-06
title: Exo2EgoPose：利用外部视角演示进行视觉-语言引导的第一人称3D手部姿态预测
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Exo2EgoPose- Leveraging Exocentric Demonstrations for Vision-Language guided Egocentric 3D Hand Pose.md
source_note: "[[信息源/arXiv cs.CV RSS/Exo2EgoPose- Leveraging Exocentric Demonstrations for Vision-Language guided Egocentric 3D Hand Pose]]"
source_sha256: 8ae6da69874bb7da5841f287aafa91daea33eae1f5a98b88e72dbfc1dc4e4fa9
original_url: https://arxiv.org/abs/2607.15890
processed: 2026-08-07
language: zh-CN
---

# Exo2EgoPose：利用外部视角演示进行视觉-语言引导的第一人称3D手部姿态预测

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.15890)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Exo2EgoPose- Leveraging Exocentric Demonstrations for Vision-Language guided Egocentric 3D Hand Pose|查看原始文件]]

## 摘要

- 从第一人称（Ego）视角感知多模态线索并预测细粒度动作对机器人操控等应用至关重要，但以往研究要么主要依赖信息不足的视觉输入预测粗略的人体运动，要么遵循 VRM/VLA 范式而受困于机器人数据不足和人-机器人具身差异。
- 观察到 3D 手部姿态天然是衔接人机动作的统一表示，因而研究尚未充分探索的视觉-语言引导的第一人称 3D 手部姿态预测（VL-EHPF）任务：从视觉观察、语言指令和姿态状态预测未来的 Ego 3D 手部姿态。
- 提出 Exo2EgoPose 框架，创新地利用整体且稳定的外部视角（Exo）演示作为引导，补偿 Ego 视角的有限视野和高度动态运动。
- 双层级外部视角重建模块（DERM）以成对的 Exo 视频为监督重建其视频级与分块帧级表示，建模空间上下文与时序动态；全局到局部调制模块（GLMM）利用重建的分层 Exo 表示，通过注意力机制与自适应调制进行渐进式特征精化。
- 在 AssemblyHands、Ego-Exo4D 及新建的 EgoMe-pose 基准上的大量实验表明方法优越性，大幅超越最先进方法，并展现出有效的人到机器人迁移能力，在 CALVIN 数据集上亦有提升。

## 正文

从第一人称（Ego）视角感知多模态线索并预测细粒度动作，对机器人操控等应用至关重要。然而，以往研究要么主要依赖信息不足的视觉输入来预测粗略的人体运动，要么遵循 VRM/VLA 范式，而后者受困于机器人数据不足以及人类与机器人具身之间的鸿沟。我们观察到，3D 手部姿态天然可以充当连接人类与机器人动作的统一表示。因此，我们研究了一个尚未充分探索的任务——视觉-语言引导的第一人称 3D 手部姿态预测（VL-EHPF），其目标是从视觉观察、语言指令和姿态状态预测未来的 Ego 3D 手部姿态。为克服 Ego 视角视野有限和运动高度动态的问题，我们提出一个名为 Exo2EgoPose 的框架，创新地利用整体且稳定的外部视角（Exo）演示作为引导，以补偿不完整且动态的 Ego 视角线索。具体而言，我们引入双层级外部视角重建模块（DERM），它融入成对的 Exo 视频作为监督，重建其视频级与分块帧级表示，从而建模空间上下文与时序动态。随后，全局到局部调制模块（GLMM）利用重建的分层 Exo 表示，通过注意力机制和自适应调制进行渐进式特征精化，为准确的 Ego 手部姿态预测提供全面的 Exo 引导。在 \textit{AssemblyHands}、\textit{Ego-Exo4D} 以及我们新建的 \textit{EgoMe-pose} 基准上的大量实验显示了方法的优越性，大幅超越最先进方法。此外，它展现出有效的人到机器人迁移能力，并在 \textit{CALVIN} 数据集上带来了改进。

## 关键词

#手部姿态预测 #第一人称视角 #外部视角 #视觉语言模型 #机器人操控
