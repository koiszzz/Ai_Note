---
published: 2026-08-07
title: "HoloCount：面向 MLLM 的整体视觉计数基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HoloCount- A Holistic Visual Counting Benchmark for MLLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/HoloCount- A Holistic Visual Counting Benchmark for MLLMs]]"
source_sha256: 2103f1b76419f2fe5534b364fd5bf9cb2ad6656cd6828b9e26d822f42f7adce3
original_url: "https://arxiv.org/abs/2607.06420"
processed: 2026-08-07
language: zh-CN
---

# HoloCount：面向 MLLM 的整体视觉计数基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jinhong Deng, Limeng Qiao, Guanglu Wan
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.06420)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HoloCount- A Holistic Visual Counting Benchmark for MLLMs|查看原始文件]]

## 摘要

- 视觉计数是多模态智能的基本支柱，需要细粒度接地与空间推理的无缝集成；多模态大语言模型（MLLM）在定性场景理解上取得显著成功，但其定量精度仍是重大瓶颈，常表现为持续的数字幻觉。
- 现有计数基准主要聚焦简化情境中的基本感知，无法捕获逻辑约束或对抗条件下出现的复杂失败模式。
- 引入 HoloCount：围绕三级层级分类法组织的整体、诊断丰富基准——评估 MLLM 的①语义计数（原子与基于属性枚举）、②分析计数（通过空间与基于集合推理评估逻辑组合）与③稳健性测试（针对不利场景与接地反先验如高密度场景与语言偏差探测模型完整性）。
- 对 20 多个最先进 MLLM 的详尽评估揭示关键性能差距：即使顶级模型在任务从感知转向复杂分析推理与不利场景时也显著退化；发现提供当前 MLLM 计数能力的系统全景，并为开发更接地、可靠的多模态系统提供路线图；数据集见 https://mm-mvr.github.io/HoloCount/。

## 正文

视觉计数是多模态智能的基本支柱，要求细粒度接地与空间推理的无缝集成。虽然多模态大语言模型（MLLMs）在定性场景理解上取得显著成功，其定量精度仍是重大瓶颈，常以持续的数字幻觉为特征。现有计数基准主要聚焦于简化情境中的基本感知，未能捕获逻辑约束或对抗条件下出现的复杂失败模式。为解决这些局限，我们引入 HoloCount，一个围绕三级层级分类法组织的整体且诊断丰富的基准。HoloCount 评估 MLLM 的：（1）语义计数（Semantic Counting），聚焦原子与基于属性的枚举；（2）分析计数（Analytical Counting），通过空间与基于集合推理评估逻辑组合；（3）稳健性测试（Robustness Testing），针对不利场景与接地反先验（如高密度场景与语言偏差）探测模型完整性。通过对 20 多个最先进 MLLM 的详尽评估，我们揭示一个关键性能差距：即使顶级模型在任务从感知转向复杂分析推理与不利场景时也显著退化。我们的发现提供了当前 MLLM 计数能力的系统全景，并为开发更接地、可靠的多模态系统提供路线图。数据集见 https://mm-mvr.github.io/HoloCount/。

## 关键词

#视觉计数 #MLLM #基准测试 #数字幻觉
