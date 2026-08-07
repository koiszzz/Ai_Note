---
published: 20260806
title: "带路径级定位与重写的 LLM 智能体层级图记忆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite]]"
source_sha256: 4b54056522e47c02fafcf4b6c3a03ec885960fe04bcc02b3ef64e0fa322c64be
original_url: "https://arxiv.org/abs/2608.05095"
processed: 2026-08-06
language: zh-CN

---

# 带路径级定位与重写的 LLM 智能体层级图记忆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiawei Yue, Boran Wang, Xiaoqing Zhang, Shuxin Zheng, Ziwei Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05095)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite|查看原始文件]]

## 摘要

- 长期推理智能体需要可随新事实和外部反馈持续到达而高效有效更新的记忆；近期图记忆被采用以提供多跳检索和推理的结构化组织，但现有方法将所有记忆存储在扁平图中，累积历史记忆可引入无关上下文并增加检索期间证据选择成本，且通常独立更新记忆单元。
- 本文提出 HiGram，一个带路径级定位和重写的演化层级图记忆框架：先提出层级图记忆，将记忆组织为粗到细架构（上层节点和 MemoryUnit），减少检索期间无关信息量；再提出基于 MicroGraph 的路径级定位，利用查询和更新条件 MicroGraph 在重写前识别支持子图和证据路径。
- 最后提出协调重写方法，联合修订单元内记忆和单元间依赖，使有效依赖结构在定位证据路径中更新；长期对话问答和冲突感知记忆评估基准实验显示在答案质量和 token 效率上相对基线显著改进。

## 正文

长期推理智能体需要可随新事实和外部反馈持续到达而高效有效更新的记忆。近期图记忆被采用以提供多跳检索和推理的结构化组织。然而，现有方法将所有记忆存储在扁平图中，积累的历史记忆可引入无关上下文并增加检索期间证据选择成本。此外，它们通常独立更新记忆单元，需要重复单元级重写以覆盖相关变化。为解决这些问题，我们提出 HiGram，一个带路径级定位和重写的演化层级图记忆框架。具体来说，我们首先提出层级图记忆，将记忆组织为粗到细架构，由上层节点和 MemoryUnit 组成，从而减少检索期间无关信息量。我们进一步提出基于 MicroGraph 的路径级定位，利用查询和更新条件 MicroGraph 在重写前识别支持子图和证据路径。最后，我们提出协调重写方法，联合修订单元内记忆和单元间依赖，使有效依赖结构在定位证据路径中更新。长期对话问答和冲突感知记忆评估基准上的实验表明，我们的方法在答案质量和 token 效率上相对基线显示显著改进。此外，我们的方法在动态、静态和条件冲突下改进答案准确性和查询有效证据选择。

## 关键词

#图记忆 #层级记忆 #LLM智能体 #长期推理 #arXiv