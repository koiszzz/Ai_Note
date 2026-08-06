---
published: 2026-08-05
title: "智能体操作系统（AOS）：分布式智能体系统的参考操作系统架构"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/The Agent Operating System (AOS)- A Reference Operating Architecture for Distributed Agentic Systems.md"
source_note: "[[信息源/arXiv cs.AI RSS/The Agent Operating System (AOS)- A Reference Operating Architecture for Distributed Agentic Systems]]"
source_sha256: 8e5c2f9a5263261585ca9e99d7f4286f25f040f9632e5306cc83abb73a19854b
original_url: "https://arxiv.org/abs/2608.03214"
processed: 2026-08-05
language: zh-CN
---

# 智能体操作系统（AOS）：分布式智能体系统的参考操作系统架构

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ankur Sharma、Deep Shah
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03214)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Agent Operating System (AOS)- A Reference Operating Architecture for Distributed Agentic Systems|查看原始文件]]

## 摘要

- 提出智能体操作系统（AOS），供应商中立的分布式智能体系统参考操作系统架构：包含两个内部平面——控制与治理平面（负责意图、政策、信任、权威、置信度、可审计性、可观测性与人类监督）与运行时与协调平面（负责智能体生命周期、工作流协调、模型与工具路由、上下文与记忆协调、调度、流量管理与运行时保证）；平台服务、Linux 或 Windows、容器运行时与物理基础设施保持在 AOS 边界之外，经显式接口集成。
- 大语言模型已把 AI 从孤立预测服务转变为长期运行、分布式系统的组件（推理、调用工具、检索外部状态、委派任务、代表用户与组织行动）；周边生态以智能体框架、工作流引擎、模型服务平台、记忆系统、通信协议与可观测性工具回应——这些技术改善执行，但不提供稳定、实现无关的操作架构来治理意图、选择能力、跨委派保持权威、控制不确定性、协调运行时行为并重建重大行动发生的原因。
- 论文规定 AOS 概念、不变量、接口对象、优化目标、部署画像与可靠性职责，并识别权衡与未解决研究问题。
- AOS 不作为现有框架或基础设施的替代提出；它被提议为把异构组件组合成可治理、可靠、可观测、可互操作智能体系统的操作系统架构。

## 正文

论文编号：arXiv:2608.03214v1（更新类型：new）。以下为摘要全文翻译。

大语言模型已经把人工智能从孤立的预测服务转变为长期运行、分布式系统的组件：推理、调用工具、检索外部状态、委派任务，并代表用户与组织行动。周边生态系统以智能体框架、工作流引擎、模型服务平台、记忆系统、通信协议与可观测性工具回应。这些技术改善执行，但未提供稳定、实现无关的操作架构：用于治理意图、选择能力、跨委派保持权威、控制不确定性、协调运行时行为，并重建重大行动发生的原因。本文提出智能体操作系统（Agent Operating System，AOS），一个供应商中立的分布式智能体系统参考操作系统架构。AOS 包含两个内部平面：控制与治理平面（Control & Governance Plane），负责意图、政策、信任、权威、置信度、可审计性、可观测性与人类监督；以及运行时与协调平面（Runtime & Coordination Plane），负责智能体生命周期、工作流协调、模型与工具路由、上下文与记忆协调、调度、流量管理与运行时保证。平台服务、Linux 或 Windows、容器运行时与物理基础设施保持在 AOS 边界之外，并通过显式接口集成。论文规定 AOS 的概念、不变量、接口对象、优化目标、部署画像与可靠性职责。它还识别权衡与未解决的研究问题。AOS 不是作为现有框架或基础设施的替代提出；它被提议为这样的操作系统架构：通过它，异构组件可以被组合成可治理、可靠、可观测且可互操作的智能体系统。

## 关键词

#智能体操作系统 #分布式智能体 #参考架构 #治理
