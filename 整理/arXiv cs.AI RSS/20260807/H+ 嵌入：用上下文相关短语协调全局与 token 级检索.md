---
published: 2026-08-07
title: "H+ 嵌入：用上下文相关短语协调全局与 token 级检索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/H+ Embedding- Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases.md"
source_note: "[[信息源/arXiv cs.AI RSS/H+ Embedding- Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases]]"
source_sha256: 74ef5dada0b6f794c0bd7a1377ab0bc62a35937f9eb51793234375db5af9867a
original_url: "https://arxiv.org/abs/2608.00065"
processed: 2026-08-07
language: zh-CN
---

# H+ 嵌入：用上下文相关短语协调全局与 token 级检索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shusen Zhang, Junyi Hu, Ye Feng, Ziteng Wang, Zhaoyuan Pan, Guosheng Dong, Xiaojun Yuan, Jiangshou Hong, Xiangzhi Wang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.00065)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/H+ Embedding- Harmonizing Global and Token-Level Retrieval with Context-Dependent Phrases|查看原始文件]]

## 摘要

- 术语密集型检索（尤其医疗场景）依赖保留多词实体、缩写、数值约束与组合概念；但现有表示处于两个极端：单向量检索器常过度压缩局部相关信号，token 级后期交互以大量索引、存储与评分成本保留每个 tokenizer 子词。
- 这种失配提出自然问题：上下文相关短语能否在全局向量与 token 之间提供有用的检索单元？
- 引入 H+ 嵌入：统一多粒度检索器，预测可变长度短语分区，将未覆盖 token 保留为单例，并应用重要性引导单元选择与加权 MaxSim 交互。
- 在 16 个科学、医学与双语任务上，其短语检索分支超过全局检索分支 6.91 宏 nDCG@10；使用少 13.7% 的文档向量几乎匹配 Token，并在中等向量预算下优于内容无关分组规则；上下文相关短语交互因此在全局压缩与 token 级交互之间为实用检索系统提供中间质量-成本点。

## 正文

术语密集型检索（terminology-intensive retrieval），尤其在医疗场景中，依赖保留多词实体、缩写、数值约束与组合概念。然而，现有表示处于两个极端：单向量检索器往往过度压缩局部相关信号，而 token 级后期交互（late interaction）以大量索引、存储与评分成本保留每个 tokenizer 子词。这种失配提出一个自然问题：上下文相关短语能否在全局向量与 token 之间提供有用的检索单元？我们引入 H+ 嵌入（H+ Embedding），一个统一的多粒度检索器：预测可变长度短语分区，将未覆盖 token 保留为单例，并应用重要性引导的单元选择与加权 MaxSim 交互。在 16 个科学、医学与双语任务上，其短语检索分支超过全局检索分支 6.91 宏 nDCG@10。它还在使用少 13.7% 文档向量的情况下几乎匹配 Token，并在中等向量预算下优于内容无关的分组规则。因此，上下文相关短语交互为实用检索系统提供了介于全局压缩与 token 级交互之间的中间质量-成本点。

## 关键词

#检索 #短语嵌入 #多粒度 #医学检索
