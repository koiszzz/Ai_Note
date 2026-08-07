---
published: 2026-08-06
title: NeuroPB：利用预训练行为表征扩展神经解码
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/NeuroPB- Scaling Neural Decoding with Pretrained Behavioral Representations.md
source_note: "[[信息源/arXiv cs.LG RSS/NeuroPB- Scaling Neural Decoding with Pretrained Behavioral Representations|查看原始文件]]"
source_sha256: fa89bc90d34dc2035d599154b5298445b84d2fc8ea5b28e8d90f4274507b589e
original_url: https://arxiv.org/abs/2608.04389
processed: 2026-08-07
language: zh-CN
---

# NeuroPB：利用预训练行为表征扩展神经解码

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04389)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NeuroPB- Scaling Neural Decoding with Pretrained Behavioral Representations|查看原始文件]]

## 摘要

- 从神经活动解码连续运动轨迹对实用脑机接口（BCI）至关重要，但现有神经解码器受限于神经记录规模小与异质性强；行为数据则更容易大规模获取
- 提出 NeuroPB 框架：先在大规模运动行为数据上预训练运动编码器，再用有限的神经-行为配对记录将神经活动对齐到行为表征空间
- 在多个猕猴运动数据集上，行为预训练将轨迹解码提升（center-out 任务 $R^2$ 提升 11%，随机目标任务提升 8%），且机器人轨迹预训练与猕猴轨迹效果相当，仅需 10% 校准即可匹配从头训练

## 正文

从神经活动解码连续的运动轨迹对于开发实用的脑机接口（BCI）至关重要。然而，当前的神经解码器受到神经记录规模有限和异质性的制约。相比之下，行为数据可以更容易地从人类、动物、仿真和机器人系统中大规模收集。在这里，我们介绍 NeuroPB，一个通过迁移预训练行为表征的知识来扩展神经解码的框架。NeuroPB 首先在大规模运动行为数据上预训练一个运动编码器，然后使用有限的配对神经-行为记录将神经活动与所得的行为表征空间对齐。随后优化一个神经编码器和一个轻量级运动解码器，从对齐后的神经表征中重建连续运动。在多个猕猴运动数据集上，行为预训练提升了轨迹解码，包括与从头训练运动编码器相比，center-out 任务的 $R^2$ 提升 11%，随机目标任务提升 8%。值得注意的是，在机器人轨迹上预训练达到了与在猕猴轨迹上预训练相当的性能，证明可迁移的运动学结构在生物与人工模型之间是共享的。此外，在神经数据量固定的情况下，随着机器人预训练数据的规模与多样性增加，解码性能也会提升。预训练还增强了跨记录会话、跨受试者和跨运动任务的泛化能力，仅需 10% 的校准即可匹配从头训练的效果。总体而言，这些结果确立了行为预训练作为神经解码的一种可扩展知识来源，并为在有限神经数据条件下实现高性能、低校准成本的 BCI 提供了一条有前景的途径。

## 关键词

#脑机接口 #神经解码 #行为预训练 #迁移学习 #运动轨迹
