---
published: 20260806
title: "SE(3)-MeanFlow：李群上的少步蛋白质主链生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups.md"
source_note: "[[信息源/arXiv cs.AI RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups]]"
source_sha256: b0f1fbed95d1df3c4fdd8f2a60892b14900e31860eb9bced057cfe7d9a272c95
original_url: "https://arxiv.org/abs/2607.27431"
processed: 2026-08-06
language: zh-CN

---

# SE(3)-MeanFlow：李群上的少步蛋白质主链生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yikun Bai, Binghang Lu, Yikai Liu, Elaheh Akbari, Soheil Kolouri, Linxuan Wang, Ping He, Shuchan Wang, Ruqi Zhang, Guang Lin
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27431)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SE(3)-MeanFlow- Few-Step Protein Backbone Generation on Lie Groups|查看原始文件]]

## 摘要

- 蛋白质主链生成建模承诺具有规定结构和功能性质的蛋白质从头设计；现有扩散和流匹配模型在 SE(3)^N 上产生高质量主链，但推理需在数百次网络评估上数值积分 ODE，每次涉及李群指数映射——高通量设计活动的瓶颈。
- 本文引入 SE(3)-MeanFlow，一个将 MeanFlow 从欧氏空间扩展到蛋白质框架李群几何的少步生成框架：原生在 so(3) 李代数和 R³ 中工作，推导旋转和平移的闭式平均速度恒等式，给出免仿真训练目标。
- 引入 SE(3) alpha-Flow 目标，从旋转分支移除雅可比-向量积并作为预热阶段，之后训练切换到小 t 稳定 MeanFlow 损失用于剩余预训练和基于修正的训练后；蛋白质主链生成中，SE(3)-MeanFlow 匹配或超过使用数倍采样步骤的流匹配基线，少步状态下优势扩大，修正使其在每个匹配预算领先。

## 正文

蛋白质主链生成建模承诺具有规定结构和功能性质的蛋白质从头设计。现有扩散和流匹配模型在 SE(3)^N 上产生高质量主链，但推理需要在数百次网络评估上数值积分 ODE，每次涉及李群指数映射——高通量设计活动的瓶颈。我们引入 SE(3)-MeanFlow，一个将 MeanFlow 从欧氏空间扩展到蛋白质框架李群几何的少步生成框架。原生在 so(3) 李代数和 R³ 中工作，我们推导旋转和平移的闭式平均速度恒等式，给出免仿真（simulation-free）训练目标。我们进一步引入 SE(3) alpha-Flow 目标，从旋转分支移除雅可比-向量积并作为预热阶段，之后训练切换到小 t 稳定的 MeanFlow 损失，用于剩余预训练和基于修正（rectification）的训练后。在蛋白质主链生成中，SE(3)-MeanFlow 匹配或超过使用数倍采样步骤的流匹配基线，且其在少步状态的优势扩大，修正使其在每个匹配预算领先——以适度多样性成本。

## 关键词

#蛋白质生成 #流匹配 #李群 #少步采样 #arXiv