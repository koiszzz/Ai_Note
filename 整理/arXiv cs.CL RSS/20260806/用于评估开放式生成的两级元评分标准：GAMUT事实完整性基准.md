---
published: 2026-08-06
title: 用于评估开放式生成的两级元评分标准：GAMUT 事实完整性基准
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Two-Level Meta-Rubrics for Evaluating Open-Ended Generation- GAMUT, a Benchmark for Factual Complete.md
source_note: "[[信息源/arXiv cs.CL RSS/Two-Level Meta-Rubrics for Evaluating Open-Ended Generation- GAMUT, a Benchmark for Factual Complete]]"
source_sha256: 59e3e877616309e679b496673d561dca11a052df37375713f8d4216d608d754e
original_url: https://arxiv.org/abs/2607.19322
processed: 2026-08-07
language: zh-CN
---

# 用于评估开放式生成的两级元评分标准：GAMUT 事实完整性基准

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.19322)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Two-Level Meta-Rubrics for Evaluating Open-Ended Generation- GAMUT, a Benchmark for Factual Complete|查看原始文件]]

## 摘要

- 基于评分标准的开放式生成评估面临表达力与可靠性之间的根本张力：编写忠实的评分标准需要表达好答案空间的结构——可接受选项的开放集合、有序的过程以及事实的相对重要性；而评分需要评判者一致打分，评判者对扁平二值检查远比对丰富结构更可靠
- 提出两级元评分标准框架解决该张力：结构化元评分标准在编写时捕捉评分标准，固定的机械规则将其编译成 LLM 评判者在评估时能够可靠打分的扁平二值可机器评分检查清单
- 将框架实例化为 Gamut（Grounded Assessment of Multimodal Factuality，多模态事实性扎根评估），一个面向长文生成事实完整性的基准
- Gamut 包含 1,813 个基于 10 个不同领域的真实可穿戴设备影像的问题，每个问题配有经专家人工标注者验证的有证据支撑的评分标准
- 评估 14 个前沿与开放权重模型，发现 Gamut 真正具有挑战性（最佳得分 58.7%，来自 Gemini 3.1 Pro）、高度具有区分度，且对评判者的选择具有鲁棒性

## 正文

基于评分标准的开放式生成评估，面临着表达力与可靠性之间的根本张力。编写忠实的评分标准需要表达好答案空间的结构：可接受选项的开放集合、有序的过程，以及事实的相对重要性。使用评分标准评分要求评判者保持一致地打分，而评判者在扁平、二值的检查上远比在丰富的结构上可靠。我们用两级元评分标准框架解决了这一张力。结构化元评分标准在编写时捕获评分标准，固定的机械规则将其编译为扁平的二值、可机器评分检查清单，供 LLM 评判者在评估时可靠打分。我们将该框架实例化为 Gamut（Grounded Assessment of Multimodal Factuality，多模态事实性扎根评估），一个用于长文生成事实完整性的基准。Gamut 包含 1,813 个问题，这些问题以 10 个不同领域的真实可穿戴设备影像为背景，每个问题都配有一个经专家人工标注者验证的、有证据支撑的评分标准。评估 14 个前沿与开放权重模型后，我们发现 Gamut 真正具有挑战性（最佳得分 58.7%，来自 Gemini 3.1 Pro）、高度具有区分度，并且对评判者的选择具有鲁棒性。

## 关键词

#开放式生成 #评测基准 #事实完整性 #评分标准 #LLM评判 #多模态 #arXiv
