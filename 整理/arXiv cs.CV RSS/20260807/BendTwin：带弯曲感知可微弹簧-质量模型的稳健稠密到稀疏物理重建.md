---
published: 2026-08-07
title: "BendTwin：带弯曲感知可微弹簧-质量模型的稳健稠密到稀疏物理重建"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/BendTwin- Robust Dense-to-Sparse Physical Reconstruction with Bending-Aware Differentiable Spring-Ma.md"
source_note: "[[信息源/arXiv cs.CV RSS/BendTwin- Robust Dense-to-Sparse Physical Reconstruction with Bending-Aware Differentiable Spring-Ma]]"
source_sha256: 853b6e7ef78072357fd33fc86b57b6883ce7ee51d13e4c08887bb545fc04eb07
original_url: "https://arxiv.org/abs/2608.06164"
processed: 2026-08-07
language: zh-CN
---

# BendTwin：带弯曲感知可微弹簧-质量模型的稳健稠密到稀疏物理重建

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yixiong Jing, Qi Wang, Lin Chen, Junwei Jiang, Guangming Wang, Haibing Wu, Olaf Wysocki, Wanli Ma, Brian Sheil
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06164)

## 摘要

- 从视频观测重建具机械性能的对象实现物理一致的动态预测，惠及机器人规划与交互；现有基于弹簧-质量的物理驱动重建方法提供高效可微物理重建，但通常只依赖轴向弹簧。
- 该形式化过度简化底层结构力学，物理图粗化时可能机械欠约束，限制保持稳定局部形变的能力。
- 提出 BendTwin：视频基可变形对象重建与未来预测的弯曲感知可微弹簧-质量框架；在局部表面三元组上引入弯曲刚度与阻尼，惩罚偏离静止角并正则化高阶形变；弯曲约束改进机械稳定性，同时保持弹簧-质量系统的简洁性。
- 实验显示 BendTwin 一致优于仅轴向的 PhysTwin 基线；消融显示弯曲约束跨不同降采样比维持系统稳定性并一致改进原始 PhysTwin 形式化；从稀疏视图 RGB-D 视频构建机械忠实数字孪生的有效方法。

## 正文

从视频观测重建具有机械性能的对象，可实现物理一致的动态预测，惠及机器人规划与交互。现有基于弹簧-质量的物理驱动重建方法提供高效且可微的物理重建，但它们通常只依赖轴向弹簧。此类形式化过度简化底层结构力学，并且当物理图被粗化时可能机械欠约束，限制其保持稳定局部形变的能力。研究提出 BendTwin，一个用于视频基重建与可变形对象未来预测的弯曲感知可微弹簧-质量框架。BendTwin 在局部表面三元组上引入弯曲刚度与阻尼，惩罚对静止角的偏离并正则化高阶形变。这些弯曲约束改进机械稳定性，同时保持弹簧-质量系统的简洁性。实验表明，BendTwin 一致优于仅轴向的 PhysTwin 基线。消融研究进一步证明，弯曲约束跨不同降采样比维持系统稳定性，并一致改进原始 PhysTwin 形式化。总体而言，BendTwin 为从稀疏视图 RGB-D 视频构建机械忠实的数字孪生提供有效方法。

## 关键词

物理重建、弹簧-质量、弯曲感知、数字孪生、可变形对象
