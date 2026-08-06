---
title: "UL-UNAS：通过网络架构搜索实现实时语音增强的超轻量 U-Net"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/UL-UNAS- Ultra-Lightweight U-Nets for Real-Time Speech Enhancement via Network Architecture Search.md"
source_note: "[[信息源/arXiv cs.AI RSS/UL-UNAS- Ultra-Lightweight U-Nets for Real-Time Speech Enhancement via Network Architecture Search]]"
source_sha256: c9cc454f4b5c775a356cac7f46e626b4b0d77d6017dd264279e8c41567ba6a4f
original_url: "https://arxiv.org/abs/2503.00340"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# UL-UNAS：通过网络架构搜索实现实时语音增强的超轻量 U-Net

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaobin Rong、Leyan Yang、Dahan Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2503.00340)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/UL-UNAS- Ultra-Lightweight U-Nets for Real-Time Speech Enhancement via Network Architecture Search|查看原始文件]]

## 摘要

- 提出 UL-UNAS，由网络架构搜索（NAS）优化的超轻量 U-Net，适合低占用设备实现：先探索 U-Net 框架内各种高效卷积块以识别最有前景候选；引入两个增强组件提升这些卷积块容量——名为 affine PReLU 的新激活函数与因果时频注意力模块；再利用神经架构搜索在精心设计搜索空间中发现最优架构。
- 轻量模型对实时语音增强应用至关重要；近年开发日益紧凑语音增强模型的趋势增长。
- 集成上述策略后，UL-UNAS 不仅显著优于相同或更低计算复杂度的最新超轻量模型，还提供与需高得多计算资源的近期基线模型竞争的相对性能。
- 源代码与音频演示：https://github.com/Xiaobin-Rong/ul-unas

## 正文

论文编号：arXiv:2503.00340v2（更新类型：cross）。以下为摘要全文翻译。

轻量模型对实时语音增强应用至关重要。近年来，开发日益紧凑语音增强模型的趋势不断增长。在本文中，我们提出 UL-UNAS，一个由网络架构搜索（NAS）优化的超轻量 U-Net，适合低占用设备实现。首先，我们探索 U-Net 框架内各种高效卷积块的应用，以识别最有前景的候选。其次，我们引入两个增强组件以提升这些卷积块的容量：一个名为 affine PReLU 的新颖激活函数与一个因果时频注意力模块。此外，我们利用神经架构搜索在我们精心设计搜索空间中发现最优架构。通过整合上述策略，UL-UNAS 不仅显著优于相同或更低计算复杂度的最新超轻量模型，而且与需要显著更高计算资源的近期基线模型相比提供有竞争力的性能。源代码与音频演示可在 https://github.com/Xiaobin-Rong/ul-unas 获取。

## 关键词

#语音增强 #轻量模型 #架构搜索 #U-Net
