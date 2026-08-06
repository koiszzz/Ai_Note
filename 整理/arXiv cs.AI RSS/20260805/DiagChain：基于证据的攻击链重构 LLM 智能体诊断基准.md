---
published: 2026-08-05
title: "DiagChain：基于证据的攻击链重构 LLM 智能体诊断基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DiagChain- A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Recons.md"
source_note: "[[信息源/arXiv cs.AI RSS/DiagChain- A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Recons]]"
source_sha256: 5d8c23ca1697865f74489c9d3c7c0a25a385d6be3fbdb6b719ebf87d450f943a
original_url: "https://arxiv.org/abs/2608.03591"
processed: 2026-08-05
language: zh-CN
---

# DiagChain：基于证据的攻击链重构 LLM 智能体诊断基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xuyang Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03591)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DiagChain- A Diagnostic Benchmark for Evaluating LLM Agents on Evidence-Grounded Attack Chain Recons|查看原始文件]]

## 摘要

- 提出 DiagChain，支持对 LLM 智能体进行分阶段评估的基于证据攻击链重构诊断基准，包含覆盖多操作系统、证据噪声水平与链长的 69 个场景套件 MAIN-69。
- 引入证据中心检索增强生成（ECRAG）：把证据检索与重构链的演化结构化表示耦合。
- 提出五种互补指标评估重构过程的不同阶段，支持系统性故障诊断。
- 6 个 LLM 的评估显示，即使最强配置在 MAIN-69 的 849 个参考步骤中也仅成功 39.6%；较小模型难以把检索证据纳入输出，较大模型能推进到后续步骤，此时正确排序证据成为主要瓶颈。

## 正文

论文编号：arXiv:2608.03591v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）智能体通过检索和解释异构遥测数据来推断有序的攻击者动作，为攻击链重构提供了一条有前景的路径。然而，现有基准主要评估最终输出或聚合准确率，对错误如何在中间推理阶段产生与传播提供的洞察有限。我们提出 DiagChain，一个基于证据的攻击链重构诊断基准，支持对 LLM 智能体进行分阶段评估。DiagChain 包含 MAIN-69，一套覆盖多个操作系统、证据噪声水平和链长的 69 个场景。它进一步引入证据中心检索增强生成（ECRAG），把证据检索与重构链的演化结构化表示耦合。为评估重构过程的不同阶段并支持系统性故障诊断，文中引入五种互补指标。基于 6 个 LLM 的评估显示，DiagChain 揭示即使最强的配置在 MAIN-69 的 849 个参考步骤中也仅成功 39.6%。我们的分析进一步表明，较小的模型在把检索证据纳入输出的更基础任务上表现困难，而较大的模型能推进到更后面的步骤，此时正确排序证据成为主要瓶颈。这些结果验证了超越端到端准确率的诊断评估的重要性，并为改进基于证据的网络安全智能体提供了可操作的见解。

## 关键词

#网络安全 #攻击链 #LLM智能体 #诊断评估
