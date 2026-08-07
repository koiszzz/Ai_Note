---
published: 20260806
title: "微型 Transformer 中的原推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Protoreasoning in Tiny Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/Protoreasoning in Tiny Transformers]]"
source_sha256: d4c9c4539f17777340afca5c8df54955f4377de847aaac082729e778bc9e9ae1
original_url: "https://arxiv.org/abs/2608.04980"
processed: 2026-08-06
language: zh-CN

---

# 微型 Transformer 中的原推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Eduardo Valle, Fergal Reid
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04980)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Protoreasoning in Tiny Transformers|查看原始文件]]

## 摘要

- 本文显示微型 Transformer 可有利采用简单思维链形式（称为原推理），允许在约 100 万参数模型上研究逐步推理，为比大模型更详细的实验和分析打开机会。
- 当前大语言模型展示令人印象深刻的逐步推理，但我们尚未理解其普遍性，即 LLM 何时以及如何学习真正通用算法而非「启发式袋子」；此类问题难以在不可见数据训练的计算密集型前沿模型上解决。
- 为在远低于自然语言能力阈值的模型规模工作，在 Dyck 语言（正确嵌套括号的句子）上定义推理友好任务：发现原推理痕迹大幅缩小分布外泛化差距，消融确认痕迹内容（而非仅额外 token）驱动增益。

## 正文

我们显示微型 Transformer 可有利采用简单形式的思维链（Chain of Thought），我们称之为原推理（protoreasoning），允许在约 100 万参数模型上研究逐步推理，并为比大模型更详细的实验和分析打开机会。当前大语言模型展示令人印象深刻的逐步推理，但我们尚未理解其普遍性，即 LLM 何时以及如何学习真正通用算法，而非「启发式袋子」。此类问题难以在不可见数据训练的计算密集型前沿模型上解决。为在远低于自然语言能力阈值的模型规模工作，我们在 Dyck 语言（正确嵌套括号的句子）上定义推理友好任务。我们发现，原推理痕迹大幅缩小分布外泛化差距，消融确认痕迹的内容（而非仅其额外 token）驱动增益。

## 关键词

#思维链 #微型Transformer #泛化 #Dyck语言 #arXiv