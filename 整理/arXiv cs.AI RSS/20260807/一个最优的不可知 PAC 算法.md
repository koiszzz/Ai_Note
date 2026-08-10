---
published: 2026-08-07
title: "一个最优的不可知 PAC 算法"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/An Optimal Agnostic PAC Algorithm.md"
source_note: "[[信息源/arXiv cs.AI RSS/An Optimal Agnostic PAC Algorithm]]"
source_sha256: 70d827306d20e291873edef070ab10d1152b60cf45dab4f22c4e34b04c3d4909
original_url: "https://arxiv.org/abs/2608.06363"
processed: 2026-08-07
language: zh-CN
---

# 一个最优的不可知 PAC 算法

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Markus Engelund Mathiasen, Jian Qian, Nikita Zhivotovskiy
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06363)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/An Optimal Agnostic PAC Algorithm|查看原始文件]]

## 摘要

- 设 H 为有限 VC 维 d≥1 的函数类，L 为二值风险、L* 为类内最小风险，论文构造了一个达到统计最优风险界的学习器。
- 从 n 个 i.i.d. 样本出发，对任意 0<δ≤1/2，以至少 1-δ 的概率满足 L(ĥ) ≤ L* + 7×10⁸(√(L*(d+log(1/δ))/n) + (d+log(1/δ))/n)。
- 该结果在任意固定 L* 下将不可知 PAC 学习的样本复杂度确定到普遍常数级别，匹配 Devroye、Györfi 与 Lugosi 的下界。

## 正文

设 H⊆{-1,+1}^X 是一个有限 VC 维 d≥1 的函数类。记 L 为二值风险、L*=min_{h∈H}L(h)，我们构造了一个达到统计最优风险界的学习器：从大小为 n 的 i.i.d. 样本出发，对任意 0<δ≤1/2，以至少 1-δ 的概率满足

L(ĥ) ≤ L* + 7×10⁸(√(L*(d+log(1/δ))/n) + (d+log(1/δ))/n)。

这解决了不可知 PAC 学习在任意固定 L* 下、直到普遍常数级别的样本复杂度，匹配 Devroye、Györfi 与 Lugosi [《模式识别的概率理论》，Springer, 1996] 的下界。

## 关键词

#PAC学习 #不可知学习 #样本复杂度 #统计学习理论
