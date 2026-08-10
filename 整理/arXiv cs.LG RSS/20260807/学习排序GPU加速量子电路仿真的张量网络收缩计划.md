---
published: 2026-08-07
title: "学习排序 GPU 加速量子电路仿真的张量网络收缩计划"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Learning to Rank Tensor Network Contraction Plans for GPU-Accelerated Quantum Circuit Simulation.md"
source_note: "[[信息源/arXiv cs.LG RSS/Learning to Rank Tensor Network Contraction Plans for GPU-Accelerated Quantum Circuit Simulation]]"
source_sha256: ba4b7aa9c20aed0f72a58e83fa99fd8d97aa713c12e0cd592377789882d622bc
original_url: "https://arxiv.org/abs/2608.05819"
processed: 2026-08-07
language: zh-CN
---

# 学习排序 GPU 加速量子电路仿真的张量网络收缩计划

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Alfred M. Pastor, Maribel Castillo, Jose M. Badia
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05819)

## 摘要

- 经典仿真对开发与验证量子算法仍然关键，但成本随电路规模快速增长；张量网络收缩可利用电路结构降低成本，但效率强烈依赖所选收缩计划；GPU 上理论复杂度相似的计划性能可能差异很大（并行性、归约结构、内存流量与收缩几何）。
- 提出在执行前选择高效收缩计划的学习排序框架：每个计划由直接取自其成对收缩序列的结构特征表示，梯度提升排序器从 GPU 测量用列表式与成对式目标训练。
- 在多样电路家族上评估，用独立分布内与电路家族漂移测试集，并与随机与 MinFill 基线比较；学习排序器通常识别更好计划，列表式模型整体决策质量最强。
- 研究后端漂移：比较两个 GPU 架构上的经验计划排序，并在第二设备上无重训练评估源训练模型；排序跨 GPU 大体（虽非完美）稳定，模型保留有用决策质量。

## 正文

经典仿真对开发与验证量子算法仍然关键，但其成本随电路规模快速增长。张量网络收缩可通过利用电路结构降低成本，虽然其效率强烈依赖所选收缩计划。在 GPU 上，理论复杂度相似的计划可能表现非常不同，因为执行还依赖并行性、归约结构、内存流量与收缩几何。研究提出在执行前选择高效收缩计划的学习排序框架。每个计划由直接取自其成对收缩序列的结构特征表示，梯度提升排序器从 GPU 测量使用列表式（listwise）与成对式（pairwise）目标训练。研究在多样电路家族上评估所得模型，使用独立分布内与电路家族漂移测试集，并与随机与 MinFill 基线比较。学习排序器通常识别更好的计划，列表式模型提供最强的整体决策质量。研究还研究后端漂移：比较两个 GPU 架构上的经验计划排序，并在第二设备上无重训练评估源训练模型。排序跨 GPU 大体（虽非完美）稳定，模型保留有用的决策质量。这些结果支持将学习排序作为减少收缩计划搜索的实用方式，同时显示性能仍部分依赖后端。

## 关键词

张量网络、量子电路仿真、学习排序、GPU、收缩计划
