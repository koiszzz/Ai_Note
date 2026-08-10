---
published: 2026-08-07
title: "反向 BSDE 扩散采样器"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/A Reverse-BSDE Diffusion Sampler.md"
source_note: "[[信息源/arXiv cs.LG RSS/A Reverse-BSDE Diffusion Sampler]]"
source_sha256: 44781c6aab4919cb2596376217a6d4ae2c90c02c8ff38fe0c82c2401cf43c182
original_url: "https://arxiv.org/abs/2505.06800"
processed: 2026-08-07
language: zh-CN
---

# 反向 BSDE 扩散采样器

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Jairon H. N. Batista, Flávio B. Gonçalves, Yuri F. Saporito, Rodrigo S. Targino
> - **发布时间**：2026-08-07
> - **分类**：stat.ML
> - **原文**：[打开链接](https://arxiv.org/abs/2505.06800)

## 摘要

- 将逆时扩散采样器重构为前向-后向随机微分方程（FBSDE），适用于目标密度仅知其归一化常数前因子的场景。
- 该形式化以求解耦合随机系统取代对时间依赖分数的单独预估计，并证明两种形式化等价。
- 给出由高斯初始化、欧拉离散化与近似求解 FBSDE 引起的近似误差分解。
- 在分离混合分布、各向异性高斯、香蕉形与环形分布上验证方法，尤其适合具有复杂全局结构的目标。

## 正文

基于扩散的生成模型重新激发了利用随机微分方程方法从复杂分布采样的研究兴趣。本文研究目标密度仅知其归一化常数（仅差一个比例常数）的场景，并将逆时扩散采样器重构为前向-后向随机微分方程（FBSDE）。这一形式化以求解一个耦合随机系统取代对时间依赖分数的单独预估计。研究证明了这两种形式化的等价性，并给出近似误差的分解：该误差来源于以标准高斯分布初始化采样器、对动力学进行欧拉离散化以及近似求解 FBSDE。随后，研究在合成目标上评估了所提算法，包括分离混合分布、各向异性高斯分布以及香蕉形与环形分布。结果表明该方法前景良好，尤其适用于具有复杂全局结构的目标。

## 关键词

扩散模型、FBSDE、采样、随机微分方程、生成模型
