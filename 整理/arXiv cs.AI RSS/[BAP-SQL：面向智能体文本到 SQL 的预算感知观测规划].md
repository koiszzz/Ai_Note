---
title: "BAP-SQL：面向智能体文本到 SQL 的预算感知观测规划"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BAP-SQL- Budget-Aware Observation Planning for Agentic Text-to-SQL.md"
source_note: "[[信息源/arXiv cs.AI RSS/BAP-SQL- Budget-Aware Observation Planning for Agentic Text-to-SQL]]"
source_sha256: 6ce273f30efc1bf9c9074d43017f956cc2fc004d74c575a23f95564b2d29967e
original_url: "https://arxiv.org/abs/2608.02876"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# BAP-SQL：面向智能体文本到 SQL 的预算感知观测规划

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02876)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BAP-SQL- Budget-Aware Observation Planning for Agentic Text-to-SQL|查看原始文件]]

## 摘要

- 使用工具的智能体并不只是被动消费观测信息：它们的行动会决定下一步收到什么信息。
- 在智能体文本到 SQL 任务中，宽泛查询可能在有用证据出现前就消耗上下文和数据库计算；事后压缩无法恢复被省略的行，也无法挽回已经消耗的工作。
- 论文提出 BAP-SQL，把观测形成视为预算控制阶段：估计查询风险、在有益时重写 SQL，并把硬性限制交给独立的运行时防护层。
- 在通用 4B、专用 FINER-SQL 4B 和 7B 主干模型上，BAP-SQL 都提升了紧预算条件下的成功率。在主要的 BIRD 派生设置中，相比匹配的监督微调（SFT），成功率提高 3.4/3.6 个百分点，同时 token 使用量减少 4.5/5.0%。
- 匹配重训练和任务级迁移实验表明，收益与策略可见的规划和预算敏感的救援机制有关；当模型能力和预算提高时，收益会减弱，在最宽松设置下甚至反转，而且不会减少数据库工作量。

## 正文

使用工具的智能体并不只是消费观测信息：它们采取的行动会决定下一步接收到什么信息。在智能体文本到 SQL 任务中，宽泛的查询可能在有用证据出现之前就消耗大量上下文和数据库计算；而事后进行压缩，既无法恢复被省略的行，也不能挽回已经消耗的工作。

本文提出 BAP-SQL，将观测形成视为一个预算控制阶段。该方法会估计查询风险，在有帮助时重写 SQL，并将硬性限制交给独立的运行时防护层。实验覆盖通用 4B 主干、专用 FINER-SQL 4B 主干和 7B 主干，结果显示 BAP-SQL 能够提升严格预算下的任务成功率。

在主要的 BIRD 派生设置中，相较于匹配的监督微调（SFT）基线，BAP-SQL 带来 3.4/3.6 个百分点的提升，同时少使用 4.5/5.0% 的 token。匹配重训练和任务级迁移实验将这一收益与策略可见的规划、以及对预算敏感的救援机制联系起来。

不过，随着模型能力和可用预算增加，BAP-SQL 的优势会减弱；在最宽松的设置下，优势还会反转。此外，该方法并不会减少数据库工作量。研究结果表明，在智能体文本到 SQL 中，观测规划和预算控制是影响效率与成功率的重要环节。

## 关键词

#文本到SQL #智能体 #预算控制 #查询规划 #工具使用 #BAP-SQL
