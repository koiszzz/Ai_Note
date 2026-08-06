---
title: "LeanMem：LLM 智能体简单高效的长时记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LeanMem- Simple and Efficient Long-Term Memory for LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/LeanMem- Simple and Efficient Long-Term Memory for LLM Agents]]"
source_sha256: d2aadc51b7546721817e0a3173a8d8129455f07336a2a68682b3b77a41c2261e
original_url: "https://arxiv.org/abs/2608.03463"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# LeanMem：LLM 智能体简单高效的长时记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuxin Liao、Le Wu、Min Hou 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03463)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LeanMem- Simple and Efficient Long-Term Memory for LLM Agents|查看原始文件]]

## 摘要

- 主张历史对话内容应根据其可压缩性、时间动态与保真度要求区别处理；提出 LeanMem 轻量长时记忆框架：先过滤低价值内容，再把信息片段按性质存储为紧凑的个人资料记忆、时间结构化的事件记忆或带来源的记录记忆。
- 维护时只选择性更新动态演化的事件记忆，避免对稳定资料与不可变记录的冗余整合；推理时按查询特定证据需求动态选择记忆类型并分配检索预算。
- 在 LoCoMo 与 LongMemEval-S 上（GPT-4.1-mini 与 Qwen3-8B），LeanMem 在每个设置下都优于最强基于记忆的基线，最高提升 15.1 分，且构建成本、推理 token 与延迟最低或接近最低。
- 代码与数据集包含在补充材料中。

## 正文

论文编号：arXiv:2608.03463v1（更新类型：new）。以下为摘要全文翻译。

长时记忆对基于 LLM 的智能体维持交互并可靠利用遥远历史至关重要。然而，现有记忆系统通常通过统一的摘要与检索流水线处理异构对话内容，导致要么 token 消耗过多，要么细粒度证据不可逆丢失。我们认为，历史对话内容应根据其可压缩性、时间动态与保真度要求区别处理。基于这一洞察，我们提出 LeanMem，一个轻量长时记忆框架。LeanMem 首先过滤低价值内容，然后把信息片段按性质存储为紧凑的个人资料记忆、时间结构化的事件记忆或带来源的记录记忆。维护期间，只有动态演化的事件记忆被选择性更新，避免对稳定资料与不可变记录的冗余整合。推理期间，LeanMem 根据查询特定的证据需求动态选择记忆类型并分配检索预算，按需组装相关证据。在 LoCoMo 与 LongMemEval-S 上（使用 GPT-4.1-mini 与 Qwen3-8B），LeanMem 在每个设置下都优于最强的基于记忆的基线，最高提升 15.1 分，同时构建成本、推理 token 与延迟最低或接近最低。代码与数据集包含在补充材料中。

## 关键词

#长时记忆 #LLM智能体 #记忆管理 #检索
