---
published: 2026-08-07
title: "MSA-DCNN：数据高效的医学图像分类多尺度注意力可变形 CNN"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MSA-DCNN- A Data-Efficient Multi-Scale Attention Deformable CNN for Medical Image Classification.md"
source_note: "[[信息源/arXiv cs.CV RSS/MSA-DCNN- A Data-Efficient Multi-Scale Attention Deformable CNN for Medical Image Classification]]"
source_sha256: 78ca9cf8f41f1577289c210fc9dca8be56286f5d719e4a4c34c5f3a209ebb0b6
original_url: "https://arxiv.org/abs/2607.06083"
processed: 2026-08-07
language: zh-CN
---

# MSA-DCNN：数据高效的医学图像分类多尺度注意力可变形 CNN

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hamza Hussaini, Shahana Bano, Eyad Elyan, Carlos Francisco Moreno-García
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.06083)

## 摘要

- 现有深度学习方法在医学图像分类表现良好，但固定采样与数据饥饿训练使其难处理多尺度形态与有限标注；现有方法孤立应对：DCN 基模型提供自适应采样但缺乏显式多尺度注意力融合与标签高效正则化；多尺度架构通常依赖静态融合；半监督方法针对标签稀缺但不联合建模自适应跨尺度表征。
- 提出 MSA-DCNN：尺度一致可变形注意力学习框架，在统一优化方案中引入自适应多尺度采样、尺度内显著性精化、学习跨尺度融合与辅助自蒸馏，有潜力泛化到结构异构解剖。
- 三个公开基准与白血病外部保留集评估：MSA-DCNN 在分布漂移与标签稀缺下相对 ViT 基线、CNN 基线与 MICCAI 半监督基线在准确率、F1 与 AUC（二分类）竞争且常更优，参数更少。
- 消融确认互补组件贡献，支持 MSA-DCNN 作为数据高效医学图像分类的实用基础。

## 正文

现有深度学习方法在医学图像分类中表现良好，但因固定采样与数据饥饿的训练，难以处理多尺度形态与有限标注。现有方法孤立应对这些挑战：基于 DCN 的模型提供自适应采样，但缺乏显式多尺度注意力融合与标签高效正则化；多尺度架构通常依赖静态融合；半监督方法针对标签稀缺，但不联合建模自适应的跨尺度表征。研究提出 MSA-DCNN，一个尺度一致的可变形注意力学习框架：在统一优化方案中引入自适应多尺度采样、尺度内显著性精化、学习跨尺度融合与辅助自蒸馏，并有潜力泛化到结构异构的解剖。研究在三个公开基准与一个白血病外部保留集上评估。MSA-DCNN 在分布漂移与标签稀缺下，于准确率、F1 与 AUC（二分类）方面相对 ViT 基线、CNN 基线与一个 MICCAI 半监督基线表现竞争且常常更好，同时使用更少参数。消融确认互补组件的贡献，支持 MSA-DCNN 作为数据高效医学图像分类的实用基础。

## 关键词

医学图像分类、可变形 CNN、多尺度、注意力、数据高效
