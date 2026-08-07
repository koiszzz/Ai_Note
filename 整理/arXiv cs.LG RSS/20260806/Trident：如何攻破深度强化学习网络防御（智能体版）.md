---
published: 2026-08-06
title: Trident：如何攻破深度强化学习网络防御（智能体版）
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic).md
source_note: "[[信息源/arXiv cs.LG RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic)]]"
source_sha256: 6517a835eaeb7abe8227dc2333b143bdbd54a55cf490a49e0f91421a05e9ae78
original_url: https://arxiv.org/abs/2608.04317
processed: 2026-08-07
language: zh-CN
---

# Trident：如何攻破深度强化学习网络防御（智能体版）

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04317)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic)|查看原始文件]]

## 摘要

- 提出 Trident：智能体式 LLM 红队框架，含动态基准（CybORG CAGE 4 与 CyberWheel 隔离沙箱）、超 13,000 条红蓝交互轨迹的 RLVR 数据集与"代码即策略"的 RLVR 智能体架构。
- 采用 Log Summarizer–Planner–Coder 三部件设计，将红队训练重构为上下文赌博机：可训练 Planner 从压缩日志生成攻击策略，冻结 Coder 转译为可执行 Python 策略。
- 仅凭一个可训练 7B planner，Trident 使蓝队防御性能平均降低 522%（相对静态红队基线），并自主发现诱饵规避、自适应状态优先化等涌现行为。

## 正文

基于深度强化学习（DRL）的自主网络防御系统已引起大量研究关注，但仍几乎只在静态、启发式红队智能体下被评估，使其对自适应威胁的鲁棒性严重缺乏研究。与此同时，可验证奖励强化学习（RLVR）的最新进展提升了 LLM 的推理能力，但由于缺乏合适的基准环境和交互数据集，其与网络安全的整合仍然难以实现。为弥合这一差距，我们引入 Trident——一个智能体式 LLM 红队框架，包含三个组件：一个动态基准，涵盖 CybORG CAGE 4 和 CyberWheel 的隔离沙箱服务器；一个包含超过 13,000 条高保真红蓝交互轨迹、用于 RLVR 的数据集；以及一个"代码即策略"（Code-as-Policy）的 RLVR 智能体架构（Trident Agentic）。后者通过三部分式 Log Summarizer–Planner–Coder 设计将红队智能体训练重构为上下文赌博机（contextual bandit）：一个可训练的 Planner 从压缩的执行日志中生成完整攻击策略，而冻结的 Coder 将其转化为可执行的 Python 策略，部署以对抗实时 DRL 防御者。经验评估揭示了现有防御的根本脆弱性：仅凭一个可训练的 7B planner，Trident 将蓝队智能体防御性能平均降低 522%（相对于静态红队智能体基线），同时自主发现诱饵规避（decoy avoidance）和自适应状态优先化等涌现行为——这些是静态启发式完全无法揭示的。

## 关键词

#红队 #深度强化学习 #网络安全 #RLVR #LLM智能体
