---
published: 2026-08-07
title: "无需 rollout 预测任务难度"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Predicting Task Difficulty Without Rollouts.md"
source_note: "[[信息源/arXiv cs.CL RSS/Predicting Task Difficulty Without Rollouts]]"
source_sha256: 128aedeae7025e9ace38db5d45a78a40cc3e5a701607cbd7a4e26bd6c590de20
original_url: "https://arxiv.org/abs/2608.05797"
processed: 2026-08-07
language: zh-CN
---

# 无需 rollout 预测任务难度

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Stefan Krsteski, Charlotte Meyer
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05797)

## 摘要

- 任务难度决定智能体成功可能性，无 rollout 估计意味着在状态环境执行昂贵仿真前直接从任务描述预测；可靠估计使环境设计者能校准评估基准并构建渐进训练课程。
- 随智能体进入长时程领域，这日益重要——经验试错是严重计算瓶颈；先前早期预测工作限于静态任务或孤立编码环境，常依赖窄特征与不准确评估指标。
- 研究 17 个智能体基准的 ex ante 难度预测，覆盖编码、数学、机器学习、网页导航、函数调用等领域。
- 证明 AUC 可掩盖劣质难度估计，识别 token 级熵为有用预测信号，展示期望与实际难度残差如何暴露污染与不可行性等隐藏环境缺陷。

## 正文

任务难度决定智能体的成功可能性，而无 rollout 的估计意味着在状态环境执行昂贵仿真之前直接从任务描述预测。可靠估计将使环境设计者能够校准评估基准并构建渐进训练课程。随着智能体进入长时程领域，这变得日益重要——经验试错是严重的计算瓶颈。先前早期预测工作限于静态任务或孤立编码环境，常依赖窄特征与不准确的评估指标。研究在覆盖编码、数学、机器学习、网页导航、函数调用与其他领域的 17 个智能体基准上研究 ex ante（事前）难度预测。研究证明 AUC 可以掩盖劣质的难度估计，识别 token 级熵作为有用的预测信号，并展示期望难度与实际难度之间的残差如何暴露污染与不可行性等隐藏环境缺陷。

## 关键词

任务难度、事前预测、智能体基准、token 熵、课程学习
