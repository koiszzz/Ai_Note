---
published: 2026-08-06
title: Just Repair：用于时间序列异常检测的最小去噪网络
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection.md
source_note: "[[信息源/arXiv cs.LG RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection]]"
source_sha256: 1694be3b75335e33d45145ad4df1f8fba00fbcd09557ecc7a80a8a5bb1a77d44
original_url: https://arxiv.org/abs/2604.17388
processed: 2026-08-07
language: zh-CN
---

# Just Repair：用于时间序列异常检测的最小去噪网络

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.17388)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection|查看原始文件]]

## 摘要

- 提出 JuRe，仅由单个深度可分离卷积残差块组成的极简异常检测器，推理打分无学习参数
- TSB-AD 多变量基准与 UCR 单变量档案均排名第二，且领先所有神经基线；运行速度约为 AxonAD 的 20 倍
- 消融与线性流形实验支持其几何解释，但需注意数据集层面推断的局限性

## 正文

时间序列异常检测器已变得日益复杂，融入了注意力机制、对抗训练与随机潜变量。然而，尚不清楚检测实际需要其中多少机制。我们用一个刻意保持极简的检测器——JuRe（Just Repair）——来检验这一问题：它由单个深度可分离卷积残差块组成，训练用于修复高斯损坏、通道掩蔽的窗口，推理时通过一个无学习参数的固定结构差异函数打分。JuRe 在 TSB-AD 多变量基准上排名第二（180 条序列上 AUC-PR 0.404），在 UCR 单变量档案上同样排名第二（250 条序列上 AUC-PR 0.201），并领先所有神经基线。在 TSB-AD 上，JuRe 的运行速度约为该基准上排名最高的方法之一 AxonAD 的 $20\times$ 倍。全基准消融表明，移除高斯损坏会使 AUC-PR 下降 0.046，而所评估架构变体之间的 AUC-PR 跨度至多为 0.017。一个合成线性流形实验为该几何解释提供了部分证据：异常分数与真实的流形外距离相关（Pearson $r=0.725$），且随着异常幅度增大，修复方向与真实投影的对齐程度越来越高。经 Holm 校正的 Wilcoxon 符号秩检验发现，与 25 个基线中的 20 个存在显著差异，尽管序列间的相关性限制了数据集层面的解释。代码见 https://github.com/iis-esslingen/JuRe。

## 关键词

#时间序列 #异常检测 #去噪网络 #深度可分离卷积 #JuRe #基准测试
