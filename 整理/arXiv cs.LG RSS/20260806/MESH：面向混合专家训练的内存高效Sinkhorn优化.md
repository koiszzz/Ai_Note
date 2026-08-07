---
published: 2026-08-06
title: MESH：面向混合专家训练的内存高效Sinkhorn优化
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training.md
source_note: "[[信息源/arXiv cs.LG RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training]]"
source_sha256: fc54969c442b7ebb569437a78c32d562626416a86e34df0b3be8f3056e3de722
original_url: https://arxiv.org/abs/2608.04407
processed: 2026-08-07
language: zh-CN
---

# MESH：面向混合专家训练的内存高效Sinkhorn优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04407)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training|查看原始文件]]

## 摘要

- 在受控的 1.1 亿参数 nanowhale DeepSeek 风格 MoE 预训练设定中研究 Sinkhorn 类优化器应用于 MoE 训练的失效：路由 MoE 专家矩阵的梯度是有条件的、随时间变化的，无状态 Sinkhorn 归一化难以应对
- 提出 MESH：面向 MoE 专家的隐动量 Sinkhorn 更新，通过梯度缓冲区生命周期恢复时间一阶矩信号，且不将专家一阶矩存储为优化器状态；另可选块预条件变体
- 消融表明矩阵归一化前的时序平滑是主要因果成分；在额外两个种子中 MESH/MESH-B 相对 AdamW 减少 62.5% 优化器状态内存与约 12.6% 峰值 PyTorch CUDA 分配，评估损失差距很小

## 正文

Sinkhorn 梯度下降等内存高效矩阵优化器为稠密 Transformer 矩阵移除了大部分 AdamW 优化器状态，但直接应用于混合专家（MoE，Mixture-of-Experts）训练并不可靠。我们在一个受控的 1.1 亿参数 nanowhale DeepSeek 风格 MoE 预训练设定中研究这一失效。SAGE/Sinkhorn 混合方法将优化器状态从 0.883GB 降至 0.331GB，但评估损失恶化到 3.8265，远高于同一设定下观测到的 AdamW 基线（在我们研究的各种子间为 3.58–3.64）。我们表明，被路由的 MoE 专家矩阵是主要的失效点：其梯度是有条件的、随时间变化的，无状态 Sinkhorn 归一化难以胜任。我们提出 MESH，一种面向 MoE 专家的隐动量 Sinkhorn 更新。MESH 通过梯度缓冲区生命周期恢复时间一阶矩信号，而无需将专家一阶矩存储为优化器状态。MESH 还有一个可选的块预条件变体，它增加了粗粒度的神经元/块逆 RMS 乘子。在消融中，矩阵归一化之前的时序平滑是主要的因果成分；块/神经元预条件能够改进内存-质量前沿，但尚未被证明是普遍必要的。在另外两个种子中，MESH 与 MESH-B 相对 AdamW 将优化器状态内存减少 62.5%，峰值 PyTorch CUDA 分配减少约 12.6%，评估损失差距很小。全状态诊断变体在消融中恢复了接近 AdamW 的性能，这支持如下结论：MoE 专家需要时序平滑，但不一定需要完整的逐坐标 AdamW 状态。

## 关键词

#混合专家 #Sinkhorn #内存高效 #优化器 #MoE训练
