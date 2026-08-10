---
published: 2026-08-07
title: "Curia-MAE：3D 医学图像分割的多模态多解剖 MAE 预训练"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Curia-MAE- Multi-Modal Multi-Anatomy MAE Pre-Training for 3D Medical Image Segmentation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Curia-MAE- Multi-Modal Multi-Anatomy MAE Pre-Training for 3D Medical Image Segmentation]]"
source_sha256: 8ac429d3cdc6db9f0cdee6ede294a49c93cd29bd2d5bce46d4fcc86b934ff210
original_url: "https://arxiv.org/abs/2608.05844"
processed: 2026-08-07
language: zh-CN
---

# Curia-MAE：3D 医学图像分割的多模态多解剖 MAE 预训练

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Théo Danielou, Antoine Saporta, Léo Alberge, Corentin Dancette
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05844)

## 摘要

- 放射学基础模型学习可迁移表征，可在冻结编码器上只训练小层适配新任务；但 3D 分割等稠密预测任务在其评估中代表性不足，编码器冻结时预训练模型仍不如从零训练的 SOTA 参考 nnU-Net。
- 扩展卷积 MAE 预训练：稳健重建目标、特征正则化器与局部-全局相似性目标；据此提出 Curia-MAE：多模态、多解剖 MAE 模型，在 30 万 CT 与 MRI 图像上预训练，覆盖大量解剖部位。
- 八个解剖与病灶聚焦分割基准上，Curia-MAE 改进冻结编码器性能（相对强 MAE 基线），完全微调下保持竞争性，标注数据稀缺的病灶任务上更优。
- 单个冻结编码器可跨多样分割任务复用，降低临床工作流适配与部署成本；预训练权重将公开。

## 正文

放射学基础模型学习可迁移的表征，可通过在冻结编码器之上只训练小层来适配新任务。然而，3D 分割等稠密预测任务在其评估中代表性不足，且编码器保持冻结时，预训练模型仍不如从零训练的最先进参考 nnU-Net。为弥合该差距，研究扩展卷积 MAE 预训练：稳健重建目标、特征正则化器与局部-全局相似性目标。用该方法提出 Curia-MAE，一个多模态、多解剖 MAE 模型，在 300,000 张覆盖大量解剖部位的 CT 与 MRI 图像上预训练。在八个解剖与病灶聚焦的分割基准上，Curia-MAE 将冻结编码器性能提升到强 MAE 基线之上，完全微调下保持竞争性，并在标注数据稀缺的病灶任务上更优。这些结果表明，单个冻结编码器可以跨多样分割任务复用，降低临床工作流中适配与部署此类模型的成本。研究将公开预训练模型权重。

## 关键词

MAE、医学图像分割、预训练、多模态、CT/MRI
