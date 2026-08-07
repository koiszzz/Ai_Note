---
published: 2026-08-06
title: NodeJEPA：面向节点级图自监督学习的结构条件潜空间预测
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning|查看原始文件]]"
source_sha256: 84273a8037c54dedfa072f03ea0e5add0e9fe74c8450f9c9762d412f5dd039f9
original_url: https://arxiv.org/abs/2608.04381
processed: 2026-08-07
language: zh-CN
---

# NodeJEPA：面向节点级图自监督学习的结构条件潜空间预测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04381)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NodeJEPA- Structure-Conditioned Latent Prediction for Node-Level Graph Self-Supervised Learning|查看原始文件]]

## 摘要

- 图上的自监督学习主要依赖依赖精心设计增强的对比方法或在输入空间重建节点属性的生成方法，两者都可能将表示与低层输入统计而非关系结构纠缠在一起
- 提出 NodeJEPA，面向节点级图自监督学习的联合嵌入预测架构：掩码结构感知的 k 跳自我子图，上下文编码器预测掩码节点的潜在表示，目标来自 EMA 更新的目标编码器并带停止梯度
- 在标准节点分类基准的线性探测与微调协议下评估，并在掩码、预测与正则化设计选择上进行消融，代码已公开

## 正文

图上的自监督学习在很大程度上由两类方法塑造：依赖精心设计增强的对比方法，以及在输入空间中重建节点属性的生成方法。这两种范式都可能使表示与低层输入统计而非关系结构纠缠在一起。联合嵌入预测架构（JEPA）则通过预测潜在目标而非重建输入来学习。近期工作探索了这一思想在图级表示学习中的应用，但如何为节点级任务设计 JEPA 风格的目标，以及预测器应该以哪些结构信号为条件，仍不太清楚。我们提出 NodeJEPA，一种用于节点级图自监督学习的联合嵌入预测架构。NodeJEPA 掩码结构感知的 k 跳自我子图，并训练一个上下文编码器来预测被掩码节点的潜在表示。这些目标来自带停止梯度的 EMA 更新目标编码器。一个结构条件预测器通过交叉注意力整合谱与中心性描述符。方差、协方差和拉普拉斯谱正则化器有助于稳定嵌入几何，一个可选的课程方案在训练过程中逐步增加掩码难度。由于预测发生在潜在空间，NodeJEPA 不依赖输入重建或手工设计的图增强。我们在线性探测和微调协议下对标准节点分类基准评估了 NodeJEPA，并对掩码、预测和正则化设计选择进行了消融。我们的研究为图上节点级 JEPA 风格潜在预测提供了实用配方，并阐明了结构条件化何时有助于表示学习。代码、配置和评估脚本已在 https://github.com/OliverZ-dot/Node-Jepa 公开提供。

## 关键词

#图神经网络 #自监督学习 #JEPA #潜空间预测 #节点分类
