---
published: 2026-08-06
title: NuclearDiffusion：用于学习核能概念的文生图基础模型
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts.md
source_note: "[[信息源/arXiv cs.CV RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts|查看原始文件]]"
source_sha256: 67fc3e82c1baaab6d889e9df427479c86c32652bf77fec1dbfae79b1aad772c7
original_url: https://arxiv.org/abs/2608.04030
processed: 2026-08-07
language: zh-CN
---

# NuclearDiffusion：用于学习核能概念的文生图基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04030)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts|查看原始文件]]

## 摘要

- 生成式 AI 已变革文生图合成，但其表示专业工程领域的能力尚未充分探索；通用基础模型常生成物理错误或概念不一致的图像
- 通过微调开源扩散模型，开展核能文生图领域适应的首批系统性研究之一：构建 1,000 张带标题的核能图像数据集（覆盖反应堆、燃料循环、辐射及相关概念），微调三个 SOTA 开源模型
- 微调大幅提升 SDXL 保真度、对 SD-v3.5-Medium 增益有限、对 Flux.1 无可测改进，说明适应效果强烈依赖底层生成架构而非单纯模型规模
- 与 GPT-Image-2、Gemini-3.1-Flash-Image、Midjourney 对比：商用系统在通用核概念上表现好，但常败于专业工程提示，微调开源模型输出更准确一致

## 正文

生成式人工智能（AI）已经变革了文生图合成，然而其表示专业工程领域的能力在很大程度上仍未得到探索。以核工程为例，通用基础模型经常生成物理上错误或概念上不一致的图像，因为它们缺乏领域特定知识。

这项工作呈现了核能文生图领域适应的首批系统性研究之一，通过对开源扩散模型进行微调实现。我们构建了一个包含 1,000 张带标题的核能图像数据集，涵盖反应堆、燃料循环、辐射及相关概念，并用它微调三个最先进的开源模型：Stable Diffusion XL（SDXL）、SD-v3.5-Medium 以及流匹配模型 Flux.1。我们使用定量图像相似性指标与定性专家评估，对照相应的零样本模型对其性能进行评价。

微调大幅提升了 SDXL 的保真度，对 SD-v3.5-Medium 仅带来有限增益，而对 Flux.1 没有产生可测量的改进，这表明适应效果强烈依赖底层生成架构，而非单纯的模型规模。我们进一步将微调后的模型与三个领先的商业系统——GPT-Image-2、Gemini-3.1-Flash-Image 和 Midjourney——进行比较。尽管 GPT-Image-2 和 Gemini 能为广泛的核概念生成令人信服的图像，但它们经常在专业工程提示上失败，而微调后的开源模型能产出更准确、技术上更一致的输出。这些结果确立了领域特定微调是开发面向专业应用的可信生成式 AI 工具的实用路径。

## 关键词

#文生图 #核能 #领域适应 #扩散模型 #基础模型
