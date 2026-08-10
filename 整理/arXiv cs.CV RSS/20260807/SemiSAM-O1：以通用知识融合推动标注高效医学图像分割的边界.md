---
published: 2026-08-07
title: "SemiSAM-O1：以通用知识融合推动标注高效医学图像分割的边界"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/SemiSAM-O1- Pushing the Boundary of Annotation-Efficient Medical Image Segmentation with Generalist .md"
source_note: "[[信息源/arXiv cs.CV RSS/SemiSAM-O1- Pushing the Boundary of Annotation-Efficient Medical Image Segmentation with Generalist ]]"
source_sha256: 0183c4e30037ad82c9b7de2856c95c725ffcc7aabfb445edfbf985b8f0f5cb6b
original_url: "https://arxiv.org/abs/2604.24109"
processed: 2026-08-07
language: zh-CN
---

# SemiSAM-O1：以通用知识融合推动标注高效医学图像分割的边界

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yichi Zhang, Le Xue, Bichun Xu, Judong Luo, Zhigang Wu, Yu Fu, Zixin Hu, Yuan Cheng, Yuan Qi
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2604.24109)

## 摘要

- 半监督学习（SSL）已成为缓解基于深度学习医学图像分割模型标注负担的有前景方案；基础模型驱动 SSL 近期进展将边界推到极有限标注场景，但在复杂成像模态中无法保持稳健竞争性能。
- 提出 SemiSAM-O1：仅用一个标注模板病例进行分割的标注高效框架；将专家-通用协作学习框架扩展到极端单标签设定，充分利用基础模型超出提示接口的特征表征能力。
- 两阶段运行：第一阶段基础模型编码器从所有体量提取稠密特征，从单一标注模板派生的类原型经特征相似性传播到未标注池，产生粗略初始伪标签；第二阶段迭代训练-精化循环多轮渐进改进分割模型与伪标签，每轮在当前伪标签上从零训练模型并用体素级不确定性估计生成更新预测；不确定性引导精化步骤进一步利用基础模型全局特征空间，经聚合最相似高置信邻居的标签校正高不确定性区域，建立相互改进良性循环。
- 跨不同模态与解剖目标广泛分割任务大量实验显示 SemiSAM-O1 显著缩小单标签半监督学习与全监督间性能差距，同时大幅降低在线基础模型推理计算开销。

## 正文

半监督学习（semi-supervised learning, SSL）已成为缓解基于深度学习的医学图像分割模型标注负担的有前景方案。虽然基础模型驱动的 SSL 近期进展已将边界推到极度有限的标注场景，它们在复杂成像模态中无法保持稳健的竞争性能。本文提出 SemiSAM-O1，一个仅用一个标注模板病例进行分割的标注高效框架。SemiSAM-O1 将专家-通用（specialist-generalist）协作学习框架扩展到极端的单标签设定，充分利用基础模型超出其提示接口的特征表征能力。SemiSAM-O1 分两阶段运行。第一阶段，基础模型的编码器从所有体量中提取稠密特征，从单一标注模板派生的类原型经特征相似性传播到未标注池，产生粗略的初始伪标签。第二阶段，一个迭代训练-精化循环在多轮中渐进改进分割模型与伪标签：每轮在当前的伪标签上从零训练模型，并以体素级不确定性估计生成更新的预测。一个不确定性引导的精化步骤进一步利用基础模型的全局特征空间，通过从最相似的置信邻居聚合标签来校正高不确定性区域，建立相互改进的良性循环。跨不同模态与解剖目标的广泛分割任务的大量实验表明，SemiSAM-O1 显著缩小了单标签半监督学习与全监督之间的性能差距，同时大幅降低在线基础模型推理的计算开销。

## 关键词

半监督学习、医学图像分割、基础模型、单标签、不确定性
