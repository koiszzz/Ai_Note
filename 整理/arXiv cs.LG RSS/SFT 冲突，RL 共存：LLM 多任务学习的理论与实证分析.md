---
title: "SFT 冲突，RL 共存：LLM 多任务学习的理论与实证分析"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SFT Conflicts, RL Coexists- A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs.md"
source_note: "[[信息源/arXiv cs.LG RSS/SFT Conflicts, RL Coexists- A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs.]]"
source_sha256: 17f0676d3d7cd72bccc5a8067586092effba5d73a6e8fdfd9cb83e1d327ab90d
original_url: "https://arxiv.org/abs/2608.03573"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SFT 冲突，RL 共存：LLM 多任务学习的理论与实证分析

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Kejian Zhu、Zhuoran Jin、Shangqing Tu、Hongbang Yuan、Yushi Bai、Kang Liu、Juanzi Li、Jun Zhao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03573)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SFT Conflicts, RL Coexists- A Theoretical and Empirical Analysis of Multi-Task Learning for LLMs.|查看原始文件]]

## 摘要

- 监督微调（SFT）与强化学习（RL）在增强大语言模型（LLM）多任务推理上表现出根本不同的行为。
- 初步实验揭示一个现象：SFT 在多阶段训练下遭受严重任务冲突，而 RL 使多样任务稳定共存。
- 实证上把此追溯到参数层面：RL 在任务间诱导稀疏且近似正交的更新。
- 通过分析多任务梯度干扰提供该机制的理论解释。
- 结果揭示一个区别：SFT 中的干扰受范数限制，随绝对梯度幅度缩放；而 RL 中的干扰受方差限制，由优势归一化与在线策略优化诱导的梯度方差界定。
- 这个小的方差界产生跨任务的近正交优化方向。
- 利用这一洞见提出 Parallel-RL，一个解耦多任务训练的范式，显著提升效率与灵活性。

## 正文

论文编号：arXiv:2608.03573v1（更新类型：cross）。以下为摘要全文翻译。

监督微调（SFT）与强化学习（RL）在增强大语言模型（LLM）的多任务推理方面表现出根本不同的行为。我们的初步实验揭示了一个现象：SFT 在多阶段训练下遭受严重的任务冲突，而 RL 使多样任务稳定共存。实证上，我们把这追溯到参数层面，观察到 RL 在任务间诱导稀疏且近似正交的更新。我们通过分析多任务梯度干扰为该机制提供理论解释。我们的结果揭示一个区别：SFT 中的干扰是范数受限的，随绝对梯度幅度缩放；而 RL 中的干扰是方差受限的，由优势归一化与在线策略优化诱导的梯度方差界定。这个小的方差界产生跨任务的近正交优化方向。利用这一洞见，我们提出 Parallel-RL，一个解耦多任务训练的范式，显著提升效率与灵活性。

## 关键词

#多任务学习 #SFT #RL #梯度干扰 #Parallel-RL
