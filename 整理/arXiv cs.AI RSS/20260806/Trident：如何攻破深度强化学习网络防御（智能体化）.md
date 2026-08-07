---
published: 2026-08-06
title: Trident：如何攻破深度强化学习网络防御（智能体化）
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic).md
source_note: "[[信息源/arXiv cs.AI RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic)]]"
source_sha256: 007d3920734721b86d459c3608d1a3452806b20e0327c1a683c4ef4416797532
original_url: https://arxiv.org/abs/2608.04317
processed: 2026-08-07
language: zh-CN
---

# Trident：如何攻破深度强化学习网络防御（智能体化）

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04317)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Trident - How to Break Deep Reinforcement Learning Cyber Defenses (Agentic)|查看原始文件]]

## 摘要

- 基于深度强化学习（DRL）的自主网络防御系统研究虽多，却几乎只针对静态、启发式红队智能体进行评估，对自适应威胁的鲁棒性研究严重不足
- 可验证奖励强化学习（RLVR）已改进 LLM 推理，但由于缺乏合适的基准环境和交互数据集，其在网络安全中的集成仍难以实现
- 提出 Trident，一个智能体化 LLM 红队框架，包含三大组件：覆盖 CybORG CAGE 4 与 CyberWheel 的带隔离沙箱服务器的动态基准、超过 13,000 条高保真红蓝交互轨迹数据集，以及"代码即策略"的 RLVR 智能体架构
- 仅用单个可训练的 7B 规划器，Trident 就将蓝队防御性能平均降低 522%，并自主发现诱饵规避、自适应状态优先级排序等静态启发式完全无法发现的新兴行为

## 正文

基于深度强化学习（DRL）的自主网络防御系统吸引了大量研究关注，但它们的评估几乎完全针对静态、启发式的红队智能体，其面对自适应威胁的鲁棒性被严重忽视。与此同时，可验证奖励强化学习（RLVR）的最新进展已经改进了 LLM 的推理能力，但由于缺乏合适的基准环境和交互数据集，它们在网络安全领域的集成仍难以实现。

为弥合这一差距，我们引入 Trident，一个由三部分组成的智能体化 LLM 红队框架：一个包含跨 CybORG CAGE 4 与 CyberWheel 的隔离沙箱服务器的动态基准；一个包含超过 13,000 条高保真红蓝交互轨迹、面向 RLVR 的数据集；以及一种"代码即策略"（Code-as-Policy）的 RLVR 智能体架构（Trident Agentic）。后者通过三分的日志总结器（Log Summarizer）-规划器（Planner）-编码器（Coder）设计，将红队智能体训练重新表述为上下文赌博机问题：可训练的规划器从压缩的执行日志中生成完整的攻击策略，再由冻结的编码器将其转换为可执行的 Python 策略，部署起来对抗实时的 DRL 防御者。

实证评估揭示了现有防御的根本脆弱性：仅用一个可训练的 7B 参数规划器，Trident 相比静态红队基线，将蓝队智能体的防御性能平均降低 522%，同时自主发现了诱饵规避（decoy avoidance）和自适应状态优先级排序（adaptive state prioritization）等静态启发式完全无法揭示的新兴行为。

## 关键词

#深度强化学习 #网络安全 #红队 #LLM智能体
