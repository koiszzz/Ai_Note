---
published: 2026-08-06
title: DIVE：面向高效视觉-语言模型的动态迭代视觉证据构建
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models.md
source_note: "[[信息源/arXiv cs.LG RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models]]"
source_sha256: ce6581c5da16de7d2146ad446f4e477f9ca435af985182c4cee9ab3afedbbab5
original_url: https://arxiv.org/abs/2608.04496
processed: 2026-08-07
language: zh-CN
---

# DIVE：面向高效视觉-语言模型的动态迭代视觉证据构建

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04496)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models|查看原始文件]]

## 摘要

- 提出 DIVE，无需训练的框架，将视觉词元剪除重构为动态证据构建
- 选择-更新-再评估过程：反复选择残差条件分数最高词元，折减已解释证据
- 八个图像理解基准上跨词元预算一致保持性能
- 视觉词元减少 88.9% 时仍保留未压缩模型平均性能的 98.2%

## 正文

视觉-语言模型（VLM）中的视觉输入通常被编码为比文本长得多的词元序列，使视觉词元成为高效推理的主要瓶颈。近期大量方法通过对词元重要性打分并在单次扫描中剪除低分词元来解决这一瓶颈。

然而，单次打分是不够的，因为词元与提示相关的有用性取决于已保留的证据。受这一洞察的启发，我们提出 DIVE（动态迭代视觉证据构建），一个无需训练的框架，将视觉词元剪除重构为动态证据构建。

DIVE 反复选择剩余词元中残差条件分数最高的词元，更新视觉与提示残差以折减已被解释的证据，并重新评估剩余词元。这种选择-更新-再评估的过程构建了一个互补的、与提示相关的证据保留集。

在八个图像理解基准上的实验表明，DIVE 在各种词元预算下都能保持一致地保留性能。在视觉词元减少 88.9% 的情况下，DIVE 保留了未压缩模型平均性能的 98.2%。代码可在 https://github.com/Zhong-Chenchen/DIVE.git 获取。

## 关键词

#视觉语言模型 #词元剪枝 #推理效率 #证据构建
