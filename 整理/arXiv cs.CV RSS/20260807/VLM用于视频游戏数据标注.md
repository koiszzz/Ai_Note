---
published: 2026-08-07
title: "VLM 用于视频游戏数据标注"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/VLMs for Videogame Data Annotation.md"
source_note: "[[信息源/arXiv cs.CV RSS/VLMs for Videogame Data Annotation]]"
source_sha256: 57749c14b07b55d2d617816a04f5da89500617f50d5415706623801fcb6df7f3
original_url: "https://arxiv.org/abs/2608.05949"
processed: 2026-08-07
language: zh-CN
---

# VLM 用于视频游戏数据标注

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Katrin Schmid, Iuri Frosio
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05949)

## 摘要

- 视觉语言模型（VLM）与 AI 智能体已彻底改变工程师处理真实应用复杂问题的方式；它们在视频游戏中的采用受限于合成场景的极端可变性及其对真实物理的差劣符合。
- 调查使用 VLM 用奖励信号标注视频游戏帧序列，该任务有多个潜在应用（包括条件化训练与离线强化学习）。
- 显示 VLM 常难以回答赛车视频游戏的基本问题（其他游戏类型观察类似行为），讨论 VLM 输出混合与提示优化等对策。
- 展示输入序列长度、分辨率与问题批处理如何影响标注质量与 token 消耗。

## 正文

视觉语言模型（VLMs）与人工智能（AI）智能体已彻底改变工程师处理真实应用复杂问题的方式。它们视频游戏中的采用另一方面受限于合成场景的极端可变性及其对真实世界物理的差劣符合。本文调查使用 VLM 用奖励信号标注视频游戏帧序列——该任务有多个潜在应用，包括条件化训练与离线强化学习等。研究显示，VLM 常难以回答赛车视频游戏的基本问题（尽管在其它游戏类型上观察到类似行为），并讨论 VLM 输出混合与提示优化等对策。研究还展示输入序列长度、分辨率与问题批处理如何影响标注质量及其 token 消耗。

## 关键词

VLM、数据标注、视频游戏、奖励信号、提示优化
