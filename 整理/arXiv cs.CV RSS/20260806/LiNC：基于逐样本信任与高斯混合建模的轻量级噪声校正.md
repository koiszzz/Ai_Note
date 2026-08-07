---
published: 2026-08-06
title: LiNC：基于逐样本信任与高斯混合建模的轻量级噪声校正
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling.md
source_note: "[[信息源/arXiv cs.CV RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling]]"
source_sha256: 3c9e9d86a99c1a942aef590780c62b77be3e2a47dfead694c34855ddce504aac
original_url: https://arxiv.org/abs/2608.04147
processed: 2026-08-07
language: zh-CN
---

# LiNC：基于逐样本信任与高斯混合建模的轻量级噪声校正

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04147)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling|查看原始文件]]

## 摘要

- 提出 LiNC（轻量级噪声校正）：为每个训练样本添加单一可训练信任参数，用观测标签与模型预测分布的凸组合训练，学习何时信任标签、何时交给模型。
- 训练早期梯度将干净与带噪样本的信任值推向相反方向；用三分量高斯混合模型将样本分为干净、模糊、带噪三类，随后执行软校正与硬校正阶段。
- 在 MedMNISTv2 十个 2D 数据集、最高 50% 标签噪声下一致提升准确率并强检出误标；额外内存随训练集规模线性增长。

## 正文

由于评估者间差异、标注错误和模糊病例等因素，标签噪声在医学影像数据集中很常见。这会严重损害使用这些数据集训练的机器学习模型的可靠性和临床有效性。

为应对这一挑战，我们提出轻量级噪声校正（Lightweight Noise Correction, LiNC），它为每个训练样本添加一个可训练的信任参数，并在标准训练循环中学习何时使用观测标签、何时将决定权交给模型。关键思想是用观测标签与模型自身预测分布的凸组合进行训练，由逐样本信任参数控制。

我们表明，在训练早期，该目标的梯度会将干净样本与带噪样本的信任值推向相反方向，产生可分离的信任分布。我们使用三分量高斯混合模型对信任值建模，将其分为干净、模糊和带噪三类，然后对带噪样本执行简短的软校正阶段，最后执行硬校正阶段。

在 MedMNISTv2 的十个 2D 数据集上、标签噪声高达 50% 的情况下进行实验，显示准确率一致提升且错误标注检测能力强。LiNC 增加的开销渐近可忽略：训练时复杂度仍由基础网络主导，额外内存随训练集规模线性增长。

## 关键词

#标签噪声 #噪声校正 #医学影像 #高斯混合模型
