---
published: 2026-08-06
title: HiSC：面向高效3D场景理解的层次空间聚类令牌压缩
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/HiSC- Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding.md
source_note: "[[信息源/arXiv cs.CV RSS/HiSC- Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding]]"
source_sha256: 94237936e334dd4c8f90bff3d498eb2dac0fa81abc7f08d2fed6d1316ab813df
original_url: https://arxiv.org/abs/2608.04610
processed: 2026-08-07
language: zh-CN
---

# HiSC：面向高效3D场景理解的层次空间聚类令牌压缩

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04610)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/HiSC- Hierarchical Spatial Clustering Token Compression for Efficient 3D Scene Understanding|查看原始文件]]

## 摘要

- 提出 HiSC：面向 3D 视觉语言模型（3D VLM）的免训练层次空间聚类令牌压缩框架，利用联合几何与语义线索将令牌组织为空间有根的聚类，把压缩从令牌级选择提升到聚类级处理
- 引入空间图基合并（SGraM）策略，将跨视图冗余建模为空间连通性、整合物理一致区域，在 LLM 推理前合并极度相似的冗余令牌；提出空间聚类基剪枝（SCluP）范式，在推理内进行聚类间与聚类内的层次压缩
- 在多种 3D 推理基准上验证有效性，尤其在高视觉令牌剪枝率下；实现超过 90% 的令牌缩减且性能损失极小

## 正文

3D 视觉语言模型（3D VLM）能够对多视角场景进行空间推理，但受重复观测和大量无信息区域的影响，存在显著的令牌冗余，导致计算成本高昂。尽管视觉令牌压缩在加速 2D VLM 方面已显示出潜力，但它无法捕捉 3D 场景的结构化特性，导致空间覆盖不完整并丢失细粒度细节。在本文中，我们提出 HiSC，一种用于 3D VLM 的免训练层次空间聚类令牌压缩框架。HiSC 利用联合几何与语义线索，将令牌组织为空间有根的聚类（spatially grounded clusters），从而将令牌压缩从令牌级选择提升到聚类级处理。具体来说，我们首先引入空间图基合并（Spatial Graph-based Merging，SGraM）策略，将跨视图冗余建模为空间连通性并整合物理一致的区域，在 LLM 推理前有效合并极度相似的冗余令牌。随后我们提出空间聚类基剪枝（Spatial Clustering-based Pruning，SCluP）范式，在 LLM 推理内进行聚类间与聚类内的层次压缩，在保留目标实例完整性的同时为重要区域保留细粒度细节。在多种 3D 推理基准上的大量实验验证了 HiSC 的有效性，尤其是在高视觉令牌剪枝率下。此外，HiSC 在性能几乎不损失的情况下实现了超过 90% 的令牌缩减。代码可在 https://github.com/elecreak/HiSC 获取。

## 关键词

#3D视觉语言模型 #令牌压缩 #空间聚类 #高效推理
