---
title: "用快速傅里叶卷积 ResNet 实现自动化 ECG 间期测量与波形界定"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet.md"
source_note: "[[信息源/arXiv cs.LG RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet]]"
source_sha256: 5462ebdc8d18479c16b1724b1580955e2715f3a0edf43ae8084bdbb104fe0229
original_url: "https://arxiv.org/abs/2608.00058"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 用快速傅里叶卷积 ResNet 实现自动化 ECG 间期测量与波形界定

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Farhan Adam Mukadam、Harshit Mishra、Nachiket Makwana 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00058)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Automated ECG Interval Measurement and Wave Delineation Using Fast Fourier Convolution ResNet|查看原始文件]]

## 摘要

- 在 10,646 份临床 12 导联 ECG 上评估完整端到端流水线，报告首个大规模间期测量准确率研究，含完整统计刻画：偏差、95% 一致性界限（Bland-Altman）、自助置信区间与心律分层误差分析。
- ECG 间期（PR、QRS 时长与 QT/QTc）准确测量是心脏诊断核心，但已发表 ECG 界定文献几乎只在小策展数据库上以基准点定时误差评估性能，而非在大规模未选择队列上的临床间期准确率。
- 底层界定由快速傅里叶卷积 ResNet（FFCResNet）执行：用 FFT 经全局频谱处理适配局部时间卷积，并用寄存器 token 增强上下文特征学习；三个逐波模型（P、QRS 与 T）在六个公开数据库上以 ECG 特定增强训练。
- 10,646 份 ECG 上：QT MAE 17.5 ms（95% CI：16.9–18.2），Bland-Altman 偏差 +8.5 ms（LoA：−68.5 至 +85.5 ms）；QRS 时长 MAE 14.8 ms（95% CI：14.6–15.0），偏差 +12.6 ms（LoA：−12.3 至 +37.6 ms）；心室率 MAE 0.8 次/分；所有偏差 Wilcoxon 符号秩检验统计显著（p<0.001），但在窦性心律下保持于或接近已发表观察者间变异界；心律分层分析揭示室上性心动过速 QT 误差显著更高（SVT MAE：75.0 ms；AVRT MAE：85.3 ms，对比窦性心动过缓 9.3 ms 与窦性心律 8.9 ms），提供部署范围诚实刻画；波形分割 P、QRS、T 内部 Dice 95.5%、98.2%、96.1%，跨库 78.1%、85.5%、74.2%。

## 正文

论文编号：arXiv:2608.00058v2（更新类型：replace-cross）。以下为摘要全文翻译。

准确测量 ECG 间期（包括 PR、QRS 时长与 QT/QTc）是心脏诊断的核心，然而已发表的 ECG 界定文献几乎只在小策展数据库上以基准点定时误差评估性能，而非在大规模未选择队列上的临床间期准确率。我们通过在 10,646 份临床 12 导联 ECG 上评估一个完整端到端流水线弥合这一差距，并报告首个大规模间期测量准确率研究，含完整统计刻画：偏差、95% 一致性界限（Bland-Altman）、自助置信区间与心律分层误差分析。底层界定由快速傅里叶卷积 ResNet（FFCResNet）执行：通过 FFT 以全局频谱处理适配局部时间卷积，并用寄存器 token 增强上下文特征学习。三个逐波模型（P、QRS 与 T）在六个公开数据库上以 ECG 特定增强训练。在 10,646 份 ECG 上，系统实现 QT MAE 17.5 ms（95% CI：16.9–18.2），Bland-Altman 偏差 +8.5 ms（LoA：−68.5 至 +85.5 ms）；QRS 时长 MAE 14.8 ms（95% CI：14.6–15.0），偏差 +12.6 ms（LoA：−12.3 至 +37.6 ms）；心室率 MAE 0.8 次/分。所有偏差经 Wilcoxon 符号秩检验统计显著（p<0.001），但在窦性心律下保持于或接近已发表的观察者间变异界限。心律分层分析揭示室上性心动过速的 QT 误差显著更高（SVT MAE：75.0 ms；AVRT MAE：85.3 ms），对比窦性心动过缓（9.3 ms）与窦性心律（8.9 ms），为部署范围提供诚实刻画。波形分割实现 P、QRS 与 T 波的内部 Dice 分数 95.5%、98.2% 与 96.1%，跨数据库 Dice 分数 78.1%、85.5% 与 74.2%。

## 关键词

#心电图 #间期测量 #波形界定 #FFCResNet
