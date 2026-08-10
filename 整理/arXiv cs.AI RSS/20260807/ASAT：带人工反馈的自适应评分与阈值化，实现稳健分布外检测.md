---
published: 2026-08-07
title: "ASAT：带人工反馈的自适应评分与阈值化，实现稳健分布外检测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ASAT- Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/ASAT- Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection]]"
source_sha256: 92e7b01a86d5620d8c8e5f10f1e350d428913d2c07e8c32ae2c28fec6f39105f
original_url: "https://arxiv.org/abs/2505.02299"
processed: 2026-08-07
language: zh-CN
---

# ASAT：带人工反馈的自适应评分与阈值化，实现稳健分布外检测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Daisuke Yamada, Harit Vishwakarma, Ramya Korlakai Vinayak
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2505.02299)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ASAT- Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection|查看原始文件]]

## 摘要

- 机器学习模型在分布内（ID）数据上训练，部署时常遇到分布外（OOD）输入，在安全关键领域构成严重风险；现有评分函数通常仅在 ID 数据上设置阈值以达到目标真阳性率（TPR），使假阳性率（FPR）不受控，且固定评分函数与阈值缺乏应对演化中 OOD 输入的自适应性。
- 提出 ASAT：一个人在环框架，基于真实世界 OOD 输入在运行时安全更新评分函数与阈值。
- ASAT 在平稳条件下始终最大化 TPR 同时控制 FPR（即使系统随时间自适应）；非平稳条件下方法适应分布漂移，仅在适应期出现短暂 FPR 违规。
- 提供平稳条件下 FPR 控制的理论保证，并在 OpenOOD 基准上大量实证：在维持 FPR 控制的同时取得更高 TPR，优于现有方法。

## 正文

机器学习（ML）模型在分布内（ID）数据上训练，但部署时常遇到分布外（OOD）输入——在安全关键领域构成严重风险。近期工作聚焦设计量化 OOD 不确定性的评分函数，阈值通常仅基于 ID 数据设置以达到目标真阳性率（TPR），因为部署前 OOD 数据有限。然而，这些基于 TPR 的阈值使假阳性率（FPR）不受控制，常导致 OOD 点被误分类为 ID 的高 FPR。此外，固定评分函数与阈值缺乏处理新观察到的、演化中 OOD 输入所需的自适应性，导致次优性能。为应对这些挑战，我们提出 ASAT，一个在环框架，基于真实世界 OOD 输入在运行时安全更新评分函数与阈值。ASAT 在平稳条件下始终最大化 TPR 同时控制 FPR，即使系统随时间自适应。在非平稳条件下，该方法适应分布漂移，仅在适应期出现短暂 FPR 违规。我们提供平稳条件下 FPR 控制的理论保证，并在 OpenOOD 基准上进行大量实证评估，证明我们的方法在维持 FPR 控制的同时取得更高 TPR，优于现有方法。

## 关键词

#分布外检测 #人在环 #自适应阈值 #不确定性
