---
published: 2026-08-05
title: "SMILES 与自然语言联合表示学习的双语义化学嵌入器"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Bi-semantic Chemical Embedder for Joint Representation Learning of SMILES and Natural Language.md"
source_note: "[[信息源/arXiv cs.LG RSS/Bi-semantic Chemical Embedder for Joint Representation Learning of SMILES and Natural Language]]"
source_sha256: 83cf01189a7a9e464b8d1f7c8d598bef621edc8271001bb7dfa906654b782d1b
original_url: "https://arxiv.org/abs/2608.03855"
processed: 2026-08-05
language: zh-CN
---

# SMILES 与自然语言联合表示学习的双语义化学嵌入器

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：David Ming Segura、Jeremy Goumaz、Joshua W. Sin 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03855)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Bi-semantic Chemical Embedder for Joint Representation Learning of SMILES and Natural Language|查看原始文件]]

## 摘要

- 引入 CheMatE，化学导向嵌入模型：在同一表示空间联合捕获分子结构与领域特定自然语言——基于 ModernBERT 骨干，经两阶段训练学习双语义表示：持续掩码语言建模（MLM）后接经多重负排名损失（MNRL）的 Matryoshka 对比学习阶段。
- Transformer 模型已变革自然语言处理（NLP），SMILES 等基于文本的分子表示成功把这些架构扩展到化学；但领域自适应预训练常使模型过拟合化学语法，灾难性遗忘其基础语义能力。
- 先在新型大规模 SMILES 标注长上下文科学文档语料上用 MLM 训练模型（从 FineWeb 与 ChemPile 构建与策展，分别含 104 亿与 115 亿 token）；随后用从原始训练语料算法派生的 SMILES-文本对合成数据集对比学习。
- 跨分子性质预测与科学语言理解的多个下游任务评估：耦合自定义策展数据集与顺序训练策略产生稳健、高度可迁移的表示——在单一基于文本的框架内有效统一结构与上下文信号，CheMatE 在专门化学模型与通用语言模型基线上都取得竞争性能。

## 正文

论文编号：arXiv:2608.03855v1（更新类型：new）。以下为摘要全文翻译。

Transformer 模型已经变革了自然语言处理（NLP），而 SMILES 等基于文本的分子表示已成功把这些架构扩展到化学。然而，领域自适应预训练往往使模型过拟合化学语法，灾难性地遗忘其基础语义能力。为应对这一挑战，我们引入 CheMatE，一个化学导向的嵌入模型：在同一表示空间内联合捕获分子结构与领域特定的自然语言。基于 ModernBERT 骨干，CheMatE 通过两阶段训练过程学习双语义表示：持续掩码语言建模（MLM），随后是经多重负排名损失（Multiple Negative Ranking Loss，MNRL）的 Matryoshka 对比学习阶段。首先，我们用一个新颖的、大规模的、SMILES 标注的长上下文科学文档语料（从 FineWeb 与 ChemPile 构建与策展，分别包含 104 亿与 115 亿 token）在该模型上用 MLM 训练。随后，该模型用从我们原始训练语料算法派生的 SMILES-文本对合成数据集进行对比学习。这一设计使模型接触 SMILES 丰富的科学文献，实现双语义理解。我们在涵盖分子性质预测与科学语言理解的多个下游任务上评估 CheMatE。我们的结果表明，把自定义策展数据集与此顺序训练策略耦合产生稳健、高度可迁移的表示。通过在一个单一基于文本的框架内有效统一结构与上下文信号，CheMatE 在专门化学模型与通用语言模型基线上都取得竞争性能。

## 关键词

#化学嵌入 #SMILES #对比学习 #分子表示
