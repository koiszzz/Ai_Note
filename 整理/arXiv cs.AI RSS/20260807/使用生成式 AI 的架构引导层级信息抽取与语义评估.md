---
published: 2026-08-07
title: "使用生成式 AI 的架构引导层级信息抽取与语义评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI.md"
source_note: "[[信息源/arXiv cs.AI RSS/Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI]]"
source_sha256: c6d55583cbb7ce8af5a168fdf283a51b4d6ba12e783ad73b70a52fc5ea93f6e7
original_url: "https://arxiv.org/abs/2608.06167"
processed: 2026-08-07
language: zh-CN
---

# 使用生成式 AI 的架构引导层级信息抽取与语义评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Modhurita Mitra, Jan-Willem Versteeg, Maarten D. Schermer, Shiva Nadi Najafabadi, Marie L. De Bruin, Lourens T. Bloem
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06167)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Schema-Guided Hierarchical Information Extraction and Semantic Evaluation Using Generative AI|查看原始文件]]

## 摘要

- 呈现基于架构的框架：使用生成式 AI 从无结构文本文档抽取复杂、结构化信息，随后对抽取信息对照黄金标准进行自动化语义评估。
- 架构作为编码领域知识的信息模型，为抽取层级、嵌套信息（属性基数可变）与结果评估提供统一、系统、一致框架；文档信息抽取在零样本模式下对模型单次调用完成。
- 评估步骤引入基于路径的语义匹配算法，对齐抽取结果与黄金标准中嵌套、可变基数属性；用生成式 AI 进行属性抽取值与黄金标准值的语义比较，并引入按领域特定考虑将比较结果分类为精确、语义、有用或不匹配的评分标准。
- 使用生成式 AI 模型 Claude Opus 3，从健康技术评估组织 NICE 发布文档中抽取 14 个属性中的 12 个，F1 分数 >90%；抽取文档属性时间约为人类领域专家约 1/30；进一步展示框架跨不同生成式 AI 模型的通用性与跨不同 HTA 组织与语言的迁移性。

## 正文

我们呈现一个基于架构（schema-based）的框架：使用生成式 AI 从无结构文本文档抽取复杂、结构化信息，随后对抽取信息对照黄金标准进行自动化语义评估。架构作为编码领域知识的信息模型，为抽取层级、嵌套信息（属性基数可变）以及结果评估提供统一、系统、一致的框架。文档的信息抽取在零样本模式下对模型进行单次调用完成。在评估步骤中，我们引入一个基于路径的语义匹配算法，以对齐抽取结果与黄金标准中嵌套、可变基数的属性。我们使用生成式 AI 对属性的抽取值与黄金标准值进行语义比较，并引入一个评分标准，根据领域特定考虑将比较结果分类为精确、语义、有用或不匹配。我们能够使用生成式 AI 模型 Claude Opus 3，从健康技术评估组织 NICE 发布的文档中抽取 14 个属性中的 12 个，F1 分数 >90%。从文档抽取属性所需时间约为人类领域专家的 1/30。我们进一步展示该框架跨不同生成式 AI 模型的通用性，以及跨不同 HTA 组织与语言的迁移性。

## 关键词

#信息抽取 #架构引导 #语义评估 #生成式AI
