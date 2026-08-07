---
published: 2026-08-06
title: VoxStruct3D：面向体素空间3D MRI合成的结构引导流匹配
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/VoxStruct3D- Structure-Leading Flow Matching for Voxel-Space 3D MRI Synthesis.md
source_note: "[[信息源/arXiv cs.CV RSS/VoxStruct3D- Structure-Leading Flow Matching for Voxel-Space 3D MRI Synthesis]]"
source_sha256: 86a65d77c22f6967a3600b25617a76c6745569ef23e2f1170137c8247d40f4c6
original_url: https://arxiv.org/abs/2608.04557
processed: 2026-08-07
language: zh-CN
---

# VoxStruct3D：面向体素空间3D MRI合成的结构引导流匹配

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04557)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/VoxStruct3D- Structure-Leading Flow Matching for Voxel-Space 3D MRI Synthesis|查看原始文件]]

## 摘要

- 提出 VoxStruct3D，一个体素空间流匹配框架，用干净数据预测目标直接建模全分辨率 MRI 体量，规避潜在扩散中图像自编码器的重建瓶颈。
- 体量体素生成器（VVG）结合分解式 3D 补丁嵌入、重叠上采样、时间调制残差精化和跳跃融合，抑制补丁边界伪影。
- 引入"结构优先、图像跟随"（SFIF）策略：冻结的预训练 3D 医学编码器和 StructVAE 提取紧凑结构令牌，配以补丁对齐 RoPE 和非对称注意力。
- 在病理和健康 T1 加权脑 MRI 数据集上取得特征分布对齐、样本多样性和感知质量的最强整体性能。

## 正文

高保真 3D MRI 合成既需要全局连贯的解剖结构，也需要细粒度的体素级细节。虽然潜在扩散使体量生成变得可行，但其图像自编码器引入了重建瓶颈，可能限制最终体量中可恢复的细粒度细节。

我们提出 VoxStruct3D，一个体素空间流匹配框架，使用干净数据预测目标直接建模全分辨率 MRI 体量。其体量体素生成器（VVG）结合了分解式 3D 补丁嵌入与重叠上采样、时间调制残差精化和跳跃融合，使相邻令牌能够联合重建共享体素区域并抑制补丁边界伪影。为了将直接体素空间建模与显式解剖先验互补，我们进一步引入"结构优先、图像跟随"（SFIF）策略。冻结的预训练 3D 医学编码器和 StructVAE 提取保留主导解剖结构的紧凑结构令牌，而结构引导调度使其轨迹保持在图像轨迹之前。补丁对齐 RoPE 在空间上对齐不相等的令牌网格，非对称注意力强制从结构到图像的单向引导。在病理和健康 T1 加权脑 MRI 数据集上的实验表明，VoxStruct3D 在特征分布对齐、样本多样性和感知质量方面取得了最强的整体性能，产生了解剖连贯且视觉真实的体量。

## 关键词

#医学影像 #MRI合成 #流匹配 #体素生成
