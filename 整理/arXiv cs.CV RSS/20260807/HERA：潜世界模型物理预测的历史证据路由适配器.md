---
published: 2026-08-07
title: "HERA：潜世界模型物理预测的历史证据路由适配器"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/HERA- Historical Evidence Routing Adapter for Physical Prediction in Latent World Models.md"
source_note: "[[信息源/arXiv cs.CV RSS/HERA- Historical Evidence Routing Adapter for Physical Prediction in Latent World Models]]"
source_sha256: a7de2e800d608729bc5b7feb386dd7d39cb66644cefe7d3991a92e0aae344bdf
original_url: "https://arxiv.org/abs/2608.05523"
processed: 2026-08-07
language: zh-CN
---

# HERA：潜世界模型物理预测的历史证据路由适配器

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yuanruyi, Yue Cao, Haojia Gao, Guanqiu Guo, Ziyuezhang, Shangqin, Junbo Tan, Bokui Chen, Zhuo Zou, Xueqian Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05523)

## 摘要

- 预测视频模型经从大规模视频学习潜视觉动力学已成为有前景的世界模型；这些模型仍受遮挡下物理事件挑战：后续预测可能依赖当前视图中不再可用的对象证据。
- 应对该挑战不仅要求保留历史证据，还要求其在与后续预测相关时可访问；现有方法主要扩大时间上下文、缓存通用视频特征或强加显式对象中心状态，改进保留历史的容量或结构，但不直接解决如何选择性检索相关历史证据并整合进预训练预测器而不干扰其原生潜工作空间。
- 引入 HERA（历史证据路由适配器）：将保留历史证据路由进冻结潜预测器的框架，实例化为 Register-Routed Patch Memory（RRPM）：由结构化记忆库、记忆寄存器与工作空间寄存器组成的轻量适配器。
- IntPhys2 Main 分割上 HERA 配 RRPM 将 V-JEPA 2-G 的成对 AvgSurprise 准确率从 52.57% 提至 54.35%；子组分析显示固定相机连续性（46.15%→57.69%）与固定相机不变性（46.15%→63.46%）改进尤为强劲；支持历史证据路由作为潜世界模型物理预测的实用适配策略。

## 正文

预测视频模型通过从大规模视频学习潜视觉动力学，已成为有前景的世界模型。然而这些模型仍受遮挡下物理事件的挑战：后续预测可能依赖于当前视图中不再可用的对象证据。应对该挑战要求历史证据不仅被保留，还要在它变得与后续预测相关时可访问。现有方法主要通过扩大时间上下文、缓存通用视频特征或强加显式对象中心状态，改进了保留历史的容量或结构。然而，它们不直接解决如何选择性检索相关历史证据并将其整合进预训练预测器、而不干扰其原生潜工作空间的问题。因此，研究引入 HERA（Historical Evidence Routing Adapter），一个将保留历史证据路由进冻结潜预测器的框架，并实例化为 Register-Routed Patch Memory（RRPM）：一个由结构化记忆库（Structured Memory Bank）、记忆寄存器（Memory Registers）与工作空间寄存器（Workspace Registers）组成的轻量适配器。在 IntPhys2 Main 分割上，带 RRPM 的 HERA 将 V-JEPA 2-G 的成对 AvgSurprise 准确率从 52.57% 提升到 54.35%。子组分析显示固定相机连续性（46.15% 到 57.69%）与固定相机不变性（46.15% 到 63.46%）的改进尤为强劲。这些结果支持历史证据路由作为潜世界模型物理预测的实用适配策略。

## 关键词

世界模型、历史证据、路由适配器、物理预测、记忆
