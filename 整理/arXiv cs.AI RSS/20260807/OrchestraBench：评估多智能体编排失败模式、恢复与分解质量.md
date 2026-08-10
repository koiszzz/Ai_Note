---
published: 2026-08-07
title: "OrchestraBench：评估多智能体编排失败模式、恢复与分解质量"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OrchestraBench- Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Qual.md"
source_note: "[[信息源/arXiv cs.AI RSS/OrchestraBench- Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Qual]]"
source_sha256: 1dbdce1015af6e9ebddcc254a14398e3c850515a74ca1d7119f564c2a580bff2
original_url: "https://arxiv.org/abs/2608.05263"
processed: 2026-08-07
language: zh-CN
---

# OrchestraBench：评估多智能体编排失败模式、恢复与分解质量

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yidian Chen, Yingzi Gu, Natan Vidra, Spurthi Setty, Sharon Zheng
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05263)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OrchestraBench- Evaluating Multi-Agent Orchestration Failure Modes, Recovery, and Decomposition Quality|查看原始文件]]

## 摘要

- 多智能体编排框架正从演示走向生产，但基准通常报告任务准确率而不诊断流水线为何失败、级联从何处开始或哪个路由决策导致崩溃。
- OrchestraBench 通过模板化企业工作流上受控、种子可复现的故障注入 harness 评估失败、恢复与分解——引入级联半径与逐失败模式恢复作为主要指标，并用 bootstrap 置信区间与配对检验比较路由策略。
- 在 26 案例金标诊断上，关键词/标志路由器在含误导或缺失表面标志的对抗案例上得 0%，而意图推理模型路由器得 100%，匹配 oracle；用真实 Claude 智能体在可验证算术依赖链上的受控机制探针揭示五个 MAST 模式的三个失败处理层级：工具故障完全恢复（1.0）、模糊委派部分恢复（0.30）、三个潜在或语义模式从不恢复（0.0）；计算重构为贷款审批工作流时该排序保持，跨 Sonnet、Opus 与 Haiku 也保持，尽管绝对率随上下文变化。
- 盲重试复现潜在故障并增加检测时间，表明检测与归因对遏制是必要的；级联半径随流水线深度增加（深度 3-7 平均 0.9 到 4.7）；可信状态修复消融显示表观遏制收益主要来自可信状态信号而非自主检测；这些结果是受控链机制探针而非领域工作负载声明。

## 正文

多智能体编排框架正从演示走向生产，然而基准通常报告任务准确率，而不诊断流水线为何失败、级联从何处开始或哪个路由决策导致崩溃。OrchestraBench 通过模板化企业工作流上受控、种子可复现的故障注入 harness 评估失败、恢复与分解。它引入级联半径（cascade radius）与逐失败模式恢复（per-failure-mode recovery）作为主要指标，并用 bootstrap 置信区间与配对检验比较路由策略。在 26 案例金标诊断上，关键词/标志路由器在含误导或缺失表面标志的对抗案例上得分 0%，而意图推理模型路由器得分 100%，匹配 oracle。带真实 Claude 智能体、在可验证算术依赖链上的受控机制探针揭示跨五个 MAST 模式的三个失败处理层级：工具故障完全恢复（1.0），模糊委派部分恢复（0.30），三个潜在或语义模式从不恢复（0.0）。当计算被重构为贷款审批工作流时，该排序保持，跨 Sonnet、Opus 与 Haiku 也保持，尽管绝对率随上下文变化。盲重试复现潜在故障并增加检测时间，表明检测与归因对遏制是必要的。级联半径随流水线深度增加（深度 3-7 平均从 0.9 到 4.7）。一个可信状态修复消融显示，表观的遏制收益主要来自可信状态信号而非自主检测。这些结果是受控链机制探针，而非领域工作负载声明。

## 关键词

#多智能体编排 #失败模式 #级联半径 #恢复
