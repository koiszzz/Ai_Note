---
published: 2026-08-06
title: Place-it-R1：释放多模态大语言模型在视频对象插入中的环境感知推理潜力
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion.md
source_note: "[[信息源/arXiv cs.CV RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion]]"
source_sha256: bee5315d3106a1c6a8c6f501c67ce4ef57a2e3e67d923cc37c9f145ee2d2a731
original_url: https://arxiv.org/abs/2603.06140
processed: 2026-08-07
language: zh-CN
---

# Place-it-R1：释放多模态大语言模型在视频对象插入中的环境感知推理潜力

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.06140)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Place-it-R1- Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion|查看原始文件]]

## 摘要

- 提出 Place-it-R1：由环境感知 MLLM 推理驱动的端到端物理合理视频对象插入框架。
- 将推理转化为语义引导（描述预期物理交互）与空间引导（逐帧有效插入区域）两种互补的扩散引导，并引入空间直接偏好优化。
- 提供灵活/标准两种模式权衡环境适应与场景保留；比 SOTA 方法更物理连贯、视觉自然，可与商业系统竞争。

## 正文

视频对象插入是视频编辑的基础操作，然而现有扩散方法往往产生视觉上合理但物理上不一致的结果。我们提出 Place-it-R1，一个由环境感知的 MLLM 推理驱动的、用于物理合理的视频对象插入的端到端框架。Place-it-R1 不将推理视为通用文本提示，而是让 MLLM 分析目标环境、推断对象-场景交互，并确定插入在物理上何处有效。由此产生的推理被转化为两种互补形式的视频扩散引导：描述预期物理交互的语义引导，以及在每一帧提供有效插入区域的空域引导。为进一步使生成与局部物理真实性对齐，我们引入空间直接偏好优化（Spatial Direct Preference Optimization），利用 MLLM 对生成的候选进行排序，并提出一种区域感知的偏好目标，将物理违反惩罚显式定位到插入对象区域。Place-it-R1 还提供灵活模式和标准模式，用以在环境适应与场景保留之间进行权衡。大量实验表明，Place-it-R1 生成的插入比现有最优方法物理上更连贯、视觉上更自然，并且与商业系统相比取得了有竞争力的结果。

## 关键词

#视频编辑 #对象插入 #多模态大语言模型 #偏好优化 #视频扩散
