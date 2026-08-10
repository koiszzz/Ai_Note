---
published: 2026-08-07
title: "DREAM：经事件感知记忆图的基于 LLM 的动态角色扮演"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/DREAM- LLM-based Dynamic Role-playing via Event-Aware Memory Graph.md"
source_note: "[[信息源/arXiv cs.CL RSS/DREAM- LLM-based Dynamic Role-playing via Event-Aware Memory Graph]]"
source_sha256: 08d09f323e0c41dc947fc1f305905b16484092bbd371369eec69a99bbe29a90f
original_url: "https://arxiv.org/abs/2608.05170"
processed: 2026-08-07
language: zh-CN
---

# DREAM：经事件感知记忆图的基于 LLM 的动态角色扮演

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Zhihao Xiao, Mengting Li, Xintao Wang, Linfeng Li, Limin Shui, Mengqi Ji, Borui Cai
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05170)

## 摘要

- 角色扮演智能体（RPAs）已成为 LLM 关键应用，实现沉浸式高保真角色模拟；既有角色准确扮演不仅需风格模仿，还需时间一致与因果锚定的行为推理。
- 现有 RPA 主要依赖静态角色描述与无结构记忆，限制维持长期叙事与人格连贯性。
- 引入 DREAM：受激发事件-信念-后果（ABC）认知模型启发的角色扮演智能体结构化记忆框架；将无结构文学文本转为事件感知记忆图（EMG），将角色经历组织为时间有序、因果链接的事件图。
- 该表征支持构建动态、双粒度角色画像，捕捉稳定人格特质与事件驱动行为演化；提出时间因果记忆（TCM）基准评估时间一致性与长程因果叙事连贯性；DREAM 在 CoSER、LIFECHOICE 与 TCM 取得 SOTA，超越多个强基线；结构化记忆增强角色扮演智能体可解释性与一致性。

## 正文

角色扮演智能体（role-playing agents, RPAs）已成为大语言模型的关键应用，实现沉浸式、高保真的角色模拟。对既有角色的准确扮演不仅需要风格模仿，还需要时间一致且因果锚定的行为推理。然而，现有 RPA 主要依赖静态的角色描述与无结构的记忆，限制它们维持长期叙事与人格连贯性的能力。研究引入 DREAM，一个受激发事件-信念-后果（Activating Event-Belief-Consequence, ABC）认知模型启发的角色扮演智能体结构化记忆框架。DREAM 将无结构的文学文本转化为一个事件感知记忆图（Event-aware Memory Graph, EMG），将角色经历组织成一个时间有序、因果链接的事件图。该表征能够构建动态、双粒度的角色画像，捕捉稳定的个性特质与事件驱动的行为演化。研究进一步提出时间因果记忆（Temporal Causal Memory, TCM）基准，评估时间一致性与长程因果叙事连贯性。DREAM 在 CoSER、LIFECHOICE 与 TCM 上取得最先进性能，超越多个强基线。该方法展示了结构化记忆在增强角色扮演智能体可解释性与一致性方面的有效性。

## 关键词

角色扮演、记忆图、事件感知、因果、一致性
