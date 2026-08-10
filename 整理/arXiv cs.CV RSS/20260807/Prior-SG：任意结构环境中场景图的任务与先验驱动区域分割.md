---
published: 2026-08-07
title: "Prior-SG：任意结构环境中场景图的任务与先验驱动区域分割"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Prior-SG- Task and Prior Driven Region Segmentation for Scene Graphs in Arbitrarily-Structured Envir.md"
source_note: "[[信息源/arXiv cs.CV RSS/Prior-SG- Task and Prior Driven Region Segmentation for Scene Graphs in Arbitrarily-Structured Envir]]"
source_sha256: 233626796c9f764a4bcc5d15f24bdaaf493f75d2cfc451a2fa2dd7c446ac5451
original_url: "https://arxiv.org/abs/2608.06170"
processed: 2026-08-07
language: zh-CN
---

# Prior-SG：任意结构环境中场景图的任务与先验驱动区域分割

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Giorgio Tonetti, Laurent Kneip, Abel Gawel, Marco Hutter
> - **发布时间**：2026-08-07
> - **分类**：cs.RO
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06170)

## 摘要

- 层级 3D 场景图是自主移动平台高层空间推理的有前景表征；现有提取框架通常依赖纯局部视觉聚类或严格几何启发式（如墙壁分隔房间），在开放式平面或任意结构环境中失败。
- 提出 Prior-SG：任务与先验驱动框架，将场景图生成从根本上视为概率对齐问题。
- 机器人探索时连续将传入 RGB-D 传感器流聚合为物理锚定的实例图（利用多尺度开放词汇特征融合策略）；系统随后通过最大后验（MAP）估计推断该地图的高层功能语义，由先验图（Prior Graph）引导——大语言模型动态综合的环境结构与任务相关词汇的逻辑期望；通过优化融合异构专家（视觉、几何与离散对象）与这些拓扑先验的马尔可夫随机场，系统解决局部感知歧义。
- 多样模拟住宅数据集与大型开放式平面真实环境验证：Prior-SG 相对近期基线取得 SOTA 语义区域分割准确率，无物理墙时稳健划定远处功能边界，独特提供零样本本体灵活性——使机器人能基于给定高层任务完全重构其空间划分。

## 正文

层级 3D 场景图是自主移动平台上高层空间推理的一个有前景的表征。然而，现有提取框架通常依赖纯局部的视觉聚类或严格的几何启发式（如墙壁分隔的房间），这些在开放式平面或任意结构的环境中失败。研究提出 Prior-SG，一个任务与先验驱动的框架，将场景图生成从根本上视为一个概率对齐问题。随着机器人探索，它连续地将传入的 RGB-D 传感器流聚合到一个物理锚定的实例图（Instance Graph）中，利用多尺度、开放词汇的特征融合策略。系统随后通过一个最大后验（Maximum A Posteriori, MAP）估计推断该地图的高层功能语义，由先验图（Prior Graph）引导——一个大语言模型动态综合的环境结构与任务相关词汇的逻辑期望。通过优化一个融合异构专家（视觉、几何与离散对象）与这些拓扑先验的马尔可夫随机场（Markov Random Field），系统解决局部的感知歧义。研究在多样的模拟住宅数据集与大型、开放式平面的真实世界环境中验证该方法。Prior-SG 相对近期基线取得最先进的语义区域分割准确率，在没有物理墙的情况下稳健划定远距离的功能边界，并独特地提供零样本本体灵活性：使机器人能够根据给定的高层任务完全重构其空间划分。

## 关键词

场景图、区域分割、RGB-D、先验、自主机器人
