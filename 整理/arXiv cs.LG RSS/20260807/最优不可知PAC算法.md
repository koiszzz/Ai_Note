---
published: 2026-08-07
title: "最优不可知 PAC 算法"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/An Optimal Agnostic PAC Algorithm.md"
source_note: "[[信息源/arXiv cs.LG RSS/An Optimal Agnostic PAC Algorithm]]"
source_sha256: 6a3094e33a681b6320a041865560188e4e842149fca52a2ea35de2f93c2435fe
original_url: "https://arxiv.org/abs/2608.06363"
processed: 2026-08-07
language: zh-CN
---

# 最优不可知 PAC 算法

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Markus Engelund Mathiasen, Jian Qian, Nikita Zhivotovskiy
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06363)

## 摘要

- 对有限 VC 维 d 的函数类构造达到统计最优风险界的不可知 PAC 学习器。
- 从大小为 n 的 i.i.d. 样本出发，对每个 0 < δ ≤ 1/2，以至少 1−δ 的概率满足 L(ĥ) ≤ L* + 7×10⁸(√(L*(d+log(1/δ))/n) + (d+log(1/δ))/n)。
- 在每一固定 L* 处，样本复杂度与 Devroye、Györfi、Lugosi 的下界匹配至普适常数。

## 正文

设 H ⊆ {−1,+1}^X 为有限 VC 维 d ≥ 1 的函数类。记 L 为二分类风险，L* = min_{h∈H} L(h)。本文构造一个达到统计最优风险界的学习器：从大小为 n 的 i.i.d. 样本出发，对每个 0 < δ ≤ 1/2，以至少 1−δ 的概率满足 L(ĥ) ≤ L* + 7×10⁸(√(L*(d+log(1/δ))/n) + (d+log(1/δ))/n)。这确定了不可知 PAC 学习在每一固定 L* 处、直至普适常数的样本复杂度，并与 Devroye、Györfi 和 Lugosi（《A Probabilistic Theory of Pattern Recognition》，Springer, 1996）的下界相匹配。

## 关键词

PAC 学习、不可知学习、样本复杂度、VC 维
