---
published: 2026-08-06
title: CLIP-CC-Bench：评估视频语言模型的段落级视频描述
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CLIP-CC-Bench- Evaluating Paragraph-Level Video Descriptions in Video-Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/CLIP-CC-Bench- Evaluating Paragraph-Level Video Descriptions in Video-Language Models|查看原始文件]]"
source_sha256: 6bae34315e245a48b53e0c6d8d7cd4ebce4e3e9af54f614ecf8f2c176e710424
original_url: https://arxiv.org/abs/2608.04302
processed: 2026-08-07
language: zh-CN
---

# CLIP-CC-Bench：评估视频语言模型的段落级视频描述

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04302)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CLIP-CC-Bench- Evaluating Paragraph-Level Video Descriptions in Video-Language Models|查看原始文件]]

## 摘要

- 视频语言模型的基准测试主要集中于短片段和单句指标，尚不清楚现有系统能否生成准确的长文、段落级描述；本文引入 CLIP-CC-Bench，一个长文视频描述评估套件，基于 5 小时电影内容，分割为 90 秒片段，每段配有一条专家撰写的段落式参考描述。
- 评估套件采用五个最先进基于 LLM 的嵌入模型集成以提升可靠性并减轻单一模型偏差，应用两种互补方法：（i）粗粒度语义匹配与（ii）细粒度语义匹配，比较模型生成描述与 CLIP-CC-Bench 参考。
- 使用该框架评估 17 个最先进的视频语言模型，报告其 Borda 聚合排名与平均分数；通过评审间一致性与自举排名稳定性量化协议内部可靠性；标准化评估脚本、模型输出与聚合工具发布于 https://github.com/Multimodal-Intelligence-Lab/CLIP-CC-Bench。

## 正文

视频语言模型的基准测试在很大程度上集中于短视频片段和单句指标，这使得现有系统能否生成准确的长文、段落级描述仍然悬而未决。本文引入 CLIP-CC-Bench，一个用于长文视频描述的评估套件，基于 5 小时的电影内容构建，分割为 90 秒的片段，每个片段配有一条专家撰写的段落式参考描述。该评估套件采用五个最先进的基于 LLM 的嵌入模型组成的集成，以提高可靠性并减轻单一模型偏差，并应用两种互补方法：（i）粗粒度语义匹配与（ii）细粒度语义匹配，以比较模型生成的描述与 CLIP-CC-Bench 参考。使用该框架，本文评估了 17 个最先进的视频语言模型，并报告了它们的 Borda 聚合排名及其在 CLIP-CC-Bench 上的平均分数。本文还通过评审间一致性和自举排名稳定性量化了协议的内部可靠性。本文在 https://github.com/Multimodal-Intelligence-Lab/CLIP-CC-Bench 发布了标准化评估脚本、模型输出和聚合工具，以支持可复现性。CLIP-CC-Bench 为长文视频描述提供了一个实用的评估框架，填补了现有短片段和仅问答基准留下的空白。

## 关键词

#视频语言模型 #段落级描述 #基准测试 #长文视频描述 #语义匹配 #可复现评估
