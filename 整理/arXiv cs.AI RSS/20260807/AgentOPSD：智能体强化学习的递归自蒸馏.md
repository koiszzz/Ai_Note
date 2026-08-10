---
published: 2026-08-07
title: "AgentOPSD：智能体强化学习的递归自蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgentOPSD- Recursive Self-Distillation for Agentic Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgentOPSD- Recursive Self-Distillation for Agentic Reinforcement Learning]]"
source_sha256: 600be5d39cca276e0b1c64d331af01596fbff0d9937c60ef08fa55ccaf3c7d3b
original_url: "https://arxiv.org/abs/2608.05987"
processed: 2026-08-07
language: zh-CN
---

# AgentOPSD：智能体强化学习的递归自蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zi-Han Wang, Zhengxi Lu, Zhiyuan Yao, Jinyang Wu, Jie Wu, Zhengzhou Cai, Yueqing Sun, Ziang Ye, Linji Hao, Qi Gu, Xunliang Cai, Yongliang Shen, Yujiu Yang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05987)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgentOPSD- Recursive Self-Distillation for Agentic Reinforcement Learning|查看原始文件]]

## 摘要

- 带可验证奖励的强化学习构建轨迹级优势估计，但在长时程、多轮智能体任务中常无法为决定结果的少数关键决策正确分配信用。
- 提出 AgentOPSD：一种无评论家（critic-free）、递归的智能体强化学习回合级信用分配方法，将 token 级师生对数概率差聚合成回合级证据，并在对数几率空间递归更新贝叶斯信念状态。
- 由此得到有原则的重加权方案：将稀疏结果监督转化为回合级信用信号，并通过相邻状态间边际信念修正识别关键回合；与标准策略优化完全兼容，无需额外评论家或额外 rollout。
- 在 ALFWorld、WebShop、Search-QA 上用 Qwen2.5（3B/7B）评估：AgentOPSD 优于 GRPO 与强自蒸馏基线，Qwen2.5-7B 在 ALFWorld 达到 89.1% 成功率；消融研究将增益归因于回合级聚合与依赖历史的递归信念更新。

## 正文

带可验证奖励的强化学习（RL）构建轨迹级优势估计，但在长时程、多轮智能体任务中，它常常无法为决定结果的少数关键决策正确分配信用。近期工作引入特权自蒸馏进行信用分配，提供更密集的监督，但此类局部信号应如何表示序列性信用仍不清楚。我们提出 AgentOPSD，一种无评论家、递归的智能体强化学习回合级信用分配方法。AgentOPSD 将 token 级师生对数概率差聚合成回合级证据，并在对数几率空间中递归更新贝叶斯信念状态。这产生一个有原则的重加权方案：将稀疏结果监督转化为回合级信用信号，并通过相邻状态间的边际信念修正识别关键回合。该方法与标准策略优化完全兼容，既不需要额外评论家，也不需要额外 rollout。我们在 ALFWorld、WebShop 与 Search-QA 上使用两个规模（3B 与 7B）的 Qwen2.5 模型评估 AgentOPSD。AgentOPSD 优于 GRPO 与强自蒸馏基线，Qwen2.5-7B 在 ALFWorld 上达到 89.1% 成功率。消融研究将增益归因于回合级聚合与依赖历史的递归信念更新。

## 关键词

#强化学习 #信用分配 #自蒸馏 #智能体
