---
published: 2026-08-05
title: "Crayotter：经组相对偏好反向传播学习长视界视频编辑智能体"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Crayotter- Learning Long-Horizon Video Editing Agents via Group-Relative Preference Backpropagation.md"
source_note: "[[信息源/arXiv cs.LG RSS/Crayotter- Learning Long-Horizon Video Editing Agents via Group-Relative Preference Backpropagation]]"
source_sha256: cc67d7ab7a753706bdfaa1ae8e193e7836ad2ce8e34b5612c19947944d9ba003
original_url: "https://arxiv.org/abs/2608.02694"
processed: 2026-08-05
language: zh-CN
---

# Crayotter：经组相对偏好反向传播学习长视界视频编辑智能体

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lecheng Yan、Jianze Lin、Yichong Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02694)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Crayotter- Learning Long-Horizon Video Editing Agents via Group-Relative Preference Backpropagation|查看原始文件]]

## 摘要

- 提出组相对偏好反向传播（GRPB）：把同任务排名转化为零和优势，并作为有界信用在语义编辑片段上再分配——滞后分配器与受守卫传输防止当前判断或不可靠估计直接塑造同一 rollout 组。
- 长视界视频编辑智能体只在许多相互依赖决策后收到最终产品反馈；但编辑质量主观、允许多个有效解、跨异构请求无有意义校准，使全局标量目标既歧义又时间上无信息；关键观察：固定请求、素材与生产约束后，该主观目标转化为可直接比较备选间的序数比较。
- 手工构建项目不相交、视界分层的现实编辑任务套件用于训练与受控评估；匹配基线、信用干预、外部基准与盲人评估下，GRPB 改善编辑行为与渲染产品。
- 9B Crayotter 模型在 AgenticVBench 上超过多个专有系统——支持任务局部偏好归约作为从主观、延迟结果学习的实用方法；代码与材料：https://github.com/idwts/Crayotter

## 正文

论文编号：arXiv:2608.02694v1（更新类型：cross）。以下为摘要全文翻译。

长视界视频编辑智能体只在许多相互依赖的决策之后收到最终产品反馈。然而，编辑质量是主观的、允许多个有效解，并且跨异构请求没有有意义的校准，这使得全局标量目标既歧义又时间上无信息。我们的关键观察是：固定请求、素材与生产约束后，这种主观目标转化为可直接比较备选方案之间的序数比较。我们引入组相对偏好反向传播（Group-Relative Preference Backpropagation，GRPB）：把同任务排名转化为零和优势，并把它们作为有界信用在语义编辑片段上再分配。一个滞后分配器与受守卫的传输防止当前判断或不可靠的估计直接塑造同一个 rollout 组。我们手工构建一个项目不相交、视界分层的现实编辑任务套件用于训练与受控评估。在匹配的基线、信用干预、外部基准与盲人人工评估中，GRPB 改善编辑行为与渲染产品。由此产生的 9B Crayotter 模型在 AgenticVBench 上超过多个专有系统，支持任务局部偏好归约作为从主观、延迟结果学习的实用方法。代码与所有支持材料公开于 https://github.com/idwts/Crayotter

## 关键词

#视频编辑 #智能体 #偏好学习 #信用分配
