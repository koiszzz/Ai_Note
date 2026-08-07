---
published: 20260806
title: "用领域特定语言改进神经 PDE 求解器的自动设计"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language.md"
source_note: "[[信息源/arXiv cs.AI RSS/Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language]]"
source_sha256: 8c9eb3b2233a81082797b23f11eef35980ff2df717caf84a59aadea4c686e013
original_url: "https://arxiv.org/abs/2608.04384"
processed: 2026-08-06
language: zh-CN

---

# 用领域特定语言改进神经 PDE 求解器的自动设计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shengxin Kong, Liwen Xu, Jingwen Fu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04384)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Improving Auto-Design of Neural PDE Solvers with a Domain-Specific Language|查看原始文件]]

## 摘要

- 神经 PDE 求解器自动设计本质上是搜索空间表示问题；在无限制 Python 程序空间中，有效求解器形成极稀疏子集：大多数候选程序语法不正确、语义不兼容或数值不稳定，直接代码生成迫使 LLM 将大部分搜索能力花在导航实现失败而非推理求解器质量。
- ADSL-PDE 通过在求解器概念与可执行代码之间引入结构化搜索状态应对此挑战：表示决定神经 PDE 求解器的功能决策（架构、物理约束、目标、采样和优化），同时抽象底层实现细节；确定性编译器将每个有效搜索状态映射到可执行求解器。
- 实际上重塑搜索空间：移除大量无效程序区域、增加有意义候选密度、保留发现前所未见设计所需的组合自由；基于此表示的进化智能体用经验反馈迭代提出、评估和精炼求解器搜索状态；多个 PDE 基准上，ADSL-PDE 改进搜索效率和优化稳定性，前十个进化迭代内改进超 52%。

## 正文

神经 PDE 求解器自动设计本质上是搜索空间表示问题。在无限制 Python 程序空间中，有效求解器形成极稀疏子集：大多数候选程序语法不正确、语义不兼容或数值不稳定。因此直接代码生成迫使 LLM 将大部分搜索能力花在导航实现失败而非推理求解器质量。ADSL-PDE 通过在求解器概念与可执行代码之间引入结构化搜索状态应对此挑战。它表示决定神经 PDE 求解器的功能决策（架构、物理约束、目标、采样和优化），同时抽象掉底层实现细节。确定性编译器将每个有效搜索状态映射到可执行求解器。实际上，ADSL-PDE 重塑搜索空间：移除大量无效程序区域、增加有意义候选密度、保留发现前所未见设计所需的组合自由。求解器进化因此可作用于设计决策而非代码工件。基于此表示，我们的进化智能体用经验反馈迭代提出、评估和精炼求解器搜索状态。跨多个 PDE 基准，ADSL-PDE 改进搜索效率和优化稳定性，在前十个进化迭代内实现超 52% 的改进。这些结果表明 LLM 驱动自动设计的更广泛原则：有效智能体不仅需要更强推理，还需要将探索集中在有效且重要决策上的搜索表示。

## 关键词

#PDE求解器 #领域特定语言 #自动设计 #进化搜索 #arXiv