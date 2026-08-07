---
published: 2026-08-06
title: 微型Transformer中的原型推理
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Protoreasoning in Tiny Transformers.md
source_note: "[[信息源/arXiv cs.LG RSS/Protoreasoning in Tiny Transformers]]"
source_sha256: 5d83e676b78818eaeefe157ae0f8687c3290a0e7f36153d2add33deda6b2abaf
original_url: https://arxiv.org/abs/2608.04980
processed: 2026-08-07
language: zh-CN
---

# 微型Transformer中的原型推理

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04980)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Protoreasoning in Tiny Transformers|查看原始文件]]

## 摘要

- 提出"原型推理"（protoreasoning），即微型 Transformer 可有效采用的一种简单思维链形式，从而能在约 100 万参数模型上研究逐步推理。
- 在 Dyck 语言（正确嵌套括号的句子）上定义适合推理的任务，以在远低于自然语言能力阈值的模型规模上开展工作。
- 实验表明原型推理轨迹大幅缩小分布外泛化差距，且消融确认增益来自轨迹内容而非额外词元本身。

## 正文

我们证明，微型 Transformer 可以有效地采用一种简单的思维链（Chain of Thought, CoT）形式，我们称之为原型推理（protoreasoning），这使我们能够在约 100 万参数的模型上研究逐步推理，并为比更大模型可行范围内更详细的实验与分析打开机会。当前的大语言模型展现出令人印象深刻的逐步推理能力，但我们尚未理解其一般性，即 LLM 何时以及如何学习真正通用的算法，而不是"启发式技巧的集合"。这类问题在计算密集、基于不透明数据训练的前沿模型上很难厘清。

为了在远低于自然语言能力阈值的模型规模上开展工作，我们在 Dyck 语言（正确嵌套括号的句子）上定义了适合推理的任务。我们研究发现，原型推理轨迹大幅缩小了分布外泛化差距，消融实验确认是轨迹的内容——而不仅仅是额外词元——带来了增益。

## 关键词

#思维链 #微型Transformer #推理 #分布外泛化 #Dyck语言
