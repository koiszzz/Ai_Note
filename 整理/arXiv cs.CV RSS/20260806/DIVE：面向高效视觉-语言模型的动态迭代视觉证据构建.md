---
published: 2026-08-06
title: DIVE：面向高效视觉-语言模型的动态迭代视觉证据构建
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models]]"
source_sha256: 371000023d91dddc048ae756c058bafd5bef6b93d537a1b05bc27631bf766172
original_url: https://arxiv.org/abs/2608.04496
processed: 2026-08-07
language: zh-CN
---

# DIVE：面向高效视觉-语言模型的动态迭代视觉证据构建

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04496)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/DIVE- Dynamic Iterative Visual Evidence Construction for Efficient Vision-Language Models|查看原始文件]]

## 摘要

- 视觉输入在视觉-语言模型（VLM）中通常被编码为比文本长得多的 token 序列，视觉 token 成为高效推理的主要瓶颈。
- 现有方法多为单次（one-shot）打分剪枝，但 token 的提示相关性取决于已保留的证据，一次性打分并不充分。
- DIVE 将视觉 token 剪枝重构为动态证据构建：反复选择残差条件化得分最高的剩余 token，更新视觉与提示残差，并重新评估剩余 token，从而构建互补、提示相关的证据集合。
- 在八个图像理解基准上，视觉 token 削减 88.9% 时，DIVE 仍保留了未压缩模型平均性能的 98.2%。

## 正文

视觉-语言模型（VLM）中的视觉输入通常被编码为比文本长得多得多的 token 序列，这使得视觉 token 成为高效推理的主要瓶颈。大量近期方法通过给 token 的重要性打分并在单次遍历中剪除低分 token 来解决这一瓶颈。然而，单次打分是不够的，因为一个 token 与提示相关的有用性取决于已经保留的证据。受这一见解的启发，我们提出了 DIVE（Dynamic Iterative Visual Evidence Construction，动态迭代视觉证据构建），一个免训练框架，将视觉 token 剪枝重构为动态证据构建。DIVE 反复选择残差条件化得分最高的剩余 token，更新视觉与提示残差以折扣掉已被解释的证据，并重新评估剩余的 token。这种"选择-更新-重新评估"的过程构建了一个由互补的、与提示相关的证据组成的保留集合。在八个图像理解基准上的实验表明，DIVE 在各种 token 预算下都能始终如一地保持性能。在视觉 token 削减 88.9% 的情况下，DIVE 保留了未压缩模型平均性能的 98.2%。代码可在 https://github.com/Zhong-Chenchen/DIVE.git 获取。

## 关键词

#视觉语言模型 #Token剪枝 #高效推理 #动态证据构建 #模型压缩
