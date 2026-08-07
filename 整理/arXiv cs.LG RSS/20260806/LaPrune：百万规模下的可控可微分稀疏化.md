---
published: 2026-08-06
title: LaPrune：百万规模下的可控可微分稀疏化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale.md
source_note: "[[信息源/arXiv cs.LG RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale]]"
source_sha256: 8422dbfa5c29b968791a75432d9062294ab1752c5386820eb5ed96e186bb333a
original_url: https://arxiv.org/abs/2608.04057
processed: 2026-08-07
language: zh-CN
---

# LaPrune：百万规模下的可控可微分稀疏化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04057)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale|查看原始文件]]

## 摘要

- 提出 LaPrune，一个数学上精确预算的可微分层，在保持所选质量的同时控制归一化二阶矩
- LapSum 屏障保持选择质量，归一化二阶矩约束将掩码从等质量分配推向硬 top-k
- 推导出饱和分数的总体预测、近二值极限律与近零分数的紧最坏情况保证

## 正文

Top-$k$ 选择决定了稀疏模型中的哪些分量保持激活。硬选择会阻断梯度，而连续松弛往往将掩码硬度与所选质量耦合在一起。我们引入 LaPrune——一个数学上精确预算（exact-budget）的可微分层，在保持所选质量的同时控制归一化二阶矩。LapSum 屏障保持选择质量，而归一化二阶矩约束在每个预算下将掩码从密集的等质量分配推向硬 top-$k$。我们推导出饱和分数（saturated fraction）的总体预测、近二值极限律，以及对近零分数（near-zero fraction）的紧最坏情况保证。归一化硬度参数对分数尺度不变，而固定 LapSum 温度则不然。

## 关键词

#LaPrune #稀疏化 #可微分剪枝 #TopK #掩码 #深度学习
