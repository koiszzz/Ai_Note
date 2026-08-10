---
published: 2026-08-07
title: "MoDAl：用于语音神经假体的去相关自监督神经模态发现"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MoDAl- Self-Supervised Neural Modality Discovery via Decorrelation for Speech Neuroprosthesis.md"
source_note: "[[信息源/arXiv cs.LG RSS/MoDAl- Self-Supervised Neural Modality Discovery via Decorrelation for Speech Neuroprosthesis]]"
source_sha256: 072e7f2e6904cc95c5c342f0ebb672730b8d2ed0caba6e3c0e992762e5cc2384
original_url: "https://arxiv.org/abs/2605.00025"
processed: 2026-08-07
language: zh-CN
---

# MoDAl：用于语音神经假体的去相关自监督神经模态发现

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yuanhao Chen, Peter Chin
> - **发布时间**：2026-08-07
> - **分类**：q-bio.NC
> - **原文**：[打开链接](https://arxiv.org/abs/2605.00025)

## 摘要

- 语音神经假体系统在无音频输出的情况下从神经活动解码意图语音，为言语受损个体恢复沟通提供路径；当前方法主要从运动皮层解码，丢弃可能编码互补语言学信息的其他区域（如 Broca 区一部分的 44 区）。
- 引入 MoDAl（模态去相关与对齐）：通过共享投影空间中两个目标的交互发现互补神经模态；对比损失将每个平行脑编码器与预训练 LLM 的文本嵌入对齐，去相关损失防止编码器合并为重复表征。
- 证明两目标存在生产性张力：对比对齐诱导传递性模态合并，去相关必须对抗它才能使框架发现多样神经语言学模态。
- Brain-to-Text Benchmark '24 上，MoDAl 将词错误率（WER）从 26.3% 降至 21.6%（相对先前最佳端到端方法），纳入先前丢弃的 44 区信号的增益完全源于去相关机制；模态分析揭示功能专门化：接收 44 区输入的编码器捕捉结构性与句法属性（句长、语态、wh-词），与 Broca 区神经语言学理解一致。

## 正文

语音神经假体系统在无音频输出的情况下从神经活动解码意图语音，为言语受损个体恢复沟通提供路径。当前方法主要从运动皮层区域解码，丢弃可能编码互补语言学信息的其他区域——如 Broca 区一部分的 44 区。研究引入 MoDAl（模态去相关与对齐，Modality Decorrelation and Alignment），一个通过在共享投影空间中两个目标的交互发现互补神经模态的框架。对比损失将若干平行脑编码器中的每一个与预训练大语言模型（LLM）的文本嵌入对齐，而去相关损失防止编码器合并为重复表征。研究证明这些目标存在生产性张力：对比对齐诱导传递性模态合并（transitive modality coalescence），去相关必须对抗它，框架才能发现多样的神经语言学模态。在 Brain-to-Text Benchmark '24 上，MoDAl 将词错误率（WER）从 26.3% 降至 21.6%（对照先前最佳端到端方法），且纳入先前丢弃的 44 区信号的增益完全源于去相关机制。对发现模态的分析揭示功能专门化：接收 44 区输入的编码器捕捉结构与句法属性（句长、语法语态、wh-词），与 Broca 区的神经语言学理解一致。

## 关键词

语音神经假体、模态发现、去相关、对比学习、脑机接口
