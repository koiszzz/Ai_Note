---
published: 2026-08-07
title: "UAV 摄影测量的迭代混合离散-连续视点规划"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Iterative Hybrid Discrete-Continuous Viewpoint Planning for UAV Photogrammetry.md"
source_note: "[[信息源/arXiv cs.CV RSS/Iterative Hybrid Discrete-Continuous Viewpoint Planning for UAV Photogrammetry]]"
source_sha256: 105e8f66cfc6110ba02a62bc3d3bea795d8cf6a36351667d19d04a9a80d25d80
original_url: "https://arxiv.org/abs/2608.05718"
processed: 2026-08-07
language: zh-CN
---

# UAV 摄影测量的迭代混合离散-连续视点规划

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Alan Grech, Daniel Pisani, Andre Grima, Carl James Debono, Saviour Formosa, Dylan Seychell
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05718)

## 摘要

- 无人机（UAV）摄影测量需要提供足够表面覆盖、图像重叠、视差与分辨率的相机网络，但常规飞行模式常对场景几何适配差，导致局部重建误差。
- 提出从代理重建进行定向 UAV 摄影测量的迭代混合离散-连续视点规划方法。
- 方法用基于正面性、成像距离、视差与多视图观测计数的摄影测量启发式对采样表面点评分，同时以可见性、成对重叠与图连通性评估完整视点集；围绕弱观测区域生成候选视点，用聚类协方差矩阵自适应演化策略（CMA-ES）优化精化，冗余时移除。
- 最终飞行路径结合近距细节视点与更宽模型覆盖视点，平衡局部重建质量与全局图像网络稳健性；三个合成场景评估显示相对先前 UAV 路径规划方法改进重建精度与完整性。

## 正文

无人机（unmanned aerial vehicle, UAV）摄影测量需要提供足够表面覆盖、图像重叠、视差与分辨率的相机网络，然而常规飞行模式往往对场景几何适配差，导致局部重建误差。本文提出一个从代理重建（proxy reconstruction）进行定向 UAV 摄影测量的迭代混合离散-连续视点规划方法。该方法使用基于正面性（frontality）、成像距离、视差与多视图观测计数的摄影测量启发式对采样表面点评分，同时以可见性、成对重叠与图连通性评估完整视点集。候选视点围绕弱观测区域生成，使用聚类协方差矩阵自适应演化策略（CMA-ES）优化精化，并在冗余时移除。最终飞行路径结合近距细节视点与更宽的模型覆盖视点，平衡局部重建质量与全局图像网络稳健性。三个合成场景上的评估显示，所提方法相对先前 UAV 路径规划方法改进了重建精度与完整性。

## 关键词

UAV、摄影测量、视点规划、CMA-ES、重建
