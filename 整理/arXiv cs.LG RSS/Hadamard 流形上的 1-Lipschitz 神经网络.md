---
title: "Hadamard 流形上的 1-Lipschitz 神经网络"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/1-Lipschitz Neural Networks on Hadamard Manifolds.md"
source_note: "[[信息源/arXiv cs.LG RSS/1-Lipschitz Neural Networks on Hadamard Manifolds]]"
source_sha256: 448ca9dfc92b0c36aee6e967d69f6eee4793c2804ad9af79f101f77f4a0921af
original_url: "https://arxiv.org/abs/2607.19335"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Hadamard 流形上的 1-Lipschitz 神经网络

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Davide Murari、Marta Ghirardelli、Ben Adcock 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.19335)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/1-Lipschitz Neural Networks on Hadamard Manifolds|查看原始文件]]

## 摘要

- 构建并分析 Hadamard 流形上的一类 1-Lipschitz 神经网络：层为梯度下降型、1-Lipschitz 且拟 α-强非扩张；架构核心构建块为 Busemann 函数，利用 Busemann 梯度流的性质设计 1-Lipschitz 保几何层。
- 控制神经网络 Lipschitz 常数是提升鲁棒性与稳定性的标准方式；多数现有约束策略为欧几里得空间设计。
- 提供双曲流形与对称正定（SPD）矩阵流形的显式构造与示例。
- 两个数值实验测试：庞加莱盘上的稳健分类与掩码-Wishart 协方差重建——庞加莱盘上网络在双曲扰动下产生稳健分类器；SPD 流形上训练 SPD 值去噪器并作为掩码-Wishart 协方差重建问题的即插即用先验；非扩张去噪器相对静态、仅数据与 Log-Euclidean 去噪基线改善结果，并实证测试其收敛性质。

## 正文

论文编号：arXiv:2607.19335v3（更新类型：replace-cross）。以下为摘要全文翻译。

控制神经网络的 Lipschitz 常数是提升鲁棒性与稳定性的标准方式。大多数现有的约束策略是为欧几里得空间设计的。在本工作中，我们构建并分析 Hadamard 流形上的一类 1-Lipschitz 神经网络。我们的层是梯度下降型、1-Lipschitz 且拟 α-强非扩张的。所提架构的核心构建块是 Busemann 函数，我们利用 Busemann 梯度流的性质设计 1-Lipschitz 的保几何层。我们为双曲流形与对称正定（SPD）矩阵流形提供显式构造与示例。我们在两个数值实验中测试所提架构：庞加莱盘上的稳健分类与掩码-Wishart 协方差重建。在庞加莱盘上，所提网络在双曲扰动下产生稳健分类器。在 SPD 流形上，我们训练 SPD 值去噪器，并把它们作为掩码-Wishart 协方差重建问题的即插即用先验。我们展示非扩张去噪器相对静态、仅数据与 Log-Euclidean 去噪基线的改进结果，并实证测试其收敛性质。

## 关键词

#Lipschitz网络 #Hadamard流形 #Busemann函数 #流形学习
