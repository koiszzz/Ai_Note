---
published: 2026-08-06
title: TIDE：推动科学机器学习的物理多样性三维湍流基准数据集
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/TIDE- A Physically Diverse 3D Turbulence Benchmark Dataset for Advancing Scientific Machine Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/TIDE- A Physically Diverse 3D Turbulence Benchmark Dataset for Advancing Scientific Machine Learning]]"
source_sha256: 7411238525e58ad27d2806b15bd249c79ccea715cb821a516769d8a81c0e242b
original_url: https://arxiv.org/abs/2608.04222
processed: 2026-08-07
language: zh-CN
---

# TIDE：推动科学机器学习的物理多样性三维湍流基准数据集

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04222)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TIDE- A Physically Diverse 3D Turbulence Benchmark Dataset for Advancing Scientific Machine Learning|查看原始文件]]

## 摘要

- 提出 TIDE（Turbulent Incompressible DNS Ensembles）：一个 256^3 DNS 语料库与三维不可压缩湍流基准，含八个受控轴上的 15 种配置、独立系综、压力场与方程级验证。
- 当前习得模型在主要预报配置上勉强胜过持续性基线，且给定真实方程时误差约为谱求解器的两倍；低逐点误差可与畸变的小尺度动力学并存。
- 泛化结果显示大多数状态迁移源于训练覆盖不足，而强迫到衰减的迁移暴露了缺失的条件变量；弥合精度、保真度与条件性差距是 TIDE 使可衡量的核心开放问题。

## 正文

湍流是物理动力学机器学习的一个核心试验场，因为其控制方程是精确已知的。然而，现有研究大多停留在二维，而三维湍流具有根本不同的物理特性且模拟成本高得多。现有的三维资源通常每种配置只提供一个实现（realization），这使得很难区分"学习动力学"与"拟合单个流动的统计特性"。在本文中，我们引入了 TIDE（Turbulent Incompressible DNS Ensembles，湍流不可压缩 DNS 系综）——一个 256^3 的 DNS 语料库和三维不可压缩湍流基准，包含八个受控轴上的 15 种配置、独立系综、压力场以及方程级验证。该基准包含五个任务、标准化的学习基线、受控泛化划分，以及物理保真度指标与逐点误差。在主要的预报配置中，当前的习得模型勉强优于持续性（persistence）基线，并且在给定真实方程的情况下仍比谱求解器多出约两倍的误差。此外，更低的逐点误差可能与严重畸变的小尺度动力学同时出现，表明仅靠精度并不能保证物理保真度。泛化结果进一步表明，大多数状态迁移（regime shift）反映了训练覆盖的有限性，而强迫到衰减（forced-to-decay）的迁移暴露了一个缺失的条件变量：在强迫条件下训练的算子会在外部驱动力被移除后继续预测驱动演化。弥合这些精度、保真度和条件性差距是 TIDE 使其可衡量的核心开放问题。

## 关键词

#湍流模拟 #科学机器学习 #基准数据集 #DNS #物理保真度
