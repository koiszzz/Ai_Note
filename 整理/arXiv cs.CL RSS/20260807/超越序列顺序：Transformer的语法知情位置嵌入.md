---
published: 2026-08-07
title: "超越序列顺序：Transformer 的语法知情位置嵌入"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Beyond Sequence Order- Syntax-Informed Positional Embeddings for Transformers.md"
source_note: "[[信息源/arXiv cs.CL RSS/Beyond Sequence Order- Syntax-Informed Positional Embeddings for Transformers]]"
source_sha256: 12e00c78baf4d625db8fa3d2fe0807424aa32c8a505506eb31ffada2663a290c
original_url: "https://arxiv.org/abs/2608.06111"
processed: 2026-08-07
language: zh-CN
---

# 超越序列顺序：Transformer 的语法知情位置嵌入

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Haris Riaz, Hyungji Kim, Mihai Surdeanu
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06111)

## 摘要

- Transformer 位置嵌入（PE）编码 token 距离与顺序，但大体对句法结构无感知；引入语法知情位置嵌入（SiPE）：预训练期间从依赖解析学习轻量句法先验，跨全部三种主导 PE 家族（绝对、相对、旋转）注入，编码器与解码器皆可，自注意力与其余架构不动。
- 隔离先验应进入模型的何处与如何：发现依赖架构——相对 PE 自回归解码器中先验与注意力分数相对位置项乘性耦合最强，优于注入输入嵌入、自注意力或联合注入位置与注意力项；编码器最佳直接加输入嵌入，与各编码器原生位置机制组合。
- SiPE 预训练模型 SyntaxGym 基准提升最多 10.3%，同时困惑度较无句法监督基座降低 9.0%——几乎所有现有句法注入方法反而退化该度量。
- 关键增益超越句法泛化：SiPE 也改进真实语言理解，GLUE 分数相对无 SiPE 训练提升最多 8.2%；不同于推理时对多解析边缘化或运行时丢弃句法的现有句法语言模型，SiPE 条件化单一解析，在句法监督与推理成本间确立新帕累托前沿。

## 正文

Transformer 中的位置嵌入（positional embeddings, PE）编码 token 距离与顺序，但大体对句法结构无感知。研究引入语法知情位置嵌入（Syntax-informed Positional Embeddings, SiPE）：在预训练期间从依赖解析学习一个轻量句法先验，并跨全部三种主导 PE 家族（绝对、相对、旋转）注入，编码器与解码器皆可，同时保持自注意力与架构其余部分不变。研究隔离先验应在何处、如何进入模型，发现这依赖架构：对使用相对 PE 的自回归解码器，先验在与注意力分数的相对位置项乘性耦合时最强，优于注入输入嵌入、自注意力或联合注入位置与注意力项；而对编码器，最好直接加到输入嵌入上，与每个编码器的原生位置机制组合。研究发现，用 SiPE 预训练的模型在 SyntaxGym 基准上提升最多 10.3%，同时相对无句法监督的基座将困惑度降低 9.0%——这一度量几乎每个现有句法注入方法反而退化。关键的是，这些增益超越句法泛化：SiPE 还改进真实世界的语言理解，将 GLUE 基准分数相对无它训练的模型提升最多 8.2%。与在推理时对许多解析边缘化或运行时丢弃句法的现有句法语言模型不同，SiPE 条件化于单一解析，在句法监督与推理成本之间建立了新的帕累托前沿。

## 关键词

位置嵌入、句法、Transformer、依赖解析、预训练
