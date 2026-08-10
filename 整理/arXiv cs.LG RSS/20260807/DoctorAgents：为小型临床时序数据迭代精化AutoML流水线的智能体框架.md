---
published: 2026-08-07
title: "DoctorAgents：为小型临床时序数据迭代精化 AutoML 流水线的智能体框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DoctorAgents- an agentic framework to iteratively refine AutoML pipeline for small clinical temporal.md"
source_note: "[[信息源/arXiv cs.LG RSS/DoctorAgents- an agentic framework to iteratively refine AutoML pipeline for small clinical temporal]]"
source_sha256: 64af85e6db005493d9c224a434de9ee1806f244d431b85730163772c82c26c60
original_url: "https://arxiv.org/abs/2608.05375"
processed: 2026-08-07
language: zh-CN
---

# DoctorAgents：为小型临床时序数据迭代精化 AutoML 流水线的智能体框架

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Ruilin Wang, Bo-Hong Wang, Elizabeth Kourbatski, Jun Bai, Hegang Chen, Ziyang Song, Gilles Boire, Marie Hudson, Yue Li
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05375)

## 摘要

- 临床机器学习有望支持高风险医疗决策，但可靠部署常受稀缺、异构与时序复杂性制约；现有 AutoML 系统主要依赖对预定义空间的暴力搜索，缺乏显式推理与记忆。
- 将小型临床数据的 AutoML 从穷举搜索重构为推理驱动精化，提出 DoctorAgents 智能体框架：通过生成、验证与精化三类专用 LLM 智能体自主构建与优化端到端 ML 流水线。
- DoctorAgents 通过文本梯度下降反向传播自然语言反馈，进行针对性更新而无需穷举搜索。
- 在多样临床任务上的实验表明，DoctorAgents 一致超越既有 AutoML 基线，并产生更可解释的任务特定表征。

## 正文

临床机器学习（ML）有潜力支持高风险医疗决策，但可靠部署常受稀缺、异构与时序复杂性的制约。为这类数据开发有效 ML 流水线仍耗时且易错，而现有自动机器学习（AutoML）系统仅部分解决该挑战，因为它们主要依赖对预定义空间的暴力搜索，缺乏显式推理与记忆。研究因此将小型临床数据的 AutoML 从穷举搜索重构为推理驱动的精化。研究提出 DoctorAgents，一个智能体 AI 框架：通过生成、验证与精化三类专用大语言模型（LLM）智能体自主构建与优化端到端 ML 流水线。DoctorAgents 通过文本梯度下降（textual gradient descent）反向传播自然语言反馈，进行针对性更新而无需穷举搜索。跨多样临床任务的实验表明，DoctorAgents 一致超越既有 AutoML 基线，同时产生更可解释的任务特定表征。

## 关键词

AutoML、智能体、临床数据、LLM、流水线优化
