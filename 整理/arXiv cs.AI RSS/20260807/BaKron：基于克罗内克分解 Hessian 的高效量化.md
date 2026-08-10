---
published: 2026-08-07
title: "BaKron：基于克罗内克分解 Hessian 的高效量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BaKron- Efficient Quantization with Kronecker-Factored Hessians.md"
source_note: "[[信息源/arXiv cs.AI RSS/BaKron- Efficient Quantization with Kronecker-Factored Hessians]]"
source_sha256: c1a988ee3f6e02fe9c686e18991514510dec4c72704b180c8b4bb1771a3bf35b
original_url: "https://arxiv.org/abs/2608.06291"
processed: 2026-08-07
language: zh-CN
---

# BaKron：基于克罗内克分解 Hessian 的高效量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Johann Birnick, Rayan Saab
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06291)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BaKron- Efficient Quantization with Kronecker-Factored Hessians|查看原始文件]]

## 摘要

- 论文加速一族神经网络量化算法，其几何由 Hessian 的任意克罗内克分解近似驱动。
- GPTQ 式自适应舍入通常使用来自输入激活的单侧信息；双侧克罗内克分解 Hessian 近似还能捕获跨输出坐标的相关性，但在向量化权重域直接应用 GPTQ 计算昂贵。
- 基于 BoA 与 YAQA 使用的双侧自适应舍入表述，提出 BaKron：一个结合反对角并行与递归分治构造的高效求解器。对 m×n 权重矩阵，BaKron 使用 O(m+n) 顺序步骤，同时将总工作量从 O(m²n²) 降至 O(mn(m+n))，匹配 GPTQ 的三次规模同时利用更丰富的曲率信息。
- BaKron 对基础量化器与 Hessian 估计器均模块化；提供实用基准、考察 BaKron 可用的多种 Hessian、找到高效计算这些 Hessian 的技术，并进行实验评估。

## 正文

我们加速一族神经网络量化算法，其几何由 Hessian 的任意克罗内克分解近似驱动。GPTQ 式自适应舍入通常使用来自输入激活的单侧信息。双侧克罗内克分解 Hessian 近似还能额外捕获跨输出坐标的相关性，但在向量化权重域直接应用 GPTQ 计算昂贵。基于 BoA 与 YAQA 使用的双侧自适应舍入表述，我们引入 BaKron，一个结合反对角并行与递归分治构造的高效求解器。对 m×n 权重矩阵，BaKron 使用 O(m+n) 个顺序步骤，同时将总工作量从 O(m²n²) 降至 O(mn(m+n))。因此，它在利用更丰富曲率信息的同时匹配 GPTQ 的三次规模。此外，BaKron 对基础量化器与 Hessian 估计器均模块化。我们还提供实用基准，考察 BaKron 可以搭配的一系列 Hessian，找到一种高效计算这些 Hessian 的技术，并对算法进行实验评估。

## 关键词

#神经网络量化 #Hessian近似 #GPTQ #模型压缩
