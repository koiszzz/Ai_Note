---
published: 2026-08-07
title: "微分同胚时间弯曲（DiffTW）的时间序列分类"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Time Series Classification through Diffeomorphic Time Warping (DiffTW).md"
source_note: "[[信息源/arXiv cs.LG RSS/Time Series Classification through Diffeomorphic Time Warping (DiffTW)]]"
source_sha256: 7fde7a28c56b75579503c3ca4f2912e081aa89abe35d79a8404bcb66c3134efd
original_url: "https://arxiv.org/abs/2606.23472"
processed: 2026-08-07
language: zh-CN
---

# 微分同胚时间弯曲（DiffTW）的时间序列分类

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Vicky Geneva Haney, Kamel Lahouel, Victor Rielly, Bruno M. Jedynak
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2606.23472)

## 摘要

- 时间序列分类涉及学习从连续、时间有序的实值观测序列到离散响应变量（如类标签）的映射；健康监测等领域该任务基础，时间结构对预测至关重要。
- 动态时间弯曲（DTW）是测量时间或速度变化序列间相似性的标准技术，但 DTW 限于离散点匹配。
- 超越成对对齐，提出学习实值函数间映射的理论框架：这些映射逼近带空间依赖速度场的线性输运方程特征曲线相关的流，提供时间序列间的微分同胚变换；用特征线方法将 PDE 转为建模系统动力学的 ODE；学习这些 ODE 的目标函数源自微积分基本定理；用再生核希尔伯特空间与最优控制方法实现速度场灵活表达表征。
- 方法 DiffTW 提供理论扎实的相异性度量；1 最近邻分类器中，DiffTW 在 85 个数据集的 39 个上优于无约束 DTW（3 平局）；约束 DTW 在 48 个数据集上优于 DiffTW（5 平局）。

## 正文

时间序列分类涉及学习从连续、时间有序的实值观测序列到离散响应变量（如类标签）的映射。该任务在包括健康监测在内的领域是基础性的，时间结构对预测至关重要。动态时间弯曲（Dynamic Time Warping, DTW）是测量时间或速度变化序列间相似性的标准技术。然而，DTW 限于离散点匹配。研究超越成对对齐，提出一个学习实值函数间映射的理论框架。这些映射逼近与带空间依赖速度场的线性输运方程特征曲线关联的流，提供时间序列之间的微分同胚变换。使用特征线方法（method of characteristics），研究将该偏微分方程转化为建模系统动力学的常微分方程（ODEs）。学习这些 ODE 的目标函数源自微积分基本定理。为实现速度场的灵活、表达性表征，研究利用再生核希尔伯特空间与最优控制方法。该方法——微分同胚时间弯曲（Diffeomorphic Time Warping, DiffTW）——提供理论扎实的相异性度量。使用 1 最近邻分类器，DiffTW 在 85 个数据集中的 39 个上优于无约束 DTW（3 个平局）；然而，约束 DTW 在 85 个数据集中的 48 个上优于 DiffTW（5 个平局）。

## 关键词

时间序列分类、微分同胚、时间弯曲、最优传输、DTW
