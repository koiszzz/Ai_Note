---
published: 2026-08-06
title: Trivium：将时间遗憾作为因果记忆控制器的一等目标
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers.md
source_note: "[[信息源/arXiv cs.LG RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers]]"
source_sha256: 78b9109513ecec0ab445a1c6f9d53fea83b3d67335d4850113d1562eaddcc05c
original_url: https://arxiv.org/abs/2606.04421
processed: 2026-08-07
language: zh-CN
---

# Trivium：将时间遗憾作为因果记忆控制器的一等目标

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.04421)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Trivium- Temporal Regret as a First-Class Objective for Causal-Memory Controllers|查看原始文件]]

## 摘要

- 提出长视界时间遗憾（temporal regret）与认知遗憾（epistemic regret）作为诊断量，分别刻画错误因果模型被容忍的时长与模型上的后验误差。
- 在显式探测、持久性与可检测性假设下证明三个条件性结果：仅结果学习无法分离因果与虚假结构；有持久因果日志与预算探测时总探测复杂度为 O(log E)；K 个变化点下扩展为 O(K log E)。
- 在 CausalBench-Seq 上，Trivium 于 500 回合、20 个随机种子中记录每种子 7.8±2.9 个误识别回合且平稳误差为零；持续后验更新驱动后验恢复，而非探测器重开或局部修复。

## 正文

许多智能体系统和 LLM 流水线通过优化结果奖励来纠正错误。这仅处理了失败的"是什么"（what）；"为什么"和"何时"可能未被记录，使同样的错误可以在多个回合（episode）间重演。我们在结果遗憾（outcome regret）和认知遗憾（epistemic regret）之外提出长视界时间遗憾（temporal regret）。这些是诊断性量，而非标准的基于比较器的在线学习遗憾。时间遗憾刻画一个未解决或错误的因果模型被容忍了多久；认知遗憾刻画该模型上的后验误差。在 E 个回合的流上，我们在显式探测、持久性和可检测性假设下证明了三个条件性结果。第一，在观测等价混淆（observationally equivalent confounding）下，仅基于结果的（outcome-only）学习无法将因果结构与虚假结构分开，因此在结果遗憾达到零之后，失校准仍可能持续。第二，在有持久因果日志和有预算探测的条件下，总探测复杂度是 E 的对数，产生 O(log E) 的延迟识别时间遗憾。实现的裁剪软分数（clipped soft score）增加了一个线性数值下限，因此该对数声明仅适用于识别延迟。第三，在 K 个可检测变化点下，该速率扩展为 O(K log E)。我们实例化了 Trivium 并陈述了五个可证伪的预测。在 CausalBench-Seq 上，一个严格的结构读取在 500 个回合和 20 个随机种子上记录了每种子 7.8±2.9 个误识别回合，且观测到的平稳误差为零，而仅基于结果的控制器在整个过程中保持误识别。消融审计表明，持续的后验更新（而非探测器重开或局部修复）驱动后验恢复；局部修复反而减少了已提交图（committed-graph）调度暴露。先前基于裁剪软分数的对数包络结论被撤回。一个真实 LLM 流的试点提供了外部证据。此处的自学习意味着修订外部因果模型，而非重训 LLM 权重。

## 关键词

#因果记忆 #遗憾最小化 #智能体 #认知不确定性 #时间遗憾
