---
published: 2026-08-06
title: STEAM：面向EEG解码的时空对齐混合专家模型与分层预训练
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D.md
source_note: "[[信息源/arXiv cs.LG RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D]]"
source_sha256: 8033200dec960e7d87cf415e9deacefd08b1a69bb9b8ed9e1398ffbde4cd7a96
original_url: https://arxiv.org/abs/2608.02070
processed: 2026-08-07
language: zh-CN
---

# STEAM：面向EEG解码的时空对齐混合专家模型与分层预训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02070)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D|查看原始文件]]

## 摘要

- 脑机接口（BCI）基础模型面临通用可迁移性、准确解码与高效下游适应难以兼顾的问题。
- STEAM 是一种分层迁移框架，通过双分支时空编码器中的共享软混合专家（SSMoE）模块对齐空间与时间分支。
- 在七个下游数据集、十四个评估设置上取得最佳平均排名，分层预训练在范式特定解码精度上带来一致提升。

## 正文

脑机接口（BCI）已被广泛应用于运动康复、疾病诊断及其他神经工程场景。然而，传统的神经信号解码算法常常面临泛化能力有限和适应成本高的问题，这促使人们近来对 BCI 基础模型产生兴趣。现有方法仍难以同时实现通用的可迁移性、准确的解码和高效的下游适应。我们提出 STEAM，一种分层迁移框架，它在 EEG 基础模型中调和了通用表示学习与范式特化。该框架被实例化为一个双分支时空编码器，其中共享软混合专家（SSMoE）模块对齐空间和时间分支，使互补表示能够通过一组紧凑的软槽（soft slots）交换信息。在七个下游数据集和十四种评估设置中，STEAM 以可比较的 FLOPs 推理成本取得了对比方法中的最佳平均排名。在 Stage-I 通用初始化的基础上，分层预训练策略进一步将模型特化到目标范式而无需从头重新训练，在范式特定解码精度上带来一致的提升。

## 关键词

#STEAM #EEG解码 #混合专家 #脑机接口 #基础模型 #预训练
