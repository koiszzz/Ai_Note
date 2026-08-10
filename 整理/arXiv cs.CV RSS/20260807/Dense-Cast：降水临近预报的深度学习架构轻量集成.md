---
published: 2026-08-07
title: "Dense-Cast：降水临近预报的深度学习架构轻量集成"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Dense-Cast- A lightweight ensemble of deep learning architectures for precipitation nowcasting.md"
source_note: "[[信息源/arXiv cs.CV RSS/Dense-Cast- A lightweight ensemble of deep learning architectures for precipitation nowcasting]]"
source_sha256: b6e55e063167d6f1937e4ebf5a364ed39984e8686c4a53d898ad3362012f1111
original_url: "https://arxiv.org/abs/2608.06082"
processed: 2026-08-07
language: zh-CN
---

# Dense-Cast：降水临近预报的深度学习架构轻量集成

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Gourav Jyoti Kalita, Hidam Kumarjit Singh
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06082)

## 摘要

- 适当的短期降水预报对灾害管理与备灾至关重要；降水的变异性与非线性使短期预报对气象学家具挑战；捕捉时空数据中的时间依赖是降水临近预报的挑战。
- 引入半小时降水临近预报轻量深度学习模型：结合 DenseNet 架构、残差连接与 transformer 编码器，以更少模型参数实现有效降水临近预报。
- 选择印度东北部为研究区域（6-9 月季风季降水最高）；模型取前五个半小时降水时间步输入，预测接下来两个半小时的降水；用 30 分钟节奏 GPM IMERG 降水数据集训练与测试。
- 30 分钟间隔下取得最佳 MAE 0.235 毫米、RMSE 0.735 毫米、KGE 0.816。

## 正文

适当的短期降水预报对灾害管理与备灾至关重要。然而，降水的变异性与非线性使短期预报对气象学家具有挑战性。此外，捕捉时空数据中的时间依赖是降水临近预报（precipitation nowcasting）中的一个挑战。本文引入一个用于半小时降水临近预报的轻量深度学习模型。该模型通过纳入 DenseNet 架构、残差连接与 transformer 编码器设计，实现参数更少的有效降水临近预报。研究选择印度东北部地区作为研究区域——该地区因季风季节在 6 月至 9 月降水量最高。所提模型将前五个半小时降水时间步作为输入，预测接下来两个半小时的降水。研究使用 30 分钟节奏的 GPM IMERG 降水数据集训练与测试模型。所提架构在 30 分钟间隔下取得最佳 MAE 0.235 毫米、RMSE 0.735 毫米与 KGE 分数 0.816。

## 关键词

降水临近预报、DenseNet、transformer、轻量模型、气象
