---
published: 20260806
title: "AudioScape-TTA：细粒度文本转音频评估的结构化声景基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AudioScape-TTA- A Structured Soundscape Benchmark for Fine-Grained Text-to-Audio Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/AudioScape-TTA- A Structured Soundscape Benchmark for Fine-Grained Text-to-Audio Evaluation]]"
source_sha256: 0f2fed4687d7100d3d5e9d21dc5e569ac6e0c281cd3b942b34a67828b3115b9a
original_url: "https://arxiv.org/abs/2608.04479"
processed: 2026-08-06
language: zh-CN

---

# AudioScape-TTA：细粒度文本转音频评估的结构化声景基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jinting Wang, Yuguang Yang, Shengyu Li, Yan Rong, Shan Yang, Xiaoda Yang, Li Liu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04479)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AudioScape-TTA- A Structured Soundscape Benchmark for Fine-Grained Text-to-Audio Evaluation|查看原始文件]]

## 摘要

- 文本转音频（TTA）生成在从自然语言描述合成逼真音频方面取得显著进展，但确定生成音频是否忠实满足复杂文本指令仍具挑战性；现有基准主要依赖全局相似度指标，对细粒度语义失败提供有限洞察。
- 本文引入 AudioScape-TTA，一个细粒度 TTA 评估的结构化、复杂度感知基准：通过模态感知语义结构表示真实声景，用事件密度和结构复杂度表征生成复杂度。
- 提出基于评分标准的音频接地评估框架，通过细粒度语义标准验证事件实现、声学属性和语音内容；基准含 2,258 个音频-文本对和 25,707 个二元 QA 评分标准，13 个代表性开源 TTA 模型的实验揭示细粒度属性控制、语音内容保留和组合声景生成的持续局限。

## 正文

文本转音频（TTA）生成近期在从自然语言描述合成逼真音频方面取得显著进展。然而，确定生成音频是否忠实满足复杂文本指令仍具挑战性。现有基准主要依赖全局相似度指标，对细粒度语义失败提供有限洞察。为解决此局限，我们引入 AudioScape-TTA，一个细粒度 TTA 评估的结构化、复杂度感知基准。AudioScape-TTA 通过模态感知语义结构表示真实声景，并用事件密度和结构复杂度表征生成复杂度。基于这些标注，我们提出一个基于评分标准的音频接地评估框架，通过细粒度语义标准验证事件实现、声学属性和语音内容。该基准包含 2,258 个音频-文本对，带 25,707 个二元 QA 评分标准，支持对 TTA 系统的可扩展、可解释分析。对 13 个代表性开源 TTA 模型的实验揭示细粒度属性控制、语音内容保留和组合声景生成中的持续局限。人类验证进一步表明，我们的基于评分标准的评估比传统全局相似度指标实现与人类语义判断更强的对齐。

## 关键词

#文本转音频 #基准 #细粒度评估 #声景 #arXiv