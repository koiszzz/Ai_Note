---
published: 2026-08-06
title: 接线胜过混合：Transformer 规模之间什么能迁移——什么不能
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Wiring Beats Blending- What Transfers Between Transformer Sizes -- and What Doesn't.md
source_note: "[[信息源/arXiv cs.CL RSS/Wiring Beats Blending- What Transfers Between Transformer Sizes -- and What Doesn't|查看原始文件]]"
source_sha256: a51ae2c5775e6fefeb756368f4b5137287e1ea3f4349c2f626f8f3e334702e56
original_url: https://arxiv.org/abs/2608.02829
processed: 2026-08-07
language: zh-CN
---

# 接线胜过混合：Transformer 规模之间什么能迁移——什么不能

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02829)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Wiring Beats Blending- What Transfers Between Transformer Sizes -- and What Doesn't|查看原始文件]]

## 摘要

- 研究 Pythia 家族 1.4B→410M 的端到端转换：表征跨规模强对齐（ridge R^2=0.84），参数弱对齐
- 稠密权重投影在功能上具破坏性，因为基混合破坏了 rotary、每头、GELU 与 LayerNorm 结构；最佳线性算子后权重残差与噪声不可区分
- 匹配预算继续预训练中，转换分解为两个独立杠杆：最小二乘补偿（功能最优零样本）与保方差重缩放（动态最优端点）
- 补偿在小预算下胜过最强的子克隆变体，且迁移初始化始终优于从零训练，最多达 18 倍；大宽度下补偿求解病态导致过校正，指向维度感知正则化

## 正文

模型家族中的每个规模都从零开始训练。能否把一个预训练的大模型转换成更小的同族模型？我们在 Pythia 家族中端到端地刻画了 1.4B→410M 的转换：

（i）表征跨规模强对齐（ridge $R^2=0.84$），而参数对齐较弱；（ii）稠密权重投影在功能上是破坏性的——已被证明不是组装伪影——因为基混合破坏了 rotary、每头、GELU 与 LayerNorm 结构；（iii）在最佳拟合线性算子之后，权重残差在打乱对照下与噪声在统计上不可区分；（iv）因此转换的价值在于初始化。

在匹配预算的继续预训练中，我们把转换分解为两个独立杠杆——最小二乘补偿（函数上：最佳零样本性能）与保方差重缩放（动力学上：最佳端点）。补偿是一个省 token、低预算的优势，而非普适优势：在 3000 万 token 时，它在宽度缩减对（84.0 ± 1.8 对 89.7 ± 3.7，3/3 种子）与留出的深度缩减对（109.3 对 117.9，3/3 种子）上都胜过最强的子克隆变体，用更少的 token 达到给定质量；而在 33 倍预算下两者收敛到持平（40.0 对 40.0），且都远优于从零训练。迁移初始化总是胜过从零训练——低预算下最多达 18 倍，差距在收敛处和最大规模时收窄。

我们进一步标定了该方法的边界：在大约 5 倍捐赠者规模（6.9B→1.4B）时，两个杠杆叠加会过校正，我们将其追溯到宽宽度下补偿求解的病态性，提示以维度感知正则化作为修复手段。代码、检查点与冻结的评估语料已发布。

## 关键词

#Transformer #模型压缩 #迁移学习 #Pythia #初始化
