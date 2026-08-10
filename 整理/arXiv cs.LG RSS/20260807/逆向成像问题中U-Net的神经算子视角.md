---
published: 2026-08-07
title: "逆向成像问题中 U-Net 的神经算子视角"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A neural operator view on U-Nets for inverse imaging problems.md"
source_note: "[[信息源/arXiv cs.LG RSS/A neural operator view on U-Nets for inverse imaging problems]]"
source_sha256: 0d03b2cae5f1061f1bab355c8df65a8158df433da4863b701abf19bd4365d0d4
original_url: "https://arxiv.org/abs/2608.05839"
processed: 2026-08-07
language: zh-CN
---

# 逆向成像问题中 U-Net 的神经算子视角

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Alexander Auras, Martin Burger, Samira Kabri, Michael Moeller, Michael Schopf-Kuester
> - **发布时间**：2026-08-07
> - **分类**：math.NA
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05839)

## 摘要

- 综述 U-Net 类架构中神经算子学习的常见方法，讨论各自优缺点。
- 通过 1D 玩具示例提升可解释性，并在有限角度 CT 重建上开展大规模数值实验。
- 研究发现 U 形神经算子架构天然具有分辨率不变性，而经典 U-Net 对分辨率变化的稳健性超出预期。

## 正文

深度神经网络在求解各类病态逆成像问题中展现出显著的实证成功。然而，很少有工作研究其极限行为——即当离散化的病态问题随分辨率提升趋向于真正的不适定问题时。本文综述了类似 U-Net 架构（逆成像问题中最常见的经典架构之一）中神经算子学习的常见方法，讨论了各方法的优缺点，并利用 1D 玩具示例提高可解释性。随后，研究针对不同类型的神经算子 U-Net 如何改进初步（粗略的）有限角度 CT 重建开展了大规模数值实验，特别考察了针对某分辨率训练的网络的跨分辨率泛化能力。研究结论是：尽管 U 形神经算子架构在设计上具有分辨率不变性，但经典 U-Net 架构对分辨率变化的稳健性似乎比预期更强。

## 关键词

神经算子、U-Net、逆成像、CT 重建、分辨率不变性
