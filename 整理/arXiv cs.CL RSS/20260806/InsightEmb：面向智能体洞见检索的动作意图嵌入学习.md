---
published: 2026-08-06
title: InsightEmb：面向智能体洞见检索的动作意图嵌入学习
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval.md
source_note: "[[信息源/arXiv cs.CL RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval|查看原始文件]]"
source_sha256: 752ba40dd713b8e9fcb36bb4bd45ac90e08131c98f0839ba4e1aa58f53b9cc64
original_url: https://arxiv.org/abs/2608.04761
processed: 2026-08-07
language: zh-CN
---

# InsightEmb：面向智能体洞见检索的动作意图嵌入学习

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04761)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval|查看原始文件]]

## 摘要

- 自我改进的智能体会从既往轨迹中积累可复用的洞见，检索对把积累的经验转化为可执行的指导越来越重要；在每个决策步骤，检索到正确的洞见能帮助智能体向目标推进，这一设定称为智能体洞见检索。
- 现有检索方法主要建模语义相似性，忽略了检索到的洞见是否解决了智能体当前的决策瓶颈。
- 提出 InsightEmb，一个对比式嵌入框架，仅用数学推理数据学习可迁移的、面向进展的检索几何结构。
- InsightEmb 联合学习将具体情境与抽象启发式规则对齐、将具有相似进展结构的推理轨迹聚类两项任务。
- 在动态智能体任务和静态技能检索基准上评估：无需任何环境特定训练，InsightEmb 在所有评估中均取得提升，超越现有推理嵌入模型的性能；这表明状态—洞见匹配的几何结构可以跨领域迁移，从而可以利用公开推理数据高效训练，而无需昂贵的环境特定监督。

## 正文

自我改进的智能体从先前的轨迹中积累可复用的洞见，使得检索在将积累的经验转化为可操作的指导方面日益重要。在每个决策步骤，检索到正确的洞见可以帮助智能体向目标推进，我们将这一设定称为智能体洞见检索（agentic insight retrieval）。然而，现有的检索方法主要建模语义相似性，却忽视了检索到的洞见能否解决智能体当前的决策瓶颈。我们提出 InsightEmb，一个仅使用数学推理数据即可学习可迁移的、面向进展的检索几何结构的对比式嵌入框架。InsightEmb 联合学习两个目标：将具体情境与抽象的启发式规则对齐，以及将具有相似进展结构的推理轨迹聚类。我们在动态智能体任务和一个静态技能检索基准上评估 InsightEmb。在没有进行任何环境特定训练的情况下，InsightEmb 在所有评估中都优于现有推理嵌入模型。这些结果表明，状态—洞见匹配的几何结构可以跨领域迁移，从而能够利用公开可得的推理数据进行有效训练，而无需昂贵的环境特定监督。

## 关键词

#智能体 #嵌入学习 #检索 #推理 #对比学习
