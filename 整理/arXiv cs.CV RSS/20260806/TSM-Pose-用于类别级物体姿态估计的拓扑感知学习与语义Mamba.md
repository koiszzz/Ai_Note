---
published: 2026-08-06
title: TSM-Pose：用于类别级物体姿态估计的拓扑感知学习与语义 Mamba
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/TSM-Pose- Topology-Aware Learning with Semantic Mamba for Category-Level Object Pose Estimation.md
source_note: "[[信息源/arXiv cs.CV RSS/TSM-Pose- Topology-Aware Learning with Semantic Mamba for Category-Level Object Pose Estimation]]"
source_sha256: cae531754232e1560b5ad204755d2fcb7ee2c1e709f4435750bf7d444aa88861
original_url: https://arxiv.org/abs/2604.16954
processed: 2026-08-07
language: zh-CN
---

# TSM-Pose：用于类别级物体姿态估计的拓扑感知学习与语义 Mamba

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.16954)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/TSM-Pose- Topology-Aware Learning with Semantic Mamba for Category-Level Object Pose Estimation|查看原始文件]]

## 摘要

- 提出 TSM-Pose（拓扑感知学习与语义 Mamba 的类别级姿态估计框架）：拓扑提取器捕捉点云全局拓扑表示并融入局部几何特征。
- 基于 Mamba 的全局语义聚合器将语义先验注入关键点，并利用多个 TwinMamba 块建模长程依赖，实现更有效的全局特征聚合。
- 在 REAL275、CAMERA25 与 HouseCat6D 三个基准上超越现有最先进方法。

## 正文

类别级物体姿态估计是具身智能的基础，但实现对未见实例的稳健泛化仍具挑战。然而，现有方法主要依赖简单的特征提取与聚合，难以捕捉类别共享的拓扑结构并进行语义关键点建模，限制了其泛化能力。为解决这些问题，我们提出了 TSM-Pose（用于类别级姿态估计的拓扑感知学习与语义 Mamba 框架）。具体而言，我们引入拓扑提取器（Topology Extractor）来捕捉点云的全局拓扑表示，并将其融入局部几何特征，实现稳健的类别级结构表示。同时，我们提出基于 Mamba 的全局语义聚合器（Global Semantic Aggregator），将语义先验注入关键点以增强其表达能力，并利用多个 TwinMamba 块建模长程依赖，实现更有效的全局特征聚合。在三个基准数据集（REAL275、CAMERA25 和 HouseCat6D）上的大量实验表明，TSM-Pose 优于现有最先进方法。

## 关键词

#物体姿态估计 #点云 #Mamba #拓扑感知 #具身智能
