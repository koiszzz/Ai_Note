---
published: 20260806
title: "InvFlowFD：带流匹配反演的无参考、无背景集感知音乐质量指标"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching.md"
source_note: "[[信息源/arXiv cs.AI RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching]]"
source_sha256: a5e1c8d602493d658e0acb54023db760694749d386349d4fb039536350b75537
original_url: "https://arxiv.org/abs/2608.04142"
processed: 2026-08-06
language: zh-CN

---

# InvFlowFD：带流匹配反演的无参考、无背景集感知音乐质量指标

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Alon Ziv, Harel Pogoda, Yossi Adi
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04142)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching|查看原始文件]]

## 摘要

- 现有评估音乐感知质量的无参考方法缓解配对噪声-干净数据需求，但仍依赖用于计算干净音频样本聚合统计的背景集；本文提出消除此需求的新方法，仅用预训练流匹配骨干实现无背景集、无参考质量估计。
- 证明通过简单欧拉积分的无条件流匹配反演足以检测各种人工失真，并准确对音乐生成模型排序以匹配人类感知判断；引入 InvFlowFD，执行流反演并将一组反演样本与先验分布比较。
- 相对先前工作定量和全面人类研究评估：结果显示 InvFlowFD 与人类对声音失真的感知高度相关，也与生成模型质量相关，同时比现有指标更灵活、限制更少。

## 正文

现有评估音乐感知质量的无参考方法缓解配对噪声-干净数据的需求，但仍依赖背景集（用于计算干净音频样本聚合统计）。在本工作中，我们提出消除此需求的新方法，仅用预训练流匹配（Flow Matching）骨干实现无背景集、无参考质量估计。我们证明通过简单欧拉积分的无条件流匹配反演足以检测各种人工失真，并准确对音乐生成模型排序以匹配人类感知判断。我们引入 InvFlowFD，执行流反演并将一组反演样本与先验分布比较。我们定量和通过全面人类研究评估我们的方法与先前工作。结果表明，InvFlowFD 与人类对声音失真的感知高度相关，也与生成模型质量相关，同时比现有指标更灵活、限制更少。

## 关键词

#音乐质量 #无参考评估 #流匹配 #感知指标 #arXiv