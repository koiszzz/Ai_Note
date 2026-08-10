---
published: 2026-08-07
title: "FI-TW：用于芬兰铁路延误分析的开放列车-天气数据集"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/FI-TW- An Open Train-Weather Dataset for Railway Delay Analysis in Finland.md"
source_note: "[[信息源/arXiv cs.LG RSS/FI-TW- An Open Train-Weather Dataset for Railway Delay Analysis in Finland]]"
source_sha256: af35daf2f23e06e917bf45d2678f44ac154ee0bb0bcbaf5a690b10d20e3d3375
original_url: "https://arxiv.org/abs/2601.16592"
processed: 2026-08-07
language: zh-CN
---

# FI-TW：用于芬兰铁路延误分析的开放列车-天气数据集

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Vinicius Pozzobon Borin, Jean Michel de Souza Sant'Ana, Usama Raheel, Nurul Huda Mahmood
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2601.16592)

## 摘要

- 列车延误源于运营、技术与环境因素的复杂交互；天气影响铁路可靠性（尤其北欧地区），但现有数据集很少将气象信息与运营列车数据结合。
- 首次公开结合 2018–2024 年芬兰铁路运营与同步气象观测的数据集：整合芬兰 Digitraffic 铁路交通服务运营指标与 209 个环境监测站的天气测量，经 Haversine 距离时空对齐。
- 涵盖 28 个工程特征，约 3850 万观测，覆盖芬兰 5915 公里铁路网；预处理含空间回退算法缺失处理、时间特征循环编码与天气数据稳健缩放。
- 揭示冬季月份延误率超 25% 的季节模式与芬兰中部北部高延误走廊地理聚集；XGBoost 基线预测站点特定延误 MAE 2.73 分钟。

## 正文

列车延误源于运营、技术与环境因素的复杂交互。虽然天气影响铁路可靠性（尤其北欧地区），现有数据集很少将气象信息与运营列车数据结合。本研究呈现首个结合 2018–2024 年芬兰铁路运营与同步气象观测的公开数据集。数据集整合芬兰 Digitraffic 铁路交通服务运营指标与 209 个环境监测站的天气测量，通过 Haversine 距离进行时空对齐。涵盖运营变量与气象测量的 28 个工程特征，覆盖芬兰 5915 公里铁路网的约 3850 万观测。预处理包括空间回退算法的策略性缺失数据处理、时间特征循环编码与应对传感器离群的天气数据稳健缩放。分析揭示清晰的季节模式，冬季月份延误率超过 25%，中北部芬兰存在高延误走廊的地理聚集。此外，工作展示数据集在分析芬兰铁路交通可靠性中的应用。XGBoost 回归基线实验预测站点特定延误的 MAE 为 2.73 分钟，证明数据集对机器学习应用的效用。数据集支持多样应用，包括列车延误预测、天气影响评估与基础设施脆弱性映射，为铁路运营研究中的机器学习应用提供灵活资源。

## 关键词

铁路延误、天气、开放数据集、时间序列、芬兰
