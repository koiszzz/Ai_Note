---
title: "OR-Agent：桥接进化搜索与结构化研究实现自动化算法发现"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OR-Agent- Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery.md"
source_note: "[[信息源/arXiv cs.AI RSS/OR-Agent- Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery]]"
source_sha256: 497e98d93f53e9140626bf55c883dc1086fbfe637635884e001b712a34fae4d8
original_url: "https://arxiv.org/abs/2602.13769"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# OR-Agent：桥接进化搜索与结构化研究实现自动化算法发现

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qi Liu、Ruochen Hao、Can Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.13769)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OR-Agent- Bridging Evolutionary Search and Structured Research for Automated Algorithm Discovery|查看原始文件]]

## 摘要

- 提出 OR-Agent，面向实验环境丰富的优化问题自动启发式设计的多智能体研究框架：把启发式搜索组织为显式建模分支假设生成与系统回溯的树状工作流。
- 引入分层、优化启发的反思系统：短期反思充当言语梯度、长期反思充当言语动量、记忆压缩充当语义权重衰减——共同构成治理研究动力学的原则性机制。
- 当前基于 LLM 的进化方法往往依赖缺乏长期战略规划与从历史失败学习的正式机制的随机突变循环，导致低效探索与冗余试验。
- 在经典组合优化问题（TSP、CVRP、装箱）与基于仿真的协作驾驶场景上的大量实验显示 OR-Agent 优于强进化搜索基线；代码与实验数据公开：https://github.com/qiliuchn/OR-Agent

## 正文

论文编号：arXiv:2602.13769v3（更新类型：replace）。以下为摘要全文翻译。

在复杂、实验驱动的领域中自动化启发式设计，需要的不仅仅是求解算法的迭代突变。当前基于 LLM 的进化方法往往依赖随机突变循环，缺乏长期战略规划与从历史失败学习的正式机制，导致低效探索与冗余试验。为解决这一问题，我们提出 OR-Agent，一个为实验环境丰富的优化问题自动启发式设计而设计的多智能体研究框架。OR-Agent 把启发式搜索组织为基于树的工作流，显式建模分支假设生成与系统性回溯。此外，为解决当前智能体缺乏自适应学习的问题，我们引入一个分层、优化启发的反思系统：短期反思充当言语梯度（verbal gradients），长期反思充当言语动量（verbal momentum），记忆压缩充当语义权重衰减（semantic weight decay）——共同形成一个治理研究动力学的原则性机制。在经典组合优化问题（如 TSP、CVRP、装箱）与基于仿真的协作驾驶场景上的大量实验表明，OR-Agent 优于强进化搜索基线。所有代码与实验数据公开于 https://github.com/qiliuchn/OR-Agent。

## 关键词

#自动算法发现 #进化搜索 #多智能体 #反思机制
