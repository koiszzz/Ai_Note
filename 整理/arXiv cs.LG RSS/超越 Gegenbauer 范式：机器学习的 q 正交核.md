---
title: "超越 Gegenbauer 范式：机器学习的 q 正交核"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Beyond the Gegenbauer Paradigm- q-Orthogonal Kernels for Machine Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Beyond the Gegenbauer Paradigm- q-Orthogonal Kernels for Machine Learning]]"
source_sha256: 8f340f821f50a05a276b4f5b593e64edaab1e07b71726f8c44e3722a9d79e120
original_url: "https://arxiv.org/abs/2608.03482"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 超越 Gegenbauer 范式：机器学习的 q 正交核

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Álvaro Sánchez-Paniagua Ríos、Juan P. Llerena、Alberto Lastra 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03482)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beyond the Gegenbauer Paradigm- q-Orthogonal Kernels for Machine Learning|查看原始文件]]

## 摘要

- 扩展正交多项式核范式：引入基于离散 q-Hermite I 多项式的新族（通过形变参数 q 推广经典 Hermite 多项式的 q 正交多项式类）；正式定义 q-Hermite 核并在 Mercer 定理下确立其有效性。
- 支持向量机（SVM）性能关键依赖核函数选择，它实现数据到高维特征空间的隐式映射；径向基函数（RBF）等经典核仍流行，正交多项式核提供数学可解释替代，可纳入结构化先验知识。
- 核的固有有界性天然防止湮灭与爆炸效应，无需显式缩放机制。
- 20 个基准数据集的大量实验显示所提核相对经典核与其他正交多项式核取得竞争性能，同时提供数值稳定性与计算简单性优势——q 正交多项式构成核设计的有前景方向，桥接数学优雅与实际机器学习应用，提供可进一步扩展到新兴量子计算范式的概念与算法资源；完整实现与实验流水线开源：https://github.com/Kokechacho/SVMs-QSVMs

## 正文

论文编号：arXiv:2608.03482v1（更新类型：new）。以下为摘要全文翻译。

支持向量机（SVM）的性能关键依赖核函数的选择，它实现数据到高维特征空间的隐式映射。虽然径向基函数（RBF）等经典核仍然流行，正交多项式核提供数学上可解释的替代方案，可以纳入结构化的先验知识。本工作通过引入一个基于离散 q-Hermite I 多项式的新族来扩展正交多项式核范式：这是一类通过形变参数 q 推广经典 Hermite 多项式的 q 正交多项式。我们正式定义 q-Hermite 核，并在 Mercer 定理下确立其有效性。该核的固有有界性自然地防止湮灭与爆炸效应，无需显式缩放机制。在 20 个基准数据集上的大量实验表明，所提核相对经典核与其他正交多项式核取得竞争性能，同时在数值稳定性与计算简单性方面提供优势。我们的结果确认，q 正交多项式构成核设计的有前景方向：桥接数学优雅与实际机器学习应用，并提供可进一步扩展到新兴量子计算范式的概念与算法资源。为促进完全可复现性，我们在开放访问的 GitHub 仓库提供完整实现与实验流水线：https://github.com/Kokechacho/SVMs-QSVMs

## 关键词

#支持向量机 #正交多项式核 #q-Hermite #核方法
