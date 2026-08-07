---
published: 2026-08-06
title: SpecDrop：用于模块化特化的无参数类别条件路由
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization.md
source_note: "[[信息源/arXiv cs.CV RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization]]"
source_sha256: f70be3499cae0eeeea2905f4a77c38f3199dadadbf50e3e79d8d8efb79f7c989
original_url: https://arxiv.org/abs/2608.04084
processed: 2026-08-07
language: zh-CN
---

# SpecDrop：用于模块化特化的无参数类别条件路由

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04084)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization|查看原始文件]]

## 摘要

- 提出 SpecDrop，一种固定、无参数的路由方案：每个 $K$ 分支对指派类别接收权重 $p_a$、对其他类别接收小泄漏 $p_i > 0$，经类别无关的固定分母合并，无学习参数、无辅助损失。
- 在 CIFAR-100（ResNet-110）达 79.23%、ImageNet-1K（ViT-S/16）达 79.89%，超过不使用标签的参数匹配基线（分别 +4.75、+6.53）。
- 关键结论：路由何时起作用取决于训练信号粒度与目标类别的对齐，而非路由算法选择；给定标签时掩码稠密模型输出在纯准确率上仍更强（85.2 / 83.7）。

## 正文

混合专家（MoE）网络通过学习的路由器、门控和负载均衡损失追求特化，然而在参数总量匹配的预算下，学习式路由器可能逊于等权重的无路由（No-Routing）基线。瓶颈在于路由算法，还是训练信号粒度与目标类别之间的对齐？我们用 SpecDrop（一种固定的无参数路由方案）来检验这个问题：每个 $K$ 分支对其指派类别接收权重 $p_a$，对其他类别接收小泄漏权重 $p_i > 0$，通过类别无关的固定分母合并，不学习任何路由参数，也没有辅助损失；推理时需要类别标签。在每张图像只有一个超类标签的视觉任务上（ResNet-110 上的 CIFAR-100；ViT-S/16 上的 ImageNet-1K），SpecDrop 在 CIFAR-100 上达到 79.23%、在 ImageNet-1K 上达到 79.89%，超过不使用标签的参数匹配基线（CIFAR-100 上比 dense 高 +4.75；ImageNet-1K 上比 No-Routing+SE 对照高 +6.53）。这些增益量化了通过路由部署时类别监督的价值——这并不构成相对基线标签感知部署的优势：给定相同标签，仅就准确率而言，掩码稠密模型的输出更强（85.2 / 83.7）。SpecDrop 的贡献在于把标签转化为训练好的模块化结构：58%/100% 的分支-类别对齐，以及 0.00（CIFAR）/ +1.06（ImageNet）的掩码增益——输出空间限制在训练期间基本被内化。在模糊划分下（训练单元跨越多个类别：30M Transformer 上的 SlimPajama-6B 语言建模；带 LoRA 的 Llama-3.2-1B 上的 SuperNI 指令微调），路由机制在种子噪声范围内退化到匹配的无路由对照，这正是我们论题所预测的零效应。粒度对齐，而非算法选择，决定了路由在何时起作用。代码：https://github.com/Beryex/SpecDrop

## 关键词

#混合专家 #路由 #模块化特化 #类别监督
