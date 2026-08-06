---
published: 2026-08-05
title: "TQLite：面向实时 MQM 翻译质量评估的多 LLM 评审团引导蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation]]"
source_sha256: 439304f58e204ba74225104e54bb29bb5ff63bb6a4b865c5d6f4d4c646387bcf
original_url: "https://arxiv.org/abs/2608.02975"
processed: 2026-08-05
language: zh-CN
---

# TQLite：面向实时 MQM 翻译质量评估的多 LLM 评审团引导蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Bhavin Jawade、Cameron R. Wolfe
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02975)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TQLite- Multi-LLM Jury Guided Distillation for Real-time MQM Translation Quality Evaluation|查看原始文件]]

## 摘要

- 提出 TQLite，新颖蒸馏框架：使 SLM 接近最佳基于 LRM 评估器的 MQM 评估性能——利用多 LRM 评审团，通过实用数据策展技术与跨多样模型小组的评估响应聚合，生成高质量合成训练数据。
- 大语言模型（LLM）在基于 MQM 的翻译质量（TQ）评估中表现令人印象深刻，大型推理模型（LRM）的最新进展承诺更大改善；但 LLM 与 LRM 大规模部署计算昂贵，而小语言模型（SLM）虽高效得多却难以处理评估任务所需复杂推理。
- 呈现广泛的实证研究：跨广泛 TQ 评估设置基准 SLM、LLM 与 LRM，提供当前格局的综合视图并确立最佳实践。
- 结果显示经 TQLite 训练的 SLM 取得远超现成 SLM 评估能力的强 MQM 评估性能，提供 LLM 与 LRM 评估器的可扩展、高性价比替代。

## 正文

论文编号：arXiv:2608.02975v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）在基于 MQM 的翻译质量（TQ）评估中展现了令人印象深刻的性能，而大型推理模型（LRM）的最新进展承诺更大的改善。然而，LLM 与 LRM 大规模部署在计算上昂贵，而小语言模型（SLM）虽然高效得多，却在评估任务所需的复杂推理上挣扎。在本工作中，我们呈现一个广泛的实证研究：跨广泛的 TQ 评估设置基准 SLM、LLM 与 LRM，提供当前格局的综合视图并确立最佳实践。为应对可扩展性挑战，我们引入 TQLite，一个新颖的蒸馏框架，使 SLM 接近最佳基于 LRM 的评估器的 MQM 评估性能。我们的方法利用一个多 LRM 评审团，通过实用的数据策展技术与跨多样模型小组的评估响应聚合，生成高质量的合成训练数据。我们的结果表明，经 TQLite 训练的 SLM 取得远超现成 SLM 评估能力的强 MQM 评估性能，为基于 LLM 与 LRM 的评估器提供可扩展且高性价比的替代方案。

## 关键词

#翻译质量评估 #蒸馏 #MQM #SLM
