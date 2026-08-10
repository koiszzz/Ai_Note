---
published: 2026-08-07
title: "Recti-Q：边缘机器人分布外稳健量化感知的特征空间矫正"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Recti-Q- Feature-Space Rectification for Out-of-Distribution-Robust Quantized Perception in Edge Rob.md"
source_note: "[[信息源/arXiv cs.CV RSS/Recti-Q- Feature-Space Rectification for Out-of-Distribution-Robust Quantized Perception in Edge Rob]]"
source_sha256: 71d266c24bf288f04df4ce0797f6e32bce6ff5fdd6e771d5dca6f5c9c1fd5fd3
original_url: "https://arxiv.org/abs/2607.18540"
processed: 2026-08-07
language: zh-CN
---

# Recti-Q：边缘机器人分布外稳健量化感知的特征空间矫正

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Hamidreza Yaghoubi Araghi, Parastoo Pilevar, Ming C. Lin
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.18540)

## 摘要

- 机器人感知流水线日益依赖部署在 SWaP 受限边缘平台的大型视觉骨干，使训练后量化（PTQ）对实时推理有吸引力。
- PTQ 常保持干净的分布内精度，但展示它可在部署相关分布漂移（传感器噪声、恶劣天气、新运行环境）下大幅退化可靠性，产生量化诱导稳健性差距；ImageNet-C 与 PACS 上 4-bit PTQ 模型在 ID 精度损失可忽略的情况下表现出显著稳健性退化。
- 提出 Recti-Q：轻量特征空间矫正框架，冻结量化骨干并仅用源数据训练小型分类头 LoRA 适配器；跨 CNN 与 transformer 架构无关，支持高效无教师训练，恢复大部分丢失稳健性，某些情况匹配或超越 FP32 性能。
- 参数开销低于 1%（小至 6 KB），保留 PTQ 内存节省的 99% 以上，增加可忽略计算，并支持对部署于不可预测物理环境的机器人车队的低带宽空中（OTA）稳健性补丁。

## 正文

机器人感知流水线日益依赖部署在 SWaP（尺寸、重量与功耗）受限边缘平台上的大型视觉骨干，使训练后量化（PTQ）对实时推理有吸引力。然而，虽然 PTQ 常保留干净的分布内精度，研究展示它可在部署相关的分布漂移（如传感器噪声、恶劣天气与新颖运行环境）下大幅退化可靠性，产生量化诱导的稳健性差距（Quantization-Induced Robustness Gap）。在基础视觉基准（ImageNet-C 与 PACS）上，4-bit PTQ 模型在 ID 精度损失可忽略的情况下表现出显著的稳健性退化。为解决该问题，研究提出 Recti-Q，一个轻量特征空间矫正框架：冻结量化骨干，仅用源数据训练小型分类头 LoRA 适配器。Recti-Q 跨 CNN 与 Transformer 架构无关，支持高效的无教师训练，并恢复丢失稳健性的显著部分——某些情况下匹配或超越 FP32 性能。在低于 1% 的参数开销（小至 6 KB）下，Recti-Q 保留 PTQ 内存节省的 99% 以上，增加可忽略的计算，并支持对运行于不可预测物理环境的已部署机器人车队的低带宽空中（OTA）稳健性补丁。

## 关键词

量化、分布外稳健性、边缘机器人、LoRA、PTQ
