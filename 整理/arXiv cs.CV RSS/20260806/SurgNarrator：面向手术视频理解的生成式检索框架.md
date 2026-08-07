---
published: 2026-08-06
title: SurgNarrator：面向手术视频理解的生成式检索框架
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SurgNarrator- A Generative Retrieval Framework for Surgical Video Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/SurgNarrator- A Generative Retrieval Framework for Surgical Video Understanding]]"
source_sha256: c5acd0ffead35d822c760a8a4ae37a99bb70c939276e807445b0ec0bf454e8c3
original_url: https://arxiv.org/abs/2608.04676
processed: 2026-08-07
language: zh-CN
---

# SurgNarrator：面向手术视频理解的生成式检索框架

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04676)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SurgNarrator- A Generative Retrieval Framework for Surgical Video Understanding|查看原始文件]]

## 摘要

- 提出 SurgNarrator，一个专为手术视频理解定制的生成式检索框架，克服"全面推理不实时、低延迟难理解"的取舍。
- 从手术字幕构建以手术为中心的词汇表定义临床有意义的检索空间；适配 Qwen3-VL-Embedding-8B 学习判别性临床表示；推理时用层次化流程感知检索策略收窄搜索空间。
- 在十二个基准的零样本设置中一致优于最先进基线，输出阶段延迟比生成式基线降低两个数量级以上。

## 正文

手术过程以结构化的、可重复的临床事件形式展开，通过术中手术视频实时理解这些事件，对于术中决策和支持至关重要。然而，现有视频理解方法迫使人们做出取舍：自回归视频-语言模型支持全面推理，但难以满足时间敏感的临床应用；对比模型延迟低，却难以应对复杂场景理解。近期，生成式检索已在通用领域视频理解中得到探索，但将其迁移到手术领域并不容易，因为视觉外观几乎相同的画面可能对应语义不同的事件，且涉及的术语高度手术特化。为此，我们提出 SurgNarrator，一个专为手术视频理解定制的生成式检索框架。我们从手术字幕中构建一个精心整理、以手术为中心的词汇表，以定义临床有意义的检索空间。然后我们适配预训练的 Qwen3-VL-Embedding-8B，以时序感知的对比目标学习判别性临床表示。推理阶段，一种层次化的、流程感知的检索策略将搜索空间收窄到相关的手术类型，提供快速而有效的响应。我们的方法在十二个基准上以零样本设置进行了全面评估，一致优于最先进的基线，同时与生成式基线相比，输出阶段延迟降低了两个数量级以上。

## 关键词

#手术视频 #视频理解 #生成式检索 #医学AI
