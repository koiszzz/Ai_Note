---
published: 2026-08-05
title: "面向数据高效 RL 对齐的宪章网格仪器（C-Guard）"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Constitution-Grid Instrument for Data-Efficient RL Alignment (C-Guard).md"
source_note: "[[信息源/arXiv cs.LG RSS/A Constitution-Grid Instrument for Data-Efficient RL Alignment (C-Guard)]]"
source_sha256: 50c97a484bb22b84b27b329027cacc7090f9a669b5033044f8e4877df87c14c8
original_url: "https://arxiv.org/abs/2608.00180"
processed: 2026-08-05
language: zh-CN
---

# 面向数据高效 RL 对齐的宪章网格仪器（C-Guard）

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Xianling Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00180)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/A Constitution-Grid Instrument for Data-Efficient RL Alignment (C-Guard)|查看原始文件]]

## 摘要

- 提出 C-Guard，生成 RL 训练数据的宪章网格仪器，以及 C-LIM，逐单元可学习性分数：决定每个单元的动作（剪枝、致密化、修订、扩展）——C-LIM 在任何训练预算花费前标记无价值数据区域：187 个非定向行曾买来零增益，方法把同区域学习影响从 0.733 提升到 0.80。
- 冲突目标在 RL 对齐中普遍，对其数据高效训练困难：用 RL 训练安全守卫意味着优化两个冲突目标——捕获真实危害与不拒绝良性提示。
- 发现：过度拒绝从 22.4% 改善到 12.8%，而对抗攻击上的欠拒绝悄然恶化（0.27 到 0.33）。
- 代码与宪章开源。

## 正文

论文编号：arXiv:2608.00180v2（更新类型：replace-cross）。以下为摘要全文翻译。

冲突目标在 RL 对齐中普遍存在，而对其训练数据高效地训练很困难。用 RL 训练一个安全守卫意味着优化两个相互冲突的目标：捕获真实的危害，且不拒绝良性的提示。我们的发现是：过度拒绝从 22.4% 改善到 12.8%，而对对抗攻击的欠拒绝悄然恶化（0.27 到 0.33）。我们提出 C-Guard，一个生成 RL 训练数据的宪章网格仪器，以及 C-LIM，一个逐单元可学习性分数：决定每个单元的动作——剪枝、致密化、修订、扩展。C-LIM 在任何训练预算花费之前标记无价值数据区域：187 个非定向行曾买来零增益，而我们的方法把同一区域的学习影响从 0.733 提升到 0.80。代码与宪章已开源。

## 关键词

#RL对齐 #安全守卫 #数据效率 #宪章
