---
published: 2026-08-07
title: "Surv-IPTB：用生存数据估计个体治疗获益概率的注意力模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Surv-IPTB- An Attention-Based Model for Estimating Individual Probability of Treatment Benefit with .md"
source_note: "[[信息源/arXiv cs.LG RSS/Surv-IPTB- An Attention-Based Model for Estimating Individual Probability of Treatment Benefit with ]]"
source_sha256: fad3bf2d67d2f7d835331cc583c7f37e18f944bc660f00e36f1fbd4057581ff1
original_url: "https://arxiv.org/abs/2608.06288"
processed: 2026-08-07
language: zh-CN
---

# Surv-IPTB：用生存数据估计个体治疗获益概率的注意力模型

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Lev V. Utkin, Stanislav K. Kogan, Andrei V. Konstantinov
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06288)

## 摘要

- 提出生存分析情境下估计个体治疗获益概率（IPTB）的新颖注意力框架；模型 Surv-IPTB 直接量化特定患者在治疗对比对照下获得更长生存时间的概率。
- 将 IPTB 估计重构为二分类问题，利用治疗与对照队列间的成对患者比较；通过不精确概率表示原则性处理右删失观测，不确定治疗效应以区间值概率刻画。
- 带可学习查询-键变换的注意力机制实现灵活、数据驱动的成对比较聚合，同时为删失病例学习软类概率。
- 合成数据集（螺旋、钟形与圆形特征空间等复杂非线性结构）大量实验显示方法在变化删失率与治疗效应强度下保持稳健性能；一致优于带随机生存森林、Cox 比例风险与 Beran 估计器的元学习者基线（T-learner 与 S-learner），尤其常规方法显著退化的挑战性非线性场景；代码公开。

## 正文

本文提出生存分析情境下估计个体治疗获益概率（Individual Probability of Treatment Benefit, IPTB）的新颖注意力框架。所提模型 Surv-IPTB 直接量化特定患者在治疗对比对照下经历更长生存时间的概率。研究将 IPTB 估计重构为二分类问题，利用治疗与对照队列之间的成对患者比较。框架通过不精确概率表示原则性地处理右删失观测，不确定的治疗效应以区间值概率刻画。带可学习查询-键变换的注意力机制实现灵活、数据驱动的成对比较聚合，同时为删失病例学习软类概率。在具有复杂非线性结构（包括螺旋、钟形与圆形特征空间）的合成数据集上开展的大量实验表明，该方法在变化的删失率与治疗效应强度下保持稳健性能。模型一致优于配备随机生存森林、Cox 比例风险与 Beran 估计器的元学习者基线（T-learner 与 S-learner），尤其在常规方法显著退化的挑战性非线性场景中。结果确立所提注意力框架为生存设定下个性化治疗获益评估的可扩展、统计上有原则的解决方案。实现模型的代码公开可用。

## 关键词

生存分析、治疗获益、注意力、删失、个性化医疗
