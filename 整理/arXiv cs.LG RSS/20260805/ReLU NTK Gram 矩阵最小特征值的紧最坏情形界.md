---
published: 2026-08-05
title: "ReLU NTK Gram 矩阵最小特征值的紧最坏情形界"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Tight Worst-Case Bounds for the Smallest Eigenvalue of ReLU NTK Gram Matrices.md"
source_note: "[[信息源/arXiv cs.LG RSS/Tight Worst-Case Bounds for the Smallest Eigenvalue of ReLU NTK Gram Matrices.]]"
source_sha256: bf99d65c92d682ef6e2838dddc48b1b7b1db2216e47d3caa4e9fe7ab9b56d294
original_url: "https://arxiv.org/abs/2608.03368"
processed: 2026-08-05
language: zh-CN
---

# ReLU NTK Gram 矩阵最小特征值的紧最坏情形界

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zhao Song
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03368)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Tight Worst-Case Bounds for the Smallest Eigenvalue of ReLU NTK Gram Matrices.|查看原始文件]]

## 摘要

- 对 n 个单位向量 x_1,…,x_n∈ℝ^d，研究连续 ReLU 导数 Gram 矩阵 H，其条目通过标准高斯方向上成对门控内积的平均获得。
- 记 Δ± := min_{i≠j} min{‖x_i−x_j‖₂, ‖x_i+x_j‖₂} 为射影分离，证明通用无维数下界 λ_min(H) = Ω(Δ±/√log n)。
- 反之构造满足匹配上界 λ_min(H) = O(Δ±/√log n) 的最坏情形族，表明该速率在普适常数内是紧的。

## 正文

论文编号：arXiv:2608.03368v1（更新类型：new）。以下为摘要全文翻译。

对 n 个单位向量 x_1,…,x_n ∈ ℝ^d，我们研究连续 ReLU 导数 Gram 矩阵 H，其条目通过标准高斯方向上的成对门控内积的平均获得。记 Δ± := min_{i≠j} min{‖x_i−x_j‖₂, ‖x_i+x_j‖₂} 为它们的射影分离，我们证明通用无维数下界 λ_min(H) = Ω(Δ±/√log n)。反之，我们构造满足匹配上界 λ_min(H) = O(Δ±/√log n) 的最坏情形族，表明这个速率在普适常数内是紧的。

## 关键词

#NTK #ReLU #Gram矩阵 #特征值 #最坏情形界
