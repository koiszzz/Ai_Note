---
published: 20260806
title: "A-SR：通过层级协调实现符号回归的自我进化智能体 LLM"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination.md"
source_note: "[[信息源/arXiv cs.AI RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination]]"
source_sha256: fb2c0341e9e48049618c26ba55668c4dc45fe4a8618ccd27195866d3b6778583
original_url: "https://arxiv.org/abs/2608.04872"
processed: 2026-08-06
language: zh-CN

---

# A-SR：通过层级协调实现符号回归的自我进化智能体 LLM

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wenxiao Zhao, Dong Liu, Kaiyi Xu, Feng Liu, Zhen Zhao, Fei Ben, Shu Wang, Wenhao Li, Yingnian Wu, Fenghua Ling, Haobo Li, Lei Bai
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04872)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/A-SR- Self-Evolving Agentic LLMs for Symbolic Regression via Hierarchical Coordination|查看原始文件]]

## 摘要

- 符号回归旨在从数据中发现闭式方程，但现有 LLM 引导方法往往依赖统一提议循环，将异构搜索失败压缩为标量分数和单一提示。
- 本文提出 A-SR，一个自我进化的智能体框架，将控制单元从表达式编辑转移到角色条件证据视图，通过协调协议路由、在线评估器-奖励角色策略和状态路由过程记忆协调公式发现。
- 在 LLM-SRBench 的四个 LSR-Synth 科学领域上，A-SR 将 Acc@0.01 从基线 25.79% 提升到 48.30%（Llama3.1-8B），A-SR-LoRA 将 Qwen3-4B 对应结果从 24.58% 提升到 38.29%。

## 正文

符号回归旨在从数据中发现闭式方程，但现有 LLM 引导方法往往依赖统一提议循环，将异构搜索失败压缩为标量分数和单一提示。我们提出 A-SR，一个自我进化的智能体框架，将控制单元从表达式编辑转移到角色条件证据视图。A-SR 通过协调协议之间的路由、在线评估器-奖励角色策略和状态路由过程记忆来协调公式发现。搜索期间，评估器反馈刻画可靠性和生产力，更新角色级效用，并将精英母题、失败轨迹和有效性诊断路由到不同智能体。该框架在两个时间尺度上自我进化：在运行内，它适应搜索过程而不更新 LLM 参数；跨运行，记录轨迹可以蒸馏到开源 LLM 中作为角色条件提议先验。在 LLM-SRBench 的四个 LSR-Synth 科学领域上平均，A-SR 将 Acc@0.01 从基线 25.79% 提升到 48.30%（Llama3.1-8B），而 A-SR-LoRA 将相应的 Qwen3-4B 结果从 24.58% 提升到 38.29%。在四个真实世界科学发现任务上，A-SR 在报告的 8 项指标中的 7 项上获得最佳分布内或分布外归一化均方误差。

## 关键词

#符号回归 #智能体LLM #自我进化 #科学发现 #arXiv