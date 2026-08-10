---
published: 2026-08-07
title: "中继而非路由：面向成本高效 LLM 驱动进化的自适应群体交接"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Relay, Don't Route- Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution.md"
source_note: "[[信息源/arXiv cs.AI RSS/Relay, Don't Route- Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution]]"
source_sha256: f069f09e53d74beec18e38d882e68de36aec43c4005fd949fdfcb2ea1aeafcea
original_url: "https://arxiv.org/abs/2608.05651"
processed: 2026-08-07
language: zh-CN
---

# 中继而非路由：面向成本高效 LLM 驱动进化的自适应群体交接

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sichun Luo, Yi Huang, Guanzhi Deng, Haibo Wang, Haochen Luo, Lei Li, Zefa Hu, Junlan Feng, Qi Liu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05651)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Relay, Don't Route- Adaptive Population Handoff for Cost-Efficient LLM-Driven Evolution|查看原始文件]]

## 摘要

- 大语言模型（LLM）驱动的进化在程序搜索与算法发现上显示前景，但整个长进化运行依赖强模型成本高昂；自然替代是在固定推理预算下组合廉价与强模型。
- 现有方法通常在单个查询或突变步骤层面分配模型，忽视进化搜索是有状态的：每个生成候选改变产生后续突变的群体。
- 实证分析 LLM 驱动进化轨迹，发现搜索进展强烈前置，早期轨迹性能信息丰富但含噪，廉价模型以更低成本恢复强模型实现的大部分早期进展；据此提出 Relay（训练免费框架），通过自适应群体交接将预算分配从单个调用转移到演化群体——廉价模型在由 bandit 调度器分配的短块中探索多条轨迹；中继增益（为交接构建的紧凑、质量多样候选库的边际改进）作为调度器奖励决定何时交接；策展候选初始化共享强模型群体供精炼。
- 四个基准与三个预算下，Relay 在 12 个设置中 11 个取得最高平均分，优于竞争基线；结果提示有状态搜索中预算分配应围绕群体而非单个调用组织。

## 正文

大语言模型（LLM）驱动的进化在程序搜索与算法发现上显示前景，但在整个长进化运行中依赖强模型成本高昂。一种自然替代是在固定推理预算下组合廉价与强模型。然而，现有方法通常在单个查询或突变步骤层面分配模型，忽视进化搜索是有状态的（stateful）：每个生成候选都会改变后续突变产生的群体。我们实证分析 LLM 驱动的进化轨迹，发现搜索进展强烈前置，早期轨迹性能信息丰富但含噪，且廉价模型以更低成本恢复强模型实现的大部分早期进展。受这些发现驱动，我们提出 Relay，一个免训练框架，通过自适应群体交接（population handoff）将预算分配从单个调用转移到演化群体。一个廉价模型在由 bandit 调度器分配的短块中探索多条轨迹。中继增益（Relay Gain）——为交接构建的紧凑、质量多样候选库的边际改进——作为调度器奖励，决定何时交接。策展候选初始化一个共享强模型群体供精炼。在四个基准与三个预算下，Relay 在 12 个设置中的 11 个取得最高平均分，优于竞争基线。我们的结果表明，在有状态搜索中，预算分配应围绕群体而非单个调用组织。

## 关键词

#LLM进化 #程序搜索 #预算分配 #群体交接
