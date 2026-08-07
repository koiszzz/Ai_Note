---
published: 20260806
title: "LaPrune：百万规模的受控可微稀疏性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale.md"
source_note: "[[信息源/arXiv cs.AI RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale]]"
source_sha256: 28241888bf72ad64bd9382223b47706742a4768f9abefa187db0669108f2f07d
original_url: "https://arxiv.org/abs/2608.04057"
processed: 2026-08-06
language: zh-CN

---

# LaPrune：百万规模的受控可微稀疏性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jakub Antczak, Joanna Wojciechowicz, {\L}ukasz Struski, Jacek Tabor
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04057)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LaPrune- Controllable Differentiable Sparsity at Million Scale|查看原始文件]]

## 摘要

- Top-k 选择决定稀疏模型哪些组件保持活跃；硬选择阻断梯度，而连续松弛常将掩码硬度耦合到所选质量。
- 本文引入 LaPrune，一个数学精确预算的可微层，控制归一化二阶矩同时保持所选质量：LapSum 屏障保持选择质量，归一化二阶矩约束将掩码从密集等质量分配移向每个预算的硬 top-k。
- 推导饱和分数的总体预测、近二元极限律和近零分数的紧密最坏情况保证；归一化硬度参数对分数尺度不变，而固定 LapSum 温度不是。

## 正文

Top-k 选择决定稀疏模型哪些组件保持活跃。硬选择阻断梯度，而连续松弛常将掩码硬度耦合到所选质量。我们引入 LaPrune，一个数学精确预算的可微层，控制归一化二阶矩同时保持所选质量。LapSum 屏障保持选择质量，归一化二阶矩约束将掩码从密集等质量分配移向每个预算的硬 top-k。我们推导饱和分数的总体预测、近二元极限律和近零分数的紧密最坏情况保证。归一化硬度参数对分数尺度不变，而固定 LapSum 温度不是。

## 关键词

#稀疏性 #可微层 #剪枝 #Top-k #arXiv