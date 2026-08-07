---
published: 2026-08-06
title: Energy-Tweedie：分数与分数相遇，能量与能量相遇
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Energy-Tweedie- Score meets Score, Energy meets Energy.md
source_note: "[[信息源/arXiv cs.LG RSS/Energy-Tweedie- Score meets Score, Energy meets Energy]]"
source_sha256: 2524390a17997fd5ab06d20195010f78f3ad69d2e90be01e186dae860a8bbb09
original_url: https://arxiv.org/abs/2512.23818
processed: 2026-08-07
language: zh-CN
---

# Energy-Tweedie：分数与分数相遇，能量与能量相遇

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.23818)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Energy-Tweedie- Score meets Score, Energy meets Energy|查看原始文件]]

## 摘要

- 将 Tweedie 公式的视角从高斯噪声推广到吉布斯（基于能量的）噪声分布族
- 推导 Energy-Tweedie 恒等式：核评分规则的路径导数恢复含噪边际的 Stein 分数
- 提供后验样本到分数估计的路径、估计未知噪声参数的准则，并支持扩散式采样

## 正文

去噪与分数估计通过 Tweedie 公式经典地联系在一起，该公式将高斯噪声下的后验均值与含噪边际的 Stein 分数（Stein score）联系起来。在本文中，我们将这一视角从高斯噪声扩展到一大类吉布斯（基于能量的）噪声分布，并以广义高斯族作为贯穿全篇的例子。

我们推导出 Energy-Tweedie 恒等式：当通过评分规则（scoring rules）的视角审视去噪后验时，由噪声势能定义的核评分规则的路径导数能够恢复含噪边际的 Stein 分数。该规则的正确性（propriety）仅由噪声势能决定。因此，高斯噪声、后验均值、平方损失与 Tweedie 公式之间熟悉的对应关系，被提升为吉布斯噪声分布、完整后验定律、核评分规则与 Energy-Tweedie 恒等式之间的分布级对应关系，从而为每个噪声势能产生一个 Tweedie 式的关系。

在该恒等式的诸多推论中：它为分数估计提供了从后验样本到分数的路径；给出了估计未知噪声参数的原则性准则；并支持沿用户选择的噪声参数空间路径进行扩散式采样，为近期使用评分规则训练的生成方法提供了基于分数的视角。

## 关键词

#分数匹配 #Tweedie公式 #能量模型 #扩散模型 #评分规则
