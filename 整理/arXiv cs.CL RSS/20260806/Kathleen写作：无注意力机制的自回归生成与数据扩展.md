---
published: 2026-08-06
title: Kathleen 写作：无注意力机制的自回归生成与数据扩展
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention.md
source_note: "[[信息源/arXiv cs.CL RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention|查看原始文件]]"
source_sha256: a3c8cb59e8f11edec41042f8f50f59b7f62ce6642f4fe879dc9dfb599a3bd050
original_url: https://arxiv.org/abs/2608.04678
processed: 2026-08-07
language: zh-CN
---

# Kathleen 写作：无注意力机制的自回归生成与数据扩展

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04678)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Kathleen Writes- Autoregressive Generation and Data Scaling Without Attention|查看原始文件]]

## 摘要

- Kathleen 系列论文第 1–2 篇表明，由波表编码器（wavetable encoder）和多尺度混响状态构成的字节级无注意力架构，可在约 450–700K 参数、无需预训练的情况下达到强基线的分类性能；本文研究同样的组件能否用于生成。
- 扩展：在字节级语言建模（WikiText-103，原始 UTF-8，无分词器）上，混响模型在每个数据集规模（2–512 MB）上都胜过参数匹配的 transformer，例如约 0.5M 参数下 512 MB 时 1.84 对 2.04 比特/字节；transformer 需要超过 512 MB 才能匹配无注意力模型从 32 MB 学到的效果。
- 度量：引入 FORM DISTANCE，一个非参数、抗博弈的"读起来像文本"测量工具：人类文本的九个统计轴构成参考云，五个构造的假样本全部被拒绝。
- 生成：解码策略主导架构——加宽采样器使同一模型的距离减半（3.17 到 1.52），检索增强解码方案在无需任何训练步骤的情况下进一步缩小冻结模型的距离（1.52 到 1.14）；消融将增益归因于稀疏短语剂量本身而非选择门。
- 增益有锐利的边界条件：短语必须来自模型自己的训练语料——40 倍大的外部库毫无帮助，注意力孪生模型也有同样效应，与"上下文集成是规模带来的能力"一致；还报告了四种无益的架构附加，以及一个以五分之一参数达到学习表 top-1 准确率 94% 的计算词典。一切均可离线运行，所有实验可在免费的 Kaggle T4 上复现。

## 正文

Kathleen 系列论文的第 1–2 篇表明，由波表编码器（wavetable encoder）和多尺度混响状态（multi-scale reverberant state）构成的字节级、无注意力架构，可以在约 450–700K 参数、无预训练的情况下匹配强基线在分类任务上的表现。我们要问：同样的组件能否用于生成？(1) 扩展：在字节级语言建模（WikiText-103，原始 UTF-8，无分词器）上，混响模型在每个测得的数集规模（2–512 MB）上都胜过参数匹配的 transformer，例如约 0.5M 参数时在 512 MB 上为 1.84 对 2.04 比特/字节；transformer 需要超过 512 MB 才能匹配无注意力模型从 32 MB 中学到的效果。(2) 度量：我们引入 FORM DISTANCE，一个非参数、抗博弈的"读起来像文本"测量工具：人类文本的九个统计轴定义一个参考云，而五个构造的假样本全部被拒绝。(3) 生成：解码策略主导架构——加宽采样器使同一模型的距离减半（3.17 到 1.52），而一个检索增强解码方案在没有任何训练步骤的情况下把冻结模型进一步推远（1.52 到 1.14）；消融实验将增益归因于稀疏短语剂量本身，而非选择门。该增益有一个锐利的边界条件：短语必须来自模型自己的训练语料——一个 40 倍大的外部语料库毫无帮助，注意力孪生模型也有同样的效应，这与"上下文集成是规模带来的能力"相一致。我们还报告了四种没有帮助的架构附加，以及一个以五分之一参数达到学习表 top-1 准确率 94% 的计算词典。一切都能离线运行；所有实验都可以在免费的 Kaggle T4 上复现。

## 关键词

#无注意力架构 #自回归生成 #数据扩展 #字节级语言建模 #解码策略
