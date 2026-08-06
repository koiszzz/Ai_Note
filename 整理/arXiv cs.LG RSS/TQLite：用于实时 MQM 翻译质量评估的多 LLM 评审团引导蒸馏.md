---
title: "TQLite：用于实时 MQM 翻译质量评估的多 LLM 评审团引导蒸馏"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation.md"
source_note: "[[信息源/arXiv cs.LG RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation.]]"
source_sha256: ceedbba6211c4b83290528c88a4b3c6e4f59d57577d84f1984df17b555062422
original_url: "https://arxiv.org/abs/2608.02975"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TQLite：用于实时 MQM 翻译质量评估的多 LLM 评审团引导蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Bhavin Jawade、Cameron R. Wolfe
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02975)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation.|查看原始文件]]

## 摘要

- 大语言模型（LLM）在基于 MQM 的翻译质量（TQ）评估中展现令人印象深刻的性能，大型推理模型（LRM）的近期进展有望更大改进；但 LLM 与 LRM 在大规模部署中计算昂贵，而小语言模型（SLM）虽更高效却难以处理评估任务所需复杂推理。
- 提供广泛实证研究：在大量 TQ 评估设置中基准测试 SLM、LLM 与 LRM，给出当前格局的全面视图并建立最佳实践。
- 引入 TQLite，一个新颖蒸馏框架，使 SLM 接近最佳 LRM 评估器的 MQM 评估性能：利用多 LRM 评审团经实用数据策展技术与跨多样模型面板聚合评估响应，生成高质量合成训练数据。
- 结果表明经 TQLite 训练的 SLM 取得远超标准 SLM 开箱评估能力的强 MQM 评估性能，为 LLM 与 LRM 评估器提供可扩展且成本有效的替代。

## 正文

论文编号：arXiv:2608.02975v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）在基于 MQM 的翻译质量（TQ）评估中展现了令人印象深刻的性能，而大型推理模型（LRM）的近期进展承诺更大的改进。然而，LLM 与 LRM 在大规模部署时计算昂贵，而小语言模型（SLM）虽然效率高得多，却难以处理评估任务所需的复杂推理。在这项工作中，我们呈现一项广泛的实证研究，在大量 TQ 评估设置中基准测试 SLM、LLM 与 LRM，提供当前格局的全面视图并建立最佳实践。为应对可扩展性挑战，我们引入 TQLite，一个新颖的蒸馏框架，使 SLM 能够接近最佳 LRM 评估器的 MQM 评估性能。我们的方法利用一个多 LRM 评审团，通过实用的数据策展技术与跨多样模型面板的评估响应聚合来生成高质量合成训练数据。我们的结果表明，经 TQLite 训练的 SLM 取得远超标准 SLM 开箱评估能力的强劲 MQM 评估性能，为基于 LLM 与 LRM 的评估器提供一种可扩展且成本有效的替代方案。

## 关键词

#翻译质量评估 #MQM #蒸馏 #多LLM评审团 #SLM
