---
title: "STREAM-VAE：车辆遥测异常检测中慢速与快速动力学的双路径路由"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/STREAM-VAE- Dual-Path Routing for Slow and Fast Dynamics in Vehicle Telemetry Anomaly Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/STREAM-VAE- Dual-Path Routing for Slow and Fast Dynamics in Vehicle Telemetry Anomaly Detection]]"
source_sha256: 9e5c259e0201d1b48c67cb13d1596220f68f69b40a5d8f2bc4c62d4434eabc69
original_url: "https://arxiv.org/abs/2511.15339"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# STREAM-VAE：车辆遥测异常检测中慢速与快速动力学的双路径路由

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kadir-Kaan Özer、René Ebeling、Markus Enzweiler
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.15339)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/STREAM-VAE- Dual-Path Routing for Slow and Fast Dynamics in Vehicle Telemetry Anomaly Detection|查看原始文件]]

## 摘要

- 提出 STREAM-VAE，汽车遥测时序数据异常检测的变分自编码器：双路径编码器分离慢漂移与快尖峰信号动力学，解码器把瞬态偏差与正常运行模式分开表示。
- 汽车遥测数据常在同一序列中表现出慢漂移与快尖峰，使可靠异常检测具有挑战性；基于重建的标准方法（包括序列 VAE）使用单一潜过程，因此混合异构时间尺度，可能平滑尖峰或膨胀方差、削弱异常分离。
- 为部署设计：为车载监控器与后端车队分析产生跨运行模式稳定的异常分数。
- 汽车遥测数据集与公开 SMD 基准上的实验显示：显式分离漂移与尖峰动力学相比强预测、注意力、图与 VAE 基线改善鲁棒性。

## 正文

论文编号：arXiv:2511.15339v3（更新类型：replace-cross）。以下为摘要全文翻译。

汽车遥测数据经常在同一序列中表现出慢漂移与快尖峰，使可靠的异常检测具有挑战性。基于重建的标准方法（包括序列变分自编码器 VAE）使用单一潜过程，因此混合异构时间尺度，可能平滑尖峰或膨胀方差、削弱异常分离。在本文中，我们提出 STREAM-VAE，一个用于汽车遥测时序数据异常检测的变分自编码器。我们的模型使用双路径编码器分离慢漂移与快尖峰信号动力学，以及一个把瞬态偏差与正常运行模式分开表示的解码器。STREAM-VAE 为部署而设计：为车载监控器与后端车队分析产生跨运行模式稳定的异常分数。在汽车遥测数据集与公开 SMD 基准上的实验表明，显式分离漂移与尖峰动力学相比强预测、注意力、图与 VAE 基线改善了鲁棒性。

## 关键词

#异常检测 #汽车遥测 #变分自编码器 #时序数据
