---
published: 20260806
title: "ORACLE：基于多目标强化学习、带大语言模型引导探索的模拟电路设计优化器"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ORACLE- A Multi-Objective Reinforcement Learning-Based Analog Circuit Design Optimizer with Large La.md"
source_note: "[[信息源/arXiv cs.AI RSS/ORACLE- A Multi-Objective Reinforcement Learning-Based Analog Circuit Design Optimizer with Large La]]"
source_sha256: b3fc8311cd74474dce515720dbafe1f078bcf225f7c2e1e4d782d93a33359255
original_url: "https://arxiv.org/abs/2608.04999"
processed: 2026-08-06
language: zh-CN

---

# ORACLE：基于多目标强化学习、带大语言模型引导探索的模拟电路设计优化器

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Osei Brempong, Mohammed Ayman Habib, Vivan Poddar, Morteza Fayazi
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04999)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ORACLE- A Multi-Objective Reinforcement Learning-Based Analog Circuit Design Optimizer with Large La|查看原始文件]]

## 摘要

- 使用强化学习（RL）的模拟电路设计自动化已成为减少手动努力的有前景方法，但许多现有基于 RL 的方法聚焦单目标优化；即使为多目标（MO）问题设计的方法也常将多个设计规格简化为单一标量奖励，限制捕捉竞争目标间真实帕累托权衡的能力，常导致次优设计。
- 本文呈现 ORACLE，一个开源基于 RL 的 MO 模拟电路设计优化框架，用向量值学习和偏好感知条件取代标量奖励优化：用偏好向量指定多个目标的相对权重，使单个训练模型无需重训练即可跨多样权衡设置生成设计。
- 提出两种偏好引导策略（归一化权重引导和余弦对齐引导）改进收敛；融入 LLM 引导动作选择机制过滤可能导致次优设计或增加运行时的动作；多个电路拓扑 2,000 个测试案例结果：ORACLE 相对最先进方法运行时减少 20.4-104.4 倍，满足 99.9% 目标规格，输出规格 FOM 好 5.1-318.6 倍。

## 正文

使用强化学习（RL）的模拟电路设计自动化已成为减少手动努力的有前景方法。然而，许多现有基于 RL 的方法聚焦单目标优化。即使为多目标（MO）问题设计的方法，也常将多个设计规格简化为单一标量奖励。此简化限制捕捉竞争目标间真实帕累托权衡的能力，常导致次优设计。此外，期望 MO 规格变化时要求模型从零重训练仍是关键局限。为应对这些挑战，我们呈现 ORACLE，一个开源基于 RL 的 MO 模拟电路设计优化框架，用向量值学习和偏好感知条件取代标量奖励优化。ORACLE 表示真正的 MO 模拟电路设计优化器，用偏好向量指定多个目标的相对权重，使单个训练模型无需重训练即可跨多样权衡设置生成设计。我们进一步提出两种偏好引导策略，即归一化权重引导和余弦对齐引导，改进收敛。此外，我们融入大语言模型（LLM）引导的动作选择机制，过滤可能导致次优设计或增加运行时的动作。结果显示，在多个电路拓扑的 2,000 个测试案例上，ORACLE 相对最先进方法将运行时减少 20.4-104.4 倍。它满足 2,000 个目标规格的 99.9%，并在所得输出规格中实现好 5.1-318.6 倍的品质因数（FOM）。

## 关键词

#模拟电路设计 #多目标强化学习 #LLM引导 #电路自动化 #arXiv