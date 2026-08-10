---
published: 2026-08-07
title: "AV-AIVAT：非完美信息游戏中带认证随时有效停止的 74 倍更廉价智能体评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AV-AIVAT- 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Informatio.md"
source_note: "[[信息源/arXiv cs.AI RSS/AV-AIVAT- 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Informatio]]"
source_sha256: 70332bc29b7fac859bd457e7002568e5972d94c32ebf848536e67d3185391b88
original_url: "https://arxiv.org/abs/2608.06362"
processed: 2026-08-07
language: zh-CN
---

# AV-AIVAT：非完美信息游戏中带认证随时有效停止的 74 倍更廉价智能体评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Boning Li, Yu Chen, Longbo Huang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06362)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AV-AIVAT- 74x Cheaper Agent Evaluation with Certified Anytime-Valid Stopping in Imperfect-Information Games|查看原始文件]]

## 摘要

- 判定两个智能体谁更强需要一直博弈直到技能胜过运气，而每局游戏都花费金钱、模型推理或专家时间；由于所需局数未知，固定预算评估要么在结果已定时继续付费，要么在智能体可分辩前停止，而用普通置信区间做朴素的可选停止会破坏声明的显著性水平。
- 动作知情价值评估工具（AIVAT）通过条件均值零修正降低非完美信息游戏的方差（在 15 种 LLM 智能体配置、71,439 手成对单挑无限注德州扑克（HUNL）上中位数 54 倍），但没说何时停止。
- 论文将 AIVAT 与持续监测的置信序列（CS）组合成随时有效的 AIVAT（AV-AIVAT），其在线价值模型只从过往局学习，因此没有局为自己的修正打分。
- 名义 95% 水平、目标精度 ±1 大盲注下，原始结果需要中位数 74 倍于 AIVAT 修正结果的局数才能在渐近 CS（AsympCS）下停止；精确有限样本认证使用经验-伯恩斯坦 CS（EB-CS），需要对修正后收益有独立证明的界——论文为 Leduc 德州扑克结构性建立该界，并刻画由 CS 的赌注上限与该界设定的宽度下限；描述性 HUNL EB-CS 运行显示中位数 1.37 倍停止时间比。
- AV-AIVAT 将方差缩减转化为高效、可审计的提前停止，同时分离渐近筛查与精确认证，评估可在证据足够时立刻停止，并把第三方复查所需的一切交给它。

## 正文

判定两个智能体中谁更强意味着一直博弈直到技能胜过运气，而每局游戏都花费金钱、模型推理或专家时间。由于所需局数未知，固定预算评估要么在结果已定时继续付费，要么在智能体可分辩之前停止；而用普通置信区间做朴素的可选停止会破坏声明的显著性水平。我们让这种评估在其证据足够时立刻停止，且保证完好。动作知情价值评估工具（Action-Informed Value Assessment Tool，AIVAT）通过条件均值零修正降低非完美信息游戏中的方差，在 15 种 LLM 智能体配置、涵盖 71,439 手成对单挑无限注德州扑克（HUNL）中位数降低 54 倍，但并未说明何时停止。我们将 AIVAT 与持续监测的置信序列（Confidence Sequences，CSs）组合成随时有效的 AIVAT（AV-AIVAT），其在线价值模型只从过往局学习，因此没有局为自己的修正打分。在名义 95% 水平与 ±1 大盲注的目标精度下，原始结果需要中位数 74 倍于 AIVAT 修正结果的局数才能在渐近 CS（AsympCS）下停止。精确有限样本认证使用经验-伯恩斯坦 CS（EB-CS），需要对修正后收益有独立证明的界。我们为 Leduc 德州扑克结构性建立这样的界，并刻画由 CS 的赌注上限与该界设定的宽度下限，它决定方差收益中有多少转化为更早停止；描述性 HUNL EB-CS 运行显示中位数 1.37 倍停止时间比。AV-AIVAT 将方差缩减转化为高效、可审计的提前停止，同时分离渐近筛查与精确认证，因此评估可以在证据足够的那一刻停止，并把第三方在该停止时刻复查结论所需的一切交给它。

## 关键词

#智能体评估 #置信序列 #方差缩减 #博弈论
