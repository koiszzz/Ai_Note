---
published: 2026-08-05
title: "ActQuant：面向视觉语言动作模型的低于四比特动作引导量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models]]"
source_sha256: 3a484f192adef246149151a3da3acb861d4cf55923dda34bc3cffb1fa748530e
original_url: "https://arxiv.org/abs/2605.24011"
processed: 2026-08-05
language: zh-CN
---

# ActQuant：面向视觉语言动作模型的低于四比特动作引导量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.24011)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models|查看原始文件]]

## 摘要

- 视觉—语言—动作（VLA）模型能够为具身智能生成高质量动作，但计算开销很大，难以部署在边缘平台。
- 论文提出 ActQuant，一种动作引导的混合精度训练后量化框架：按权重矩阵对动作预测的贡献分配比特宽度，并利用动作感知曲率优化每个块的量化尺度。
- 作者还提出 OmniModel.cpp，将模型架构转换为带高效低比特内核的原生 C/C++ 运行时，以实现端侧收益。
- 在 LIBERO 基准上，ActQuant 是唯一能以不超过 3 bit/weight 运行的方法，在 OpenVLA-OFT 和 π₀.₅ 上分别保留 95.0% 和 94.8% 的性能；在 UR3 机械臂上可将内存占用降低 2.5 倍。

## 正文

视觉—语言—动作（VLA）模型能够为具身智能生成出色的动作，但其巨大的计算开销使它们难以部署在边缘平台。激进的低于四比特权重量化是自然的解决方案，但现有训练后量化（PTQ）方法在这一工作点通常会造成严重性能下降。

为解决这一问题，本文提出 ActQuant，一种动作引导的混合精度训练后量化框架，分为两个阶段。第一阶段是跨张量比特分配器，根据每个权重矩阵对预测智能体动作的贡献，为其分配单一比特宽度。第二阶段是张量内尺度优化器，利用动作感知曲率调整每个权重块的量化尺度，使动态范围集中到对控制最有影响的权重上。

为实现激进量化的端侧收益，作者进一步提出 OmniModel.cpp。这是一条智能体式转换流水线，可将模型架构移植到带高效低比特内核的原生 C/C++ 运行时。作者在仿真环境和真实世界的 6 自由度 UR3 机械臂上评估 ActQuant，所有模型均通过 OmniModel.cpp 部署。

在 LIBERO 基准上，ActQuant 是唯一能够以不超过 3 bit/weight 运行的方法，同时在 OpenVLA-OFT 上保留 95.0% 的性能，在 π₀.₅ 上保留 94.8%。进一步压缩时，ActQuant 在 OpenVLA-OFT 上以 2.5 bit/weight 达到 90.1%，将骨干模型从 14.3 GB 压缩到 2.7 GB，压缩比为 5.3 倍。在实体 UR3 机械臂上，使用 ActQuant 量化的 π₀.₅ 保持基线成功率，同时将内存占用减少 2.5 倍。

## 关键词

#模型量化 #具身智能 #视觉语言动作模型 #边缘部署
