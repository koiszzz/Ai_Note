---
published: 2026-08-06
title: Kathleen写作：无注意力机制的自回归生成与数据扩展
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention.md
source_note: "[[信息源/arXiv cs.LG RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention]]"
source_sha256: 09ffacccf08687a48a94972b75baddaba1bd19cba6e8d4f0ddbdd53b0012f613
original_url: https://arxiv.org/abs/2608.04678
processed: 2026-08-07
language: zh-CN
---

# Kathleen写作：无注意力机制的自回归生成与数据扩展

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04678)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention|查看原始文件]]

## 摘要

- 字节级无注意力混响架构在语言建模上以约 50 万参数胜过参数匹配的 transformer，数据效率更高
- 引入 FORM DISTANCE，一种抗博弈的"读起来像文本"非参数度量
- 解码策略主导架构：加宽采样器使距离减半，检索增强解码进一步提升；短语必须来自自身训练语料

## 正文

Kathleen 系列论文的第 1-2 篇表明，一种由波表编码器（wavetable encoder）与多尺度混响状态（multi-scale reverberant state）构建的字节级无注意力架构，可在约 45-70 万参数、无需预训练的情况下，在分类任务上媲美强基线。我们追问同样的构件能否用于生成。(1) 扩展：在字节级语言建模（WikiText-103，原始 UTF-8，无分词器）上，混响模型在所测量的每个数据集规模（2-512 MB）下都优于参数匹配的 transformer，例如约 50 万参数时在 512 MB 下达到 1.84 对比 2.04 比特/字节；transformer 需要超过 512 MB 的数据才能匹敌无注意力模型仅从 32 MB 学到的水平。(2) 度量：我们引入 FORM DISTANCE——一种非参数、抗博弈的"读起来像文本"（reads like text）度量工具：人类文本的九个统计轴定义了一个参考云，五个构造的伪造样本均被拒绝。(3) 生成：解码策略主导架构——加宽采样器使同一模型的距离减半（3.17 降至 1.52），而检索增强解码方案在零训练步骤的情况下将冻结模型进一步推进（1.52 降至 1.14）；消融将该增益归因于稀疏短语剂量本身，而非选择门。该增益存在一个尖锐的边界条件：短语必须来自模型自身的训练语料——一个大 40 倍的外部库毫无帮助，而注意力孪生模型也存在同样效应，这与上下文内整合（in-context integration）是规模化能力这一认识一致。我们还报告了四个没有帮助的架构补充，以及一个计算出的词典，以五分之一的参数达到习得表格 top-1 准确率的 94%。所有实验均在离线运行；全部实验可在免费的 Kaggle T4 上复现。

## 关键词

#无注意力架构 #自回归生成 #数据扩展 #语言建模 #检索增强解码 #Kathleen
