---
published: 2026-08-07
title: "FashionPose：联合几何与光度控制的统一文本驱动时尚合成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/FashionPose- Unified Text-Driven Fashion Synthesis with Joint Geometric and Photometric Control.md"
source_note: "[[信息源/arXiv cs.CV RSS/FashionPose- Unified Text-Driven Fashion Synthesis with Joint Geometric and Photometric Control]]"
source_sha256: 833a35f02dc90f8f25d20aab4a003cac47f9d80915090e82b04bf2b1a70feb27
original_url: "https://arxiv.org/abs/2507.13311"
processed: 2026-08-07
language: zh-CN
---

# FashionPose：联合几何与光度控制的统一文本驱动时尚合成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Chuancheng Shi, Shaotian Li, Zhenlong Yuan, Zifeng Cheng, Fei Shen
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2507.13311)

## 摘要

- 逼真且可控的服装合成对时尚电商必不可少，却要求人体姿态几何与环境光度之间的精确协调；常规姿态引导框架有两个根本局限：重度依赖现成估计器的预定义骨架，限制语义灵活性；主要聚焦中性照明下的影棚式生成，无法协调几何配置与自然语言描述的复杂场景特定照明。
- 提出 FashionPose：级联架构，在统一语言驱动界面内协调几何与光度控制；采用解耦但协同策略：(1) 双向对比对齐机制将文本语义锚定进显式几何流形，实现免模板姿态生成；(2) 身份锚定合成模块将这些几何先验转为高保真图像并保留细粒度外观；(3) 提示条件重光照模块用生成姿态作为空间锚点实现环境感知着色。
- 层级设计将高层指令转为一致视觉表征，确保结构精度与氛围和谐。
- 构建 PoseCap：超 40000 个字幕-关键点对的数据集；大量实验显示 FashionPose 在姿态准确率与物理真实感上超越现有基准，为个性化、场景感知虚拟时尚展示提供稳健方案。

## 正文

逼真且可控的服装合成对时尚电商必不可少，然而它要求人体姿态几何与环境光度之间的精确协调。常规姿态引导框架有两个根本局限：它们重度依赖来自现成估计器的预定义骨架，限制语义灵活性；且主要聚焦中性照明下的影棚式生成，无法协调几何配置与自然语言描述的复杂、场景特定照明。为弥合该差距，研究提出 FashionPose，一个在统一语言驱动界面内协调几何与光度控制的级联架构。与常规框架不同，研究框架采用解耦却协同的策略：(1) 一个双向对比对齐机制，将文本语义锚定进显式几何流形，实现免模板（template-free）姿态生成；(2) 一个身份锚定合成模块，将这些几何先验转为高保真图像，同时保留细粒度外观；(3) 一个提示条件重光照模块，利用生成的姿态作为空间锚点实现环境感知着色。该层级设计有效将高层指令转为一致的视觉表征，确保结构精度与氛围和谐。为促进该范式，研究构建 PoseCap，一个含超过 40,000 个字幕-关键点对的数据集。大量实验表明，FashionPose 在姿态准确率与物理真实感上超越现有基准，为个性化、场景感知的虚拟时尚展示提供稳健解决方案。

## 关键词

时尚合成、姿态引导、重光照、文本驱动、虚拟试穿
