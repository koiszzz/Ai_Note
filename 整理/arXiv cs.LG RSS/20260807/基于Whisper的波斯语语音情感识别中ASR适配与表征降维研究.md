---
published: 2026-08-07
title: "基于 Whisper 的波斯语语音情感识别中 ASR 适配与表征降维研究"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Reco.md"
source_note: "[[信息源/arXiv cs.LG RSS/A Study of ASR Adaptation and Representation Dimensionality Reduction in Persian Speech Emotion Reco]]"
source_sha256: 34a69a6c449cad1ac7eb3af0675a004105f22ff230eaac64a93002d3f1a9e157
original_url: "https://arxiv.org/abs/2608.05165"
processed: 2026-08-07
language: zh-CN
---

# 基于 Whisper 的波斯语语音情感识别中 ASR 适配与表征降维研究

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Ali Shendabadi, Parnia Izadirad, Mostafa Salehi
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05165)

## 摘要

- 提出面向波斯语语音情感识别（SER）的框架：用 PCA 对 Whisper 编码器的帧级嵌入降维，省去学习型投影层，大幅减少可训练参数。
- 降维后的表征经注意力池化聚合，由轻量预测头分类。
- 在 ShEMO 数据集、说话人无关协议下，PCA 降维一致提升情感识别性能，同时降低训练延迟与内存占用。
- 波斯语 ASR 微调对 SER 仅有小幅增益，说明语言适配对情感表征的迁移有限。

## 正文

在低资源语言中，语音情感识别（SER）因标注数据有限而仍是难题。本文研究 Whisper 用于波斯语 SER，重点关注表征降维与语言特定模型适配。研究提出一个 SER 框架：从 Whisper 编码器提取的帧级嵌入经 PCA 降维，无需学习型投影层，大幅减少可训练参数；降维表征通过基于注意力的池化机制聚合，由轻量预测头分类。此外，研究考察在波斯语自动语音识别（ASR）任务上微调 Whisper 是否提升下游 SER 性能。在 ShEMO 数据集、说话人无关评估协议下的实验表明：PCA 降维一致提升情感识别性能，同时降低训练延迟与内存占用；ASR 微调对 SER 仅带来小幅增益，说明在评估条件下语言适配到情感表征的迁移有限。这些发现为低资源语言中高效利用大型预训练语音模型进行情感识别提供了实践洞见。

## 关键词

语音情感识别、Whisper、PCA、低资源语言、ASR 适配
