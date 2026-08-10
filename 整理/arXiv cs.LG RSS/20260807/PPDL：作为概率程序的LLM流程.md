---
published: 2026-08-07
title: "PPDL：作为概率程序的 LLM 流程"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PPDL- LLM-Based Flows as Probabilistic Programs.md"
source_note: "[[信息源/arXiv cs.LG RSS/PPDL- LLM-Based Flows as Probabilistic Programs]]"
source_sha256: 0bdd9275cbb8ed6a1fb4557581634b9f2d93398ac29a1385449b2bf722102b12
original_url: "https://arxiv.org/abs/2608.05234"
processed: 2026-08-07
language: zh-CN
---

# PPDL：作为概率程序的 LLM 流程

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Louis Mandel, Guillaume Baudart, Mandana Vaziri, Martin Hirzel
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05234)

## 摘要

- 构建利用 LLM 的可靠应用仍是重大挑战；LLM 在多样任务上能力出色，但输出常缺乏准确性且无清晰置信度量；该不确定性在多次调用 LLM 与其他工具的流程中复合，使开发者与终端用户难以信任结果。
- 引入用于编程 LLM 流程的概率语言：使开发者能在整个应用流程中量化与传播不确定性，并实验不同推理扩展技术而无需在流程逻辑外添加一行代码。
- 呈现实验研究演示该能力，以及构建 Rocq 定理证明器智能体的案例研究。

## 正文

构建利用大语言模型（LLM）的可靠应用仍是重大挑战。虽然 LLM 在多样任务上提供出色能力，其输出往往缺乏准确性，且不提供清晰的置信度量。这种不确定性在多次调用 LLM 与其他工具的流程中复合，使开发者与终端用户难以信任结果。本文引入用于编程 LLM 流程的概率语言。它使开发者能够量化并传播整个应用流程中的不确定性，并实验不同的推理扩展技术，无需在流程逻辑之外添加一行代码。研究呈现实验研究演示该能力，以及一个构建 Rocq 定理证明器智能体的案例研究。

## 关键词

概率编程、LLM 流程、不确定性、推理扩展、智能体
