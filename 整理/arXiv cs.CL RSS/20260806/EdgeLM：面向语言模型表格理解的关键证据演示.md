---
published: 2026-08-06
title: "EdgeLM：面向语言模型表格理解的关键证据演示"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/EdgeLM- Edge Demonstrations for Language Models' Table Understanding.md
source_note: "[[信息源/arXiv cs.CL RSS/EdgeLM- Edge Demonstrations for Language Models' Table Understanding]]"
source_sha256: e21808a4128e813889667d4ec7c97ea86c8712596bf46ee33f12684be7d400d2
original_url: https://arxiv.org/abs/2608.04390
processed: 2026-08-07
language: zh-CN
---

# EdgeLM：面向语言模型表格理解的关键证据演示

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04390)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/EdgeLM- Edge Demonstrations for Language Models' Table Understanding|查看原始文件]]

## 摘要

- 大语言模型通过上下文学习完成表格中心预测，演示选择对性能至关重要；现有检索方法优先查询相似性，但相似演示往往强化模型既有预测而非揭示困难决策所需的关键区别
- 提出 EdgeLM：检索框架，选择"关键证据"（edge evidence）——既与查询相关又携带决策边界信息的演示；检索两类互补的关键证据：数据关键点（附近但真实标签不同的样本）与模型关键点（部署模型此前误分类的相似样本）
- EdgeLM 无需模型重训练或任务专用工程
- 在五个数据整理任务、十五个数据集和五个开源及专有 LLM 上，EdgeLM 在每个设置中都取得最佳或接近最佳的性能；消融表明两类关键证据提供互补收益

## 正文

大语言模型（LLMs）通过上下文学习执行以表格为中心的预测，这使得演示选择对性能至关重要。现有的检索方法优先考虑与查询的相似性，但相似的演示往往强化了模型可能的预测，而非揭示困难决策所需的关键区别。我们提出 EdgeLM，一个检索框架，它转而选择关键证据（edge evidence）——既与查询相关、又携带决策边界信息的演示。EdgeLM 通过选择两类互补的关键证据来进行检索：数据关键点（data edges），即真实标签不同的邻近示例；以及模型关键点（model edges），即部署模型此前误分类的相似示例。EdgeLM 既不需要模型重新训练，也不需要任务专用工程。在五个数据整理任务、十五个数据集以及五个开源和专有 LLM 上，EdgeLM 在每种设置下都始终取得最佳或接近最佳的性能，而消融实验表明，两类关键证据提供了互补的收益。我们的代码和数据集可在 https://github.com/soroushomidvar/EdgeLM 公开获取。

## 关键词

#表格理解 #上下文学习 #演示选择 #检索框架 #数据整理
