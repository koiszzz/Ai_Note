---
title: "SAGE：计算病理学中基于注意力的生存模型的语义可解释性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SAGE- Semantic Explainability of Attention-Based Survival Models in Computational Pathology.md"
source_note: "[[信息源/arXiv cs.AI RSS/SAGE- Semantic Explainability of Attention-Based Survival Models in Computational Pathology]]"
source_sha256: e4bea47e1cb3edc76fe8a74b1c13ff0e669fed5d12c098075fc013c1b3b95a10
original_url: "https://arxiv.org/abs/2608.02803"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SAGE：计算病理学中基于注意力的生存模型的语义可解释性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abdallah Lamane、Abdul Rahman Diab、Ren-Chin Wu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02803)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SAGE- Semantic Explainability of Attention-Based Survival Models in Computational Pathology|查看原始文件]]

## 摘要

- 提出 SAGE（语义注意力全局解释），事后框架：从冻结的 ABMIL 模型提取全局、语言接地的解释——用病理视觉-语言模型按 25 个组织学概念字典给图像补丁评分，按模型学到的注意力聚合这些分数，量化每个概念跨队列与预测风险的关系。
- 基于注意力的多实例学习（ABMIL）是计算病理学中切片级预测的主要方法，但其注意力图只提供局部解释：指示模型关注哪里，而非哪些组织学特征驱动预测或模型跨患者队列如何行为。
- 在七个 TCGA 癌症队列与三个基础模型的生存预测上，SAGE 恢复既定预后特征（如坏死的负面关联），同时揭示癌症特异性生物学（包括肾细胞癌中与已知分子亚型一致的有利血管生成特征）。
- 消融显示这些关联依赖模型学到的注意力（而非仅概念流行度），且概念字典捕获基础模型特征编码的大部分预后信息；为理解 ABMIL 生存模型学到什么提供可扩展、模型无关的框架，使病理学家能在队列层面解释模型行为，并具有生物标志物识别潜力。

## 正文

论文编号：arXiv:2608.02803v1（更新类型：cross）。以下为摘要全文翻译。

基于注意力的多实例学习（ABMIL）是计算病理学中切片级预测的主要方法，然而其注意力图只提供局部解释：它们指示模型关注哪里，却不指示哪些组织学特征驱动其预测，或模型跨患者队列如何行为。我们提出语义注意力全局解释（Semantic Attention Global Explanations，SAGE），一个从冻结的 ABMIL 模型提取全局、语言接地解释的事后框架。使用病理视觉-语言模型，SAGE 按 25 个组织学概念字典给图像补丁评分，按模型学到的注意力聚合这些分数，并量化每个概念跨队列与预测风险的关系。应用于使用七个 TCGA 癌症队列与三个基础模型的生存预测，SAGE 恢复既定预后特征（如坏死的负面关联），同时揭示癌症特异性生物学，包括肾细胞癌中与已知分子亚型一致的有利血管生成特征。消融研究表明，这些关联依赖模型学到的注意力（而非仅概念流行度），并且概念字典捕获基础模型特征编码的大部分预后信息。通过语义接地的解释，SAGE 为理解 ABMIL 生存模型学到什么提供可扩展、模型无关的框架，使病理学家能够在队列层面解释模型行为，并提供生物标志物识别的潜力。

## 关键词

#计算病理学 #生存分析 #可解释性 #多实例学习
