---
published: 2026-08-07
title: "Bar-JEPA：用联合嵌入预测架构从柱状图提取数值"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Bar-JEPA- Extracting Values from Bar Chart with Joint-Embedding Predictive Architecture.md"
source_note: "[[信息源/arXiv cs.CV RSS/Bar-JEPA- Extracting Values from Bar Chart with Joint-Embedding Predictive Architecture]]"
source_sha256: ecf6d2e99f6704d7829650b0a66364e6d26fc9cae5c23cb008ef6ce98fd6c38e
original_url: "https://arxiv.org/abs/2608.06062"
processed: 2026-08-07
language: zh-CN
---

# Bar-JEPA：用联合嵌入预测架构从柱状图提取数值

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Poonam Poonam, Alexander Epple, Timo Ropinski
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06062)

## 摘要

- 柱状图常用于数据可视化，人类易理解，但计算上提取底层数据非平凡；基于机器学习的方法训练图表去渲染模型通常需要标注的真实世界数据；标注耗时，标注数据稀缺。
- 提供高语义质量特征时模型学习更高效，联合嵌入预测架构（JEPA）设计为以自监督方式学习此类特征。
- 提出柱状图逐柱数值恢复流水线：JEPA 编码器产生语义丰富潜特征；消费这些特征的解码模型简单、训练快，输出刻度与柱的坐标，可用于恢复柱值。
- 与端到端监督基线比较，自监督微调的有效性与特征质量明显；代码、数据集与检查点公开。

## 正文

柱状图常用于数据可视化，虽然人类容易理解，但从计算上提取底层数据并不平凡。对基于机器学习的方法，训练图表去渲染（chart de-rendering）模型通常需要标注的真实世界数据。标注数据是耗时的任务，因此标注数据稀缺。当提供高语义质量的特征时，模型可以更高效地学习，而联合嵌入预测架构（joint-embedding predictive architecture, JEPA）被设计为以自监督方式学习此类特征。研究提出一个柱状图逐柱数值恢复流水线：JEPA 编码器用于产生语义丰富的潜特征。消费这些特征的解码模型简单且训练快，输出刻度与柱的坐标，可用于恢复柱值。将模型与端到端监督基线比较时，自监督微调的有效性与提取特征的质量显而易见。代码、数据集与检查点见 GitHub：https://github.com/dralois/Bar-JEPA。

## 关键词

JEPA、柱状图、数据提取、自监督、图表理解
