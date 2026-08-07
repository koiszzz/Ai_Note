---
published: 2026-08-06
title: TS2TabPFN：通过特征提取与表格基础模型进行时间序列分类与外生回归
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/TS2TabPFN- Time Series Classification and Extrinsic Regression through Feature Extraction and a Tabu.md
source_note: "[[信息源/arXiv cs.LG RSS/TS2TabPFN- Time Series Classification and Extrinsic Regression through Feature Extraction and a Tabu]]"
source_sha256: 41ce255d1a46adf2c07fc1f41d81dd4f3801dcf693363dae9beb7a28f41d0b15
original_url: https://arxiv.org/abs/2608.04174
processed: 2026-08-07
language: zh-CN
---

# TS2TabPFN：通过特征提取与表格基础模型进行时间序列分类与外生回归

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04174)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TS2TabPFN- Time Series Classification and Extrinsic Regression through Feature Extraction and a Tabu|查看原始文件]]

## 摘要

- 提出 TS2TabPFN：将显式特征提取与表格基础模型 TabPFN 2.5 整合，弥合特征工程可控性与端到端模型自动化性能之间的差距。
- 实验表明其在 TSER 任务上以统计显著性大幅超越最先进模型，并为 TSC 提供稳健高效的替代方案。
- 结果表明基础模型与结构化特征相结合可克服单一范式局限，树立新的时间序列最先进水平。

## 正文

时间序列数据在实际应用中无处不在，分类（TSC）和外生回归（TSER）已成为从时间序列中获取价值的基本任务。虽然文献通过基于特征的方法和深度学习模型取得了显著进展，但现有方法常常只聚焦于特征提取质量，或聚焦于应用于原始数据的复杂架构的内在预测能力。这种割裂在特征工程提供的可控性与端到端模型的自动化性能之间造成差距。本文提出 TS2TabPFN——一个弥合这一差距的框架，它将显式特征提取与 TabPFN 2.5（一个前沿的表格数据基础模型）整合，以利用其预测能力。我们广泛实验评估表明，TS2TabPFN 在 TSER 任务上以统计显著性大幅超越最先进模型，为 TSC 提供了稳健高效的替代方案，并超越了大多数当前最佳算法。这些结果表明，将基础模型与结构化特征相结合可克服单一范式的局限，树立新的时间序列最先进水平。

## 关键词

#时间序列分类 #外生回归 #TabPFN #基础模型 #特征提取
