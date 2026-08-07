---
published: 2026-08-06
title: EvolveNet：面向智能体自我改进的协作式Harness进化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/EvolveNet- Collaborative Harness Evolution for Agent Self-Improvement.md
source_note: "[[信息源/arXiv cs.LG RSS/EvolveNet- Collaborative Harness Evolution for Agent Self-Improvement]]"
source_sha256: 958e76a4ee10205f06419c8a5da6f055d8912900b90e3fef084740077262b314
original_url: https://arxiv.org/abs/2608.04968
processed: 2026-08-07
language: zh-CN
---

# EvolveNet：面向智能体自我改进的协作式Harness进化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04968)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/EvolveNet- Collaborative Harness Evolution for Agent Self-Improvement|查看原始文件]]

## 摘要

- 提出 EvolveNet 协作式 harness 进化范式：把经验提取移至数据侧，保持工作负载本地化
- 各数据本地部署自行进化共享 harness，仅将学到的程序改编合回并重新分发
- 引入作用域类型化、证据引导的程序聚合；在全部五个设置中改进共享 harness

## 正文

LLM 智能体的能力不仅取决于其模型，还取决于 harness：即构造上下文、调用工具、验证结果并从失败中恢复的可执行程序。近期工作表明，进化 harness 可以在不更新模型权重的情况下带来持续改进。然而，现有方法假设所有执行经验都可以被路由到单个优化器，即沿一条串行轨迹进化单个 harness。真实的智能体生态系统违背了这一假设：用户、组织和环境产生的经验流相互隔离、无法汇集，因此最值得学习的经验恰恰是无法直接集中化的经验。

我们提出 EvolveNet，一种协作式 harness 进化范式，它将经验提取移至数据侧。共享 harness 被广播到数据本地的智能体部署中，每个部署在自己的工作负载上对其进化。只有由此产生的程序改编会被合成为更新后的共享 harness 并重新分发，从而使每个参与的智能体都能继承其他智能体发现的操作经验。通过将聚合边界从原始工作负载转移到学到的改编，EvolveNet 保持工作负载的本地性，并允许多个进化搜索以减少的串行深度并发进行。

由于独立修改的程序不能像模型参数那样取平均，并且组合时可能发生冲突，EvolveNet 引入了作用域类型化、证据引导的程序聚合（scope-typed, evidence-guided program aggregation）。在涵盖文本转 SQL、数据科学编码、竞赛编程、软件工程和智能体工作流的五个设置中，EvolveNet 在全部五个设置上都改进了共享 harness，其中在异构工作负载下收益最大；消融实验将改进归因于来自不同智能体的改编的组合，而非在它们之间进行选择。

## 关键词

#LLM智能体 #程序进化 #协作学习 #Harness #自我改进
