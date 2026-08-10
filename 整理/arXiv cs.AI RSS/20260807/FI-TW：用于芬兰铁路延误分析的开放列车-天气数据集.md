---
published: 2026-08-07
title: "FI-TW：用于芬兰铁路延误分析的开放列车-天气数据集"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FI-TW- An Open Train-Weather Dataset for Railway Delay Analysis in Finland.md"
source_note: "[[信息源/arXiv cs.AI RSS/FI-TW- An Open Train-Weather Dataset for Railway Delay Analysis in Finland]]"
source_sha256: 351bd21c7969baf07de563f0e19ce0d563b4bfd426001b256eb696fd1b6a41f6
original_url: "https://arxiv.org/abs/2601.16592"
processed: 2026-08-07
language: zh-CN
---

# FI-TW：用于芬兰铁路延误分析的开放列车-天气数据集

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Vinicius Pozzobon Borin, Jean Michel de Souza Sant'Ana, Usama Raheel, Nurul Huda Mahmood
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2601.16592)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FI-TW- An Open Train-Weather Dataset for Railway Delay Analysis in Finland|查看原始文件]]

## 摘要

- 列车延误源于运营、技术与环境因素的复杂交互；天气影响铁路可靠性（尤其北欧地区），但现有数据集很少将气象信息与运营列车数据集成。
- 论文呈现首个公开数据集：结合芬兰铁路运营与 2018-2024 年同步气象观测——集成芬兰 Digitraffic 铁路交通服务的运营指标与 209 个环境监测站的天气测量，使用 Haversine 距离进行时空对齐；涵盖芬兰 5,915 公里铁路网络约 3,850 万条观测的 28 个工程化特征（运营变量与气象测量）。
- 预处理包括通过空间回退算法策略性处理缺失数据、时间特征循环编码与天气数据稳健缩放以应对传感器异常。
- 分析揭示明显季节模式：冬季月份延误率超 25%，高延误走廊集中于芬兰中部与北部；用 XGBoost 回归的基线实验预测车站特定延误达到平均绝对误差 2.73 分钟，展示数据集对机器学习应用的价值；支持列车延误预测、天气影响评估与基础设施脆弱性映射等多样应用。

## 正文

列车延误源于运营、技术与环境因素之间的复杂交互。虽然天气影响铁路可靠性（尤其在北欧地区），现有数据集很少将气象信息与运营列车数据集成。本研究呈现第一个公开可用的数据集，将芬兰铁路运营与 2018-2024 年的同步气象观测结合。数据集将芬兰 Digitraffic 铁路交通服务的运营指标与 209 个环境监测站的天气测量集成，使用 Haversine 距离进行时空对齐。它涵盖运营变量与气象测量中的 28 个工程化特征，覆盖芬兰 5,915 公里铁路网络约 3,850 万条观测。预处理包括通过空间回退算法策略性处理缺失数据、时间特征的循环编码，以及天气数据的稳健缩放以解决传感器异常。分析揭示明显的季节模式，冬季月份延误率超过 25%，高延误走廊在地理上聚集于芬兰中部与北部。此外，该工作展示了数据集在分析芬兰铁路交通可靠性中的应用。使用 XGBoost 回归的基线实验预测车站特定延误达到 2.73 分钟的平均绝对误差，展示数据集对机器学习应用的效用。该数据集支持多样应用，包括列车延误预测、天气影响评估与基础设施脆弱性映射，为铁路运营研究中的机器学习应用提供灵活资源。

## 关键词

#铁路延误 #天气数据 #数据集 #芬兰
