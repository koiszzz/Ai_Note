---
published: 2026-08-07
title: "LiteKD-Net：移动图像去噪的轻量知识蒸馏网络"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/LiteKD-Net- Lightweight Knowledge-Distilled Network for Mobile Image Denoising.md"
source_note: "[[信息源/arXiv cs.CV RSS/LiteKD-Net- Lightweight Knowledge-Distilled Network for Mobile Image Denoising]]"
source_sha256: fbc9dfbfcb9a8f8193fe8540a82783a1e498e9ebfd85eb0d01c81e62af810521
original_url: "https://arxiv.org/abs/2608.05739"
processed: 2026-08-07
language: zh-CN
---

# LiteKD-Net：移动图像去噪的轻量知识蒸馏网络

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zhou Zhiyi
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05739)

## 摘要

- 移动图像去噪需要良好恢复质量与低计算成本；收集大规模 LQ-GT 干净对也麻烦；提出 LiteKD-Net：移动图像去噪的轻量知识蒸馏网络。
- 物理引导噪声仿真流水线生成配对训练数据（相对应用于相机的流水线增加像素串扰）；将 Real-ESRGAN 适配到同分辨率去噪，用基于深度可分离卷积的 Lite-RRDB 块构建轻量学生。
- 特征级知识蒸馏将教师恢复能力迁移到学生而不引入额外推理成本。
- 真实数据集实验显示模型大幅缩短运行时间、提高推理速率同时保持良好恢复质量；相对 SwinIR 所有指标最佳；LiteKD-Net 提供恢复质量与计算效率间的良好权衡。

## 正文

移动图像去噪需要良好的恢复质量与较低的计算成本。此外，收集大规模 LQ-GT 干净对也很麻烦。因此，研究提出 LiteKD-Net，一个用于移动图像去噪的轻量知识蒸馏网络。首先，一个物理引导的噪声仿真流水线通过添加像素串扰（pixel crosstalk）——相对应用于相机的流水线——生成配对训练数据。其次，研究将 Real-ESRGAN 适配到同分辨率（identity-resolution）去噪，并使用基于深度可分离卷积的 Lite-RRDB 块构建轻量学生。第三，应用特征级知识蒸馏，将教师的恢复能力迁移到学生，而不引入额外推理成本。真实数据集上的实验表明，模型在保持良好恢复质量的同时大幅减少运行时间并提高推理速率。模型在所有指标上也相对 SwinIR 达到最佳。这些结果表明，LiteKD-Net 在恢复质量与计算效率之间提供了良好的权衡。

## 关键词

图像去噪、知识蒸馏、轻量网络、移动端、Real-ESRGAN
