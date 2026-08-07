---
published: 2026-08-06
title: 基于约束混合策略 GroupDRO 的公平系统提示选择
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO.md
source_note: "[[信息源/arXiv cs.CL RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO]]"
source_sha256: 86ee667a2fb38941e17246fcb23e9c726e0ce5132d6311ba06697c72f76dc84d
original_url: https://arxiv.org/abs/2608.04339
processed: 2026-08-07
language: zh-CN
---

# 基于约束混合策略 GroupDRO 的公平系统提示选择

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04339)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Equitable System-Prompt Selection via Constrained Mixed-Strategy GroupDRO|查看原始文件]]

## 摘要

- 语义等价但措辞不同的问题可能得到质量差异悬殊的回答，而系统提示通常按平均质量优化，导致某些措辞仍获低质量回答。
- 提出约束混合策略 GroupDRO 框架：为现有提示池中的系统提示分配权重，最小化跨指标与分组的 worst-case 信息质量损失，同时约束平均损失接近基于平均质量的选择。
- 在五个 LLM、两个双语医学与消费金融基准上，该方法平均将 Overall Mean、Worst 25% Mean 和 Worst 分别降低 13.1%、13.2%、13.7%，且多提示权重揭示了跨指标-分组的互补性。

## 正文

本文编号：arXiv:2608.04339v1（公告类型：new），以下为摘要全文翻译。

大语言模型越来越多地被用于信息检索，但语义等价、措辞不同的问题可能会获得质量差异相当大的回答。系统提示（system prompt）被广泛用于引导模型的响应行为，但它们通常针对平均质量进行优化，因此某些问题措辞仍可能收到不完整或低质量的回答。为解决这一问题，我们构建了一个用于系统提示选择的约束混合策略 GroupDRO 框架。该框架不是优化系统提示文本本身，而是为现有提示池中的系统提示分配权重，以最小化跨评估指标和分组的 worst-case 信息质量损失，同时约束平均损失与基于平均质量的选择保持接近。由于提示池生成与选择相互解耦，该方法适用于任何系统提示池，并可以利用一组互补的系统提示进行集成，而非依赖单一提示。在五个大语言模型、两个双语医学与消费金融基准上的实验表明，与不采取缓解措施相比，该约束方法平均将 Overall Mean、Worst 25% Mean 和 Worst 分别降低了 13.1%、13.2% 和 13.7%，同时整体质量保持在接近平均选择（Average selection）的水平。其多提示权重揭示了跨指标-分组对的互补性。代码和数据可在 https://github.com/Rainxu09/equitable-system-prompt-selection 获取。

## 关键词

#系统提示 #GroupDRO #公平性 #大语言模型 #提示工程
