---
title: "白盒、灰盒与黑盒访问下的 AI 取证：事后调查流程模型与研究议程"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AI Forensics Across White-, Grey-, and Black-Box Access- A Process Model and Research Agenda for Pos.md"
source_note: "[[信息源/arXiv cs.AI RSS/AI Forensics Across White-, Grey-, and Black-Box Access- A Process Model and Research Agenda for Pos]]"
source_sha256: 7f73e3985f97609ec9863fcb67fab4aee8ef76a29d8fd5ca00a322790b0e6309
original_url: "https://arxiv.org/abs/2608.03520"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 白盒、灰盒与黑盒访问下的 AI 取证：事后调查流程模型与研究议程

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03520)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AI Forensics Across White-, Grey-, and Black-Box Access- A Process Model and Research Agenda for Pos|查看原始文件]]

## 摘要

- AI 系统越来越多地参与可能需要事后调查的决策和行动；发生 AI 相关事件时，调查人员需要重建系统做了什么、为何如此行为，以及系统或供应链的哪一部分促成了结果。
- 现有 AI 取证研究较为零散，通常聚焦于特定系统类型、证据或分析技术；论文主张以调查人员拥有的访问权限作为组织该领域的起点。
- 论文区分白盒、灰盒和黑盒访问，并展示不同访问级别如何改变证据的收集、保存、分析和报告方式。
- 作者提出覆盖收集、保存、分析和报告四阶段的流程矩阵，以及涵盖运行时状态、上下文窗口、日志、检索存储、模型工件和训练谱系的 AI 系统易失性顺序。

## 正文

AI 系统越来越多地参与决策和行动，而这些决策和行动之后可能需要接受调查。当 AI 相关事件发生时，调查人员需要重建系统做了什么、为什么会这样行为，以及系统或供应链的哪一部分促成了最终结果。

现有关于 AI 取证的研究仍然较为零散，通常聚焦于某一种系统类型、某一类证据或某一种分析技术。本文认为，调查人员能够获得的访问权限是组织该领域的一个有用起点。作者区分白盒、灰盒和黑盒访问，并说明每种访问级别会如何改变证据的收集、保存、分析和报告方式。

基于这一划分，论文提出一个 AI 取证流程模型矩阵，覆盖收集、保存、分析和报告四个阶段。作者还提出 AI 系统的易失性顺序，涵盖运行时状态、上下文窗口、日志、检索存储、模型工件和训练谱系。

基于该矩阵，论文推导出一个受访问权限条件约束的检查框架，并指出多个开放研究问题，包括黑盒证据保存、模型版本证明、基于替代模型分析的不确定性量化，以及可变 AI 工件的证据保管链。

## 关键词

#AI取证 #数字取证 #模型审计 #事件调查
