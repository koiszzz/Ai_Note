---
published: 2026-08-07
title: "CPC-CMS：文档级情感分析的认知成对比较分类模型选择框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CPC-CMS- Cognitive Pairwise Comparison Classification Model Selection Framework for Document-level S.md"
source_note: "[[信息源/arXiv cs.LG RSS/CPC-CMS- Cognitive Pairwise Comparison Classification Model Selection Framework for Document-level S]]"
source_sha256: db8ad0a5142fe3c12acb51e139b8b286e974e24abfc5cea5b0dc02fc3779a349
original_url: "https://arxiv.org/abs/2507.14022"
processed: 2026-08-07
language: zh-CN
---

# CPC-CMS：文档级情感分析的认知成对比较分类模型选择框架

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Jianfei Li, Kevin Kam Fung Yuen
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2507.14022)

## 摘要

- 提出 CPC-CMS 框架用于文档级情感分析：基于专家知识判断的认知成对比较（CPC）计算准确率、精确率、召回率、F1、特异度、MCC、Cohen's Kappa 与效率等评估准则权重。
- 以朴素贝叶斯、线性 SVC、随机森林、逻辑回归、XGBoost、LSTM 与 ALBERT 为基线模型，形成带准则权重的加权决策矩阵选择最优模型。
- 三个社交媒体开放数据集上：排除时间因素时 ALBERT 对三个数据集均最佳；计入时间因素后没有单一模型始终最优。
- 结论得到 AHP、TOPSIS 与 MOORA 等聚合排序方法支持。

## 正文

本研究提出用于文档级情感分析的认知成对比较分类模型选择（CPC-CMS）框架。基于专家知识判断的 CPC 用于计算评估准则的权重，包括准确率、精确率、召回率、F1 分数、特异度、马修斯相关系数（MCC）、Cohen's Kappa 与效率。选择朴素贝叶斯、线性支持向量分类（LSVC）、随机森林、逻辑回归、极端梯度提升（XGBoost）、长短期记忆（LSTM）与轻量双向编码器表征（ALBERT）作为分类基线模型。研究形成由分类评估分数相对准则权重构成的加权决策矩阵，为分类问题选择最佳分类模型。三个社交媒体开放数据集用于演示所提 CPC-CMS 的可行性。模拟结果表明，排除时间因素时 ALBERT 对三个数据集均为最佳；计入时间因素后，没有单一模型始终优于其他模型。这些结论也得到层次分析法（AHP）、理想解相似度排序法（TOPSIS）与比率分析多目标优化（MOORA）等其他聚合与排序方法的支持，尽管聚合值与排名可能不同。CPC-CMS 可应用于不同领域的其他分类任务。

## 关键词

情感分析、模型选择、成对比较、多准则决策、文档级
