---
published: 2026-08-07
title: "DistMedVL：不确定性感知医学图像分割的分布性视觉语言对齐"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DistMedVL- Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation.md"
source_note: "[[信息源/arXiv cs.CV RSS/DistMedVL- Distributional Vision-Language Alignment for Uncertainty-Aware Medical Image Segmentation]]"
source_sha256: 28cf62105d8eeef15fff5065b18add306f27907cce22e9fdafbd9fc2ade0ddaf
original_url: "https://arxiv.org/abs/2608.05683"
processed: 2026-08-07
language: zh-CN
---

# DistMedVL：不确定性感知医学图像分割的分布性视觉语言对齐

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Jiaxuan Li, Qing Xu, Xiangjian He, Yue Li, Daokun Zhang, Fiseha B. Tesema, Rong Qu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05683)

## 摘要

- 视觉与文本表征的跨模态对齐是多模态医学图像理解的基础，但真实临床条件下两模态的不确定性仍阻碍；现有视觉语言分割方法依赖确定性跨模态匹配，忽视模糊边界的偶然不确定性与有限训练数据的认知不确定性，导致域漂移下性能脆弱。
- 提出 DistMedVL：概率视觉语言框架，在冻结编码器上引入轻量概率跨模态适配器（PCM-Adapter）显式建模表征不确定性。
- PCM-Adapter 由两个序贯模块进行渐进概率对齐：马氏对齐模块（MAM）将文本 token 建模为高斯分布，用马氏距离计算补丁-文本兼容性，产生方差条件化匹配（降低不可靠特征维度权重）；分布流模块（DFM）估计逐模态置信参数并执行视觉引导的文本分布精化，适应跨成像模态的分布变化。
- 八个医学分割基准大量实验显示 DistMedVL 仅 6.3M 可训练参数即超越 SOTA，表现优异数据效率、扰动稳健性与跨数据集泛化。

## 正文

视觉与文本表征的跨模态对齐是多模态医学图像理解的基础，然而在真实临床条件下，两个模态的不确定性仍阻碍它。现有视觉语言分割方法依赖确定性跨模态匹配，忽视来自模糊边界的偶然不确定性（aleatoric uncertainty）与来自有限训练数据的认知不确定性（epistemic uncertainty），导致域漂移下性能脆弱。为解决该问题，研究提出 DistMedVL，一个概率视觉语言框架：在冻结编码器之上引入轻量概率跨模态适配器（Probabilistic Cross-Modal Adapter, PCM-Adapter），显式建模表征不确定性。具体地，PCM-Adapter 由两个序贯模块组成，进行渐进概率对齐。研究首先设计马氏对齐模块（Mahalanobis Alignment Module, MAM）：将文本 token 建模为高斯分布，经马氏距离计算补丁-文本兼容性，产生方差条件化匹配，降低不可靠特征维度的权重。此外，研究设计分布流模块（Distribution Flow Module, DFM）：估计逐模态置信参数，执行视觉引导的文本分布精化，适应跨成像模态的分布变化。八个医学分割基准上的大量实验表明，DistMedVL 仅用 6.3M 可训练参数即超越最先进方法，展现优异的数据效率、扰动稳健性与跨数据集泛化。

## 关键词

医学图像分割、视觉语言、不确定性、概率对齐、马氏距离
