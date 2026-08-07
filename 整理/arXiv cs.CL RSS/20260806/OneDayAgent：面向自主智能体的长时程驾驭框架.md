---
published: 2026-08-06
title: OneDayAgent：面向自主智能体的长时程驾驭框架
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents]]"
source_sha256: 642c536aa0eed6a08a8ecf843ab1ba32bb17609cd6952b6d78e437661ccb375c
original_url: https://arxiv.org/abs/2608.05013
processed: 2026-08-07
language: zh-CN
---

# OneDayAgent：面向自主智能体的长时程驾驭框架

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05013)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents|查看原始文件]]

## 摘要

- OneDayAgent 将开放式请求转化为受管理的执行过程，联合处理目标漂移、状态丢失与上下文溢出等失败模式
- 在 AgentIF-OneDay 的 104 个任务上，以 GLM-5.2 为后端时以 0.821 总分创下新的最先进水平
- 同一框架无需调优即可在三个模型家族的五个后端 LLM 上运行，具备跨后端泛化能力

## 正文

LLM 智能体越来越多地被应用于覆盖工作、学习和生活的开放式日常请求。这些任务具有长时程、跨环境、多模态的特点，迫使智能体在导航异构工具和附件的同时，在众多步骤中保持目标和约束。虽然先前的工作已经解决了诸如目标漂移、状态丢失和上下文溢出等个别失败模式，但单个驾驭框架能否联合管理这些问题并在不同后端上保持有效，研究较少。

我们提出了 OneDayAgent，一个面向自主智能体的长时程驾驭框架。OneDayAgent 将开放式请求转化为受管理的执行过程：将任务分解为有界子任务（bounded subtasks），在上下文压力下维护执行记忆，并验证和修复最终交付物。

我们在 AgentIF-OneDay 的 104 个任务上评估了 OneDayAgent。在 GLM-5.2 后端下，OneDayAgent 以 0.821 的总分创下新的最先进水平。同一框架可运行于来自三个模型家族的五个后端 LLM 之上，表明该框架无需调优即可跨后端泛化，即使不同模型在同一工作流下会诱发不同的执行风格。

## 关键词

#OneDayAgent #LLM智能体 #长时程任务 #AgentIF #多后端泛化
