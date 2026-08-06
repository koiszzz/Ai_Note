---
published: 2026-08-05
title: "S³：通过多阶段防御提升智能体安全"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense.md"
source_note: "[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense]]"
source_sha256: 634367c0e646c670195063e205b8673c52887f9b535d264c94964efed9c93640
original_url: "https://arxiv.org/abs/2608.02683"
processed: 2026-08-05
language: zh-CN
---

# S³：通过多阶段防御提升智能体安全

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02683)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense|查看原始文件]]

## 摘要

- 大语言模型智能体依赖记忆、规划和工具执行等多阶段工作流完成复杂任务，但风险可能在不同阶段出现、跨步骤传播并变得难以检测和缓解。
- 论文提出“阶段特定安全技能”（Stage-Specific Safety Skills），将异构安全设计表示为具有明确阶段语义、可复用且可组合的组件，并建立社区驱动的安全技能库。
- 在此基础上，作者提出 S³ 多阶段防御框架，由守卫智能体在整个智能体工作流中编排阶段特定安全技能，用于风险检测和缓解。
- 作者构建多阶段风险基准 MSRB。实验显示，S³ 在安全有效性和效用保持方面均稳定优于代表性先进基线。

## 正文

大语言模型（LLM）智能体依赖多阶段的智能体工作流来完成复杂任务，这些阶段包括记忆、规划和工具执行。然而，风险可能在不同阶段产生，在多个步骤之间传播，并因此变得难以检测和缓解。现有安全方法通常只保护孤立阶段，难以整合，使智能体无法在整个工作流中获得全面保护。

为解决这一问题，本文提出阶段特定安全技能（Stage-Specific Safety Skills），一种统一抽象。它将异构的安全设计表示为具有明确阶段语义、可复用且可组合的组件。作者还开发了自动转换流程，将已有安全设计转换为可复用的安全技能，并建立社区驱动的安全技能库。

基于这一抽象，本文提出 S³ 多阶段防御框架。该框架由一个守卫智能体负责编排阶段特定安全技能，在智能体工作流的各阶段持续进行风险检测和缓解。作者同时构建多阶段风险基准（Multi-Stage Risk Benchmark，MSRB），用于评估跨工作流阶段的代表性风险。

实验结果表明，S³ 在安全效果和效用保持两项指标上都稳定优于代表性先进基线。这些结果说明，阶段特定安全技能有望成为构建稳健、可信智能体系统的可扩展、可组合基础。

## 关键词

#智能体安全 #大语言模型 #安全技能 #风险基准
