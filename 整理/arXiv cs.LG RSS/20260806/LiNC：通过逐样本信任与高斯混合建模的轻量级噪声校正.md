---
published: 2026-08-06
title: LiNC：通过逐样本信任与高斯混合建模的轻量级噪声校正
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling.md
source_note: "[[信息源/arXiv cs.LG RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling]]"
source_sha256: 7a801ded4672b97bfd7c86558ffd47de8b5df218fee6d21a4f88c18eae785758
original_url: https://arxiv.org/abs/2608.04147
processed: 2026-08-07
language: zh-CN
---

# LiNC：通过逐样本信任与高斯混合建模的轻量级噪声校正

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04147)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/LiNC- Lightweight Noise Correction via Per-Sample Trust and Gaussian Mixture Modeling|查看原始文件]]

## 摘要

- 提出轻量级噪声校正（LiNC）：为每个训练样本添加一个可训练的信任参数，在标准训练循环中学习何时使用观测标签、何时交由模型决定
- 训练目标采用观测标签与模型自身预测分布的凸组合，由逐样本信任参数控制，可使干净与噪声样本的信任值在训练早期分离
- 使用 3 分量高斯混合模型划分干净、模糊与噪声情形，并执行短时软校正与最终硬校正；在 MedMNISTv2 的十个 2D 数据集上、噪声高达 50% 时取得一致精度提升与强误标检测能力

## 正文

标签噪声在医学影像数据集中十分常见，其成因包括标注者间差异、标注错误以及模糊病例等。这会严重削弱使用这些数据集训练的机器学习模型的可靠性与临床有效性。为应对这一挑战，我们提出了轻量级噪声校正（LiNC，Lightweight Noise Correction），它为每个训练样本添加一个单一的可训练信任参数，并在标准训练循环中学习何时采用观测标签、何时交由模型决定。其核心思想是使用观测标签与模型自身预测分布的凸组合进行训练，该组合由逐样本信任参数控制。我们证明，在训练早期阶段，这一目标的梯度会驱使干净样本与噪声样本的信任值向相反方向变化，从而产生可分离的信任分布。我们在信任值上使用 3 分量高斯混合模型（Gaussian Mixture Model）将样本划分为干净、模糊与噪声三种情形，然后对噪声样本执行一段短暂的软校正阶段，最后执行硬校正阶段。在 MedMNISTv2 中十个 2D 数据集上、标签噪声高达 50% 的实验中，LiNC 在精度上取得一致的提升，并展现出强大的误标检测能力。LiNC 的渐近开销可以忽略不计：训练时间复杂度仍由基础网络主导，额外内存随训练集大小线性增长。

## 关键词

#标签噪声 #医学影像 #高斯混合模型 #噪声校正 #LiNC
