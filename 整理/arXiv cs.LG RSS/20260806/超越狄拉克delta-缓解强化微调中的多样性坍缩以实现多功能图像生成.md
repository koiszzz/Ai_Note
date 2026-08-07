---
published: 2026-08-06
title: 超越狄拉克delta：缓解强化微调中的多样性坍缩以实现多功能图像生成
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima.md
source_note: "[[信息源/arXiv cs.LG RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima]]"
source_sha256: 13af797d1ff31c363ac22ec859a1983df33322f79024aa94da3db26ca144f34d
original_url: https://arxiv.org/abs/2601.12401
processed: 2026-08-07
language: zh-CN
---

# 超越狄拉克delta：缓解强化微调中的多样性坍缩以实现多功能图像生成

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.12401)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima|查看原始文件]]

## 摘要

- 提出 DRIFT（面向多功能图像生成的多样性激励强化微调）框架，系统性地在在线策略微调过程中激励输出多样性。
- 从三个视角应对多样性坍缩：奖励集中子集采样、带随机变化的提示扩展条件空间、基于势的奖励塑造优化组内多样性。
- 实验实现优越的帕累托支配：等效对齐水平下多样性提升 9.08%～43.46%，等效多样性水平下对齐提升 59.65%～65.86%。

## 正文

强化学习（Reinforcement Learning, RL）已成为微调扩散模型和流模型等大规模生成模型以对齐复杂人类偏好和用户指定任务的有力范式。一个根本性的局限仍然存在，即"多样性坍缩的诅咒"（the curse of diversity collapse），其中目标公式和优化景观（optimization landscape）从根本上将策略坍缩为狄拉克 delta 分布（Dirac delta distribution）。

为应对这一挑战，我们提出 DRIFT（**D**ive**R**sity-**I**ncentivized Reinforcement **F**ine-**T**uning，面向多功能图像生成的多样性激励强化微调），这是一个创新的框架，在在线策略（on-policy）微调过程中系统地激励输出多样性，调和强任务对齐与高生成多样性，以增强多功能性——这对于要求多样化候选生成的应用至关重要。

我们从三个代表性视角处理这一问题：i) **采样**（sampling）奖励集中的子集，过滤掉奖励离群值（reward outliers）以防止过早坍缩；ii) **提示**（prompting）带有随机变化，以扩展条件空间；iii) **优化**（optimization）组内多样性，使用基于势的奖励塑造（potential-based reward shaping）机制。

实验结果表明，DRIFT 在任务对齐和生成多样性方面实现了优越的帕累托支配（Pareto dominance）：在等效对齐水平下多样性提升 $9.08\%\!\sim\! 43.46\%$，在等效多样性水平下对齐提升 $59.65\% \!\sim\! 65.86\%$。

## 关键词

#强化学习 #图像生成 #多样性坍缩 #奖励塑造 #扩散模型
