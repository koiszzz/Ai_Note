---
published: 2026-08-06
title: PhyCheck：面向视频大语言模型物理规律理解的细粒度证据基准数据集
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs.md
source_note: "[[信息源/arXiv cs.CV RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs]]"
source_sha256: 302d1b408b32f337adc511133c2dd7fa93358c7c196e2b6dbe4762a8f6cd9f53
original_url: https://arxiv.org/abs/2608.02150
processed: 2026-08-07
language: zh-CN
---

# PhyCheck：面向视频大语言模型物理规律理解的细粒度证据基准数据集

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02150)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs|查看原始文件]]

## 摘要

- 提出 PhyCheck：两级粒度的视频问答数据集，粗粒度判断现象是否符合物理规律，细粒度考察模型能否捕捉违反或符合的物理细节。
- 含带外部因果背景的诊断子集，检验模型能否根据隐藏因素重新校准判断。
- 用 Qwen2.5-VL 微调实验表明训练大幅提升物理一致性理解，但当前模型仍难以将附加因果条件纳入决策。

## 正文

具身智能与世界模型要求视频理解系统超越对物体和动作的识别，发展对物理规律性的理解。然而，尽管在通用视频理解任务上表现强劲，当前视频语言模型仍难以可靠地判断观测到的事件是否符合特定物理规律。现有基准主要评估生成视频的物理质量，对系统性地评估和改进视频大语言模型（VideoLLM）的物理规律理解所提供的支持有限。为填补这一空白，我们提出 PhyCheck，一个在两种互补粒度上组织的视频问答数据集。粗粒度子集要求模型判断视频中展示的现象是否符合或违反物理规律，而细粒度子集进一步考察模型能否捕捉导致违反或符合的物理细节。我们将这些子集用作结构化监督以改进物理理解。此外，该数据集还包含一个带有外部因果背景的诊断性子集，揭示影响物理合理性的隐藏因素，评估模型能否据此重新校准判断。使用 Qwen2.5-VL 微调的实验表明，用所提数据训练能大幅提升对物理一致性的理解，而诊断子集上的评估显示，当前模型仍难以将附加的因果条件纳入其决策。这些发现凸显了识别表层不一致与理解底层物理机制之间的差距，并为在 Video-LLM 中评估和改进物理理解提供了基础。

## 关键词

#物理规律理解 #视频问答 #基准数据集 #世界模型 #视频大语言模型
