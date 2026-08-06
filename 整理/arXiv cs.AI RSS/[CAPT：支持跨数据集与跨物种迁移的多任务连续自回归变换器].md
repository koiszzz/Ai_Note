---
title: "CAPT：支持跨数据集与跨物种迁移的多任务连续自回归变换器"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr.md"
source_note: "[[信息源/arXiv cs.AI RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr]]"
source_sha256: 6430a3cdc03719fdee5a8968e7279bee916d47cc92ca00b06cccf0e70f9a393f
original_url: "https://arxiv.org/abs/2607.23258"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CAPT：支持跨数据集与跨物种迁移的多任务连续自回归变换器

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.23258)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr|查看原始文件]]

## 摘要

- 大规模钙成像为构建神经群体动力学基础模型提供了机会，但一个核心问题仍未解决：在一组记录上预训练的模型能否泛化到新的数据集、实验范式乃至新的物种。
- 现有方法通常针对特定任务设计，并只在单一数据集上评估，因此难以判断其学到的表征能否复用于新的钙信号数据集。
- 论文提出 CAPT，即用于钙群体动力学的连续自回归群体变换器。CAPT 通过连续 patch 分词策略直接建模连续钙信号，并以自回归方式训练，从而支持端到端预训练和对多种下游任务的适配。
- 作者先在大规模小鼠钙成像数据集上预训练 CAPT，再评估其向不同实验室收集的独立小鼠、幼年斑马鱼和秀丽隐杆线虫数据集迁移的能力；迁移时冻结预训练骨干，只更新适配模块。
- 在神经群体预测和行为解码任务中，CAPT 持续优于专用及通用基线。使用秀丽隐杆线虫 NeuroPAL 注释的多模态分析显示，CAPT 嵌入在不同数据集之间形成共享功能空间，并捕捉与细胞解剖身份相关的结构。
- 结果表明，连续自回归建模为构建能够跨数据集、实验范式和物种泛化的通用钙成像神经基础模型提供了简单路径。

## 正文

大规模钙成像为构建神经群体动力学的基础模型提供了机会，但一个核心问题仍未解决：在一组记录上预训练的模型，能否泛化到新的数据集、新的实验范式，甚至新的物种。现有方法往往针对特定任务设计，并只在单一数据集上评估，因此难以判断它们学习到的表征能否复用于新的钙信号数据集。

为解决这一问题，本文提出 CAPT（Continuous Autoregressive Population Transformer，连续自回归群体变换器），用于建模钙群体动力学。CAPT 通过连续 patch 分词策略直接建模连续的钙信号，并采用自回归训练，使模型能够端到端预训练并适配多种下游任务。

作者首先在一个大规模小鼠钙成像数据集上预训练 CAPT，然后评估其迁移到由不同实验室收集的独立小鼠、幼年斑马鱼和秀丽隐杆线虫数据集上的能力。在这些迁移设置中，预训练骨干保持冻结，只更新适配模块。

在神经群体预测和行为解码任务上，CAPT 持续优于专用基线和通用基线。除了预测性能之外，作者还利用秀丽隐杆线虫数据集中的 NeuroPAL 注释开展多模态分析，发现 CAPT 的嵌入在不同数据集之间形成共享的功能空间，并捕捉到与细胞解剖身份相关的结构。

这些结果表明，连续自回归建模为构建通用神经基础模型提供了一条简洁路径，使模型有望跨数据集、实验范式和物种泛化。代码已公开于 https://github.com/TSuXinH/CAPT。

## 关键词

#钙成像 #神经群体动力学 #基础模型 #自回归变换器 #跨物种迁移 #行为解码
