---
published: 2026-08-07
title: "HarnessOpt-Bench：评估 LLM 的 Harness 优化能力"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HarnessOpt-Bench- Evaluating LLMs at Harness Optimization.md"
source_note: "[[信息源/arXiv cs.AI RSS/HarnessOpt-Bench- Evaluating LLMs at Harness Optimization]]"
source_sha256: 0e91ba38d05e80ca00ccc6462de71c82d98af1387862300d6971e84e3d74ffe6
original_url: "https://arxiv.org/abs/2608.06301"
processed: 2026-08-07
language: zh-CN
---

# HarnessOpt-Bench：评估 LLM 的 Harness 优化能力

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Varun Ursekar, Apaar Shanker, Yash Maurya, Shehab Yasser, Vijay S. Kalmath, Veronica Chatrath, Yuan Xue
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06301)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HarnessOpt-Bench- Evaluating LLMs at Harness Optimization|查看原始文件]]

## 摘要

- 随着 LLM 日益部署于智能体系统，其能力不仅取决于模型权重，还取决于 harness：围绕它们的提示、工具、控制流、记忆与编排代码；这使自动化 harness 优化——由 AI 系统迭代、评估引导地改进 harness——既是改进 AI 系统的重要途径，也是对 AI 系统本身的高要求能力。
- 社区缺乏衡量前沿 LLM 在该任务上表现如何的通用协议；引入 HarnessOpt-Bench：昂贵且随机评估下端到端 harness 优化的基准。
- 优化器（LLM 配编码 harness）接收目标智能体的种子 harness、分级评估反馈与固定目标评估预算；它编辑 harness 并提名最终候选，按其在搜索全程不可访问的留出测试分区上相对种子的归一化增益评分；可信执行环境强制评估边界、计量目标智能体资源使用并保留候选版本供审计。
- 评估 5 个前沿 LLM 作为优化器，在共享编码 harness 与其原生 harness 下、4 个下游任务、111 次评分运行：结果显示优化器模型比其作用的编码 harness 分离更多，原生 harness 并不一致更优，增益跨任务与种子机制差异巨大；结果确立 harness 优化作为可测量、可判别且改进空间巨大的能力。

## 正文

随着 LLM 日益部署在智能体系统中，其能力不仅取决于模型权重，还取决于 harness：围绕它们的提示、工具、控制流、记忆与编排代码。这使自动化 harness 优化——由 AI 系统进行迭代、评估引导的 harness 改进——既是改进 AI 系统的重要途径，也是对 AI 系统本身的高要求能力。然而，社区缺乏衡量前沿 LLM 在此任务上表现如何的通用协议。我们引入 HarnessOpt-Bench，一个在昂贵且随机评估下的端到端 harness 优化基准。优化器（一个配编码 harness 的 LLM）接收目标智能体的种子 harness、分级评估反馈与固定目标评估预算。它编辑 harness 并提名最终候选，候选按其在搜索全程不可访问的留出测试分区上相对种子的归一化增益评分。可信执行环境强制评估边界，计量目标智能体资源使用，并保留候选版本供审计。我们评估 5 个前沿 LLM 作为优化器，在共享编码 harness 与其原生 harness 下、4 个下游任务、111 次评分运行。实验结果表明，优化器模型比它们作用其上的编码 harness 分离更多，原生 harness 并不一致更优，且增益跨任务与种子机制差异巨大。这些结果确立 harness 优化作为可测量且可判别的能力，且改进空间巨大。

## 关键词

#harness优化 #智能体系统 #LLM评估 #基准测试
