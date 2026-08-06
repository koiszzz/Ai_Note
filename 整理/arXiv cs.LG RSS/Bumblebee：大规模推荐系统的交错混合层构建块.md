---
title: "Bumblebee：大规模推荐系统的交错混合层构建块"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Bumblebee- Interleaved Mixed-Layer Building Blocks for Large-Scale Recommendation Systems.md"
source_note: "[[信息源/arXiv cs.LG RSS/Bumblebee- Interleaved Mixed-Layer Building Blocks for Large-Scale Recommendation Systems]]"
source_sha256: ae8da699f1fa0899c3d81b290f35c279c9359f5476e281e351329057f74fdb3a
original_url: "https://arxiv.org/abs/2607.24804"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Bumblebee：大规模推荐系统的交错混合层构建块

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：David Bauer、Cancan Zhang、Wenshun Liu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.24804)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Bumblebee- Interleaved Mixed-Layer Building Blocks for Large-Scale Recommendation Systems|查看原始文件]]

## 摘要

- 引入 Bumblebee，推荐架构：通过交错、可堆叠块设计解决两个方向间缺乏交互的问题——每块实现层微流水线，把序列个性化、基于注意力的编码与特征交叉组合进自包含单元；每块产生两种特征模态的联合表示，由序列中下一块消费；该机制鼓励模态早期与重复混合，并用额外上下文信息丰富下游特征。
- 推荐系统近年发生重大变革：从传统特征交互模块到生成式下一动作预测，个性化内容边界被推动；发展大体沿两条独立轨道：序列建模方法一边、特征交互方法另一边。
- 块间残差连接创建跨模态信息通路，无需添加参数即产生额外预测性能；块可通过选择性丢弃组件特化，实现质量与吞吐间的灵活权衡。
- 在大规模工业数据上评估，显示跨多个分类与回归任务相对可比基线模型的一致改善；消融研究确认交错组合本身是这些改善的主要驱动——交错异构功能单元（而非堆叠深度栈）是未来一代推荐架构的有前景范式。

## 正文

论文编号：arXiv:2607.24804v2（更新类型：replace-cross）。以下为摘要全文翻译。

推荐系统在过去几年经历了重大变革。从传统特征交互模块向生成式下一动作预测的转变推动了个性化内容的边界。发展大体沿两条独立轨道演进：一边是序列建模方法，另一边是特征交互方法。在本文中，我们引入 Bumblebee，一个推荐架构：通过交错的、可堆叠块设计解决两个方向之间缺乏交互的问题。每个块实现一个层微流水线：把序列个性化、基于注意力的编码与特征交叉组合进一个自包含单元。每个块产生两种特征模态的联合表示，由序列中的下一个块消费。这一机制鼓励模态的早期与重复混合，并用额外上下文信息丰富下游特征。块之间的残差连接创建跨模态信息通路，在不添加参数的情况下产生额外的预测性能。块可以通过选择性丢弃组件而特化，实现质量与吞吐之间的灵活权衡。我们在大规模工业数据上评估我们的方法，并显示跨多个分类与回归任务相对可比基线模型的一致改善。此外，我们进行消融研究，确认交错组合本身是这些改善的主要驱动。我们的结果表明，交错异构功能单元（而非组合深堆栈）是未来一代推荐架构的有前景范式。

## 关键词

#推荐系统 #序列建模 #特征交叉 #交错架构
