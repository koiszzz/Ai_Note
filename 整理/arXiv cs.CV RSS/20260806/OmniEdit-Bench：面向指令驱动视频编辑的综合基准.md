---
published: 2026-08-06
title: OmniEdit-Bench：面向指令驱动视频编辑的综合基准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/OmniEdit-Bench- A Comprehensive Benchmark for Instruction-based Video Editing.md
source_note: "[[信息源/arXiv cs.CV RSS/OmniEdit-Bench- A Comprehensive Benchmark for Instruction-based Video Editing|查看原始文件]]"
source_sha256: aa08676c2ef02ec3e0bb0fa364d61b5858344d2c273c59ca5518d3164aa49719
original_url: https://arxiv.org/abs/2608.05049
processed: 2026-08-07
language: zh-CN
---

# OmniEdit-Bench：面向指令驱动视频编辑的综合基准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05049)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/OmniEdit-Bench- A Comprehensive Benchmark for Instruction-based Video Editing|查看原始文件]]

## 摘要

- 指令驱动视频编辑（IVE）是应用广泛的新兴领域，但编辑模型评估仍具挑战；现有基准两大局限：任务覆盖受图像编辑限制而忽略视频特有维度；指标无法衡量指令保真度，错误编辑可凭原始视频强视觉先验得高分
- 基准将编辑任务分解为空间、时间、音频、参考式编辑等多个视频特有维度，超越传统帧级评估；区分显式与隐式指令，纳入推理式场景
- 提出评估框架，从准确性、保持性、真实性与一致性四个互补维度评估编辑质量，结合人类评判与 SOTA 视觉语言模型；引入准确率感知惩罚机制，以准确率制约其他分数，防止视觉合理但错误编辑获得虚高评价
- 对代表性开源与商业模型的大量实验显示当前 IVE 模型远未令人满意；提供全面可靠的测试平台与未来研究方向洞察

## 正文

指令驱动视频编辑（instruction-based video editing，IVE）是一个应用广泛的新兴领域，然而评估编辑模型仍然充满挑战。现有基准存在两大主要局限：一是任务覆盖范围有限，这继承自图像编辑，忽略了视频特有的维度；二是评估指标不充分，无法衡量指令保真度，使得错误编辑可能因原始视频的强视觉先验而获得高分。

为解决这些问题，我们为 IVE 引入一个全面而结构化的基准。我们的基准将编辑任务分解为多个视频特有维度，包括空间、时间、音频和基于参考（reference-based）的编辑，超越了传统的帧级评估。它同时区分显式与隐式指令，并纳入基于推理的场景，以更好地反映真实世界需求。此外，我们提出一个评估框架，从四个互补维度评估编辑质量：准确性（accuracy）、保持性（preservation）、真实性（realism）和一致性（consistency），并使用人类评判与最先进的视觉语言模型相结合的方式进行评估。为强调指令保真度，我们引入一种准确率感知惩罚机制（accuracy-aware penalty mechanism），以准确率制约其他分数，防止视觉上合理但错误的编辑获得虚高的评估。

对代表性开源与商业模型的大量实验表明，当前 IVE 模型的表现远未令人满意。OmniEdit-Bench 为评估指令驱动视频编辑提供了全面可靠的测试平台，并为未来研究方向提供了洞察。

## 关键词

#视频编辑 #指令驱动 #基准测试 #视频语言模型 #评估框架
