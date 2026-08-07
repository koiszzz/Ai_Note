---
published: 2026-08-06
title: Deltoris：通过位级稀疏性与投机推理实现具身 AI 中的实时 VLA 推理
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Deltoris- Enabling Real-time VLA Inference in Embodied AI via Bit-level Sparsity and Speculative Inf.md
source_note: "[[信息源/arXiv cs.LG RSS/Deltoris- Enabling Real-time VLA Inference in Embodied AI via Bit-level Sparsity and Speculative Inf]]"
source_sha256: 1e00cc3a17792718bff26e17ce27bbc134e718c9b0cad034f927a956387c091c
original_url: https://arxiv.org/abs/2608.04428
processed: 2026-08-07
language: zh-CN
---

# Deltoris：通过位级稀疏性与投机推理实现具身 AI 中的实时 VLA 推理

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04428)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Deltoris- Enabling Real-time VLA Inference in Embodied AI via Bit-level Sparsity and Speculative Inf|查看原始文件]]

## 摘要

- Deltoris：面向高效扩散式 VLA 推理的算法-硬件协同设计框架
- 时间感知位级稀疏性算法：仅计算连续输入差异，消除冗余位级运算
- 投机推理技术将数据加载分摊到多个控制步骤，缓解额外片外流量
- 相比移动 GPU 最高 34.2 倍加速、相比先前加速器 6.1 倍，准确率相当

## 正文

视觉-语言-动作（VLA）模型已成为具身 AI 的关键组成部分。在现有方法中，基于扩散的 VLA 模型实现了优越的动作品质与泛化能力。然而，基于扩散的 VLA 模型计算密集，并且必须以高控制频率运行，例如 50–200 Hz。因此，它对边缘设备施加了严格的延迟与能耗约束。

在这项工作中，我们提出 Deltoris，一个用于高效扩散式 VLA 推理的算法-硬件协同设计框架。首先，我们利用连续输入的时间相似性，提出一种时间感知的位级稀疏性算法，仅计算连续输入之间的差异，从而消除冗余的位级运算。为了进一步解决我们算法引入的额外片外流量，我们提出一种投机推理技术，将数据加载分摊到多个控制步骤。最后，为支持这些技术，我们协同设计了一款专用加速器，配备定制的 1D 脉动位串行 PE 阵列，消除了 PE 工作负载失衡。

我们的评估表明，Deltoris 相比移动 GPU 实现了高达 34.2 倍的加速，相比先前的加速器实现了 6.1 倍的加速，同时保持了相当的准确率。

## 关键词

#VLA模型 #具身智能 #稀疏性 #硬件加速器 #协同设计 #实时推理
