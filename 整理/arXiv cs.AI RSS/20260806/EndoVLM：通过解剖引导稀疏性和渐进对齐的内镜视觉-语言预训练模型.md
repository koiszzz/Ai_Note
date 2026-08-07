---
published: 20260806
title: "EndoVLM：通过解剖引导稀疏性和渐进对齐的内镜视觉-语言预训练模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive.md"
source_note: "[[信息源/arXiv cs.AI RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive]]"
source_sha256: dd13575bd1aa359323e591f48bb8164144b33c7bff90d877326b78c269e64c11
original_url: "https://arxiv.org/abs/2608.04472"
processed: 2026-08-06
language: zh-CN

---

# EndoVLM：通过解剖引导稀疏性和渐进对齐的内镜视觉-语言预训练模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhenyu Yi, Jianwei Xu, Yue Hu, Zhongwei Qiu, Sijing Li, Liang Huang, Bin Lv, Ling Zhang, Yingda Xia
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04472)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/EndoVLM- An Endoscopy Vision-Language Pre-training Model via Anatomy-Guided Sparsity and Progressive|查看原始文件]]

## 摘要

- 基础模型（FM）的发展对推进内镜图像分析至关重要，但现有内镜 FM 主要依赖单模态图像或视频的自监督学习，忽视临床报告中丰富的语义知识；有效利用这些记录受根本模态差距阻碍：结构化解剖描述未自然映射到高冗余、未策展视觉流中的特定帧。
- 本文呈现 EndoVLM，一个在超 34.8 万次内镜检查（每次配对临床报告与对应图像集合）上预训练的新颖视觉-语言 FM：解剖引导稀疏池化机制用文本描述作为查询驱动稀疏注意力，跨冗余图像集高效聚合语义显著帧为解剖特定视觉表示。
- 渐进语义感知对齐策略通过结构化软目标建模临床分类学（解剖和病理状态），弥合从全局患者级匹配到细粒度局部对齐的差距；语义集中掩码自编码器仅应用于这些语义丰富帧；跨下游任务广泛实验显示 EndoVLM 优于现有基础模型并保持与任务特定方法竞争，且展示稳健零样本泛化。

## 正文

基础模型（FM）的发展对推进内镜图像分析至关重要。然而，现有内镜 FM 主要依赖单模态图像或视频的自监督学习，忽视临床报告中包含的丰富语义知识。此外，有效利用这些记录受根本模态差距阻碍：结构化解剖描述未自然映射到高冗余、未策展视觉流中的特定帧。在本文中，我们呈现 EndoVLM，一个在超 34.8 万次内镜检查（每次配对临床报告与对应图像集合）上预训练的新颖视觉-语言 FM。解剖引导稀疏池化（Anatomy-Guided Sparse Pooling）机制利用文本描述作为查询驱动稀疏注意力，跨冗余图像集高效聚合语义显著帧为解剖特定视觉表示。接下来，渐进语义感知对齐（Progressive Semantic-Aware Alignment）策略通过结构化软目标建模临床分类学（解剖和病理状态），弥合从全局患者级匹配到细粒度局部对齐的差距。最后，语义集中掩码自编码器（Semantic-Concentrated Masked Autoencoder）仅应用于这些语义丰富帧，整合低层视觉精度与稳健高层语义表示。跨各种下游任务的广泛实验表明，EndoVLM 优于现有基础模型，并保持与任务特定方法竞争。值得注意的是，EndoVLM 还展示稳健的零样本泛化能力，突出其更广泛临床应用的潜力。

## 关键词

#内镜 #视觉语言模型 #基础模型 #医学影像 #arXiv