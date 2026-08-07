---
published: 20260806
title: "超越 QBER 阈值：基于时间 QBER 的机器学习框架用于 BB84 QKD 多攻击检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti.md"
source_note: "[[信息源/arXiv cs.AI RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti]]"
source_sha256: ae964a6eea9f2f40718da54828cd29053a5a991431f0e40492dafaa56e68782f
original_url: "https://arxiv.org/abs/2608.04047"
processed: 2026-08-06
language: zh-CN

---

# 超越 QBER 阈值：基于时间 QBER 的机器学习框架用于 BB84 QKD 多攻击检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Isha, Deepak Singh, Devesh Kumar, S. K Pal, Praful Hambarde, Amit Shukla
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04047)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Beyond the QBER Threshold- A Temporal QBER Based Machine Learning Framework for Multi Attack Detecti|查看原始文件]]

## 摘要

- 传统 BB84 量子密钥分发（QKD）系统依赖固定 11% 量子比特错误率（QBER）阈值检测窃听，但隐蔽攻击可保持在阈值以下同时仍危及信道安全。
- 本文提出基于时间 QBER 的机器学习框架，用于 BB84 QKD 系统中窃听攻击的检测和分类：提取 63 个物理信息时间特征捕捉突发行为、时间不稳定性、基依赖不对称性和 QBER 损失交互。
- 在七种窃听攻击和正常信道场景下评估随机森林、XGBoost 和 SVM-RBF 分类器，XGBoost 最佳（88.01% 准确率，macro F1 0.8803）；对比固定 11% QBER 阈值的 25.82% 准确率和 0.8477 假阴性率，所提框架将 FNR 降至 0.0198。

## 正文

传统 BB84 量子密钥分发（QKD）系统依赖固定 11% 量子比特错误率（QBER）阈值检测窃听。然而，隐蔽攻击可保持在阈值以下同时仍危及信道安全。本文提出一个基于时间 QBER 的机器学习框架，用于 BB84 QKD 系统中窃听攻击的检测和分类。该框架不依赖平均会话级 QBER，而是提取 63 个物理信息时间特征，捕捉突发行为、时间不稳定性、基依赖不对称性和 QBER 损失交互。在含噪声和有损条件下，对七种窃听攻击和正常信道场景评估随机森林、XGBoost 和带径向基函数核的支持向量机（SVM-RBF）分类器。十次独立运行平均，XGBoost 实现最佳性能：88.01%（0.47%）准确率和 0.8803 的 macro F1 分数，SVM-RBF 表现相当，确认所提特征的鲁棒性。作为与常规监控比较的二元攻击对正常检测器评估，固定 11% QBER 阈值仅达 25.82% 准确率，假阴性率（FNR）0.8477，而所提框架将 FNR 降至 0.0198，大幅改进对规避基于阈值监控的隐蔽攻击的检测。基于 SHAP 的可解释性表明，物理信息的时间与信道导出特征对识别窃听策略高度判别。这些结果表明，时间 QBER 驱动的机器学习为 BB84 QKD 系统的多攻击安全监控提供准确、可解释且实用的框架。

## 关键词

#量子密钥分发 #QBER #机器学习 #攻击检测 #arXiv