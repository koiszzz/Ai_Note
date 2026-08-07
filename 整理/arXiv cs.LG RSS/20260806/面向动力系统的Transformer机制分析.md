---
published: 2026-08-06
title: 面向动力系统的Transformer机制分析
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/A Mechanistic Analysis of Transformers for Dynamical Systems.md
source_note: "[[信息源/arXiv cs.LG RSS/A Mechanistic Analysis of Transformers for Dynamical Systems]]"
source_sha256: d36959e2af441cb2e42609f30ade0e3caf1d22a0c2129a7c9dfbf37cda189bfa
original_url: https://arxiv.org/abs/2512.21113
processed: 2026-08-07
language: zh-CN
---

# 面向动力系统的Transformer机制分析

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.21113)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A Mechanistic Analysis of Transformers for Dynamical Systems|查看原始文件]]

## 摘要

- 不提出新预测模型，而是考察单层 Transformer 应用于动力学数据时的表示能力与局限。
- 将因果自注意力解释为线性、依赖历史的递归；线性系统中 softmax 注意力的凸性约束限制了可表示的自回归算子，导致过平滑。
- 非线性部分可观测系统中，注意力充当自适应延迟嵌入机制，实现有效的状态重构。

## 正文

Transformer 越来越多地被用于时间序列建模与预测，但其内部机制从动力系统视角看仍缺乏深入理解。与拥有成熟理论基础的传统自回归和状态空间模型不同，Transformer 架构通常被当作黑盒处理。当基于注意力的模型被考虑用于跨多种动力学机制的通用或零样本预测时，这一差距变得尤为相关。

在本文中，我们不提出新的预测模型，而是考察单层 Transformer 应用于动力学数据时的表示能力与局限。基于动力系统视角，我们将因果自注意力解释为一种线性、依赖历史的递归，并分析它如何处理时间信息。通过一系列线性与非线性案例研究，我们识别出不同的运行区间。

对于线性系统，我们证明在单头纯注意力设定下，softmax 注意力施加的凸性约束限制了可表示的自回归算子类别，当目标动力学需要混合符号的滞后系数时会导致过平滑。对于部分可观测的非线性系统，注意力反而充当自适应延迟嵌入机制，在具备足够时间上下文和潜在维度时能够实现有效的状态重构。这些结果有助于将经验观察与经典动力系统理论联系起来，为理解 Transformer 作为动力系统模型在何时、为何成功或失败提供洞见。

## 关键词

#Transformer #动力系统 #时间序列 #自注意力 #机制分析
