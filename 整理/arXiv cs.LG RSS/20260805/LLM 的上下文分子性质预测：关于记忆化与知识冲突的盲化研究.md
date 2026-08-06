---
published: 2026-08-05
title: "LLM 的上下文分子性质预测：关于记忆化与知识冲突的盲化研究"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/In-Context Molecular Property Prediction with LLMs- A Blinding Study on Memorization and Knowledge C.md"
source_note: "[[信息源/arXiv cs.LG RSS/In-Context Molecular Property Prediction with LLMs- A Blinding Study on Memorization and Knowledge C.]]"
source_sha256: 25c3fe660985f8f9728b208844bd3cd827141b76483024cf1494f3aa3d9ffeb4
original_url: "https://arxiv.org/abs/2603.25857"
processed: 2026-08-05
language: zh-CN
---

# LLM 的上下文分子性质预测：关于记忆化与知识冲突的盲化研究

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Matthias Busch、Marius Tacke、Sviatlana V. Lamaka、Mikhail L. Zheludkevich、Christian J. Cyron、Christian Feiler、Roland C. Aydin
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.25857)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/In-Context Molecular Property Prediction with LLMs- A Blinding Study on Memorization and Knowledge C.|查看原始文件]]

## 摘要

- 大语言模型（LLM）的能力已从自然语言处理扩展到科学预测任务，包括分子性质预测；但它们在上下文学习中的有效性仍不明确，尤其考虑到广泛使用的基准可能存在训练数据污染。
- 研究 LLM 是执行真实的分子性质上下文回归，还是依赖逐字检索记忆的目标值；并通过一系列渐进盲化实验分析预训练知识与上下文信息之间的相互作用。
- 评估三个家族（GPT-4.1、GPT-5、Gemini 2.5）的九种 LLM 变体，在三个 MoleculeNet 数据集（Delaney 溶解度、亲脂性、QM7 原子化能）上使用系统盲化方法迭代减少可用信息，并辅以 0、60 与 1000 shot 的上下文样本量作为信息访问的额外对照。
- 为验证记忆化分析与盲化实验，为记忆化实验添加正负对照、为多 shot 实验添加结构参考基线，并为所有结果添加自助置信区间。
- 在传统基准上未发现逐字检索的证据，并表明盲化暴露了预训练知识与上下文信息之间的冲突。
- 这项工作为在受控信息访问下评估分子性质预测提供了一个有原则的框架。

## 正文

论文编号：arXiv:2603.25857v3（更新类型：replace）。以下为摘要全文翻译。

大语言模型（LLM）的能力已从自然语言处理扩展到科学预测任务，包括分子性质预测。然而，它们在上下文学习中的有效性仍不明确，特别是考虑到广泛使用的基准存在训练数据污染的潜在可能。本文研究 LLM 是执行真实的分子性质上下文回归，还是转而依赖对记忆目标值的逐字检索。此外，我们通过一系列渐进盲化实验分析预训练知识与上下文信息之间的相互作用。我们评估三个家族（GPT-4.1、GPT-5、Gemini 2.5）的九种 LLM 变体，在三个 MoleculeNet 数据集（Delaney 溶解度、亲脂性、QM7 原子化能）上采用系统盲化方法迭代减少可用信息，并以 0、60 与 1000 shot 的上下文样本量作为信息访问的额外对照。为验证记忆化分析与盲化实验，我们为记忆化实验添加正负对照，为多 shot 实验添加结构参考基线，并为所有结果添加自助置信区间。我们在传统基准上未发现逐字检索的证据，并表明盲化暴露了预训练知识与上下文信息之间的冲突。这项工作为在受控信息访问下评估分子性质预测提供了一个有原则的框架。

## 关键词

#LLM #分子性质预测 #上下文学习 #记忆化 #盲化实验
