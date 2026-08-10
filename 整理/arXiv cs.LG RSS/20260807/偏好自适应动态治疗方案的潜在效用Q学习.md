---
published: 2026-08-07
title: "偏好自适应动态治疗方案的潜在效用 Q 学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Latent Utility Q-Learning for Preference-Adaptive Dynamic Treatment Regimes.md"
source_note: "[[信息源/arXiv cs.LG RSS/Latent Utility Q-Learning for Preference-Adaptive Dynamic Treatment Regimes]]"
source_sha256: ace187b43b81cdef6d54ecaf2bcb806eeefd18273cc0491d2fe694d4ce882230
original_url: "https://arxiv.org/abs/2307.12022"
processed: 2026-08-07
language: zh-CN
---

# 偏好自适应动态治疗方案的潜在效用 Q 学习

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Joshua P. Zitovsky, Yating Zou, Leslie Wilson, Michael R. Kosorok
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2307.12022)

## 摘要

- 优化对多个竞争结局权重不同的患者的个体化治疗序列，对通常假设单一单变量结局的动态治疗方案（DTR）方法构成挑战。
- 提出潜在效用 Q 学习（LUQ-Learning）：估计在 K 个决策点优化患者特定偏好加权组合的多变量结局 Y∈R^d 的 DTR。
- 条件均值分解将偏好估计与结局回归解耦，在不完美观测与异质偏好下支持灵活模块化学习，无需患者显式结局排序；建立估计价值函数一致性，推导统一 ε 最优性保证，以偏好后验不确定性界策略价值损失。
- 校准于序贯多重分配随机试验（SMART）的模拟表明 LUQ-Learning 优于朴素结局聚合 Q 学习、末次报告满意度优化与现有基于偏好的方法。

## 正文

优化对多个竞争结局权重不同的患者的个体化治疗序列，对通常假设单一单变量结局的动态治疗方案（DTR）方法构成挑战。研究提出潜在效用 Q 学习（Latent Utility Q-Learning, LUQ-Learning）：估计在 K 个决策点优化患者特定偏好加权组合的多变量结局 Y∈R^d 的 DTR。条件均值分解将偏好估计与结局回归解耦，在不完美观测与异质偏好下实现灵活、模块化学习，无需患者显式结局排序。研究建立估计价值函数的一致性，并推导统一的 ε 最优性保证：以偏好后验不确定性界定策略价值损失，产生数据驱动策略选择的可解释准则。校准于序贯多重分配随机试验（Sequential Multiple Assignment Randomized Trials, SMARTs）的模拟证明，LUQ-Learning 优于朴素结局聚合的 Q 学习、末次报告满意度优化与现有基于偏好的方法。

## 关键词

动态治疗方案、Q 学习、偏好、多变量结局、个体化医疗
