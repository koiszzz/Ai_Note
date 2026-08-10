---
published: 2026-08-07
title: "以层级推理与话语级目标奖励增强 LLM 的社会智能"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Enhancing Social Intelligence in LLMs with Hierarchical Reasoning and Utterance-Level Goal Rewarding.md"
source_note: "[[信息源/arXiv cs.CL RSS/Enhancing Social Intelligence in LLMs with Hierarchical Reasoning and Utterance-Level Goal Rewarding]]"
source_sha256: 5016a8dda768e8506a51d8a126f5156e08e28a27b0fe5cef6c65ac15c2e41be2
original_url: "https://arxiv.org/abs/2608.05832"
processed: 2026-08-07
language: zh-CN
---

# 以层级推理与话语级目标奖励增强 LLM 的社会智能

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Xiaofeng Wang, Kakam Chong, Shuai Xiao, DeXin Kong, Qingyuan Tian, Chen Ju, Xu Yan, Shuai Zhao, Fei Huang, Rui Wang, Shuguang Han, jufeng chen
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05832)

## 摘要

- LLM 在结构化任务表现出色，但在动态社会交互中困难：成功需要长期目标协调与快速适应；当前方法常对每条话语应用统一目标基奖励，忽视每个对话回合目标的具体性、未计入潜在策略的理由。
- 受计划行为理论启发，提出 Think-Strategy-Response（TSR）框架：将社会对话分解为两个层级阶段——高层战略规划与低层语言执行。
- 优化 TSR 引入线性化层级强化学习与方差门控奖励（LHRL-VGR）：动态路由奖励（平衡目标完成与策略遵循），基于目标达成分数方差。
- SOTOPIA 基准实验显示方法微调 Qwen2.5-7B 智能体超越 GPT-4o 基线 7.32% 目标完成成功，多智能体社会协商任务取得 SOTA。

## 正文

大语言模型（LLMs）在结构化任务中表现出色，但在动态社会交互中困难，其中成功需要长期目标协调与快速适应。当前方法常常对每条话语应用统一的基于目标的奖励，忽视每个对话回合目标的具体性，并且没有考虑潜在策略的理由。受计划行为理论（Theory of Planned Behavior）启发，研究提出 Think-Strategy-Response（TSR）框架，将社会对话分解为两个层级阶段：高层战略规划与低层语言执行。为优化 TSR，研究引入线性化层级强化学习与方差门控奖励（Linearized Hierarchical Reinforcement Learning with Variance-Gated Rewards, LHRL-VGR），一个新颖算法：基于目标达成分数的方差动态路由奖励——平衡目标完成与策略遵循。SOTOPIA 基准上的实验表明，该方法微调一个 Qwen2.5-7B 智能体，在目标完成成功上超越 GPT-4o 基线 7.32%，在多智能体社会协商任务中取得最先进性能。

## 关键词

社会智能、层级推理、强化学习、对话、目标奖励
