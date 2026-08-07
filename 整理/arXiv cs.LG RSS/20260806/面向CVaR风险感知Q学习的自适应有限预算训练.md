---
published: 2026-08-06
title: 面向CVaR风险感知Q学习的自适应有限预算训练
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Adaptive Finite-Budget Training for CVaR Risk-Aware Q-Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/Adaptive Finite-Budget Training for CVaR Risk-Aware Q-Learning]]"
source_sha256: a5820faff77a941ec60748e4bbc9bceb74de2753f6cafce79bdd3ba86cb5c43c
original_url: https://arxiv.org/abs/2608.04305
processed: 2026-08-07
language: zh-CN
---

# 面向CVaR风险感知Q学习的自适应有限预算训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04305)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Adaptive Finite-Budget Training for CVaR Risk-Aware Q-Learning|查看原始文件]]

## 摘要

- 针对 CVaR 风险感知 Q 学习（RaQL）的脆弱有限预算行为，提出自适应训练控制器。
- 六项协调机制重塑训练过程而不改动 CVaR 估计器与 Bellman 不动点；平均经验 CVaR Bellman 残差较固定参数基线降低约 85%。
- 在日频比特币交易任务中，学习策略取得 Sharpe 比率 0.9281、最大回撤 6.46%（交易成本后）。

## 正文

风险感知 Q 学习（RaQL）为动态风险目标提供了一种无模型、双时间尺度的估计器，但其有限预算行为仍然脆弱：固定的内循环超参数可能产生不稳定的值估计、持续存在的 Bellman 残差和低效的样本复用。本文为条件风险价值（Conditional Value-at-Risk，CVaR）RaQL 提出一种自适应训练控制器，并在日频比特币交易任务上对其评估。

该控制器保留原始 CVaR 估计器和 Bellman 不动点；它通过六个协调机制重新设计训练过程：逐单元内步长设定（per-cell inner-step sizing）、外率匹配的衰减同步、对类 VaR 内变量的短早期校正、"先覆盖后贪心"的样本分配规则、成熟内层估计的渐进后缀聚合，以及从在线可观测量进行关键尺度的数据驱动校准。在 20 个随机种子和 856,000 个内转移样本上，该控制器将平均经验 CVaR Bellman 残差相对固定参数基线降低约 85%（MeanBEQ 从 1.2202 降至 0.1854；MeanBEV 从 1.1624 降至 0.0535），并在不同 CVaR 水平、折扣因子和训练预算下保持稳定。

在按时间排序的样本外测试集上，学习到的策略在交易成本后取得 0.9281 的 Sharpe 比率与 6.46% 的最大回撤。尽管买入持有产生更高的累计回报（35.43% 对 23.61%），自适应策略实现了远更低的波动率（9.57% 对 47.93%）、回撤和 CVaR 损失。这些结果表明，仅对训练过程进行自适应有限预算设计、不改变风险目标，即可实质性提升风险感知 Q 学习在金融应用中的可靠性与风险调整后性能。

## 关键词

#CVaR #风险感知 #Q学习 #强化学习 #量化交易
