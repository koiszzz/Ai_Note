---
published: 2026-08-06
title: RingSQL：面向 Text-to-SQL 强化学习的模式无关合成数据生成
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning]]"
source_sha256: ec9c9dafa5f0b2db7bb6054308c86f986eb5059e59b1c21272530afdcdaa47f8
original_url: https://arxiv.org/abs/2601.05451
processed: 2026-08-07
language: zh-CN
---

# RingSQL：面向 Text-to-SQL 强化学习的模式无关合成数据生成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.05451)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/RingSQL- Schema-Independent Synthetic Data Generation for Text-to-SQL Reinforcement Learning|查看原始文件]]

## 摘要

- Text-to-SQL 的进展受限于高质量训练数据的稀缺，RLVR 对噪声数据尤其敏感；模板方法保证 SQL 正确但需模式特定模板且缺乏多样性，LLM 生成方法易扩展但缺乏质量保证。
- 提出 RingSQL 混合框架：将模式无关的查询模板与基于 LLM 的自然语言问题改写相结合，通过在完整模板问题上生成问题来保持问题-查询正确性，覆盖所有查询复杂度层级。
- RingSQL 是唯一在所有测试模型架构与基准上提升 RLVR 训练性能的合成数据集，平均准确率 69.8%，分别超过次优合成数据集 2.1% 以及来自 Spider 和 BIRD 的人工标注数据。

## 正文

Text-to-SQL 的近期进展由更大的模型、更好的数据集以及诸如 RLVR 的新训练方法驱动。然而，进展仍受限于高质量训练数据的稀缺，而 RLVR 对此尤为敏感，因为噪声数据可能产生虚假奖励。人工创建数据成本高昂，现有合成方法在可靠性与可扩展性之间存在权衡：基于模板的方法能保证 SQL 正确，但需要模式特定模板且缺乏多样性；基于 LLM 的生成易于扩展，但缺乏质量保证。

作者引入 RingSQL，一个生成问题-SQL 对的混合框架，它将模式无关的查询模板与基于 LLM 的自然语言问题改写相结合。通过将问题生成锚定在完整模板问题上，RingSQL 在所有查询复杂度层级上都保持了问题-查询的正确性，这是纯 LLM 方法无法维持的性质。RingSQL 还生成了唯一能在所有测试模型架构与基准上提升 RLVR 训练性能的合成数据集，平均准确率达到 69.8%，超越次优合成数据集 2.1%，并超越来自 Spider 和 BIRD 的人工标注数据。代码与数据见 https://github.com/nu-c3lab/RingSQL。

## 关键词

#Text-to-SQL #合成数据 #强化学习 #RLVR #模板生成 #LLM改写
