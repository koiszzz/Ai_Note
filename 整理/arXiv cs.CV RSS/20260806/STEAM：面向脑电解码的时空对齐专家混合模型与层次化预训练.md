---
published: 2026-08-06
title: STEAM：面向脑电解码的时空对齐专家混合模型与层次化预训练
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D.md
source_note: "[[信息源/arXiv cs.CV RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D]]"
source_sha256: cd85f50a4bf68ca8a51638595ac0472b0ab4931b08440e156b412473e77998a6
original_url: https://arxiv.org/abs/2608.02070
processed: 2026-08-07
language: zh-CN
---

# STEAM：面向脑电解码的时空对齐专家混合模型与层次化预训练

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02070)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/STEAM- A Spatio-TEmporal Alignment Mixture-of-Experts Model with Hierarchical Pre-training for EEG D|查看原始文件]]

## 摘要

- 提出 STEAM，一个层次化迁移框架，在脑电（EEG）基础模型中调和通用表示学习与范式特定特化。
- 采用双分支时空编码器，共享软专家混合（SSMoE）模块对齐空间与时间分支，通过紧凑的软槽集合交换互补表示。
- 在七个下游数据集、十四种评估设置上取得所比较方法中的最佳平均排名；层次化预训练可特化到目标范式而无需从头重训。

## 正文

脑机接口（BCI）已广泛应用于运动康复、疾病诊断等神经工程场景。然而，传统神经信号解码算法常受限于泛化能力有限和适应成本高，这推动了人们对 BCI 基础模型的关注。现有方法仍难以同时实现通用迁移性、准确解码和高效的下游适应。我们提出 STEAM，一个层次化迁移框架，在脑电（EEG）基础模型中调和通用表示学习与范式特定特化。该框架实例化为一个双分支时空编码器，其中共享软专家混合（SSMoE）模块对齐空间与时间分支，使互补表示能够通过一组紧凑的软槽（soft slots）交换信息。在七个下游数据集和十四种评估设置上，STEAM 在 FLOPs 衡量的具有竞争力的推理成本下，取得所比较方法中的最佳平均排名。基于 Stage-I 通用初始化，层次化预训练策略进一步将模型特化到目标范式，而无需从头重训，在范式特定的解码准确率上带来一致的提升。

## 关键词

#脑机接口 #EEG #基础模型 #专家混合 #预训练
