---
published: 2026-08-07
title: "H+ 嵌入：用上下文相关短语调和全局与 token 级检索"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/H+ Embedding- Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases.md"
source_note: "[[信息源/arXiv cs.LG RSS/H+ Embedding- Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases]]"
source_sha256: 6a5baa76dbe4053890f48112ff739f4f15a6eed52c536f384b1e3caecc55c534
original_url: "https://arxiv.org/abs/2608.00065"
processed: 2026-08-07
language: zh-CN
---

# H+ 嵌入：用上下文相关短语调和全局与 token 级检索

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Shusen Zhang, Junyi Hu, Ye Feng, Ziteng Wang, Zhaoyuan Pan, Guosheng Dong, Xiaojun Yuan, Jiangshou Hong, Xiangzhi Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.00065)

## 摘要

- 术语密集型检索（尤其医疗）依赖保留多词实体、缩写、数值约束与组合概念；单向量检索器常过度压缩局部相关性信号，token 级后期交互则以可观索引、存储与评分成本保留每个分词器子词。
- 提出 H+ Embedding：统一多粒度检索器，预测变长短语分区、将未覆盖 token 保留为单例，并应用重要性引导单元选择与加权 MaxSim 交互。
- 16 个科学、医疗与双语任务上，短语检索分支超全局检索分支 6.91 宏观 nDCG@10；使用少 13.7% 文档向量就几乎匹配 Token。
- 上下文相关短语交互提供全局压缩与 token 级交互之间的中间质量-成本点。

## 正文

术语密集型检索，尤其是医疗场景，依赖于保留多词实体、缩写、数值约束与组合概念。然而，现有表征处于两个极端：单向量检索器常过度压缩局部相关性信号，而 token 级后期交互以可观的索引、存储与评分成本保留每个分词器子词。这种错配引出自然问题：上下文相关短语能否在全局向量与 token 之间提供有用的检索单元？研究引入 H+ Embedding，一个统一多粒度检索器：预测变长短语分区、将未覆盖 token 保留为单例，并应用重要性引导单元选择与加权 MaxSim 交互。在 16 个科学、医疗与双语任务上，其短语检索分支超出全局检索分支 6.91 宏观 nDCG@10；它使用少 13.7% 的文档向量就几乎匹配 Token，并在中等向量预算下优于内容无关的分组规则。因此，上下文相关短语交互为实用检索系统提供了全局压缩与 token 级交互之间的中间质量-成本点。

## 关键词

检索、嵌入、短语、多粒度、后期交互
