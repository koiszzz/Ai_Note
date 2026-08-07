---
published: 2026-08-06
title: 基于原型的PPG与加速度计信号自监督多模态学习
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Prototype-based Self-Supervised Multimodal Learning for PPG and Accelerometry Signals.md
source_note: "[[信息源/arXiv cs.LG RSS/Prototype-based Self-Supervised Multimodal Learning for PPG and Accelerometry Signals]]"
source_sha256: 7d9e70be1bec12f837b13cab81cfd6d498aa2289e6fda017837daec4292afa9a
original_url: https://arxiv.org/abs/2510.09764
processed: 2026-08-07
language: zh-CN
---

# 基于原型的PPG与加速度计信号自监督多模态学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2510.09764)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Prototype-based Self-Supervised Multimodal Learning for PPG and Accelerometry Signals|查看原始文件]]

## 摘要

- 提出 ProtoMM 自监督学习框架，用共享原型字典将异质模态锚定在共同嵌入空间，克服 CLIP 式对比目标的过度拟合与误判问题。
- 通过围绕共享原型聚类而非显式负采样，捕捉跨模态互补信息，为生理信号提供连贯的"通用语言"。
- 用 ProtoMM 构建脉冲-运动基础模型，性能超越仅对比方法与先前多模态自监督方法。

## 正文

对多模态时间序列数据进行建模对于捕捉系统级动态至关重要，尤其是在生物信号中，ECG、PPG、EDA 和加速度计等模态为相互关联的生理过程提供了互补视角。虽然最近自监督学习（SSL）的进展改善了单模态表示学习，但现有的多模态方法往往依赖 CLIP 式对比目标，这类目标会过拟合易于对齐的特征，并将有效的跨模态关系误判为负样本，导致碎片化且不可泛化的嵌入。

为克服这些局限，我们提出 ProtoMM，一个新颖的 SSL 框架，引入共享原型字典，将异质模态锚定在共同的嵌入空间中。通过围绕共享原型聚类表示，而非显式负采样，我们的方法捕捉跨模态的互补信息，并为生理信号提供连贯的"通用语言"。在本工作中，我们专注于用 ProtoMM 开发脉冲-运动（Pulse-Motion）基础模型，并证明我们的方法优于仅对比的方法和先前的多模态 SSL 方法，在强先验基线中取得最佳性能，同时为分析与解读学习到的特征提供额外效用。

## 关键词

#自监督学习 #多模态学习 #原型 #PPG #加速度计 #生物信号
