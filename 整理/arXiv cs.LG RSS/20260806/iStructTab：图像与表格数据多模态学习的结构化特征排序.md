---
published: 2026-08-06
title: iStructTab：图像与表格数据多模态学习的结构化特征排序
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data.md
source_note: "[[信息源/arXiv cs.LG RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data]]"
source_sha256: f01ccb255bc61e4b13174ce3d33818e18263b238415721c517694a0a7653adc7
original_url: https://arxiv.org/abs/2608.04348
processed: 2026-08-07
language: zh-CN
---

# iStructTab：图像与表格数据多模态学习的结构化特征排序

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04348)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data|查看原始文件]]

## 摘要

- 提出图增强描述子排序（GEDS），一种基于列置换问题原理的结构化特征排序算法
- 在有序感知高效 transformer 框架中使用有序感知记忆令牌，通过专门损失显式遵循特征排序
- 跨多模态基准有效减少特征分散，提升预测性能与鲁棒性

## 正文

图像与表格数据的多模态学习常因表示不有效而受损，导致冗余、分散与泛化问题。为应对这一挑战，我们引入图增强描述子排序（Graph-Enhanced Descriptor Sequencing，GEDS）——一种基于列置换问题（Column Permutation Problem，CPP）原理的结构化特征排序算法。GEDS 通过基于相似图的计算细化特征的统计描述子，系统地确定有效的特征排序。我们将 GEDS 融入一个有序感知的高效 transformer 框架，利用显式遵循所推导特征排序的有序感知记忆令牌（order-aware memory tokens），并通过专门的损失函数加以约束。跨多模态基准的实验结果表明，iStructTab 有效减少了特征分散，提升了预测性能与鲁棒性，凸显了结构化特征排序在多模态学习中的重要意义。

## 关键词

#iStructTab #多模态学习 #特征排序 #Transformer #表格数据 #图像数据
