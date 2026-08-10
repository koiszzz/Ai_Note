---
published: 2026-08-07
title: "BaKron：基于 Kronecker 分解 Hessian 的高效量化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/BaKron- Efficient Quantization with Kronecker-Factored Hessians.md"
source_note: "[[信息源/arXiv cs.LG RSS/BaKron- Efficient Quantization with Kronecker-Factored Hessians]]"
source_sha256: 464a845b8e5782cbc85c149f466d85b777907db868de2ae3a20ca54b18146715
original_url: "https://arxiv.org/abs/2608.06291"
processed: 2026-08-07
language: zh-CN
---

# BaKron：基于 Kronecker 分解 Hessian 的高效量化

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Johann Birnick, Rayan Saab
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06291)

## 摘要

- 加速以 Kronecker 分解 Hessian 近似为几何信息的一族神经网络量化算法。
- 提出 BaKron：结合反对角并行与递归分治构造的高效求解器；对 m×n 权重矩阵用 O(m+n) 顺序步，将总工作量从 O(m²n²) 降至 O(mn(m+n))。
- 与 GPTQ 的立方级复杂度匹配，同时利用更丰富的曲率信息；对基量化器与 Hessian 估计器均模块化。
- 提供实用基准，考察可调用的多种 Hessian，并给出高效计算这些 Hessian 的技术。

## 正文

本文加速一族神经网络量化算法，其几何信息来自 Hessian 的任意 Kronecker 分解近似。GPTQ 式自适应舍入通常使用源自输入激活的单侧信息；双侧 Kronecker 分解 Hessian 近似还能捕捉输出坐标间的相关性，但将 GPTQ 直接应用于向量化权重域计算代价高昂。基于 BoA 与 YAQA 使用的双侧自适应舍入形式化，本文引入 BaKron，一个结合反对角并行与递归分治构造的高效求解器。对 m×n 权重矩阵，BaKron 使用 O(m+n) 个顺序步，同时将总工作量从 O(m²n²) 降至 O(mn(m+n))，从而匹配 GPTQ 的立方级扩展，同时利用更丰富的曲率信息。此外，BaKron 对基量化器与 Hessian 估计器均模块化。研究还提供实用基准，考察 BaKron 可配合使用的一系列 Hessian，找到高效计算这些 Hessian 的技术，并对算法进行实验评估。

## 关键词

量化、Hessian 近似、GPTQ、Kronecker 分解、神经网络压缩
