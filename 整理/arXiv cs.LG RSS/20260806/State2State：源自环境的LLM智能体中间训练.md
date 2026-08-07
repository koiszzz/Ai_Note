---
published: 2026-08-06
title: State2State：源自环境的LLM智能体中间训练
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/State2State- Environment-Derived Mid-Training for LLM Agents.md
source_note: "[[信息源/arXiv cs.LG RSS/State2State- Environment-Derived Mid-Training for LLM Agents]]"
source_sha256: 17111f124c347a6dadfe1aceb6b4a82766aa011738a10fae08c0a7322c57156a
original_url: https://arxiv.org/abs/2608.04934
processed: 2026-08-07
language: zh-CN
---

# State2State：源自环境的LLM智能体中间训练

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04934)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/State2State- Environment-Derived Mid-Training for LLM Agents|查看原始文件]]

## 摘要

- 提出 State2State，一种源自环境的中间训练方法，将探索得到的环境状态转化为训练目标，挑战智能体到达指定目标状态。
- 通过环境探索派生任务、基于规则的状态匹配验证成功，无需专家监督或人工任务设计，提供可扩展且可验证的训练目标。
- 在 ALFWorld 与 ScienceWorld 上，作为独立环境学习阶段在多数设定下提升性能；作为下游 RL 初始化进一步改善最终性能与学习效率。

## 正文

训练 LLM 智能体通常依赖来自专家轨迹的监督微调，或是在人工指定任务与手工验证器之上的在线强化学习。尽管有效，两者都受限于外部指定的任务与监督信号，限制了智能体训练的可扩展性与多样性。我们研究一种环境学习范式，在其中智能体仅通过与环境的交互获取交互与操作能力，无需外部指定任务。我们提出 State2State，一种源自环境的中间训练方法，它将探索得到的环境状态转化为训练目标，挑战智能体到达指定的目标状态。通过从环境探索中派生任务、并借助基于规则的状态匹配验证成功，State2State 提供可扩展且可验证的训练目标，无需专家监督或人工任务设计。在 ALFWorld 与 ScienceWorld 上的实验表明，在大多数设定下，State2State 作为独立的环境学习阶段能提升智能体性能。作为下游 RL 的初始化，它进一步改善最终性能与学习效率，并展现出跨环境泛化的有前景的证据。

## 关键词

#LLM智能体 #环境学习 #中间训练 #自监督 #Agent
