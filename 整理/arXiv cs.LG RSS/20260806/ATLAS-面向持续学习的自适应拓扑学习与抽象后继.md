---
published: 2026-08-06
title: ATLAS：面向持续学习的自适应拓扑学习与抽象后继
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning]]"
source_sha256: e6931f90787d01ad72ab40e9e848f12c6d51ff66c1ed778b3d3c6149caca7570
original_url: https://arxiv.org/abs/2608.04334
processed: 2026-08-07
language: zh-CN
---

# ATLAS：面向持续学习的自适应拓扑学习与抽象后继

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04334)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/ATLAS- Adaptive Topological Learning with Abstract Successors for Continual Learning|查看原始文件]]

## 摘要

- 提出 ATLAS（自适应拓扑学习与抽象后继），使用"需要时增长"（GWR）网络与后继特征（Successor Features）兼顾高样本效率与抗灾难性遗忘。
- 通过将转移动力学与奖励信号在结构上解耦，实现对目标变化的近即时适应。
- 在空间导航任务中优于常见同策略与异策略基线，展现出正向后迁移，尤其擅长非平稳环境。

## 正文

当代无模型强化学习算法可以达到非常高的性能，但样本效率低，且对环境变化不鲁棒。基于模型的算法具有高得多的样本效率，但在环境发生迁移（shift）时仍然会失败。

本文引入自适应拓扑学习与抽象后继（Adaptive Topological Learning with Abstract Successors, ATLAS）来应对这些挑战。ATLAS 使用"需要时增长"（Grow When Required）网络结合后继特征（Successor Features），以实现高样本效率，同时稳健地应对灾难性遗忘（catastrophic forgetting）。

我们在空间导航任务中评估 ATLAS，并将其性能与常见的同策略（on-policy）和异策略（off-policy）算法进行对比。我们的实证结果表明，通过将转移动力学与奖励信号在结构上解耦，ATLAS 能够对新目标实现近乎即时的适应，并展现出正向后迁移（positive backward transfer），在非平稳环境中显著优于基线方法。

## 关键词

#持续学习 #后继特征 #强化学习 #灾难性遗忘 #非平稳环境
