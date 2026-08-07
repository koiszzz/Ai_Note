---
published: 2026-08-06
title: MinerU.Chem：高精度光学化学结构与反应识别系统
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MinerU.Chem- A High-Precision System for Optical Chemical Structure and Reaction Recognition.md
source_note: "[[信息源/arXiv cs.CV RSS/MinerU.Chem- A High-Precision System for Optical Chemical Structure and Reaction Recognition|查看原始文件]]"
source_sha256: 5e2f47117fbb310f691497b0735b9bd6cde474fac76db6a188c1c3f93f47ee84
original_url: https://arxiv.org/abs/2608.03525
processed: 2026-08-07
language: zh-CN
---

# MinerU.Chem：高精度光学化学结构与反应识别系统

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03525)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MinerU.Chem- A High-Precision System for Optical Chemical Structure and Reaction Recognition|查看原始文件]]

## 摘要

- 有机化学论文与专利中的分子结构、反应方案和实验条件常以结构图、反应图及复杂表格或图的形式呈现，通用文档解析系统难以直接转为机器可读数据
- MinerU.Chem 是集成于 MinerU 在线平台的有机化学文献文档解析系统，在通用解析流水线上新增五个化学专用模块
- 以 CARBON 为核心表示进行分子结构识别，保留原始图像视觉布局与复杂化学语义，支持导出 MolFile、SMILES 等下游标准格式
- 在 MolRecBench-Wild 的 SMILES 可评估子集（N=2,392）上，SMILES 精确匹配准确率达 93.02%，比最强对比系统 GPT-5.6-Sol（74.87%）高出 18.15 个百分点

## 正文

在有机化学论文和专利中，分子结构、反应方案和实验条件通常以分子结构示意图、反应图和复杂的表格或图形呈现。这类信息很难由通用文档解析系统直接转换为机器可读的数据，这限制了有机化学知识库构建的数据生产，也限制了面向化学的 AI（AI for Chemistry）任务，如反应预测、逆合成、条件推荐、分子性质预测和药物分子设计。

本文介绍 MinerU-Chem，一个集成到 MinerU 在线平台中的有机化学文献文档解析系统。MinerU-Chem 建立在 MinerU 通用文档解析流水线之上，新增了五个化学专用模块：化学相关性过滤、分子结构检测、分子标识符提取、分子结构识别和反应方案解析。这些模块共同将文档中与有机化学相关的图像区域转换为分子摘要列表（Molecule Summary List）和反应摘要列表（Reaction Summary List）。

在分子结构识别方面，MinerU-Chem 使用 CARBON（Complex Atomic Representation and Bonding Object Notation，复杂原子表示与键合对象记法）作为其核心表示。CARBON 使识别结果既能保留原始图像的视觉布局，又能保留复杂的化学语义，同时支持导出 MolFile 和 SMILES 等标准下游格式。在 MolRecBench-Wild 的 SMILES 可评估子集（N=2,392）上，MinerU-Chem 的分子结构识别模块取得了 93.02% 的 SMILES 精确匹配准确率，比所评估的最佳对比系统 GPT-5.6-Sol（74.87%）高出 18.15 个百分点。该系统已集成到 MinerU 在线平台，可在 https://mineru.net/OpenSourceTools/Extractor 获取。

## 关键词

#文档解析 #化学结构识别 #光学化学识别 #OCR #AIforChemistry
