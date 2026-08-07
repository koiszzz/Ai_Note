---
published: 2026-08-06
title: SE(3)-MeanFlow：李群上的少步蛋白质骨架生成
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups.md
source_note: "[[信息源/arXiv cs.LG RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups]]"
source_sha256: c64937f463e74207d816cb1e16f51e7a295f1ee5ddd831e50faa49a38a96458c
original_url: https://arxiv.org/abs/2607.27431
processed: 2026-08-07
language: zh-CN
---

# SE(3)-MeanFlow：李群上的少步蛋白质骨架生成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27431)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups|查看原始文件]]

## 摘要

- 蛋白质骨架的生成式建模有望实现具有指定结构与功能性质的蛋白质的从头设计；现有扩散与流匹配模型在 SE(3)^N 上生成高质量骨架，但推理需在数百次网络评估上对 ODE 数值积分，成为高通量设计活动的瓶颈。
- 引入 SE(3)-MeanFlow，将 MeanFlow 从欧氏空间扩展到蛋白质框架的李群几何；原生在李代数 so(3) 与 R^3 上工作，推导旋转与平移的平均速度闭式恒等式，得到无仿真训练目标。
- 提出 SE(3) alpha-Flow 目标，从旋转分支移除 Jacobian-向量积并作为预热阶段；在蛋白质骨架生成中，SE(3)-MeanFlow 匹配或超越采样步数多出数倍的流匹配基线，少步区间优势更大，整流使每个预算下都领先，仅以适度多样性为代价。

## 正文

蛋白质骨架的生成式建模有望实现具有指定结构与功能性质的蛋白质的从头设计。现有扩散与流匹配模型能在 SE(3)^N 上生成高质量骨架，但推理需要对常微分方程（ODE）在数百次网络评估上做数值积分，每次评估都涉及李群指数映射——这是高通量设计活动的瓶颈。

作者引入 SE(3)-MeanFlow，一个少步生成框架，将 MeanFlow 从欧氏空间扩展到蛋白质框架的李群几何。通过原生地在李代数 so(3) 与 R^3 中工作，他们推导出旋转与平移的平均速度闭式恒等式，从而获得无仿真（simulation-free）训练目标。作者进一步引入 SE(3) alpha-Flow 目标，它从旋转分支移除 Jacobian-向量积，并作为预热阶段；此后训练切换到小步长稳定的 MeanFlow 损失，用于剩余预训练阶段以及基于整流（rectification）的后训练。

在蛋白质骨架生成中，SE(3)-MeanFlow 匹配或超越了采样步数多出数倍的流匹配基线，且其优势在少步区间进一步扩大——整流使其在每个匹配的预算下都保持领先，仅以适度多样性为代价。

## 关键词

#蛋白质生成 #流匹配 #李群 #SE(3) #少步采样 #从头设计
