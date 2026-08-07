---
published: 2026-08-06
title: OneDayAgent：迈向自主智能体的长时程执行框架
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents.md
source_note: "[[信息源/arXiv cs.LG RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents]]"
source_sha256: 8088d88e3cefd3f71af59927d994059ec5742272183f7fd9c80a813fa705829e
original_url: https://arxiv.org/abs/2608.05013
processed: 2026-08-07
language: zh-CN
---

# OneDayAgent：迈向自主智能体的长时程执行框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05013)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents|查看原始文件]]

## 摘要

- 面向开放式日常请求的智能体任务具有长时程、跨环境、多模态特点，先前工作仅分别处理目标漂移、状态丢失、上下文溢出等失败模式
- OneDayAgent 将开放式请求转化为受管理的执行过程：分解为有界子任务、上下文压力下维护执行记忆、验证并修复最终交付物
- AgentIF-OneDay 的 104 个任务上，GLM-5.2 后端取得 0.821 的总体得分，刷新最先进水平
- 同一框架在来自三个模型家族的五个后端 LLM 上运行且无需调优，不同模型在同一工作流下会诱发不同的执行风格

## 正文

LLM 智能体越来越多地应用于涵盖工作、学习和生活的开放式日常请求。这些任务具有长时程、跨环境、多模态的特点，迫使智能体在众多步骤中保持目标和约束，同时导航异构工具和附件。虽然先前工作已解决目标漂移、状态丢失和上下文溢出等个别失败模式，但单个框架能否联合管理它们并在不同后端间保持有效，研究较少。我们提出 OneDayAgent，一个面向自主智能体的长时程执行框架（harness）。OneDayAgent 将开放式请求转化为受管理的执行过程：将任务分解为有界的子任务，在上下文压力下维护执行记忆，并验证与修复最终交付物。我们在 AgentIF-OneDay 的 104 个任务上评估 OneDayAgent。使用 GLM-5.2 后端时，OneDayAgent 以 0.821 的总体得分刷新了最先进水平。同一框架在来自三个模型家族的五个后端 LLM 上运行，表明该框架无需调优即可跨后端泛化，即使不同模型在同一工作流下会诱发不同的执行风格。

## 关键词

#智能体 #大语言模型 #长时程任务 #执行框架 #AgentIF
