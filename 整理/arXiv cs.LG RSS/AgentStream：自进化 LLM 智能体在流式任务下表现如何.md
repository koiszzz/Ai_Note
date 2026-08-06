---
title: "AgentStream：自进化 LLM 智能体在流式任务下表现如何"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AgentStream- How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks-.md"
source_note: "[[信息源/arXiv cs.LG RSS/AgentStream- How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks-]]"
source_sha256: 60e2ac238dda658966ade95c5d86b7aac314adc33037d6204f2e9e0f419f69c4
original_url: "https://arxiv.org/abs/2608.00155"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AgentStream：自进化 LLM 智能体在流式任务下表现如何

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Dong Yan、Jian Liang、Dapeng Hu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00155)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/AgentStream- How Well Do Self-Evolving LLM Agents Perform Under Streaming Tasks-|查看原始文件]]

## 摘要

- 引入 AgentStream，统一框架：通过把智能体基准组织为可配置任务流，并在测试时实例化隔离、顺序与交错三种流式场景（渐进变化流的范围与域组成），评估涵盖多样进化组件的自进化智能体。
- 大语言模型（LLM）智能体可通过从自身积累经验持续改进而自进化；但现有研究主要采用独立评估，自进化智能体在现实流式设置（适应多样复杂任务流）中的行为仍鲜为人知。
- 三种前沿基础模型上组合评估五种代表性自进化方法：解开模型能力、方法架构与流式场景如何共同塑造自进化。
- 结果：自进化可靠性随流式场景变化；自进化收益受模型能力门控且随模型强度非单调；无单一方法跨模型与场景主导——为跨模型与流式场景选择自进化方法提供具体指导；倡导自进化智能体应在现实任务流而非孤立单任务设置下评估。

## 正文

论文编号：arXiv:2608.00155v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）智能体可以通过从自身积累的经验持续改进而自进化。然而，现有研究主要采用独立评估。因此，自进化智能体在现实流式设置中的行为——它们适应多样且复杂的任务流——仍鲜为人知。为弥补这一空白，我们引入 AgentStream，一个统一框架：通过把智能体基准组织成可配置任务流，并在测试时实例化隔离（Isolated）、顺序（Sequential）与交错（Interleaved）三种流式场景（渐进变化流的范围与域组成），评估涵盖多样进化组件的自进化智能体。在这些场景上，我们组合评估三种前沿基础模型上的五种代表性自进化方法，解开模型能力、方法架构与流式场景如何共同塑造自进化。我们的结果显示：自进化可靠性随流式场景变化；自进化的收益受模型能力门控，且随模型强度非单调；没有单一方法跨模型与场景主导。这些发现为跨模型与流式场景选择自进化方法提供具体指导。总体而言，我们倡导自进化智能体应在现实任务流下评估，而非孤立的单任务设置。

## 关键词

#自进化智能体 #流式任务 #评估框架 #LLM智能体
