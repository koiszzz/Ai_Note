---
published: 20260806
title: "InsightEmb：智能体洞察检索的动作意图嵌入学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval.md"
source_note: "[[信息源/arXiv cs.AI RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval]]"
source_sha256: 9a99ae75c259f62263d9a105adc851e79a80232c1e27623e1afc0a2ef6c672ff
original_url: "https://arxiv.org/abs/2608.04761"
processed: 2026-08-06
language: zh-CN

---

# InsightEmb：智能体洞察检索的动作意图嵌入学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tsz Ting Chung, Jiangnan Li, Jie Zhou, Mo Yu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04761)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/InsightEmb- Learning Action-Intent Embeddings for Agentic Insight Retrieval|查看原始文件]]

## 摘要

- 自我改进智能体从先前轨迹积累可复用洞察，使检索对将积累经验转化为可操作指导日益重要；每个决策步骤，检索正确洞察可帮助智能体朝目标前进，此设置称为智能体洞察检索，但现有检索方法主要建模语义相似性，忽视检索洞察是否解决智能体当前决策瓶颈。
- 本文提出 InsightEmb，一个对比嵌入框架，仅用数学推理数据学习可迁移、面向进展的检索几何：联合学习将具体情境与抽象启发式规则对齐，并聚类具有相似进展结构的推理轨迹。
- 在动态智能体任务和静态技能检索基准上评估，无需任何环境特定训练，InsightEmb 在所有评估中改进，超越现有推理嵌入模型的性能；结果表明状态-洞察匹配几何可跨域迁移，无需昂贵环境特定监督即可从公开推理数据有效训练。

## 正文

自我改进智能体从先前轨迹积累可复用洞察，使检索对将积累经验转化为可操作指导日益重要。每个决策步骤，检索正确洞察可帮助智能体朝目标前进，此设置我们称为智能体洞察检索（agentic insight retrieval）。然而，现有检索方法主要建模语义相似性，忽视检索洞察是否解决智能体当前决策瓶颈。我们提出 InsightEmb，一个对比嵌入框架，仅用数学推理数据学习可迁移、面向进展的检索几何。InsightEmb 联合学习将具体情境与抽象启发式规则对齐，并聚类具有相似进展结构的推理轨迹。我们在动态智能体任务和静态技能检索基准上评估 InsightEmb。无需任何环境特定训练，InsightEmb 在所有评估中改进，超越现有推理嵌入模型的性能。这些结果表明，状态-洞察匹配的几何可跨域迁移，无需昂贵环境特定监督即可从公开可用的推理数据有效训练。

## 关键词

#智能体洞察 #检索 #嵌入学习 #自我改进 #arXiv