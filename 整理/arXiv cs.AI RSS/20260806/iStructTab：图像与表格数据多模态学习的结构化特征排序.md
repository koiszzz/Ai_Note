---
published: 20260806
title: "iStructTab：图像与表格数据多模态学习的结构化特征排序"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data.md"
source_note: "[[信息源/arXiv cs.AI RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data]]"
source_sha256: 8fa17e00b4a68218783912dca784bda10383b7d15293e50ee36a2cce5adf8aee
original_url: "https://arxiv.org/abs/2608.04348"
processed: 2026-08-06
language: zh-CN

---

# iStructTab：图像与表格数据多模态学习的结构化特征排序

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Al Zadid Sultan Bin Habib, Md Younus Ahamed, Prashnna Gyawali, Gianfranco Doretto, Donald A. Adjeroh
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04348)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/iStructTab- Structured Feature Sequencing for Multimodal Learning of Image and Tabular Data|查看原始文件]]

## 摘要

- 图像和表格数据的多模态学习常受无效表示影响，导致冗余、分散和泛化问题；本文引入图增强描述符排序（GEDS），一个基于列排列问题（CPP）原理的结构化特征排序算法。
- GEDS 通过相似性图计算精炼特征的统计描述符，系统确定有效特征排序；将其纳入顺序感知高效 Transformer 框架，利用顺序感知记忆 token，通过专用损失函数显式遵循推导的特征排序。
- 跨多模态基准实验表明 iStructTab 有效最小化特征分散，改进预测性能和鲁棒性，突出结构化特征排序在多模态学习中的重要性。

## 正文

图像和表格数据的多模态学习常受无效表示影响，导致冗余、分散和泛化问题。为应对此挑战，我们引入图增强描述符排序（Graph-Enhanced Descriptor Sequencing，GEDS），一个基于列排列问题（Column Permutation Problem，CPP）原理的结构化特征排序算法。GEDS 通过相似性图计算精炼特征的统计描述符，系统确定有效特征排序。我们将 GEDS 纳入顺序感知高效 Transformer 框架，利用顺序感知记忆 token，通过专用损失函数显式遵循推导的特征排序。跨多模态基准的实验结果表明，iStructTab 有效最小化特征分散，改进预测性能和鲁棒性，并突出结构化特征排序在多模态学习中的重要性。

## 关键词

#多模态学习 #特征排序 #表格数据 #Transformer #arXiv