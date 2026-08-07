---
published: 2026-08-06
title: SpecDrop：面向模块化特化的无参数类别条件路由
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization.md
source_note: "[[信息源/arXiv cs.CL RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization]]"
source_sha256: 108ced4bd9a2d5b2bab0e678abd056366c9240bf6efa89dd7a9811f0f15ed1c2
original_url: https://arxiv.org/abs/2608.04084
processed: 2026-08-07
language: zh-CN
---

# SpecDrop：面向模块化特化的无参数类别条件路由

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04084)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/SpecDrop- Parameter-Free Category-Conditioned Routing for Modular Specialization|查看原始文件]]

## 摘要

- 在参数量预算相同时，学习式路由可能不如等权重的 No-Routing 基线；本文用固定无参数路由方案 SpecDrop 探明瓶颈在于路由算法本身，还是训练信号粒度与目标类别之间的对齐。
- 在视觉任务上，SpecDrop 在 CIFAR-100 达 79.23%、ImageNet-1K 达 79.89%，超过不使用标签的参数匹配基线（CIFAR-100 较稠密模型 +4.75，ImageNet-1K 较 No-Routing+SE 对照 +6.53），且将标签转化为训练好的模块化结构（58%/100% 的分支-类别对齐）。
- 在模糊划分（训练单元横跨多类别）下路由机制退化到 No-Routing 对照水平；结论是粒度对齐而非算法选择决定了路由何时有效。

## 正文

混合专家（MoE）网络通过学习式路由器、门控和负载均衡损失来追求特化，但在总参数预算相同时，学习式路由器可能不如等权重的 No-Routing 基线。瓶颈是路由算法，还是训练信号粒度与目标类别之间的对齐？我们用 SpecDrop（一种固定的无参数路由方案）来探究这一问题：$K$ 个分支中的每一个对其指派类别获得权重 $p_a$，对其他类别获得一个小的泄漏权重 $p_i > 0$，通过一个与类别无关的固定分母合并；不学习任何路由参数，也没有辅助损失；推理时需要类别标签。在每张图像只有一个超类标签的视觉任务上（ResNet-110 上的 CIFAR-100；ViT-S/16 上的 ImageNet-1K），SpecDrop 在 CIFAR-100 上达到 79.23%，在 ImageNet-1K 上达到 79.89%，超过了不使用该标签的参数匹配基线（CIFAR-100 上比稠密模型高 +4.75，ImageNet-1K 上比 No-Routing+SE 对照高 +6.53）。这些增益量化了类别监督经路由部署时带来的收益——但并非相对于基线在标签感知部署下的优势：给定相同标签时，仅屏蔽稠密模型输出的做法在纯准确率上更强（85.2 / 83.7）。SpecDrop 的贡献在于将标签转化为训练出的模块化结构：58%/100% 的分支-类别对齐，以及 0.00（CIFAR）/ +1.06（ImageNet）的屏蔽增益——即输出空间的限制在训练过程中基本被内化了。在模糊划分（训练单元横跨多个类别：SlimPajama-6B 语言建模配合 30M Transformer；Llama-3.2-1B 配 LoRA 的 SuperNI 指令微调）下，路由机制在种子噪声范围内退化到匹配的 No-Routing 对照水平——这正是我们的论点所预测的空结果。决定路由何时有效的因素是粒度对齐，而非算法选择。代码：https://github.com/Beryex/SpecDrop

## 关键词

#混合专家 #路由 #类别条件 #模块化特化 #SpecDrop #CIFAR-100 #ImageNet
