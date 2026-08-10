---
published: 2026-08-07
title: "CRINN：近似最近邻搜索的对比强化学习"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/CRINN- Contrastive Reinforcement Learning for Approximate Nearest Neighbor Search.md"
source_note: "[[信息源/arXiv cs.CL RSS/CRINN- Contrastive Reinforcement Learning for Approximate Nearest Neighbor Search]]"
source_sha256: 09dd4e2dd1a3451e96da5d804c5fdd0e4289a6f2594b274b4aded008dc33333f
original_url: "https://arxiv.org/abs/2508.02091"
processed: 2026-08-07
language: zh-CN
---

# CRINN：近似最近邻搜索的对比强化学习

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xiaoya Li, Albert Wang, Guoyin Wang, Chris Shum, Jiwei Li
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2508.02091)

## 摘要

- 近似最近邻搜索（ANNS）算法对近期 AI 应用日益关键，尤其在检索增强生成（RAG）与智能体 LLM 应用中。
- 提出 CRINN：将 ANNS 优化视为以执行速度为奖励信号的强化学习问题，自动生成渐进更快且保持精度约束的 ANNS 实现。
- 在六个广泛使用的 NNS 基准数据集上评估：3 个取得最佳性能（GIST-960-Euclidean、MNIST-784-Euclidean、GloVe-25-angular），2 个并列第一（SIFT-128-Euclidean、GloVe-25-angular）。
- 验证 LLM 结合强化学习可作为自动化需要专业知识与劳动密集型手工精炼的复杂算法优化的有效工具；代码见 GitHub。

## 正文

近似最近邻搜索（approximate nearest-neighbor search, ANNS）算法对近期 AI 应用日益关键，尤其在检索增强生成（RAG）与智能体 LLM 应用中。本文提出 CRINN，一种新的 ANNS 算法范式。CRINN 将 ANNS 优化视为强化学习问题，以执行速度作为奖励信号，从而在保持精度约束的同时自动生成渐进更快的 ANNS 实现。实验评估展示了 CRINN 在六个广泛使用的 NNS 基准数据集上的有效性：与最先进开源 ANNS 算法相比，CRINN 在 3 个数据集上取得最佳性能（GIST-960-Euclidean、MNIST-784-Euclidean 与 GloVe-25-angular），并在 2 个上并列第一（SIFT-128-Euclidean 与 GloVe-25-angular）。CRINN 成功的意义远超 ANNS 优化本身：它验证了强化学习增强的 LLM 可作为有效工具，自动化需要专业知识与劳动密集型手工精炼的复杂算法优化。代码见 https://github.com/ornith-ai/CRINN。

## 关键词

近似最近邻搜索、强化学习、LLM、算法优化、RAG
