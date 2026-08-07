---
published: 2026-08-06
title: PhysMind：从视频到可执行世界，实现免训练物理推理
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning.md
source_note: "[[信息源/arXiv cs.CV RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning]]"
source_sha256: ffc4139f7257a0409e0de9867690eee17b8acafb69b176d2fa0f0fb9dad09dbc
original_url: https://arxiv.org/abs/2608.04575
processed: 2026-08-07
language: zh-CN
---

# PhysMind：从视频到可执行世界，实现免训练物理推理

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04575)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/PhysMind- From Video to Executable Worlds for Training-Free Physical Reasoning|查看原始文件]]

## 摘要

- 提出免训练智能体框架 PhysMind：为每个视频构建一个可复用、与问题无关的可执行世界。
- 通过物体分割、网格重建与 6D 姿态跟踪恢复动态场景，并拟合解析连续时间动力学与潜在物理参数（无需时间步模拟器）。
- 相对同 VLM 直接思维链推理，CLEVRER 准确率提升 38.23 分、Physion++ 提升 8.08 分；反事实问题超出 GPT-5.5 达 19.25 分。

## 正文

从视频中进行可靠的物理推理，需要理解物体如何移动、交互以及对干预做出响应。现有视觉语言模型（VLM）往往难以解释这些动力学，也难以可靠地推理未来与反事实结果。我们提出 PhysMind，一个免训练的智能体框架，为每个视频构建一个可复用、与问题无关的可执行世界。PhysMind 通过物体分割、网格重建和 6D 姿态跟踪恢复时间上一致的动态场景，然后拟合解析形式的连续时间动力学和潜在物理参数，无需展开逐步时间模拟器。给定一个问题，它检查、延续或编辑该世界，并从生成的轨迹和交互中作答。与使用同一 VLM 的直接思维链（CoT）推理相比，PhysMind 在 CLEVRER 上将准确率提升了 38.23 个百分点，在 Physion++ 上提升了 8.08 个百分点。在反事实问题上，它超出所评估的最强 VLM 基线 GPT-5.5 达 19.25 个百分点。

## 关键词

#物理推理 #世界模型 #免训练 #反事实 #视觉语言模型
