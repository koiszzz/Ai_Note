---
published: 2026-08-07
title: "LELA：带零样本域适配的基于 LLM 的实体链接方法"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/LELA- an LLM-based Entity Linking Approach with Zero-Shot Domain Adaptation.md"
source_note: "[[信息源/arXiv cs.CL RSS/LELA- an LLM-based Entity Linking Approach with Zero-Shot Domain Adaptation]]"
source_sha256: 2f7a4c3d1fa02b97ae6782f912bb160d1a2dfcf8d1c2d9930e03334280abaa1e
original_url: "https://arxiv.org/abs/2601.05192"
processed: 2026-08-07
language: zh-CN
---

# LELA：带零样本域适配的基于 LLM 的实体链接方法

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Samy Haffoudhi, Fabian M. Suchanek, Nils Holzenberger
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2601.05192)

## 摘要

- 实体链接（将文本中歧义提及映射到知识库实体）是知识图谱构建、问答与信息抽取等任务的基础步骤。
- 方法 LELA：模块化粗到细方法，利用 LLM 能力，适用于不同目标域、知识库与 LLM，无需任何微调阶段。
- 跨多种实体链接设定实验显示 LELA 与微调方法高度竞争，显著超越非微调方法。

## 正文

实体链接（entity linking）——将文本中歧义的提及（mentions）映射到知识库中的实体——是知识图谱构建、问答与信息抽取等任务的基础步骤。研究的方法 LELA 是一种模块化的粗到细方法：利用大语言模型（LLMs）的能力，适用于不同的目标域、知识库与 LLM，无需任何微调阶段。跨各种实体链接设定的实验表明，LELA 与微调方法高度竞争，并大幅超越非微调的方法。

## 关键词

实体链接、LLM、零样本、域适配、知识库
