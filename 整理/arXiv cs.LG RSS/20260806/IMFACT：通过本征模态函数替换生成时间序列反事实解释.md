---
published: 2026-08-06
title: "IMFACT：通过本征模态函数替换生成时间序列反事实解释"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution.md"
source_note: "[[信息源/arXiv cs.LG RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution|查看原始文件]]"
source_sha256: f0d02ddfaca56598459772ca021355656fe917f227b8c660f827cc1e861766c8
original_url: https://arxiv.org/abs/2608.04777
processed: 2026-08-07
language: zh-CN
---

# IMFACT：通过本征模态函数替换生成时间序列反事实解释

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04777)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/IMFACT- Counterfactual Explanations for Time Series via Intrinsic Mode Function Substitution|查看原始文件]]

## 摘要

- 振动等振荡信号在特定频带携带类别判别信息；在原始特征空间中扰动它们以进行反事实分析很容易破坏其时序结构并产生物理上不合理的（physically implausible）结果。
- 本文提出 IMFACT（IMF-based counterfACTuals），一个模型无关的框架，在经验模态分解（Empirical Mode Decomposition）的分解空间中为时间序列分类器生成合理的反事实解释：将输入信号分解为本征模态函数（IMF），并把选定的 IMF 逐步替换为最近异类邻居（NUN）的 IMF，直到分类器翻转到目标类别。
- 在两个 UCR 基准（FaultDetectionA、FruitFlies）上评估了六种 IMF 选择策略和一种多 NUN 循环扩展：结合三个 NUN 的基于方差策略在可靠性和合理性指标上优于两种著名基线技术，而循环使用三个 NUN 在两个数据集上都取得了最佳邻近性（proximity）。

## 正文

振荡信号（如振动）在特定频带携带类别判别信息；在原始特征空间中扰动它们以进行反事实分析，很容易破坏其时序结构并产生物理上不合理的结果。在这项工作中，我们引入了 IMFACT（IMF-based counterfACTuals），一个模型无关的框架，用于为时间序列分类器生成合理的反事实解释，它在经验模态分解（Empirical Mode Decomposition）的分解空间中运作。输入信号被分解为本征模态函数（IMF），然后选定的 IMF 被逐步替换为最近异类邻居（NUN）的 IMF，直到分类器翻转到目标类别。我们在两个 UCR 基准（FaultDetectionA、FruitFlies）上评估了六种 IMF 选择策略和一种多 NUN 循环扩展。结合三个 NUN 的基于方差的策略在可靠性和合理性指标上优于两种著名的基线技术，而跨三个 NUN 循环则在这两个数据集上取得了最佳邻近性（proximity）。

## 关键词

#时间序列 #反事实解释 #可解释AI #经验模态分解
