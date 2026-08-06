---
published: 2026-08-05
title: "PhyCheck：视频 LLM 物理定律理解的细粒度证据接地数据集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs]]"
source_sha256: 559c35964ffe94604ea0640826c6dbdadb2440e7ead1c732b78a98aaffb46e13
original_url: "https://arxiv.org/abs/2608.02150"
processed: 2026-08-05
language: zh-CN
---

# PhyCheck：视频 LLM 物理定律理解的细粒度证据接地数据集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhongjie Ba、Shengwang Xu、Peng Cheng 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02150)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PhyCheck- Fine-Grained Evidence-Grounded Dataset for Physical Law Understanding in Video-LLMs|查看原始文件]]

## 摘要

- 引入 PhyCheck，按两个互补粒度组织的视频问答数据集：粗粒度子集要求模型判断视频所示现象是否符合或违反物理定律；细粒度子集进一步考察模型能否捕获负责违反或符合的物理细节。
- 用这些子集作为结构化监督改善物理理解；数据集还包含带外部因果上下文的诊断子集，揭示影响物理合理性的隐藏因素，评估模型能否据此重新校准判断。
- 具身智能与世界模型要求视频理解系统超越识别对象与动作，发展对物理规律性的理解；现有基准主要评估生成视频的物理质量，对系统评估与改进视频 LLM 的物理定律理解支持有限。
- 用 Qwen2.5-VL 微调的实验显示：用所提数据训练大幅改善物理一致性理解；诊断子集评估揭示当前模型仍难把额外因果条件纳入决策——凸显识别表层不一致与理解底层物理机制之间的差距。

## 正文

论文编号：arXiv:2608.02150v2（更新类型：replace-cross）。以下为摘要全文翻译。

具身智能与世界模型要求视频理解系统超越识别对象与动作，发展对物理规律性的理解。然而，尽管在通用视频理解任务上表现强劲，当前视频-语言模型仍难以可靠判断观测事件是否符合特定物理定律。现有基准主要评估生成视频的物理质量，对系统评估与改进视频大语言模型（VideoLLM）的物理定律理解提供有限支持。为弥补这一空白，我们引入 PhyCheck，一个按两个互补粒度组织的视频问答数据集。粗粒度子集要求模型判断视频所示现象是否符合或违反物理定律；细粒度子集进一步考察模型能否捕获负责违反或符合的物理细节。我们使用这些子集作为结构化监督来改善物理理解。此外，数据集包含一个带外部因果上下文的诊断子集，揭示影响物理合理性的隐藏因素，评估模型能否据此重新校准判断。用 Qwen2.5-VL 微调的实验表明，用所提数据训练大幅改善对物理一致性的理解，而诊断子集的评估揭示当前模型仍难以把额外因果条件纳入决策。这些发现凸显了识别表层不一致与理解底层物理机制之间的差距，并为评估与改善 Video-LLM 的物理理解提供基础。

## 关键词

#物理理解 #视频LLM #问答数据集 #具身智能
