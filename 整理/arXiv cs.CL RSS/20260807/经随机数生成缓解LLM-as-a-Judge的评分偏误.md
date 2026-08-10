---
published: 2026-08-07
title: "经随机数生成缓解 LLM-as-a-Judge 的评分偏误"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Mitigating Scoring Bias in LLM-as-a-Judge via Random Number Generation.md"
source_note: "[[信息源/arXiv cs.CL RSS/Mitigating Scoring Bias in LLM-as-a-Judge via Random Number Generation]]"
source_sha256: 2ce057588394b3dafcae3b05783529c73e4d7c78404a06a8b1565fbf7033dcc6
original_url: "https://arxiv.org/abs/2608.05726"
processed: 2026-08-07
language: zh-CN
---

# 经随机数生成缓解 LLM-as-a-Judge 的评分偏误

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Yuma Asato, Kiyoaki Shirai, Natthawut Kertkeidkachorn
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05726)

## 摘要

- LLM 常用作文本质量评估者（LLM-as-a-Judge），可超越依赖参考文本的常规自动评估指标；但 LLM 评估者倾向无论被评估文本上下文生成特定分数，称评分偏误。
- 提出缓解评分偏误的新方法：指示 LLM 随机生成数字 token，经测量观测数字分布相对均匀分布的偏差识别 LLM 潜在数字偏误；在随机数生成提示中加入下游任务定义测量任务特定潜在数字偏误。
- LLM 评估中，给定输入的 token 生成概率经考虑 LLM 潜在数字偏误矫正。
- 四个任务实验（LLM 对齐评估、摘要评估、语义文本相似性与语义文本相关性）显示方法优于基线（含无去偏 LLM 与先前校准方法）；评分偏误跨 LLM、任务与分数范围变化，凸显按情况测量潜在数字偏误的重要性。

## 正文

大语言模型（LLMs）经常被用作文本质量的评估者，称为 LLM-as-a-Judge，它可以超越依赖参考文本的常规自动评估指标。然而，LLM 评估者倾向于生成特定的分数，无论被评估文本的上下文如何，这被称为评分偏误（scoring bias）。本研究提出一种缓解评分偏误的新方法。指示 LLM 随机生成数字 token，并通过测量观测到的数字分布相对均匀分布的偏差，识别 LLM 的潜在数字偏误。在随机数生成的提示中加入一个下游任务的定义，用于测量任务特定的潜在数字偏误。在 LLM 评估中，给定输入的 token 生成概率通过考虑 LLM 的潜在数字偏误进行矫正。在四个不同任务（LLM 对齐评估、摘要评估、语义文本相似性与语义文本相关性）上的实验结果表明，所提方法优于基线，包括未去偏的 LLM 与先前的校准方法。此外，研究确认评分偏误随 LLM、任务与分数范围而变化，凸显了按情况测量潜在数字偏误的重要性。

## 关键词

LLM-as-a-Judge、评分偏误、随机数、校准、评估
