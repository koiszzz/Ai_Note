---
published: 2026-08-07
title: "TS-RAG：面向时序预测的检索增强生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TS-RAG- Retrieval Augmented Generation for Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.AI RSS/TS-RAG- Retrieval Augmented Generation for Time Series Forecasting]]"
source_sha256: 2529387ee0f95f11de2cb809d1397db7da3b607bab5b69feb35a0c5eab1b2c96
original_url: "https://arxiv.org/abs/2608.06223"
processed: 2026-08-07
language: zh-CN
---

# TS-RAG：面向时序预测的检索增强生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yixiong Xiao, Congxi Xiao, Jingbo Zhou
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06223)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TS-RAG- Retrieval Augmented Generation for Time Series Forecasting|查看原始文件]]

## 摘要

- 虽然深度学习模型（尤其基于 Transformer 的架构）在时序预测中显示出色性能，检索增强生成（RAG）在该领域的应用仍有限。
- 由于 RAG 已被证明通过纳入相关外部信息增强大语言模型能力，检索相似时序序列作为参考也可能提升时序预测任务的准确率——但大多数时序模型受有限训练数据、较小参数规模与缺乏大语言模型广泛生成能力约束；简单如语言模型将参考序列拼接进提示可能无法产生预期结果。
- 提出 TS-RAG：利用 RAG 提升预测性能的新颖方法——框架引入专门设计的参考 token，有效融合输入序列与检索相似序列信息，实现更稳健捕获复杂时间动态。
- 实验结果表明 TS-RAG 在多个真实世界预测基准上实现一致最先进性能。

## 正文

虽然深度学习模型（尤其是基于 Transformer 的架构）在时序预测中显示了出色的性能，检索增强生成（retrieval-augmented generation，RAG）在该领域的应用仍然有限。由于 RAG 已被证明通过纳入相关外部信息来增强大语言模型的能力，检索相似的时序序列作为参考也可能提高时序预测任务的准确率。然而，大多数时序模型受限于有限的训练数据、更小的参数规模以及缺乏大语言模型中广泛生成能力。简单地将参考序列拼接进提示（如语言模型所做）可能无法产生预期的结果。为应对这些挑战，我们提出一种新颖的方法 TS-RAG，利用 RAG 提升预测性能。该框架引入专门设计的参考 token，有效融合输入序列与检索到的相似序列的信息，从而更稳健地捕获复杂的时间动态。实验结果表明，TS-RAG 在多个真实世界的预测基准上实现了一致的、最先进的性能。

## 关键词

#时序预测 #检索增强生成 #参考token #时间动态
