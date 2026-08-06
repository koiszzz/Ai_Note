---
title: "把比赛建模为语言：足球反事实球员估值的生成式 Transformer 方法"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .md"
source_note: "[[信息源/arXiv cs.LG RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .]]"
source_sha256: 21ad3e78aa50b4baa28c848f6a45b34ccc470daa14e5a53340958d8b296389eb
original_url: "https://arxiv.org/abs/2603.15212"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 把比赛建模为语言：足球反事实球员估值的生成式 Transformer 方法

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Miru Hong、Minho Lee、Geonhee Jo、Hyeokje Cho、Hyunsung Kim、Pascal Bauer、Sang-Ki Ko
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.15212)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Modeling Matches as Language- A Generative Transformer Approach for Counterfactual Player Valuation .|查看原始文件]]

## 摘要

- 评估足球球员转会具有挑战性，因为球员动作强烈依赖战术体系、队友与比赛情境；尽管存在这种复杂性，招募决策往往依赖静态统计与主观专家判断，不能充分考虑这些情境因素，其局限主要源于缺乏能在假设情境下预测结果的反事实模拟机制。
- 提出 ScoutGPT，一个把足球比赛事件视为语言建模框架中序列 token 的生成模型。
- 利用基于 NanoGPT 的 Transformer 架构进行下一 token 预测训练，ScoutGPT 学习比赛事件序列的动力学，以模拟假设阵容下的事件序列，展现出优于现有基线模型的预测性能。
- 借助该能力，模型用蒙特卡洛采样实现反事实模拟，评估未观测情境；K League 数据实验显示：模拟球员转会带来进攻推进与进球概率的可测量变化，表明 ScoutGPT 捕捉到超越传统静态指标的球员特定影响。

## 正文

论文编号：arXiv:2603.15212v2（更新类型：replace-cross）。以下为摘要全文翻译。

评估足球球员转会具有挑战性，因为球员动作强烈依赖战术体系、队友与比赛情境。尽管存在这种复杂性，招募决策往往依赖静态统计与主观专家判断，这些不能充分考虑这些情境因素。这一局限主要源于缺乏能够在假设情境下预测结果的反事实模拟机制。为应对这些挑战，我们提出 ScoutGPT，一个把足球比赛事件视为语言建模框架内序列 token 的生成模型。利用基于 NanoGPT 的 Transformer 架构进行下一 token 预测训练，ScoutGPT 学习比赛事件序列的动力学，从而在假设阵容下模拟事件序列，展现出优于现有基线模型的预测性能。借助这一能力，该模型采用蒙特卡洛采样实现反事实模拟，允许评估未观测情境。在 K League 数据上的实验表明，模拟球员转会带来进攻推进与进球概率的可测量变化，表明 ScoutGPT 捕捉到超越传统静态指标的球员特定影响。

## 关键词

#足球分析 #球员估值 #反事实模拟 #Transformer #NanoGPT
