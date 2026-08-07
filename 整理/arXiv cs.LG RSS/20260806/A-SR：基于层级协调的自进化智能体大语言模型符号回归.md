---
published: 2026-08-06
title: A-SR：基于层级协调的自进化智能体大语言模型符号回归
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination.md
source_note: "[[信息源/arXiv cs.LG RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination]]"
source_sha256: 63b6166aa1a95170b332a3dfaf4ffde27fc9162483c292a230f905bc49ff6f29
original_url: https://arxiv.org/abs/2608.04872
processed: 2026-08-07
language: zh-CN
---

# A-SR：基于层级协调的自进化智能体大语言模型符号回归

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04872)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination|查看原始文件]]

## 摘要

- 提出 A-SR，自进化智能体框架，将控制单元从表达式编辑转变为角色条件化的证据视图。
- 双时间尺度自进化：运行内调整搜索过程，运行间将轨迹蒸馏为开源 LLM 的角色条件化提议先验。
- 在 LLM-SRBench 四个 LSR-Synth 科学域上，A-SR 将 Acc@0.01 从 25.79% 提升至 48.30%（Llama3.1-8B）。

## 正文

符号回归旨在从数据中发现闭式方程，但现有的 LLM 引导方法往往依赖统一的提议循环，将异构的搜索失败压缩为标量分数和单一提示。我们提出 A-SR，一个自进化智能体框架，将控制单元从表达式编辑转变为角色条件化的证据视图（role-conditioned evidence views）。

A-SR 通过在协调协议（coordination protocols）间路由、在线评估者-奖励角色策略（online evaluator-reward role policy）以及状态路由的过程记忆（state-routed process memory）来协调公式发现。在搜索过程中，评估者反馈刻画可靠性与生产力、更新角色级效用，并将精英母题、失败轨迹和有效性诊断路由给不同智能体。该框架在两条时间尺度上自进化：在一次运行内，它调整搜索过程而不更新 LLM 参数；跨运行之间，记录下的轨迹可被蒸馏到开源 LLM 中，作为角色条件化的提议先验。

在 LLM-SRBench 的四个 LSR-Synth 科学域上取平均，A-SR 使用 Llama3.1-8B 将 Acc@0.01 相对基线从 25.79% 提升至 48.30%，而 A-SR-LoRA 将相应的 Qwen3-4B 结果从 24.58% 提升至 38.29%。在四个真实世界科学发现任务上，A-SR 在 8 项报告的指标中有 7 项取得最优的分布内或分布外归一化均方误差。

## 关键词

#符号回归 #智能体 #自进化 #LLM #A-SR
