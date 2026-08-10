---
published: 2026-08-07
title: "TriQua：在事实性评估中调和粒度与上下文"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/TriQua- Reconciling Granularity and Context in Factuality Evaluation.md"
source_note: "[[信息源/arXiv cs.CL RSS/TriQua- Reconciling Granularity and Context in Factuality Evaluation]]"
source_sha256: ab0d3162c0ca46638bef913eccff08e3011e0d05fde4091a28f93fe04b75a841
original_url: "https://arxiv.org/abs/2608.05228"
processed: 2026-08-07
language: zh-CN
---

# TriQua：在事实性评估中调和粒度与上下文

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jin Liu, Steffen Thoma, Achim Rettinger
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05228)

## 摘要

- LLM 事实性评估的"分解后验证"范式面临根本权衡：原子事实（一句话传达一个信息单元）常遗漏基本上下文，而更宽泛陈述缺乏精确评估所需粒度。
- 提出 TriQua：基于事实复杂度灵活建模事实的框架；简单断言提取为标准三元组，复杂断言以附加上下文限定词的超关系事实表示。
- 该自适应结构保留准确检索与验证所需上下文而不牺牲原子性；TriQua 验证过程直接在特定三元组与限定词内标注具体错误，为错误检测提供细粒度可解释性。
- 配套提出 TriQuaScore 量化这些结构化事实单元的事实性；实证显示 TriQuaScore 与人工标注事实性分数强对齐，TriQua 实现稳健分解质量，并在基于证据的事实验证中优于现有分解框架。

## 正文

LLM 事实性评估的"分解后验证"（decompose-then-verify）范式面临一个根本权衡：原子事实——一句话传达一个信息单元——常常遗漏基本上下文，而更宽泛的陈述缺乏精确评估所需的粒度。为解决这一问题，研究引入 TriQua，一个根据事实复杂度灵活建模事实的框架。简单断言被提取为标准三元组，而复杂断言以超关系事实（hyperrelational facts）表示，通过附加辅助上下文限定词（qualifiers）。这种自适应结构保留了准确检索与验证所需的上下文，而不牺牲原子性。此外，TriQua 的验证过程直接在特定三元组与限定词内标注具体错误，为错误检测提供了细粒度的可解释性。伴随该框架，研究提出 TriQuaScore 来量化这些结构化事实单元的事实性。实证评估表明，TriQuaScore 与人工标注的事实性分数强烈对齐，TriQua 实现了稳健的分解质量，并在基于证据的事实验证中优于现有的基于分解的框架。

## 关键词

事实性评估、分解验证、三元组、超关系、TriQuaScore
