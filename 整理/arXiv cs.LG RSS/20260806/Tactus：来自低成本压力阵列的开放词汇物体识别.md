---
published: 2026-08-06
title: Tactus：来自低成本压力阵列的开放词汇物体识别
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Tactus- Open-Vocabulary Object Recognition from Low-Cost Pressure Arrays.md
source_note: "[[信息源/arXiv cs.LG RSS/Tactus- Open-Vocabulary Object Recognition from Low-Cost Pressure Arrays]]"
source_sha256: 460cc97c65657a8d7038f80e5c3194a3c9792b293b02bb9ef61895ec654b08a3
original_url: https://arxiv.org/abs/2608.04043
processed: 2026-08-07
language: zh-CN
---

# Tactus：来自低成本压力阵列的开放词汇物体识别

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04043)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Tactus- Open-Vocabulary Object Recognition from Low-Cost Pressure Arrays|查看原始文件]]

## 摘要

- Tactus 是仅从压力数据回答文本查询的开放模型，在 STAG 基准上达到 0.771 ± 0.062 top-1，匹敌甚至超越有监督闭集 CNN，且无训练分类头。
- 少数据配方：187 条训练记录、144k 帧掩码自编码器预训练、传感器校准仿射变换，且错误集中于少数接触模糊类别。
- 失败同样被如实报告：跨传感器预训练无增益、视觉协同训练损害触觉、归一化错误流水线静默丢弃 97% 动态范围；权重、代码与记忆层全部开源。

## 正文

电阻式压力阵列是最便宜且出货量最大的触觉传感器，然而触觉表示学习一直集中在将变形凝胶成像的光学传感器上。我们提出 Tactus，一种仅从压力数据回答文本查询的开放模型：在 STAG 基准（27 个物体、留出记录）上，它在四次运行中达到 0.771 ± 0.062 的 top-1（top-3 为 0.935），与数据集有监督闭集 CNN 的 0.76 持平，且在某些情况下更好，而且没有经过训练的分类头。其配方是少数据的：187 条训练记录、在 144k 无标注同传感器帧上的掩码自编码器预训练，以及传感器自身的校准仿射变换——后者恢复的准确率超过所有架构改动之和。发布模型的错误集中在少数接触模糊的类别中，与文本目标几何形状不相关（在 702 个类别对上的 Spearman rho ≤ 0.05），并且在改写甚至裸名查询中仍保持在一个百分点以内；两帧多样化输入即可恢复八帧准确率的 89%。失败也被同样精确地报告：跨传感器预训练池化没有带来收益，视觉协同训练损害了触觉，而一个归一化错误的输入流水线静默丢弃了传感器动态范围的 97% 却仍产生看似合理的中间结果。权重、代码以及该模型所接入的记忆层均开源发布。

## 关键词

#Tactus #触觉感知 #压力阵列 #开放词汇 #少样本学习 #掩码自编码器
