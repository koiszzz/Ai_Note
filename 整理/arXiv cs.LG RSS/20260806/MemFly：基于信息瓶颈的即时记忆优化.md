---
published: 2026-08-06
title: MemFly：基于信息瓶颈的即时记忆优化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck.md
source_note: "[[信息源/arXiv cs.LG RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck]]"
source_sha256: fb0534fc4a85b33d9cb2807c74f64598504a08bc9e4da1c9b6b9853184e612a2
original_url: https://arxiv.org/abs/2602.07885
processed: 2026-08-07
language: zh-CN
---

# MemFly：基于信息瓶颈的即时记忆优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.07885)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MemFly- On-the-Fly Memory Optimization via Information Bottleneck|查看原始文件]]

## 摘要

- 提出 MemFly：一个以信息瓶颈原理为基础、支持大语言模型即时记忆演化的框架
- 通过无梯度优化器最小化压缩熵、最大化相关熵，构建分层记忆结构以实现高效存储
- 开发混合检索机制，无缝整合语义、符号与拓扑通路，并以迭代精化处理复杂多跳查询；综合实验表明 MemFly 在记忆连贯性、响应保真度与准确性上大幅超越最先进基线

## 正文

长期记忆使大语言模型智能体能够通过历史交互处理复杂任务。然而，现有框架在高效压缩冗余信息与维持下游任务的精确检索之间面临根本性两难。为弥合这一差距，我们提出了 MemFly——一个以信息瓶颈原理为基础、支持大语言模型即时（on-the-fly）记忆演化的框架。我们的方法通过无梯度优化器最小化压缩熵，同时最大化相关熵，构建用于高效存储的分层记忆结构。为充分利用 MemFly，我们开发了一种混合检索机制，无缝整合语义、符号与拓扑通路，并引入迭代精化以处理复杂的多跳查询。综合实验表明，MemFly 在记忆连贯性、响应保真度与准确性方面大幅超越最先进的基线。

## 关键词

#大语言模型 #记忆管理 #信息瓶颈 #检索 #智能体
