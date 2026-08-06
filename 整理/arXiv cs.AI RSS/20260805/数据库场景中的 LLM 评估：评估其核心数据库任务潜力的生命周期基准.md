---
published: 2026-08-05
title: "数据库场景中的 LLM 评估：评估其核心数据库任务潜力的生命周期基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Evaluating LLMs in Database Scenarios- A Lifecycle Benchmark for Assessing Their Potential in Core D.md"
source_note: "[[信息源/arXiv cs.AI RSS/Evaluating LLMs in Database Scenarios- A Lifecycle Benchmark for Assessing Their Potential in Core D]]"
source_sha256: 611e98058772bdd6a9b8fb6a4b0b78f0b0a68cd3283fed09335b342b8ad8d4b0
original_url: "https://arxiv.org/abs/2608.03794"
processed: 2026-08-05
language: zh-CN
---

# 数据库场景中的 LLM 评估：评估其核心数据库任务潜力的生命周期基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shunfan Zheng、Dongsheng Shi、Yue Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03794)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Evaluating LLMs in Database Scenarios- A Lifecycle Benchmark for Assessing Their Potential in Core D|查看原始文件]]

## 摘要

- 引入 DBLifeBench，首个在五个关键生命周期阶段（设计、实现、运维、调试、维护）评估 LLM 的数据库基准。
- 提出 Progressive-Text2SQL：用结构化推理图模拟人类迭代问题求解，弥合歧义自然语言与复杂 SQL 逻辑之间的认知错配。
- 大量评估揭示关键洞察：通用模型表现均衡，而专用 Text-to-SQL 模型在设计与维护等非编码阶段遭受“灾难性遗忘”。
- DBLifeBench 是迈向评估与构建真正全栈数据库智能的基础一步。

## 正文

论文编号：arXiv:2608.03794v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）正在变革数据库交互范式，从简单的查询翻译器演变为自主数据库管理员（DBA）。然而，当前评估基准不成比例地聚焦于 Text-to-SQL 任务，忽视了完整的数据库生命周期——从初始 schema 设计到部署后维护。这种狭隘关注无法捕获真实世界数据库管理所需的多方面能力。为弥合这一差距，我们引入 DBLifeBench，首个在五个关键生命周期阶段评估 LLM 的基准：设计、实现、运维、调试与维护。此外，针对歧义自然语言与复杂 SQL 逻辑之间的认知错配，我们提出 Progressive-Text2SQL，一种利用结构化推理图模拟人类迭代问题求解的新任务。我们的广泛评估揭示了一个关键洞察：虽然通用模型表现均衡，但专用 Text-to-SQL 模型在设计与维护等非编码阶段遭受“灾难性遗忘”。DBLifeBench 是迈向评估与构建真正全栈数据库智能的基础一步。

## 关键词

#数据库 #LLM #生命周期 #Text2SQL
