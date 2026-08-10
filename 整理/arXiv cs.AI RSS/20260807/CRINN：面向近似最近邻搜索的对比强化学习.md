---
published: 2026-08-07
title: "CRINN：面向近似最近邻搜索的对比强化学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CRINN- Contrastive Reinforcement Learning for Approximate Nearest Neighbor Search.md"
source_note: "[[信息源/arXiv cs.AI RSS/CRINN- Contrastive Reinforcement Learning for Approximate Nearest Neighbor Search]]"
source_sha256: 9009559a4c392acf55331b38e7d8542831b5d4aa9d6dd45311db590e40ec0d10
original_url: "https://arxiv.org/abs/2508.02091"
processed: 2026-08-07
language: zh-CN
---

# CRINN：面向近似最近邻搜索的对比强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaoya Li, Albert Wang, Guoyin Wang, Chris Shum, Jiwei Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.02091)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CRINN- Contrastive Reinforcement Learning for Approximate Nearest Neighbor Search|查看原始文件]]

## 摘要

- 近似最近邻搜索（ANNS）算法对近期 AI 应用日益关键，尤其在检索增强生成（RAG）与基于智能体的 LLM 应用中。
- 提出 CRINN：ANNS 算法的新范式，将 ANNS 优化视为执行速度作为奖励信号的强化学习问题，自动生成逐步更快的 ANNS 实现，同时保持精度约束。
- 在六个广泛使用的 NNS 基准数据集上实验：与最优开源 ANNS 算法相比，CRINN 在其中三个（GIST-960-Euclidean、MNIST-784-Euclidean、GloVe-25-angular）取得最佳性能，并在两个（SIFT-128-Euclidean 与 GloVe-25-angular）并列第一。
- CRINN 的成功意义远超 ANNS 优化：验证了强化学习增强的 LLM 可作为自动化需要专门知识与劳动密集手工精炼的复杂算法优化的有效工具。

## 正文

近似最近邻搜索（approximate nearest-neighbor search，ANNS）算法对近期 AI 应用日益关键，尤其在检索增强生成（RAG）与基于智能体的 LLM 应用中。本文中，我们提出 CRINN，ANNS 算法的新范式。CRINN 将 ANNS 优化视为执行速度作为奖励信号的强化学习问题。该方法能够在保持精度约束的同时，自动生成逐步更快的 ANNS 实现。我们的实验评估展示了 CRINN 在六个广泛使用的 NNS 基准数据集上的有效性。与最优开源 ANNS 算法相比，CRINN 在其中三个（GIST-960-Euclidean、MNIST-784-Euclidean 与 GloVe-25-angular）取得最佳性能，并在两个（SIFT-128-Euclidean 与 GloVe-25-angular）并列第一。CRINN 成功的意义远超 ANNS 优化：它验证了强化学习增强的 LLM 可以充当自动化复杂算法优化的有效工具，这些优化需要专门知识与劳动密集的手工精炼。代码见 https://github.com/ornith-ai/CRINN。

## 关键词

#近似最近邻 #强化学习 #LLM #算法优化
