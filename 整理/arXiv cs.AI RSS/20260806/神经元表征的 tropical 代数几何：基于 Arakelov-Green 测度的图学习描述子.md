---
published: 2026-08-06
title: 神经元表征的 tropical 代数几何：基于 Arakelov-Green 测度的图学习描述子
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor.md
source_note: "[[信息源/arXiv cs.AI RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor]]"
source_sha256: c3f7ab17eb0c9dc409edc055e82832e2c95e35d7623935c5f115d4d4f2b23229
original_url: https://arxiv.org/abs/2608.04460
processed: 2026-08-07
language: zh-CN
---

# 神经元表征的 tropical 代数几何：基于 Arakelov-Green 测度的图学习描述子

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04460)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Tropical Algebraic Geometry for Neuronal Representations- An Arakelov-Green Measure Based Descriptor|查看原始文件]]

## 摘要

- 3D 神经元形态的定量分析需要同时捕捉图拓扑与空间几何，而现有的消息传递图神经网络（GNN）受 1-Weisfeiler-Lehman（1-WL）测试限制，难以捕捉由空间邻近引起的环
- 提出基于 tropical 代数几何的免训练几何先验，将近期建立的 tropical Abel-Jacobi 变换与极化距离（polarization distance）应用于树形结构数据的机器学习
- 引入结构变换流水线（环空间增广与商空间构造），将空间树转换为适合嵌入 Tropical Jacobian 的循环度量图；为避免整数格上 NP 难的最近向量问题（CVP），在 Albanese 环面的万有覆盖上采用连续松弛
- 离散 Arakelov-Green 测度通过图拉普拉斯广义逆的闭式解计算，精确分解为固有路径度量减去该覆盖上的未量化极化距离；在 BREC 基准上特征向量公式展现出超越 1-WL 的表达力，并在 ACT-4、JML-4、BIL-6 等 3D 形态数据集上无需额外可训练参数即提升分类精度

## 正文

3D 神经元形态的定量分析要求同时捕捉图拓扑与空间几何。当前的消息传递图神经网络（GNN）受 1-Weisfeiler-Lehman（1-WL）测试的限制，难以捕捉由空间邻近性诱导的环。为解决这一问题，我们提出一种基于 tropical 代数几何的免训练几何先验。我们将近期建立的 tropical Abel-Jacobi 变换和极化距离（polarization distances）应用于树形结构数据的机器学习。

我们引入一个结构变换流水线，包含环空间增广（cycle space augmentation）和商空间构造（quotient space construction），将空间树转换为适合嵌入 Tropical Jacobian 的循环度量图。计算精确的 tropical 极化距离需要求解整数格上的 NP 难最近向量问题（CVP）。我们没有依赖带量化误差的显式近似（例如 Babai 舍入），而是在 Albanese 环面的万有覆盖上采用连续松弛。

我们证明，通过图拉普拉斯算子的广义逆以闭式形式计算的离散 Arakelov-Green 测度，在该覆盖上能精确分解为固有路径度量减去未量化的极化距离，从而避免了整数格搜索。该度量产生两个描述子：特征向量提供节点级结构坐标，置换不变的特征值谱提供图级签名。

在 BREC 基准上，特征向量公式展示了超越 1-WL 极限的表达力。在 3D 形态数据集（ACT-4、JML-4、BIL-6）上，该谱无需额外可训练参数即可无缝集成到标准架构（VAE、GNN、Tree-LSTM）中，优于显式格近似，并在现有空间模型的基础上提高了分类精度。

## 关键词

#Tropical几何 #图神经网络 #神经元形态 #Arakelov-Green测度
