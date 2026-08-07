---
published: 2026-08-06
title: ArtChart：集成文本渲染的忠实艺术图表生成
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/ArtChart- Faithful Artistic Chart Generation with Integrated Text Rendering.md
source_note: "[[信息源/arXiv cs.CV RSS/ArtChart- Faithful Artistic Chart Generation with Integrated Text Rendering|查看原始文件]]"
source_sha256: 2c6ab63675d9d43a178dc1eb76f6d98da02fd1fc845275405e6ca5a9b769cd83
original_url: https://arxiv.org/abs/2607.16060
processed: 2026-08-07
language: zh-CN
---

# ArtChart：集成文本渲染的忠实艺术图表生成

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.16060)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/ArtChart- Faithful Artistic Chart Generation with Integrated Text Rendering|查看原始文件]]

## 摘要

- 艺术图表将数据可视化与表现性标记、纹理和排版结合，但对图像生成器而言很困难：输出只有在风格化保留图表几何、图像内精确文本以及标签与标记之间的语义绑定时才有用。
- 提出 ArtChart 框架：给定结构化图表规范和艺术提示，先渲染无文本灰度布局编码目标图表几何，再训练图表专用控制模块保持数学结构；通过基于 GRPO 的强化学习（含 OCR 文本奖励、VLM 布局奖励和美学奖励）优化生成策略，并用多专家蒸馏阶段调和这些目标。
- 构建了双语 2K 提示基准 ArtChart-Bench（4 种图表类型、15 种艺术风格）与六轴评估协议 ArtChart-Eval；实验表明 ArtChart 在数学保真度与标签布局绑定上增益最大。

## 正文

艺术图表将数据可视化与富有表现力的标记、纹理和排版相结合，但这对图像生成器而言很困难：只有当其风格化保留了图表几何、精确的图内文本以及标签与标记之间的语义绑定时，输出才有用。本文介绍 ArtChart，一个集成文本渲染的忠实艺术图表生成框架。给定结构化的图表规范和艺术提示，ArtChart 首先渲染一个无文本的灰度布局，编码目标图表几何，然后训练一个图表专用的控制模块以保持数学结构。为处理剩余的文本和布局错误，进一步通过基于 GRPO 的强化学习细化生成策略，其中包含基于 OCR 的文本奖励、基于 VLM 的布局奖励和美学奖励。多专家蒸馏阶段通过将单奖励专家蒸馏为一个均衡的生成策略来调和这些目标。本文还构建了 ArtChart-Bench，一个双语 2K 提示基准，涵盖四种图表类型、受控值分布、多样化的标签/值格式和 15 种艺术风格；以及 ArtChart-Eval，一个六轴评估协议，衡量数学逻辑、文本准确性、文本布局、美学、指令遵循和可读性。在 ArtChart-Bench 上的实验表明，ArtChart 持续优于仅提示、图像编辑和通用 ControlNet 基线，在数学保真度和标签布局绑定方面提升最大，同时保持有竞争力的视觉质量。这些结果表明，艺术图表生成应被评估为可靠的视觉传达，而非通用的风格化图像合成。

## 关键词

#艺术图表 #数据可视化 #文本渲染 #强化学习 #GRPO #基准测试
