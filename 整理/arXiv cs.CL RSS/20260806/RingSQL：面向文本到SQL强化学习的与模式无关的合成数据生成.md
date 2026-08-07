---
published: 2026-08-06
title: RingSQL：面向文本到SQL强化学习的与模式无关的合成数据生成
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning.md
source_note: "[[信息源/arXiv cs.CL RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning]]"
source_sha256: 15e38d54887f500e5f5f25b8c4858923a5653fce0fa17c6dcbe801e14287a314
original_url: https://arxiv.org/abs/2601.05451
processed: 2026-08-07
language: zh-CN
---

# RingSQL：面向文本到SQL强化学习的与模式无关的合成数据生成

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.05451)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning|查看原始文件]]

## 摘要

- 文本到 SQL 的最新进展由更大模型、更好数据集与 RLVR 等新训练方法驱动；但高质量训练数据稀缺仍是瓶颈，RLVR 对此尤其敏感，因为噪声数据会产生虚假奖励。
- 手工创建数据昂贵；现有合成方法在可靠性与可扩展性间权衡：模板法保证 SQL 正确但需要模式特定模板且缺乏多样性，LLM 生成法易扩展但缺乏质量保证。
- 提出 RingSQL——生成问题-SQL 对的混合框架：组合模式无关的查询模板与基于 LLM 的自然语言问题释义。
- 通过在完整模板问题上锚定问题生成，RingSQL 在所有查询复杂度级别上保持问题-查询正确性，这是纯 LLM 方法无法维持的性质。
- RingSQL 是唯一在所有受测模型架构与基准上都提升 RLVR 训练性能的合成数据集，平均准确率 69.8%，超越次优合成数据集 2.1%，并超越来自 Spider 与 BIRD 的人工标注数据；代码与数据发布于 https://github.com/nu-c3lab/RingSQL 。

## 正文

本文编号：arXiv:2601.05451v2（公告类型：replace-cross），以下为摘要全文翻译。

文本到 SQL 的最新进展由更大的模型、更好的数据集和 RLVR 等新训练方法推动。然而，进展仍受制于高质量训练数据的稀缺，而 RLVR 对这一问题尤其敏感，因为噪声数据可能产生虚假奖励。手工创建数据成本高昂，现有合成方法则在可靠性与可扩展性之间权衡：基于模板的方法保证 SQL 正确，但需要模式特定的模板且缺乏多样性；而基于 LLM 的生成易于扩展，却缺乏质量保证。我们提出 RingSQL——一个生成问题-SQL 对的混合框架，将模式无关的查询模板与基于 LLM 的自然语言问题释义相结合。通过将问题生成锚定在完整的模板问题上，RingSQL 在所有查询复杂度级别上都保持了问题-查询正确性，这是纯 LLM 方法无法维持的性质。RingSQL 还产出了唯一在所有受测模型架构和基准上都能提升 RLVR 训练性能的合成数据集，达到 69.8% 的平均准确率，超越次优合成数据集 2.1%，并超越来自 Spider 和 BIRD 的人工标注数据。代码和数据可在 https://github.com/nu-c3lab/RingSQL 获取。

## 关键词

#文本到SQL #合成数据 #强化学习 #RLVR #数据生成
