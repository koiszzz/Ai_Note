---
published: 2026-08-06
title: Hi-TTRL：利用提示调节测试时强化学习的共识强度
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Hi-TTRL- Regulating Consensus with Hints for Test-Time Reinforcement Learning.md
source_note: "[[信息源/arXiv cs.CL RSS/Hi-TTRL- Regulating Consensus with Hints for Test-Time Reinforcement Learning|查看原始文件]]"
source_sha256: 1d7838a2d22df333482630a698269fd8ba090b75bb3c3542b77700de150d9c58
original_url: https://arxiv.org/abs/2608.03545
processed: 2026-08-07
language: zh-CN
---

# Hi-TTRL：利用提示调节测试时强化学习的共识强度

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03545)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Hi-TTRL- Regulating Consensus with Hints for Test-Time Reinforcement Learning|查看原始文件]]

## 摘要

- 测试时强化学习（TTRL）通过多数投票构造的伪标签更新策略，在无标注数据的情况下提升大语言模型的推理能力，但多数投票给出的奖励信号对共识强度高度敏感。
- 共识强度在 TTRL 中扮演双重角色：既反映伪标签的可靠性，也反映优势（advantage）的分布；低共识会通过不成比例的大优势放大不可靠伪标签的更新，而高共识会降低奖励对比度并最终导致梯度消失。
- 提出 Hi-TTRL：在采样过程中利用提示（hint）调节 rollout 共识强度，先从部分 rollout 组估计共识强度，当共识强度偏离目标区间时调用马尔可夫链蒙特卡洛（MCMC）提示采样器。
- 采样器以幂变换后的前缀分布为目标，用有限步近似采样生成 rollout 前缀作为提示；通过调整幂指数生成锐化或平坦化的幂目标，将 rollout 共识强度引导至目标区间。
- 在多个数据集和骨干模型上的实验表明，Hi-TTRL 一致优于标准 TTRL，消融实验与共识引导分析验证了自适应提示引导共识调节的有效性。

## 正文

测试时强化学习（test-time reinforcement learning, TTRL）通过用多数投票构造的伪标签更新策略，在无标注数据的情况下提升大语言模型的推理能力。虽然有效，但多数投票分配的奖励信号对共识强度高度敏感，共识强度定义为 rollout 组内最常见答案的出现频率。在 TTRL 中，共识强度起着双重作用：它既反映伪标签的可靠性，也反映优势（advantage）的分布。低共识会通过不成比例的大优势放大来自不可靠伪标签的更新，而高共识会降低奖励对比度并最终产生消失梯度。在本文中，我们提出 Hi-TTRL，一个在采样过程中利用提示来调节 rollout 共识强度的测试时强化学习框架。Hi-TTRL 首先从部分 rollout 组估计共识强度。当共识强度落在目标区间之外时，它调用一个马尔可夫链蒙特卡洛（MCMC）提示采样器。该采样器以幂变换后的前缀分布为目标，并使用有限步近似采样生成 rollout 前缀作为提示。通过调节幂指数，Hi-TTRL 生成具有锐化或平坦化幂目标的提示，从而将 rollout 共识强度引向目标区间。在多个数据集和骨干模型上的实验表明，Hi-TTRL 持续优于标准 TTRL，消融实验和共识引导分析验证了自适应提示引导共识调节的有效性。

## 关键词

#测试时强化学习 #共识强度 #大语言模型 #提示采样 #MCMC
