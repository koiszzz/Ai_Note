---
published: 2026-08-05
title: "WCM：用于可泛化人机交互的世界—认知模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction.md"
source_note: "[[信息源/arXiv cs.LG RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction.]]"
source_sha256: 342c616074005dbf6974bab6ae3e44363f9084adc9cf7b704bbc0d0e7571d09c
original_url: "https://arxiv.org/abs/2607.22999"
processed: 2026-08-05
language: zh-CN
---

# WCM：用于可泛化人机交互的世界—认知模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yuzhen Chen、KC Zhou
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22999)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction.|查看原始文件]]

## 摘要

- 语言智能体现在能与用户在软件中流利交互，但机器人在物理任务上仍难带来相当交互；当前机器人控制范式（包括视觉—语言—动作策略与世界模型规划器）主要针对指令执行优化，让用户对为何选择某动作几乎没有可见性，也缺少经交互重定向、纠正或教导机器人的机制。
- 提出世界—认知模型（WCM），一个以人为中心的具身智能体，建立在 SLAK 架构（感知、逻辑、动作与知识）与异步运行时之上：SLAK 分离感知、推理、控制与记忆，运行时让推理、对话与执行并发进行。
- WCM 还引入人在环教学模式：用户能交互式教导机器人困难或长视界任务；教学片段与自主任务 rollout 被精炼为思维链监督，持续改善模型。
- WCM 在九个真实世界人机交互任务上取得 73.8% 平均成功率，包括从 CoT 微调留出的任务与一个经教学学得的长视界任务。

## 正文

论文编号：arXiv:2607.22999v2（更新类型：replace-cross）。以下为摘要全文翻译。

语言智能体现在可以在软件中与用户流利交互，但机器人在物理任务上仍难以带来可比的交互。当前的机器人控制范式，包括视觉—语言—动作策略与世界模型规划器，主要针对指令执行优化，让用户对为什么选择某个动作几乎没有可见性，也几乎没有经交互重定向、纠正或教导机器人的机制。为解决这个问题，我们提出世界—认知模型（World-Cognition Model，WCM），一个以人为中心的具身智能体，建立在 SLAK 架构（Sensing, Logic, Action, and Knowledge，感知、逻辑、动作与知识）与一个异步运行时之上。SLAK 分离感知、推理、控制与记忆，而运行时允许推理、对话与执行并发进行。WCM 还引入一个在环教学模式，让用户能够交互式地教导机器人困难或长视界的任务。教学片段与自主任务 rollout 被精炼为思维链监督，以持续改善模型。WCM 在九个真实世界人机交互任务上取得 73.8% 的平均成功率，包括从 CoT 微调中留出的任务，以及一个通过教学学到的长视界任务。

## 关键词

#人机交互 #具身智能 #世界模型 #人在环教学 #机器人
