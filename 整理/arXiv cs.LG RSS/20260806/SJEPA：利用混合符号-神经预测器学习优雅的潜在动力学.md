---
published: 2026-08-06
title: SJEPA：利用混合符号-神经预测器学习优雅的潜在动力学
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors.md
source_note: "[[信息源/arXiv cs.LG RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors]]"
source_sha256: 10aabdeb244f47bd44c3adc6dc8b9ec556749a5a54bc30a2f6d3a5cffacde05f
original_url: https://arxiv.org/abs/2608.04060
processed: 2026-08-07
language: zh-CN
---

# SJEPA：利用混合符号-神经预测器学习优雅的潜在动力学

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04060)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SJEPA- Learning Elegant Latent Dynamics with Hybrid Symbolic-Neural Predictors|查看原始文件]]

## 摘要

- 提出 SJEPA，一个免重建的 JEPA 框架，其学习到的预测表示所诱导的动力学具有紧凑的符号化描述。
- 核心原则是学习最简单且充分的动力学，并形式化证明无约束的算子压缩会直接造成表示塌缩的捷径。
- 摆实验中联合学习发现更简单的符号化动力学，并揭示预测保真度、表示质量、符号化简洁性与符号-神经分配之间的可控权衡。

## 正文

联合嵌入预测架构通过从上下文嵌入预测目标嵌入来学习抽象状态，但其转移模型通常是黑箱式的神经映射。我们提出 SJEPA，一种免重建的 JEPA 框架，它学习到的预测表示所诱导的动力学具有紧凑的符号化描述。其混合转移由一个符号化规律与一个正则化的神经修正项组成，后者负责所选文法之外的动力学。核心原则是学习最简单且充分的动力学：表示约束保留信息丰富、不塌缩的预测坐标，而算子压缩则偏好复杂度低且仍具有预测充分性的符号-神经转移。我们通过诱导动力学复杂度对该原则加以形式化，分析预测坐标的不可辨识性，并证明无约束的算子压缩会直接形成表示塌缩的捷径。该框架同时支持交替的表示-方程学习，以及在固定表示上拟合符号化动力学两种方式。在受控的摆实验中，联合学习发现比事后拟合简单得多的符号化动力学，并具有更低的长时域 rollout 误差与散度，而无约束的单步诊断确实实现了所预测的塌缩捷径。在文法误设下，修正正则化保留了可表示的符号化机制，并将神经部分导向残余动力学。实验结果揭示了预测保真度、表示质量、符号化简洁性与符号-神经分配之间可控的权衡。

## 关键词

#JEPA #符号回归 #表示学习 #潜在动力学 #世界模型
