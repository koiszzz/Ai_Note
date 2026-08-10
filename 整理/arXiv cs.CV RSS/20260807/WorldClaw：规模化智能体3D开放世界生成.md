---
published: 2026-08-07
title: "WorldClaw：规模化智能体 3D 开放世界生成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/WorldClaw- Agentic 3D Open-World Generation at Scale.md"
source_note: "[[信息源/arXiv cs.CV RSS/WorldClaw- Agentic 3D Open-World Generation at Scale]]"
source_sha256: cca5c782c1db314a8feafb7e23212763b940edad3d3ea916ff057abc0cc08982
original_url: "https://arxiv.org/abs/2608.05248"
processed: 2026-08-07
language: zh-CN
---

# WorldClaw：规模化智能体 3D 开放世界生成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Chunchao Guo, Jinpeng Li, Yang Li, Zilong Huang
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05248)

## 摘要

- 从开放式文本生成大规模、可自由探索的 3D 世界仍具挑战，因为系统必须同时维持全局空间连贯性、丰富局部内容与适合下游编辑与复用的显式资产。
- 呈现 WorldClaw：开放世界 3D 场景生成的完全智能体、粗到细框架。
- 规划智能体将文本提示转为区域、地形、资产、材质与空间关系的结构化规格；WorldClaw 从语义布局、可复用资产、生成或程序化材质与区域感知高度场构建全局连贯地形基础；对细节需求高的区域生成地形条件化组合、重建可编辑纹理网格、恢复其在地形上的放置；基于渲染的智能体进一步精化地形、对象、外观与接触。
- 跨多样开放世界提示，WorldClaw 产生空间组织连贯、局部内容视觉吸引、实例级资产可编辑的大规模场景，同时保持一致全局地形结构。

## 正文

从开放式文本生成大规模、可自由探索的 3D 世界仍具挑战，因为一个系统必须同时维持全局空间连贯性、丰富的局部内容，以及适合下游编辑与复用的显式资产。研究呈现 WorldClaw，一个用于开放世界 3D 场景生成的完全智能体、粗到细框架。规划智能体（planning agents）将文本提示转化为区域、地形、资产、材质与空间关系的结构化规格。WorldClaw 随后从语义布局、可复用资产、生成式或程序化材质与区域感知高度场构建一个全局连贯的地形基础。对细节需求高的区域，它生成地形条件化的组合，重建可编辑的纹理网格，并恢复它们在地形上的放置；基于渲染的智能体进一步精化地形、对象、外观与接触。跨多样的开放世界提示，WorldClaw 产生具有连贯空间组织、视觉吸引人的局部内容与可编辑实例级资产的大规模场景，同时保持一致的全局地形结构。

## 关键词

3D 生成、开放世界、智能体、粗到细、可编辑资产
