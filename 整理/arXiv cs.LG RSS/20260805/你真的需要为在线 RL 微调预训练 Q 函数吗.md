---
published: 2026-08-05
title: "你真的需要为在线 RL 微调预训练 Q 函数吗"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning-.md"
source_note: "[[信息源/arXiv cs.LG RSS/Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning-]]"
source_sha256: 2641ba4fc1c528e96d09e35a24c90ddcc6efc482d1746710e16f30d7e7c7f73c
original_url: "https://arxiv.org/abs/2607.27203"
processed: 2026-08-05
language: zh-CN
---

# 你真的需要为在线 RL 微调预训练 Q 函数吗

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Perry Dong、Ron Polonsky、Dorsa Sadigh 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27203)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Do You Really Need to Pretrain Q-Functions for Online RL Fine-Tuning-|查看原始文件]]

## 摘要

- 系统研究在预训练基础策略之上微调时预训练 Q 函数是否真的有用：惊人发现朴素 Q 函数预训练相对随机初始化常提供很少收益——源于根本错配：预训练期间学到的 Q 函数瞄准预训练策略的 Q 函数，而非在线微调收敛到的 Q 函数，且该差距在离线值最大化后仍持续。
- 预训练后微调已成为学习高性能策略的主导配方，基于值的强化学习（RL）中引出一个自然问题：给定预训练策略，Q 函数是否也应离线数据预训练？传统智慧认为应该，但近期结果表明随机初始化 Q 函数的在线 RL 无需预训练 Q 函数即可产生高性能可靠策略。
- 提出经策略集成初始化（IPE）：训练多个多样策略并用其池化 rollout 在在线 RL 中自举 Q 函数学习。
- 挑战性连续控制基准套件上，IPE 相对朴素 Q 函数预训练平均提升 1.26 倍微调性能。

## 正文

论文编号：arXiv:2607.27203v2（更新类型：replace）。以下为摘要全文翻译。

预训练后微调已成为学习高性能策略的主导配方，而在基于值的强化学习（RL）中，这引出一个自然的问题：给定一个预训练策略，Q 函数是否也应该在离线数据上预训练？传统智慧认为应该，但近期的结果表明，带随机初始化 Q 函数的在线 RL 可以产生高性能且可靠的策略，而无需预训练 Q 函数。在本文中，我们系统研究在预训练基础策略之上微调时，预训练 Q 函数是否真的有用。我们惊讶地发现，朴素的 Q 函数预训练相对随机初始化往往只提供很少的收益。我们表明这源于一个根本的错配：预训练期间学到的 Q 函数瞄准的是预训练策略的 Q 函数，而非在线微调所收敛到的 Q 函数，并且这一差距即使在离线值最大化之后仍然持续。受这一发现启发，我们提出经策略集成初始化（Initialization via Policy Ensemble，IPE），一个简单方法：训练多个多样的策略，并使用它们的池化 rollout 在在线 RL 中自举 Q 函数学习。在一个挑战性的连续控制基准套件上，IPE 相对朴素的 Q 函数预训练取得平均 1.26 倍的微调性能提升。

## 关键词

#强化学习 #Q函数 #预训练 #微调
