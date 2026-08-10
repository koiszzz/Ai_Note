---
published: 2026-08-07
title: "在 VLM 标注数据集上训练条件化视频游戏智能体"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Training a Conditioned Video Game Agent on a VLM Annotated Dataset.md"
source_note: "[[信息源/arXiv cs.LG RSS/Training a Conditioned Video Game Agent on a VLM Annotated Dataset]]"
source_sha256: 1a9b6849f73e7bca8db585cf874eda0baeb48714a9839e4c222d19b2267b85df
original_url: "https://arxiv.org/abs/2608.05954"
processed: 2026-08-07
language: zh-CN
---

# 在 VLM 标注数据集上训练条件化视频游戏智能体

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Katrin Schmid, Iuri Frosio
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05954)

## 摘要

- 强化学习（RL）是强大但远非易用的策略学习技术；视频游戏中需访问游戏引擎获取训练奖励（如从环境收集奖励）；奖励的识别与加权通常需困难试错；奖励常稀疏，理解其最终如何影响学习策略非平凡。
- 为缓解这些问题，提出用视觉语言模型（VLM）标注视频游戏数据集，指示其提取人类定义的奖励。
- 展示离线 RL 随后可用于训练条件化智能体，使其按期望回报相应响应。
- 讨论早期实验出现的困难与局限。

## 正文

强化学习（RL）是一种强大但远非易用的策略学习技术。在视频游戏的具体情况下，需要访问游戏引擎来获取训练奖励（例如从环境收集奖励）。此外，奖励的适当识别与加权通常需要困难的试错方法。最后，奖励常常稀疏，理解它们最终如何影响学习到的策略并非平凡练习。为缓解这些问题，研究提出用视觉语言模型（VLMs）标注视频游戏数据集，指示其提取人类定义的奖励。研究表明，离线 RL 随后可用于训练一个条件化智能体，使其按期望回报相应响应，并讨论早期实验中出现的困难与局限。

## 关键词

强化学习、VLM 标注、视频游戏、离线 RL、条件化智能体
