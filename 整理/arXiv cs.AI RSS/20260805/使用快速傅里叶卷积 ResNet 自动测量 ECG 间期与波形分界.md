---
published: 2026-08-05
title: "使用快速傅里叶卷积 ResNet 自动测量 ECG 间期与波形分界"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet.md"
source_note: "[[信息源/arXiv cs.AI RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet]]"
source_sha256: ad85d84edc9fab1cca4cc83a8be6c7794336695d526e9835ac519ba9a4fb74c8
original_url: "https://arxiv.org/abs/2608.00058"
processed: 2026-08-05
language: zh-CN
---

# 使用快速傅里叶卷积 ResNet 自动测量 ECG 间期与波形分界

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00058)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet|查看原始文件]]

## 摘要

- PR、QRS 时限和 QT/QTc 等 ECG 间期的准确测量对心脏诊断至关重要，但既有研究主要在小型精选数据库上评估基准点计时误差，而不是大型未筛选队列中的临床间期准确性。
- 论文在 10,646 份临床十二导联 ECG 上评估端到端流程，报告包含偏差、95% 一致性界限、Bootstrap 置信区间和按心律分层误差分析的大规模间期测量研究。
- 波形分界由快速傅里叶卷积 ResNet 完成，将局部时间卷积与基于 FFT 的全局频谱处理结合，并加入寄存器词元进行上下文特征学习。
- 系统 QT 平均绝对误差为 17.5 ms，QRS 时限平均绝对误差为 14.8 ms，心室率平均绝对误差为 0.8 次/分钟；室上性心动过速的 QT 误差显著高于窦性心律。

## 正文

PR、QRS 时限和 QT/QTc 等 ECG 间期的准确测量是心脏诊断的核心。然而，已发表的 ECG 波形分界研究几乎都在小型精选数据库上使用基准点计时误差评估性能，而不是在大型未筛选队列上评估临床间期准确性。

本文在 10,646 份临床十二导联 ECG 上评估完整的端到端流程，并报告首个具有完整统计特征的大规模间期测量准确性研究，包括偏差、95% 一致性界限（Bland–Altman）、Bootstrap 置信区间和按心律分层的误差分析。

底层波形分界由快速傅里叶卷积 ResNet（FFCResNet）完成。该模型将局部时间卷积与通过 FFT 实现的全局频谱处理结合，并加入寄存器词元以学习上下文特征。作者在六个公开数据库上训练 P、QRS 和 T 三个逐波模型，并使用 ECG 专用增强方法。

在 10,646 份 ECG 上，系统的 QT 平均绝对误差为 17.5 ms（95% CI：16.9–18.2），Bland–Altman 偏差为 +8.5 ms；QRS 时限平均绝对误差为 14.8 ms（95% CI：14.6–15.0），偏差为 +12.6 ms；心室率平均绝对误差为 0.8 次/分钟。所有偏差在 Wilcoxon 符号秩检验中均具有统计显著性（p<0.001），但在窦性心律中仍处于已发表的观察者间变异范围内或接近该范围。

按心律分层的分析显示，室上性心动过速的 QT 误差明显高于窦性心动过缓和窦性心律。波形分割在内部数据上的 P、QRS、T Dice 分数分别为 95.5%、98.2% 和 96.1%，跨数据库 Dice 分数分别为 78.1%、85.5% 和 74.2%。

## 关键词

#心电图 #ECG #波形分界 #医学人工智能
