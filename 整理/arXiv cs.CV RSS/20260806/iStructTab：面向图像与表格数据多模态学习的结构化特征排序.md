---
published: 2026-08-06
title: iStructTab：面向图像与表格数据多模态学习的结构化特征排序
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data.md
source_note: "[[信息源/arXiv cs.CV RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data]]"
source_sha256: 1a7d9065d7001a05e87e0a2f679c08862e50b45a9ae00319f6b422f69851c1c9
original_url: https://arxiv.org/abs/2608.04348
processed: 2026-08-07
language: zh-CN
---

# iStructTab：面向图像与表格数据多模态学习的结构化特征排序

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04348)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data|查看原始文件]]

## 摘要

- 提出图增强描述符排序（GEDS），一种植根于列排列问题（CPP）原理的结构化特征排序算法，通过相似性图计算精炼特征统计描述符并确定有效排序。
- 将 GEDS 融入顺序感知高效 Transformer 框架，利用顺序感知记忆 token 并通过专用损失函数遵循推导出的特征排序。
- 跨多模态基准的实验表明 iStructTab 有效减少特征分散，提升预测性能与鲁棒性。

## 正文

图像与表格数据的多模态学习常常因表征无效而受损，导致冗余、分散和泛化问题。为应对这一挑战，我们提出图增强描述符排序（Graph-Enhanced Descriptor Sequencing, GEDS）——一种植根于列排列问题（Column Permutation Problem, CPP）原理的结构化特征排序算法。GEDS 通过基于相似性图的计算精炼特征的统计描述符，系统性地确定有效的特征排序。

我们将 GEDS 融入一个顺序感知的高效 Transformer 框架，利用顺序感知的记忆 token，并通过专用损失函数使其显式遵循推导出的特征排序。

跨多模态基准的实验表明，iStructTab 能有效最小化特征分散，提升预测性能与鲁棒性，凸显了结构化特征排序在多模态学习中的重要性。

## 关键词

#多模态学习 #特征排序 #Transformer #表格数据
