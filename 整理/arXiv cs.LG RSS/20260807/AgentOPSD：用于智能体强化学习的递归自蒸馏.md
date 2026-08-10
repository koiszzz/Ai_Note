---
published: 2026-08-07
title: "AgentOPSD：用于智能体强化学习的递归自蒸馏"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/AgentOPSD- Recursive Self-Distillation for Agentic Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/AgentOPSD- Recursive Self-Distillation for Agentic Reinforcement Learning]]"
source_sha256: 5c9be3dca0bf2fcb3498ce152f7a3898cfe282492fbbb4a54ceb4975ec35d9a8
original_url: "https://arxiv.org/abs/2608.05987"
processed: 2026-08-07
language: zh-CN
---

# AgentOPSD：用于智能体强化学习的递归自蒸馏

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Zi-Han Wang, Zhengxi Lu, Zhiyuan Yao, Jinyang Wu, Jie Wu, Zhengzhou Cai, Yueqing Sun, Ziang Ye, Linji Hao, Qi Gu, Xunliang Cai, Yongliang Shen, Yujiu Yang
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05987)

## 摘要

- 提出 AgentOPSD：无评论家的递归式回合级信用分配方法，用于智能体强化学习。
- 将 token 级师生对数概率差距聚合成回合级证据，并在对数几率空间中递归更新贝叶斯信念状态，将稀疏结局监督转为回合级信用信号。
- 与标准策略优化完全兼容，无需额外评论家或额外 rollout。
- 在 ALFWorld、WebShop、Search-QA 上使用 Qwen2.5（3B/7B）评估，ALFWorld 上 Qwen2.5-7B 达 89.1% 成功率，超越 GRPO 与强自蒸馏基线。

## 正文

带可验证奖励的强化学习（RL）构造轨迹级优势估计，但在长时程、多回合智能体任务中，往往无法把信用归于决定结局的少数关键决策。近期工作引入特权自蒸馏进行信用分配，提供更稠密的监督，但这类局部信号应如何表示序贯信用仍不清楚。本文提出 AgentOPSD，一种无评论家、递归式的智能体强化学习回合级信用分配方法。AgentOPSD 将 token 级师生对数概率差距聚合为回合级证据，并在对数几率空间中递归更新贝叶斯信念状态，从而产生一个原则性的重加权方案：将稀疏结局监督转化为回合级信用信号，并通过相邻状态间的边际信念修正识别关键回合。该方法与标准策略优化完全兼容，既不需要额外评论家，也不需要额外 rollout。研究在 ALFWorld、WebShop 与 Search-QA 上使用两个规模（3B 与 7B）的 Qwen2.5 模型评估 AgentOPSD。AgentOPSD 优于 GRPO 与强自蒸馏基线，在 Qwen2.5-7B 下于 ALFWorld 上取得 89.1% 成功率。消融研究将增益归因于回合级聚合与依赖历史的递归信念更新。

## 关键词

智能体强化学习、信用分配、自蒸馏、回合级监督、LLM
