---
published: 2026-08-06
title: MESH：面向混合专家训练的显存高效Sinkhorn优化
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training.md
source_note: "[[信息源/arXiv cs.CL RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training|查看原始文件]]"
source_sha256: 4934d7941c2ea18de955755146aa31f126af238ea77245a9ee53e46728f0dda7
original_url: https://arxiv.org/abs/2608.04407
processed: 2026-08-07
language: zh-CN
---

# MESH：面向混合专家训练的显存高效Sinkhorn优化

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04407)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training|查看原始文件]]

## 摘要

- Sinkhorn 梯度下降等显存高效的矩阵优化器去除了稠密 Transformer 矩阵的大部分 AdamW 优化器状态，但直接应用于混合专家（MoE）训练不可靠。
- 在受控的 1.1 亿参数 nanowhale DeepSeek 式 MoE 预训练设定中研究该失败：SAGE/Sinkhorn 混合把优化器状态从 0.883GB 降至 0.331GB，但评估损失退化到 3.8265，远高于同一设定下 AdamW 基线的 3.58-3.64。
- 被路由的 MoE 专家矩阵是主要失败点：其梯度是有条件的、随时间变化，无状态的 Sinkhorn 归一化难以胜任。
- 本文提出 MESH，一种面向 MoE 专家的隐藏动量（hidden-momentum）Sinkhorn 更新，通过梯度缓冲区生命周期恢复时间一阶矩信号，无需将专家一阶矩存为优化器状态；另有可选的 MESH-B 块预条件变体。
- 在额外两个种子上，MESH/MESH-B 相对 AdamW 将优化器状态显存降低 62.5%、峰值 PyTorch CUDA 分配降低约 12.6%，评估损失差距很小；结论是 MoE 专家需要时间平滑，但不一定需要完整的逐坐标 AdamW 状态。

## 正文

Sinkhorn 梯度下降等显存高效的矩阵优化器移除了稠密 Transformer 矩阵的大部分 AdamW 优化器状态，但直接应用于混合专家（Mixture-of-Experts，MoE）训练是不可靠的。我们在一个受控的 1.1 亿参数 nanowhale DeepSeek 式 MoE 预训练设定中研究这一失败。SAGE/Sinkhorn 混合将优化器状态从 0.883GB 降至 0.331GB，但将评估损失退化到 3.8265，远高于同一设定中观察到的 AdamW 基线（在我们研究的各种子间为 3.58-3.64）。

我们表明，被路由的 MoE 专家矩阵是主要的失败点：它们的梯度是有条件的（conditional）、随时间变化的，并且无状态的 Sinkhorn 归一化难以很好地服务它们。我们提出 MESH，一种面向 MoE 专家的隐藏动量 Sinkhorn 更新。MESH 通过梯度缓冲区生命周期（gradient-buffer lifecycle）恢复时间一阶矩信号，而无需将专家一阶矩存储为优化器状态。MESH 还有一种可选的块预条件变体，它增加一个粗略的神经元/块逆 RMS 乘子。

在消融实验中，矩阵归一化之前的时间平滑是主要的因果成分；块/神经元预条件可以改进显存-质量前沿，但并未被证明是普遍必要的。在另外两个种子上，MESH 和 MESH-B 相对 AdamW 将优化器状态显存降低 62.5%，峰值 PyTorch CUDA 分配降低约 12.6%，评估损失差距很小。全状态诊断变体在消融中恢复了接近 AdamW 的性能，支持了如下结论：MoE 专家需要时间平滑，但不一定需要完整的逐坐标 AdamW 状态。

## 关键词

#MoE #Sinkhorn #显存高效优化 #预训练 #arXiv
