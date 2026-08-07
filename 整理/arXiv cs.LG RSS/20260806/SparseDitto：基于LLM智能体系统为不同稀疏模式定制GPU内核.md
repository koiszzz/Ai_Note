---
published: 2026-08-06
title: SparseDitto：基于LLM智能体系统为不同稀疏模式定制GPU内核
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SparseDitto- Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System.md
source_note: "[[信息源/arXiv cs.LG RSS/SparseDitto- Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System]]"
source_sha256: 0745b6d85dc43093b73dab645c7e20c4707b984de6f399816d0094eddabbe0a7
original_url: https://arxiv.org/abs/2608.05033
processed: 2026-08-07
language: zh-CN
---

# SparseDitto：基于LLM智能体系统为不同稀疏模式定制GPU内核

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05033)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SparseDitto- Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System|查看原始文件]]

## 摘要

- SparseDitto 是一个基于 LLM 的系统，为每个矩阵、算子与目标 GPU 构造定制 GPU 内核，统一支持 SpMV、SpMM 与 SpGEMM。
- 轻量级加性模型用矩阵结构特征对策略排序，架构感知规划器提出候选设计，编码与验证智能体基于目标 GPU 实测结果迭代完善。
- 相对 cuSPARSE，在 RTX PRO 6000 上取得 2.68 倍几何平均加速（最高 146.61 倍），在 H200 上取得 2.79 倍（最高 78.5 倍），并可将全批量 GCN 训练加速最高 3.39 倍。

## 正文

稀疏矩阵内核是科学计算、图分析与机器学习的基础。其 GPU 性能高度依赖于输入的稀疏模式与执行策略。对同一个矩阵上的同一 SpMM 运算，cuSPARSE 在 CSR 与 Blocked-ELL 格式之间存在 350 倍的性能差距。我们对多种数据格式、专用系统与稀疏编译器的研究表明，没有任何单一实现能在各种稀疏模式与算子上一贯占优。这促使我们构建一个能针对每个工作负载与目标 GPU 自适应地调整其表示、执行策略与硬件映射的系统。

我们提出 SparseDitto，一个基于 LLM 的系统，它为每个矩阵、算子与目标 GPU 构造 GPU 内核。SparseDitto 在统一的设计框架内支持 SpMV、SpMM 与 SpGEMM。一个轻量级加性模型利用输入矩阵的结构特征对已有策略进行排序。随后一个架构感知的规划器提出若干候选设计。编码与验证智能体利用目标 GPU 上的测量结果对它们进行实现与改进。在三个稀疏算子与一组多样的矩阵上，SparseDitto 在 NVIDIA RTX PRO 6000 GPU 上相对 cuSPARSE 取得 2.68 倍的几何平均加速，最高达 146.61 倍。在 NVIDIA H200 GPU 上取得 2.79 倍，最高 78.5 倍。其生成的 SpMM 内核还将全批量 GCN 训练加速最高 3.39 倍。

## 关键词

#稀疏矩阵 #GPU内核 #LLM智能体 #SpMM #CUDA
