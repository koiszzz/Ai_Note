---
published: 2026-08-05
title: "PLAN：柔性作业车间调度高效表示学习的并行液体启发近似网络"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib.md"
source_note: "[[信息源/arXiv cs.AI RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib]]"
source_sha256: 371fbfd5867ba11a54f9b04b04e7ad257d9cc5a85a214742345df2290f7cdda6
original_url: "https://arxiv.org/abs/2608.03041"
processed: 2026-08-05
language: zh-CN
---

# PLAN：柔性作业车间调度高效表示学习的并行液体启发近似网络

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dhivya Dharshini Kannan、Wei Zhang、Jieyi Bi 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03041)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PLAN- Parallel Liquid-Inspired Approximation Network for Efficient Representation Learning in Flexib|查看原始文件]]

## 摘要

- 提出 PLAN（并行液体启发近似网络），轻量表示学习框架：把连续液体状态动力学重构为离散化、可并行的公式；结构上把状态演化与上下文聚合解耦——液体启发更新处理主演化状态表示，轻量上下文聚合模块提供互补全局上下文。
- 深度强化学习（DRL）方法在 FJSP 上严重依赖注意力中心架构取得最先进性能，但随问题规模扩大遭受参数过多与推理延迟过高；液体神经网络（LNN）提供参数高效的替代，但其固有顺序动力学成为计算效率瓶颈。
- PLAN 是通用即插即用骨干：与紧凑随机模块配对用于随机 FJSP，替代多面动态 FJSP 中的重型异构图 Transformer。
- 确定性、随机与多面动态 FJSP 基准的广泛评估显示，PLAN 相对相应最先进基线平均 makespan 分别降低 1.2%、1.4% 与 2.3%（一个基准设置最高 10.2%），平均推理延迟分别降低 13.2%、31.7% 与 26.9%（最大实例最高 69.2%），仅用基线 22–47% 的参数。

## 正文

论文编号：arXiv:2608.03041v1（更新类型：cross）。以下为摘要全文翻译。

柔性作业车间调度（FJSP）的深度强化学习（DRL）方法严重依赖注意力中心架构来取得最先进的性能。然而，随着问题规模扩大，这些模型遭受参数过多与难以承受的推理延迟。虽然液体神经网络（LNN）为建模自适应状态演化提供参数高效的替代方案，但其固有的顺序动力学成为计算效率的瓶颈。为解决这一权衡，我们提出 PLAN（Parallel Liquid-inspired Approximation Network，并行液体启发近似网络），一个轻量表示学习框架，把连续液体状态动力学重构为离散化、可并行的公式。PLAN 在结构上把状态演化与上下文聚合解耦：液体启发更新处理主要的演化状态表示，而轻量上下文聚合模块提供互补的全局上下文。此外，PLAN 作为通用、即插即用的骨干：与紧凑随机模块配对用于随机 FJSP，并在多面动态 FJSP 中替代重型异构图 Transformer。在确定性、随机与多面动态 FJSP 基准上的广泛评估表明，PLAN 相对相应最先进基线把平均 makespan 分别降低 1.2%、1.4% 与 2.3%，在一个基准设置中提升达 10.2%；平均推理延迟分别降低 13.2%、31.7% 与 26.9%，最大实例上最高降低 69.2%；而参数仅为基线的 22–47%。

## 关键词

#作业车间调度 #液体神经网络 #强化学习 #表示学习
