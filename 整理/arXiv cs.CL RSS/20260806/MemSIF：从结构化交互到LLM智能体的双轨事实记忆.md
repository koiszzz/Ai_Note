---
published: 2026-08-06
title: MemSIF：从结构化交互到LLM智能体的双轨事实记忆
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents|查看原始文件]]"
source_sha256: db20be36f0a63911d183dbde4c15ffc3eeae60193d0a421f765aed366f5240f8
original_url: https://arxiv.org/abs/2608.01742
processed: 2026-08-07
language: zh-CN
---

# MemSIF：从结构化交互到LLM智能体的双轨事实记忆

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01742)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents|查看原始文件]]

## 摘要

- 长期记忆对在长程交互中运行的 LLM 智能体至关重要；现有记忆系统的若干持久局限可追溯到长程交互中的两种反复出现的错位模式：时间-结构错位（TSM）与效用延迟显现（DUM）。
- TSM 指时间邻近性无法可靠地对应主题或事件层面的相关性；DUM 指写入时的重要性无法可靠地预测未来的查询效用。
- 本文提出 MemSIF（Memory with Structured Interactions and Facts，结构化交互与事实记忆框架）：结构化交互记忆把原始交互组织为主题片段（Topical Segments，保持局部主题连贯性）和事件轨迹（Event Trajectories，维持跨时间事件连续性）。
- 双轨事实记忆使用两条互补轨道：CoreFact 记忆在写入时整合稳定的、模式引导的信息；ActiveFact 记忆按需形成事实，并提升那些有多个历史来源支持且被反复查询的事实以供复用。
- 在 LoCoMo 和 LongMemEval-S 上、以五种骨干 LLM 的实验表明，MemSIF 在所有设定中 Total ACC 最高，比最强基线在 LoCoMo 上高 2.29%-8.79%，在 LongMemEval-S 上高 2.87%-6.15%。

## 正文

长期记忆对于在长程交互中运行的 LLM 智能体至关重要。然而，现有记忆系统的若干持久局限可以追溯到长程交互设定中两种反复出现的错位模式：时间-结构错位（Temporal-Structural Misalignment，TSM）和效用延迟显现（Delayed Utility Manifestation，DUM）。TSM 出现在时间邻近性无法可靠地与主题或事件层面的相关性对齐时；而 DUM 出现在写入时的重要性无法可靠地预测未来查询效用时。

为缓解这些错位模式，我们提出 MemSIF（Memory with Structured Interactions and Facts），一个结构化的交互到事实记忆框架。结构化交互记忆（Structured Interaction Memory）将原始交互组织为主题片段（Topical Segments）——保留局部主题连贯性——和事件轨迹（Event Trajectories）——维持跨时间的事件连续性。双轨事实记忆（Dual-Track Fact Memory）使用两条互补的轨道：CoreFact 记忆在写入时整合稳定、遵循模式（schema-guided）的信息；而 ActiveFact 记忆按需形成事实，并提升那些受到多个历史来源支持和反复查询需求支持的事实以便复用。

在 LoCoMo 和 LongMemEval-S 上、跨越五种骨干 LLM 的实验表明，MemSIF 在所有设定中都取得了最高的 Total ACC，在 LoCoMo 上比最强基线高出 2.29%-8.79%，在 LongMemEval-S 上高出 2.87%-6.15%。这些结果支持了将结构化交互记忆与双轨事实记忆相结合以缓解 TSM 和 DUM 的有效性。代码可在 https://github.com/luoyufeihaha/MemSIF 获取。

## 关键词

#LLM智能体 #长期记忆 #事实记忆 #记忆系统 #arXiv
