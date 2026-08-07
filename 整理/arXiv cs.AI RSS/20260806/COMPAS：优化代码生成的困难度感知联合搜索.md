---
published: 20260806
title: "COMPAS：优化代码生成的困难度感知联合搜索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/COMPAS- Difficulty-Aware Joint Search for Optimizing Code Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/COMPAS- Difficulty-Aware Joint Search for Optimizing Code Generation]]"
source_sha256: 0bd7e4bbbcfa18b8bf2a23cfe968f703725b57cd285bb538d4f618418751fbf5
original_url: "https://arxiv.org/abs/2608.04336"
processed: 2026-08-06
language: zh-CN

---

# COMPAS：优化代码生成的困难度感知联合搜索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jingzhi Gong, Jie M. Zhang, Gunel Jahangirova, Dong Huang, Mohammad Reza Mousavi, Mark Harman
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04336)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/COMPAS- Difficulty-Aware Joint Search for Optimizing Code Generation|查看原始文件]]

## 摘要

- 代码生成系统用模型、提示和解码设置进行每次 LLM 调用，但现有优化方法通常只调优其中部分选择或对所有任务用固定配置：全局优化器为所有任务搜索一个配置，路由器只选择模型，提示优化器保持模型和解码设置固定。
- 本文检验这些选择如何交互，观察提示和解码设置交互、调优效果因模型而异、最佳配置因任务难度而异；引入 COMPAS，一个困难度感知方法，通过低成本模型选择和联合提示-解码搜索学习组特定质量-成本前沿，然后在线将每个测试任务路由到匹配前沿。
- 在 LiveCodeBench 匹配搜索预算下，COMPAS 将 pass@1 从最佳基线 45.9% 提升到 52.8%，同时成本从 36.57 美元降至 4.92 美元；迁移到 SWE-bench 仓库级代码生成，解决 76.0% 任务对比最佳基线 70.0%。

## 正文

代码生成系统用模型、提示和解码设置进行每次 LLM 调用。然而，现有优化方法通常只调优其中部分选择，或对所有任务使用固定配置：全局优化器为所有任务搜索一个配置，路由器只选择模型，提示优化器保持模型和解码设置固定。这使其联合、组特定交互不清晰。因此我们检验这些选择如何交互，并观察提示和解码设置交互、调优效果因模型而异，最佳配置因任务难度而异。受这些观察指导，我们引入 COMPAS（Code-generation Optimization over Models, Prompts, And Decoding Settings），一个困难度感知方法，通过低成本模型选择和联合提示-解码搜索学习组特定质量-成本前沿，然后在线将每个测试任务路由到匹配前沿，无需进一步搜索。在 LiveCodeBench 匹配搜索预算下，COMPAS 将 pass@1 从最佳基线 45.9% 提升到 52.8%，同时成本从 36.57 美元降至 4.92 美元。这也迁移到 SWE-bench 仓库级代码生成，解决 76.0% 任务对比最佳基线 70.0%。代码和可复现工件可在此获取：https://github.com/gjz78910/COMPAS。

## 关键词

#代码生成 #优化 #困难度感知 #LLM #arXiv