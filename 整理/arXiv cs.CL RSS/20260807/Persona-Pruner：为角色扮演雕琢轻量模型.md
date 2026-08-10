---
published: 2026-08-07
title: "Persona-Pruner：为角色扮演雕琢轻量模型"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Persona-Pruner- Sculpting Lightweight Models for Role-Playing.md"
source_note: "[[信息源/arXiv cs.CL RSS/Persona-Pruner- Sculpting Lightweight Models for Role-Playing]]"
source_sha256: b3597e6c0dce5a520674b6dd75c9e71e40ff8e3c5c4006379304b2e8748f4121
original_url: "https://arxiv.org/abs/2606.14695"
processed: 2026-08-07
language: zh-CN
---

# Persona-Pruner：为角色扮演雕琢轻量模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jinsu Kim, Jihoon Tack, Noah Lee, Jongheon Jeong
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2606.14695)

## 摘要

- 语言模型（LM）作为角色扮演聊天机器人显示显著潜力，给定角色或用户人格规格即提供一致、风格化交互；但应用到真实场景（如众多 NPC 同时交互的生态系统）因过度计算成本暴露关键低效。
- 质疑为单一角色投入完整通用模型的必要性，假设特定角色身份只依赖模型总容量的一小部分。
- 观察到朴素剪枝 LM 常严重退化特定角色的扮演性能——它不区分冗余知识与关键角色特质；提出 Persona-Pruner：从单一描述中隔离角色特定子网络来雕琢轻量角色扮演模型。
- 实验一致显示 Persona-Pruner 比现有 SOTA LLM 剪枝技术更有效保留角色扮演性能：RoleBench LLM-as-a-judge 分数上相对最强基线将稠密模型的性能下降最多减少 93.8%，同时保持通用 LLM 能力。

## 正文

语言模型（LM）作为角色扮演聊天机器人显示显著潜力：给定角色或用户人格的规格，即提供一致、风格化的交互。然而，将这些能力应用到真实应用（例如众多 NPC 同时交互的生态系统）会因过度计算成本暴露关键低效。本文质疑为单一角色投入完整通用模型的必要性，假设特定角色身份只依赖模型总容量的一小部分。研究观察到，朴素剪枝 LM 常严重退化特定角色的扮演性能——它不区分冗余知识与关键角色特质。研究提出 Persona-Pruner，一个从单一描述中隔离角色特定子网络、雕琢轻量角色扮演模型的框架。实验一致显示，Persona-Pruner 比现有最先进 LLM 剪枝技术更有效地保留角色扮演性能：在 RoleBench 的 LLM-as-a-judge 分数上，相对最强基线将稠密模型的性能下降最多减少 93.8%，同时仍保持通用 LLM 能力。代码见 https://github.com/jsu-kim/Persona-Pruner。

## 关键词

模型剪枝、角色扮演、子网络、轻量模型、LLM
