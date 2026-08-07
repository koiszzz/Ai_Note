---
published: 2026-08-06
title: Talk2Sensors：通过传感器自适应物理线索匹配实现自动驾驶3D视觉定位
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Talk2Sensors- 3D Visual Grounding in Autonomous Driving via Sensor-Adaptive Physical Cue Matching.md
source_note: "[[信息源/arXiv cs.CV RSS/Talk2Sensors- 3D Visual Grounding in Autonomous Driving via Sensor-Adaptive Physical Cue Matching]]"
source_sha256: d03190dd0bc33bfa4576164aaef66c14c886ef8f7466b0eb138064d8ae61e3cf
original_url: https://arxiv.org/abs/2608.04568
processed: 2026-08-07
language: zh-CN
---

# Talk2Sensors：通过传感器自适应物理线索匹配实现自动驾驶3D视觉定位

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04568)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Talk2Sensors- 3D Visual Grounding in Autonomous Driving via Sensor-Adaptive Physical Cue Matching|查看原始文件]]

## 摘要

- 推出 Talk2Sensors，首个基于相机、激光雷达（LiDAR）和 4D 雷达的多传感器 3D 视觉定位数据集，含 8682 条语言指令与 20558 个被指对象，提示词与传感器特定物理线索明确对齐。
- 提出 TSFormer，一个统一的 Transformer 框架，采用从粗到细的属性感知融合：语言路由属性采样器 + 稀疏保持模态仲裁器，实现动态路由外观、几何与运动线索。
- 在 Talk2Sensors 上比最强基线提升 8.05 mAP，并迁移到单目 Mono3DRefer 基准达到 53.05% 的 Acc@0.5。

## 正文

作为具身智能的一项关键能力，3D 视觉定位（3DVG）主要在室内场景中借助 RGB-D 或点云输入进行研究，而现有的室外扩展大多仅依赖单目图像。这两种设定都难以满足真实世界室外感知的需求——在室外，异构传感器捕获互补却又截然不同的物理属性，如视觉纹理、3D 几何和物体运动学，这些属性对于灵活稳健的查询自适应定位不可或缺，却仍未得到充分利用。为弥合这一差距，我们推出 Talk2Sensors，第一个基于相机、激光雷达（LiDAR）和 4D 雷达构建的多传感器 3D 视觉定位数据集。它包含 8682 条语言指令和 20558 个被指对象，提示词多样且明确与传感器特定的物理线索对齐。此外，我们提出 TSFormer，一个面向自动驾驶语言引导 3D 视觉定位的统一 Transformer 框架。TSFormer 采用从粗到细的属性感知融合策略：语言路由属性采样器（Language-Routed Property Sampler）首先通过用查询级语言线索调制传感器采样权重，执行粗略的文本条件特征检索；随后的稀疏保持模态仲裁器（Sparse-Preserving Modality Arbiter）模块执行细粒度模态仲裁与文本引导精化，以确定精确的被指空间位置。这一设计使外观、几何和运动线索能够根据每个提示的语义需求动态路由，防止稠密模态淹没稀疏但关键的传感器信号。大量实验表明，TSFormer 在多个基准上取得最优性能：在 Talk2Sensors 上比最强基线提升 8.05 mAP，并迁移到单目 Mono3DRefer 基准，达到 53.05% 的 Acc@0.5。

## 关键词

#3D视觉定位 #自动驾驶 #多传感器融合 #具身智能
