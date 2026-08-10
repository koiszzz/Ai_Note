---
published: 2026-08-07
title: "MoCA：隐式社会情境分析"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/MoCA- Implicit Social Context Analysis.md"
source_note: "[[信息源/arXiv cs.CL RSS/MoCA- Implicit Social Context Analysis]]"
source_sha256: d1a73596a16ce8cd66a3f405f34cc184f222c6d21ff1afc8dddf65947677b47b
original_url: "https://arxiv.org/abs/2608.05825"
processed: 2026-08-07
language: zh-CN
---

# MoCA：隐式社会情境分析

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Wenhao Xu, Kaiwen Zhang, Hao Li, Maowei You, Yongzheng Ji, Siyuan Zuo, Jingxuan Yu, Sina A, Xinyao Tan, Bobo Li, Hao Fei, Mong-Li Lee, Wynne Hsu
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05825)

## 摘要

- 人类社会沟通（情感与意图）常以高度隐式方式传达，底层意义经间接、社会与文化锚定信号表达而非显式陈述；此类隐式社会情境在真实交互普遍，但缺乏正式系统研究框架。
- 引入隐式社会情境分析（MoCA）：新任务，沿三个关键维度系统建模隐式社会场景：情感、意图与立场。
- 构建高质量基准：3108 个真实来源多模态实例，细粒度认知标注揭示谁向谁表达什么、如何与为何传达。
- MoCA 数据集显示 SOTA 多模态 LLM 因依赖显式线索与推理潜社会情境能力有限而显著困难；提出冲突驱动溯因推理（CoDAR）：将观测表达与预期真实行为差异建模为认知冲突，使能推断隐藏心智状态；大量实验显示 CoDAR 大幅改进性能，但与人类推理仍有大差距，凸显隐式社会理解根本困难。

## 正文

人类社会沟通——如情感与意图——常常以高度隐式的方式传达，其中底层意义通过间接的、社会与文化锚定的信号表达，而非显式陈述。这种隐式社会情境在真实世界交互中普遍存在，然而仍缺乏一个正式、系统的框架来研究它们。本文引入隐式社会情境分析（Implicit Social Context Analysis, MoCA），一个新任务：沿三个关键维度系统建模隐式社会场景——情感（affection）、意图（intent）与立场（stance）。研究构建一个高质量基准，包含从真实世界来源收集的 3,108 个多模态实例，带有细粒度的认知标注，揭示谁向谁表达了什么，以及如何与为何传达。使用 MoCA 数据集，研究表明最先进的多模态大语言模型在此任务上显著困难，因为它们依赖显式线索，且推理潜社会情境的能力有限。为应对该挑战，研究提出冲突驱动溯因推理（Conflict-Driven Abductive Reasoning, CoDAR），一个新框架：将观测表达与预期真实行为之间的差异建模为认知冲突，从而能够推断隐藏的心智状态。大量实验表明，CoDAR 大幅改进模型性能。然而，与人类推理之间仍存在巨大差距，凸显隐式社会理解的根本困难。

## 关键词

隐式社会情境、情感、意图、立场、多模态
