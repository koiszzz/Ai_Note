---
published: 2026-08-06
title: "D²F-ReAG：多跳推理增强生成的动态分解与过滤"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation.md
source_note: "[[信息源/arXiv cs.CL RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation]]"
source_sha256: 4530270263e23027f776f688011061a2fc2c92dc7dd2a86fb67d1f54e0a8d43f
original_url: https://arxiv.org/abs/2608.04444
processed: 2026-08-07
language: zh-CN
---

# D²F-ReAG：多跳推理增强生成的动态分解与过滤

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04444)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation|查看原始文件]]

## 摘要

- 大语言模型常因依赖静态内部知识而生成不准确答案；RAG 通过外部知识解决了单跳查询，但在多跳问题上表现不佳
- 现有方法（图结构 RAG、问题分解）缺乏动态分解和有效过滤，导致效率与准确性偏低
- 提出 D²F-ReAG：通过判断根级推理的可靠性自适应控制推理深度——可靠则直接生成，否则分解为子问题并用经校验的推理完善根推理
- 三个多跳基准实验验证了该方法处理复杂多跳问题的有效性

## 正文

大语言模型（LLMs）常常因为依赖静态的内部知识而生成不准确的答案。检索增强生成（RAG）通过整合外部知识来解决这一局限，并在单跳查询上表现出色。然而，它在需要跨文档推理的多跳问题上力不从心。现有的方法，例如基于图结构的 RAG 或问题分解，往往缺乏动态分解和有效的过滤，导致效率和准确性较低。为了克服这些局限，我们提出了用于多跳推理增强生成的动态分解与过滤方法（Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation，简称 D2F-ReAG）——一种通过判断根级推理的可靠性来自适应控制推理深度的新型范式。如果根推理是可靠的，模型就直接生成答案；否则，问题会被按逻辑分解为子问题，并由这些子问题得到的经校验的推理来完善根推理。在三个多跳基准上的实验证明了我们的方法在处理复杂多跳问题上的有效性。

## 关键词

#检索增强生成 #多跳推理 #问题分解 #大语言模型 #推理增强生成
