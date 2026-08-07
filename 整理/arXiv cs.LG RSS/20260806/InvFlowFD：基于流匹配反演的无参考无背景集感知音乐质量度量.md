---
published: 2026-08-06
title: InvFlowFD：基于流匹配反演的无参考无背景集感知音乐质量度量
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching.md
source_note: "[[信息源/arXiv cs.LG RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching]]"
source_sha256: b7aa2a4d44ea609997e166efa69898332177398722bdd0e02ca472bf7cb99d72
original_url: https://arxiv.org/abs/2608.04142
processed: 2026-08-07
language: zh-CN
---

# InvFlowFD：基于流匹配反演的无参考无背景集感知音乐质量度量

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04142)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/InvFlowFD- Reference-Free and Background-Set-Free Perceptual Music Quality Metric with Flow Matching|查看原始文件]]

## 摘要

- 提出 InvFlowFD，仅使用预训练 Flow Matching 骨干实现无参考、无背景集的音乐质量估计
- 通过简单欧拉积分的无条件 Flow Matching 反演即可检测各种人为失真并对生成模型准确排序
- 与人类对声音失真的感知及生成模型质量高度相关，且比现有度量更灵活、限制更少

## 正文

现有评估音乐感知质量的无参考方法免除了对成对带噪-干净数据的需求，但它们仍然依赖背景集——用于计算干净音频样本聚合统计量的集合。在本工作中，我们提出一种新颖的方法，消除这一需求，仅使用预训练的 Flow Matching 骨干即可实现无背景集、无参考的质量估计。我们证明，通过简单欧拉积分进行的无条件 Flow Matching 反演足以检测各种人为失真，并能依据人类感知判断对音乐生成模型进行准确排名。我们引入 InvFlowFD，它执行流反演，并将一组反演样本与先验分布进行比较。我们与先前工作进行了定量评估，并开展了详尽的人工研究。结果表明，InvFlowFD 与人类对声音失真的感知以及生成模型的质量高度相关，同时比现有度量更灵活、限制更少。

## 关键词

#InvFlowFD #流匹配 #音乐质量评估 #无参考度量 #音频生成 #感知质量
