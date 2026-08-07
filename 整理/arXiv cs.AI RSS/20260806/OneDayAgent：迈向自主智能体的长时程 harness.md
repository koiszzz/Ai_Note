---
published: 20260806
title: "OneDayAgent：迈向自主智能体的长时程 harness"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents]]"
source_sha256: 4cad185a97290a461e77ee203fcfd3a519ce17ff2df4dc8b63d811f346a5ae01
original_url: "https://arxiv.org/abs/2608.05013"
processed: 2026-08-06
language: zh-CN

---

# OneDayAgent：迈向自主智能体的长时程 harness

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jingsheng Zheng, Xinyuan Fang, Jintian Zhang, Zhengke Gui, Huajun Chen, Ningyu Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05013)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OneDayAgent- Towards a Long-Horizon Harness for Autonomous Agents|查看原始文件]]

## 摘要

- LLM 智能体日益应用于跨越工作、学习和生活的开放式日常请求；这些任务长时程、跨环境、多模态，迫使智能体在导航异构工具和附件时跨许多步骤保留目标和约束。
- 先前工作解决目标漂移、状态丢失和上下文溢出等个体失败模式，但单个 harness 能否联合管理它们并跨后端保持有效研究较少；本文呈现 OneDayAgent，一个自主智能体的长时程 harness。
- OneDayAgent 将开放式请求转化为受管执行过程：将任务分解为有界子任务、在上下文压力下维护执行记忆、验证和修复最终交付物；AgentIF-OneDay 104 个任务评估，GLM-5.2 后端下 OneDayAgent 以整体分数 0.821 创新最先进；同一 harness 跨三个模型家族五个后端 LLM 运行，指示无需调优即跨后端泛化。

## 正文

LLM 智能体日益应用于跨越工作、学习和生活的开放式日常请求。这些任务长时程、跨环境、多模态，迫使智能体在导航异构工具和附件时跨许多步骤保留目标和约束。虽然先前工作解决目标漂移、状态丢失和上下文溢出等个体失败模式，单个 harness 能否联合管理它们并跨后端保持有效研究较少。我们呈现 OneDayAgent，一个自主智能体的长时程 harness。OneDayAgent 将开放式请求转化为受管执行过程：将任务分解为有界子任务，在上下文压力下维护执行记忆，并验证和修复最终交付物。我们在 AgentIF-OneDay 的 104 个任务上评估 OneDayAgent。GLM-5.2 后端下，OneDayAgent 以整体分数 0.821 创新最先进。同一 harness 跨三个模型家族的五个后端 LLM 运行，指示 harness 无需调优即可跨后端泛化，即使不同模型在同一工作流下诱导不同执行风格。

## 关键词

#长时程智能体 #harness #任务分解 #执行记忆 #arXiv