---
published: 2026-08-07
title: "HarnessOpt-Bench：评估 LLM 的外壳优化能力"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/HarnessOpt-Bench- Evaluating LLMs at Harness Optimization.md"
source_note: "[[信息源/arXiv cs.CL RSS/HarnessOpt-Bench- Evaluating LLMs at Harness Optimization]]"
source_sha256: 36f3b23878efaeb8da5b3a1fc7f36d35071765cbe00624082f0ba9c29d8784f1
original_url: "https://arxiv.org/abs/2608.06301"
processed: 2026-08-07
language: zh-CN
---

# HarnessOpt-Bench：评估 LLM 的外壳优化能力

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Varun Ursekar, Apaar Shanker, Yash Maurya, Shehab Yasser, Vijay S. Kalmath, Veronica Chatrath, Yuan Xue
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06301)

## 摘要

- LLM 日益部署于智能体系统，其能力不仅依赖模型权重，还依赖外壳：周围的提示、工具、控制流、记忆与编排代码；自动外壳优化是改进 AI 系统的重要途径，也是对 AI 系统本身的严苛能力要求。
- 引入 HarnessOpt-Bench：昂贵随机评估下端到端外壳优化的基准；优化器（LLM 与编码外壳配对）接收目标智能体的种子外壳、分级评估反馈与固定目标评估预算，编辑外壳并提名最终候选，由保留测试分区上的相对种子归一化增益评分。
- 可信执行环境强制评估边界、计量目标智能体资源使用并保留候选版本供审计。
- 在共享编码外壳与原生外壳下评估 5 个前沿 LLM 优化器，覆盖 4 个下游任务、111 次评分运行；优化器模型间的区分大于其经由的编码外壳，原生外壳并不一致更优，增益随任务与种子体制变化显著。

## 正文

随着 LLM 日益部署于智能体系统，其能力不仅依赖模型权重，还依赖外壳（harness）：围绕它们的提示、工具、控制流、记忆与编排代码。这使得自动外壳优化——AI 系统对外壳进行迭代、评估引导的改进——既是改进 AI 系统的重要途径，也是对 AI 系统本身的一种严苛能力要求。然而社区缺乏测量前沿 LLM 在此任务上表现如何的通用协议。研究引入 HarnessOpt-Bench，一个在昂贵且随机评估下的端到端外壳优化基准。优化器（LLM 与编码外壳配对）接收目标智能体的种子外壳、分级评估反馈与固定目标评估预算。它编辑外壳并提名最终候选，候选由其在搜索全程不可访问的保留测试分区上相对种子的归一化增益评分。可信执行环境强制评估边界、计量目标智能体的资源使用并保留候选版本供审计。研究在共享编码外壳与原生外壳下将 5 个前沿 LLM 评估为优化器，覆盖 4 个下游任务、111 次评分运行。实验结果显示优化器模型之间的区分大于它们经由的编码外壳，原生外壳并不一致更优，增益随任务与种子体制变化显著。这些结果确立外壳优化是可测量、可区分的、仍有巨大改进空间的能力。

## 关键词

外壳优化、LLM 智能体、基准、评估、可信执行
