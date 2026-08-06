---
published: 2026-08-05
title: "CAPT：支持钙群体动力学跨数据集与跨物种迁移的多任务连续自回归 Transformer"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr.md"
source_note: "[[信息源/arXiv cs.LG RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr]]"
source_sha256: a6d0eb02820b477bde03c3da6b00d9ea6a94dde1f356a4c5d0edef8af8d9490a
original_url: "https://arxiv.org/abs/2607.23258"
processed: 2026-08-05
language: zh-CN
---

# CAPT：支持钙群体动力学跨数据集与跨物种迁移的多任务连续自回归 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xinhong Xu、Yimeng Zhang、Yuanlong Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.23258)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CAPT- A Multi-task Continuous Autoregressive Transformer enabling Cross-dataset and Cross-species Tr|查看原始文件]]

## 摘要

- 提出 CAPT（连续自回归群体 Transformer），用于钙群体动力学：通过连续补丁分词策略直接建模连续钙轨迹，自回归训练，支持端到端预训练与多样下游任务适配。
- 大规模钙成像为构建神经群体动力学基础风格模型创造机会，但核心问题仍未解决：在一个录音集合上预训练的模型能否泛化到新数据集、新实验范式甚至新物种；现有方法常为特定任务设计并在单一数据集评估，其学习表示是否可复用于新钙轨迹数据集不明。
- 先在大规模小鼠钙成像数据集预训练 CAPT，评估其跨独立小鼠、斑马鱼幼体与秀丽隐杆线虫数据集（不同实验室收集）的可迁移性：预训练骨干冻结，只更新适配模块。
- 神经群体预测与行为解码任务上，CAPT 一致优于专门与通用基线；用秀丽隐杆线虫数据集 NeuroPAL 标注的多模态分析显示 CAPT 嵌入跨数据集形成共享功能空间并捕获与解剖细胞身份相关的结构——连续自回归建模为钙成像通用神经基础模型开辟简单路径，可跨数据集、实验范式与物种泛化；代码：https://github.com/TSuXinH/CAPT

## 正文

论文编号：arXiv:2607.23258v2（更新类型：replace-cross）。以下为摘要全文翻译。

大规模钙成像为构建神经群体动力学的基础风格模型创造了机会，但一个核心问题仍未解决：**在一个录音集合上预训练的模型能否泛化到新数据集、新实验范式，甚至新物种。** 现有方法往往为特定任务设计并在单一数据集上评估，使它们学到的表示是否可复用于新的钙轨迹数据集仍不清楚。为弥合这一空白，我们提出 CAPT，一个用于钙群体动力学的**连续自回归群体 Transformer**（Continuous Autoregressive Population Transformer）。CAPT 通过连续补丁分词策略直接建模连续钙轨迹，并自回归训练，支持端到端预训练与对多样下游任务的适配。我们首先在大规模小鼠钙成像数据集上预训练 CAPT，并评估其跨独立小鼠、斑马鱼幼体与*秀丽隐杆线虫*数据集（由不同实验室收集）的可迁移性。在这些迁移设置中，预训练骨干被冻结，只更新适配模块。在神经群体预测与行为解码任务中，CAPT 一致优于专门与通用基线。在预测性能之外，用秀丽隐杆线虫数据集中 NeuroPAL 标注进行的多模态分析表明，CAPT 嵌入跨数据集形成共享功能空间，并捕获与解剖细胞身份相关的结构。这些结果表明，连续自回归建模为钙成像的通用神经基础模型开辟了一条简单路径：可以跨数据集、实验范式与物种泛化。代码可在 https://github.com/TSuXinH/CAPT 获取。

## 关键词

#钙成像 #神经群体动力学 #基础模型 #跨物种
