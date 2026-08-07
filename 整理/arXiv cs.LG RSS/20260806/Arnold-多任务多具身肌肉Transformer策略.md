---
published: 2026-08-06
title: Arnold：多任务、多具身肌肉Transformer策略
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy.md
source_note: "[[信息源/arXiv cs.LG RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy]]"
source_sha256: 16ec6e177ee8148717722bfc0644507b05776c0f0cc40dff0159b1146cef20ea
original_url: https://arxiv.org/abs/2508.18066
processed: 2026-08-07
language: zh-CN
---

# Arnold：多任务、多具身肌肉Transformer策略

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.18066)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy|查看原始文件]]

## 摘要

- 开发 Arnold，一种基于 Transformer 的肌肉骨骼控制策略，结合行为克隆与强化学习，掌握 14 个跨灵巧操作、抓取和运动的控制任务。
- 关键创新是感知运动词汇表（sensorimotor vocabulary）：对异构感觉模态、目标与执行器语义的组合式表示，使策略能处理可变观测与动作空间。
- 因果探测揭示低维肌肉协同在很大程度上仍是任务特定的，与生物学观察一致；代码和数据公开于 GitHub。

## 正文

控制人体高维、非线性的肌肉骨骼模型是一项基础性的科学挑战。最近的机器学习突破催生了能够在具有多个自由度的肌肉骨骼系统中掌握抓取（reaching）、物体操作和运动（locomotion）等单一技能的计算模拟（in-silico）策略。然而，这些智能体只是"专家"（specialists），只针对单一技能取得高性能。

在这项工作中，我们开发了 Arnold，一种基于 Transformer 的肌肉骨骼控制策略，能够掌握多个任务和多个具身（embodiment）。Arnold 结合行为克隆（behavior cloning）和强化学习来处理 14 个具有挑战性的控制任务，涵盖灵巧物体操作、抓取和运动，其性能达到或超过了单任务专家策略。

一个关键创新是 Arnold 的感知运动词汇表（sensorimotor vocabulary），这是一种对异构感觉模态、目标和执行器的语义的组合式（compositional）表示。Arnold 通过 Transformer 架构利用这一词汇表来处理跨任务的可变观测空间和动作空间。该框架支持高效的多任务、多具身学习，并促进对新任务的快速适应，同时鼓励诸如动作和运动学平滑性（action and kinematic smoothness）之类的通用运动策略。

最后，对运动输出的因果探测（causal probing）揭示，低维肌肉协同（muscle synergies）在很大程度上仍然是任务特定的，基于方差的分析会系统地低估功能性控制维度，这与关于此类协同有限可迁移性的生物学观察一致。代码和数据可在此获取：https://github.com/amathislab/arnold

## 关键词

#肌肉骨骼控制 #Transformer #多任务学习 #强化学习 #具身智能
