---
published: 2026-08-07
title: "Align-RAG：对齐是 TSFM 上下文学习所需的一切"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Align-RAG- Alignment Is All You Need for TSFM In-Context Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Align-RAG- Alignment Is All You Need for TSFM In-Context Learning]]"
source_sha256: 1db436c69b8ee3a8f0c0a7759aac52ca5bea8a2af7b215936ecb181c98645f3b
original_url: "https://arxiv.org/abs/2608.05571"
processed: 2026-08-07
language: zh-CN
---

# Align-RAG：对齐是 TSFM 上下文学习所需的一切

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Mohammad Asadi, Soheil Hor, Bardiya Akhbari, Jack W. O'Sullivan, Tahoura Nedaee, Layne C. Price, Raviteja Anantha, Euan Ashley, Ehsan Adeli
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05571)

## 摘要

- 提出 Align-RAG：免训练方法，对检索到的过去-未来窗口施加闭式逐对幅度重缩放与整数滞后相位平移，再送入冻结骨干的上下文。
- 在冻结 Chronos-Bolt 上，7 个标准基准数据集平均 MSE 降低 3.75%，超越经训练的检索适配器。
- 对四种冻结 TSFM，零样本 MSE 进一步提升 2.5%–13.7%，无需逐骨干调参。
- 对齐演示引发的预测偏移追踪同一窗口的闭式岭预测，说明冻结 TSFM 已支持动态上下文检索，闭式对齐应成为检索增强预测的默认基线。

## 正文

检索增强预测有望在不微调的情况下将冻结的时间序列基础模型（TSFM）适配到新领域，但近期方法通常依赖学习型融合模块（即把检索示例并入骨干预测的训练适配器），其假设是冻结骨干无法自行动态融入检索上下文。本文证明该假设不必要。研究提出 Align-RAG，一种免训练方法：对检索到的过去-未来窗口施加闭式逐对幅度重缩放与整数滞后相位平移，再将其送入冻结骨干的上下文。在无任何学习参数的情况下，Align-RAG 在冻结 Chronos-Bolt 上于标准基准的全部 7 个数据集超越最优的经训练检索适配器（平均 MSE 降低 3.75%），表明先前归因于学习型融合的增益无需任何训练即可恢复。Align-RAG 还在 4 个架构各异的额外冻结 TSFM 上将零样本 MSE 提升 2.5%–13.7%（按骨干计），无需逐骨干调参。为探究对齐为何有效，研究将冻结骨干在对齐演示下的预测偏移与同一窗口上的闭式岭预测偏移进行比较，发现对齐演示引发的预测偏移追踪同一窗口的闭式岭预测器；未来乱序对照排除了"未来平均"解释。综合来看，这些结果表明冻结 TSFM 已支持检索的动态上下文使用，闭式对齐应成为训练任何融合模块之前检索增强预测的默认基线。代码见 https://github.com/masadi-99/align-rag。

## 关键词

时间序列基础模型、检索增强、上下文学习、对齐、预测
