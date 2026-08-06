---
title: "通过经验记忆改善 LLM 智能体的顺序决策"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Towards Improving Sequential Decision-Making in LLM Agents via Experience Memory.md"
source_note: "[[信息源/arXiv cs.AI RSS/Towards Improving Sequential Decision-Making in LLM Agents via Experience Memory]]"
source_sha256: 978f477afb8c6cd50b3477f5beaee2f85b9972802eedcc7c85b319864b146c17
original_url: "https://arxiv.org/abs/2608.03420"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 通过经验记忆改善 LLM 智能体的顺序决策

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jakub Rada、Viliam Lisý
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03420)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Towards Improving Sequential Decision-Making in LLM Agents via Experience Memory|查看原始文件]]

## 摘要

- 在完全可观测的双人零和博弈上研究 LLM 顺序决策（结果由规则决定、单个动作最优性可计算或近似、无需依赖评判模型）：跨模型层级，LLM 在井字棋或四子棋等简单游戏中次优行动，输给 MCTS 对手；保留博弈树但重写表层形式的混淆几乎不改变性能，表明差距不完全由记忆策略的回忆解释。
- 大语言模型在单次推理任务上大幅改善，但顺序决策性能了解较少。
- 引入带经验记忆的智能体框架（为顺序设置设计，处理信用分配等常见挑战）：赛后反思与规则提取在井字棋上产生可测量改善，无需修改模型权重。

## 正文

论文编号：arXiv:2608.03420v1（更新类型：new）。以下为摘要全文翻译。

大语言模型在单次推理任务上大幅改善，但它们在顺序决策中的性能了解较少。我们在完全可观测的双人零和博弈上研究这一点：此类博弈提供真值评估——结果由规则决定，单个动作的最优性可以计算或近似，无需依赖评判模型。跨模型层级，LLM 在井字棋或四子棋等简单游戏中次优行动，并输给 MCTS 对手。保留博弈树但重写其表层形式的混淆使性能基本不变，表明这一差距不能完全由记忆策略的回忆解释。受这一性能差距驱动，我们引入一个为顺序设置设计、配备经验记忆的智能体框架，处理信用分配等顺序决策的常见挑战。我们表明，赛后反思与规则提取在井字棋上产生可测量的改善，而无需修改模型权重。

## 关键词

#顺序决策 #经验记忆 #零和博弈 #LLM智能体
