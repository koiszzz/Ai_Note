---
published: 2026-08-07
title: "SemDINO：遥感变化检测的基础先验引导跨时间语义对齐网络"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SemDINO- Foundation Prior-Guided Cross-Temporal Semantic Alignment Network for Remote Sensing Change.md"
source_note: "[[信息源/arXiv cs.CV RSS/SemDINO- Foundation Prior-Guided Cross-Temporal Semantic Alignment Network for Remote Sensing Change]]"
source_sha256: e319e6568b30f96ce90d92f01a330fbdb7dfa7e1b47dde5f1852ec4be6918416
original_url: "https://arxiv.org/abs/2606.09772"
processed: 2026-08-07
language: zh-CN
---

# SemDINO：遥感变化检测的基础先验引导跨时间语义对齐网络

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xinyu Tong, Meihua Zhou, Jinxiao Sun, Zaiyan Zhang, Hongruixuan Chen, Lei Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.09772)

## 摘要

- 遥感语义变化检测（SCD）旨在识别双时相观测间的土地覆盖转变，同时抑制光照变化、季节差异与配准错误引起的伪变化。
- 视觉基础模型（VFMs）提供可迁移语义先验，但应用于 SCD 仍具挑战：基础模型表征与任务特定空间特征错配，以及时间序敏感性。
- 提出 SemDINO：基础先验引导框架，整合可迁移视觉基础模型先验与层级卷积表征进行跨时间语义推理；开发门控金字塔融合（PyFu）模块自适应结合基础模型语义与 CNN 空间细节同时减少域噪声；引入多尺度时间双向 transformer（M-TBTT）实现对称跨时间特征交互、缓解时间序偏置；设计特征变化增强（FeaCE）流精化对齐表征并区分真实语义转变与伪变化；多分支解耦预测头联合生成变化掩码、双时相语义图与边缘约束。
- 五个基准数据集大量实验显示 SemDINO 在语义与二值变化检测任务一致超越 SOTA；结果验证对齐导向表征学习对稳健遥感变化分析的有效性。

## 正文

遥感语义变化检测（semantic change detection, SCD）旨在识别双时相观测之间的土地覆盖转变，同时抑制由光照变化、季节差异与配准错误引起的伪变化。虽然视觉基础模型（Vision Foundation Models, VFMs）提供可迁移的语义先验，它们应用于 SCD 仍具挑战，原因在于基础模型表征与任务特定空间特征之间的错配，以及时间序敏感性。为解决这些问题，本文提出 SemDINO，一个基础先验引导的框架：整合可迁移的视觉基础模型先验与层级卷积表征，进行跨时间语义推理。具体地，研究开发一个门控金字塔融合（Gated Pyramid Fusion, PyFu）模块，自适应结合基础模型语义与 CNN 空间细节，同时减少域噪声。研究引入一个多尺度时间双向 transformer（Multi-scale Temporal Bi-directional Transformer, M-TBTT），实现对称的跨时间特征交互并缓解时间序偏置。此外，研究设计一个特征变化增强（Feature Change Enhancement, FeaCE）流，精化对齐的表征并区分真实语义转变与伪变化。最后，一个多分支解耦预测头联合生成变化掩码、双时相语义图与边缘约束。五个基准数据集上的大量实验表明，SemDINO 在语义与二值变化检测任务上一致优于最先进方法。结果验证了对齐导向表征学习对稳健遥感变化分析的有效性。

## 关键词

语义变化检测、基础模型、跨时间对齐、遥感、融合
