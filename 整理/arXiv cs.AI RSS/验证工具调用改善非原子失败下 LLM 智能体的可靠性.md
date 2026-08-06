---
title: "验证工具调用改善非原子失败下 LLM 智能体的可靠性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Verified Tool Calls Improve LLM Agent Reliability Under Non-Atomic Failures.md"
source_note: "[[信息源/arXiv cs.AI RSS/Verified Tool Calls Improve LLM Agent Reliability Under Non-Atomic Failures]]"
source_sha256: 9827b2783769565a9d8fc7c53b7e0054aeaa42a6af7cf9b20200c3789b8b4136
original_url: "https://arxiv.org/abs/2608.02645"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 验证工具调用改善非原子失败下 LLM 智能体的可靠性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Isham Kalappurackal Mansoor、Abhishek Phadke、Pratip Rana
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02645)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Verified Tool Calls Improve LLM Agent Reliability Under Non-Atomic Failures|查看原始文件]]

## 摘要

- 引入轻量、验证感知的工具包装器：为工具调用增强后置条件验证、验证前重试逻辑与幂等键。
- 大语言模型（LLM）智能体依赖外部工具执行多阶段任务；现有智能体框架通常假设工具调用是原子的并返回二元成功或失败信号；但现实系统表现出非原子行为，如派发后超时、延迟可见性与部分状态更新——这些错配导致重复动作、任务成功（假象）与不必要工具执行等可靠性问题。
- 在受控模拟环境（注入非原子失败、覆盖多个任务模板）中评估：结果显示所提方法显著减少重复动作，同时保持相当任务成功率。
- 结论：强化工具交互语义是改善 LLM 智能体可靠性的有前景方向，无需修改底层语言模型。

## 正文

论文编号：arXiv:2608.02645v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）智能体依赖外部工具执行多阶段任务。现有智能体框架通常假设工具调用是原子的，并返回二元成功或失败信号。然而，现实系统表现出非原子行为，如派发后超时、延迟可见性与部分状态更新。这些错配导致包括重复动作、任务成功（假象）与不必要工具执行在内的可靠性问题。我们引入一个轻量、验证感知的工具包装器：为工具调用增强后置条件验证、验证前重试逻辑与幂等键。该方法在一个受控模拟环境中评估：注入非原子失败并覆盖多个任务模板。结果表明，所提方法显著减少重复动作，同时保持相当的任务成功率。总体而言，这些发现表明，强化工具交互语义是改善 LLM 智能体可靠性的有前景方向，而无需修改底层语言模型。

## 关键词

#工具调用 #可靠性 #非原子失败 #LLM智能体
