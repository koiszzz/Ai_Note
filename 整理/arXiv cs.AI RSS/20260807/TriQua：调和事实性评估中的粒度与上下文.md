---
published: 2026-08-07
title: "TriQua：调和事实性评估中的粒度与上下文"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TriQua- Reconciling Granularity and Context in Factuality Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/TriQua- Reconciling Granularity and Context in Factuality Evaluation]]"
source_sha256: 8123846e712aea86f38ee045e427b0df260d8fafedf5ff17940990c4fc372d79
original_url: "https://arxiv.org/abs/2608.05228"
processed: 2026-08-07
language: zh-CN
---

# TriQua：调和事实性评估中的粒度与上下文

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jin Liu, Steffen Thoma, Achim Rettinger
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05228)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TriQua- Reconciling Granularity and Context in Factuality Evaluation|查看原始文件]]

## 摘要

- LLM 事实性评估的"分解后验证"范式面临基本权衡：原子事实（一句话传达一个信息单元）常省略必要上下文，而更宽泛陈述缺乏精确评估所需粒度。
- 引入 TriQua：基于事实复杂度灵活建模事实的框架——简单声明提取为标准三元组，复杂声明通过附加辅助上下文限定符表示为超关系事实；该自适应结构保留准确检索与验证所需上下文而不牺牲原子性。
- TriQua 验证过程直接在特定三元组与限定符中标注具体错误，为错误检测提供细粒度可解释性。
- 框架之外提出 TriQuaScore 量化这些结构化事实单元的事实性；实证评估显示 TriQuaScore 与人类标注事实性分数强对齐，TriQua 实现稳健分解质量，并在基于证据的事实验证中优于现有基于分解的框架。

## 正文

LLM 事实性评估的"分解后验证"（decompose-then-verify）范式面临一个基本权衡：原子事实（atomic facts，即一句话传达一个信息单元）往往省略必要的上下文，而更宽泛的陈述缺乏精确评估所需的粒度。为解决该问题，我们引入 TriQua，一个基于事实复杂度灵活建模事实的框架。简单声明被提取为标准三元组，而复杂声明通过附加辅助上下文限定符（qualifiers）表示为超关系事实（hyperrelational facts）。这种自适应结构保留了准确检索与验证所需的上下文，而不牺牲原子性。此外，TriQua 的验证过程直接在特定三元组与限定符中标注具体错误，为错误检测提供细粒度的可解释性。与框架一起，我们提出 TriQuaScore 以量化这些结构化事实单元的事实性。实证评估表明，TriQuaScore 与人类标注的事实性分数强对齐，TriQua 实现稳健的分解质量，并在基于证据的事实验证中优于现有基于分解的框架。

## 关键词

#事实性评估 #超关系事实 #分解验证 #LLM
