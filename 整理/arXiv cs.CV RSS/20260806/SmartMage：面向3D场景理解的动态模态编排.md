---
published: 2026-08-06
title: SmartMage：面向3D场景理解的动态模态编排
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SmartMage- Dynamic Modality Orchestration for 3D Scene Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/SmartMage- Dynamic Modality Orchestration for 3D Scene Understanding]]"
source_sha256: f7919eae1f89a9439ade3b4548a3164f73b2c24887ad552f597a3725803ab80e
original_url: https://arxiv.org/abs/2608.05137
processed: 2026-08-07
language: zh-CN
---

# SmartMage：面向3D场景理解的动态模态编排

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05137)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SmartMage- Dynamic Modality Orchestration for 3D Scene Understanding|查看原始文件]]

## 摘要

- 提出 SmartMage，一个统一的多模态大语言模型（MLLM），动态编排异构模态实现语义感知的 3D 场景理解，克服固定模态组合带来的语义噪声与推理稀释。
- 核心模块：语义引导模态自适应路由（SMART）按语义先验、文本-模态对齐和模态质量选择任务相关模态；模态感知门控专家（MAGE）以模态先验引导专家激活。
- 在五个 3D 场景理解基准上达到最优性能，并在仅 RGB 视频理解基准上取得有竞争力结果；诊断基准 ScanFacet 分析出每种语义类型偏好的模态组合。

## 正文

理解 3D 场景是具身智能的基础，需要对来自多种模态（包括视觉和几何线索）的异构信息进行联合推理。然而，这些模态的相关性往往随查询而变化。现有多模态大语言模型（MLLM）通常依赖固定的模态组合，忽视了与查询相关的模态需求。这种刚性设计会引入来自无关模态的语义噪声，同时未能充分利用信息量更大的模态，导致计算浪费与推理被稀释。为应对这些挑战，本文提出 SmartMage，一个统一的 MLLM，动态编排异构模态以实现语义感知的 3D 场景理解。具体而言，SmartMage 包含：（1）语义引导的模态自适应路由（SMART）模块，利用语义先验、文本-模态对齐和模态质量来选择任务相关模态；（2）模态感知门控专家（MAGE）模块，利用模态先验指导专家激活，促进多模态推理中的自适应特化。实验表明，SmartMage 在五个 3D 场景理解基准上取得最优性能，并在仅 RGB 的视频理解基准上获得有竞争力的结果。在我们的诊断基准 ScanFacet 中，任务被划分为细粒度语义类别，从而能够分析每种语义类型偏好的模态组合。观察到的模态-语义模式进一步证明了 SmartMage 的有效性。项目主页：https://yuecheong.github.io/SmartMage/。

## 关键词

#3D场景理解 #多模态大模型 #具身智能 #模态路由
