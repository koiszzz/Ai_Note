---
title: "FOUND-AF：房颤检测 ECG 基础模型基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection.md"
source_note: "[[信息源/arXiv cs.LG RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection]]"
source_sha256: 2e56bdd955f16be6918ba664b8a35b5517acf0d3581dda2e2ea58cfa233351d9
original_url: "https://arxiv.org/abs/2608.03597"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FOUND-AF：房颤检测 ECG 基础模型基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Amirhossein Taleshinosrati 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03597)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FOUND-AF- Benchmarking ECG Foundation Models for Atrial Fibrillation Detection|查看原始文件]]

## 摘要

- 提出 FOUND-AF，统一、防泄漏、面向部署的基准框架：相同实验条件下评估预训练 ECG 表示质量——五个家族九个公开基础模型（HuBERT-ECG、CLEF、ST-MEM、ECG-JEPA 与 ECGFounder）在四个异构 ECG 数据集（AFDB、CinC2017、CPSC2021、LTAFDB）评估；所有模型作为冻结特征提取器：标准化预处理、模型原生重采样、固定 XGBoost 分类器与记录级分组交叉验证。
- 房颤（AF）是最常见持续性心律失常，与卒中、心力衰竭与死亡率风险增加相关；近期 ECG 基础模型为自动化 AF 检测提供可迁移表示，但现有研究用不同数据集、预处理流程、分类器与验证协议，相对有效性不明。
- 评估含分类指标、ROC 分析、Holm 校正配对记录级自助比较、嵌入空间可视化与计算效率剖析。
- ECGFounder 跨数据集一致最强整体性能，并在准确率、模型大小、推理时间与内存占用间有利权衡——FOUND-AF 提供选择 ECG 基础模型的可复现框架，紧凑临床预训练编码器可支持跨异构采集环境的稳健、计算高效 AF 检测。

## 正文

论文编号：arXiv:2608.03597v1（更新类型：cross）。以下为摘要全文翻译。

房颤（AF）是最常见的持续性心律失常，与卒中、心力衰竭与死亡率风险增加相关。近期的 ECG 基础模型为自动化 AF 检测提供可迁移的表示。然而，由于现有研究使用不同的数据集、预处理流程、分类器与验证协议，它们的相对有效性仍不清楚。本研究提出 FOUND-AF，一个统一、防泄漏、面向部署的基准框架：在相同实验条件下评估预训练 ECG 表示的质量。来自五个家族的九个公开基础模型（包括 HuBERT-ECG、CLEF、ST-MEM、ECG-JEPA 与 ECGFounder）在四个异构 ECG 数据集（AFDB、CinC2017、CPSC2021 与 LTAFDB）上评估。所有模型均作为冻结特征提取器使用：标准化预处理、模型原生重采样、固定 XGBoost 分类器与记录级分组交叉验证。评估包括分类指标、受试者工作特征分析、带 Holm 校正的配对记录级自助比较、嵌入空间可视化与计算效率剖析。ECGFounder 模型在数据集上一致取得最强整体性能，并在准确率、模型大小、推理时间与内存占用之间提供有利权衡。因此，FOUND-AF 为选择 ECG 基础模型提供了可复现框架，并表明紧凑、临床预训练的编码器能够支持跨异构采集环境的稳健、计算高效的 AF 检测。

## 关键词

#心电图 #房颤 #基础模型 #基准测试
