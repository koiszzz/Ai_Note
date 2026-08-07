---
published: 2026-08-06
title: 公平性坍缩现象：合成数据训练的 LM 中偏见放大
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/The Fairness Collapse Phenomenon- Bias Amplification in Language Models Trained on Synthetic Data.md
source_note: "[[信息源/arXiv cs.CL RSS/The Fairness Collapse Phenomenon- Bias Amplification in Language Models Trained on Synthetic Data]]"
source_sha256: a762645bdcdb44f519efdd9b558d31508b2b0eb411e4f7c59fdbfc7875844458
original_url: https://arxiv.org/abs/2608.04268
processed: 2026-08-07
language: zh-CN
---

# 公平性坍缩现象：合成数据训练的 LM 中偏见放大

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04268)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/The Fairness Collapse Phenomenon- Bias Amplification in Language Models Trained on Synthetic Data|查看原始文件]]

## 摘要

- 在人工生成数据上训练的生成模型会出现模型坍缩（model collapse）并导致显著性能退化；随着合成内容日益污染语言模型训练语料，开放数据用于持续预训练引发严重关切。
- 既有工作证明了 LM 中的模型坍缩，但不清楚接触合成数据会放大还是削弱预训练模型中已有的社会偏见；由于 LM 已知会复现并放大人口统计刻板印象，对自生成数据的递归训练可能形成自我强化的反馈回路，使有偏关联逐代增强——本文称之为公平性坍缩（fairness collapse）。
- 在 Bias in Bios 数据集上构建受控训练机制并反复用合成数据训练模型，观察到一致的令人担忧的模式：公平性退化先于标准语言建模指标反映显著退化而出现，说明偏见可能在模型坍缩的强信号显现之前就悄然增大。

## 正文

在人工生成数据上训练的生成模型已被证明会出现模型坍缩，导致显著的性能退化。随着合成内容日益污染语言模型的训练语料，这引发了关于在持续预训练中使用开放数据的严重关切。尽管此前的工作已经证明了语言模型中的模型坍缩，但接触合成数据会放大还是削弱预训练模型中已存在的社会偏见仍不清楚。由于语言模型已知会复现并放大人口统计刻板印象，对自生成数据的递归训练可能创造一个自我强化的反馈回路，使有偏的关联在代际间逐渐增强。我们将这一假设的现象称为公平性坍缩。在本工作中，我们利用 Bias in Bios 数据集构造受控训练机制，使模型反复在合成数据上训练。在所有实验中，我们都观察到一种一致且令人担忧的模式：公平性退化在标准语言建模指标反映显著退化之前就出现了。这一结果凸显了合成数据污染在语言模型训练中的一个关键风险：偏见可能在模型坍缩的强指标显现之前悄然增加。

## 关键词

#公平性坍缩 #模型坍缩 #合成数据 #偏见放大 #人口统计偏见 #BiasinBios
