---
title: "把比赛建模为语言：足球反事实球员估值的生成式 Transformer 方法"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .md"
source_note: "[[信息源/arXiv cs.AI RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .]]"
source_sha256: be1448ccd7202fd6e3f5d6492fb68924755f91a22ac829a8a3a9daa9ecbb3a9f
original_url: "https://arxiv.org/abs/2603.15212"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 把比赛建模为语言：足球反事实球员估值的生成式 Transformer 方法

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Miru Hong、Minho Lee、Geonhee Jo 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.15212)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .|查看原始文件]]

## 摘要

- 提出 ScoutGPT，生成式模型：把足球比赛事件视为语言建模框架中的顺序 token；利用基于 NanoGPT 的 Transformer 架构在下一 token 预测上训练，学习比赛事件序列动力学，在假设阵容下模拟事件序列，预测性能优于现有基线模型。
- 借助该能力，模型采用蒙特卡洛采样实现反事实模拟，评估未观测场景。
- 评估足球球员转会因球员动作强烈依赖战术体系、队友与比赛上下文而具挑战性；招募决策常依赖静态统计与主观专家判断，未充分纳入这些上下文因素，根源是缺乏能预测假设场景结果的反事实模拟机制。
- K 联赛数据实验显示：模拟球员转会带来进攻推进与进球概率的可测量变化，表明 ScoutGPT 捕获了超越传统静态指标的球员特定影响。

## 正文

论文编号：arXiv:2603.15212v2（更新类型：replace）。以下为摘要全文翻译。

评估足球球员转会具有挑战性，因为球员动作强烈依赖战术体系、队友与比赛上下文。尽管存在这种复杂性，招募决策往往依赖静态统计与主观专家判断，未充分纳入这些上下文因素。这种局限很大程度上源于缺乏能够预测假设场景结果的反事实模拟机制。为应对这些挑战，我们提出 ScoutGPT，一个把足球比赛事件视为语言建模框架中顺序 token 的生成式模型。利用基于 NanoGPT 的 Transformer 架构进行下一 token 预测训练，ScoutGPT 学习比赛事件序列的动力学，以在假设阵容下模拟事件序列，展现出优于现有基线模型的预测性能。借助这一能力，模型采用蒙特卡洛采样实现反事实模拟，允许评估未观测场景。在 K 联赛数据上的实验表明，模拟的球员转会带来进攻推进与进球概率的可测量变化，表明 ScoutGPT 捕获了传统静态指标之外的球员特定影响。

## 关键词

#体育分析 #球员估值 #生成式模型 #反事实模拟
