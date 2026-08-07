---
published: 2026-08-06
title: Trivium：将时间遗憾作为因果记忆控制器的一等目标
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers.md
source_note: "[[信息源/arXiv cs.AI RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers]]"
source_sha256: c6c79c67613169ffa658cfcced19cd0fdb8a2f7062e9bb0d1c993c42ef47b8c1
original_url: https://arxiv.org/abs/2606.04421
processed: 2026-08-07
language: zh-CN
---

# Trivium：将时间遗憾作为因果记忆控制器的一等目标

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.04421)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers|查看原始文件]]

## 摘要

- 许多智能体系统和 LLM 流水线通过优化结果奖励来纠正错误，但这只解决失败的"是什么"，"为什么"与"何时"可能未被记录，导致同一错误跨 episode 反复出现
- 提出长期时间遗憾（temporal regret），与结果遗憾和认识论遗憾（epistemic regret）并列；这些是诊断性量而非基于比较器的标准在线学习遗憾，时间遗憾刻画未解决或错误的因果模型被容忍了多久
- 在显式探测、持续性和可检测性假设下证明三个条件性结论：观测等价混淆下仅结果学习无法分离因果与伪结构；有持续性因果日志和预算化探测时总探测复杂度为 $O(\log E)$；有 $K$ 个可检测变点时扩展到 $O(K \log E)$
- 实例化 Trivium 并给出五个可证伪预测；在 CausalBench-Seq 上硬结构读出在 500 个 episode、20 个种子上每种子误识别 7.8±2.9 个 episode 且观测到零稳态错误，而仅结果学习控制器全程保持误识别

## 正文

许多智能体系统和 LLM 流水线通过优化结果奖励来纠正错误。但这只解决了失败的"是什么"（what）；"为什么"和"何时"可能未被记录，使得同样的错误能够在各个 episode 之间反复出现。我们提出长期时间遗憾（long-horizon temporal regret），与结果遗憾（outcome regret）和认识论遗憾（epistemic regret）并列。这些都是诊断性量，而非基于比较器的标准在线学习遗憾。时间遗憾刻画一个未解决或错误的因果模型被容忍了多长时间；认识论遗憾则刻画该模型上的后验误差。

在明确的探测（probing）、持续性（persistence）和可检测性（detectability）假设下，我们在一系列共 $E$ 个 episode 的流上证明了三个条件性结果。第一，在观测等价混淆（observationally equivalent confounding）下，仅基于结果的学习无法将因果结构与伪结构分离，因此即使结果遗憾归零，错误校准仍可能持续存在。第二，在存在持续性因果日志和预算化探测的条件下，总探测复杂度是 $E$ 的对数，即 $O(\log E)$，产生 $O(\log E)$ 的延迟识别（delayed-identification）时间遗憾。由于已实现的裁剪软评分（clipped soft score）添加了一个线性数值下限，这一对数声明仅适用于识别延迟。第三，在存在 $K$ 个可检测变点的条件下，该速率扩展到 $O(K \log E)$。

我们实例化了 Trivium，并陈述了五个可证伪的预测。在 CausalBench-Seq 上，硬结构读出（hard structural readout）在 500 个 episode、20 个种子的条件下，每种子平均误识别 7.8±2.9 个 episode，且观测到零稳态错误，而仅结果学习的控制器始终保持误识别。审计消融（audit ablation）表明，驱动后验恢复的是持续的后验更新，而非检测器重新开启或局部修复；局部修复反而减少了承诺图（committed-graph）的分派暴露。此前基于裁剪软评分的对数包络结论已被撤回。一个真实 LLM 流的试点提供了外部证据。这里的"自学习"指的是修正外部因果模型，而非重新训练 LLM 权重。

## 关键词

#因果记忆 #时间遗憾 #智能体 #诊断性目标
