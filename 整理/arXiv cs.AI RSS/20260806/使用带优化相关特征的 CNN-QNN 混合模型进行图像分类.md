---
published: 20260806
title: "使用带优化相关特征的 CNN-QNN 混合模型进行图像分类"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features.md"
source_note: "[[信息源/arXiv cs.AI RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features]]"
source_sha256: 6903b20fca958bc6b691fe7a2d312bf4ceefff0141e949203867381e4c90850d
original_url: "https://arxiv.org/abs/2608.04379"
processed: 2026-08-06
language: zh-CN

---

# 使用带优化相关特征的 CNN-QNN 混合模型进行图像分类

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Minseo Seong, Youngwook Kim
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04379)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Image Classification Using CNN-QNN Hybrid Model with Optimized Correlated Features|查看原始文件]]

## 摘要

- 本文提出优化用作量子神经网络（QNN）输入的卷积神经网络（CNN）特征间相关性以增强图像分类准确率的方法：不像先前方法将正交分解作为预处理，有意引入与 QNN 物理更兼容的相关特征。
- 此设计利用 QNN 利用量子纠缠表示相关状态的固有能力的优势——经典神经网络无法获得的优势；假设将特征相关性与 QNN 纠缠结构对齐改进二元分类性能；蒙特卡洛模拟表明特征间平均相关性 0.5 产生最优分类准确率。
- 在三个任务上评估量子-经典混合模型：CIFAR-10（汽车对卡车）、Fashion-MNIST（衬衫对外套）和雷达微多普勒签名（机器狗对非机器人）；引入 CNN 输出的相关性正则化项，将所有数据集上诱导中等相关性一致改进准确率并降低方差。

## 正文

我们提出一种优化用作量子神经网络（QNN）输入的卷积神经网络（CNN）特征之间相关性以增强图像分类准确率的方法。与先前采用正交分解作为预处理的方法不同，我们有意引入与 QNN 更物理兼容的相关特征。此设计利用 QNN 利用量子纠缠表示相关状态的固有能力的优势——这是经典神经网络无法获得的优势。我们假设将特征相关性与 QNN 的纠缠结构对齐可改进二元分类性能。基于 QNN 输出的数学推导，蒙特卡洛模拟表明特征间平均相关性 0.5 产生最优分类准确率。为验证此发现，我们在三个任务上评估量子-经典混合模型：CIFAR-10（汽车对卡车）、Fashion-MNIST（衬衫对外套）和雷达微多普勒签名（机器狗对非机器人）。为调节特征相关性，我们在 CNN 输出上引入相关性正则化项，将特征相关矩阵的非对角项驱动到目标常数。跨所有数据集，诱导中等相关性相对低、高或未调节相关性一致改进准确率，同时降低分类准确率方差。这些结果表明，在不修改量子电路的情况下施加中等特征相关性，通过将特征统计量与 QNN 纠缠结构对齐，增强分类准确率和稳定性。本研究突出 QNN 在更多量子比特可用时超越经典分类器性能的潜力。

## 关键词

#量子神经网络 #图像分类 #特征相关性 #混合模型 #arXiv