---
published: 2026-08-07
title: "ViSR-KGC：用视觉语言模型进行多模态知识图谱补全的视觉子图推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ViSR-KGC- Visual Subgraph Reasoning with Vision-Language Models for Multimodal Knowledge Graph Compl.md"
source_note: "[[信息源/arXiv cs.AI RSS/ViSR-KGC- Visual Subgraph Reasoning with Vision-Language Models for Multimodal Knowledge Graph Compl]]"
source_sha256: 2f97c9a6c223acf674d979777f066db43affa51b031420e1561f0ee953a41bb2
original_url: "https://arxiv.org/abs/2608.05833"
processed: 2026-08-07
language: zh-CN
---

# ViSR-KGC：用视觉语言模型进行多模态知识图谱补全的视觉子图推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiafan Li, Mengxue Yang, Jiaqi Zhu, Liang Chang, Ying Li, Hongan Wang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05833)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ViSR-KGC- Visual Subgraph Reasoning with Vision-Language Models for Multimodal Knowledge Graph Completion|查看原始文件]]

## 摘要

- 知识图谱补全（KGC）旨在从图结构推断缺失实体或关系，已演进为多模态知识图谱补全（MMKGC），其中实体与文本与图像等多模态关联。
- 传统表示学习方法遵循嵌入范式，关系特定证据有限时可能吃力；基于 LLM 的推理方法通常将图结构线性化为文本提示，掩盖结构拓扑并忽视关键视觉信息；视觉语言模型（VLM）擅长多模态推理，但无法原生解释结构化图拓扑，尤其节点与边承载复杂语义的知识图谱。
- 提出 ViSR-KGC：面向 KGC 的视觉子图推理方法——集成三种互补能力捕获语义相关：经表示学习识别全局拓扑依赖、用 VLM 分析局部多模态证据、提供预训练模型固有常识知识——基于学习多模态嵌入，先提取紧凑、查询感知子图，再用经验比较选择的布局策略将该子图转化为视觉可解释图像；最后将可视化子图、实体图像、文本描述与候选答案组合为统一提示，使 VLM 推断缺失实体。

## 正文

知识图谱补全（Knowledge graph completion，KGC）旨在从图结构推断缺失实体或关系，并已演进为多模态知识图谱补全（multimodal KGC，MMKGC），其中实体与文本与图像等多种模态相关联。传统表示学习方法遵循基于嵌入的范式，在关系特定证据有限时可能吃力。同时，基于 LLM 的推理方法通常将图结构线性化为文本提示，这掩盖了结构拓扑并忽视关键的视觉信息。虽然视觉语言模型（VLMs）擅长多模态推理，它们无法原生解释结构化图拓扑，尤其当涉及节点与边承载复杂语义的知识图谱时。为弥合这一差距，我们提出 ViSR-KGC，一种面向 KGC 的视觉子图推理方法。它集成三种互补能力来捕获语义相关性：通过表示学习识别全局拓扑依赖、使用 VLMs 分析局部多模态证据，以及提供预训练模型固有的必要常识知识。基于学习到的多模态嵌入，我们的框架首先从 MMKG 提取一个紧凑、查询感知的子图。随后，使用一个通过经验比较选择的布局策略，将该子图转化为一个视觉可解释的图像。最后，将可视化子图、实体图像、文本描述与候选答案组合成一个统一提示，使 VLM 推断缺失实体。

## 关键词

#知识图谱补全 #视觉子图 #VLM #多模态
