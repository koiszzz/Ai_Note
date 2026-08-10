---
published: 2026-08-07
title: "Space2Ground 2.0：街景与卫星影像融合的多源农业监测数据集与框架"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Space2Ground 2.0- A Multi-Source Dataset and Framework for Agricultural Monitoring through Fusion of.md"
source_note: "[[信息源/arXiv cs.CV RSS/Space2Ground 2.0- A Multi-Source Dataset and Framework for Agricultural Monitoring through Fusion of]]"
source_sha256: fd3a9613e848fe3c97cb39af7a513c70d7114f14d0985f4d4dd97fbd01bc310e
original_url: "https://arxiv.org/abs/2607.28247"
processed: 2026-08-07
language: zh-CN
---

# Space2Ground 2.0：街景与卫星影像融合的多源农业监测数据集与框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Iason Tsardanidis, Alkiviadis Koukos, George Choumos, Vasileios Sitokonstantinou, Charalampos Kontoes
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.28247)

## 摘要

- 准确且可扩展的地块级农业监测仍具挑战：卫星地球观测单独只提供农业地块的俯视视角，光学观测还受云诱导时间间隙影响。
- 呈现 Space2Ground 2.0：多源框架，整合 Sentinel-1 SAR 与 Sentinel-2 多光谱时间序列以及车辆安装相机采集、经 Mapillary 平台共享的地理标记街景影像。
- 大体自动化处理流水线执行语义过滤、图像质量评估、视点基地块关联与数据集精化，将大量众包影像转为地块链接、分析就绪数据；2022 生长季应用于塞浦路斯：从初始超 90 万张影像集合选出 46050 张标注街景影像的策展数据集，链接 8581 个农业地块的卫星信息。
- 用单源与多源观测进行地块级作物分类实验评估数据实用价值：街景影像提供互补细尺度视觉信息，与卫星时间序列集成时增强分类；Space2Ground 2.0 提供开放基准数据集与可复现多模态农业监测方法论，在视觉验证、减少昂贵实地检查依赖与数据驱动农业政策实施方面有潜在应用。

## 正文

准确且可扩展的地块级农业监测仍具挑战，因为卫星地球观测单独只提供农业地块的俯视视角，而光学观测还受云诱导的时间间隙影响。本文呈现 Space2Ground 2.0，一个多源框架：整合 Sentinel-1 SAR 与 Sentinel-2 多光谱时间序列，以及使用车载相机采集并经 Mapillary 平台共享的地理标记街景影像。一个大体自动化的处理流水线执行语义过滤、图像质量评估、基于视点的地块关联与数据集精化，将大量众包影像转化为地块链接、分析就绪的数据。在 2022 生长季应用于塞浦路斯，该流水线产生一个策展数据集：从初始超过 900,000 张影像的集合中选出 46,050 张标注街景影像，并与 8,581 个农业地块的卫星信息链接。通过使用单源与多源观测的地块级作物分类实验评估数据集的实际价值。结果表明，街景影像提供互补的细尺度视觉信息，与卫星时间序列集成时增强分类。总体而言，Space2Ground 2.0 提供了一个开放可得的基准数据集与可复现的多模态农业监测方法论，在视觉验证、减少对昂贵实地检查的依赖以及数据驱动的农业政策实施方面具有潜在应用。

## 关键词

农业监测、多源、街景、卫星、作物分类
