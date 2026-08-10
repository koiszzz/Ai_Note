---
published: 2026-08-07
title: "GrandCode：通过智能体强化学习在竞技编程中达到大师级水平"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GrandCode- Achieving Grandmaster Level in Competitive Programming via Agentic Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/GrandCode- Achieving Grandmaster Level in Competitive Programming via Agentic Reinforcement Learning]]"
source_sha256: 744a97caece5a6619c31ddb4bf65ccd1eb63857ef11f7bd2bf977add4d600792
original_url: "https://arxiv.org/abs/2604.02721"
processed: 2026-08-07
language: zh-CN
---

# GrandCode：通过智能体强化学习在竞技编程中达到大师级水平

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ornith Team, Xiaoya Li, Guoyin Wang, Songqiao Su, Chris Shum, Jiwei Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.02721)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GrandCode- Achieving Grandmaster Level in Competitive Programming via Agentic Reinforcement Learning|查看原始文件]]

## 摘要

- 竞技编程仍是编码对抗 AI 的最后几个人类堡垒之一；迄今最好的 AI 系统仍逊于最佳人类竞技程序员：最近的谷歌 Gemini 3 Deep Think 取得第 8 名，且未在直播比赛条件下评估。
- 引入 GrandCode：面向竞技编程设计的多智能体 RL 系统，能力归因于两个关键因素：①编排多种智能体模块（假设提出、求解器、测试生成器、摘要等），并通过后训练与在线测试时 RL 联合改进；②引入为多阶段智能体 rollout、延迟奖励与智能体 RL 中普遍严重的策略外漂移专门设计的 Agentic GRPO。
- GrandCode 是首个在直播竞技编程比赛中一致击败所有人类参赛者的 AI 系统：最近三场 Codeforces 直播比赛（Round 1087、Round 1088、Round 1089）中全部排名第一，击败包括传奇大师在内的所有人类参赛者。
- GrandCode 表明 AI 系统已达到在最具竞争性的编码任务上超越最强人类程序员的地步。

## 正文

竞技编程仍是编码对抗 AI 的最后几个人类堡垒之一。迄今最好的 AI 系统仍逊于最佳人类竞技程序员：最近的最佳结果，谷歌 Gemini 3 Deep Think，取得第 8 名，且未在直播比赛条件下评估。本工作中，我们引入 GrandCode，一个面向竞技编程设计的多智能体 RL 系统。GrandCode 的能力归因于两个关键因素：（1）它编排各种智能体模块（假设提出、求解器、测试生成器、摘要等），并通过后训练与在线测试时 RL 联合改进它们；（2）我们引入专门为多阶段智能体 rollout、延迟奖励与智能体 RL 中普遍存在的严重策略外漂移设计的 Agentic GRPO。GrandCode 是首个在竞技编程直播比赛中一致击败所有人类参赛者的 AI 系统：在最近三场 Codeforces 直播比赛（Round 1087、Round 1088 与 Round 1089）中，GrandCode 全部排名第一，击败包括传奇大师在内的所有人类参赛者。GrandCode 表明 AI 系统已达到在最具竞争性的编码任务上超越最强人类程序员的地步。

## 关键词

#竞技编程 #多智能体RL #GRPO #Codeforces
