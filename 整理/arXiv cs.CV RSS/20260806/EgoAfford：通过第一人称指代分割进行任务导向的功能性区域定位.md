---
published: 2026-08-06
title: EgoAfford：通过第一人称指代分割进行任务导向的功能性区域定位
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/EgoAfford- Task-Oriented Affordance Grounding via Egocentric Referring Segmentation.md
source_note: "[[信息源/arXiv cs.CV RSS/EgoAfford- Task-Oriented Affordance Grounding via Egocentric Referring Segmentation]]"
source_sha256: 8ee7bdf6643c7b699c9e9c4693de6ee5016d53d8fe88bd5db1614ccb5c780c7c
original_url: https://arxiv.org/abs/2608.04533
processed: 2026-08-07
language: zh-CN
---

# EgoAfford：通过第一人称指代分割进行任务导向的功能性区域定位

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04533)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/EgoAfford- Task-Oriented Affordance Grounding via Egocentric Referring Segmentation|查看原始文件]]

## 摘要

- 部件级功能性区域定位（part-level affordance grounding）推动了与基本动作相关的功能物体区域定位的发展，但将其扩展到复杂任务需要连接参与物体的语义角色、与任务状态对齐的视觉观察以及多步规划。
- 提出 EgoAfford 基准，连接这三方面：给定第一人称观察和一项高层桌面任务，模型必须生成剩余规划，并分割下一步动作最多三个组成部分（直接对象、工具和目的地）的功能区域。
- EgoAfford 包含约 1.55 万张来自 2000 个生成多步场景的人工核验图像，组织为语义对齐、任务完整的图像序列；另有 EgoAfford-Real，含覆盖 26 个任务的 102 张人工拍摄图像。
- 提出 EgoLens，一个带角色特定掩码解码器的 3B 多模态大语言模型，作为该联合任务的领域内参考模型；对近期指代分割 MLLM、商业 VLM-SAM2 流水线及 EgoLens 的评估凸显了下一步推理与动作角色条件化部件定位的互补挑战。

## 正文

部件级功能性区域定位（part-level affordance grounding）推进了与基本动作相关的功能物体区域的定位。将该能力扩展到复杂任务，需要把参与物体的语义角色与任务状态对齐的视觉观察以及多步规划连接起来。我们提出 EgoAfford，一个旨在连接这三方面的基准。给定一个第一人称观察和一个高层桌面任务，模型必须生成剩余的规划，并分割下一步动作最多三个组成部分的功能区域：直接对象（direct object）、工具（instrument）和目的地（destination）。EgoAfford 包含约 1.55 万张来自 2000 个生成的多步场景的人工核验图像，组织为语义对齐、任务完整的图像序列；以及 EgoAfford-Real，覆盖 26 个任务的 102 张人工拍摄图像。我们进一步提出 EgoLens，一个带角色特定掩码解码器的 3B 多模态大语言模型，作为这一联合任务的领域内参考模型。对近期指代分割 MLLM、商业 VLM-SAM2 流水线和 EgoLens 的评估，凸显了下一步推理与动作角色条件化部件定位之间的互补挑战。EgoLens 在生成与人工拍摄两类观察上都建立了很强的参考性能。EgoAfford 与 EgoLens 共同为在多步桌面任务中联合研究感知与规划提供了基础。项目页面：https://egoafford.github.io

## 关键词

#功能性区域定位 #第一人称 #指代分割 #多模态大语言模型 #桌面任务 #规划
