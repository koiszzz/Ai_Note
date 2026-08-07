---
published: 2026-08-06
title: Shieldstral：策略自适应的多模态安全分类器
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Shieldstral.md
source_note: "[[信息源/arXiv cs.CV RSS/Shieldstral]]"
source_sha256: eb97a8c4db32a136800fed93a210182a46839a953a3f2cd78cc34895a04b8f99
original_url: https://arxiv.org/abs/2607.25857
processed: 2026-08-07
language: zh-CN
---

# Shieldstral：策略自适应的多模态安全分类器

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25857)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Shieldstral|查看原始文件]]

## 摘要

- 提出 Shieldstral，一个 3B 参数的策略自适应多模态安全分类器：在文本安全基准上匹配或超越体积约为其 7 倍的模型，并在多模态安全分类上达到新的最优水平。
- 将内容审核形式化为二元问答（binary question-answering）任务，把多样化的审核任务统一为单一"是/否"问题，使分类体系各异的异构安全数据集能在同一训练框架下整合。
- 介绍数据构建配方：约 5410 万个样本的策展与生成，以及用于评估策略自适应性的细粒度评测集。

## 正文

在本文中，我们推出 Shieldstral——一个参数规模为 30 亿（3B）的、具备策略自适应能力的多模态安全分类器。在文本安全基准测试上，它的表现可以匹配甚至超越体积几乎为其 7 倍的大模型，并在多模态安全分类任务上确立了新的最优水平（state of the art）。Shieldstral 将内容审核（content moderation）形式化为一个二元问答任务：模型只需对给定的内容给出"是"或"否"的回答。这种简洁的形式把各种不同的审核任务统一为单个"是/否"问题，从而使得那些采用不同分类体系（taxonomy）的异构安全数据集，能够在同一个训练框架之下被合并、整合起来。在论文中，我们还介绍了完整的数据构建配方（data construction recipe），其中涵盖了大约 5410 万个样本的策展（curation）与生成（generation），以及一个细粒度的评测集，用于评估模型的策略自适应性（policy adaptability）。综合以上这些要素，一个体积很小的自适应模型，就能够在各项安全任务上匹配甚至超越体积大得多的模型。

## 关键词

#AI安全 #内容审核 #多模态 #模型对齐
