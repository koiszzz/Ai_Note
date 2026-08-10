---
published: 2026-08-07
title: "MACRO：Transformer 层的马尔可夫链路由"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MACRO- Markov Chain Routing of Transformer Layers.md"
source_note: "[[信息源/arXiv cs.AI RSS/MACRO- Markov Chain Routing of Transformer Layers]]"
source_sha256: 45fc8e5390b56747591d0fbc339fe154d24318c89d22c836bd70ddc893647e6f
original_url: "https://arxiv.org/abs/2608.05872"
processed: 2026-08-07
language: zh-CN
---

# MACRO：Transformer 层的马尔可夫链路由

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Pawe{\l} Batorski, Abtin Pourhadi, Akylgali Aitaza, Przemys{\l}aw Spurek, Paul Swoboda
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05872)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MACRO- Markov Chain Routing of Transformer Layers|查看原始文件]]

## 摘要

- 标准大语言模型（LLM）顺序执行层；动态层路由（即搜索通过层的不同执行路径，涉及层重复、跳过与其他移动）可改善性能。
- 现有路由方法常需更新模型权重、每测试实例运行昂贵搜索循环，或在推理期间要求真实标签。
- 提出马尔可夫链 Transformer 层路由（MACRO）：在 LLM 架构上学习任务特定路由且不修改底层参数的框架——将层路由建模为依赖上下文的马尔可夫策略，条件于层索引、计算预算阶段、方向位移与算子上下文，支持跳过、重复与残差隐藏状态加法操作。
- 马尔可夫路由分布通过训练数据反馈更新，并使用 top-k Viterbi 算法解码以隔离高概率候选程序；在多个开放权重 LLM 的多样推理与知识基准上评估：MACRO 相对未路由基线平均准确率提升 +5.0%，小模型增益最大；超过最佳动态路由方法 Dr. LLM +7.2%，同时将路由搜索时间减少 9.4 倍（从 14.8 小时到 1.6 小时）；代码公开。

## 正文

标准大语言模型（LLMs）顺序执行层。动态层路由，即搜索通过层的不同执行路径（涉及层重复、跳过与其他移动），可以改善性能。现有路由方法常常需要更新模型权重、对每个测试实例运行昂贵的搜索循环，或在推理期间要求真实标签。本工作中，我们提出马尔可夫链 Transformer 层路由（Markov Chain Routing of Transformer Layers，MACRO），一个在不修改底层参数的情况下学习 LLM 架构上任务特定路由的框架。MACRO 将层路由建模为依赖上下文的马尔可夫策略，条件于层索引、计算预算阶段、方向位移与算子上下文，支持跳过、重复与残差隐藏状态加法操作。马尔可夫路由分布通过训练数据反馈更新，并使用 top-k Viterbi 算法解码，以隔离高概率候选程序。我们在多个开放权重 LLM 的多样推理与知识基准上评估 MACRO。MACRO 相对未路由基线实现 +5.0% 的平均准确率提升，小模型增益最大。我们超过最佳动态路由方法 Dr. LLM +7.2%，同时将路由搜索时间减少 9.4 倍（从 14.8 小时到 1.6 小时）。代码公开于 https://github.com/Batorskq/MACRO。

## 关键词

#动态层路由 #马尔可夫策略 #LLM推理 #Viterbi
