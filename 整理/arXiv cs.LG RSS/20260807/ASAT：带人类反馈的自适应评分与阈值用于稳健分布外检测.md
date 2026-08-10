---
published: 2026-08-07
title: "ASAT：带人类反馈的自适应评分与阈值用于稳健分布外检测"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ASAT- Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection.md"
source_note: "[[信息源/arXiv cs.LG RSS/ASAT- Adaptive Scoring and Thresholding with Human Feedback for Robust Out-of-Distribution Detection]]"
source_sha256: c226af786c771034e879d69ddcad3d6b62955777f6beedf35b89f3c56362e884
original_url: "https://arxiv.org/abs/2505.02299"
processed: 2026-08-07
language: zh-CN
---

# ASAT：带人类反馈的自适应评分与阈值用于稳健分布外检测

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Daisuke Yamada, Harit Vishwakarma, Ramya Korlakai Vinayak
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2505.02299)

## 摘要

- 基于仅 ID 数据设定的 TPR 阈值会使 FPR 失控；固定评分函数与阈值也缺乏应对新出现 OOD 输入的适应性。
- 提出 ASAT：人机协作框架，基于真实 OOD 输入安全地在线更新评分函数与阈值。
- 稳态条件下最大化 TPR 的同时始终控制 FPR；非稳态条件下仅在适应期内出现短暂 FPR 违反。
- 提供稳态 FPR 控制的理论保证，并在 OpenOOD 基准上实证优于现有方法。

## 正文

机器学习（ML）模型在分布内（ID）数据上训练，但部署时常常遇到分布外（OOD）输入——在安全关键领域构成严重风险。近期工作聚焦设计量化 OOD 不确定性的评分函数，阈值通常仅基于 ID 数据设定以达到目标真阳性率（TPR），因为部署前 OOD 数据有限。然而这些基于 TPR 的阈值使假阳性率（FPR）不受控，常导致高 FPR——OOD 点被误分类为 ID。此外，固定评分函数与阈值缺乏处理新出现、演化的 OOD 输入所需的适应性，性能次优。为应对这些挑战，本文提出 ASAT，一个人机协作框架，基于真实 OOD 输入安全地在线更新评分函数与阈值。ASAT 在稳态条件下最大化 TPR，同时始终控制 FPR，即使系统随时间适应亦然；在非稳态条件下，方法适应分布漂移，仅在适应期内出现短暂的 FPR 违反。研究提供稳态条件下 FPR 控制的理论保证，并在 OpenOOD 基准上开展广泛实证评估，表明该方法在保持 FPR 控制的同时取得更高 TPR，优于现有方法。

## 关键词

分布外检测、人机协作、FPR 控制、自适应阈值、安全关键
