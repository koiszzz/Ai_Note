---
published: 2026-08-07
title: "形状感知的有向包围框（OBB）到水平包围框（HBB）转换"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Shape-Aware Oriented Bounding Box (OBB) to Horizontal Bounding Box (HBB) Conversion.md"
source_note: "[[信息源/arXiv cs.CV RSS/Shape-Aware Oriented Bounding Box (OBB) to Horizontal Bounding Box (HBB) Conversion]]"
source_sha256: ef95ecc2d2e58ad552838197a431261f1e9c8e30e0b2e040df955d683c7ed450
original_url: "https://arxiv.org/abs/2608.05858"
processed: 2026-08-07
language: zh-CN
---

# 形状感知的有向包围框（OBB）到水平包围框（HBB）转换

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Badha Rathna Sabhapathy, Gotam Dahiya, Vishesh Vatsal
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05858)

## 摘要

- 航空与卫星影像中的准确对象检测依赖包围框表征；对船舶或飞机等空间定向对象尤其如此。
- 有向包围框（OBB）比水平包围框（HBB）有更紧拟合与更稳健非极大抑制；当前任何从 OBB 到 HBB 的事后转换要么引入多余空/背景空间，要么从检测移除数据。
- 提出遥感影像船舶检测的形状感知 OBB 到 HBB 转换新方法：利用船体形状、船体饱满度与包围框方向产生更紧的轴对齐 HBB 表征。
- 所提方法对照三种 OBB 到 HBB 转换基线方法基准测试：使用最小与最大值的 Outer HBB、面积等效 HBB 与 GBB 边缘化 HBB。

## 正文

航空与卫星影像中的准确对象检测依赖于包围框表征。这对船舶或飞机等空间定向对象尤其如此。有向包围框（Oriented Bounding Boxes, OBB）相比水平包围框（Horizontal Bounding Boxes, HBB）具有更紧的拟合与更稳健的非极大抑制（non-max suppression）。当前任何从 OBB 到 HBB 的事后处理转换要么引入多余的空与背景空间，要么从检测中移除数据。本文为遥感影像中的船舶检测引入一种新颖的形状感知 OBB 到 HBB 转换方法。它利用船体形状、船体饱满度与包围框方向，产生更紧的轴对齐 HBB 表征。所提方法对照三种 OBB 到 HBB 转换基线方法进行基准测试：使用最小与最大值的 Outer HBB、面积等效 HBB（Area Equivalent HBB）与 GBB 边缘化 HBB（GBB Marginalized HBB）。

## 关键词

包围框、OBB、船舶检测、遥感、转换
