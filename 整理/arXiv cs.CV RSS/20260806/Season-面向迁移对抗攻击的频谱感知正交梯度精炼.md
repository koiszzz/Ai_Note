---
published: 2026-08-06
title: Season：面向迁移对抗攻击的频谱感知正交梯度精炼
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Season- Spectrum-Aware Orthogonal Gradient Refinement for Transfer-Based Adversarial Attacks.md
source_note: "[[信息源/arXiv cs.CV RSS/Season- Spectrum-Aware Orthogonal Gradient Refinement for Transfer-Based Adversarial Attacks]]"
source_sha256: 21cb855b493b61fcd9413beb2a927d627aee411b07dd32b4a2160dc4f7968a31
original_url: https://arxiv.org/abs/2608.04441
processed: 2026-08-07
language: zh-CN
---

# Season：面向迁移对抗攻击的频谱感知正交梯度精炼

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04441)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Season- Spectrum-Aware Orthogonal Gradient Refinement for Transfer-Based Adversarial Attacks|查看原始文件]]

## 摘要

- 针对 CNN 偏好局部纹理而视觉 Transformer（ViT）依赖全局形状导致的迁移攻击跨异构架构迁移差的问题，提出 Season，一个频谱感知正交梯度精炼框架。
- Season 将每次更新分解为捕捉结构线索的低频分支和捕捉纹理的高频分支；低显著性引导方案把高频能量重新分配到背景区域，保留 ViT 依赖的前景结构；正交投影强制纹理更新位于结构方向的补空间，缓解特征干扰。
- 作为免训练即插即用包装器，增强八种梯度稳定化与输入增强攻击；在八个 CNN、ViT、MLP 目标上，统一协议下平均提升迁移成功率 6.6 个百分点，最高 16.0 个百分点。

## 正文

基于迁移的对抗攻击常难以跨异构架构迁移，因为 CNN 偏好局部纹理，而视觉 Transformer（ViT）依赖全局形状。我们提出 Season，一个面向 ImageNet 上黑盒目标模型 L-infinity 迁移攻击的频谱感知正交梯度精炼框架，使用白盒替代模型。

Season 将每次更新分解为低频分支和高频分支，前者捕捉结构线索，后者捕捉纹理。低显著性引导方案将高频能量重新分配到背景区域，保留 ViT 依赖的前景结构。随后正交投影强制纹理更新位于结构方向的正交补空间，缓解特征干扰。作为免训练的即插即用包装器，Season 在不修改核心的情况下增强八种梯度稳定化和输入增强攻击。

在八个 CNN、ViT 和 MLP 目标上，Season 在统一协议下相较强基线平均提升迁移成功率 6.6 个百分点，最高达 16.0 个百分点。

## 关键词

#对抗攻击 #迁移攻击 #频谱分解 #正交梯度 #图像分类
