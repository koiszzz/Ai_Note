---
published: 2026-08-07
title: "从示例学习形状：递归 SHACL 中形状学习的基础"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Shapes from Examples- Foundations of Shape Learning in Recursive SHACL.md"
source_note: "[[信息源/arXiv cs.AI RSS/Shapes from Examples- Foundations of Shape Learning in Recursive SHACL]]"
source_sha256: 47b22f32825a081a63311bdf1424af150f9a7e378c229f74c4a0058aa8e0d3c3
original_url: "https://arxiv.org/abs/2607.27934"
processed: 2026-08-07
language: zh-CN
---

# 从示例学习形状：递归 SHACL 中形状学习的基础

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bente Gortworst, Cem Okulmus, Magdalena Ortiz, Anni-Yasmin Turhan
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27934)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Shapes from Examples- Foundations of Shape Learning in Recursive SHACL|查看原始文件]]

## 摘要

- SHACL 形状支持数据图验证，使自动形状学习对知识图谱应用至关重要。
- 研究该任务的著名拟合方法：给定输入图中正负示例节点集 P 与 N，计算形状表达式 C（可能使用递归形状目录中定义的形状名），在 P 中每个节点上验证、N 中无一验证。
- 聚焦 C 以对应描述逻辑 ELI 的 SHACL 核心片段书写的情况；对目录考虑良基、稳定与支持语义。
- 处理拟合存在性与最具体拟合计算，为两个问题建立紧指数时间上限，并为相关特例获得多项式界。

## 正文

SHACL 形状支持数据图验证，使自动形状学习（shape learning）对知识图谱应用至关重要。我们研究该任务的著名拟合方法：给定来自输入图的正负示例节点集 P 与 N，计算一个形状表达式 C（可能使用递归形状目录中定义的形状名），它在 P 的每个节点上验证、在 N 的节点上无一验证。我们聚焦 C 以对应描述逻辑 ELI 的 SHACL 核心片段书写的情况。对于目录，我们考虑良基（well-founded）、稳定（stable）与支持（supported）语义。我们处理拟合存在性（fitting existence）与最具体拟合计算（most specific fitting computation），为两个问题建立紧指数时间上限，并为相关特例获得多项式界。

## 关键词

#SHACL #形状学习 #知识图谱 #描述逻辑
