---
published: 2026-08-06
title: MALT：基于对角预条件的轻量级曲率感知Muon优化器
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MALT- Lightweight Curvature-Aware Muon via Diagonal Preconditioning.md
source_note: "[[信息源/arXiv cs.LG RSS/MALT- Lightweight Curvature-Aware Muon via Diagonal Preconditioning]]"
source_sha256: 889a619cde29c5bb140d24de8cf6beb5b9be015d4f7a302610098b857aadf420
original_url: https://arxiv.org/abs/2608.05088
processed: 2026-08-07
language: zh-CN
---

# MALT：基于对角预条件的轻量级曲率感知Muon优化器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05088)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MALT- Lightweight Curvature-Aware Muon via Diagonal Preconditioning|查看原始文件]]

## 摘要

- 提出 MALT（轻量级双侧预条件增强的 Muon）：使用轻量级对角预条件器降低 Muon 对曲率各向异性的敏感性
- 用 Newton-Schulz 迭代正交化预条件后的动量，映射回定义更新方向，并以范数嫁接控制更新幅度；进一步提出 MALTER 增强对随机梯度噪声的鲁棒性
- 在随机非凸设定下提供 MALT 的收敛保证；GPT-2 Small、Medium、Large 预训练实验表明所提方法在几乎相同的内存占用与墙钟时间下优于 Muon

## 正文

Muon 近期作为 AdamW 在语言模型预训练中的有前景替代方案出现，它通过 Newton-Schulz 迭代正交化动量矩阵。虽然 Muon 缓解了梯度各向异性，但它并未显式考虑损失景观的曲率几何，因此可能仍对曲率各向异性敏感。我们通过提出 MALT（Muon Augmented by Lightweight Two-sided Preconditioning，轻量级双侧预条件增强的 Muon）弥合这一差距，它使用轻量级对角预条件器降低 Muon 对曲率各向异性的敏感性。具体而言，MALT 使用低内存与低计算开销的双侧对角预条件器，近似捕获损失景观的曲率几何。它使用 Newton-Schulz 迭代正交化预条件后的动量，并将结果映射回以定义更新方向，同时用范数嫁接（norm grafting）控制更新幅度。为提升 MALT 对随机梯度噪声的鲁棒性，我们进一步提出了 MALTER（MALT with Adaptive stEpsize Rescaling，带自适应步长重缩放的 MALT）。在随机非凸设定下为 MALT 提供了收敛保证。GPT-2 Small、Medium 与 Large 的预训练实验表明，所提方法优于 Muon，同时保持几乎相同的内存占用与墙钟时间。

## 关键词

#优化器 #Muon #AdamW #预条件 #大语言模型预训练
