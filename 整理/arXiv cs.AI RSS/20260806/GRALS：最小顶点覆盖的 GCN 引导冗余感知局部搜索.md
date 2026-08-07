---
published: 20260806
title: "GRALS：最小顶点覆盖的 GCN 引导冗余感知局部搜索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GRALS- GCN-Guided Redundancy-Aware Local Search for Minimum Vertex Cover.md"
source_note: "[[信息源/arXiv cs.AI RSS/GRALS- GCN-Guided Redundancy-Aware Local Search for Minimum Vertex Cover]]"
source_sha256: 401385959bc93740fb6a02249cd1857fb3158dee7eaa18539bf3e6eb6eb83628
original_url: "https://arxiv.org/abs/2503.06396"
processed: 2026-08-06
language: zh-CN

---

# GRALS：最小顶点覆盖的 GCN 引导冗余感知局部搜索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chanjuan Liu, Qiqi Bao, Yu Zhang, Enqiang Zhu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2503.06396)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GRALS- GCN-Guided Redundancy-Aware Local Search for Minimum Vertex Cover|查看原始文件]]

## 摘要

- 最小顶点覆盖（MVC）问题寻求识别覆盖无向图所有边的最小顶点集；作为基础 NP 难组合优化问题，MVC 因在网络分析和系统设计中的应用被广泛研究。
- 大规模实例中，局部搜索启发式是最有效方法之一，在解质量和计算效率间提供实用权衡；大多数现有高性能局部搜索算法采用破坏-修复框架，修复过程主要恢复可行性但为增强当前解结构提供有限机会。
- 本文引入 GRALS，一个集成图卷积网络学习顶点概率先验与扩展揭示消除（ERE）算子的局部搜索框架：学习先验引导搜索走向有前景区域，ERE 算子动态识别和消除冗余顶点进一步提升解质量；346 个基准实例实验显示 GRALS 在 335 个实例达已知最优解（最强基线 302 个），优势跨时间限制保持，在百万顶点大规模图尤其明显。

## 正文

最小顶点覆盖（MVC）问题寻求识别覆盖无向图所有边的最小顶点集。作为基础 NP 难组合优化问题，MVC 因在网络分析和系统设计中的应用被广泛研究。大规模实例中，局部搜索启发式是最有效的方法之一，在解质量和计算效率之间提供实用权衡。大多数现有高性能局部搜索算法采用破坏-修复（break-and-repair）框架，其中修复过程主要恢复可行性，但为增强当前解结构提供有限机会。我们引入 GRALS，一个集成图卷积网络（GCN）学习顶点概率先验与扩展揭示消除（ERE）算子的局部搜索框架。学习先验引导搜索走向有前景区域，而 ERE 算子动态识别和消除冗余顶点，进一步提升解质量。在 346 个基准实例上进行的实验表明，GRALS 在 335 个实例上达已知最优解，对比最强基线 302 个实例。GRALS 的优势跨不同时间限制保持，并在百万顶点的大规模图上尤为明显。

## 关键词

#最小顶点覆盖 #局部搜索 #图卷积网络 #组合优化 #arXiv