---
published: 2026-08-05
title: "等变音乐 Transformer"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Equivariant Music Transformer.md"
source_note: "[[信息源/arXiv cs.AI RSS/Equivariant Music Transformer]]"
source_sha256: 98fdabe1988b7dcd856efb4938b750da2eb4588064237a8a04d3837aa78d97f2
original_url: "https://arxiv.org/abs/2608.03920"
processed: 2026-08-05
language: zh-CN
---

# 等变音乐 Transformer

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zixun Guo、Simon Dixon
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03920)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Equivariant Music Transformer|查看原始文件]]

## 摘要

- 分析显示标准音乐 Transformer 把时间平移或音高移调后的输入映射到不相关的表示：模型随规模增大或训练时间增长变得越来越不等变，额外容量被用于记忆绝对模式而非共享音乐结构。
- 提出等变音乐 Transformer（EMT）：通过自蒸馏联合优化下一 token 预测与辅助等变正则化损失来强制等变性。
- 额外的等变损失作为有益正则化器，同时改善下一 token 预测并产生等变潜表示。
- 客观与主观评估显示，EMT 在等变性与生成能力上优于数据增强、特征工程与最先进基线；代码、权重与演示已在线发布。

## 正文

论文编号：arXiv:2608.03920v1（更新类型：cross）。以下为摘要全文翻译。

人类即使在时间平移或音高移调后仍能识别一段音乐，这表明表示空间中存在等变性的概念。然而，我们的分析显示，标准音乐 Transformer 把此类时间平移或音高移调的输入映射到不相关的表示：这些模型随规模增大或训练时间增长而变得越来越不等变。这表明在标准音乐 Transformer 中，额外的模型容量被用于记忆绝对模式，而非捕获共享的音乐结构。在本文中，我们提出等变音乐 Transformer（EMT），通过自蒸馏强制等变性：联合优化下一 token 预测与辅助等变正则化损失。我们发现，额外的等变损失作为有益的正则化器，同时改善下一 token 预测并产生等变的潜表示。通过客观与主观评估，EMT 在等变性与生成能力上优于数据增强、特征工程与最先进（SOTA）基线。更广泛地看，我们的发现揭示，仅靠标准语言建模方法无法捕获音乐的平移对称性，需要专门的归纳偏置才能产生更好的音乐表示。代码、权重与演示已在线发布。

## 关键词

#音乐生成 #Transformer #等变性 #自蒸馏
