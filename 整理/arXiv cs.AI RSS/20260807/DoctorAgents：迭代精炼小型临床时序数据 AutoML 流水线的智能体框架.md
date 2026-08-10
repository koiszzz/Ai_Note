---
published: 2026-08-07
title: "DoctorAgents：迭代精炼小型临床时序数据 AutoML 流水线的智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DoctorAgents- an agentic framework to iteratively refine AutoML pipeline for small clinical temporal.md"
source_note: "[[信息源/arXiv cs.AI RSS/DoctorAgents- an agentic framework to iteratively refine AutoML pipeline for small clinical temporal]]"
source_sha256: 03ac6ea4350000f3540054d6c6e680224874fb40a15453ff181802181f7cb94d
original_url: "https://arxiv.org/abs/2608.05375"
processed: 2026-08-07
language: zh-CN
---

# DoctorAgents：迭代精炼小型临床时序数据 AutoML 流水线的智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ruilin Wang, Bo-Hong Wang, Elizabeth Kourbatski, Jun Bai, Hegang Chen, Ziyang Song, Gilles Boire, Marie Hudson, Yue Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05375)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DoctorAgents- an agentic framework to iteratively refine AutoML pipeline for small clinical temporal|查看原始文件]]

## 摘要

- 临床机器学习（ML）有潜力支持高风险医疗决策，但可靠部署常受稀缺、异构与时序复杂性制约；为此类数据开发有效 ML 流水线耗时且易错，而现有自动机器学习（AutoML）系统只部分解决该挑战，因为它们 largely 依赖对预定义空间的暴力搜索，缺乏显式推理与记忆。
- 将小型临床数据的 AutoML 从穷举搜索重构为推理驱动的精炼。
- 提出 DoctorAgents：智能体 AI 框架，通过用于生成、验证与精炼的专门大语言模型（LLM）智能体自主构建并优化端到端 ML 流水线；DoctorAgents 通过文本梯度下降反向传播自然语言反馈，无需穷举搜索即可进行针对性更新。
- 跨多样临床任务实验表明，DoctorAgents 一致优于既有 AutoML 基线，同时产生更可解释的任务特定表示。

## 正文

临床机器学习（ML）有潜力支持高风险医疗决策，但可靠部署常受稀缺、异构与时序复杂性制约。为此类数据开发有效的 ML 流水线仍然耗时且易错，而现有自动机器学习（automated machine learning，AutoML）系统只部分解决这一挑战，因为它们 largely 依赖对预定义空间的暴力搜索，缺乏显式推理与记忆。因此，我们将小型临床数据的 AutoML 从穷举搜索重构为推理驱动的精炼。我们提出 DoctorAgents，一个智能体 AI 框架，通过用于生成、验证与精炼的专门大语言模型（LLM）智能体，自主构建并优化端到端 ML 流水线。DoctorAgents 通过文本梯度下降（textual gradient descent）反向传播自然语言反馈，无需穷举搜索即可执行针对性更新。跨多样临床任务的实验表明，DoctorAgents 一致优于既有 AutoML 基线，同时产生更可解释的任务特定表示。

## 关键词

#AutoML #临床数据 #LLM智能体 #医疗AI
