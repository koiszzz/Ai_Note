---
published: 2026-08-07
title: "APQF：智能体画像引导的结构化剪枝与混合精度量化及自适应微调"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/APQF- Agentic Profiling-Guided Structured Pruning and Mixed-Precision Quantization with Adaptive Fin.md"
source_note: "[[信息源/arXiv cs.CV RSS/APQF- Agentic Profiling-Guided Structured Pruning and Mixed-Precision Quantization with Adaptive Fin]]"
source_sha256: 1d8b10998e634d0047fd9595ad843041523bfd8ba98a23a0101bb71d0647f2e7
original_url: "https://arxiv.org/abs/2608.05499"
processed: 2026-08-07
language: zh-CN
---

# APQF：智能体画像引导的结构化剪枝与混合精度量化及自适应微调

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Sadegh Jafari, Mohiuddin Bilwal, Fan Zhou, Brian Gelder, Ali Jannesari
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05499)

## 摘要

- 提出 APQF：智能体画像引导框架，将结构化剪枝、混合精度量化感知训练与精度恢复整合为自动化流水线。
- 画像智能体测量成本分布与各部分对剪枝的敏感性，证据驱动逐层剪枝率、逐层位宽与恢复策略，由 LLM 规划器提议并在执行前验证。
- 在 ImageNet 上将计算降至原始位运算的 5.6%–7.7%（13–18 倍缩减），精度接近基线；VGG7 用 0.41% 位运算达 93.15%。
- 消融表明均匀压缩在同等计算下精度损失最大；六个 LLM 规划器（含免费开源权重模型）在 Swin-Tiny 均达 97.4%–97.9%。

## 正文

现代深度神经网络性能强大，但规模使其在资源受限的边缘设备上昂贵且缓慢。剪枝与量化可以缓解，但依赖人工专家选择和难以跨架构应用的算法，统一设置也忽视不同层对压缩响应的差异，造成精度损失。本文引入 APQF，一个智能体画像引导框架，将结构化剪枝、混合精度量化感知训练与精度恢复结合在一个自动化流水线中。画像智能体测量成本在模型中的分布以及各部分对剪枝的敏感性，这些证据驱动逐层剪枝率、逐层位宽与恢复策略，全部由 LLM 规划器提议并在执行前验证。据研究所述，APQF 是首个将 LLM 引导、画像支撑的决策与完全训练感知的剪枝量化流水线结合（同时适用于 CNN 与视觉 transformer）的框架。研究在 ResNet、VGG7、ViT、DeiT 与 Swin 上使用 ImageNet-1k 与 CIFAR-10 评估 APQF。在 ImageNet 上，它将计算降至原始位运算的 5.6%–7.7%（13–18 倍缩减），同时精度接近基线；在 200K 图像预算下，Top-1 比现有联合剪枝量化方法高约 17 个百分点。在 CIFAR-10 上，五种架构中有四种的压缩程度超过该方法。在 VGG7 上，用基线 0.41% 的位运算达到 93.15%，是该压缩水平下唯一优于全精度基线的方法。消融显示，均匀压缩在匹配计算下精度损失最大，而向规划器隐瞒画像数据会损害所有模型。六个 LLM 规划器（包括免费开源权重模型）在 Swin-Tiny 上均达到 97.4%–97.9%。

## 关键词

剪枝、量化、LLM 智能体、边缘部署、模型压缩
