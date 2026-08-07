---
published: 20260806
title: "EASy：迈向高效的基于 LLM 的智能体系统"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EASy- Towards Efficient LLM-Based Agentic System.md"
source_note: "[[信息源/arXiv cs.AI RSS/EASy- Towards Efficient LLM-Based Agentic System]]"
source_sha256: 3558d9dfde4150bd994c2bd51aa531651c624b3cf284609346cbd86796089482
original_url: "https://arxiv.org/abs/2608.04588"
processed: 2026-08-06
language: zh-CN

---

# EASy：迈向高效的基于 LLM 的智能体系统

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Junnan Liu, Linhao Luo, Thuy-Trang Vu, Gholamreza Haffari
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04588)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EASy- Towards Efficient LLM-Based Agentic System|查看原始文件]]

## 摘要

- 智能体系统已成为通过协调专门基于 LLM 的智能体解决复杂任务的有前景范式，但大多数现有系统主要优化任务成功，对执行器能力和计算成本等实际约束下的执行效率考虑有限。
- 本文提出 EASy，一个通过强化学习联合优化任务性能和计算效率的可训练智能体框架：为基于 LLM 的编排器配备异构执行器能力和成本画像的显式知识，实现超越仅性能路由的上下文敏感协调。
- 引入里程碑-计划-行动工作流，将复杂任务分解为可管理里程碑、构建依赖感知执行图、分配合适执行器并并行化独立步骤；开发树结构化回滚程序探索替代里程碑分解和执行计划，配合捕捉任务正确性、执行效率和轨迹完整性的多组件奖励；在数学推理、具身决策和深度研究基准上持续实现更强性能-效率权衡。

## 正文

智能体系统已成为通过协调专门基于 LLM 的智能体解决复杂任务的有前景范式。然而，大多数现有系统主要优化任务成功，对执行器能力和计算成本等实际约束下的执行效率考虑有限。现有基于路由器的方法在丰富、演变的任务上下文、多步依赖和中间执行反馈上推理能力有限，且对未见执行器泛化差。我们提出 EASy，一个通过强化学习联合优化任务性能和计算效率的可训练智能体框架。EASy 为基于 LLM 的编排器配备异构执行器能力和成本画像的显式知识，实现超越仅性能路由的上下文敏感协调。它进一步引入里程碑-计划-行动（milestone-plan-act）工作流，将复杂任务分解为可管理里程碑、构建依赖感知执行图、分配合适执行器，并行化独立步骤，同时使后续决策适应中间结果。为训练编排器，我们开发树结构化回滚程序，探索替代里程碑分解和执行计划，配合捕捉任务正确性、执行效率和轨迹完整性的多组件奖励。在数学推理、具身决策和深度研究基准上的广泛实验表明，EASy 持续比强智能体基线实现更强性能-效率权衡。

## 关键词

#智能体系统 #强化学习 #效率 #编排 #arXiv