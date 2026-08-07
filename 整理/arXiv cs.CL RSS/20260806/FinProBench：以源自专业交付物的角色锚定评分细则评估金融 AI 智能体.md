---
published: 2026-08-06
title: FinProBench：以源自专业交付物的角色锚定评分细则评估金融 AI 智能体
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del.md
source_note: "[[信息源/arXiv cs.CL RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del]]"
source_sha256: 1b1eca1fcd54b7be70e4f8fd0269f3cef2ab9017ac8cead5243426da9b0467a1
original_url: https://arxiv.org/abs/2608.04077
processed: 2026-08-07
language: zh-CN
---

# FinProBench：以源自专业交付物的角色锚定评分细则评估金融 AI 智能体

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04077)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del|查看原始文件]]

## 摘要

- 引入 FinProBench 基准与角色锚定评分细则构建（RGRC）流水线，从同角色从业者的交付物中推导评分细则，捕捉提示与模型输出之外的隐性专业标准。
- 57 种职业按交付物类型分为 30 个传统角色与 27 个角色专门型角色；仅提示在传统角色上接近 RGRC（89.2% 对 90.7%），在角色专门型角色上 RGRC 大幅胜出（99.1% 对 78.0%）。
- 基准含 1,723 份精选交付物；异构 LLM 评审下人类交付物平均排名第一（73.7 分），角色级复用评分细则可减少 6.7 倍构建工作量。

## 正文

本文编号：arXiv:2608.04077v1（公告类型：cross），以下为摘要全文翻译。

评估金融 AI 智能体需要与现实专业工作相符的标准。现有的评分细则方法通常从任务提示或模型输出中推导标准，忽视了仅在从业者交付物中可见的隐性标准。我们引入 FinProBench——一个面向专业金融任务的基准——以及角色锚定评分细则构建（Role-Grounded Rubric Construction, RGRC），这是一个可复用的流水线，从同角色从业者产出的交付物中推导评分细则。RGRC 包含四个阶段：交付物收集（Deliverable Collection）、胜任力提取（Competency Extraction）、评分细则综合（Rubric Synthesis）与验证（Validation）。其评分细则捕捉隐性标准、区分质量层次，并可在同一角色内的任务间迁移。在分析之前，我们按交付物类型将 57 种职业划分为 30 个先验丰富的传统角色和 27 个先验稀少的角色专门型角色。在所有角色上，对于传统角色，仅提示（Prompt-only）与 RGRC 几乎持平（89.2% 对 90.7%），但对于角色专门型角色，RGRC 大幅胜出（99.1% 对 78.0%）。这一分化表明，当约定俗成的标准在模型先验中体现良好时，提示工程可以近似评分细则；而对于超出这些先验的标准，专业锚定则不可或缺。FinProBench 由 1,723 份精选交付物构建，涵盖 57 种职业、8 个金融子行业和 161 种交付物类型，并发布了包含 20 个完整任务的初始评估集，覆盖 7 个子行业的 20 个角色。在使用异构 LLM 评审者与角色级评分细则的情况下，人类交付物平均排名第一（73.7 对 70.3、70.2 和 69.6，满分 100），而所有四个系统显示出重叠的 95% 置信区间和互补优势。在角色层面复用评分细则，相比从头编写每个评分细则，可将单任务构建工作量估计减少 6.7 倍。

## 关键词

#FinProBench #金融AI #评分细则 #智能体评估 #RGRC
