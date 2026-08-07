---
published: 20260806
title: "Just Repair：时间序列异常检测的最小去噪网络"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection]]"
source_sha256: 02d2084a5adbb7fe4341f1dbc34f6c67c846f33fea77680c922b3aa7ca511728
original_url: "https://arxiv.org/abs/2604.17388"
processed: 2026-08-06
language: zh-CN

---

# Just Repair：时间序列异常检测的最小去噪网络

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kadir-Kaan \"Ozer, Ren\'e Ebeling, Markus Enzweiler
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.17388)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Just Repair- A Minimal Denoising Network for Time Series Anomaly Detection|查看原始文件]]

## 摘要

- 时间序列异常检测器日益复杂，融入注意力机制、对抗训练和随机潜在变量，但尚不清楚检测实际需要多少机制；本文用 JuRe（Just Repair）测试此问题，一个刻意最小的检测器：单一深度可分离卷积残差块，训练修复高斯损坏、通道掩蔽窗口，推理时用无学习参数的固定结构差异函数评分。
- JuRe 在 TSB-AD 多元基准排名第二（180 个序列 AUC-PR 0.404），UCR 单变量档案排名第二（250 个序列 AUC-PR 0.201），领先所有神经基线；TSB-AD 上运行速度约为该基准顶级方法 AxonAD 的 20 倍。
- 全基准消融显示移除高斯损坏使 AUC-PR 降低 0.046，而跨评估架构变体 AUC-PR 最多跨越 0.017；合成线性流形实验提供此几何解释的部分证据：异常分数与真实流形外距离相关（Pearson r=0.725）。

## 正文

时间序列异常检测器日益复杂，融入注意力机制、对抗训练和随机潜在变量。然而，尚不清楚检测实际需要多少机制。我们用 JuRe（Just Repair）测试此问题，一个刻意最小的检测器：单一深度可分离卷积残差块，训练修复高斯损坏、通道掩蔽窗口，推理时用无学习参数的固定结构差异函数评分。JuRe 在 TSB-AD 多元基准排名第二（180 个序列 AUC-PR 0.404），在 UCR 单变量档案排名第二（250 个序列 AUC-PR 0.201），领先所有神经基线。TSB-AD 上，JuRe 运行速度约为该基准顶级方法 AxonAD 的 20 倍。全基准消融显示，移除高斯损坏使 AUC-PR 降低 0.046，而跨评估架构变体 AUC-PR 最多跨越 0.017。合成线性流形实验为此几何解释提供部分证据：异常分数与真实流形外距离相关（Pearson r=0.725），且异常幅度增长时修复方向与真实投影日益对齐。带 Holm 校正的 Wilcoxon 符号秩检验发现对 25 个基线中的 20 个显著差异，尽管序列间依赖限制数据集级解释。代码可在此获取：https://github.com/iis-esslingen/JuRe。

## 关键词

#异常检测 #时间序列 #去噪 #最小模型 #arXiv