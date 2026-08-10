---
published: 2026-08-07
title: "DREAM：通过事件感知记忆图实现基于 LLM 的动态角色扮演"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DREAM- LLM-based Dynamic Role-playing via Event-Aware Memory Graph.md"
source_note: "[[信息源/arXiv cs.AI RSS/DREAM- LLM-based Dynamic Role-playing via Event-Aware Memory Graph]]"
source_sha256: bf58bf1be2f1d6374638ebd609dea7a5c0def71e573784d10fbd2384016b3674
original_url: "https://arxiv.org/abs/2608.05170"
processed: 2026-08-07
language: zh-CN
---

# DREAM：通过事件感知记忆图实现基于 LLM 的动态角色扮演

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhihao Xiao, Mengting Li, Xintao Wang, Linfeng Li, Limin Shui, Mengqi Ji, Borui Cai
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05170)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DREAM- LLM-based Dynamic Role-playing via Event-Aware Memory Graph|查看原始文件]]

## 摘要

- 角色扮演智能体（RPA）已成为大语言模型的关键应用，实现沉浸式高保真角色模拟；既有角色的准确扮演不仅需要风格模仿，还需要时间一致且因果接地的行为推理。
- 现有 RPA 主要依赖静态角色描述与无结构记忆，限制其维持长期叙事与人格一致性的能力。
- 引入 DREAM：受激活事件-信念-后果（ABC）认知模型启发的角色扮演智能体结构化记忆框架——将无结构文学文本转化为事件感知记忆图（EMG），把角色经历组织为时间有序且因果关联的事件图；该表示支持构建动态、双粒度角色画像，同时捕获稳定人格特质与事件驱动的行为演化。
- 提出时序因果记忆（TCM）基准评估时间一致性与长程因果叙事连贯性；DREAM 在 CoSER、LIFECHOICE 与 TCM 上取得最优性能，优于多个强基线，展示结构化记忆对增强角色扮演智能体可解释性与一致性的有效性。

## 正文

角色扮演智能体（Role-playing agents，RPAs）已成为大语言模型的关键应用，实现沉浸式高保真角色模拟。既有角色的准确角色扮演不仅需要风格模仿，还需要时间一致且因果接地的行为推理。然而，现有 RPA 主要依赖静态角色描述与无结构记忆，限制其维持长期叙事与人格一致性的能力。我们引入 DREAM，一个受激活事件-信念-后果（Activating Event-Belief-Consequence，ABC）认知模型启发的角色扮演智能体结构化记忆框架。DREAM 将无结构文学文本转化为事件感知记忆图（Event-aware Memory Graph，EMG），将角色经历组织为时间有序且因果关联的事件图。该表示能够构建动态、双粒度角色画像，同时捕获稳定人格特质与事件驱动的行为演化。我们进一步提出时序因果记忆（Temporal Causal Memory，TCM）基准，以评估时间一致性与长程因果叙事连贯性。DREAM 在 CoSER、LIFECHOICE 与 TCM 上取得最优性能，优于多个强基线。我们的方法展示了结构化记忆对增强角色扮演智能体可解释性与一致性的有效性。

## 关键词

#角色扮演智能体 #记忆图 #认知模型 #叙事一致性
