---
title: "E4GEN：事件级可解释的极端增强时序生成"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/E4GEN- Event-level Explainable Extreme-Enhanced Time-series Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/E4GEN- Event-level Explainable Extreme-Enhanced Time-series Generation]]"
source_sha256: 3bcf087ffd578926c9390dfd1c9ba6190e4d66d37e7b9df3b8fbcb748b48ce93
original_url: "https://arxiv.org/abs/2606.01634"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# E4GEN：事件级可解释的极端增强时序生成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lin Jiang、Dahai Yu、Ximiao Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.01634)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/E4GEN- Event-level Explainable Extreme-Enhanced Time-series Generation|查看原始文件]]

## 摘要

- 提出 E4GEN，面向极端事件感知时序生成的可解释扩散框架，通过三个关键组件系统回答何时、什么与如何控制极端事件生成。
- 生成逼真时序对科学研究与现实应用至关重要；现有方法常强调整体分布保真度，却无法忠实捕获极端事件。
- E-Activator 在去噪过程学习数据集自适应极端控制信号激活步骤（不干扰趋势、季节性等常规时序成分）；E-Predictor 通过自驱动语义预测决定施加何种控制信号（每样本生成期间推断潜极端事件信息派生自身控制信号），含解决训练标签不可用的数据条件训练、噪声初始化采样机制；E-Control 通过可训练极端控制网络指定如何控制（把语义控制信号转化为逐层信号注入去噪过程）。
- 六个数据集 17 个指标评估：E4GEN 在整体保真度、极端事件保真度与下游效用等多维优于最先进模型。

## 正文

论文编号：arXiv:2606.01634v2（更新类型：replace）。以下为摘要全文翻译。

生成逼真的时间序列对科学研究与现实世界应用至关重要。然而，现有方法往往强调整体分布保真度，却无法忠实地捕获极端事件。为推进现有研究，我们提出 E4GEN，一个面向极端事件感知时序生成的可解释扩散框架。E4GEN 通过三个关键组件，就何时（when）、什么（what）与如何（how）控制极端事件生成提供系统性洞察。第一，E-Activator 在去噪过程中学习数据集自适应的极端控制信号激活步骤，不干扰包括趋势与季节性在内的常规时序成分。第二，E-Predictor 通过自驱动语义预测（Self-Driven Semantic Prediction）决定施加何种控制信号：每个样本在生成期间通过推断潜在极端事件信息推导自己的控制信号。它还包括一种新颖的数据条件训练、噪声初始化采样机制，以解决训练标签不可用的问题。第三，E-Control 通过一个可训练的极端控制网络（Extreme Control Network）指定如何控制极端事件生成：把语义控制信号转化为逐层信号并注入去噪过程。我们在六个数据集上用 17 个指标评估 E4GEN，大量实验表明，E4GEN 在整体保真度、极端事件保真度与下游效用等多个维度上优于最先进的模型。

## 关键词

#时序生成 #扩散模型 #极端事件 #可解释
