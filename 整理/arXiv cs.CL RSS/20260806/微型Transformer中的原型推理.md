---
published: 2026-08-06
title: 微型Transformer中的原型推理
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Protoreasoning in Tiny Transformers.md
source_note: "[[信息源/arXiv cs.CL RSS/Protoreasoning in Tiny Transformers]]"
source_sha256: 240a7735bbc5ff8dbc73b6abda01cbfe689f566eac83121d1e0654d29f61fbde
original_url: https://arxiv.org/abs/2608.04980
processed: 2026-08-07
language: zh-CN
---

# 微型Transformer中的原型推理

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04980)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Protoreasoning in Tiny Transformers|查看原始文件]]

## 摘要

- 微型 Transformer 可采用称为"原型推理"（protoreasoning）的简单思维链形式，使约 100 万参数模型上的逐步推理研究成为可能
- 在 Dyck 语言上定义适合推理的任务，绕开自然语言能力阈值的限制
- 原型推理轨迹大幅缩小分布外泛化差距，消融实验确认轨迹内容而非额外 token 驱动收益

## 正文

我们证明，微型 Transformer 可以有效地采用一种简单的思维链形式，我们称之为原型推理（protoreasoning），这使得我们能够在约 100 万参数的模型上研究逐步推理，并为比更大模型可行的实验和分析开放了更多细粒度研究的机会。

当前的大语言模型展现出令人印象深刻的逐步推理能力，但我们尚未理解其普遍性，即 LLM 何时以及如何学习真正通用的算法，而非"启发式的集合"。这类问题在计算密集、基于不透明数据训练的前沿模型上很难定论。

为了在远低于自然语言能力阈值以下的模型规模上工作，我们在 Dyck 语言（正确嵌套括号的句子）上定义了适合推理的任务。我们发现，原型推理轨迹大幅缩小了分布外（out-of-distribution）泛化差距，消融实验确认是轨迹的内容——而非仅仅是额外的 token——推动了收益。

## 关键词

#原型推理 #思维链 #小型模型 #Dyck语言 #分布外泛化
