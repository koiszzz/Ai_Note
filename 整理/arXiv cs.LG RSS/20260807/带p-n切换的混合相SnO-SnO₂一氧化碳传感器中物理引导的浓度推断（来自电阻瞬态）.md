---
published: 2026-08-07
title: "带 p-n 切换的混合相 SnO-SnO₂ 一氧化碳传感器中物理引导的浓度推断（来自电阻瞬态）"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Physics-Guided Concentration Inference from Resistance Transients in a Mixed-Phase SnO-SnO$_2$ Carbo.md"
source_note: "[[信息源/arXiv cs.LG RSS/Physics-Guided Concentration Inference from Resistance Transients in a Mixed-Phase SnO-SnO$_2$ Carbo]]"
source_sha256: ea706ce84c5217ad012485813a8c58417ad1f89b7d861b83fd7892b078152845
original_url: "https://arxiv.org/abs/2605.23971"
processed: 2026-08-07
language: zh-CN
---

# 带 p-n 切换的混合相 SnO-SnO₂ 一氧化碳传感器中物理引导的浓度推断（来自电阻瞬态）

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Sani Biswas, Preetam Singh, Amit Kumar Gangwar
> - **发布时间**：2026-08-07
> - **分类**：physics.chem-ph
> - **原文**：[打开链接](https://arxiv.org/abs/2605.23971)

## 摘要

- 提出物理引导的机器学习框架，从实验测量的混合相 SnO-SnO₂ 材料气体传感器（具温度依赖 p-n 切换行为）的电阻瞬态推断一氧化碳浓度。
- 循环级瞬态响应通过物理可解释描述符表示，并辅以紧凑快速傅里叶变换（FFT）与离散小波变换（DWT）摘要；用防泄漏分组交叉验证分别研究 p 型与 n 型传感机制的多元浓度分类与连续浓度回归。
- 两机制下融合特征整体性能最强，物理引导描述符块也高度竞争，表明主导浓度信息已编码在物理有意义的瞬态动力学中。
- p 型分支浓度类判别最佳（融合随机森林分类器约 96.5% 准确率），n 型分支定量浓度估计最佳（融合随机森林回归器 MAE≈1.48 ppm、R²≈0.992）；清晰双机制行为：p 型利于分类、n 型利于高保真回归。

## 正文

本文提出一个物理引导的机器学习框架，用于从实验测量的混合相 SnO-SnO₂ 材料气体传感器（表现出温度依赖 p-n 切换行为）的电阻瞬态推断一氧化碳浓度。循环级瞬态响应通过物理可解释的描述符表示，并辅以紧凑的快速傅里叶变换（FFT）与离散小波变换（DWT）摘要。研究使用防泄漏的分组交叉验证，分别研究 p 型与 n 型传感机制的多元浓度分类与连续浓度回归。在两个机制中，融合特征提供最强的整体性能，而物理引导描述符块保持高度竞争力，表明主导浓度信息已经编码在物理有意义的瞬态动力学中。p 型分支显示最佳的浓度类判别，融合随机森林分类器达到约 96.5% 的准确率；n 型分支产生最佳的定量浓度估计，融合随机森林回归器实现 MAE≈1.48 ppm 与 R²≈0.992。这些结果揭示清晰的双机制行为：p 型传感尤其利于分类，而 n 型传感更利于高保真回归。更广泛地，研究证明防泄漏、循环级、物理引导的机器学习可以将传统气体传感分析扩展到单一响应度量之外，同时保持物理可解释性。

## 关键词

气体传感、物理引导机器学习、SnO-SnO₂、浓度推断、p-n 切换
