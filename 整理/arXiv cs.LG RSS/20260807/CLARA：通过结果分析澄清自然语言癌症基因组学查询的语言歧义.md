---
published: 2026-08-07
title: "CLARA：通过结果分析澄清自然语言癌症基因组学查询的语言歧义"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CLARA- Clarification of Language Ambiguity through Result Analysis for Natural-Language Cancer Genom.md"
source_note: "[[信息源/arXiv cs.LG RSS/CLARA- Clarification of Language Ambiguity through Result Analysis for Natural-Language Cancer Genom]]"
source_sha256: 51ce1bc63e4edf3043f8c8954f1bae5b328d06bf0992d5204a665eda8016b62d
original_url: "https://arxiv.org/abs/2608.05195"
processed: 2026-08-07
language: zh-CN
---

# CLARA：通过结果分析澄清自然语言癌症基因组学查询的语言歧义

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Pratyush Kumar Shukla, Manveer Singh Tib, Siddhant Garg
> - **发布时间**：2026-08-07
> - **分类**：q-bio.GN
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05195)

## 摘要

- 提出 CLARA：将问题表示为带类型的科学查询规格，考虑若干可能解释并执行，估计分歧时请求澄清。
- 在 8 个 TCGA PanCancer Atlas 队列与 30 基因面板的突变患病率对比上评估：330 个可执行对比中 115 个结果敏感、215 个结果稳定。
- 独立实现的 pandas 执行引擎完全复现 SQLite 引擎的 660 个结果。
- 120 题 LLM 生成人工审核语言压力测试中，CLARA 识别全部 60 个结果敏感对比，对 60 个稳定对比中的 13 个做了不必要澄清（准确率 89.2%，敏感度 100%，特异度 78.3%）；独立机器学习总准确率 97.5% 但漏掉一个关键对比。

## 正文

自然语言界面可以让癌症基因组学数据库更易用，但即使问题完全流畅，其科学含义仍可能含糊。本文提出 CLARA：一个将问题表示为带类型的科学查询规格的框架，考虑若干可能解释、执行它们，并在估计分歧时请求澄清。CLARA 在 8 个 TCGA PanCancer Atlas 队列与 30 基因面板间的突变患病率对比上评估。该基准包含 330 个可执行的独特对比，在突变范围、检测分母与样本情境上各异；按预注册的相对分歧大于 0.10 或绝对分歧大于 5 个百分点的定义，115 个对比结果敏感、215 个结果稳定。独立实现的 pandas 执行引擎完美复现 SQLite 引擎的全部 660 个结果。在单独的 120 题 LLM 生成、人工审核语言压力测试中，CLARA 识别出全部 60 个结果敏感对比，并对 60 个稳定对比中的 13 个做了不必要澄清（准确率 89.2%，敏感度/召回率 100%，特异度 78.3%）。独立机器学习总准确率更高（97.5%），但漏掉了一个关键对比。这证明下游执行能区分重要与无关紧要的歧义，并揭示安全与负担之间的显式权衡。

## 关键词

癌症基因组学、自然语言查询、歧义澄清、结果分析、数据库
