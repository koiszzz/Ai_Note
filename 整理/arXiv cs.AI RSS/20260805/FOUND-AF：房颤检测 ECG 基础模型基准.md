---
published: 2026-08-05
title: "FOUND-AF：房颤检测 ECG 基础模型基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection]]"
source_sha256: 5cf93221e9a8187d161e6e313cdf6278baf60cf4a3be913983ce2ac0838ef300
original_url: "https://arxiv.org/abs/2608.03597"
processed: 2026-08-05
language: zh-CN
---

# FOUND-AF：房颤检测 ECG 基础模型基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Amirhossein Taleshinosrati 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03597)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection|查看原始文件]]

## 摘要

- 提出 FOUND-AF：统一、防泄漏、面向部署的基准框架，在相同实验条件下评估预训练 ECG 表示的质量；五个家族的九个公开基础模型（HuBERT-ECG、CLEF、ST-MEM、ECG-JEPA、ECGFounder）在四个异构 ECG 数据集（AFDB、CinC2017、CPSC2021、LTAFDB）上评估。
- 所有模型作为冻结特征提取器，使用标准化预处理、模型原生重采样、固定 XGBoost 分类器与记录级分组交叉验证。
- 评估包括分类指标、ROC 分析、带 Holm 校正的配对记录级自助比较、嵌入空间可视化与计算效率剖析。
- ECGFounder 模型在数据集上取得一致的最强整体性能，并在准确率、模型大小、推理时间与内存占用之间提供有利权衡。

## 正文

论文编号：arXiv:2608.03597v1（更新类型：new）。以下为摘要全文翻译。

房颤（AF）是最常见的持续性心律失常，与卒中、心力衰竭和死亡率风险增加相关。近期的 ECG 基础模型为自动化 AF 检测提供可迁移表示。然而，由于现有研究使用不同的数据集、预处理流程、分类器与验证协议，它们的相对有效性仍不清楚。本研究提出 FOUND-AF，一个统一、防泄漏、面向部署的基准框架，在相同实验条件下评估预训练 ECG 表示的质量。来自五个家族的九个公开基础模型（包括 HuBERT-ECG、CLEF、ST-MEM、ECG-JEPA 与 ECGFounder）在四个异构 ECG 数据集（AFDB、CinC2017、CPSC2021 与 LTAFDB）上评估。所有模型均作为冻结特征提取器使用，采用标准化预处理、模型原生重采样、固定 XGBoost 分类器与记录级分组交叉验证。评估包括分类指标、受试者工作特征分析、带 Holm 校正的配对记录级自助比较、嵌入空间可视化与计算效率剖析。ECGFounder 模型在数据集上一致取得最强整体性能，并在准确率、模型大小、推理时间与内存占用之间提供有利权衡。因此，FOUND-AF 为选择 ECG 基础模型提供了可复现框架，并证明紧凑、临床预训练的编码器能够支持跨异构采集环境的稳健、计算高效的 AF 检测。

## 关键词

#心电图 #房颤 #基础模型 #基准测试
