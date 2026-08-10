---
published: 2026-08-07
title: "SFT 冲突，RL 共存：LLM 多任务学习的理论与实证分析"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/SFT Conflicts, RL Coexists- A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/SFT Conflicts, RL Coexists- A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs]]"
source_sha256: b420526e904bd19b944f8a2b03d07cfc66312565f0bb15dcf3bb6b4c739c0148
original_url: "https://arxiv.org/abs/2608.03573"
processed: 2026-08-07
language: zh-CN
---

# SFT 冲突，RL 共存：LLM 多任务学习的理论与实证分析

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Kejian Zhu, Zhuoran Jin, Shangqing Tu, Hongbang Yuan, Yushi Bai, Kang Liu, Juanzi Li, Jun Zhao
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.03573)

## 摘要

- SFT 与 RL 在增强 LLM 多任务推理表现根本不同；初步实验揭示现象：SFT 多阶段训练下遭受严重任务冲突，RL 使多样任务稳定共存。
- 实证追踪到参数级：RL 诱导跨任务稀疏且近似正交更新；经分析多任务梯度干扰提供该机制理论解释。
- 揭示区分：SFT 干扰范数受限（随绝对梯度幅度缩放），RL 干扰方差受限（由优势归一化与在策略优化诱导的梯度方差界定）；小方差界产生跨任务近似正交优化方向。
- 提出 Parallel-RL 范式：解耦多任务训练，显著改进效率与灵活性。

## 正文

监督微调（Supervised Fine-Tuning, SFT）与强化学习（Reinforcement Learning, RL）在增强大语言模型（LLMs）的多任务推理方面表现出根本不同的行为。研究的初步实验揭示了一个现象：SFT 在多阶段训练下遭受严重的任务冲突，而 RL 使多样的任务能够稳定共存。实证上，研究将其追溯到参数层面，观察到 RL 诱导跨任务的稀疏且近似正交的更新。研究通过分析多任务梯度干扰，为该机制提供理论解释。结果揭示了一个区别：SFT 中的干扰是范数受限的（norm-limited），随绝对梯度幅度缩放，而 RL 中的干扰是方差受限的（variance-limited），由优势归一化与在策略优化诱导的梯度方差界定。这种小的方差界产生了跨任务的近似正交优化方向。利用这一洞见，研究提出 Parallel-RL，一个解耦多任务训练的范式，显著改进了效率与灵活性。

## 关键词

多任务学习、SFT、RL、梯度干扰、正交
