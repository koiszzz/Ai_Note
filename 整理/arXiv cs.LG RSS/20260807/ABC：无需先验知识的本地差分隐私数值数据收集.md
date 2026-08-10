---
published: 2026-08-07
title: "ABC：无需先验知识的本地差分隐私数值数据收集"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/ABC- Numerical Data Collection under Local Differential Privacy without Prior Knowledge.md"
source_note: "[[信息源/arXiv cs.LG RSS/ABC- Numerical Data Collection under Local Differential Privacy without Prior Knowledge]]"
source_sha256: c453b130181467e94946f4c5e14462226f8d37fb618dddb229d83e1855130142
original_url: "https://arxiv.org/abs/2608.05737"
processed: 2026-08-07
language: zh-CN
---

# ABC：无需先验知识的本地差分隐私数值数据收集

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Incheol Baek, Hyungbin Kim, Yon Dohn Chung
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05737)

## 摘要

- 本地差分隐私（LDP）机制需要预定义数据域，而实践中域通常未知，导致域过窄信息丢失或过宽噪声过大的两难。
- 提出自适应 LDP 框架：用户发送扰动数值与表示原值是否被当前域裁剪的私有化信号。
- ABC（裁剪区域自适应边界）方法迭代调整数据域以适配底层分布，理论上证明估计域收敛到合适范围。
- 实验表明框架在多种数据集与 LDP 机制下显著提升数值数据收集质量，且对超参数稳健。

## 正文

本地差分隐私（LDP）为收集数值数据提供强隐私保证。然而，一个根本挑战是现有 LDP 机制要求预定义数据域，而实践中该域往往未知。缺乏先验知识给数据收集者带来关键两难：若所选域过窄，范围外的值会被裁剪，造成信息损失；反之若域过宽，隐私化过程会加入过多噪声，降低数据质量。这凸显了动态估计数据域方法的必要性。本文提出一个解决该问题的自适应 LDP 框架：每位用户发送两条信息——扰动的数值数据，以及一个表示其原始值是否被当前域裁剪的私有化信号。通过聚合这些信号，所提出的 ABC（裁剪区域自适应边界）方法在无需先验知识的情况下迭代调整数据域以适配底层数据分布。理论分析表明估计的数据域收敛到适当范围。实证评估中，该框架在多种数据集与底层 LDP 机制下显著提升数值数据收集质量；研究还表明估计范围在实践中成功收敛，并通过全面消融实验验证方法对超参数稳健。

## 关键词

本地差分隐私、数值数据收集、自适应域估计、隐私保护
