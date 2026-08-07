---
published: 2026-08-06
title: LiveXiv：基于 arXiv 论文内容的多模态实时基准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/LiveXiv -- A Multi-Modal Live Benchmark Based on Arxiv Papers Content.md
source_note: "[[信息源/arXiv cs.CV RSS/LiveXiv -- A Multi-Modal Live Benchmark Based on Arxiv Papers Content]]"
source_sha256: 689bb94495319738d1418234824b69fd28b7d58e94638f90056e8bc1924837cf
original_url: https://arxiv.org/abs/2410.10783
processed: 2026-08-07
language: zh-CN
---

# LiveXiv：基于 arXiv 论文内容的多模态实时基准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2410.10783)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/LiveXiv -- A Multi-Modal Live Benchmark Based on Arxiv Papers Content|查看原始文件]]

## 摘要

- 提出 LiveXiv：基于科学 arXiv 论文的可扩展、不断演化的实时基准，在任意时间戳自动利用手稿中的图表、曲线和表格生成视觉问答对（VQA），全程无需人工介入。
- 引入高效评估方法，仅评估模型子集即可估计全部模型在演化基准上的性能，显著降低总体评估成本。
- 在基准首个版本上评测多个开源与专有 LMM，展示其挑战性；人工核验子集与自动标注的性能差异极小（<2.5%）。

## 正文

在从网络抓取的数据上大规模训练多模态模型，在向这些模型注入执行多项下游任务所需的世界知识方面显示出卓越效用。然而，从网络抓取数据的一个缺点可能是牺牲了常用于评估这些模型能力的基准。为防止测试数据污染并真正检验这些基础模型的能力，我们提出 LiveXiv：一个基于科学 arXiv 论文的可扩展、不断演化的实时基准。

LiveXiv 在任意时间戳访问领域特定手稿，并自动生成视觉问答对（VQA）。这完全无需人工介入，利用手稿中的多模态内容，如图表、曲线和表格。此外，我们引入一种高效的评估方法，仅通过评估模型的子集即可估计所有模型在演化基准上的性能。这显著降低了总体评估成本。

我们在基准首个版本上对多个开源和专有大型多模态模型（LMM）进行了评测，展示了其挑战性，并揭示了模型的真实能力、避免污染。最后，秉承对高质量的一贯承诺，我们收集并评估了一个人工核验子集。将其总体结果与我们的自动标注比较后发现，性能差异确实极小（<2.5%）。我们的数据集已在 HuggingFace 上公开，代码将在此处发布。

## 关键词

#多模态基准 #测试数据污染 #视觉问答 #实时评测
