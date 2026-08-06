---
title: "扩展单细胞生成的自回归 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Scaling an Autoregressive Transformer for Single-Cell Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Scaling an Autoregressive Transformer for Single-Cell Generation]]"
source_sha256: ad3fe19743d11b41ff435766ccd831926f3452e4d94295617021cfff485d6f83
original_url: "https://arxiv.org/abs/2608.02961"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 扩展单细胞生成的自回归 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Aleksandr Sharipov、Yusif Mukhtarov、Igor Molybog
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02961)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Scaling an Autoregressive Transformer for Single-Cell Generation|查看原始文件]]

## 摘要

- 研究单细胞基因表达向量的自监督生成任务：给定细胞类型的向量集，生成该细胞类型的额外基因表达向量；模型为因果 Transformer 配学习量化 VAE 分词器，用交叉熵损失训练。
- 评估时用留出的细胞类型基因表达向量条件化模型并生成表达向量，把生成向量分布与该细胞类型的真实分布比较；同时刻画预训练损失的缩放行为。
- 通过变化训练参数数与训练数据量研究所提架构的缩放性质：据作者所知，首次为单细胞基础模型找到联合拟合的双指数缩放定律与计算最优前沿。
- 讨论该预训练模型如何微调用于扰动响应预测。

## 正文

论文编号：arXiv:2608.02961v1（更新类型：cross）。以下为摘要全文翻译。

我们研究单细胞基因表达向量的自监督生成任务：给定来自一个细胞类型的一组向量，我们旨在生成该细胞类型的额外基因表达向量。对于此任务，我们刻画生成基因表达向量的生物学保真度与预训练损失的缩放行为。模型是一个配学习量化 VAE 分词器的因果 Transformer，用交叉熵损失训练。为评估模型，我们用留出的细胞类型基因表达向量条件化它并生成基因表达向量，把所得基因表达向量分布与该细胞类型的真实分布比较。我们通过变化训练参数数与训练数据量研究所提架构的缩放性质。据我们所知，我们首次为一个单细胞基础模型找到联合拟合的双指数缩放定律与计算最优前沿。最后，我们讨论这个预训练模型如何微调用于扰动响应预测。

## 关键词

#单细胞 #自回归模型 #缩放定律 #基因表达
