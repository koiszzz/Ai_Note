---
published: 2026-08-07
title: "VISA：3D 占据世界模型的 VLM 引导实例语义审计"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/VISA- VLM-Guided Instance Semantic Auditing for 3D Occupancy World Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/VISA- VLM-Guided Instance Semantic Auditing for 3D Occupancy World Models]]"
source_sha256: 7854f157a7ad9643e9a0f97232002de08c8893281ce509df3ed3ed38687e4490
original_url: "https://arxiv.org/abs/2606.13460"
processed: 2026-08-07
language: zh-CN
---

# VISA：3D 占据世界模型的 VLM 引导实例语义审计

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Ruiqi Xian, Yuehan Xian, Jing Liang, Xuewei Qi, Dinesh Manocha
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2606.13460)

## 摘要

- 语义 3D 占据为自动驾驶与机器人决策提供体素化世界状态，但对象与罕见类错误可影响自由空间解释、碰撞检查与时间状态传播。
- 显示常见 VLM 策略（将 3D 体素或对象特征与裁剪-字幕嵌入对齐）改进文本空间相似性而不可靠改进闭集占据 mIoU；受该错配驱动，提出 VISA：现有占据世界模型的训练时语义审计方法。
- VISA 在离线 VLM 上查询每个物理对象实例的代表性裁剪，获得带类假说、合理混淆、可靠性、属性与证据的结构化审计，并沿对象轨迹传播；审计锚定到匹配 3D 对象体素，经可靠性加权分类学、属性因子与场景级审计图损失蒸馏进语义 logits，推理不变且无需 VLM。
- nuScenes 上三次运行平均：VISA 将 OccWorld 从 19.06 提升至 20.05 mIoU、GaussianWorld 从 21.36 至 21.91 mIoU；GaussianWorld 上对象 mIoU 从 18.18 至 19.16、罕见类 mIoU 从 15.60 至 16.79；VLM 更适合作为闭集占据的可靠性感知语义审计者而非通用字幕嵌入目标。

## 正文

语义 3D 占据为自动驾驶与机器人决策提供了一个体素化的世界状态，但对象与罕见类错误会影响自由空间解释、碰撞检查与时间状态传播。研究显示，一种常见的 VLM 策略——将 3D 体素或对象特征与裁剪-字幕（crop-caption）嵌入对齐——改进了文本空间相似性，却不可靠地改进闭集占据 mIoU。受该错配驱动，研究提出 VISA，一种针对现有占据世界模型的训练时语义审计方法。VISA 在一个离线 VLM 上查询每个物理对象实例的一个代表性裁剪，获得一个带类假说、合理混淆、可靠性、属性与证据的结构化审计，并沿对象轨迹传播。该审计被锚定到匹配的 3D 对象体素，并通过可靠性加权的分类学（taxonomy）、属性因子与场景级审计图损失蒸馏进语义 logits，而推理保持不变且不需要 VLM。在 nuScenes 上，平均三次运行：VISA 将 OccWorld 从 19.06 提升到 20.05 mIoU，GaussianWorld 从 21.36 提升到 21.91 mIoU；在 GaussianWorld 上，对象 mIoU 从 18.18 提升到 19.16，罕见类 mIoU 从 15.60 提升到 16.79。这些结果表明，VLM 更适合作为闭集占据的可靠性感知语义审计者，而非通用的字幕嵌入目标。

## 关键词

3D 占据、世界模型、VLM、语义审计、自动驾驶
