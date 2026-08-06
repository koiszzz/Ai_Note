---
title: "TurnSight：工具集成推理的轮级后见之明自蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TurnSight- Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/TurnSight- Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning]]"
source_sha256: 46bc597a2090754f1152214f2f165621453aae5522c3cfa252a543b7a7e394d1
original_url: "https://arxiv.org/abs/2608.04007"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TurnSight：工具集成推理的轮级后见之明自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Changle Qu、Sunhao Dai、Hengyi Cai 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04007)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TurnSight- Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning|查看原始文件]]

## 摘要

- 提出 TurnSight，轮级后见之明自蒸馏框架：直接从执行条件后见之明派生监督——构建带不同前瞻视界的多个后见之明视图，通过跨视界方向一致性选择可靠监督；最后把所选后见之明信号在兄弟 rollout 间归一化，用于自适应调制 RL 优势，同时保持其原始优化方向。
- 工具集成推理（TIR）使 LLM 能通过迭代工具交互解决复杂任务；但现有强化学习方法常依赖轨迹级监督，限制长视界 TIR 场景的细粒度信用分配；在线策略自蒸馏通过带特权上下文的教师分支提供更密集信号，但现有方法通常从真值答案或检索技能派生此类上下文，可能不反映智能体实际访问的状态；且 token 级监督无法捕获工具交互的轮级结构。
- 三个基准的大量实验证明 TurnSight 的有效性；代码：https://github.com/quchangle1/TurnSight

## 正文

论文编号：arXiv:2608.04007v1（更新类型：cross）。以下为摘要全文翻译。

工具集成推理（TIR）使 LLM 能够通过迭代工具交互解决复杂任务。然而，现有强化学习方法往往依赖轨迹级监督，限制了长视界 TIR 场景中的细粒度信用分配。在线策略自蒸馏通过带特权上下文的教师分支提供更密集的信号，但现有方法通常从真值答案或检索技能派生此类上下文，这可能不反映智能体实际访问的状态。此外，token 级监督无法捕获工具交互的轮级结构。为解决这一问题，我们提出 TurnSight，一个轮级后见之明自蒸馏框架：直接从执行条件的后见之明派生监督。随后它构建带不同前瞻视界的多个后见之明视图，并通过跨视界方向一致性选择可靠监督。最后，所选的后见之明信号在兄弟 rollout 间归一化，用于自适应调制 RL 优势，同时保留其原始优化方向。在三个基准上的大量实验证明了 TurnSight 的有效性。我们的代码可在 https://github.com/quchangle1/TurnSight 获取。

## 关键词

#工具集成推理 #后见之明 #自蒸馏 #信用分配
