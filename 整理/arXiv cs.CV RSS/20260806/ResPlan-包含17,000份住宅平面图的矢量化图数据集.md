---
published: 2026-08-06
title: ResPlan：包含17,000份住宅平面图的矢量化图数据集
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ResPlan- A Large-Scale Vector-Graph Dataset of 17,000 Residential Floor Plans.md
source_note: "[[信息源/arXiv cs.CV RSS/ResPlan- A Large-Scale Vector-Graph Dataset of 17,000 Residential Floor Plans]]"
source_sha256: 02eb5f7c11c4ce29ac4f4009dff244554f984cfade188ebc8d02bc727f331398
original_url: https://arxiv.org/abs/2508.14006
processed: 2026-08-07
language: zh-CN
---

# ResPlan：包含17,000份住宅平面图的矢量化图数据集

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.14006)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ResPlan- A Large-Scale Vector-Graph Dataset of 17,000 Residential Floor Plans|查看原始文件]]

## 摘要

- 引入 ResPlan 数据集：17,000 份住宅平面图，包含矢量几何、房间连通图和公制尺度坐标。
- 每份平面图在 17 类体系下标注墙体、门、窗和功能空间，多边形同时提供像素和米制坐标；每份图附四种类型化边（via_door、adjacency、direct、via_window），支持基于图的生成与空间推理。
- 相对 RPLAN（仅栅格）和 MSD（楼层级、需提取），ResPlan 提供自包含单元级布局，平均 8.1 个功能房间、9.2 个图节点，覆盖公寓、别墅和多翼住宅。

## 正文

我们引入 ResPlan，一个包含 17,000 份住宅平面图的数据集，具有矢量几何、房间连通图和公制尺度坐标。每份平面图在 17 类体系下标注墙体、门、窗和功能空间（厨房、卧室、卫生间、阳台等），多边形同时以像素和米制坐标表示。四种类型化边（via_door、adjacency、direct、via_window）伴随每份平面图，支持基于图的生成和空间推理。

与 RPLAN（Wu 等，2019）相比——它仅含栅格，平均每份平面图约 6.7 个房间，在我们转换后的划分中观测到最多 8 个功能房间；以及与 MSD（van Engelenburg 等，2024）相比——它处于楼层板级别且需要提取，ResPlan 提供自包含的单元级布局，平均 8.1 个功能房间和 9.2 个图节点，涵盖公寓、别墅和多翼住宅。

发布内容包括：数据集、加载和后处理代码、规范划分，以及三个基准任务的基线：语义房间标注、受约束平面图生成和图提取。数据集和代码公开可用。

## 关键词

#平面图数据集 #矢量图 #房间连通图 #建筑生成
