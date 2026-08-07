---
published: 20260806
title: "MemFly：通过信息瓶颈的即时记忆优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck.md"
source_note: "[[信息源/arXiv cs.AI RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck]]"
source_sha256: 8133132bfe6b3abd7ded6843a04d37df835e6a57bd9859aefa59f1252c34c52e
original_url: "https://arxiv.org/abs/2602.07885"
processed: 2026-08-06
language: zh-CN

---

# MemFly：通过信息瓶颈的即时记忆优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhenyuan Zhang, Xianzhang Jia, Zhiqin Yang, Zhenbo Song, Wei Xue, Sirui Han, Yike Guo
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.07885)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck|查看原始文件]]

## 摘要

- 长期记忆使 LLM 智能体通过历史交互处理复杂任务，但现有框架在高效压缩冗余信息与保持下游任务精确检索之间遭遇根本困境。
- 本文提出 MemFly，一个基于信息瓶颈原理的框架，促进 LLM 的即时记忆进化：通过无梯度优化器最小化压缩熵同时最大化相关熵，构建分层记忆结构用于高效存储。
- 开发混合检索机制，无缝集成语义、符号和拓扑路径，融入迭代精炼处理复杂多跳查询；全面实验表明 MemFly 在记忆连贯性、响应保真度和准确率上大幅优于最先进基线。

## 正文

长期记忆使 LLM 智能体通过历史交互处理复杂任务。然而，现有框架在高效压缩冗余信息与保持下游任务精确检索之间遭遇根本困境。为弥合此差距，我们提出 MemFly，一个基于信息瓶颈（information bottleneck）原理的框架，促进 LLM 的即时记忆进化。我们的方法通过无梯度优化器最小化压缩熵同时最大化相关熵，构建分层记忆结构用于高效存储。为充分利用 MemFly，我们开发混合检索机制，无缝集成语义、符号和拓扑路径，融入迭代精炼处理复杂多跳查询。全面实验表明，MemFly 在记忆连贯性、响应保真度和准确率上大幅优于最先进基线。

## 关键词

#智能体记忆 #信息瓶颈 #记忆优化 #检索 #arXiv