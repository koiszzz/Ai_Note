---
published: 20260806
title: "MemSIF：从结构化交互到 LLM 智能体的双轨事实记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents]]"
source_sha256: d4ac26534a03084114435c551c5eb7a01c5b0ed59cc2653c44591e507b7225a2
original_url: "https://arxiv.org/abs/2608.01742"
processed: 2026-08-06
language: zh-CN

---

# MemSIF：从结构化交互到 LLM 智能体的双轨事实记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：YuFei Luo, Xiucheng Xu, Zhen Yang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.01742)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MemSIF- From Structured Interactions to Dual-Track Fact Memory for LLM Agents|查看原始文件]]

## 摘要

- 长期记忆对在长时程交互中运行的 LLM 智能体至关重要，但现有记忆系统的几个持久局限可追溯到长期交互设置中的两种反复错位模式：时间-结构错位（TSM）和延迟效用显现（DUM）。
- TSM 在时间邻近不能可靠对齐主题或事件级相关性时出现，DUM 在写入时显著性不能可靠预测未来查询效用时出现；为缓解这些错位模式，提出 MemSIF（带结构化交互与事实的记忆）。
- 结构化交互记忆将原始交互组织为保留局部主题连贯性的主题段和保持跨时间事件连续性的事件轨迹；双轨事实记忆用两个互补轨道：CoreFact 记忆在写入时整合稳定、模式引导信息，ActiveFact 记忆按需形成事实并提升由多个历史来源和反复查询需求支持的；LoCoMo 和 LongMemEval-S 上五个骨干 LLM 实验显示 MemSIF 在所有设置达最高 Total ACC。

## 正文

长期记忆对在长时程交互中运行的 LLM 智能体至关重要。然而，现有记忆系统的几个持久局限可追溯到长期交互设置中的两种反复错位模式：时间-结构错位（Temporal-Structural Misalignment，TSM）和延迟效用显现（Delayed Utility Manifestation，DUM）。TSM 在时间邻近不能可靠对齐主题或事件级相关性时出现，而 DUM 在写入时显著性不能可靠预测未来查询效用时出现。为缓解这些错位模式，我们提出 MemSIF（Memory with Structured Interactions and Facts，带结构化交互与事实的记忆），一个结构化交互到事实记忆框架。结构化交互记忆（Structured Interaction Memory）将原始交互组织为保留局部主题连贯性的主题段（Topical Segments）和保持跨时间事件连续性的事件轨迹（Event Trajectories）。双轨事实记忆（Dual-Track Fact Memory）使用两个互补轨道：CoreFact 记忆在写入时整合稳定、模式引导的信息，而 ActiveFact 记忆按需形成事实，并提升由多个历史来源和反复查询需求支持的用于复用。LoCoMo 和 LongMemEval-S 上跨五个骨干 LLM 的实验表明，MemSIF 在所有设置实现最高 Total ACC，在 LoCoMo 上比最强基线高 2.29%-8.79%，LongMemEval-S 上高 2.87%-6.15%。这些结果支持结合结构化交互记忆与双轨事实记忆以缓解 TSM 和 DUM 的有效性。代码可在此获取：https://github.com/luoyufeihaha/MemSIF。

## 关键词

#智能体记忆 #事实记忆 #结构化交互 #长期记忆 #arXiv