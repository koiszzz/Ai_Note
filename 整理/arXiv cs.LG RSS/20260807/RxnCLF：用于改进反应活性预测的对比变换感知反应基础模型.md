---
published: 2026-08-07
title: "RxnCLF：用于改进反应活性预测的对比变换感知反应基础模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/RxnCLF- Contrastive Transformation-Aware Reaction Foundation Model for Improved Reactivity Predictio.md"
source_note: "[[信息源/arXiv cs.LG RSS/RxnCLF- Contrastive Transformation-Aware Reaction Foundation Model for Improved Reactivity Predictio]]"
source_sha256: 64627926bef30fe64da967d2d9e923eaa4ff95b0c2d256c463534cf57c0b5a2e
original_url: "https://arxiv.org/abs/2608.06259"
processed: 2026-08-07
language: zh-CN
---

# RxnCLF：用于改进反应活性预测的对比变换感知反应基础模型

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yiting Zheng, Cheng Fang, Anthony Donofrio, Haote Li
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06259)

## 摘要

- 反应产率预测仍具挑战：标注数据稀缺、反应空间组合巨大且稀疏填充，限制现有反应表征的泛化；字符串、指纹与图基反应编码只部分捕捉化学变换，使复杂底物反应的准确预测困难。
- 提出反应对比学习基础（RxnCLF）：反应表征学习的自监督对比框架；基于凝结反应图（CRG）构建，将反应物与产物信息统一进单图，使模型学习显式、丰富的变换结构而非断开的图。
- 在 170 万 Pistachio 反应上预训练，学习捕捉反应中心特征与更广侧链上下文的紧凑连续潜空间，变换感知且化学可解释。
- 在 Buchwald-Hartwig、Pd 催化 BH 偶联与专有 HTE C-N 偶联和酰胺形成数据集等多个产率预测基准上微调，一致优于图与序列基线，提升 R2 并取得最佳总体性能；有潜力泛化到更广反应空间，支持区域选择性、对映选择性预测与反应条件优化等下游任务。

## 正文

反应产率预测仍然具有挑战性：标注数据稀缺，反应空间组合巨大且稀疏填充，限制现有反应表征的泛化。字符串、指纹与基于图的反应编码只能部分捕捉化学变换，使带复杂底物的反应难以准确预测。研究提出反应对比学习基础（reaction contrastive learning foundation, RxnCLF），一个用于反应表征学习的自监督对比框架。RxnCLF 构建于凝结反应图（condensed reaction graph, CRG）：将反应物与产物信息统一进单个图，使模型学习显式且丰富的变换结构，而非断开的图。在 170 万 Pistachio 反应上预训练，RxnCLF 学习一个紧凑且连续的潜空间，捕捉反应中心特征与更广泛的侧链上下文，使其变换感知且化学可解释。在包括 Buchwald-Hartwig、Pd 催化 BH 偶联以及专有 HTE C-N 偶联与酰胺形成数据集在内的多个产率预测基准上微调，RxnCLF 一致优于图基与序列基基线，提升 R2 并取得最佳总体性能。结果凸显基于 CRG 的 RxnCLF 作为可扩展反应基础模型的潜力，有望泛化到更广反应空间，并支持包括区域选择性预测、对映选择性预测与反应条件优化在内的多样下游反应信息学任务。

## 关键词

化学反应、对比学习、基础模型、产率预测、表征学习
