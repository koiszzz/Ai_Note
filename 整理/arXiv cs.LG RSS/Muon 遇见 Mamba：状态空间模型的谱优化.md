---
title: "Muon 遇见 Mamba：状态空间模型的谱优化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Muon Meets Mamba- Spectral Optimization for State Space Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/Muon Meets Mamba- Spectral Optimization for State Space Models.]]"
source_sha256: dc48151236f6f7a1229d826284b904ec2100b14a7fd7b0c59859e3693fcdb534
original_url: "https://arxiv.org/abs/2608.03941"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Muon 遇见 Mamba：状态空间模型的谱优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Arslan Battalov、Karim Kramin、Alexander Markotenko、Sofia Sinitsina
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03941)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Muon Meets Mamba- Spectral Optimization for State Space Models.|查看原始文件]]

## 摘要

- Muon 是近期提出的优化器，用 Newton-Schulz 迭代对每个权重矩阵的更新正交化，在谱范数下执行最陡下降；其证据几乎全部来自 Transformer 模型，在状态空间模型上的行为基本未被报告。
- 在受控协议下把 Muon 与 AdamW 在 Mamba-2 130M 上比较，只改变用 Muon 训练哪些权重组：收益是局部化的。
- 只在输出投影上用 Muon 优于在输入投影或两者上都用 Muon；优势主要是 token 效率。
- 该优势在两个语料与两个 token 预算下成立，并在训练远超计算最优点后持续存在。
- 条件数不能解释收益：Muon 降低其训练的任何投影的条件数，但条件数更好的输入投影并不是有帮助的那个。

## 正文

论文编号：arXiv:2608.03941v1（更新类型：new）。以下为摘要全文翻译。

Muon 是一个近期提出的优化器，用 Newton-Schulz 迭代对每个权重矩阵的更新进行正交化，在谱范数下执行最陡下降。它几乎所有的证据都来自 Transformer 模型，其在状态空间模型上的行为在很大程度上未被报告。我们在受控协议下把 Muon 与 AdamW 在 Mamba-2 130M 上比较，该协议只改变用 Muon 训练的权重组。收益是局部化的：只在输出投影上用 Muon 优于在输入投影或两者上都用 Muon。优势主要在于 token 效率。它在一个语料与两个 token 预算下都成立，并在训练远超计算最优点后持续存在。条件数不能解释这一收益：Muon 降低它训练的任何投影的条件数，但条件数更好的输入投影并不是有帮助的那个。

## 关键词

#Muon #Mamba #谱优化 #状态空间模型 #优化器
