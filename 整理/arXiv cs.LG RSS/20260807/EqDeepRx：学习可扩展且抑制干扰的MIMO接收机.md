---
published: 2026-08-07
title: "EqDeepRx：学习可扩展且抑制干扰的 MIMO 接收机"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/EqDeepRx- Learning a Scalable and Interference Mitigating MIMO Receiver.md"
source_note: "[[信息源/arXiv cs.LG RSS/EqDeepRx- Learning a Scalable and Interference Mitigating MIMO Receiver]]"
source_sha256: 745d8d2778e15b280aae22ef2a05767a640f29b736f0d0b265b4285adb123324
original_url: "https://arxiv.org/abs/2602.11834"
processed: 2026-08-07
language: zh-CN
---

# EqDeepRx：学习可扩展且抑制干扰的 MIMO 接收机

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Mikko Honkala, Dani Korpi, Elias Raninen, Janne M. J. Huttunen
> - **发布时间**：2026-08-07
> - **分类**：eess.SP
> - **原文**：[打开链接](https://arxiv.org/abs/2602.11834)

## 摘要

- 基于 ML 的接收机算法常随空间复用阶数增加扩展性差，且缺乏可解释性与泛化性。
- 提出 EqDeepRx：通过在线性接收机处理中精心注入 ML 块构建的实用深度学习辅助 MIMO 接收机；核心是共享权重 DetectorNN，独立作用于每个空间流或层，实现随复用阶数近似线性扩展。
- 保留传统信道估计并增补轻量 DenoiseNN 学习频域平滑；用并行线性均衡器（LMMSE 与正则化迫零 RZF）降低 DetectorNN 输入维度。
- 5G/6G 兼容端到端仿真显示错误率与频谱效率优于传统基线，保持低复杂度推理且无需重训练即支持不同 MIMO 配置。

## 正文

尽管基于机器学习（ML）的接收机算法在近期文献中备受关注，它们常存在随空间复用阶数增加扩展性差、缺乏可解释性与泛化性的问题。本文提出 EqDeepRx，一个实用的深度学习辅助多输入多输出（MIMO）接收机，通过在线性接收机处理中增补精心设计的 ML 块构建。接收机模型的核心是共享权重 DetectorNN，独立作用于每个空间流或层，从而随复用阶数实现近似线性扩展。为确保更好的可解释性与泛化性，EqDeepRx 保留传统信道估计，并增补一个学习频域平滑的轻量 DenoiseNN。为降低 DetectorNN 输入的维度，接收机并行使用两个线性均衡器：带干扰加噪声协方差估计的线性最小均方误差（LMMSE）均衡器，与正则化迫零（RZF）均衡器。并行均衡流由 DetectorNN 联合消费，随后紧凑的 DemapperNN 为信道解码产生比特对数似然比。跨多种信道场景、导频模式与小区间干扰条件的 5G/6G 兼容端到端仿真显示，相比传统基线，错误率与频谱效率得到改善，同时保持低复杂度推理并支持无需重训练的不同 MIMO 配置。

## 关键词

MIMO 接收机、深度学习、LMMSE、信道估计、5G/6G
