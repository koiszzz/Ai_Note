---
title: "CLIP-EBC：通过增强分块分类实现精确计数"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CLIP-EBC- CLIP Can Count Accurately through Enhanced Blockwise Classification.md"
source_note: "[[信息源/arXiv cs.AI RSS/CLIP-EBC- CLIP Can Count Accurately through Enhanced Blockwise Classification]]"
source_sha256: 56cb4dc533b7da79e46fbe43c33b88f7e7741e13d316d73b5ad7d58b0a5bc938
original_url: "https://arxiv.org/abs/2403.09281"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CLIP-EBC：通过增强分块分类实现精确计数

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yiming Ma、Victor Sanchez、Tanaya Guha
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2403.09281)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CLIP-EBC- CLIP Can Count Accurately through Enhanced Blockwise Classification|查看原始文件]]

## 摘要

- 提出 CLIP-EBC，首个完全基于 CLIP 的精确人群密度估计模型。
- 提出增强分块分类（EBC）框架：使用整数值分箱减少分箱边界附近的标签模糊，并加入基于密度图的回归损失改善计数值预测；该框架与骨干无关。
- EBC 在 UCF-QNRF 数据集上可使现有基于分类的方法提升最高 44.5%；CLIP-EBC 在 NWPU-Crowd 测试集上取得最优性能，MAE 58.2、RMSE 268.5，较此前最佳方法 STEERER 分别提升 8.6% 与 13.3%。
- 代码与权重已开源：https://github.com/Yiming-M/CLIP-EBC

## 正文

论文编号：arXiv:2403.09281v3（更新类型：cross）。以下为摘要全文翻译。

我们提出 CLIP-EBC，第一个完全基于 CLIP 的精确人群密度估计模型。虽然 CLIP 模型在零样本图像分类等识别任务上取得了显著成功，但由于将计数这类回归问题转化为识别任务存在固有挑战，其计数潜力在很大程度上未被探索。在本工作中，我们研究并增强 CLIP 的计数能力，重点关注从图像估计人群规模的任务。现有的基于分类的人群计数框架存在显著局限，包括把计数值量化为相邻的实值分箱，以及只关注分类误差。这些做法导致共享边界附近的标签模糊，以及计数值预测不准确。因此，直接在这些框架中应用 CLIP 可能产生次优性能。为解决这些挑战，我们首先提出增强分块分类（EBC）框架。与以往方法不同，EBC 使用整数值分箱，有效减少分箱边界附近的模糊性；此外，它引入基于密度图的回归损失来改善计数值预测。在我们与骨干无关的 EBC 框架内，我们进一步提出 CLIP-EBC，以充分利用 CLIP 的识别能力完成该任务。大量实验证明了 EBC 的有效性和 CLIP-EBC 的竞争性能。具体而言，我们的 EBC 框架在 UCF-QNRF 数据集上可将现有基于分类的方法提升最高 44.5%；CLIP-EBC 在 NWPU-Crowd 测试集上取得最先进性能，MAE 为 58.2、RMSE 为 268.5，较此前最佳方法 STEERER 分别提升 8.6% 与 13.3%。代码与权重可在 https://github.com/Yiming-M/CLIP-EBC 获取。

## 关键词

#人群计数 #CLIP #密度估计 #零样本
