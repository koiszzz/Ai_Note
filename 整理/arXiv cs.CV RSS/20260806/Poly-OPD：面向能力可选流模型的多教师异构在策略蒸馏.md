---
published: 2026-08-06
title: Poly-OPD：面向能力可选流模型的多教师异构在策略蒸馏
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Poly-OPD- Heterogeneous Multi-Teacher On-Policy Distillation for Capability-Selectable Flow Models.md
source_note: "[[信息源/arXiv cs.CV RSS/Poly-OPD- Heterogeneous Multi-Teacher On-Policy Distillation for Capability-Selectable Flow Models]]"
source_sha256: 6cd63eff954cac24cb492d3a146bf93a3ef86a98d03718b7831698b0fea46e4e
original_url: https://arxiv.org/abs/2608.04349
processed: 2026-08-07
language: zh-CN
---

# Poly-OPD：面向能力可选流模型的多教师异构在策略蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04349)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Poly-OPD- Heterogeneous Multi-Teacher On-Policy Distillation for Capability-Selectable Flow Models|查看原始文件]]

## 摘要

- 提出 Poly-OPD：将异构文生图教师的互补优势整合进单一紧凑的流匹配学生模型。
- 通过像素桥与冻结 DINOv2 空间监督弥合教师间不相容的潜在空间；用梯度兼容性诊断组织适配器（注意力 LoRA 共享、前馈适配器教师特定）。
- 将 FLUX.1-dev 与 Z-Image 蒸馏进 2.5B SD3.5-Medium 学生：GenEval 67.3→73.3、DrawBench HPSv3 9.34→11.35，超越两个更大教师。

## 正文

领先的开源文生图模型往往具有互补优势：一个可能擅长偏好对齐的美学，而另一个则更忠实地遵循组合指令。然而，它们在自编码器和噪声调度上的差异使得跨模型迁移这些优势变得困难。本文提出 Poly-OPD，一个能将异构教师的互补优势整合到单一紧凑流匹配学生模型中的框架。为弥合不同教师之间的不相容潜在空间，Poly-OPD 通过像素桥执行在策略蒸馏。每个学生生成的图像由选定教师的编码器重新编码，并在该教师的噪声调度下从幅度匹配的噪声水平开始细化。所得目标进一步在冻结的 DINOv2 空间中与学生对齐，从而能在不相容的潜在空间之间进行监督。为在不产生跨教师干扰的情况下保留互补能力，Poly-OPD 使用梯度兼容性诊断来组织其适配器：注意力 LoRA 模块在教师间共享，而前馈适配器保持教师特定。在蒸馏过程中，差距感知课程将更多训练投入到学生仍落后于教师的组合类别上。随着每个差距缩小，训练转向剩余差距更大的类别。通过将 FLUX.1-dev 和 Z-Image 蒸馏到一个 2.5B 的 SD3.5-Medium 学生模型中，Poly-OPD 将 GenEval 从 67.3 提升至 73.3，超越了两个更大的教师，并将 DrawBench HPSv3 从 9.34 提升至 11.35，在一个可切换模型中整合了两种优势。

## 关键词

#文生图 #知识蒸馏 #流匹配 #多教师 #LoRA
