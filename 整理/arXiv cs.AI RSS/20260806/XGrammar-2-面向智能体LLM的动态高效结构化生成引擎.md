---
published: 2026-08-06
title: XGrammar-2：面向智能体 LLM 的动态高效结构化生成引擎
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/XGrammar-2- Dynamic and Efficient Structured Generation Engine for Agentic LLMs.md
source_note: "[[信息源/arXiv cs.AI RSS/XGrammar-2- Dynamic and Efficient Structured Generation Engine for Agentic LLMs]]"
source_sha256: c2444e8984b730767420ea65621eb42052ad81b37466eb6718684777603c30ab
original_url: https://arxiv.org/abs/2601.04426
processed: 2026-08-07
language: zh-CN
---

# XGrammar-2：面向智能体 LLM 的动态高效结构化生成引擎

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.04426)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/XGrammar-2- Dynamic and Efficient Structured Generation Engine for Agentic LLMs|查看原始文件]]

## 摘要

- 智能体工作负载（工具调用、响应协议）的结构在请求之间与请求内部都动态变化，对现有静态结构化生成引擎构成新挑战
- 两大设计：TagDispatch（标签触发的动态结构分发）与跨文法缓存（Cross-Grammar Cache，跨不同输出结构请求的细粒度子结构级复用）
- 配合基于 Earley 的自适应 token 掩码缓存、即时编译与重复状态压缩，编译速度比此前引擎快 6 倍以上，现代 LLM 服务系统中端到端开销接近零

## 正文

现代 LLM 智能体越来越依赖动态结构化生成，例如工具调用与响应协议。与使用静态结构的传统结构化生成不同，这些工作负载既在请求之间变化，也在单个请求内部变化，给现有引擎带来新挑战。我们提出 XGrammar-2，一个面向动态智能体工作负载的结构化生成引擎。我们的设计基于两个关键思想：对标签触发的结构切换的一流支持，以及跨不同输出结构请求的细粒度复用。具体而言，XGrammar-2 引入 TagDispatch 用于动态结构分发，以及跨文法缓存（Cross-Grammar Cache）用于文法间的子结构级缓存复用。它还通过基于 Earley 的自适应 token 掩码缓存、即时编译与重复状态压缩进一步提高效率。实验表明，XGrammar-2 的编译速度比此前结构化生成引擎快 6 倍以上，并在现代 LLM 服务系统中产生接近零的端到端开销。

## 关键词

#结构化生成 #工具调用 #LLM智能体 #推理引擎
