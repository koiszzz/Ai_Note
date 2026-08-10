---
published: 2026-08-07
title: "在 VLM 标注数据集上训练条件视频游戏智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Training a Conditioned Video Game Agent on a VLM Annotated Dataset.md"
source_note: "[[信息源/arXiv cs.AI RSS/Training a Conditioned Video Game Agent on a VLM Annotated Dataset]]"
source_sha256: 4920faf5464997e3b4805d30f87c5c05dcbd0806144e7528e9b2c8326b7c3410
original_url: "https://arxiv.org/abs/2608.05954"
processed: 2026-08-07
language: zh-CN
---

# 在 VLM 标注数据集上训练条件视频游戏智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Katrin Schmid, Iuri Frosio
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05954)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Training a Conditioned Video Game Agent on a VLM Annotated Dataset|查看原始文件]]

## 摘要

- 强化学习（RL）是强大但远非易用的策略学习技术；视频游戏特定情况下，需访问游戏引擎获取训练奖励（如从环境收集奖励）；且奖励的正确识别与加权通常需要困难的试错方法；最后奖励常稀疏，理解其最终如何影响学习策略并非易事。
- 为缓解这些问题，提出用指示提取人类定义奖励的视觉语言模型（VLM）标注视频游戏数据集；展示离线 RL 随后可用于训练响应期望收益的条件智能体，并讨论早期实验中浮现的困难与局限。

## 正文

强化学习（Reinforcement Learning，RL）是一种强大但远非易用的策略学习技术。在视频游戏的特定情况下，需要访问游戏引擎才能获得训练奖励（例如从环境中收集奖励）。此外，奖励的正确识别与加权通常需要一种困难的试错方法。最后，奖励往往是稀疏的，理解它们最终如何影响学习到的策略并非易事。为缓解这些问题，我们提出用指示提取人类定义奖励的视觉语言模型（VLMs）标注一个视频游戏数据集。我们展示，离线 RL 随后可以用于训练一个响应期望收益的条件智能体，并讨论我们早期实验中浮现的困难与局限。

## 关键词

#离线强化学习 #VLM标注 #视频游戏 #奖励
