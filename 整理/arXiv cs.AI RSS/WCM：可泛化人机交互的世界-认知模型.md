---
title: "WCM：可泛化人机交互的世界-认知模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction.md"
source_note: "[[信息源/arXiv cs.AI RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction]]"
source_sha256: 1b01f12be16831f634e101fa670f084d9f1315c2d7cbc4c2e350b3d873f4419f
original_url: "https://arxiv.org/abs/2607.22999"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# WCM：可泛化人机交互的世界-认知模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuzhen Chen、KC Zhou
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.22999)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/WCM- World-Cognition Model for Generalizable Human-Robot Interaction|查看原始文件]]

## 摘要

- 提出世界-认知模型（WCM），基于 SLAK 架构（感知、逻辑、动作与知识）与异步运行时的人为中心具身智能体：SLAK 分离感知、推理、控制与记忆，运行时允许推理、对话与执行并发进行。
- WCM 引入人在环教学模式，使用户能交互式教授机器人困难或长视界任务；教学片段与自主任务 rollout 精化为思维链监督，持续改进模型。
- 语言智能体现在可以在软件中与用户流畅交互，但机器人仍难以把相当交互带到物理任务；当前机器人控制范式（包括视觉-语言-动作策略与基于世界模型的规划器）主要为指令执行优化，让用户对为何选择动作缺乏可见性，也几乎没有重定向、纠正或通过交互教授机器人的机制。
- WCM 在九个真实世界人机交互任务上实现 73.8% 平均成功率，包括从 CoT 微调中留出的任务与一个经教学学习的长期任务。

## 正文

论文编号：arXiv:2607.22999v2（更新类型：replace-cross）。以下为摘要全文翻译。

语言智能体现在可以在软件中与用户流畅交互，但机器人仍难以把相当的交互带到物理任务。当前机器人控制范式（包括视觉-语言-动作策略与基于世界模型的规划器）主要针对指令执行优化，留给用户对为何选择某个动作的可见性很少，也几乎没有重定向、纠正或通过交互教授机器人的机制。为解决这一问题，我们提出世界-认知模型（World-Cognition Model，WCM），一个基于 SLAK 架构（Sensing, Logic, Action, and Knowledge，感知、逻辑、动作与知识）与异步运行时的人为中心具身智能体。SLAK 分离感知、推理、控制与记忆，而运行时允许推理、对话与执行并发进行。WCM 进一步引入人在环教学模式，使用户能够交互式教授机器人困难或长视界的任务。教学片段与自主任务 rollout 被精化为思维链监督，以持续改进模型。WCM 在九个真实世界人机交互任务上实现 73.8% 的平均成功率，包括从 CoT 微调中留出的任务，以及一个通过教学学习的长期任务。

## 关键词

#人机交互 #具身智能体 #教学模式 #世界模型
