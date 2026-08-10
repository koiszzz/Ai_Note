---
published: 2026-08-07
title: "TS-RAG：时间序列预测的检索增强生成"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TS-RAG- Retrieval Augmented Generation for Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.LG RSS/TS-RAG- Retrieval Augmented Generation for Time Series Forecasting]]"
source_sha256: 39067348d236c1fc3c12e87b33d36034c4a67de91e7bbe68b4125eb911d1b073
original_url: "https://arxiv.org/abs/2608.06223"
processed: 2026-08-07
language: zh-CN
---

# TS-RAG：时间序列预测的检索增强生成

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yixiong Xiao, Congxi Xiao, Jingbo Zhou
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06223)

## 摘要

- 深度学习模型（尤其 transformer 架构）在时间序列预测表现优异，但检索增强生成（RAG）在该领域的应用仍有限。
- RAG 已证明通过纳入相关外部信息增强 LLM 能力，检索相似时间序列作为参考可能也提升预测准确率；但多数时间序列模型受有限训练数据、较小参数规模与缺乏 LLM 广泛生成能力约束。
- 像语言模型那样简单将参考序列拼接进提示可能不产生预期结果。
- 提出 TS-RAG：利用 RAG 增强预测性能的框架；引入专门设计的参考 token，有效融合输入序列与检索相似序列的信息，更稳健捕捉复杂时间动力学；实验显示多个真实预测基准上取得一致 SOTA 性能。

## 正文

虽然深度学习模型（尤其是基于 transformer 的架构）在时间序列预测中表现优异，检索增强生成（retrieval-augmented generation, RAG）在该领域的应用仍有限。由于 RAG 已证明通过纳入相关外部信息增强大语言模型能力，检索相似时间序列作为参考也可能提升时间序列预测任务的准确率。然而，大多数时间序列模型受限于有限训练数据、较小参数规模，以及缺乏大语言模型中发现的广泛生成能力。像语言模型中那样简单将参考序列拼接进提示，可能不会产生预期结果。为应对这些挑战，研究提出新颖方法 TS-RAG，利用 RAG 增强预测性能。该框架引入专门设计的参考 token，有效融合输入序列与检索到的相似序列的信息，从而更稳健地捕捉复杂的时间动力学。实验结果表明，TS-RAG 在多个真实世界预测基准上取得一致的先进性能。

## 关键词

时间序列预测、RAG、检索、参考 token、transformer
