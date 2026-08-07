---
published: 2026-08-06
title: DSeq-JEPA：判别式序列联合嵌入预测架构
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/DSeq-JEPA- Discriminative Sequential Joint-Embedding Predictive Architecture.md
source_note: "[[信息源/arXiv cs.CV RSS/DSeq-JEPA- Discriminative Sequential Joint-Embedding Predictive Architecture]]"
source_sha256: c7cda663d511b9f8e6599bfebf11ba2bcca35e4aea9f80a3fc48bf3ed4535616
original_url: https://arxiv.org/abs/2511.17354
processed: 2026-08-07
language: zh-CN
---

# DSeq-JEPA：判别式序列联合嵌入预测架构

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.17354)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/DSeq-JEPA- Discriminative Sequential Joint-Embedding Predictive Architecture|查看原始文件]]

## 摘要

- 自监督视觉表示学习的最新进展证明了预测式潜空间目标（predictive latent-space objectives）在学习可迁移特征方面的有效性，其中 I-JEPA 通过从可见上下文中预测被掩蔽目标区域的潜嵌入来学习表示。
- 但 I-JEPA 并行、一次性预测所有目标区域，缺乏有意义地排序预测的能力。
- 受人类视觉感知（从主要线索到次要线索的选择性、渐进式注意）启发，提出 DSeq-JEPA，一种衔接潜空间预测与自回归自监督学习的判别式序列联合嵌入预测架构。
- 在图像分类（ImageNet）、细粒度视觉分类（iNaturalist21、CUB、Stanford Cars）、检测/分割（MS-COCO、ADE20K）及低级推理（CLEVR）等任务上的大量实验表明，DSeq-JEPA 相比 I-JEPA 变体始终能学到更具判别性和泛化性的表示。

## 正文

自监督视觉表示学习的最新进展已经证明了预测式潜空间目标在习得可迁移特征方面的有效性。特别是，基于图像的联合嵌入预测架构（I-JEPA）通过从可见上下文中预测被掩蔽目标区域的潜嵌入来学习表示。然而，它是并行地、一次性预测所有目标区域，缺乏有意义地排序预测的能力。受人类视觉感知的启发——人类视觉感知会从主要线索到次要线索进行选择性、渐进式的关注——我们提出了 Dseq-JEPA，一种判别式序列联合嵌入预测架构，它将潜空间预测与自回归自监督学习衔接起来。具体而言，Dseq-JEPA 将判别式排序的序列过程与 JEPA 风格的学习目标整合在一起。这通过以下方式实现：（i）使用由注意力导出的显著性图（作为视觉重要性的代理）识别主要的判别区域；（ii）按判别顺序预测后续区域，在预训练中引入一种类似课程学习的、从主要线索到次要线索的语义递进。跨任务的广泛实验——包括图像分类（ImageNet）、细粒度视觉分类（iNaturalist21、CUB、Stanford Cars）、检测/分割（MS-COCO、ADE20K）和低级推理（CLEVR）——表明 Dseq-JEPA 相比 I-JEPA 变体始终能学到更具判别性和可泛化的表示。

## 关键词

#自监督学习 #联合嵌入预测 #JEPA #自回归 #表示学习
