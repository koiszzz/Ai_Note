---
published: 20260806
title: "超越狄拉克 delta：缓解多功能图像生成强化微调中的多样性坍缩"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima.md"
source_note: "[[信息源/arXiv cs.AI RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima]]"
source_sha256: f5f14b79d7dc6a3f4b03c07aedbd5b960236034c784f6f06b35f44d058994160
original_url: "https://arxiv.org/abs/2601.12401"
processed: 2026-08-06
language: zh-CN

---

# 超越狄拉克 delta：缓解多功能图像生成强化微调中的多样性坍缩

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jinmei Liu, Haoru Li, Zhenhong Sun, Chaofeng Chen, Yatao Bian, Bo Wang, Daoyi Dong, Chunlin Chen, Zhi Wang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.12401)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Beyond the Dirac Delta- Mitigating Diversity Collapse in Reinforcement Fine-Tuning for Versatile Ima|查看原始文件]]

## 摘要

- 强化学习（RL）已成为微调扩散和流模型等大规模生成模型以对齐复杂人类偏好和用户指定任务的有力范式，但根本局限仍为多样性坍缩的诅咒：目标表述和优化景观固有地将策略坍缩到狄拉克 delta 分布。
- 本文提出 DRIFT（多样性激励的图像生成强化微调），一个创新框架，在策略内微调过程中系统性地激励输出多样性，调和强任务对齐与高生成多样性。
- 从三个代表性视角处理：采样奖励集中子集过滤奖励异常值防止过早坍缩、随机变化提示扩展条件空间、基于势的奖励塑形机制优化组内多样性；实验显示 DRIFT 在任务对齐和生成多样性上实现优越帕累托支配，等效对齐水平下多样性提高 9.08%-43.46%。

## 正文

强化学习（RL）已成为微调扩散和流模型等大规模生成模型以对齐复杂人类偏好和用户指定任务的有力范式。一个根本局限仍为多样性坍缩的诅咒（curse of diversity collapse）：目标表述和优化景观固有地将策略坍缩到狄拉克 delta 分布。为应对此挑战，我们提出 DRIFT（DiveRosity-Incentivized Reinforcement Fine-Tuning for Versatile Image Generation），一个创新框架，在策略内微调过程中系统性地激励输出多样性，调和强任务对齐与高生成多样性，以增强对需要多样化候选生成应用至关重要的多功能性。我们从三个代表性视角处理此问题：i）采样奖励集中子集，过滤奖励异常值以防止过早坍缩；ii）用随机变化提示扩展条件空间；iii）用基于势的奖励塑形机制优化组内多样性。实验结果表明，DRIFT 在任务对齐和生成多样性方面实现优越帕累托支配，等效对齐水平下多样性提高 9.08%-43.46%，等效多样性水平下对齐提高 59.65%-65.86%。

## 关键词

#强化微调 #多样性坍缩 #图像生成 #扩散模型 #arXiv