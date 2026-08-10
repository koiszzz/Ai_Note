---
published: 2026-08-07
title: "APQF：智能体画像引导的结构化剪枝与混合精度量化及自适应微调"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/APQF- Agentic Profiling-Guided Structured Pruning and Mixed-Precision Quantization with Adaptive Fin.md"
source_note: "[[信息源/arXiv cs.AI RSS/APQF- Agentic Profiling-Guided Structured Pruning and Mixed-Precision Quantization with Adaptive Fin]]"
source_sha256: 1111937b8def04e182ddeb5003ddf63ff7e5e95d564755f412f33c4016601ac9
original_url: "https://arxiv.org/abs/2608.05499"
processed: 2026-08-07
language: zh-CN
---

# APQF：智能体画像引导的结构化剪枝与混合精度量化及自适应微调

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sadegh Jafari, Mohiuddin Bilwal, Fan Zhou, Brian Gelder, Ali Jannesari
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05499)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/APQF- Agentic Profiling-Guided Structured Pruning and Mixed-Precision Quantization with Adaptive Fin|查看原始文件]]

## 摘要

- 现代深度神经网络性能强劲但规模使其昂贵缓慢，尤其在资源受限的边缘设备上；剪枝与量化可解决该问题，但依赖手工、专家选择与难以跨架构应用的算法，统一设置也忽略各层对压缩响应的差异。
- 提出 APQF：智能体画像引导框架，将结构化剪枝、混合精度量化感知训练与精度恢复组合在一个自动化流水线中。
- 画像代理测量成本如何在模型中分布以及每部分对剪枝的敏感度，该证据驱动每层剪枝比例、每层位宽与恢复策略，全部由 LLM 规划器提出并在执行前验证；这是首个将 LLM 引导、画像接地决策与完全训练感知的剪枝量化流水线结合（同时覆盖 CNN 与视觉 Transformer）的框架。
- 在 ResNet、VGG7、ViT、DeiT、Swin 上以 ImageNet-1k 与 CIFAR-10 评估：ImageNet 上将计算降至原始位运算的 5.6-7.7%（13-18 倍缩减）同时保持接近基线的精度，20 万图像预算下 Top-1 比现有联合剪枝量化方法高约 17 个点；VGG7 上仅用基线位运算的 0.41% 达到 93.15% 精度；消融显示统一压缩在相同计算下损失最大精度、向规划器隐瞒画像数据损害每个模型。

## 正文

现代深度神经网络性能强劲，但其规模使其昂贵且缓慢，尤其在资源受限的边缘设备上。剪枝与量化可解决这一问题，但依赖手工、专家选择以及难以跨架构应用的算法。统一设置还忽略了各层对压缩响应的差异，从而损失精度。我们引入 APQF，一个智能体画像引导框架：在一条自动化流水线中组合结构化剪枝、混合精度量化感知训练与精度恢复。画像代理测量成本如何在模型中分布以及每部分对剪枝的敏感度，这一证据驱动每层剪枝比例、每层位宽与恢复策略，全部由 LLM 规划器提出并在执行前验证。据我们所知，APQF 是首个将 LLM 引导、画像接地的决策与完全训练感知的剪枝量化流水线结合（同时面向 CNN 与视觉 Transformer）的框架。我们在 ResNet、VGG7、ViT、DeiT 与 Swin 上使用 ImageNet-1k 与 CIFAR-10 评估 APQF。在 ImageNet 上，它将计算削减至原始位运算的 5.6-7.7%，即 13-18 倍缩减，同时保持接近基线的精度；在 20 万图像预算下，其 Top-1 比现有联合剪枝量化方法高约 17 个点。在 CIFAR-10 上，它在五种架构中的四种上比该方法压缩更多。在 VGG7 上，它仅用基线位运算的 0.41% 达到 93.15%，是该压缩级别下唯一在完整精度基线上有所改进的方法。消融研究表明，统一压缩在相同计算下损失最多精度，而向规划器隐瞒画像数据会损害每个模型。六个 LLM 规划器（包括免费开放权重模型）在 Swin-Tiny 上均达到 97.4-97.9%。

## 关键词

#模型压缩 #结构化剪枝 #混合精度量化 #LLM引导
