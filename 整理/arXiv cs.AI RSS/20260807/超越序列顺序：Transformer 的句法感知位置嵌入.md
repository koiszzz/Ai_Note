---
published: 2026-08-07
title: "超越序列顺序：Transformer 的句法感知位置嵌入"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Beyond Sequence Order- Syntax-Informed Positional Embeddings for Transformers.md"
source_note: "[[信息源/arXiv cs.AI RSS/Beyond Sequence Order- Syntax-Informed Positional Embeddings for Transformers]]"
source_sha256: 6ca59bc76f153587f73a1fc1b73b9e1b6b8f7f9ef5f56196e76e738bdc5c7f35
original_url: "https://arxiv.org/abs/2608.06111"
processed: 2026-08-07
language: zh-CN
---

# 超越序列顺序：Transformer 的句法感知位置嵌入

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haris Riaz, Hyungji Kim, Mihai Surdeanu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06111)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Beyond Sequence Order- Syntax-Informed Positional Embeddings for Transformers|查看原始文件]]

## 摘要

- Transformer 中的位置嵌入（PE）编码 token 距离与顺序，但对句法结构 largely 不敏感。
- 引入句法感知位置嵌入（SiPE）：预训练期间从依存句法分析学习轻量句法先验，并将其注入全部三种主流 PE 族（绝对、相对、旋转），同时适用于编码器与解码器，不触碰自注意力与其余架构。
- 隔离先验应进入模型的位置与方式，发现取决于架构：对使用相对 PE 的自回归解码器，先验与注意力分数的相对位置项乘法耦合时最强，优于注入输入嵌入、自注意力或同时注入位置与注意力项；对编码器则最好直接加到输入嵌入上，与各编码器原生位置机制组合。
- SiPE 预训练模型在 SyntaxGym 基准上最多提升 10.3%，同时困惑度比无句法监督的基础模型降低 9.0%——几乎所有现有句法注入方法反而使该指标退化；增益还延伸到真实语言理解（GLUE 最多 +8.2%）；与在推理时对多个句法分析求边际或运行时丢弃句法的现有句法语言模型不同，SiPE 只条件于单一分析，建立句法监督与推理成本之间的新帕累托前沿。

## 正文

Transformer 中的位置嵌入（PE）编码 token 距离与顺序，但对句法结构 largely 不敏感。我们引入句法感知位置嵌入（Syntax-informed Positional Embeddings，SiPE）：在预训练期间从依存句法分析学习轻量句法先验，并将其注入全部三种主流 PE 族（绝对、相对、旋转），同时适用于编码器与解码器，保持自注意力与架构其余部分不变。我们隔离先验应进入模型的位置与方式，发现它取决于架构：对使用相对 PE 的自回归解码器，先验在与注意力分数的相对位置项乘法耦合时最强，优于注入输入嵌入、注入自注意力或同时注入位置与注意力项；而对编码器，最好直接加到输入嵌入上，与各编码器原生位置机制组合。我们发现，用 SiPE 预训练的模型在 SyntaxGym 基准上最多提升 10.3%，同时困惑度比无句法监督的基础模型降低 9.0%——几乎所有现有句法注入方法反而使该指标退化。关键在于，这些增益延伸到句法泛化之外：SiPE 还提升真实语言理解，在 GLUE 基准上比未用其训练的模型最多提高 8.2%。与在推理时对多个句法分析求边际或运行时丢弃句法的现有句法语言模型不同，SiPE 只条件于单一分析，在句法监督与推理成本之间建立新的帕累托前沿。

## 关键词

#位置嵌入 #句法 #Transformer #依存分析
