---
published: 2026-08-06
title: SpecDrop：面向模块化专精的无参数类别条件路由
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization.md
source_note: "[[信息源/arXiv cs.LG RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization]]"
source_sha256: 4c0ce692005f85f0e59aa813929260dccd72d37ee86c0455b7d7b84a8690641d
original_url: https://arxiv.org/abs/2608.04084
processed: 2026-08-07
language: zh-CN
---

# SpecDrop：面向模块化专精的无参数类别条件路由

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04084)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization|查看原始文件]]

## 摘要

- SpecDrop 是固定的无参数路由方案：每个分支对其分配类别获得权重 p_a，对其余类别仅获少量泄漏权重，无学习路由参数也无辅助损失。
- CIFAR-100 上达 79.23%、ImageNet-1K 上达 79.89%，超过不使用类别标签的参数匹配基线。
- 结论是决定路由何时有效的是训练信号粒度与类别目标的对齐，而非路由算法本身。

## 正文

混合专家（MoE）网络通过学习的路由器、门控与负载均衡损失追求专精化，然而在总参数量匹配的情况下，学习型路由器可能不如等权重的无路由（No-Routing）基线。瓶颈究竟在于路由算法，还是训练信号粒度与目标类别之间的对齐？我们以 SpecDrop 来探察这一问题，它是一套固定的无参数路由方案：K 个分支中每个分支对其分配到的类别获得权重 p_a，对其余类别获得少量泄漏权重 p_i > 0，通过一个与类别无关的固定分母合并，没有任何学习得到的路由参数，也没有辅助损失；推理时需要类别标签。在每张图像只有一个超类标签的视觉任务上（ResNet-110 上的 CIFAR-100；ViT-S/16 上的 ImageNet-1K），SpecDrop 在 CIFAR-100 上达到 79.23%，在 ImageNet-1K 上达到 79.89%，超过不使用标签的参数匹配基线（CIFAR-100 上比 dense 高 4.75 个百分点；ImageNet-1K 上比 No-Routing+SE 对照组高 6.53 个百分点）。这些增益量化了通过路由部署时类别监督所带来的收益——而不是相对基线在标签感知部署下的优势：给定相同标签，仅掩蔽稠密模型的输出在精度上更强（85.2 / 83.7）。SpecDrop 的贡献在于把标签转化为训练得到的模块化结构：58%/100% 的分支-类别对齐，以及 0.00（CIFAR）/ +1.06（ImageNet）的掩蔽增益——输出空间限制在很大程度上已在训练中被内化。在模糊划分（训练单元横跨多个类别）下（SlimPajama-6B 语言建模，30M Transformer；Llama-3.2-1B 上用 LoRA 进行 SuperNI 指令微调），路由机制在种子噪声范围内退化为匹配的无路由对照组，这正是我们的论点所预测的零效应。决定路由何时有效的是粒度对齐，而非算法选择。代码：https://github.com/Beryex/SpecDrop

## 关键词

#MoE #路由 #类别条件 #模块化专精 #无参数
