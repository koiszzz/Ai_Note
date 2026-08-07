---
published: 2026-08-06
title: State2State：面向 LLM 智能体的环境派生中期训练
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/State2State- Environment-Derived Mid-Training for LLM Agents.md
source_note: "[[信息源/arXiv cs.CL RSS/State2State- Environment-Derived Mid-Training for LLM Agents]]"
source_sha256: 9d2dc92da0f3a4234cee29c93fe49c6c985c8a45274994b82be26a43fed524ea
original_url: https://arxiv.org/abs/2608.04934
processed: 2026-08-07
language: zh-CN
---

# State2State：面向 LLM 智能体的环境派生中期训练

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04934)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/State2State- Environment-Derived Mid-Training for LLM Agents|查看原始文件]]

## 摘要

- 现有 LLM 智能体训练依赖专家轨迹的监督微调或基于人工指定任务与手工验证器的在线强化学习，两者都受限于外部指定的任务和监督信号，限制了训练的可扩展性与多样性。
- 本文研究一种环境学习范式：智能体仅通过与环境的交互获得交互与操作能力，无需外部指定任务；据此提出 State2State 环境派生中期训练方法，将探索到的环境状态转化为训练目标，挑战智能体到达指定目标状态。
- 通过从环境探索中派生任务并以规则式状态匹配验证成功，State2State 无需专家监督或人工任务设计即可提供可扩展、可验证的训练目标；在 ALFWorld 与 ScienceWorld 上的实验表明其多数设置下可独立提升智能体表现，作为下游 RL 初始化还能进一步提升最终表现与学习效率。

## 正文

训练 LLM 智能体通常依赖来自专家轨迹的监督微调，或基于人工指定任务与手工验证器的在线强化学习。虽然有效，但两者都被外部指定的任务和监督信号所束缚，限制了智能体训练的可扩展性与多样性。我们研究一种环境学习范式，使智能体仅通过环境交互就能获得交互与操作能力，无需外部指定任务。我们提出 State2State，一种环境派生的中期训练方法：将探索到的环境状态转化为训练目标，挑战智能体到达指定的目标状态。通过从环境探索中派生任务、并以规则式状态匹配验证成功，State2State 在无需专家监督或人工任务设计的情况下提供了可扩展且可验证的训练目标。在 ALFWorld 和 ScienceWorld 上的实验表明，作为独立的环境学习阶段，State2State 在多数设置下都能提升智能体表现。作为下游强化学习的初始化，它还能进一步提升最终表现与学习效率，并展现出跨环境泛化的有前景的证据。

## 关键词

#LLM智能体 #中期训练 #环境学习 #State2State #ALFWorld #ScienceWorld #强化学习
