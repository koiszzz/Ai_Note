---
published: 2026-08-06
title: A-SR：通过层级协调实现符号回归的自进化智能体大语言模型
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination.md
source_note: "[[信息源/arXiv cs.CL RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination]]"
source_sha256: 2b022ba5a1cfc2edae9ab4fe31e72a65544b9838963eb0b8c3f51218b1eaf264
original_url: https://arxiv.org/abs/2608.04872
processed: 2026-08-07
language: zh-CN
---

# A-SR：通过层级协调实现符号回归的自进化智能体大语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04872)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination|查看原始文件]]

## 摘要

- 现有 LLM 引导的符号回归依赖统一提案循环，把异构搜索失败压缩为标量分数与单个提示；A-SR 把控制单元从表达式编辑改为角色条件的证据视图
- 通过协调协议间路由、在线评估者-奖励角色策略与状态路由过程记忆协调公式发现；双时间尺度自进化：运行内路由适应（不更新 LLM 参数）、跨运行把轨迹蒸馏为开源 LLM 的角色条件提案先验
- LLM-SRBench 四个 LSR-Synth 科学领域上 Acc@0.01 从 25.79% 提升到 48.30%（Llama3.1-8B），A-SR-LoRA 把 Qwen3-4B 结果从 24.58% 提升到 38.29%；四个现实任务 8 项指标中 7 项最佳

## 正文

符号回归旨在从数据中发现闭式方程，但现有 LLM 引导方法往往依赖统一提案循环，把异构的搜索失败压缩成标量分数与单个提示。我们提出 A-SR，一个自进化智能体框架，把控制单元从表达式编辑转变为角色条件的证据视图。A-SR 通过在协调协议间的路由、在线评估者-奖励角色策略与状态路由的过程记忆来协调公式发现。在搜索中，评估者反馈刻画可靠性与生产力、更新角色级效用，并把精英主题、失败轨迹与有效性诊断路由到不同智能体。该框架在两个时间尺度上自进化：运行内，它无需更新 LLM 参数即可适应搜索过程；跨运行，记录的轨迹可被蒸馏进开源 LLM 作为角色条件的提案先验。平均在 LLM-SRBench 的四个 LSR-Synth 科学领域上，A-SR 用 Llama3.1-8B 把 Acc@0.01 从基线 25.79% 提升到 48.30%，而 A-SR-LoRA 把对应的 Qwen3-4B 结果从 24.58% 提升到 38.29%。在四个现实世界科学发现任务上，A-SR 在 8 项报告指标中的 7 项上取得最佳的分布内或分布外归一化均方误差。

## 关键词

#符号回归 #智能体 #自进化 #科学发现
