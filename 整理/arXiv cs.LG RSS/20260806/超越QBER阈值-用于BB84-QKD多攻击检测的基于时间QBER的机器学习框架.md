---
published: 2026-08-06
title: 超越QBER阈值：用于BB84-QKD多攻击检测的基于时间QBER的机器学习框架
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti.md
source_note: "[[信息源/arXiv cs.LG RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti]]"
source_sha256: 6f87474412bc293a32e5a990c8f1bca97301bfb7797b726a5c0e9e4592ff888f
original_url: https://arxiv.org/abs/2608.04047
processed: 2026-08-07
language: zh-CN
---

# 超越QBER阈值：用于BB84-QKD多攻击检测的基于时间QBER的机器学习框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04047)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti|查看原始文件]]

## 摘要

- 提出基于时间 QBER 的机器学习框架，检测并分类 BB84 QKD 系统中潜伏在固定 11% QBER 阈值之下的隐蔽窃听攻击。
- 提取 63 个物理信息启发的时域特征（突发行为、时间不稳定性、基相关不对称性、QBER 损失交互）；XGBoost 最优，准确率 88.01%、宏 F1 0.8803。
- 相比固定阈值监测（准确率 25.82%、FNR 0.8477），框架将漏报率降至 0.0198；SHAP 可解释性确认物理信息特征高度判别。

## 正文

传统的 BB84 量子密钥分发（Quantum Key Distribution, QKD）系统依赖固定的 11% 量子比特错误率（Quantum Bit Error Rate, QBER）阈值来检测窃听。然而，隐蔽（stealthy）攻击可以保持在该阈值以下，同时仍然危及信道安全。

本文提出一个基于时间 QBER 的机器学习框架，用于检测和分类 BB84 QKD 系统中的窃听攻击。该框架不依赖平均会话级（session-level）QBER，而是提取 63 个物理信息启发的时域（temporal）特征，捕捉突发行为（burst behavior）、时间不稳定性（temporal instability）、基相关不对称性（basis dependent asymmetry）和 QBER 损失交互（QBER loss interactions）。

在噪声和有损（lossy）条件下，针对七种窃听攻击和一种正常信道场景，评估了随机森林（Random Forest）、XGBoost 和带径向基函数核的支持向量机（SVM-RBF）分类器。在十次独立运行的平均下，XGBoost 以 88.01%（0.47%）的准确率和 0.8803 的宏 F1 分数取得最佳性能，而 SVM-RBF 表现相当，证实了所提出特征的鲁棒性。

作为用于与传统监测比较的二元攻击-正常检测器评估时，固定 11% QBER 阈值仅达到 25.82% 的准确率，漏报率（False Negative Rate, FNR）为 0.8477，而所提出的框架将 FNR 降至 0.0198，大幅改善了对抗逃避阈值监测的隐蔽攻击的检测。基于 SHapley 加性解释（SHAP）的可解释性表明，物理信息启发的时域和信道派生特征对识别窃听策略具有高度判别力。

这些结果表明，时间 QBER 驱动的机器学习为 BB84 QKD 系统中的多攻击安全监测提供了准确、可解释且实用的框架。

## 关键词

#量子密钥分发 #QKD #QBER #机器学习 #窃听检测
