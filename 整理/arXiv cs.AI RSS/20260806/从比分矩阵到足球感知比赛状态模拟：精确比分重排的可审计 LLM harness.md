---
published: 20260806
title: "从比分矩阵到足球感知比赛状态模拟：精确比分重排的可审计 LLM harness"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/From Score Matrices to Football-Aware Match-State Simulation- An Auditable LLM Harness for Exact-Sco.md"
source_note: "[[信息源/arXiv cs.AI RSS/From Score Matrices to Football-Aware Match-State Simulation- An Auditable LLM Harness for Exact-Sco]]"
source_sha256: 2822ae57dc80288aa7aeb110cf6733ccdb5383641b108f8826ac41c1793859b8
original_url: "https://arxiv.org/abs/2608.05030"
processed: 2026-08-06
language: zh-CN

---

# 从比分矩阵到足球感知比赛状态模拟：精确比分重排的可审计 LLM harness

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shaopeng Liang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05030)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/From Score Matrices to Football-Aware Match-State Simulation- An Auditable LLM Harness for Exact-Sco|查看原始文件]]

## 摘要

- 足球比分预测结合强统计核心与困难情境边缘：动态泊松族模型估计球队实力、期望进球和连贯比分概率，但不直接理解角色、战术对阵、动机或首球如何改变行为；LLM 可推理此类概念，但不是校准概率引擎。
- 本文通过可审计信息 harness 组合两个组件，记录四次迭代：V1 动态比分驱动 Dixon-Coles 基线；V2 将 LLM 情境评分映射回期望进球参数；V3 用冻结比分候选集上的逐球模拟取代标量校正；V4 添加共享首次突破和进球后级联判断、时间感知停止和确定性尾部候选。
- 2025-26 英超前 150 场比赛的时间顺序回放中，V1 达 10.0% Top-1 和 26.7% Top-3 精确比分准确率，V3 达 12.0% 和 30.0%，V4 达 14.7% 和 30.7%；V4 将候选覆盖从 77.3% 提升到 84.7%。

## 正文

足球比分预测结合强统计核心与困难的情境边缘。动态泊松族模型估计球队实力、期望进球和连贯的比分概率，但不直接理解角色、战术对阵、动机或首球如何改变行为。大语言模型（LLM）可推理此类概念，然而不是校准的概率引擎。我们通过可审计信息 harness 组合两个组件。本文记录四次迭代：V1，动态比分驱动 Dixon-Coles 基线；V2，将 LLM 情境评分映射回期望进球参数；V3，用冻结比分候选集上的逐球模拟取代标量校正；V4，添加共享首次突破和进球后级联判断、时间感知停止和确定性尾部候选。该 harness 定义输入语义、提供赛前证据，并将 LLM 约束到可检查的推理路线。在 2025-26 英超前 150 场比赛的时间顺序回放中，V1 达 10.0% Top-1 和 26.7% Top-3 精确比分准确率。V3 达 12.0% 和 30.0%，而 V4 达 14.7% 和 30.7%。V4 将候选覆盖从 77.3% 提升到 84.7%，尽管没有添加的尾部候选成为 Top-3 精确命中。V1 的原生 1X2 分布达 53.3% argmax 准确率、0.9878 对数损失、0.5870 Brier 分数和 0.2095 排序概率分数。这些结果是探索性的：开发切片不是未触碰的基准，时间输入隔离无法排除封闭 LLM 中的结果记忆。贡献是可审计混合架构、清晰设计演进，以及展示足球感知模拟在何处以及何处不改进比分选择的负面发现。

## 关键词

#足球预测 #精确比分 #LLM #模拟 #arXiv