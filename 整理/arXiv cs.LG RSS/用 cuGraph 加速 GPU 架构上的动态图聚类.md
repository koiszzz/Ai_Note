---
title: "用 cuGraph 加速 GPU 架构上的动态图聚类"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Accelerating Dynamic Graph Clustering on GPU Architectures with cuGraph.md"
source_note: "[[信息源/arXiv cs.LG RSS/Accelerating Dynamic Graph Clustering on GPU Architectures with cuGraph]]"
source_sha256: aae504f88b0014a794d06f913b4388af682b92e09c50a0672f2c8c255ea419b3
original_url: "https://arxiv.org/abs/2608.03695"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 用 cuGraph 加速 GPU 架构上的动态图聚类

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Nelson Aloysio Reis de Almeida Passos、Emanuele Carlini、Salvatore Trani
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03695)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Accelerating Dynamic Graph Clustering on GPU Architectures with cuGraph|查看原始文件]]

## 摘要

- 通过谱聚类与基于模块度算法的 GPU 加速扩展解决时序网络社区检测（原为静态图设计）：框架构建于 NVIDIA RAPIDS 生态，支持快照动态图的社区刻画与跟踪——经带 Dask 工作负载分布的多 GPU 支持的 Leiden 贪心优化，或对称 Bethe-Hessian 算子的特征分解。
- 多切片模块度后端在等功预算下相对 CPU 参考实现高达约三个数量级加速（取决于图密度与快照数），同时保持与现有图分析流水线兼容。
- 在真实世界与合成数据集上演示适用性，促进网络结构属性随时间的探索性分析。
- 相关应用领域：流行病传播、金融系统、网络安全与轨迹及移动性分析；实现以自由开源软件发布，含经 NetworkX-Temporal 库的 Python 绑定，便于使用与现有代码库零代码加速。

## 正文

论文编号：arXiv:2608.03695v1（更新类型：cross）。以下为摘要全文翻译。

本工作通过谱聚类与基于模块度算法的 GPU 加速扩展解决时序网络中的社区检测，这些算法原本为静态图设计。框架构建于 NVIDIA RAPIDS 生态，支持快照式动态图中社区的刻画与跟踪：经带 Dask 工作负载分布的多 GPU 支持的 Leiden 贪心优化，或对称 Bethe-Hessian 算子的特征分解。我们的多切片模块度后端在等功预算下、相对 CPU 参考实现取得高达约三个数量级的加速（取决于图密度与快照数），同时保持与现有图分析流水线的兼容性。我们在真实世界与合成数据集上演示其适用性，促进对网络结构属性随时间的探索性分析。这些能力与多个应用领域相关，如流行病传播、金融系统、网络安全以及轨迹与移动性分析。我们把实现作为自由开源软件发布，包括经 NetworkX-Temporal 库的 Python 绑定，便于使用，并能为现有代码库提供零代码加速。

## 关键词

#动态图 #社区检测 #GPU加速 #时序网络
