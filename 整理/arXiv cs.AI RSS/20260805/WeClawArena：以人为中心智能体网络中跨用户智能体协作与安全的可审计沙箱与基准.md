---
published: 2026-08-05
title: "WeClawArena：以人为中心智能体网络中跨用户智能体协作与安全的可审计沙箱与基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/WeClawArena- An Auditable Sandbox and Benchmark for Cross-User Agents Collaboration and Security in .md"
source_note: "[[信息源/arXiv cs.AI RSS/WeClawArena- An Auditable Sandbox and Benchmark for Cross-User Agents Collaboration and Security in .]]"
source_sha256: fb1cca3b05d7970e41446951e0e31359f3702bb4e9a5b769b57a2584eb7df61d
original_url: "https://arxiv.org/abs/2608.03499"
processed: 2026-08-05
language: zh-CN
---

# WeClawArena：以人为中心智能体网络中跨用户智能体协作与安全的可审计沙箱与基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Prince Zizhuang Wang、Aojie Yuan、Haiyue Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03499)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/WeClawArena- An Auditable Sandbox and Benchmark for Cross-User Agents Collaboration and Security in .|查看原始文件]]

## 摘要

- 引入 WeClawArena，面向个人工作区多方拥有智能体协作的可审计基准与运行时沙箱：针对协作工具使用任务，个人工作区同时充当操作工具与个人约束；基准含六个跨用户任务域的 124 个基础任务，扩展到 620 个场景变体（每基础任务一个良性对照与四个攻击向量变体）。
- 持久个人智能体框架的近期进展使以人为中心的智能体网络成为现实部署目标：每个用户可由代表其行动、维护状态并通过社交与任务关系与其他智能体通信的 AI 智能体服务；这些网络中日常工具使用成为个人工作区上的多方拥有智能体协作，文件、记录、工具与政策不跨所有者直接可见。
- 沙箱记录对等消息、工具调用、资源操作、治理决策与最终工作区状态；WeClawArena 分开报告效用与攻击成功率，并从有界运行时证据审计攻击成功，支持任务崩溃、隐私泄露、投毒证据与无效权威路径的诊断。
- 现有智能体基准研究工具使用与协作，但不提供可验证跨用户智能体协作的端到端沙箱（含现实用户数字工作区），也不测试有害行动如何通过以人为中心的智能体网络传播。

## 正文

论文编号：arXiv:2608.03499v1（更新类型：new）。以下为摘要全文翻译。

持久个人智能体框架的近期进展正在使以人为中心的智能体网络成为现实部署目标：每个用户可以由一个代表用户行动的 AI 智能体服务，它维护状态，并通过社交与任务关系与其他智能体通信。在这些网络中，日常工具使用成为个人工作区上的多方拥有智能体协作，其中文件、记录、工具与政策不跨所有者直接可见。现有智能体基准研究工具使用与协作，但它们不提供带现实用户数字工作区的可验证跨用户智能体协作的端到端沙箱，也不测试有害行动如何通过以人为中心的智能体网络传播。我们引入 WeClawArena，一个面向个人工作区多方拥有智能体协作的可审计基准与运行时沙箱。WeClawArena 针对协作工具使用任务：个人工作区既充当操作工具，又充当个人约束。该基准包含六个跨用户任务域的 124 个基础任务，并扩展到 620 个场景变体，每个基础任务一个良性对照与四个攻击向量变体。沙箱记录对等消息、工具调用、资源操作、治理决策与最终工作区状态。WeClawArena 分开报告效用与攻击成功率，并从有界运行时证据审计攻击成功，支持对任务崩溃、隐私泄露、投毒证据与无效权威路径的诊断。

## 关键词

#智能体网络 #跨用户协作 #安全沙箱 #可审计性
