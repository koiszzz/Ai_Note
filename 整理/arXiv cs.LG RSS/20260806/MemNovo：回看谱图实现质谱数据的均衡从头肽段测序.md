---
published: 2026-08-06
title: MemNovo：回看谱图实现质谱数据的均衡从头肽段测序
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/MemNovo- Look Back at the Spectrum for Balanced De Novo Peptide Sequencing from Mass Spectrometry.md
source_note: "[[信息源/arXiv cs.LG RSS/MemNovo- Look Back at the Spectrum for Balanced De Novo Peptide Sequencing from Mass Spectrometry]]"
source_sha256: 278fba1b2ea44c484052d8d718514d27b7f02e405a0260e761275e116a12b927
original_url: https://arxiv.org/abs/2606.11868
processed: 2026-08-07
language: zh-CN
---

# MemNovo：回看谱图实现质谱数据的均衡从头肽段测序

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.11868)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MemNovo- Look Back at the Spectrum for Balanced De Novo Peptide Sequencing from Mass Spectrometry|查看原始文件]]

## 摘要

- 揭示现有自回归肽段解码器推理动态中的关键病理：过度依赖已生成序列先验，同时逐渐忽视来自输入质谱图的细粒度物理证据
- 提出 MemNovo：无需训练、即插即用的机制，在推理时重新平衡肽段与谱图贡献，通过建立持久谱图记忆库并经超保守残差连接将检索特征直接注入最终解码阶段
- 在 Nine Species 基准上分别以 Casanovo 与 InstaNovo 为基线，肽段精度最高相对提升 39.1% 与 3.9%，计算开销可忽略

## 正文

基于串联质谱的从头（de novo）肽段测序在蛋白质组学中至关重要，它无需参考数据库即可鉴定新肽段。尽管近期基于 Transformer 的编码器-解码器模型取得了显著性能，我们揭示了它们推理动态中的一个关键病理。通过全面的特征缩放实验，我们证明现有自回归肽段解码器倾向于过度依赖已生成序列的先验，同时逐渐减少对输入质谱图中细粒度物理证据的利用。这一现象导致次优结果：生成的肽段序列在生物学上看似合理，却不忠实于输入谱图。为纠正这一问题，我们提出 MemNovo——一种无需训练、即插即用的机制，在推理时重新平衡肽段与谱图的贡献。MemNovo 通过建立持久谱图记忆库缓解信息瓶颈，并通过一条超保守残差连接将检索到的特征直接注入最终解码阶段。理论分析证实，该机制恢复了解码器状态与原始谱图之间的互信息。在 Nine Species 基准上、以两个有代表性的基线 Casanovo 与 InstaNovo 开展的大量实验表明，MemNovo 一致地同时提升氨基酸精度与肽段精度：Casanovo 的肽段精度最高相对提升 39.1%，InstaNovo 最高提升 3.9%，而计算开销可以忽略不计。

## 关键词

#从头肽段测序 #质谱 #蛋白质组学 #Transformer #MemNovo
