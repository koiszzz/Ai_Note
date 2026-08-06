---
published: 2026-08-05
title: "ActQuant：面向视觉-语言-动作模型的亚 4 比特动作引导量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models]]"
source_sha256: 3a484f192adef246149151a3da3acb861d4cf55923dda34bc3cffb1fa748530e
original_url: "https://arxiv.org/abs/2605.24011"
processed: 2026-08-05
language: zh-CN
---

# ActQuant：面向视觉-语言-动作模型的亚 4 比特动作引导量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Arash Akbari 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.24011)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models|查看原始文件]]

## 摘要

- 提出 ActQuant，动作引导的混合精度 PTQ 框架，两阶段运行：张量间比特分配器按权重矩阵对预测智能体动作的贡献分配单一比特宽度；张量内尺度优化器用动作感知曲率调节逐块量化尺度，使动态范围集中于对控制最关键的权重。
- 引入 OmniModel.cpp 智能体转换流水线，将架构移植到原生 C/C++ 运行时，配备高效低比特内核。
- 在 LIBERO 基准上，ActQuant 是唯一在每权重 3 比特或以下运行的方案，OpenVLA-OFT 保持 95.0%、π0.5 保持 94.8%；进一步压缩至 2.5 bpw 时 OpenVLA-OFT 达 90.1%，骨干从 14.3 GB 压缩到 2.7 GB（5.3 倍）。
- 在真实 UR3 机械臂上，ActQuant 量化的 π0.5 保持基线成功率，同时内存占用减少 2.5 倍。

## 正文

论文编号：arXiv:2605.24011v3（更新类型：replace-cross）。以下为摘要全文翻译。

视觉-语言-动作（VLA）模型为具身智能展现出卓越的动作生成能力，但其繁重的计算使边缘平台部署不切实际。激进的亚 4 比特权重量化是自然的解决方案，然而现有的训练后量化（PTQ）方法在此区间会遭受严重的性能退化。为解决这一问题，我们提出 ActQuant，一个动作引导的混合精度 PTQ 框架，分两阶段运行：（1）张量间比特分配器根据每个权重矩阵对预测智能体动作的贡献程度，为其分配单一比特宽度；（2）张量内尺度优化器使用动作感知曲率调节逐块量化尺度，使动态范围集中在对手控制最有影响的权重上。为发挥激进量化的端侧效益，我们进一步引入 OmniModel.cpp，一个智能体转换流水线，将架构移植到带高效低比特内核的原生 C/C++ 运行时。我们在仿真和真实 6 自由度 UR3 机械臂上评估 ActQuant，所有模型均通过 OmniModel.cpp 部署。在 LIBERO 基准上，ActQuant 是唯一在每权重 3 比特或以下运行的方案，在 OpenVLA-OFT 上保持 95.0%、在 π0.5 上保持 94.8% 的性能。进一步推进时，ActQuant 在 OpenVLA-OFT 上以 90.1% 的性能达到 2.5 bpw，将骨干从 14.3 GB 压缩至 2.7 GB（5.3 倍）。在物理 UR3 机械臂上，经 ActQuant 量化的 π0.5 保持基线成功率，同时将内存占用减少 2.5 倍。

## 关键词

#模型量化 #VLA模型 #边缘部署 #训练后量化
