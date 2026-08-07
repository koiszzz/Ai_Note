---
published: 2026-08-06
title: SCAIL-2：用端到端上下文内条件统一受控角色动画
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SCAIL-2- Unifying Controlled Character Animation with End-to-End In-Context Conditioning.md
source_note: "[[信息源/arXiv cs.CV RSS/SCAIL-2- Unifying Controlled Character Animation with End-to-End In-Context Conditioning]]"
source_sha256: 7d763940bcc581c7bf38d82c586907a6925eb0e3d0b1a9e99ada209e6c7945b0
original_url: https://arxiv.org/abs/2606.10804
processed: 2026-08-07
language: zh-CN
---

# SCAIL-2：用端到端上下文内条件统一受控角色动画

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.10804)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SCAIL-2- Unifying Controlled Character Animation with End-to-End In-Context Conditioning|查看原始文件]]

## 摘要

- 提出 SCAIL-2，采用端到端驱动范式，将潜在视觉信息直接拼接到模型输入序列，避免中间表示（姿态骨架、遮罩背景）的信息损失。
- 通过数据合成流程生成 MotionPair-60K 数据集；用解耦条件统一多个角色动画子任务，由上下文内遮罩条件（In-Context Mask Conditioning）和模式特定 RoPE（Mode-Specific RoPE）提供超越文本指令与视觉信息的软引导。
- 提出偏置感知 DPO（Bias-Aware DPO）构建偏好项以缓解细节区域的合成差异；在多种角色动画任务上达到 SOTA。

## 正文

受控角色动画旨在将运动从驱动序列迁移到参考角色。先前的工作严重依赖中间表示，例如用于运动的姿态骨架和用于环境的遮罩背景，不可避免地导致信息损失。在这项工作中，我们提出 SCAIL-2，一个采用端到端驱动范式的框架，将潜在视觉信息直接拼接到模型的输入序列。

我们通过数据合成流程实现端到端训练，该流程产生 MotionPair-60K，一个为多个角色动画子任务策划的数据集。我们使用解耦条件统一这些子任务以适配不同驱动模式，并由上下文内遮罩条件（In-Context Mask Conditioning）和模式特定 RoPE（Mode-Specific RoPE）促进，它们提供超越文本指令和视觉信息的软引导。为解决细节区域中的合成差异，我们提出偏置感知 DPO（Bias-Aware DPO）构造偏好项以减轻错误。

大量实验表明，我们的方法在各类角色动画任务上实现了 SOTA 性能。代码、模型权重和数据集的大子集可在 https://teal024.github.io/SCAIL-2/ 获取。

## 关键词

#角色动画 #端到端 #上下文内条件 #数据合成
