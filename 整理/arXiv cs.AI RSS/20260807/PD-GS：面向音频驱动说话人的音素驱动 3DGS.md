---
published: 2026-08-07
title: "PD-GS：面向音频驱动说话人的音素驱动 3DGS"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PD-GS- Phoneme-Driven 3DGS for Audio-Driven Talking Heads.md"
source_note: "[[信息源/arXiv cs.AI RSS/PD-GS- Phoneme-Driven 3DGS for Audio-Driven Talking Heads]]"
source_sha256: 8df20461a47e4b03f35faa156c20a646becb1660b9401884f06b7a340567743c
original_url: "https://arxiv.org/abs/2608.05218"
processed: 2026-08-07
language: zh-CN
---

# PD-GS：面向音频驱动说话人的音素驱动 3DGS

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ao Fu, Yi Zhou
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05218)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PD-GS- Phoneme-Driven 3DGS for Audio-Driven Talking Heads|查看原始文件]]

## 摘要

- 3D 高斯泼溅（3DGS）实现快速、照片级真实感的说话人头像渲染，但精确唇部发音仍难以实现：嘴部运动常过度平滑，可能违反双唇闭合等硬性发音约束，产生臭名昭著的"漏嘴"伪影。
- 关键难点是简短、离散的发音事件在回归目标下从连续声学嵌入推断，使预测偏向平均嘴部配置；现代自监督语音编码器提供丰富韵律与语音线索，但不提供显式、帧对齐的、可可靠消除闭合级事件歧义的语言目标。
- 提出音素驱动高斯泼溅（PD-GS）：用自动 ASR 与强制对齐流水线获得的时间对齐音素 token 增强 3DGS 说话人——核心组件语言融合模块（LFM）通过学习门自适应融合连续音频上下文与离散音素嵌入，使模型在保留平滑音频驱动动态的同时，在发音关键片段强化音素引导。
- PD-GS 仅用单目视频、图像重建与唇地标监督训练；HDTF 上 PD-GS 实现最佳唇部几何（LMD 2.66），并在挑战性音素序列中定性减少闭合违规，产生更语言忠实的神经化身。

## 正文

3D 高斯泼溅（3D Gaussian Splatting，3DGS）实现快速、照片级真实感的说话人头像渲染，但精确的唇部发音仍难以实现：嘴部运动往往过度平滑，并可能违反双唇闭合等硬性发音约束，产生臭名昭著的"漏嘴"（leaky mouth）伪影。一个关键难点是，简短、离散的发音事件在回归目标下从连续声学嵌入推断，使预测偏向平均嘴部配置。虽然现代自监督语音编码器提供丰富的韵律与语音线索，它们不提供显式、帧对齐的语言目标来可靠地消除闭合级事件的歧义。我们提出音素驱动高斯泼溅（Phoneme-Driven Gaussian Splatting，PD-GS），用从自动 ASR 与强制对齐流水线获得的时间对齐音素 token 增强 3DGS 说话人。我们的核心组件语言融合模块（Linguistic Fusion Module，LFM）通过学习门自适应融合连续音频上下文与离散音素嵌入，使模型在保留平滑音频驱动动态的同时，在发音关键片段强化音素引导。PD-GS 完全从单目视频使用图像重建与唇地标监督训练。在 HDTF 上，PD-GS 在比较基线中实现最佳唇部几何（LMD 2.66），并在挑战性音素序列中定性减少闭合违规，产生更语言忠实的神经化身。

## 关键词

#3D高斯泼溅 #说话人头像 #音素驱动 #唇部同步
