---
published: 20260806
title: "ATLAS：具有抽象后继的自适应拓扑学习用于持续学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning]]"
source_sha256: 6f954715b9a01905113fc7f50cbd26ffa00611a5f818f20e0f17104d6954c048
original_url: "https://arxiv.org/abs/2608.04334"
processed: 2026-08-06
language: zh-CN

---

# ATLAS：具有抽象后继的自适应拓扑学习用于持续学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：R. Blake Lawlor, Daniel S. Brown
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04334)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning|查看原始文件]]

## 摘要

- 当代无模型强化学习算法可实现非常高的性能，但样本效率低且对环境变化不稳健；基于模型的算法样本效率高得多，但环境变化时仍会失败。
- 本文引入自适应拓扑学习与抽象后继（ATLAS）应对这些挑战，使用「需要时增长」网络配合后继特征实现高样本效率和鲁棒应对灾难性遗忘。
- 在空间导航任务中评估，通过结构上将转移动力学与奖励信号解耦，ATLAS 实现对新目标的近乎即时适应并可表现出正向后迁移，在非平稳环境中显著优于基线方法。

## 正文

当代无模型强化学习算法可以实现非常高的性能，但样本效率低且对环境变化不稳健。基于模型的算法样本效率高得多，但环境变化时仍会失败。本文引入自适应拓扑学习与抽象后继（Adaptive Topological Learning with Abstract Successors，ATLAS）应对这些挑战。ATLAS 使用「需要时增长」（Grow When Required）网络配合后继特征（Successor Features），以实现高样本效率，同时稳健应对灾难性遗忘。我们在空间导航任务中评估 ATLAS，将其性能与常见同策略和离策略算法进行基准对比。我们的实证结果表明，通过结构上将转移动力学与奖励信号解耦，ATLAS 实现对新目标的近乎即时适应，并能表现出正向后迁移，在非平稳环境中显著优于基线方法。

## 关键词

#持续学习 #强化学习 #后继特征 #导航 #arXiv