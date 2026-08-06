---
published: 2026-08-05
title: "MambaTS：改进的长时时序预测选择性状态空间模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.AI RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting]]"
source_sha256: 7a8923c3346512ea1441915bb5c6eda8a20266d62c52ca15092c18224cc47573
original_url: "https://arxiv.org/abs/2405.16440"
processed: 2026-08-05
language: zh-CN
---

# MambaTS：改进的长时时序预测选择性状态空间模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiuding Cai、Xueyao Wang、Yaoyao Zhu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2405.16440)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting|查看原始文件]]

## 摘要

- 提出 MambaTS，基于线性扫描的框架，通过结构化依赖建模跨越时间与变量的全局依赖；提出时间变量感知扫描（VAST），训练期间学习变量间关系，推理时通过基于最短路径的解码策略确定最优扫描顺序。
- 建议香草 Mamba 中的因果卷积因独立变量存在而不必要，据此发展时间 Mamba 块（TMB）；并在 TMB 中为选择性参数引入 dropout 机制缓解过拟合。
- 在八个公开数据集上的大量实验显示，MambaTS 在多数数据集上取得有竞争力或最先进的性能。
- 代码：https://github.com/XiudingCai/MambaTS-pytorch

## 正文

论文编号：arXiv:2405.16440v2（更新类型：replace-cross）。以下为摘要全文翻译。

近年来，Transformer 已成为长时时序预测（LTSF）的事实标准架构，但它们面临与自注意力机制相关的挑战，包括二次复杂度与置换不变偏差。这引出一个重要问题：*在 LTSF 中建模长程依赖，我们真的需要自注意力吗？* 为解决这一问题，我们提出 MambaTS，一个基于线性扫描的框架，通过结构化依赖建模跨越时间与变量的全局依赖。由于显式变量依赖结构通常未知，我们引入时间变量感知扫描（VAST）：训练期间学习变量间关系，推理期间通过基于最短路径的解码策略确定最优扫描顺序。MambaTS 采用最新的 Mamba 模型作为骨干。我们建议，香草 Mamba 中的因果卷积因独立变量的存在而不再必要，由此发展出时间 Mamba 块（TMB）。为缓解模型过拟合，我们进一步在 TMB 中为选择性参数引入 dropout 机制。在八个公开数据集上的大量实验表明，MambaTS 在多数数据集上取得有竞争力或最先进的性能。代码可在该仓库获取：https://github.com/XiudingCai/MambaTS-pytorch

## 关键词

#时序预测 #状态空间模型 #Mamba #长时预测
