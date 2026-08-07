---
published: 20260806
title: "MESH：混合专家训练的内存高效 Sinkhorn 优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training.md"
source_note: "[[信息源/arXiv cs.AI RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training]]"
source_sha256: b2f02dc48cb17758691952c4d341132a30d601bf53f60dc1c63614cc26b2f123
original_url: "https://arxiv.org/abs/2608.04407"
processed: 2026-08-06
language: zh-CN

---

# MESH：混合专家训练的内存高效 Sinkhorn 优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Masato Fujitake
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04407)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MESH- Memory-Efficient Sinkhorn Optimization for Mixture-of-Experts Training|查看原始文件]]

## 摘要

- Sinkhorn 梯度下降等内存高效矩阵优化器移除大多数稠密 Transformer 矩阵的 AdamW 优化器状态，但直接应用于混合专家（MoE）训练不可靠；本文在受控 110M 参数 nanowhale DeepSeek 风格 MoE 预训练设置中研究此失败。
- SAGE/Sinkhorn 混合将优化器状态从 0.883GB 降至 0.331GB，但评估损失退化为 3.8265，远高于同一设置中观察到的 AdamW 基线（3.58-3.64）；显示路由 MoE 专家矩阵是主导失败点：其梯度条件性、随时间变化，无状态 Sinkhorn 归一化服务不佳。
- 提出 MESH，MoE 专家的隐藏动量 Sinkhorn 更新：通过梯度缓冲生命周期恢复时间一阶矩信号，不将专家一阶矩存储为优化器状态；消融中矩阵归一化前的时间平滑是主要因果成分；两个额外种子中 MESH 和 MESH-B 相对 AdamW 将优化器状态内存减少 62.5%，峰值 PyTorch CUDA 分配减少约 12.6%。

## 正文

Sinkhorn 梯度下降等内存高效矩阵优化器移除大多数稠密 Transformer 矩阵的 AdamW 优化器状态，但直接应用于混合专家（MoE）训练不可靠。我们在受控 110M 参数 nanowhale DeepSeek 风格 MoE 预训练设置中研究此失败。SAGE/Sinkhorn 混合将优化器状态从 0.883GB 降至 0.331GB，但评估损失退化为 3.8265，远高于同一设置中观察到的 AdamW 基线（3.58-3.64，跨我们研究的种子）。我们显示路由 MoE 专家矩阵是主导失败点：其梯度条件性、随时间变化，无状态 Sinkhorn 归一化服务不佳。我们提出 MESH，一个 MoE 专家的隐藏动量 Sinkhorn 更新。MESH 通过梯度缓冲生命周期恢复时间一阶矩信号，不将专家一阶矩存储为优化器状态。MESH 是一个可选块预条件变体，添加粗粒度神经元/块逆 RMS 乘数。跨消融，矩阵归一化前的时间平滑是主要因果成分；块/神经元预条件可改进内存-质量前沿，但未确立为普遍必要。两个额外种子中，MESH 和 MESH-B 相对 AdamW 将优化器状态内存减少 62.5%，峰值 PyTorch CUDA 分配减少约 12.6%，评估损失差距适中。全状态诊断变体在消融中恢复 AdamW 类似性能，支持结论：MoE 专家需要时间平滑，但不一定需要完整坐标 AdamW 状态。

## 关键词

#混合专家 #Sinkhorn #内存高效 #优化 #arXiv