---
published: 2026-08-07
title: "矫正几何错位：类不平衡 EEG 的在线无源适应"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Rectifying Geometric Misalignment- Online Source-Free Adaptation for Class-Imbalanced EEG.md"
source_note: "[[信息源/arXiv cs.LG RSS/Rectifying Geometric Misalignment- Online Source-Free Adaptation for Class-Imbalanced EEG]]"
source_sha256: 3355002737625021646f758c117e11122e425a4d0e50ae39babaccc1344dedf7
original_url: "https://arxiv.org/abs/2608.05315"
processed: 2026-08-07
language: zh-CN
---

# 矫正几何错位：类不平衡 EEG 的在线无源适应

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Shiwen Chu, Shanglin Li, Motoaki Kawanabe, Reinmar Kobler
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05315)

## 摘要

- 基于脑电图（EEG）的脑机接口（BCI）常需无监督域适应（UDA）以跨主体与会话泛化；黎曼对齐方法（如黎曼居中变换 RCT）有效处理协变量漂移，但隐式假设平衡类先验。
- 现实在线 BCI 场景中标签分布动态变化（标签漂移），使标准对齐技术几何错位目标数据分布。
- 提出 OSPDIM（在线 SPD 流形信息最大化）：无源在线 UDA 框架，在黎曼流形上处理标签漂移；在切空间映射中引入流形约束偏差参数，经信息最大化优化以矫正不平衡数据流引起的几何倾斜；不同于依赖全局批统计的离线方法，OSPDIM 即时估计与矫正几何偏差。
- 2D SPD 矩阵仿真直观演示 OSPDIM 成功矫正标准居中失效的错位；多运动想象数据集实验显示 OSPDIM 显著优于标准黎曼基线，尤其在严重类不平衡的挑战性在线适应场景。

## 正文

基于脑电图（EEG）的脑机接口（BCI）通常需要无监督域适应（UDA）以跨主体与会话泛化。虽然黎曼居中变换（Riemannian Centering Transformation, RCT）等黎曼对齐方法有效处理协变量漂移，它们隐式假设平衡的类先验。然而，在现实在线 BCI 场景中，标签分布动态变化（标签漂移），导致标准对齐技术几何错位目标数据分布。本文提出 OSPDIM（在线 SPD 流形信息最大化），一个在黎曼流形上处理标签漂移的无源在线 UDA 框架。OSPDIM 在切空间映射中引入流形约束的偏差参数，通过信息最大化优化，以矫正不平衡数据流引起的几何倾斜。与依赖全局批统计的离线方法不同，OSPDIM 即时估计与矫正几何偏差。2D SPD 矩阵上的仿真直观展示了 OSPDIM 成功矫正标准居中失效处的错位。多个运动想象数据集上的广泛实验表明，OSPDIM 显著优于标准黎曼基线，尤其在严重类不平衡的挑战性在线适应场景中，为实用、即插即用的 BCI 系统提供稳健解决方案。

## 关键词

EEG、脑机接口、无源域适应、黎曼流形、类不平衡
