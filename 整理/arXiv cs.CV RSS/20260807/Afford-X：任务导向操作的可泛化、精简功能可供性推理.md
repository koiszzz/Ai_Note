---
published: 2026-08-07
title: "Afford-X：任务导向操作的可泛化、精简功能可供性推理"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Afford-X- Generalizable and Slim Affordance Reasoning for Task-oriented Manipulation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Afford-X- Generalizable and Slim Affordance Reasoning for Task-oriented Manipulation]]"
source_sha256: 9b84cd20f02355ae5d024b8d4f7e80e811ad781a5ab02354d402c3bb19556b5b
original_url: "https://arxiv.org/abs/2503.03556"
processed: 2026-08-07
language: zh-CN
---

# Afford-X：任务导向操作的可泛化、精简功能可供性推理

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Xiaomeng Zhu, Yuyang Li, Leiyao Cui, Pengfei Li, Huan-ang Gao, Yixin Zhu, Hao Zhao
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2503.03556)

## 摘要

- 对象功能可供性推理（基于物理性质推断对象功能）对任务导向规划与人类与 AI 的活动基础；该能力依赖对象物理与功能的常识知识，超越简单对象识别。
- 当前从感知进行可供性推理的计算模型缺乏可泛化性，限制在新场景应用；全面 LLM 具涌现推理能力但难在本地设备部署用于任务导向操作。
- 引入 LVIS-Aff：大规模数据集，含 1496 个任务与 119k 图像，增强从感知的可供性推理可泛化性；开发 Afford-X：端到端可训练可供性推理模型，纳入动词注意力与双融合模块改进多模态理解。
- 较非 LLM 方法最佳报告结果提升最多 12.1%，相对先前会议论文提升 1.2%；保持紧凑 187M 参数，推理比 GPT-4V API 快近 50 倍；展示在多种任务与环境为机器人实现任务导向操作的有效性。

## 正文

对象功能可供性推理（object affordance reasoning）——基于物理性质推断对象功能的能力——对任务导向规划以及人类与人工智能（AI）的活动是基础性的。该能力对以任务导向方式规划与执行日常活动是必需的，它依赖对象物理与功能的常识知识，超越简单的对象识别。当前从感知进行可供性推理的计算模型缺乏可泛化性，限制了它们在新场景中的应用。与此同时，具有涌现推理能力的全面大语言模型（LLMs）难以在本地设备上部署用于任务导向操作。本文引入 LVIS-Aff，一个大规模数据集，包含 1,496 个任务与 119k 张图像，旨在增强从感知进行可供性推理的可泛化性。利用该数据集，研究开发 Afford-X，一个端到端可训练的可供性推理模型：纳入动词注意力（Verb Attention）与双融合（Bi-Fusion）模块改进多模态理解。该模型相对非 LLM 方法的最佳报告结果实现最多 12.1% 的性能提升，同时相对先前会议论文提升 1.2%。此外，它保持紧凑的 187M 参数规模，推理速度比 GPT-4V API 快近 50 倍。研究展示 Afford-X 在多种任务与环境为机器人实现任务导向操作的有效性，强调其效率与对真实应用推进机器人与 AI 系统的广泛意义。

## 关键词

功能可供性、任务导向操作、多模态、LVIS-Aff、机器人
