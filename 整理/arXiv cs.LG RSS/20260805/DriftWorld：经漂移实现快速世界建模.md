---
published: 2026-08-05
title: "DriftWorld：经漂移实现快速世界建模"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DriftWorld- Fast World Modeling through Drifting.md"
source_note: "[[信息源/arXiv cs.LG RSS/DriftWorld- Fast World Modeling through Drifting]]"
source_sha256: 0f3bb903e0e888ad6c21bc32ee320a0f8f1bfc5936563b7d76aa09a6ccdb5753
original_url: "https://arxiv.org/abs/2607.15065"
processed: 2026-08-05
language: zh-CN
---

# DriftWorld：经漂移实现快速世界建模

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Susie Lu、Haonan Chen、Weirui Ye 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.15065)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DriftWorld- Fast World Modeling through Drifting|查看原始文件]]

## 摘要

- 引入 DriftWorld，基于漂移生成模型的动作条件世界模型：不在推理时迭代去噪，而是训练期间学习动作条件漂移，从当前观测与候选动作序列单次前向生成未来帧（30+ fps，比基于扩散基线平均快 17 倍）。
- 预测世界模型使机器人通过想象动作结果规划，但其控制价值取决于快速生成大量 rollout——给基于扩散的世界模型造成瓶颈：多步采样使每 rollout 昂贵，限制推理时大规模动作搜索。
- Bridge-V2、RT-1、Language Table、Push-T 与 Robomimic 标准视觉机器人操作基准评估：rollout 既准确又快速，DriftWorld 以远少于扩散世界模型基线的推理时间取得最先进决策性能。
- 在线控制外还可作离线模拟器排序真实世界机器人策略：rollout 分数与真值相关性最高 0.99——漂移模型是机器人世界建模的强适配（快速高质量想象直接支持规划与策略评估）。

## 正文

论文编号：arXiv:2607.15065v2（更新类型：replace-cross）。以下为摘要全文翻译。

预测世界模型使机器人能够通过想象其动作的结果来规划，但它们对控制的价值取决于快速生成大量 rollout。这给基于扩散的世界模型造成瓶颈：多步采样使每个 rollout 昂贵，限制了推理时的大规模动作搜索。我们引入 DriftWorld，一个基于漂移生成模型的动作条件世界模型。DriftWorld 不在推理时迭代去噪，而是在训练期间学习一个动作条件的漂移，使其能够从当前观测与一个候选动作序列、单次前向生成未来帧，速度 30+ fps，平均比基于扩散的基线快 17 倍。我们在标准视觉机器人操作基准上评估 DriftWorld，包括 Bridge-V2、RT-1、Language Table、Push-T 与 Robomimic。通过产生既准确又快速的 rollout，DriftWorld 以远少于基于扩散世界模型基线的推理时间取得最先进的决策性能。除了在线控制，DriftWorld 还可以作为离线模拟器用于对真实世界机器人策略排序，其 rollout 分数与真值的相关性最高达 0.99。这些结果表明，漂移模型非常适合机器人世界建模，其中快速、高质量想象直接支持规划与策略评估。

## 关键词

#世界模型 #漂移生成模型 #机器人规划 #快速推理
