---
published: 2026-08-06
title: CAMP用于时间序列预测的周期感知多尺度补丁混合器
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/CAMP- A Cycle-Aware Multi-Scale Patch Mixer for Time Series Forecasting.md
source_note: "[[信息源/arXiv cs.LG RSS/CAMP- A Cycle-Aware Multi-Scale Patch Mixer for Time Series Forecasting]]"
source_sha256: c9f43e6a55542974dc8b5969e1d09e4fe55bd1a6c2985583078cc86304d4458f
original_url: https://arxiv.org/abs/2608.04051
processed: 2026-08-07
language: zh-CN
---

# CAMP用于时间序列预测的周期感知多尺度补丁混合器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04051)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CAMP- A Cycle-Aware Multi-Scale Patch Mixer for Time Series Forecasting|查看原始文件]]

## 摘要

- 自适应周期学习模块为每个输入窗口分别识别主导频率，无需预定义周期长度即可生成历史与未来周期分量。
- 地平线引导补丁混合器引入位置相关精炼，早期补丁纳入更广时间上下文，同时保留预测边界附近的信息。
- 对去周期残差用时间对齐的多分辨率表示建模；在七个长期预测基准的六个上取得最佳平均 MSE。

## 正文

现实世界的时间序列通常由重复出现的模式所支配，但其主导周期可能因数据集、预测设置和单个输入窗口而异。现有的周期感知预测器通常依赖在数据集层面选择的单一周期，当周期性行为随时间变化或存在多个周期共存时，这可能具有局限性。此外，基于补丁的模型通常统一处理所有补丁位置，尽管远离预测边界的补丁可能需要更广泛的上下文精炼，而较新的补丁包含应被更直接保留的信息。在周期性行为被移除后，剩余的动态也可能跨越多个时间分辨率，无法在单一尺度上得到充分描述。我们引入了 CAMP（Cycle-Aware Multi-Scale Patch Mixer，周期感知多尺度补丁混合器）来应对这些挑战。自适应周期学习模块为每个输入窗口分别识别主导频率，并生成历史和未来的周期分量，无需预定义周期长度。地平线引导补丁混合器（Horizon-Guided Patch Mixer）引入了位置相关的精炼，允许较早的补丁纳入更广泛的时间上下文，同时保留靠近预测边界的信息。CAMP 还通过时间对齐的多分辨率表示对去周期化的残差进行建模，使不同尺度的互补动态能够在同一预测框架内被捕获。在七个长期预测基准上，CAMP 在六个数据集上取得了最佳平均 MSE，并在六个数据集上取得最佳或并列最佳 MAE。在四个 PEMS 交通基准的十六种设置中，它还获得了最高的 MSE 胜场数。

## 关键词

#时间序列预测 #周期感知 #多尺度 #补丁混合器 #CAMP
