---
published: 2026-08-07
title: "贝叶斯期望不确定性减少（B-EUR）模型：设计选项为何值得尝试的计算解释"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Bayesian Expected Uncertainty Reduction (B-EUR) Model- A Computational Account of What Makes Design .md"
source_note: "[[信息源/arXiv cs.AI RSS/Bayesian Expected Uncertainty Reduction (B-EUR) Model- A Computational Account of What Makes Design ]]"
source_sha256: 049c4b65e854f8a74dfd1cfc39f378582cc4f5e0e3cbd4a99132a2059db58edf
original_url: "https://arxiv.org/abs/2608.05642"
processed: 2026-08-07
language: zh-CN
---

# 贝叶斯期望不确定性减少（B-EUR）模型：设计选项为何值得尝试的计算解释

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shimon Honda, Takuma Miyaguchi, Koji Koizumi, Takanori Sano, Tristan Briard, Hideyoshi Yanagisawa
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05642)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Bayesian Expected Uncertainty Reduction (B-EUR) Model- A Computational Account of What Makes Design |查看原始文件]]

## 摘要

- 论文提出贝叶斯期望不确定性减少（B-EUR）模型，将尝试候选设计动作的价值形式化为其对动作-结果关系认知不确定性的期望减少，回应不确定性驱动动作（UDA）模型中"不确定性感知变化如何决定动作选择"的开放问题。
- 考察两种环境属性：泛化性（一次试验的知识延伸到邻近候选的程度）与结果可区分性（结果间差异的清晰程度）。
- 通过图形状猜测任务（在有限试验预算下隔离动作-结果关系学习）进行模拟与人类实验：模拟中认知价值与泛化性呈倒 U 型关系、随结果可区分性增加；人类实验中尝试的主观价值与享受度与泛化性呈倒 U 型关系，选择行为同时反映两种属性。
- B-EUR 为不确定性驱动设计活动中的候选动作评估提供计算解释，对构建原型集、框定设计问题与组织反馈以支持信息性探索有启示。

## 正文

本文提出贝叶斯期望不确定性减少（Bayesian Expected Uncertainty Reduction，B-EUR）模型，将尝试候选设计动作的价值形式化为其对动作-结果关系认知不确定性的期望减少。该模型回应不确定性驱动动作（Uncertainty Driven Action，UDA）模型开放问题的一部分：不确定性感知的变化如何决定动作选择。我们考察两种环境属性：泛化性（generalizability），即一次试验的知识延伸到邻近候选的程度；以及结果可区分性（outcome discriminability），即结果间差异能被区分的清晰程度。

我们通过图形状猜测任务（一种在有限试验预算下隔离动作-结果关系学习的任务）以模拟与人类实验测试该模型。模拟中，认知价值与泛化性呈倒 U 型关系，并随结果可区分性增加而上升。人类实验中，尝试的主观价值与享受度与泛化性呈倒 U 型关系，而选择行为同时反映两种属性。

B-EUR 模型为不确定性驱动设计活动中的候选动作评估提供了计算解释，并对构建原型集、框定设计问题与组织反馈以支持信息性探索具有启示意义。

## 关键词

#不确定性驱动设计 #贝叶斯模型 #认知价值 #设计探索
