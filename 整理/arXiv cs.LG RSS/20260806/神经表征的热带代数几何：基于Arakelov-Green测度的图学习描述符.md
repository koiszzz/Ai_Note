---
published: 2026-08-06
title: 神经表征的热带代数几何：基于 Arakelov-Green 测度的图学习描述符
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor.md
source_note: "[[信息源/arXiv cs.LG RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor]]"
source_sha256: bca68580cfcbd36da85dba53168a63feb7b66853db57cd8cfd9f681d09848a3f
original_url: https://arxiv.org/abs/2608.04460
processed: 2026-08-07
language: zh-CN
---

# 神经表征的热带代数几何：基于 Arakelov-Green 测度的图学习描述符

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04460)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor|查看原始文件]]

## 摘要

- 提出基于热带代数几何的无训练几何先验：利用热带 Abel-Jacobi 变换与极化距离，通过环空间增广与商空间构造将空间树转为可嵌入热带雅可比簇的循环度量图。
- 在 Albanese 环面万有覆盖上做连续松弛，避开 NP 困难的整数格 CVP；离散 Arakelov-Green 测度（图拉普拉斯广义逆闭式解）恰好分解为路径度量减未量化极化距离。
- 特征向量提供节点级结构坐标（BREC 上表达力超越 1-WL），特征值谱提供图级签名；在 ACT-4、JML-4、BIL-6 上无需额外参数即可集成进 VAE、GNN、Tree-LSTM 并提升分类精度。

## 正文

三维神经元形态的定量分析需要同时捕捉图拓扑与空间几何。当前的基于消息传递的图神经网络（GNN）受限于 1-Weisfeiler-Lehman（1-WL）测试，限制其捕捉由空间邻近引起的环（cycle）的能力。为解决此问题，我们提出一个基于热带代数几何的无训练几何先验。我们将近期建立的"热带 Abel-Jacobi 变换"和"极化距离"应用于树结构数据的机器学习。我们引入一个结构变换流水线，包括环空间增广和商空间构造，将空间树转化为适合嵌入热带雅可比簇（Tropical Jacobian）的循环度量图。计算精确的热带极化距离需要在整数格上求解 NP 困难的最近向量问题（CVP）。我们不在显式近似（如 Babai 舍入）上依赖带量化误差的方案，而是在 Albanese 环面的万有覆盖上采用连续松弛。我们证明，离散 Arakelov-Green 测度（可通过图拉普拉斯的广义逆以闭式形式计算）在该覆盖上恰好分解为内在路径度量减去未量化的极化距离，从而避免整数格搜索。该度量产生两个描述符：特征向量提供节点级结构坐标，置换不变的特征值谱提供图级签名。在 BREC 基准上，特征向量公式展现出超越 1-WL 极限的表达力。在三维形态数据集（ACT-4、JML-4、BIL-6）上，该谱无需额外可训练参数即可无缝集成到标准架构（VAE、GNN、Tree-LSTM）中，优于显式格近似，并较现有空间模型提高了分类准确率。

## 关键词

#热带几何 #图神经网络 #1-WL #神经元形态 #Arakelov-Green测度
