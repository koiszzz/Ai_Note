---
published: 2026-08-05
title: "S³：通过多阶段防御提升智能体安全性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense.md"
source_note: "[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense]]"
source_sha256: 634367c0e646c670195063e205b8673c52887f9b535d264c94964efed9c93640
original_url: "https://arxiv.org/abs/2608.02683"
processed: 2026-08-05
language: zh-CN
---

# S³：通过多阶段防御提升智能体安全性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zibo Xiao、Haoyu Wang、Jun Sun
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02683)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/$S^3$- Improving Agent Safety through Multi-Stage Defense|查看原始文件]]

## 摘要

- 提出阶段特定安全技能（Stage-Specific Safety Skills）抽象：将异构安全设计表示为带有显式阶段语义的可复用、可组合组件。
- 构建自动转换流水线，把现有安全设计转化为可复用的安全技能，并建立社区驱动的安全技能库。
- 提出 S³ 多阶段防御框架，由守卫智能体（guard agent）编排各阶段安全技能，在智能体工作流全过程进行风险检测与缓解。
- 构建多阶段风险基准（MSRB）评估各工作流阶段的代表性风险；实验表明 S³ 在安全有效性与实用性保持上均持续优于现有最强基线。

## 正文

论文编号：arXiv:2608.02683v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）智能体依赖多阶段的智能体工作流（包括记忆、规划、工具执行等阶段）来完成复杂任务。然而，风险可能出现在不同阶段，并在步骤之间传播，变得难以检测和缓解。现有的安全方法只保护孤立的阶段且难以集成，导致智能体在整个工作流中缺乏全面的防护。为克服这些局限，我们引入阶段特定安全技能（Stage-Specific Safety Skills），这是一种统一抽象，将异构的安全设计表示为带有显式阶段语义的可复用、可组合组件。我们进一步开发了自动化转换流水线，将现有安全设计转换为可复用的安全技能，并建立社区驱动的安全技能库。在此抽象基础上，我们提出 S³，一个多阶段防御框架，由守卫智能体在工作流中编排阶段特定安全技能，进行风险检测与缓解。我们还构建了多阶段风险基准（MSRB），用于评估各工作流阶段的代表性风险。实验结果表明，S³ 在安全有效性和实用性保持两方面都持续优于具有代表性的最先进基线。这些结果展示了阶段特定安全技能作为可扩展、可组合基础，构建韧性与可信智能体系统的潜力。

## 关键词

#LLM智能体 #安全防御 #多阶段 #智能体工作流
