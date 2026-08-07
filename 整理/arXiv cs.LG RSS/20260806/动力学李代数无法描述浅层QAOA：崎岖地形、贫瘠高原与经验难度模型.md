---
published: 2026-08-06
title: 动力学李代数无法描述浅层QAOA：崎岖地形、贫瘠高原与经验难度模型
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Dynamical Lie Algebras Cannot Describe Shallow QAOA- Cragged Terrains, Barren Plateaus, and Empirica.md
source_note: "[[信息源/arXiv cs.LG RSS/Dynamical Lie Algebras Cannot Describe Shallow QAOA- Cragged Terrains, Barren Plateaus, and Empirica]]"
source_sha256: e939969ca3d1d712207bb94ad7cfaea3b81857a2b3e0877771e9dc1ad8d93e20
original_url: https://arxiv.org/abs/2608.04252
processed: 2026-08-07
language: zh-CN
---

# 动力学李代数无法描述浅层QAOA：崎岖地形、贫瘠高原与经验难度模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04252)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Dynamical Lie Algebras Cannot Describe Shallow QAOA- Cragged Terrains, Barren Plateaus, and Empirica|查看原始文件]]

## 摘要

- 动力学李代数（DLA）理论对变分量子算法（VQA）的预言在浅电路机制下严重失效
- 在约 23,000 个问题实例的大规模数值研究中，贫瘠高原罕见而"崎岖地形"普遍
- 经验难度模型虽泛化不佳，却能高保真恢复正确的景观缩放类别

## 正文

变分量子算法（VQA）的动力学李代数（DLA）理论预言，对于足够深的参数化电路，损失函数与梯度的方差会普遍地呈指数消失。在本文中，我们表明这些预言在应用于最大独立集（MIS）问题的量子近似优化算法（QAOA）的浅电路（尤其是恒定深度）机制中会严重失效。在一项覆盖约 23,000 个问题实例的大规模数值研究中，我们发现贫瘠高原（barren plateaus）很罕见，而方差随系统规模多项式增长的景观——我们称之为"崎岖地形"（cragged terrains）——在各图族中普遍存在。这种聚合的多项式增长既出现在通用的、低对称性的随机图上，也出现在高度对称的顶点传递图上，表明基于 DLA 的方差预言无法描述该机制下的景观缩放。

作为该理论的一种临时替代方案，我们训练经验难度模型来预测 QAOA-MIS 的逐实例难度指标。虽然这些模型泛化能力较差，但它们仍能以高保真度恢复正确的景观缩放类别（贫瘠高原 vs. 崎岖地形）。综合来看，我们的结果将 MIS 上的浅层 QAOA 确定为一个典型场景：在这一场景中，渐进的、以酉设计（unitary-design）为中心的预言可能从根本上不足以描述更广泛的浅层变分量子算法，这凸显了建立更多基于经验的 VQA 损失景观模型的必要性。

## 关键词

#量子计算 #QAOA #变分量子算法 #贫瘠高原 #动力学李代数
