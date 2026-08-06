---
title: "HyperAgent：在工具模式超图上规划与行动的工具使用 LLM 智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HyperAgent- Planning and Acting over Tool-Schema Hypergraphs for Tool-Use LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/HyperAgent- Planning and Acting over Tool-Schema Hypergraphs for Tool-Use LLM Agents]]"
source_sha256: 1c036efa3372a4efc9831ceb7af2fe52d62c3f1ac8ce24866ab54b79a1c8f914
original_url: "https://arxiv.org/abs/2608.02650"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# HyperAgent：在工具模式超图上规划与行动的工具使用 LLM 智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zian Zhai、Xingyu Tan、Gaowang Zou 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02650)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HyperAgent- Planning and Acting over Tool-Schema Hypergraphs for Tool-Use LLM Agents|查看原始文件]]

## 摘要

- 在模式层面建模工具关系并构建有向工具-模式超图：工具表示为从所需输入模式节点到输出模式节点的超边。
- 提出 HyperAgent，工具-模式超图引导的动态规划与执行框架：先提取任务相关工具上下文图，用于引导构建模式感知的任务 DAG；执行时通过赤字导向扩展（识别未解决需求并按当前智能体状态检索支持生产者工具）构造状态条件化的工具支持图，动态实现每个子任务。
- 在 AppWorld 上，相比现有智能体基线，HyperAgent 提升任务完成性能，同时减少冗余 API 调用、LLM 交互与 token 消耗。

## 正文

论文编号：arXiv:2608.02650v1（更新类型：new）。以下为摘要全文翻译。

大语言模型（LLM）智能体日益依赖外部工具完成复杂真实世界任务。然而，由于隐式推理的局限与真实执行环境的演化特性，可靠的工具使用规划仍然具有挑战性。现有工具使用智能体通常依赖 LLM 从文本描述推断工具组合，这可能在复杂任务中导致低效探索与不可靠执行。为应对这些挑战，我们在模式层面建模工具关系，并构建有向工具-模式超图（Tool–Schema Hypergraph）：工具表示为从所需输入模式节点到输出模式节点的超边。此外，我们提出 HyperAgent，一个工具-模式超图引导的动态规划与执行框架。给定任务，HyperAgent 首先提取任务相关的工具上下文图，并用其引导构建模式感知的任务 DAG。执行期间，HyperAgent 通过赤字导向扩展（deficit-oriented expansion）动态实现每个子任务：识别未解决的需求，并根据当前智能体状态检索支持的生产者工具，构造状态条件化的工具支持图。在 AppWorld 上的实验表明，相比现有智能体基线，HyperAgent 提升任务完成性能，同时减少冗余 API 调用、LLM 交互与 token 消耗。

## 关键词

#工具使用 #LLM智能体 #超图 #规划
