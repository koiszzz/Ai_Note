---
published: 2026-08-06
title: MediRec：以可解释临床推理增强中文用药推荐
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MediRec- Enhancing Chinese Medication Recommendation with Explainable Clinical Reasoning.md
source_note: "[[信息源/arXiv cs.CL RSS/MediRec- Enhancing Chinese Medication Recommendation with Explainable Clinical Reasoning|查看原始文件]]"
source_sha256: 90347989e8fe3ad45b4ecae0ae6e0843f7298789da1ad0b6acb1e9acec5b9348
original_url: https://arxiv.org/abs/2510.21084
processed: 2026-08-07
language: zh-CN
---

# MediRec：以可解释临床推理增强中文用药推荐

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.21084)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MediRec- Enhancing Chinese Medication Recommendation with Explainable Clinical Reasoning|查看原始文件]]

## 摘要

- 大语言模型（LLM）凭借先进的语言理解与推理能力，在临床决策支持方面显示出强大潜力，但其在中文临床用药推荐中的应用仍基本未被探索。
- 现有方法主要基于英文电子健康记录数据集开发，聚焦粗粒度的药物代码预测，对可解释的临床决策支持有限。
- 本文提出 MediRec，一个基于 LLM 的可解释中文用药推荐框架，结合临床依据的推理链蒸馏与强化学习，同时提升推荐准确性与可解释性。
- 在中文用药推荐基准上的综合实验显示 MediRec 表现优异：F1 分数 0.5813，Jaccard 分数 0.4626。
- 进一步分析表明 MediRec 能生成临床上合理的推荐并给出透明推理，证明其在中文医疗场景下对可解释用药决策支持的有效性。

## 正文

大语言模型（LLM）凭借其先进的语言理解和推理能力，在临床决策支持方面显示出强大的潜力。然而，它们在中国临床用药推荐中的应用在很大程度上仍未得到探索。现有方法主要基于英文电子健康记录数据集开发，聚焦于粗粒度的药物代码预测，对可解释的临床决策支持有限。

在这项工作中，我们提出 MediRec，一个基于 LLM 的可解释中文电子健康记录用药推荐框架。MediRec 将临床依据的推理链蒸馏（reasoning-chain distillation）与强化学习相结合，以提高推荐准确性和可解释性。在一个中文用药推荐基准上的综合实验表明，MediRec 取得了强劲的性能，F1 分数达到 0.5813，Jaccard 分数达到 0.4626。

进一步分析表明，MediRec 能生成临床上合理的推荐，并给出透明的推理过程，证明了其在中国医疗场景下对可解释用药决策支持的有效性。

## 关键词

#MediRec #用药推荐 #可解释性 #临床推理 #arXiv
