---
published: 2026-08-06
title: SpecRoll：投机强化学习rollout的快慢验证器反馈自适应
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts.md
source_note: "[[信息源/arXiv cs.LG RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts]]"
source_sha256: a4e222cc858aac206c9b74fe967b84cacbc4212e0fa1222b9d1d33e2991ec928
original_url: https://arxiv.org/abs/2608.04962
processed: 2026-08-07
language: zh-CN
---

# SpecRoll：投机强化学习rollout的快慢验证器反馈自适应

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04962)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SpecRoll- Fast-Slow Verifier-Feedback Adaptation for Speculative Reinforcement Learning Rollouts|查看原始文件]]

## 摘要

- SpecRoll 是一个投机 rollout 引擎，在两个时间尺度上自适应，同时保持目标模型的采样分布。
- 轻量未来令牌头生成并行提议，Reflex 模块用延迟验证器反馈做无反向传播的轨迹局部修正；慢路径仅在持续退化时更新头部。
- 在 1.5B–14B 五个模型、三个数学推理数据集上，相对原始 GRPO 取得 1.26–2.15 倍生成加速与 1.21–2.04 倍端到端加速。

## 正文

强化学习（RL）后训练提升了大型语言模型的推理能力，但自回归 rollout 生成仍是主要的效率瓶颈。投机解码可以加速生成，但在 RL 中应用它很困难，因为目标策略持续演化：静态提议者会变得过时，而频繁更新草稿者会带来大量额外开销。我们提出 SpecRoll，一个投机 rollout 引擎，它在两个时间尺度上进行自适应，同时保持目标模型的采样分布。轻量级未来令牌头生成并行提议，而我们提出的 Reflex 模块利用延迟的验证器反馈执行有界的、轨迹局部的隐状态修正，无需反向传播。互补的慢路径仅在检测到持续退化时更新头部参数。SpecRoll 将这些机制与并发感知的稀疏树验证和精确目标验证相结合，保持目标 rollout 分布与 GRPO 目标不变。在 1.5B 到 14B 的五个模型与三个数学推理数据集上，SpecRoll 相对原始 GRPO 取得 1.26–2.15 倍的生成加速与 1.21–2.04 倍的端到端加速。它还在全部 15 个匹配设定下于生成时间与端到端时间两方面均优于 FastGRPO，平均成对端到端增益为 1.18 倍。受控消融实验表明，快慢两条自适应路径提供了互补的收益。我们的源代码可在 https://anonymous.4open.science/r/SpecRoll-26062006 获取。

## 关键词

#投机解码 #强化学习 #GRPO #rollout加速 #推理模型
