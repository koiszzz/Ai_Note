---
title: "POEM：周期性漂移下时序预测的相位感知 SO(2) 特征旋转"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/POEM- Phase-Aware $-mathrm{SO}(2)$ Feature Rotation for Time Series Forecasting Under Periodicity Dr.md"
source_note: "[[信息源/arXiv cs.LG RSS/POEM- Phase-Aware $-mathrm{SO}(2)$ Feature Rotation for Time Series Forecasting Under Periodicity Dr.]]"
source_sha256: 60398bdcca508279821726dd436113a8b6965a250b22145b5474da0581852efa
original_url: "https://arxiv.org/abs/2608.03630"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# POEM：周期性漂移下时序预测的相位感知 SO(2) 特征旋转

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jiawen Zhu、Shuhan Liu、Shengxuan Li、Qiming Shi、Di Weng
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03630)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/POEM- Phase-Aware $-mathrm{SO}(2)$ Feature Rotation for Time Series Forecasting Under Periodicity Dr.|查看原始文件]]

## 摘要

- 深度学习推进了时序预测，但周期性漂移（周期时间与相位随时间变化）仍是难题；现有方法主要把序列建模在固定时间网格上，容纳相位相关变化的能力有限。
- 提出 POEM，一个基于二维特殊正交群（SO(2)）潜在特征旋转的相位感知预测框架：学习相位校正坐标，对配对潜在特征应用可逆的基于 SO(2) 的旋转，以降低相位相关变异性。
- 为外推该校正坐标，方向相位增量注意力（DPIA）从相似时间上下文检索历史相位增量，并整合进未来相位校正。
- 实验表明 POEM 取得有竞争力的性能，定性可视化表明学得的相位感知变换使潜在轨迹更规则。

## 正文

论文编号：arXiv:2608.03630v1（更新类型：new）。以下为摘要全文翻译。

深度学习推进了时序预测，但周期性漂移——周期时间与相位随时间变化——仍是一个难题。现有方法主要把这些序列建模在固定时间网格上，容纳相位相关变化的能力有限。为应对这一局限，我们提出 POEM，一个基于二维特殊正交群（记为 SO(2)）潜在特征旋转的相位感知预测框架。POEM 旨在通过学习一个相位校正坐标，并对配对潜在特征应用可逆的基于 SO(2) 的旋转，来降低相位相关的变异性。为外推这一校正坐标，方向相位增量注意力（Directional Phase Increment Attention，DPIA）从相似的时间上下文检索历史相位增量，并把它们整合进未来的相位校正。实验表明 POEM 取得有竞争力的性能，而定性可视化表明，学得的相位感知变换使潜在轨迹更加规则。

## 关键词

#时序预测 #周期性漂移 #SO(2)旋转 #相位感知 #注意力
