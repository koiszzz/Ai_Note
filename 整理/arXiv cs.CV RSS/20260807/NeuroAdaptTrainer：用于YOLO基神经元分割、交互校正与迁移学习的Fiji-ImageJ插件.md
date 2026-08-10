---
published: 2026-08-07
title: "NeuroAdaptTrainer：用于 YOLO 基神经元分割、交互校正与迁移学习的 Fiji-ImageJ 插件"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/NeuroAdaptTrainer- A Fiji-ImageJ Plugin for YOLO-Based Neuron Segmentation, InteractiveCorrection an.md"
source_note: "[[信息源/arXiv cs.CV RSS/NeuroAdaptTrainer- A Fiji-ImageJ Plugin for YOLO-Based Neuron Segmentation, InteractiveCorrection an]]"
source_sha256: 67139b61359a585d0cf44b2f92885fefbf4b4b0f699bfe4a1db69e2d89d1089c
original_url: "https://arxiv.org/abs/2608.05226"
processed: 2026-08-07
language: zh-CN
---

# NeuroAdaptTrainer：用于 YOLO 基神经元分割、交互校正与迁移学习的 Fiji-ImageJ 插件

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Daniela Eraso-Casas, Gerard Villarroya-Pique, Esther Serrano-Pertierra, M. Teresa Fernández-Sánchez, Antonello Novellie, Angel Rio-Alvarez, Víctor M. González
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05226)

## 摘要

- 神经元培养显微镜图像中的神经元计数与分割是神经科学研究中常规且耗时的任务，传统经人工检查或半自动工具完成。
- 呈现 NeuroAdaptTrainer：开源 Fiji/ImageJ 插件，将 YOLO 实例分割模型直接集成进显微镜学家工作流。
- 插件允许用户在单张或批量图像上运行自动神经元检测，从 Fiji 内手动校正所得检测，并用这些校正经迁移学习将模型适配到新成像条件。
- 内置外部验证模块允许在保留标注集上定量比较基座与适配模型；降低非专家用户从深度学习分割受益的门槛，同时将专家监督置于工作流核心。

## 正文

神经元培养显微镜图像中的神经元计数与分割是神经科学研究中常规且耗时的任务，传统上通过人工检查或半自动工具完成。研究呈现 NeuroAdaptTrainer，一个开源 Fiji/ImageJ 插件：将 YOLO 实例分割模型直接集成进显微镜学家的工作流。该插件允许用户在单张图像或一批图像上运行自动神经元检测，从 Fiji 内部手动校正所得检测，并使用这些校正经迁移学习将模型适配到新的成像条件。一个内置的外部验证模块允许在保留的标注集上定量比较基座与适配模型。NeuroAdaptTrainer 降低了非专家用户从基于深度学习的分割中受益的门槛，同时将专家监督置于工作流的中心。

## 关键词

神经元分割、Fiji 插件、YOLO、迁移学习、交互校正
