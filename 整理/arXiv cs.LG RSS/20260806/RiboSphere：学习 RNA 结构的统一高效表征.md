---
published: 2026-08-06
title: RiboSphere：学习 RNA 结构的统一高效表征
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/RiboSphere- Learning Unified and Efficient Representations of RNA Structures.md
source_note: "[[信息源/arXiv cs.LG RSS/RiboSphere- Learning Unified and Efficient Representations of RNA Structures]]"
source_sha256: 77728edc8efa7bb36385b5e42f79fc49686939c3f266b973ff846aeacec6d7a6
original_url: https://arxiv.org/abs/2603.19636
processed: 2026-08-07
language: zh-CN
---

# RiboSphere：学习 RNA 结构的统一高效表征

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.19636)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/RiboSphere- Learning Unified and Efficient Representations of RNA Structures|查看原始文件]]

## 摘要

- 精确的 RNA 结构建模仍具挑战：骨架高度柔性、非规范相互作用普遍、实验测定的 3D 结构相对稀缺；RiboSphere 结合向量量化与流匹配学习 RNA 的离散几何表征。
- 几何 Transformer 编码器以均中心坐标与随机旋转增强训练产生几何感知特征，经有限标量量化（FSQ）离散化为有限的潜在码词汇表；流匹配解码器重建原子坐标，实现高保真结构生成。
- 在结构重建上取得强性能（RMSD 1.25 Å、TM-score 0.84），预训练离散表征有效迁移到逆折叠与 RNA-配体结合预测，在数据稀缺场景下稳健泛化。

## 正文

精确的 RNA 结构建模仍然困难，因为 RNA 骨架高度柔性、非规范相互作用普遍存在，而实验测定的 3D 结构相对稀缺。作者引入 RiboSphere，一个通过结合向量量化与流匹配来学习 RNA 离散几何表征的框架。该设计源于 RNA 架构的模块化组织：复杂折叠由反复出现的结构基序组合而成。

RiboSphere 使用几何 Transformer 编码器，通过均中心坐标（mean-centered coordinates）训练并施加随机旋转增强，产生几何感知特征，再经有限标量量化（FSQ）离散化为有限的潜在码词汇表。在这些离散码的条件下，流匹配解码器重建原子坐标，实现高保真结构生成。作者发现学习到的码索引对特定 RNA 基序富集，表明模型捕获了基序级组合结构，而非仅仅充当压缩瓶颈。

在多个基准上，RiboSphere 在结构重建中取得强性能（RMSD 1.25 Å，TM-score 0.84），其预训练离散表征有效迁移至逆折叠（inverse folding）与 RNA-配体结合预测，并在数据稀缺场景下稳健泛化。代码见 https://github.com/Zhangz312/RiboSphere。

## 关键词

#RNA结构 #向量量化 #流匹配 #几何表征 #逆折叠 #生成模型
