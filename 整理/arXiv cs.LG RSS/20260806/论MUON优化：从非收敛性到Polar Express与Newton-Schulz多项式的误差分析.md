---
published: 2026-08-06
title: 论MUON优化：从非收敛性到Polar Express与Newton-Schulz多项式的误差分析
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/On MUON optimization- From non-convergence to an error analysis with Polar Express and the Newton-Sc.md
source_note: "[[信息源/arXiv cs.LG RSS/On MUON optimization- From non-convergence to an error analysis with Polar Express and the Newton-Sc]]"
source_sha256: a0d905cb60d7ae2f4a23b76c06b560da245e4ae8cc953a205b136eba9173de6e
original_url: https://arxiv.org/abs/2608.04607
processed: 2026-08-07
language: zh-CN
---

# 论MUON优化：从非收敛性到Polar Express与Newton-Schulz多项式的误差分析

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04607)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/On MUON optimization- From non-convergence to an error analysis with Polar Express and the Newton-Sc|查看原始文件]]

## 摘要

- 提出 MUON 优化器的广义变体：任意数量的广义 Newton-Schulz（NS）步骤，多项式次数可任意高，涵盖原版 MUON 与结合 Polar Express 的情形
- 对一类简单的随机优化问题（SOP）证明：对几乎每个小批量大小，MUON 在梯度步数趋于无穷时都无法收敛到 SOP 的解
- 为带广义 NS 步骤的 MUON 建立误差分析，给出以梯度步数和小批量大小表示的收敛率
- 以二次随机优化问题及二分类 `\ell_2` 正则化逻辑回归等具体例子说明通用误差分析

## 正文

随机梯度下降（SGD）优化方法是训练深度神经网络（DNN）的标准工具。在许多相关人工智能（AI）系统——如流行的大语言模型（LLM）——中，使用的优化方法并非标准 SGD 方案，而是采用 SGD 的适当加速变体。这类加速 SGD 变体中最流行的方法之一是 Jordan 等人 2024 年提出的动量正交化 Newton-Schulz（MUON）优化器。MUON 优化器利用 DNN 训练中权重参数的特殊矩阵结构，其原始形式在每次 MUON 迭代中执行五次 Newton-Schulz（NS）矩阵步骤。

在本工作中，我们提出并研究 MUON 优化器的一个广义变体，涉及任意数量的广义 NS 步骤，使用次数可能任意高的多项式。所考虑的优化器涵盖使用原始 NS 多项式的 MUON，以及 MUON 与近期提出的 Polar Express 方法相结合的情形作为特例。对于一类简单的随机优化问题（SOP），我们证明对于几乎每个小批量大小，MUON 在梯度步数趋于无穷时都不能收敛到 SOP 的解。我们还为带广义 NS 步骤的 MUON 建立误差分析，以梯度步数和小批量大小给出收敛率。我们以若干具体例子说明 MUON 的通用误差分析，包括二次随机优化问题（SOP）以及用于二分类的 `\ell_2` 正则化逻辑回归。

## 关键词

#优化 #MUON #随机梯度下降 #深度神经网络 #收敛分析
