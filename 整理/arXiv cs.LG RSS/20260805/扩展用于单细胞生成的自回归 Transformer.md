---
published: 2026-08-05
title: "扩展用于单细胞生成的自回归 Transformer"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Scaling an Autoregressive Transformer for Single-Cell Generation.md"
source_note: "[[信息源/arXiv cs.LG RSS/Scaling an Autoregressive Transformer for Single-Cell Generation.]]"
source_sha256: b1bb4246f5ffe3e914961087340443c22b13e5c030c807127e5423a55da415bb
original_url: "https://arxiv.org/abs/2608.02961"
processed: 2026-08-05
language: zh-CN
---

# 扩展用于单细胞生成的自回归 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Aleksandr Sharipov、Yusif Mukhtarov、Igor Molybog
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02961)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Scaling an Autoregressive Transformer for Single-Cell Generation.|查看原始文件]]

## 摘要

- 研究单细胞基因表达向量的自监督生成任务：给定来自某细胞类型的一组向量，生成该细胞类型的额外基因表达向量；对该任务刻画生成基因表达向量的生物学保真度与预训练损失的扩展行为。
- 模型是带学得量化 VAE 分词器的因果 Transformer，用交叉熵损失训练。
- 评估时以留出的细胞类型基因表达向量为条件生成基因表达向量，把所得基因表达向量分布与该细胞类型 ground truth 分布比较。
- 通过变化训练参数量与训练数据量研究架构的扩展性质：发现首个联合拟合双指数扩展律与单细胞基础模型的计算最优前沿（据我们所知）。
- 讨论该预训练模型如何微调用于扰动响应预测。

## 正文

论文编号：arXiv:2608.02961v1（更新类型：new）。以下为摘要全文翻译。

我们研究单细胞基因表达向量的自监督生成任务：给定来自某一细胞类型的一组向量，目标是生成该细胞类型的额外基因表达向量。对该任务，我们既刻画生成基因表达向量的生物学保真度，也刻画预训练损失的扩展行为。模型是一个因果 Transformer，搭配一个学得的量化 VAE 分词器，用交叉熵损失训练。为评估模型，我们以留出的某细胞类型基因表达向量为条件，生成基因表达向量，并把所得基因表达向量分布与该细胞类型的 ground truth 分布比较。我们通过变化训练的参数量与训练数据量研究所提架构的扩展性质。据我们所知，我们发现首个联合拟合的双指数扩展律，以及一个单细胞基础模型的计算最优前沿。最后，我们讨论这个预训练模型如何微调用于扰动响应预测。

## 关键词

#单细胞 #自回归Transformer #扩展律 #生成模型 #VAE
