---
published: 2026-08-06
title: 基于优化相关特征的CNN-QNN混合模型图像分类
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features.md
source_note: "[[信息源/arXiv cs.CV RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features]]"
source_sha256: a3ca4ad27e7152a8508c92560c0d4ec0ed15d1525964627581f7b69852964a5f
original_url: https://arxiv.org/abs/2608.04379
processed: 2026-08-07
language: zh-CN
---

# 基于优化相关特征的CNN-QNN混合模型图像分类

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04379)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features|查看原始文件]]

## 摘要

- 提出优化作为量子神经网络（QNN）输入的 CNN 特征间相关性的方法：与正交分解预处理不同，有意引入与 QNN 更物理兼容的相关特征，利用量子纠缠表示相关状态的固有优势
- 基于 QNN 输出数学推导与蒙特卡洛模拟，特征间平均相关性为 0.5 时二分类准确率最优；在 CNN 输出上引入相关正则化项，将特征相关矩阵非对角元素推向目标常数
- 在 CIFAR-10（汽车 vs 卡车）、Fashion-MNIST（衬衫 vs 外套）与雷达微多普勒签名（机器狗 vs 非机器人）上，中等相关性一致优于低、高或未调节相关性，并降低准确率方差

## 正文

我们提出一种方法，优化作为量子神经网络（QNN）输入的卷积神经网络（CNN）特征之间的相关性，以提升图像分类准确率。与先前采用正交分解作为预处理的方法不同，我们有意识地引入与 QNN 更物理兼容的相关特征。该设计利用了 QNN 利用量子纠缠表示相关状态的固有优势——这是经典神经网络无法获得的优势。我们假设将特征相关性与 QNN 的纠缠结构对齐能提升二分类性能。基于 QNN 输出的数学推导，蒙特卡洛模拟表明特征间平均相关性为 0.5 时分类准确率最优。为验证这一发现，我们在三个任务上评估量子—经典混合模型：CIFAR-10（汽车 vs 卡车）、Fashion-MNIST（衬衫 vs 外套）和雷达微多普勒签名（机器狗 vs 非机器人）。为调节特征相关性，我们在 CNN 输出上引入相关正则化项，将特征相关矩阵的非对角元素推向目标常数。在所有数据集上，诱导中等相关性一致地比低、高或未调节相关性获得更高准确率，同时降低分类准确率方差。这些结果表明，不修改量子电路、仅施加适度的特征相关性，通过使特征统计与 QNN 的纠缠结构对齐，即可提升分类准确率和稳定性。这项研究凸显了随着可用量子比特增多，QNN 超越经典分类器性能的潜力。

## 关键词

#量子神经网络 #CNN #图像分类 #量子计算
