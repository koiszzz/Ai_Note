---
published: 2026-08-05
title: "MambaTS：改进的长时序预测选择性状态空间模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting.md"
source_note: "[[信息源/arXiv cs.LG RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting.]]"
source_sha256: 9751190888876be979fb98bc6693652ec19d20e6ef5fdcecfb8b28a4c33fd200
original_url: "https://arxiv.org/abs/2405.16440"
processed: 2026-08-05
language: zh-CN
---

# MambaTS：改进的长时序预测选择性状态空间模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xiuding Cai、Xueyao Wang、Yaoyao Zhu、Yu Yao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2405.16440)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MambaTS- Improved Selective State Space Models for Long-term Time Series Forecasting.|查看原始文件]]

## 摘要

- 近年来 Transformer 已成为长时序预测（LTSF）的事实标准架构，但面临自注意力机制相关的挑战：二次复杂度与置换不变偏置；这引出一个重要问题：我们真的需要自注意力来建模 LTSF 中的长程依赖吗？
- 提出 MambaTS，一个基于线性扫描的框架，通过结构化依赖建模捕捉跨时间与变量的全局依赖。
- 由于显式变量依赖结构常未知，引入时间上的变量感知扫描（VAST）：在训练中学习变量间关系，在推理中通过基于最短路径的解码策略确定最优扫描顺序。
- MambaTS 采用最新的 Mamba 模型作为骨干；指出由于独立变量的存在，原始 Mamba 中的因果卷积并不必要，由此开发时间 Mamba 块（TMB）；为缓解过拟合，为 TMB 中的选择性参数引入 dropout 机制。
- 在八个公共数据集上的大量实验表明 MambaTS 在大多数数据集上取得有竞争力或最先进的性能。
- 代码：https://github.com/XiudingCai/MambaTS-pytorch

## 正文

论文编号：arXiv:2405.16440v2（更新类型：replace）。以下为摘要全文翻译。

近年来，Transformer 已成为长时序预测（LTSF）的事实标准架构，然而它们面临与自注意力机制相关的挑战，包括二次复杂度与置换不变偏置。这引出一个重要问题：我们真的需要自注意力来建模 LTSF 中的长程依赖吗？为回答这一点，我们提出 MambaTS，一个基于线性扫描的框架，通过结构化依赖建模捕捉跨时间与变量的全局依赖。由于显式的变量依赖结构往往未知，我们引入时间上的变量感知扫描（Variable-Aware Scan along Time，VAST），它在训练中学习变量间关系，并在推理中通过基于最短路径的解码策略确定最优扫描顺序。MambaTS 采用最新的 Mamba 模型作为骨干。我们认为，由于独立变量的存在，原始 Mamba 中的因果卷积是不必要的，由此开发了时间 Mamba 块（Temporal Mamba Block，TMB）。为缓解模型过拟合，我们进一步在 TMB 中为选择性参数引入 dropout 机制。在八个公共数据集上的大量实验表明，MambaTS 在大多数数据集上取得有竞争力或最先进的性能。代码可在此仓库获取：https://github.com/XiudingCai/MambaTS-pytorch。

## 关键词

#时序预测 #Mamba #状态空间模型 #LTSF #变量感知扫描
