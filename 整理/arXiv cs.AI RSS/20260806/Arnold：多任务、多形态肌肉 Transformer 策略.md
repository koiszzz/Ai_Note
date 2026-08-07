---
published: 20260806
title: "Arnold：多任务、多形态肌肉 Transformer 策略"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy.md"
source_note: "[[信息源/arXiv cs.AI RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy]]"
source_sha256: cd0a89c924dd9289d05157da975b9d780ba25399cb408dd9d3e4dd59ea648bef
original_url: "https://arxiv.org/abs/2508.18066"
processed: 2026-08-06
language: zh-CN

---

# Arnold：多任务、多形态肌肉 Transformer 策略

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Boshi An, Alberto Silvio Chiappa, Merkourios Simos, Chengkun Li, Alexander Mathis
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.18066)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Arnold- A multi-task, multi-embodiment muscle transformer policy|查看原始文件]]

## 摘要

- 控制人体高维非线性肌肉骨骼模型是基础科学挑战；近期机器学习突破带来在肌肉骨骼系统中掌握触达、物体操作和运动等单项技能的计算内策略，但这些智能体仅是「专家」。
- 本文开发 Arnold，一个基于 Transformer 的肌肉骨骼控制策略，掌握多个任务和形态：结合行为克隆和强化学习应对 14 项挑战性控制任务（灵巧物体操作、触达和运动），匹配或超过单任务专家策略性能。
- 关键创新是 Arnold 的感觉运动词汇表，异构感觉模态、目标和执行器语义的组合表示；因果探针显示低维肌肉协同主要保持任务特定，方差分析系统性低估功能控制维度。

## 正文

控制人体高维和非线性肌肉骨骼模型是基础科学挑战。近期机器学习突破带来掌握个体技能（如触达、物体操作和具有许多自由度的肌肉骨骼系统中的运动）的计算内策略。然而，这些智能体仅是「专家」，为单一技能实现高性能。在本工作中，我们开发 Arnold，一个基于 Transformer 的肌肉骨骼控制策略，掌握多个任务和形态。Arnold 结合行为克隆和强化学习应对 14 项挑战性控制任务，涵盖灵巧物体操作、触达和运动，匹配或超过单任务专家策略的性能。一个关键创新是 Arnold 的感觉运动词汇表，异构感觉模态、目标和执行器语义的组合表示。Arnold 通过 Transformer 架构利用此词汇表处理跨任务的变量观测和动作空间。该框架支持高效多任务、多形态学习，促进对新任务的快速适应，同时鼓励动作和运动平滑性等通用运动策略。最后，运动输出的因果探针揭示低维肌肉协同大体保持任务特定，基于方差的分析系统性低估功能控制维度，与生物观测（此类协同的有限可迁移性）一致。代码和数据可在此获取：https://github.com/amathislab/arnold。

## 关键词

#肌肉骨骼控制 #Transformer策略 #多任务 #机器人 #arXiv