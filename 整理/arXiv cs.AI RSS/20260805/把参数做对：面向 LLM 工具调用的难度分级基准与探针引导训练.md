---
published: 2026-08-05
title: "把参数做对：面向 LLM 工具调用的难度分级基准与探针引导训练"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Getting the Parameters Right- A Difficulty-Graded Benchmark and Probe-Guided Training for LLM Tool C.md"
source_note: "[[信息源/arXiv cs.AI RSS/Getting the Parameters Right- A Difficulty-Graded Benchmark and Probe-Guided Training for LLM Tool C]]"
source_sha256: bcfdc66d3ff77f69a34a16cb85808e378f2b5ff9c784c7ff092333c8a806e344
original_url: "https://arxiv.org/abs/2608.03071"
processed: 2026-08-05
language: zh-CN
---

# 把参数做对：面向 LLM 工具调用的难度分级基准与探针引导训练

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Guoyao Yu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03071)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Getting the Parameters Right- A Difficulty-Graded Benchmark and Probe-Guided Training for LLM Tool C|查看原始文件]]

## 摘要

- 发现模型生成参数值时，其隐藏状态包含强正确性信号：简单线性探针可准确预测该值是否正确。
- 提出统一探针引导框架，两种互补方法：探针过滤引导训练（PBT）用探针过滤可靠的自生成调用用于微调；探针引导重排序（PGR）在推理期间用探针选择更优候选。
- 发布 ParamBench：基于真实云网络 API 构建，按参数嵌套深度、跨参数依赖与从先前调用推导值所需推理，把每个实例分为五个难度级别。
- 在 ParamBench 上 5 个开源模型与 6 个外部基准的大量实验显示：方法大幅改善参数生成，平均精确匹配从 19.7% 提升到 59.6%。

## 正文

论文编号：arXiv:2608.03071v1（更新类型：new）。以下为摘要全文翻译。

大语言模型智能体的很大一部分能力来自工具使用。现有的工具使用研究主要聚焦选择正确的工具与编排调用顺序。然而，正确填写工具调用的参数对成功执行同样关键，却受到的关注少得多。在云网络等领域，即使前沿模型正确完成的工具调用也不到一半。受近期分析（LLM 隐藏状态编码关于模型预测的丰富信息）启发，我们发现：当模型生成参数值时，其隐藏状态包含强正确性信号——一个简单线性探针能准确预测该值是否正确。基于这一观察，我们提出统一的探针引导框架，含两种互补方法：探针过滤引导训练（PBT），用探针过滤可靠的自生成调用用于微调；探针引导重排序（PGR），在推理期间用探针选择更优候选。为支持系统评估，我们发布 ParamBench，一个基于真实云网络 API 构建的基准，根据参数嵌套深度、跨参数依赖以及从先前调用推导值所需的推理，把每个实例分类到五个难度级别。在 ParamBench 上 5 个开源模型与 6 个外部基准的大量实验表明，我们的方法大幅改善参数生成，平均精确匹配从 19.7% 提升到 59.6%。

## 关键词

#工具调用 #LLM智能体 #参数生成 #探针
