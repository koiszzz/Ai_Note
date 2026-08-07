---
published: 20260805
title: "ActQuant：视觉-语言-动作模型的亚 4 位动作引导量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models]]"
source_sha256: 3a484f192adef246149151a3da3acb861d4cf55923dda34bc3cffb1fa748530e
original_url: "https://arxiv.org/abs/2605.24011"
processed: 2026-08-06
language: zh-CN

---

# ActQuant：视觉-语言-动作模型的亚 4 位动作引导量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Arash Akbari, Arman Akbari, Masih Eskandar, Qitao Tan, Yixiao Chen, Jingwu Luo, Bertha Pangaribuan, Liyun Zhang, Jennifer Dy, Geng Yuan, Xue Lin, Gaowen Liu, Stratis Ioannidis, Yanzhi Wang
> - 发布时间：20260805
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.24011)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ActQuant- Sub-4-bit Action-Guided Quantization for Vision-Language-Action Models|查看原始文件]]

## 摘要

- 视觉-语言-动作（VLA）模型为具身智能展现卓越动作生成，但其繁重计算使边缘平台部署不切实际；激进的亚 4 位权重量化是自然解决方案，但现有训练后量化（PTQ）方法在此状态下性能严重下降。
- 本文引入 ActQuant，一个动作引导的混合精度 PTQ 框架，两阶段运作：张量间位分配器根据每个权重矩阵对预测智能体动作的贡献分配单位宽；张量内尺度优化器使用动作感知曲率调整每块量化尺度。
- 引入 OmniModel.cpp，一个智能体转换流水线，将架构移植到原生 C/C++ 运行时；在 LIBERO 基准上，ActQuant 是唯一在每权重 3 位或以下运作的方法，OpenVLA-OFT 保留 95.0%、π0.5 保留 94.8%，物理 UR3 机械臂上 π0.5 保持基线成功率同时内存减少 2.5 倍。

## 正文

视觉-语言-动作（VLA）模型为具身智能展现卓越的动作生成能力，但其繁重的计算使边缘平台部署不切实际。激进的亚 4 位权重量化是自然解决方案，然而现有训练后量化（PTQ）方法在此状态下遭受严重性能退化。为解决此问题，我们引入 ActQuant，一个动作引导的混合精度 PTQ 框架，分两阶段运作：（1）张量间位分配器根据每个权重矩阵对预测智能体动作的贡献程度分配单位宽；（2）张量内尺度优化器使用动作感知曲率调整每块量化尺度，使动态范围集中在控制最关键的权重上。为交付激进量化带来的设备端收益，我们进一步引入 OmniModel.cpp，一个智能体转换流水线，将架构移植到具有高效低位内核的原生 C/C++ 运行时。我们在仿真和真实 6-DoF UR3 机械臂上评估 ActQuant，所有模型通过 OmniModel.cpp 部署。在 LIBERO 基准上，ActQuant 是唯一在每权重 3 位或以下运作的方法，在 OpenVLA-OFT 上保留 95.0%，在 π0.5 上保留 94.8%。进一步推进，ActQuant 在 OpenVLA-OFT 上达到 2.5 bpw、90.1%，将骨干从 14.3 GB 压缩到 2.7 GB（5.3 倍）。在物理 UR3 机械臂上，用 ActQuant 量化的 π0.5 保持基线成功率，同时内存占用减少 2.5 倍。

## 关键词

#量化 #VLA模型 #边缘部署 #机器人 #arXiv