---
published: 2026-08-07
title: "FLAIR 超分辨率会抹除还是幻觉化小的白质病灶？"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Does FLAIR super-resolution erase or hallucinate small white-matter lesions-.md"
source_note: "[[信息源/arXiv cs.AI RSS/Does FLAIR super-resolution erase or hallucinate small white-matter lesions-]]"
source_sha256: 862e759ccbe7983501b77ceee1e1558792eda5843a277968085f56a72b802efd
original_url: "https://arxiv.org/abs/2608.06311"
processed: 2026-08-07
language: zh-CN
---

# FLAIR 超分辨率会抹除还是幻觉化小的白质病灶？

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zahra Khodakarami, Yue Li, Pulkit Khandelwal, John Detre, Sandhitsu Das, Christopher Brown, David Wolk, Paul Yushkevich
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06311)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Does FLAIR super-resolution erase or hallucinate small white-matter lesions-|查看原始文件]]

## 摘要

- 白质高信号（WMH）是 FLAIR 扫描上的亮区，与脑血管病理与神经退行相关；临床中 FLAIR 常以厚切片采集，面内分辨率差，超分辨率（SR）是常用的从各向异性扫描恢复各向同性体积的方法。
- 论文研究在 WMH 分割前应用 SR 是否保留病灶内容：模型可能抹除小的真实病灶或幻觉化不存在的病灶。
- 使用 ADNI 队列 29 人的 1mm 各向同性高分辨率（HR）FLAIR 扫描（每人由专家人工分割 WMH），退化为模拟 3 与 5mm 面外采集；多对比隐式神经表示（INR）、单对比自监督模型（ECLARE）与三次插值用于上采样到 HR 网格；模拟厚切片与原始 HR FLAIR 的 WMH 分割分别设定病灶级分析的底与顶。
- 在四种 WMH 分割方法（WMH-SynthSeg、segcsvd、MARS-WMH、TrUE-Net）中，用对 HR 小病灶最敏感的一种（MARS-WMH）进行分析，指标为检测灵敏度、抹除率（HR 检出病灶重建后丢失）与幻觉率（人工与 HR 分割均缺失的预测分量）。
- SR 的主要效应是抹除小的真实病灶而非幻觉，且随切片厚度增加，但每种重建仍比原始厚切片改善病灶检测；ECLARE 在两种厚度下恢复小病灶信号最佳，而 INR 不优于三次插值。

## 正文

白质高信号（white matter hyperintensities，WMH），即液体衰减反转恢复（Fluid-attenuated Inversion Recovery，FLAIR）扫描上的亮区，与脑血管病理与神经退行相关。临床设置中 FLAIR 通常以厚切片采集，导致面内（through-plane）分辨率差。超分辨率（super-resolution，SR）是常用的从各向异性扫描恢复各向同性体积的方法。然而，在 WMH 分割前应用它是否保留病灶内容仍未知：模型可能抹除小的真实病灶，或幻觉化不存在的病灶。我们使用 ADNI 队列 29 人的 1mm 各向同性高分辨率（HR）FLAIR 扫描，每人由专家人工分割 WMH。然后我们将每张退化到模拟的 3 与 5mm 面内采集。多对比隐式神经表示（INR）、单对比自监督模型（ECLARE）与三次插值被用于将它们上采样到 HR 网格。模拟厚切片与原始 HR FLAIR 的 WMH 分割分别设定病灶级分析的底与顶。在四种 WMH 分割方法（WMH-SynthSeg、segcsvd、MARS-WMH、TrUE-Net）中，我们使用对 HR 小病灶最敏感的一种（MARS-WMH）运行分析，评估指标为检测灵敏度、抹除率（HR 检出的病灶在重建后丢失）与幻觉率（人工与 HR 分割中都不存在的预测分量）。SR 的主要效应是抹除小的真实病灶，而非幻觉，且随切片厚度增加，尽管每种重建仍比原始厚切片改善病灶检测。ECLARE 在两种厚度下恢复小病灶信号最佳，而 INR 不比三次插值更好。

## 关键词

#超分辨率 #白质病灶 #FLAIR #医学影像
