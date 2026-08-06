---
title: "EduClaw-Bench：带模拟学习者的教学 LLM 智能体长视界基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EduClaw-Bench- A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners.md"
source_note: "[[信息源/arXiv cs.AI RSS/EduClaw-Bench- A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners]]"
source_sha256: a2cb379d21e23f48d46d366a94983e4f1c89e5ec83f30b1a7526ce1ed4a68b16
original_url: "https://arxiv.org/abs/2608.03206"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# EduClaw-Bench：带模拟学习者的教学 LLM 智能体长视界基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Unggi Lee、Sookbun Lee、Yeil Jeong 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03206)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EduClaw-Bench- A Long-Horizon Benchmark for Pedagogical LLM Agents with Simulated Learners|查看原始文件]]

## 摘要

- 引入 EduClaw-Bench：把智能体导师置于与模拟学习者（基于知识追踪 KT 接地，KT 模型用真实学生数据训练）的连续 30 天关系中，覆盖 55 个场景。
- 每个智能体按三个主轴（学习增益、响应性、帮助性）与两个课程设计轴（Gagné 与 Rosenshine）评分，帮助性与课程轴由三个 LLM 评委组成的跨家族评审小组评判。
- 评估 10 个智能体适配器 × 三个基础模型层级，得出两个单层级、单会话评估无法得出的发现：辅导质量属于基础模型与智能体框架共同而非单独一方；几乎没有任何组合能在整个视界内维持良好辅导。
- 校准检查（ECE=0.049）与真实课堂实地研究确认模拟学习者及其测量贴合现实。

## 正文

论文编号：arXiv:2608.03206v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）驱动从辅导到作文评分的教育应用，但每个都是单一任务的点方案，直到最近这些点方案才被集成到在 LMS（学习管理系统）上运行的智能体中。然而，辅导是长视界的：学习者在数天或数周内进步，而非单轮对话，且没有任何基准在持续关系中评估导师智能体。我们引入 EduClaw-Bench，一个把智能体导师置于与模拟学习者连续 30 天关系中的基准；模拟学习者基于知识追踪（KT）接地，其知识概念掌握程度由在真实学生数据上训练的 KT 模型驱动，并在 55 个场景中探测学习增益。每个智能体按三个主轴（学习增益、响应性、帮助性）与两个课程设计轴（Gagné 与 Rosenshine）评分，其中帮助性与课程轴由三个 LLM 评委组成的跨家族评审小组评判。评估三个基础模型层级上的 10 个智能体适配器，得出两个单层级、单会话评估无法达到的发现。第一，辅导质量属于基础模型与智能体框架共同，而非任何一方单独。第二，几乎没有任何组合能在完整视界上维持良好辅导。校准检查（ECE=0.049）与一次真实课堂实地研究确认模拟学习者及其测量贴合现实。我们的工作是迈向未来教育可信 AI 导师的一步。

## 关键词

#教育AI #辅导智能体 #知识追踪 #长视界基准
