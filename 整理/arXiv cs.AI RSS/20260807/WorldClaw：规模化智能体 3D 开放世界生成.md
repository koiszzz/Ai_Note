---
published: 2026-08-07
title: "WorldClaw：规模化智能体 3D 开放世界生成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/WorldClaw- Agentic 3D Open-World Generation at Scale.md"
source_note: "[[信息源/arXiv cs.AI RSS/WorldClaw- Agentic 3D Open-World Generation at Scale]]"
source_sha256: 3a4956ba0770d99d7fc2351d4a94bed74266439616fa256b91a12f0a0f25883b
original_url: "https://arxiv.org/abs/2608.05248"
processed: 2026-08-07
language: zh-CN
---

# WorldClaw：规模化智能体 3D 开放世界生成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chunchao Guo, Jinpeng Li, Yang Li, Zilong Huang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05248)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/WorldClaw- Agentic 3D Open-World Generation at Scale|查看原始文件]]

## 摘要

- 从开放式文本生成大规模、可自由探索的 3D 世界仍具挑战性，因为系统必须同时维持全局空间连贯、丰富局部内容与适合下游编辑与复用的显式资产。
- 呈现 WorldClaw：完全智能体、粗到细的开放世界 3D 场景生成框架——规划智能体将文本提示翻译为区域、地形、资产、材质与空间关系的结构化规格；WorldClaw 随后从语义布局构建全局连贯地形基础、可复用资产、生成或程序化材质与区域感知高度场。
- 对细节需求区域，生成地形条件组合、重建可编辑纹理网格并恢复其在地形上的放置；基于渲染的智能体进一步精炼地形、物体、外观与接触。
- 跨多样开放世界提示，WorldClaw 产生具有连贯空间组织、视觉动人局部内容与可编辑实例级资产的大规模场景，同时保持一致全局地形结构。

## 正文

从开放式文本生成大规模、可自由探索的 3D 世界仍然具有挑战性，因为一个系统必须同时维持全局的空间连贯性、丰富的局部内容与适合下游编辑与复用的显式资产。我们呈现 WorldClaw，一个完全智能体、粗到细的开放世界 3D 场景生成框架。规划智能体将一个文本提示翻译为区域、地形、资产、材质与空间关系的结构化规格。WorldClaw 随后从语义布局构建一个全局连贯的地形基础、可复用资产、生成或程序化的材质与一个区域感知的高度场。对需要细节的区域，它生成地形条件的组合、重建可编辑的纹理网格，并恢复它们在地形上的放置；基于渲染的智能体进一步精炼地形、物体、外观与接触。跨多样的开放世界提示，WorldClaw 产生具有连贯空间组织、视觉动人的局部内容与可编辑实例级资产的大规模场景，同时保持一致的全局地形结构。

## 关键词

#3D生成 #开放世界 #智能体 #场景生成
