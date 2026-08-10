---
published: 2026-08-07
title: "生成式 AI 的模式引导层级信息提取与语义评估"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI.md"
source_note: "[[信息源/arXiv cs.CL RSS/Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI]]"
source_sha256: 51524dc5b735662ef1f8c101785552da7d1cd1ac5b677ba4e052f26e2666bccd
original_url: "https://arxiv.org/abs/2608.06167"
processed: 2026-08-07
language: zh-CN
---

# 生成式 AI 的模式引导层级信息提取与语义评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Modhurita Mitra, Jan-Willem Versteeg, Maarten D. Schermer, Shiva Nadi Najafabadi, Marie L. De Bruin, Lourens T. Bloem
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06167)

## 摘要

- 呈现基于模式的框架：用生成式 AI 从无结构文本文档提取复杂结构化信息，随后经语义评估对照金标准自动评估提取信息。
- 模式作为编码领域知识的信息模型，为层级嵌套信息（可变基数属性）的提取与结果评估提供统一、系统、一致框架；文档信息提取单次调用模型、零样本完成。
- 评估步引入基于路径的语义匹配算法对齐提取结果与金标准的嵌套可变基数属性；用生成式 AI 语义比较属性提取值与金标准值，引入按领域特定考虑将比较结果分类为精确、语义、有用或非匹配的准则。
- 健康技术评估组织 NICE 文档上提取 14 个属性中 12 个 F1>90%（Claude Opus 3）；提取时间约为人类专家 1/30；展示框架跨不同生成式 AI 模型泛化与跨 HTA 组织与语言可迁移。

## 正文

研究呈现一个基于模式（schema-based）的框架：使用生成式 AI 从无结构的文本文档中提取复杂的结构化信息，随后通过对照金标准的自动语义评估来评估提取的信息。该模式作为一个编码领域知识的信息模型，为提取层级、嵌套的信息（带可变基数的属性）以及随后评估结果，提供了一个统一、系统且一致的框架。从文档提取信息通过单次调用模型、以零样本模式完成。在评估步骤中，研究引入一个基于路径的语义匹配算法，将提取结果中嵌套、可变基数的属性与金标准中的对齐。研究使用生成式 AI 进行属性提取值与金标准值的语义比较，并引入一个准则（rubric），根据领域特定的考量将比较结果分类为精确（exact）、语义（semantic）、有用（useful）或非匹配（non-match）。研究能够从健康技术评估组织 NICE 发布的文档中，用生成式 AI 模型 Claude Opus 3 以 F1>90% 提取 14 个属性中的 12 个。从文档中提取属性所需的时间比人类领域专家低约 30 倍。研究进一步展示了该框架跨不同生成式 AI 模型的通用性，以及跨不同 HTA 组织与语言的可迁移性。

## 关键词

信息提取、模式、语义评估、生成式 AI、HTA
