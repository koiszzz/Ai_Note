---
title: "BBOWP-Bench：评估 LLM 的黑箱优化文字题"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/BBOWP-Bench- Evaluating LLMs on Black-Box Optimization Word Problems.md"
source_note: "[[信息源/arXiv cs.LG RSS/BBOWP-Bench- Evaluating LLMs on Black-Box Optimization Word Problems]]"
source_sha256: 028bc00139c66541f6d94880f3d16de03727e940bb8f6a1e7c47deff5235c201
original_url: "https://arxiv.org/abs/2608.02612"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# BBOWP-Bench：评估 LLM 的黑箱优化文字题

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yutaro Yamada、Kei Hiroshima、Nozomu Yoshinari 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02612)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/BBOWP-Bench- Evaluating LLMs on Black-Box Optimization Word Problems|查看原始文件]]

## 摘要

- 引入黑箱优化文字题（BBOWP），新颖问题设置：系统必须从黑箱优化任务的自然语言描述推断搜索空间与优化算法；建立 BBOWP 基准套件（BBOWP-Bench），数据集与评估框架：每个实例结合自然语言问题描述、可执行评估环境与人工设计基线公式，允许评估搜索空间设计与算法选择。
- 优化问题表述强烈影响最终解质量，但良好表述通常需大量专长；近期研究考察如何从自然语言描述自动推导优化问题，但现有基准聚焦目标与约束可显式写为数学表达式的设置；许多实际重要问题天然为黑箱优化（BBO）问题（只观测目标值、功能形式不可用）；BBO 中搜索空间设计（问题表述的一部分）与优化算法选择对求解至关重要——用 LLM 自动化这些过程是重大挑战。
- 用该基准提供 LLM 首次评估：当前 LLM 能基于给定评估预算选择合适算法；但有时在搜索空间设计上挣扎——尤其在问题描述信息较少或搜索空间高度问题特定时识别重要变量与平衡其范围。
- 代码与数据集：https://github.com/shiralab/bbowp-bench

## 正文

论文编号：arXiv:2608.02612v1（更新类型：cross）。以下为摘要全文翻译。

优化问题的表述强烈影响最终解的质量，然而良好的表述通常需要大量专长。近期研究因此考察如何从自然语言描述自动推导优化问题，但现有基准聚焦于目标与约束可以显式写为数学表达式的设置。许多实际重要的问题天然被当作黑箱优化（BBO）问题处理：其中只能观测目标值，功能形式不可用。在 BBO 中，搜索空间设计（问题表述的一部分）与优化算法的选择对问题求解至关重要。用大语言模型（LLM）自动化这些过程是一个重大挑战。本文引入黑箱优化文字题（Black-Box Optimization Word Problems，BBOWP），一种新颖的问题设置：系统必须从黑箱优化任务的自然语言描述推断出搜索空间与优化算法。为支持该设置的研究，我们建立 BBOWP 基准套件（BBOWP-Bench）：一个 BBOWP 的数据集与评估框架。每个实例结合一个自然语言问题描述、一个可执行评估环境与一个人工设计的基线公式，允许同时评估搜索空间设计与算法选择。使用该基准，我们提供 LLM 的首次评估，并表明当前 LLM 能够基于给定的评估预算选择合适的算法。然而，它们有时在搜索空间设计上挣扎，尤其在问题描述信息较少或搜索空间高度问题特定时，识别重要变量并平衡其范围有困难。我们的代码与数据集可在 https://github.com/shiralab/bbowp-bench 获取。

## 关键词

#黑箱优化 #LLM #搜索空间设计 #基准
