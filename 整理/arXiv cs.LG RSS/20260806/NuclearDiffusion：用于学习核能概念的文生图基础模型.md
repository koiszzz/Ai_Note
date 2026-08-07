---
published: 2026-08-06
title: NuclearDiffusion：用于学习核能概念的文生图基础模型
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts.md
source_note: "[[信息源/arXiv cs.LG RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts]]"
source_sha256: 6a2754569450d138c5136e4e28e69ecfca9c030c9aa4c586eab3119ede52894f
original_url: https://arxiv.org/abs/2608.04030
processed: 2026-08-07
language: zh-CN
---

# NuclearDiffusion：用于学习核能概念的文生图基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04030)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts|查看原始文件]]

## 摘要

- 面向核文生图领域适应的首批系统性研究之一：通过微调开源扩散模型实现
- 构建 1,000 张带标题的核能图像数据集（反应堆、燃料循环、辐射及相关概念），微调 SDXL、SD-v3.5-Medium 与流匹配模型 Flux.1
- 微调对 SDXL 保真度提升显著、对 SD-v3.5-Medium 仅有限、对 Flux.1 无可测提升——适配有效性依赖底层架构而非模型规模
- 与 GPT-Image-2、Gemini-3.1-Flash-Image、Midjourney 对比：商业系统在专业工程提示上常失败，微调开源模型输出更准确一致

## 正文

生成式人工智能（AI）已经改变了文生图合成，但其表示专业工程领域的能力在很大程度上仍未探索。以核工程为例，通用基础模型常常生成物理上不正确或概念不一致的图像，因为它们缺乏领域特定知识。本工作呈现了核文生图领域适应的首批系统性研究之一，通过微调开源扩散模型实现。我们整理了一个包含 1,000 张带标题的核能图像的数据集，涵盖反应堆、燃料循环、辐射及相关概念，并用它微调三个最先进的开源模型：Stable Diffusion XL（SDXL）、SD-v3.5-Medium 和流匹配模型 Flux.1。使用定量图像相似度指标和定性专家评估，与相应的零样本模型进行性能对比。微调大幅提升了 SDXL 的保真度，对 SD-v3.5-Medium 仅提供有限提升，对 Flux.1 则无可测提升，表明适配有效性强烈依赖于底层生成架构而非仅模型规模。我们进一步将微调模型与三个领先商业系统——GPT-Image-2、Gemini-3.1-Flash-Image 和 Midjourney——进行比较。尽管 GPT-Image-2 和 Gemini 能为广泛的核概念生成令人信服的图像，它们在专业工程提示上常常失败，而微调后的开源模型在这些提示上产生更准确和技术上更一致的输出。这些结果确立了领域特定微调是开发面向特定领域应用的、可信生成式 AI 工具的实用途径。

## 关键词

#文生图 #扩散模型 #领域适应 #核工程 #基础模型
