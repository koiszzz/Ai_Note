---
published: 20260806
title: "D²F-ReAG：多跳推理增强生成的动态分解与过滤"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation]]"
source_sha256: 5cb14a385b2be6deec27f42cedf1493222753423eb430b6b98c3c3b131c68e36
original_url: "https://arxiv.org/abs/2608.04444"
processed: 2026-08-06
language: zh-CN

---

# D²F-ReAG：多跳推理增强生成的动态分解与过滤

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiaoyang Li, Junhao Ruan, Shengwei Tang, Kaiyan Chang, Zhengtao Yu, Tong Xiao, Jingbo Zhu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04444)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/D$^2$F-ReAG- Dynamic Decomposition and Filtering for Multi-Hop Reasoning-Augmented Generation|查看原始文件]]

## 摘要

- 大语言模型（LLM）因依赖静态内部知识常生成不准确答案；检索增强生成（RAG）通过整合外部知识解决此局限，擅长单跳查询，但在需要跨文档推理的多跳问题上挣扎。
- 现有方法（如图结构化 RAG 或问题分解）常缺乏动态分解和有效过滤，导致效率和准确率较低。
- 本文提出多跳推理增强生成的动态分解与过滤（D²F-ReAG），一个新颖范式，通过判断根级推理的可靠性自适应控制推理深度：根推理可靠时直接生成答案，否则将问题逻辑分解为子问题，用子问题推导的验证推理细化根推理；三个多跳基准实验证明有效性。

## 正文

大语言模型（LLM）因依赖静态内部知识常生成不准确答案。检索增强生成（RAG）通过整合外部知识解决此局限，并在单跳查询上表现出色。然而，它在需要跨文档推理的多跳问题上挣扎。现有方法（如图结构化 RAG 或问题分解）常缺乏动态分解和有效过滤，导致效率和准确率较低。为克服这些局限，我们提出多跳推理增强生成的动态分解与过滤（D²F-ReAG），一个新颖范式，通过判断根级推理的可靠性自适应控制推理深度。根推理可靠时，模型直接生成答案。否则，将问题逻辑分解为子问题，用这些子问题推导的验证推理细化根推理。三个多跳基准的实验证明我们的方法在处理复杂多跳问题上的有效性。

## 关键词

#检索增强生成 #多跳推理 #动态分解 #LLM #arXiv