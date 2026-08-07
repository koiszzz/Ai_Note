---
published: 2026-08-06
title: SpecRoll：投机强化学习生成中的快慢双时间尺度验证器反馈自适应
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts.md
source_note: "[[信息源/arXiv cs.CL RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts]]"
source_sha256: ca78bbf14b038e83568d7623f349a2ee0e9fe76fa956e45b3a7423abd077061a
original_url: https://arxiv.org/abs/2608.04962
processed: 2026-08-07
language: zh-CN
---

# SpecRoll：投机强化学习生成中的快慢双时间尺度验证器反馈自适应

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04962)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts|查看原始文件]]

## 摘要

- 强化学习（RL）后训练可提升大语言模型的推理能力，但自回归 rollout 生成仍是主要效率瓶颈；投机解码可加速生成，但目标策略持续演变使静态提议者过时、频繁更新起草者又开销巨大。
- SpecRoll 在保持目标模型采样分布的同时于两个时间尺度自适应：轻量未来 token 头并行生成提议，Reflex 模块用延迟验证器反馈做有界、轨迹局部的隐状态修正（无需反向传播），慢路径仅在检测到持续退化时更新头部参数。
- 在 5 个模型（1.5B–14B）与 3 个数学推理数据集上，SpecRoll 相比 vanilla GRPO 实现 1.26–2.15 倍生成加速与 1.21–2.04 倍端到端加速，并在全部 15 个匹配设置中优于 FastGRPO。

## 正文

强化学习（RL）后训练提升了大型语言模型的推理能力，但自回归 rollout 生成仍是主要的效率瓶颈。投机解码可以加速生成，但在 RL 中应用它很困难，因为目标策略在持续演变：静态提议者会变得过时，而频繁更新起草者又会带来大量额外开销。我们提出 SpecRoll，一个在保持目标模型采样分布的同时、于两个时间尺度自适应的投机 rollout 引擎。轻量级未来 token 头并行生成提议，而我们提出的 Reflex 模块利用延迟的验证器反馈，在不进行反向传播的情况下执行有界、轨迹局部的隐状态修正。互补的慢路径仅在检测到持续退化时才更新头部参数。SpecRoll 将这些机制与并发感知的稀疏树验证和精确目标验证相结合，保持目标 rollout 分布和 GRPO 目标不变。在从 1.5B 到 14B 的五个模型和三个数学推理数据集上，SpecRoll 相比 vanilla GRPO 实现了 1.26–2.15 倍的生成加速和 1.21–2.04 倍的端到端加速。它还在全部 15 个匹配设置中于生成时间和端到端时间两方面均优于 FastGRPO，平均逐对端到端增益为 1.18 倍。受控消融实验表明，快、慢两条自适应路径提供了互补的收益。我们的源代码可在 https://anonymous.4open.science/r/SpecRoll-26062006 获取。

## 关键词

#投机解码 #强化学习 #GRPO #推理加速 #SpecRoll #LLM后训练
