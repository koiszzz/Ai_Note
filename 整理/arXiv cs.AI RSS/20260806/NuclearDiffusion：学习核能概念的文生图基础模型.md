---
published: 20260806
title: "NuclearDiffusion：学习核能概念的文生图基础模型"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts.md"
source_note: "[[信息源/arXiv cs.AI RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts]]"
source_sha256: 2c4f309c2d0eec8c9172592a25988d5b58d6b52b904b4f1b2c305d0a47dc66cb
original_url: "https://arxiv.org/abs/2608.04030"
processed: 2026-08-06
language: zh-CN

---

# NuclearDiffusion：学习核能概念的文生图基础模型

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mohammed I. Radaideh, Jeremy Moon, Andre Gala-Garza, Emma Son, Yug Shah, Majdi I. Radaideh
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04030)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NuclearDiffusion- Text-to-Image Foundation Models for Learning Nuclear Energy Concepts|查看原始文件]]

## 摘要

- 生成式 AI 已变革文生图合成，但其表示专业工程领域的能力仍大多未探索；以核工程为例，通用基础模型常生成物理不正确或概念不一致的图像，因缺乏领域特定知识。
- 本文呈现核文生图领域适应首批系统研究之一，通过微调开源扩散模型：策展 1,000 张带标题核能图像数据集（覆盖反应堆、燃料循环、辐射和相关概念），微调三个最先进开源模型：Stable Diffusion XL（SDXL）、SD-v3.5-Medium 和流匹配 Flux.1。
- 定量图像相似度指标和定性专家评估显示：微调大幅改进 SDXL 保真度，SD-v3.5-Medium 仅有限增益，Flux.1 无可测量改进，证明适应有效性强烈依赖底层生成架构而非仅模型规模；与 GPT-Image-2、Gemini-3.1-Flash-Image 和 Midjourney 比较，后两者对广泛核概念生成令人信服图像但专业工程提示常失败。

## 正文

生成式人工智能（AI）已变革文生图合成，然而其表示专业工程领域的能力仍大多未探索。以核工程为例，通用基础模型常生成物理不正确或概念不一致的图像，因为它们缺乏领域特定知识。本工作呈现核文生图领域适应首批系统研究之一，通过微调开源扩散模型实现。我们策展一个 1,000 张带标题核能图像的数据集，覆盖反应堆、燃料循环、辐射和相关概念，并用它微调三个最先进开源模型：Stable Diffusion XL（SDXL）、SD-v3.5-Medium 和流匹配 Flux.1 模型。它们的性能用定量图像相似度指标和定性专家评估对照相应零样本模型评估。微调大幅改进 SDXL 的保真度，为 SD-v3.5-Medium 提供有限增益，对 Flux.1 无可测量改进，证明适应有效性强烈依赖底层生成架构而非仅模型规模。我们进一步将微调模型与三个领先商业系统——GPT-Image-2、Gemini-3.1-Flash-Image 和 Midjourney——比较。虽然 GPT-Image-2 和 Gemini 对广泛核概念生成令人信服的图像，它们对专业工程提示常失败，而微调开源模型产生更准确、技术一致输出。这些结果确立领域特定微调作为为领域特定应用开发可信生成 AI 工具的实用路径。

## 关键词

#核能 #文生图 #领域适应 #扩散模型 #arXiv