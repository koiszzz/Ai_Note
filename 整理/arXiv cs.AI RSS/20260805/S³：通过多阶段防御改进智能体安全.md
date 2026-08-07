---
published: 20260805
title: "S³：通过多阶段防御改进智能体安全"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense.md"
source_note: "[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense]]"
source_sha256: 634367c0e646c670195063e205b8673c52887f9b535d264c94964efed9c93640
original_url: "https://arxiv.org/abs/2608.02683"
processed: 2026-08-06
language: zh-CN

---

# S³：通过多阶段防御改进智能体安全

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zibo Xiao, Haoyu Wang, Jun Sun
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02683)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense|查看原始文件]]

## 摘要

- LLM 智能体依赖记忆、规划、工具执行等多阶段智能体工作流，风险可能在各个阶段出现、跨步骤传播，难以检测和缓解。
- 本文引入阶段特定安全技能（Stage-Specific Safety Skills）统一抽象，并提出 S³ 多阶段防御框架：由守卫智能体在整个工作流中编排阶段特定安全技能进行风险检测与缓解。
- 构建的多阶段风险基准（MSRB）实验显示，S³ 在安全有效性和效用保持上均持续优于代表性最先进基线。

## 正文

大语言模型（LLM）智能体依赖多阶段的智能体工作流（如记忆、规划、工具执行等阶段）来完成复杂任务。然而，风险可能在不同阶段出现、跨步骤传播，并变得难以检测和缓解。现有安全方法只保护孤立阶段且难以集成，使智能体在整个工作流中缺乏全面保护。为解决这些局限，我们引入阶段特定安全技能（Stage-Specific Safety Skills），这是一种统一抽象，将异构安全设计表示为具有明确阶段语义的可复用、可组合组件。我们进一步开发了自动化转换流水线，将现有安全设计转换为可复用的安全技能，并建立社区驱动的安全技能库。在此抽象基础上，我们提出 S³，一个多阶段防御框架，其中守卫智能体在整个智能体工作流中编排阶段特定安全技能，进行风险检测和缓解。我们还构建了多阶段风险基准（MSRB），评估工作流各阶段的代表性风险。实验结果表明，S³ 在安全有效性和效用保持方面均持续优于代表性最先进基线。这些结果展示了阶段特定安全技能作为构建有韧性、可信智能体系统的可扩展、可组合基础的前景。

## 关键词

#智能体安全 #多阶段防御 #LLM #arXiv