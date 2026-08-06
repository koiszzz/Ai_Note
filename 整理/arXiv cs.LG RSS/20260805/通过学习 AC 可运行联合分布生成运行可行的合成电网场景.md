---
published: 2026-08-05
title: "通过学习 AC 可运行联合分布生成运行可行的合成电网场景"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Operationally Feasible Synthetic Power-Grid Scenarios via Learning the AC-Operable Joint Distributio.md"
source_note: "[[信息源/arXiv cs.LG RSS/Operationally Feasible Synthetic Power-Grid Scenarios via Learning the AC-Operable Joint Distributio.]]"
source_sha256: 67404cbc8b126fba86e1ca7d76277278a2d163be8c7a9cd20cab72b435952967
original_url: "https://arxiv.org/abs/2608.03878"
processed: 2026-08-05
language: zh-CN
---

# 通过学习 AC 可运行联合分布生成运行可行的合成电网场景

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Chenhan Xiao、Xinyu He、Haoran Li、Hanghang Tong、Yang Weng
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03878)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Operationally Feasible Synthetic Power-Grid Scenarios via Learning the AC-Operable Joint Distributio.|查看原始文件]]

## 摘要

- 合成电网场景对规划、韧性评估、故障分析与数据驱动电力系统应用至关重要；近期合成电网生成方法通过事后验证、优化或物理感知生成融入工程知识，改善了结构真实性与运行可行性；但生成场景仍可能表现出低 AC 可行性与鲁棒性，限制其对下游电力系统研究的实用价值。
- 提出可行性感知分布学习框架：学习网络拓扑、支路电气参数与时变负荷曲线的 AC 可运行联合分布；不在生成后强制可行性，而是把 AC 潮流收敛与运行约束纳入分层扩散分布学习，使生成器本身能通过高效扩散采样产生运行可行的电网场景。
- 分层架构把高维生成任务分解为三个工程动机的阶段：拓扑与母线属性生成、以生成结构为条件的支路参数生成、以网络结构与电气特性为条件的负荷曲线生成。
- 基准系统实验表明：该框架显著改善运行可行性与故障鲁棒性，同时保持强统计保真度并消除基于优化的后处理。

## 正文

论文编号：arXiv:2608.03878v1（更新类型：new）。以下为摘要全文翻译。

合成电网场景对规划、韧性评估、故障分析与数据驱动的电力系统应用至关重要。近期的合成电网生成方法通过事后验证、优化或物理感知生成融入工程知识，改善了结构真实性与运行可行性。然而，生成的场景仍可能表现出较低的 AC 可行性与鲁棒性，限制其对下游电力系统研究的实用价值。本文提出一个可行性感知的分布学习框架，学习网络拓扑、支路电气参数与时变负荷曲线的 AC 可运行联合分布。所提框架不是在生成后强制可行性，而是把 AC 潮流收敛与运行约束纳入基于分层扩散的分布学习。这使生成器本身能通过高效的扩散采样产生运行可行的电网场景。分层架构把高维生成任务分解为三个工程动机的阶段：拓扑与母线属性生成、以生成结构为条件的支路参数生成，以及以网络结构与电气特性为条件的负荷曲线生成。在基准系统上的实验表明，该框架显著改善运行可行性与故障鲁棒性，同时保持强大的统计保真度并消除基于优化的后处理。

## 关键词

#电力系统 #合成电网 #扩散模型 #AC潮流 #场景生成
