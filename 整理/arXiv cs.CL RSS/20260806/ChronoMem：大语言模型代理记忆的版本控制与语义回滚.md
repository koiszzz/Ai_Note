---
published: 2026-08-06
title: ChronoMem：大语言模型代理记忆的版本控制与语义回滚
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/ChronoMem- Version Control and Semantic Rollback for Large Language Model Agent Memory.md
source_note: "[[信息源/arXiv cs.CL RSS/ChronoMem- Version Control and Semantic Rollback for Large Language Model Agent Memory]]"
source_sha256: 8a4f451e842d7880f12a9bc25451b3b273e5dade2f52f9948118a54d419f4fce
original_url: https://arxiv.org/abs/2607.27773
processed: 2026-08-07
language: zh-CN
---

# ChronoMem：大语言模型代理记忆的版本控制与语义回滚

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27773)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/ChronoMem- Version Control and Semantic Rollback for Large Language Model Agent Memory|查看原始文件]]

## 摘要

- 提出 ChronoMem，集成到 Google 开源代理开发套件（Agent Development Kit）中的代理记忆语义版本控制层
- 每次记忆写入时提交全记忆快照，维护结构化版本历史，通过混合词汇与语义检索、排名融合与重排序将自然语言回滚请求映射到具体历史版本
- 引入暴露后评估协议，测试代理回滚后能否反事实地回答问题并总结历史
- 在长程对话基准上大幅改善回滚一致性的问答与历史总结，据作者所知是首个开源的系统化语义全局记忆回滚系统与基准

## 正文

LLM 代理日益依赖长期记忆来支持多会话交互和个性化。然而，现有的代理记忆系统围绕仅前向演化设计，不断累积、整合和覆盖知识，缺乏检查、版本化或回退先前状态的原则性机制。这使得代理在纠正、概念漂移和记忆损坏面前变得脆弱，尤其是在已经暴露于后续信息之后。

我们提出 ChronoMem，一个集成到 Google 生产就绪的开源代理开发套件（Agent Development Kit）中的代理记忆语义版本控制层。ChronoMem 在每次记忆写入时提交全记忆快照，维护结构化版本历史，并通过混合词汇和语义检索、排名融合和重排序，将自然语言的撤销意图映射到具体历史版本，从而支持自然语言回滚请求。

我们进一步引入暴露后评估协议，测试代理在回滚后能否进行反事实行为——即仿佛未来更新从未发生过一样，回答问题并总结历史。在增加了演化记忆状态和回滚任务的长程对话基准上，ChronoMem 相对于仅提示和仅检索基线，大幅改善了回滚一致性的问答和历史总结，同时在语义版本选择上表现强劲。据我们所知，ChronoMem 是首个支持 LLM 代理系统性语义全局记忆回滚的开源系统和基准。

## 关键词

#代理记忆 #版本控制 #回滚 #LLM代理 #语义检索 #arXiv
