---
published: 2026-08-06
title: MINT：基于堆叠递归矩阵张量分解的时间序列数据挖掘
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MINT- Tensor Decomposition on Stacked Recurrence Matrices for Time Series Data Mining.md
source_note: "[[信息源/arXiv cs.LG RSS/MINT- Tensor Decomposition on Stacked Recurrence Matrices for Time Series Data Mining]]"
source_sha256: 42e07c2d1ae9c5871ff5d1a7b49b1544a281a6f94f45f1151a769d2cf92e9dcd
original_url: https://arxiv.org/abs/2608.04157
processed: 2026-08-07
language: zh-CN
---

# MINT：基于堆叠递归矩阵张量分解的时间序列数据挖掘

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04157)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MINT- Tensor Decomposition on Stacked Recurrence Matrices for Time Series Data Mining|查看原始文件]]

## 摘要

- 提出张量化自相似矩阵作为单变量时间序列数据集的原语，其张量本质可自然扩展到多变量数据集
- 从数据集计算大小为 `N × (n-m+1) × (n-m+1)` 的点积图，随后用张量分解方法挖掘共聚簇模式
- 在快速轨道交通、电力需求、风力涡轮机与汽车交通数据上验证，MINT 流水线在包含规律间隔基元的高度规整数据集中有效共聚簇跨传感器模式

## 正文

递归图（recurrence plot）是一种时间序列数据挖掘原语，应用于多种领域（例如恒星光变曲线、声音波形、CCT 遥测）。这项工作提出张量化自相似矩阵，作为单变量时间序列数据集的原语：数据集为 `N×n`，包含 N 条长度为 n 的时间序列，子序列窗口长度为 m，且其张量本质可自然扩展到多变量数据集。计算该原语所提出的方法，从这些数据集计算大小为 `N × (n-m+1) × (n-m+1)` 的点积图，随后使用张量分解方法挖掘该张量，以挖掘共聚簇模式。我们在快速轨道交通、电力需求、风力涡轮机与汽车交通数据上展示了结果，发现 MINT 流水线能够在包含规律间隔基元的高度规整数据集中有效共聚簇跨传感器模式。

## 关键词

#时间序列挖掘 #递归图 #张量分解 #共聚簇 #MINT
