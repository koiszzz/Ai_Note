---
published: 2026-08-07
title: "MACRO：Transformer 层的马尔可夫链路由"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/MACRO- Markov Chain Routing of Transformer Layers.md"
source_note: "[[信息源/arXiv cs.CL RSS/MACRO- Markov Chain Routing of Transformer Layers]]"
source_sha256: 8cd931b3f2540f05f4bf34759769ce5192facd85bed25bd33678d68dd6f2b54a
original_url: "https://arxiv.org/abs/2608.05872"
processed: 2026-08-07
language: zh-CN
---

# MACRO：Transformer 层的马尔可夫链路由

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Paweł Batorski, Abtin Pourhadi, Akylgali Aitaza, Przemysław Spurek, Paul Swoboda
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05872)

## 摘要

- 标准 LLM 顺序执行层；动态层路由（搜索含层重复、跳过与其他移动的层执行路径）可改进性能；现有路由方法常需更新模型权重、每测试实例跑昂贵搜索循环或推理时要求真值标签。
- 提出 Transformer 层马尔可夫链路由（MACRO）：不修改底层参数学习任务特定路径的框架；将层路由建模为上下文依赖马尔可夫策略，条件化于层索引、计算预算阶段、方向位移与算子上下文，支持跳过、重复与残差隐藏状态加操作。
- 马尔可夫路由分布经训练数据反馈更新，用 top-k Viterbi 算法解码隔离高概率候选程序。
- 多个开源权重 LLM 多样推理与知识基准评估：MACRO 相对无路由基线平均准确率 +5.0%，小模型增益最大；超越最佳动态路由方法 Dr. LLM +7.2%，路由搜索时间降 9.4 倍（14.8 至 1.6 小时）；代码公开。

## 正文

标准大语言模型（LLMs）顺序地执行层。动态层路由——即搜索一条不同的层执行路径，涉及层重复、跳过与其他移动——可以改进性能。现有路由方法往往需要更新模型权重、为每个测试实例运行昂贵的搜索循环，或在推理期间要求真值标签。本文提出 Transformer 层马尔可夫链路由（Markov Chain Routing of Transformer Layers, MACRO），一个在不修改底层参数的情况下学习 LLM 架构任务特定路径的框架。MACRO 将层路由建模为一个上下文依赖的马尔可夫策略，条件化于层索引、计算预算阶段、方向位移与算子上下文，支持跳过、重复与残差隐藏状态加操作。马尔可夫路由分布通过训练数据上的反馈更新，并使用 top-k Viterbi 算法解码，以隔离高概率的候选程序。研究在多个开源权重 LLM 的多样推理与知识基准上评估 MACRO。MACRO 相对无路由基线实现平均准确率 +5.0%，在小型模型上增益最大。研究超越最佳动态路由方法 Dr. LLM +7.2%，同时将路由搜索时间减少 9.4 倍（从 14.8 小时到 1.6 小时）。代码公开于 https://github.com/Batorskq/MACRO。

## 关键词

层路由、马尔可夫链、LLM、动态推理、Viterbi
