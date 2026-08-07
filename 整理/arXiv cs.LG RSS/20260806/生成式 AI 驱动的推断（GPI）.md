---
published: 2026-08-06
title: "生成式 AI 驱动的推断（GPI）"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/GenAI-Powered Inference.md"
source_note: "[[信息源/arXiv cs.LG RSS/GenAI-Powered Inference|查看原始文件]]"
source_sha256: fbf56c5b24d454b4ac919d40a4f7ef4c6015cd3d10a1c81fd5a09d817804b906
original_url: https://arxiv.org/abs/2507.03897
processed: 2026-08-07
language: zh-CN
---

# 生成式 AI 驱动的推断（GPI）

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2507.03897)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/GenAI-Powered Inference|查看原始文件]]

## 摘要

- 本文提出 GenAI-Powered Inference（GPI），一个利用非结构化数据（包括文本和图像）进行因果推断与预测推断的统计框架。
- GPI 利用开源生成式 AI（GenAI）模型（如大语言模型和扩散模型），不仅能大规模生成非结构化数据，还能提取保证捕获其底层结构的低维表示；对这些表示应用机器学习，即可估计因果效应并量化估计不确定性。
- 与现有的表示学习方法不同，GPI 无需微调生成模型，计算高效且易于广泛使用。
- 通过三个应用展示其通用性：（1）在控制文本混杂因素的同时估计中国社交媒体审查的效应；（2）从同一图像中相关特征的影响中分离出特定图像特征的影响；（3）评估政治言论的说服力；并提供实现 GPI 的开源软件包。

## 正文

我们提出了 GenAI-Powered Inference（GPI），一个利用非结构化数据（包括文本和图像）进行因果推断和预测推断的统计框架。GPI 利用开源生成式人工智能（GenAI）模型——例如大语言模型和扩散模型——不仅大规模生成非结构化数据，还提取能保证捕获其底层结构的低维表示。对这些表示应用机器学习，GPI 能够在量化相关估计不确定性的同时估计因果效应。与现有的表示学习方法不同，GPI 不需要对生成模型进行微调，因而计算高效且易于广泛使用。我们通过三个应用展示了 GPI 框架的多功能性：（1）在调整文本混杂因素的同时估计中国社交媒体审查的效应；（2）将特定图像特征的影响与同一图像中其他相关特征的影响分离开来；（3）评估政治言论的说服力。此外还提供了一个用于实现 GPI 的开源软件包。

## 关键词

#因果推断 #生成式AI #表示学习 #非结构化数据
