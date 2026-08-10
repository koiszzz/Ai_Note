---
published: 2026-08-07
title: "将人类语言学洞见整合进 AI：多语言文本到语音的理论驱动表征"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Integrating Human Linguistic Insights into AI- Theory-Driven Representation for Multilingual Text-to.md"
source_note: "[[信息源/arXiv cs.CL RSS/Integrating Human Linguistic Insights into AI- Theory-Driven Representation for Multilingual Text-to]]"
source_sha256: ca7f19ca9be99b5afeb82a4f2b94d0a230bf98612b709379984686567493de69
original_url: "https://arxiv.org/abs/2204.07228"
processed: 2026-08-07
language: zh-CN
---

# 将人类语言学洞见整合进 AI：多语言文本到语音的理论驱动表征

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Cong Zhang, Huinan Zeng, Huang Liu, Jiewen Zheng
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2204.07228)

## 摘要

- 探索经评估特征欠指定词汇（FUL）作为理论驱动输入表征，将人类语言学洞见整合进多语言文本到语音（TTS）系统。
- 与数据密集型端到端模型不同，FUL 提供基于音系学原理的紧凑、可解释特征集，支持低资源语言可扩展与公平 TTS 开发。
- 经 SAMPA 中间层提供语言特定音素到 FUL 特征向量的映射，将特征纳入修改 FastSpeech 架构；实验评估英语与普通话母语、非母语与混码语音生成。
- 小数据集与大数据集实验显示 FUL 特征输入 TTS 仅 8 小时训练数据产生可懂母语语音；100 小时训练数据可为训练数据中不存在的语言生成可懂语音；支持保持一致音色与可解释语音控制的混码合成；理论驱动表征构建高效、可扩展、语言学知情 TTS 系统，音系特征可兼作分析工具与语音技术实用输入。

## 正文

本文探索经评估特征欠指定词汇（Featurally Underspecified Lexicon, FUL）作为理论驱动的输入表征，将人类语言学洞见整合进多语言文本到语音（TTS）系统。与数据密集的端到端模型不同，FUL 提供了一个基于音系学原理的紧凑、可解释特征集，能够支持低资源语言的可扩展与公平 TTS 开发。研究通过一个 SAMPA 中间层提供语言特定音素到 FUL 特征向量的映射，并将这些特征纳入一个修改后的 FastSpeech 架构。实验旨在评估它们生成英语与普通话的母语、非母语与混码语音的能力。研究运行了一个小数据集实验与一个大数据集实验，表明以 FUL 特征作为输入的 TTS 仅用 8 小时训练数据即可产生可理解的母语语音；使用 100 小时训练数据，可以为训练数据中不存在的语言生成可理解语音。该方法还支持保持一致音色与可解释语音控制的混码合成。这些结果凸显了理论驱动表征在构建高效、可扩展且语言学知情的 TTS 系统方面的潜力，证明音系特征可以同时作为分析工具与语音技术的实用输入。

## 关键词

文本到语音、FUL、音系特征、低资源、多语言
