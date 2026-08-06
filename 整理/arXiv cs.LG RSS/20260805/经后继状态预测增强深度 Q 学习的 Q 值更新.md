---
published: 2026-08-05
title: "经后继状态预测增强深度 Q 学习的 Q 值更新"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Enhancing Q-Value Updates in Deep Q-Learning via Successor-State Prediction.md"
source_note: "[[信息源/arXiv cs.LG RSS/Enhancing Q-Value Updates in Deep Q-Learning via Successor-State Prediction]]"
source_sha256: 797c1baff31f0e0b690676739bffe234b7d4ee61207e684e50564864be7d1771
original_url: "https://arxiv.org/abs/2511.03836"
processed: 2026-08-05
language: zh-CN
---

# 经后继状态预测增强深度 Q 学习的 Q 值更新

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Lipeng Zu、Hansong Zhou、Xiaonan Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.03836)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Enhancing Q-Value Updates in Deep Q-Learning via Successor-State Prediction|查看原始文件]]

## 摘要

- 提出后继状态聚合深度 Q 网络（SADQ）：用随机转移模型显式建模环境动力学——把后继状态分布整合进 Q 值估计过程，实现更稳定、策略对齐的值更新；还用建模转移结构探索更高效动作选择策略。
- 深度 Q 网络（DQN）从重放缓冲区采样转换学习估计未来回报；但 DQN 目标更新常依赖过去、可能次优策略动作生成的下一个状态——这些状态可能不提供信息学习信号，给更新过程引入高方差；采样转换与智能体当前策略对齐差时该问题加剧。
- 提供理论保证：SADQ 保持无偏值估计同时降低训练方差。
- 标准 RL 基准与真实世界向量控制任务的广泛实证显示 SADQ 在稳定性与学习效率上一致优于 DQN 变体。

## 正文

论文编号：arXiv:2511.03836v2（更新类型：replace）。以下为摘要全文翻译。

深度 Q 网络（DQN）通过学习从重放缓冲区采样的转换来估计未来回报。然而，DQN 中的目标更新往往依赖由过去、可能次优策略的动作生成的下一个状态。因此，这些状态可能无法提供信息丰富的学习信号，给更新过程引入高方差。当采样转换与智能体当前策略对齐不佳时，这一问题会加剧。为应对这一局限，我们提出后继状态聚合深度 Q 网络（Successor-state Aggregation Deep Q-Network，SADQ）：用一个随机转移模型显式建模环境动力学。SADQ 把后继状态分布整合进 Q 值估计过程，实现更稳定、策略对齐的值更新。此外，它利用建模的转移结构探索更高效的动作选择策略。我们提供理论保证：SADQ 保持无偏的值估计，同时降低训练方差。我们在标准 RL 基准与真实世界向量控制任务上的广泛实证结果表明，SADQ 在稳定性与学习效率方面一致优于 DQN 变体。

## 关键词

#深度Q学习 #后继状态 #转移模型 #稳定更新
