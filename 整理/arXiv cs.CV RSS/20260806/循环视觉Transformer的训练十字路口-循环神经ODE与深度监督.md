---
published: 2026-08-06
title: 循环视觉 Transformer 的训练十字路口：循环、神经 ODE 与深度监督
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision.md
source_note: "[[信息源/arXiv cs.CV RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision]]"
source_sha256: a6d9367ff899083410fab60b5e6460ec5aba58c7c11139dad8c90bdc80184014
original_url: https://arxiv.org/abs/2608.04879
processed: 2026-08-07
language: zh-CN
---

# 循环视觉 Transformer 的训练十字路口：循环、神经 ODE 与深度监督

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04879)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Training Crossroads for Recurrent Vision Transformers- Recurrence, Neural ODEs, and Deep Supervision|查看原始文件]]

## 摘要

- 固定一个单块循环 ViT（bViT），在统一 CIFAR-100 协议下对比三种训练与推理机制：FLOPs 受限时标准 ViT 更优，显存受限时循环 ViT 有更好的精度—参数量权衡。
- 残差循环块经 ODE 求解器训练时，高阶求解器充当"求解器诱导的架构偏置"而非数值精度提升，且增益不均匀。
- 分阶段深度监督刻画精度—鲁棒性前沿：不提升标称精度，但在远超训练时域时优雅退化，而朴素循环则崩溃至接近随机性能。

## 正文

视觉 Transformer（ViTs）在图像识别上表现强劲，但当每个块被独立参数化时，其参数量随深度线性增长。单块循环 ViT（bViT）通过反复应用一个共享块消除了这种增长。我们不提出新架构，而是固定一个 bViT，并在统一 CIFAR-100 协议下对三种训练与推理机制进行受控的实证刻画，提出如下问题：(i) 循环何时胜过独立参数化的深度——在 FLOPs 匹配时还是在参数显存匹配时？(ii) 当残差循环块通过 ODE 求解器训练时，求解器阶数是数值细化还是架构偏置？(iii) 超出训练时域的鲁棒性以多少标称精度为代价？我们发现，当 FLOPs 是主要约束时，标准 ViTs 仍然更可取；而在显存约束下，循环 ViTs 提供更好的精度—参数量权衡。与残差网络是 ODE 的欧拉离散化的标准观点一致，残差循环块的连续时间类比是状态相减的向量场 $\dot{z}=F_\theta(z)-z$；尽管原则上已知这一点，但当该块被包装为黑盒向量场时这一区别很容易被违反，我们量化了它在若干精度点上的代价。由于向量场与求解器联合学习，高阶求解器充当求解器诱导的架构偏置而非数值精度提升，且其增益并不均匀。最后，分阶段深度监督刻画出一条精度—鲁棒性前沿：它不提升标称精度，但在远超训练时域处优雅退化——而此时朴素循环已崩溃至接近随机的性能。

## 关键词

#视觉Transformer #循环网络 #神经ODE #深度监督 #鲁棒性
