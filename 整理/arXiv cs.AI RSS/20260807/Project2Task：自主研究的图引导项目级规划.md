---
published: 2026-08-07
title: "Project2Task：自主研究的图引导项目级规划"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Project2Task- Graph-Guided Project-Level Planning for Autonomous Research.md"
source_note: "[[信息源/arXiv cs.AI RSS/Project2Task- Graph-Guided Project-Level Planning for Autonomous Research]]"
source_sha256: 4792e7162af4851f0b9adc74ae64fa684c7c85253fc874e8a7f4e5adf460a153
original_url: "https://arxiv.org/abs/2608.05225"
processed: 2026-08-07
language: zh-CN
---

# Project2Task：自主研究的图引导项目级规划

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Huirui Xu, Runtao Xu, Shuo Ren, Jiajun Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05225)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Project2Task- Graph-Guided Project-Level Planning for Autonomous Research|查看原始文件]]

## 摘要

- 研究智能体日益能从一个主题搜索文献、提出假设、生成代码、运行实验与起草手稿；但研究项目不仅是更大的任务：它是必须通过多个有界任务推进的长期议程，任务具有不同但相关的目标、并行替代与依赖感知顺序。
- 现有单任务系统常将项目视为一个超大任务、产生平坦模糊或重叠任务集，或将任务边界与执行顺序留给人工协调。
- 引入 Project2Task：自主研究的图引导项目级规划层——给定项目简报，将候选贡献表示为创新原子，并在有向世系图中组织它们；轻量 Bernoulli 块模型目标在水平、垂直与混合组合分解中选择；Project2Task 随后生成带显式贡献归属的有界任务、修复重叠与缺失执行字段，并发出指定目标、输入、预期工件、评估要求、边界约束、依赖与执行顺序的依赖感知任务契约。
- 契约独立于任何特定下游研究执行器，支持将任务输出集成到连贯项目级结果；在十个项目简报约 30 个任务的基准上，基于手稿的组合评估给 Project2Task 平均质量分 7.15（简报基线 4.58、仅主题设置 5.31）；将其契约与 AutoResearchClaw 集成将平均下游任务准确率从 0.536 提升到 0.759；结果展示显式项目到任务规划对产生连贯、非冗余、可执行研究任务组合的价值。

## 正文

研究智能体日益能够从一个单一主题搜索文献、提出假设、生成代码、运行实验与起草手稿。然而，一个研究项目不仅仅是一个更大的任务：它是一个必须通过多个有界任务推进的长期议程，具有不同但相关的目标、并行替代与依赖感知的顺序。现有单任务系统往往将项目视为一个超大任务，产生一个平坦的模糊或重叠任务集，或将任务边界与执行顺序留给人工协调。我们引入 Project2Task，一个自主研究的图引导项目级规划层。给定一个项目简报，它把候选贡献表示为创新原子（innovation atoms），并在一个有向世系图（directed lineage graph）中组织它们。一个轻量 Bernoulli 块模型目标在水平、垂直与混合组合分解中选择。Project2Task 随后生成带显式贡献归属的有界任务，修复重叠与缺失的执行字段，并发出依赖感知的任务契约（task contracts），指定目标、输入、预期工件、评估要求、边界约束、依赖与执行顺序。这些契约独立于任何特定下游研究执行器，并支持将任务输出集成到连贯的项目级结果中。在十个项目简报（产生约 30 个任务）的基准上，基于手稿的组合评估给 Project2Task 一个 7.15 的平均质量分数，对比简报基线的 4.58 与仅主题设置的 5.31。将其契约与 AutoResearchClaw 集成，将平均下游任务准确率从 0.536 提升到 0.759。这些结果展示了显式项目到任务规划对产生连贯、非冗余且可执行的研究任务组合的价值。

## 关键词

#自主研究 #项目规划 #任务契约 #图引导
