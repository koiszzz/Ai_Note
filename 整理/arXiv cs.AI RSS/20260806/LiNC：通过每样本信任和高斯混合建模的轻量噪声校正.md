---
published: 20260806
title: "LiNC：通过每样本信任和高斯混合建模的轻量噪声校正"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling]]"
source_sha256: 0f50c74b2fae8100bfa365bed9a8d7d4219aaf7c9ca45916b6e6920fa16f0628
original_url: "https://arxiv.org/abs/2608.04147"
processed: 2026-08-06
language: zh-CN

---

# LiNC：通过每样本信任和高斯混合建模的轻量噪声校正

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abhishek Moturu, Babak Taati, Anna Goldenberg
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04147)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling|查看原始文件]]

## 摘要

- 标签噪声在医学影像数据集中常见，原因包括评分者间变异性、标注错误和模糊案例，可严重破坏用这些数据集训练的机器学习模型的可靠性和临床有效性。
- 本文引入轻量噪声校正（LiNC），为每个训练样本添加单个可训练信任参数，在标准训练循环中学习何时使用观测标签、何时服从模型：用观测标签与模型自身预测分布的凸组合训练，由每样本信任参数控制。
- 证明此目标的梯度在早期训练阶段对干净与噪声样本驱动信任值相反方向，产生可分离信任分布；用 3 分量高斯混合模型分离为干净、模糊和噪声案例，执行噪声案例的短软校正阶段和最终硬校正阶段；MedMNISTv2 十个 2D 数据集高达 50% 标签噪声实验显示一致准确率增益和强误标检测。

## 正文

标签噪声在医学影像数据集中常见，原因包括评分者间变异性、标注错误和模糊案例。这可能严重破坏用这些数据集训练的机器学习模型的可靠性和临床有效性。为应对此挑战，我们引入轻量噪声校正（Lightweight Noise Correction，LiNC），为每个训练样本添加单个可训练信任参数，并在标准训练循环中学习何时使用观测标签、何时服从模型。关键思想是用观测标签与模型自身预测分布的凸组合训练，由每样本信任参数控制。我们证明此目标的梯度在早期训练阶段对干净与噪声样本驱动信任值相反方向，产生可分离信任分布。我们用 3 分量高斯混合模型分离为干净、模糊和噪声案例，然后对噪声案例执行短软校正阶段和最终硬校正阶段。MedMNISTv2 十个 2D 数据集高达 50% 标签噪声实验显示一致准确率增益和强误标检测。LiNC 增加可忽略渐近开销：训练时复杂度仍由基础网络主导，额外内存随训练集大小线性增长。

## 关键词

#标签噪声 #医学影像 #噪声校正 #高斯混合模型 #arXiv