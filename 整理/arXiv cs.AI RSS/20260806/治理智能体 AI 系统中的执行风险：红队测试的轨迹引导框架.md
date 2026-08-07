---
published: 20260806
title: "治理智能体 AI 系统中的执行风险：红队测试的轨迹引导框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Governing Execution Risk in Agentic AI Systems- A Trajectory-Guided Framework for Red Teaming.md"
source_note: "[[信息源/arXiv cs.AI RSS/Governing Execution Risk in Agentic AI Systems- A Trajectory-Guided Framework for Red Teaming]]"
source_sha256: 28f30979345bba54a8ef137734ab7db6e2f332e40871ba944b1f8765381306b9
original_url: "https://arxiv.org/abs/2608.04018"
processed: 2026-08-06
language: zh-CN

---

# 治理智能体 AI 系统中的执行风险：红队测试的轨迹引导框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhihao Zhu, Yi Yang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04018)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Governing Execution Risk in Agentic AI Systems- A Trajectory-Guided Framework for Red Teaming|查看原始文件]]

## 摘要

- AI 智能体日益嵌入组织工作流，与外部信息来源交互并调用数字工具执行运营任务；组织采用此类系统时，关键挑战是识别和缓解恶意或不可信外部信息引导智能体走向意外行动的风险。
- 现有红队方法大多依赖固定攻击模板或最终攻击结果，对攻击如何通过多步推理和工具使用展开的可见性有限；本文论证智能体执行风险应被理解为轨迹级现象，提出 TrajRed，一个使用执行轨迹揭示智能体 AI 系统漏洞的轨迹引导红队框架。
- 进一步开发 TrajGuard，一个运行时治理层，用红队期间发现的高风险轨迹监控和干预持续工作流；AgentDojo 四个组织任务套件实验显示 TrajRed 识别比固定模板和自动红队基线强得多的漏洞，TrajGuard 将所有评估攻击方法的攻击成功率降至接近零同时保持良性任务效用。

## 正文

AI 智能体日益嵌入组织工作流，与外部信息来源交互并调用数字工具执行运营任务。组织采用此类系统时，关键挑战是识别和缓解恶意或不可信外部信息引导智能体走向意外行动的风险。现有红队方法大多依赖固定攻击模板或最终攻击结果，对攻击如何通过多步推理和工具使用展开的可见性有限。我们论证智能体执行风险应被理解为轨迹级（trajectory-level）现象。基于此视角，我们提出 TrajRed，一个使用执行轨迹揭示智能体 AI 系统漏洞的轨迹引导红队框架。我们进一步开发 TrajGuard，一个运行时治理层，使用红队期间发现的高风险轨迹监控和干预持续工作流。AgentDojo 四个组织任务套件实验表明，TrajRed 识别出比固定模板和自动红队基线强得多的漏洞。基于这些漏洞发现，TrajGuard 将所有评估攻击方法的攻击成功率降至接近零，同时保持良性任务效用。综合起来，结果表明执行轨迹为智能体 AI 系统中的红队测试和风险控制提供实用基础。本工作强调在组织 AI 部署中治理智能体执行的重要性。

## 关键词

#智能体AI #红队测试 #执行风险 #运行时治理 #arXiv