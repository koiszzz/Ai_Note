---
published: 2026-08-07
title: "UQ-Loc：不确定性感知 LiDAR 场景坐标回归"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/UQ-Loc- Uncertainty-Aware LiDAR Scene Coordinate Regression.md"
source_note: "[[信息源/arXiv cs.CV RSS/UQ-Loc- Uncertainty-Aware LiDAR Scene Coordinate Regression]]"
source_sha256: 5dce168a0cd561d0a6b582bb1beb4ece2b052a16db5e21469d4ceae96ba33d85
original_url: "https://arxiv.org/abs/2608.06307"
processed: 2026-08-07
language: zh-CN
---

# UQ-Loc：不确定性感知 LiDAR 场景坐标回归

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jacek Komorowski
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06307)

## 摘要

- 基于 LiDAR 的场景坐标回归（SCR）将点云直接映射到 3D 场景坐标，无需显式地图检索即可实现精确 6-DoF 定位；现有方法产生确定性预测，丢弃可改进稳健性与下游决策的偶然不确定性。
- 呈现 UQ-Loc：扩展 LightLoc 架构，带各向异性高斯协方差头，为每个体素预测完整 3×3 正定协方差矩阵。
- 训练用负对数似然（NLL）损失加 kNN 基空间平滑正则化器，推理用修改 SC2-PCR 求解器：不确定性加权种子评分与马氏距离内点检验；采用期望校准误差（ECE）作为评估预测不确定性质量的原则性度量。
- 实验显示 UQ-Loc 在 6-DoF 定位准确率上一致改进，同时产生良好校准的协方差。

## 正文

基于 LiDAR 的场景坐标回归（Scene Coordinate Regression, SCR）将点云直接映射到 3D 场景坐标，无需显式地图检索即可实现精确的 6-DoF 定位。然而，现有方法产生确定性预测，丢弃了能够改进稳健性与下游决策的偶然（aleatoric）不确定性。研究呈现 UQ-Loc，扩展 LightLoc 架构：带一个各向异性高斯协方差头，为每个体素预测完整的 3×3 正定协方差矩阵。训练使用负对数似然（NLL）损失，辅以基于 kNN 的空间平滑正则化器；推理使用一个修改的 SC2-PCR 求解器，带不确定性加权的种子评分与马氏距离（Mahalanobis-distance）内点检验。研究采用期望校准误差（Expected Calibration Error, ECE）作为评估预测不确定性质量的原则性度量。实验表明，UQ-Loc 在 6-DoF 定位准确率上实现一致改进，同时产生良好校准的协方差。

## 关键词

LiDAR、场景坐标回归、不确定性、6-DoF 定位、校准
