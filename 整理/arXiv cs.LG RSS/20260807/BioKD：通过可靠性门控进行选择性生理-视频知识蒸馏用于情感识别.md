---
published: 2026-08-07
title: "BioKD：通过可靠性门控进行选择性生理-视频知识蒸馏用于情感识别"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/BioKD- Selective Physiology-to-Video Knowledge Distillation via Reliability Gate for Emotion Recogni.md"
source_note: "[[信息源/arXiv cs.LG RSS/BioKD- Selective Physiology-to-Video Knowledge Distillation via Reliability Gate for Emotion Recogni]]"
source_sha256: cbef3f0cc300ae82615df3a7be55cf7f8cecb3ce43b80607a95b4b95278c370c
original_url: "https://arxiv.org/abs/2608.06023"
processed: 2026-08-07
language: zh-CN
---

# BioKD：通过可靠性门控进行选择性生理-视频知识蒸馏用于情感识别

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Bojing Hou, Ruohao Li, Yitong Zhu, Hongjun Liu, Luwen Yu, Yuyang Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06023)

## 摘要

- 提出 BioKD：可靠性感知的生理-视频知识蒸馏框架，训练时将生理信号作为特权信息引导视频学生模型学习深层情感表征，推理时仅依赖无侵入视频输入。
- 结合样本级可靠性感知门控机制与渐进蒸馏策略，抑制不可靠生理监督导致的负迁移。
- 在 DEAP 与 AMIGOS 上，试验级与主体级协议下均一致优于代表性基线；DEAP 试验级 arousal 达 68.01%，更严格的主体级设定下达 65.29%。
- 有效缓解过度自信的教师错误，优于纯熵加权策略；相对相同视频学生架构无推理开销，免去生理传感与多模态同步。

## 正文

为应对模糊或社交掩蔽行为线索下基于视频的情感识别局限，以及生理信号的部署困难，本文提出可靠性感知的生理-视频知识蒸馏框架 BioKD。该框架训练时将生理信号作为特权信息，引导视频学生模型学习深层情感表征，推理时则完全依赖非侵入式视频输入。为应对主体间变异、信号伪影与时间不一致导致的生理教师监督高噪声与不稳定，BioKD 引入样本级可靠性感知门控机制与渐进蒸馏策略，通过自适应调节知识迁移强度，抑制不可靠生理监督引发的负迁移，实现更稳定的跨模态蒸馏。DEAP 与 AMIGOS 实验表明，BioKD 在效价与唤醒识别的试验级与主体级评估协议下均一致优于代表性基线。例如，BioKD 在 DEAP 试验级唤醒上达 68.01%，在更具挑战性的主体级设定下达 65.29%，展示了在主体无关评估下的性能提升。进一步分析表明，BioKD 有效缓解过度自信的教师错误并优于纯熵加权策略，证实显式建模监督可靠性的重要性。此外，BioKD 相对相同视频学生架构不引入任何推理开销，并免除生理传感与多模态同步的需求。

## 关键词

知识蒸馏、情感识别、生理信号、可靠性门控、跨模态
