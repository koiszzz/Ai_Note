---
published: 2026-08-05
title: "ContinualSkillBench：LLM 智能体能否真正进化其能力"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ContinualSkillBench- Can LLM Agents Truly Evolve Their Capabilities-.md"
source_note: "[[信息源/arXiv cs.LG RSS/ContinualSkillBench- Can LLM Agents Truly Evolve Their Capabilities-]]"
source_sha256: ffbe19f47a6b7a06fac459a05d18e9bd92fc6a7ba207065f645de6bd862050b6
original_url: "https://arxiv.org/abs/2608.03874"
processed: 2026-08-05
language: zh-CN
---

# ContinualSkillBench：LLM 智能体能否真正进化其能力

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Tianyi Guan、Yiding Wang、Haotong Yang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03874)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ContinualSkillBench- Can LLM Agents Truly Evolve Their Capabilities-|查看原始文件]]

## 摘要

- 提出 ContinualSkillBench，面向上下文内持续技能学习的动态评估框架：覆盖五个代表性领域，每领域含 100 个按难度递增、支持跨任务技能复用机会的互连子任务。
- 现代智能体框架为大语言模型配备外部技能库解决复杂任务；但这些系统能否有效进化技能、所得技能是否提升任务解决能力仍不明。
- 实验显示顺序执行普遍改善性能，但增益跨模型与领域差异显著；上下文学习平均表现与显式技能维护相当，表明大部分改善来自对先前上下文与反馈的适应，而非可复用技能抽象本身；显式技能对需可复用流程或精确输出的任务提供选择性收益。
- 能力较弱模型倾向于积累更大、更碎片化的任务特定技能集合——当前上下文内技能进化机制可支持持续适应，但在把经验一致巩固为稳健、可迁移技能方面仍困难。

## 正文

论文编号：arXiv:2608.03874v1（更新类型：cross）。以下为摘要全文翻译。

现代智能体框架为大语言模型配备外部技能库，以解决复杂任务。然而，这些系统能否有效进化其技能、以及由此产生的技能能否提升任务解决能力，仍不清楚。为弥合这一差距，我们引入 ContinualSkillBench，一个面向上下文内持续技能学习的动态评估框架。它覆盖五个代表性领域，每个领域包含 100 个按难度递增、并为跨任务技能复用提供机会的互连子任务。我们的实验表明，顺序执行通常改善性能，但增益在不同模型与领域间差异显著。此外，上下文学习的平均表现与显式技能维护相当，表明大部分改善源于对先前上下文与反馈的适应，而非可复用技能抽象本身。然而，显式技能对需要可复用流程或精确输出的任务提供选择性收益。我们进一步发现，能力较弱的模型倾向于积累更大、更碎片化的任务特定技能集合。这些发现表明，当前的上下文内技能进化机制可以支持持续适应，但在把经验一致地巩固为稳健、可迁移技能方面仍存在困难。

## 关键词

#LLM智能体 #持续学习 #技能进化 #基准
