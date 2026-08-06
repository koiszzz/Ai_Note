---
title: "PLAN：面向柔性作业车间调度的并行液体启发近似网络"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib.md"
source_note: "[[信息源/arXiv cs.LG RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib.]]"
source_sha256: 64ab8648bcb33bc848f4ea4d7cdf0555fcff3446e1d44ef6b66b15997937c71e
original_url: "https://arxiv.org/abs/2608.03041"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PLAN：面向柔性作业车间调度的并行液体启发近似网络

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Dhivya Dharshini Kannan、Wei Zhang、Jieyi Bi、Yingpeng Du、Tianjun Wei、Jie Zhang、Zuming Liu、Anupam Trivedi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03041)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib.|查看原始文件]]

## 摘要

- 柔性作业车间调度（FJSP）的深度强化学习（DRL）方法严重依赖以注意力为中心的架构取得最先进性能；但随着问题规模扩大，这些模型受参数过多与推理延迟过高的困扰。
- 液体神经网络（LNN）为建模自适应状态演化提供参数高效替代，但其固有顺序动力学成为计算效率瓶颈。
- 提出 PLAN（并行液体启发近似网络），一个轻量级表示学习框架，把连续液体状态动力学重构为离散化、可并行的形式：结构上把状态演化与上下文聚合解耦——液体启发更新处理主要演化状态表示，轻量上下文聚合模块提供互补的全局上下文。
- PLAN 还作为通用、即插即用骨干，泛化到复杂 FJSP 变体：搭配紧凑随机模块处理随机 FJSP，替换多方面动态 FJSP 中的重型异构图 Transformer。
- 确定性、随机与多方面动态 FJSP 基准上的大量评估显示：PLAN 相对相应最先进基线分别把平均制造跨度（makespan）降低 1.2%、1.4% 与 2.3%，一个基准设置中提升达 10.2%。
- PLAN 还分别把平均推理延迟降低 13.2%、31.7% 与 26.9%，最大实例上最多降低 69.2%，同时只用基线参数的 22%–47%。

## 正文

论文编号：arXiv:2608.03041v1（更新类型：new）。以下为摘要全文翻译。

柔性作业车间调度（FJSP）的深度强化学习（DRL）方法严重依赖以注意力为中心的架构来取得最先进的性能。然而，随着问题规模的扩大，这些模型遭受参数数量过多与推理延迟过高的困扰。虽然液体神经网络（LNN）为建模自适应状态演化提供了参数高效的替代方案，但其固有的顺序动力学成为计算效率的瓶颈。为解决这一权衡，我们提出 PLAN（Parallel Liquid-inspired Approximation Network，并行液体启发近似网络），一个轻量级表示学习框架，把连续的液体状态动力学重构为离散化且可并行的形式。PLAN 在结构上把状态演化与上下文聚合解耦：液体启发更新处理主要的演化状态表示，而轻量级上下文聚合模块提供互补的全局上下文。此外，PLAN 作为一个多才多艺、即插即用的骨干，泛化到复杂的 FJSP 变体：与紧凑随机模块搭配处理随机 FJSP，并在多方面动态 FJSP 中替换重型异构图 Transformer。在确定性、随机与多方面动态 FJSP 基准上的大量评估表明，PLAN 相对相应最先进基线分别把平均制造跨度降低 1.2%、1.4% 与 2.3%，在一个基准设置中提升达到 10.2%。PLAN 还分别把平均推理延迟降低 13.2%、31.7% 与 26.9%，在最大实例上最多降低 69.2%，同时仅使用基线参数的 22%–47%。

## 关键词

#作业车间调度 #液体神经网络 #强化学习 #轻量架构 #并行化
