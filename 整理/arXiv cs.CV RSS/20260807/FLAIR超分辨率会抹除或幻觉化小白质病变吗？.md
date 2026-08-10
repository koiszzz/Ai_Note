---
published: 2026-08-07
title: "FLAIR 超分辨率会抹除或幻觉化小白质病变吗？"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Does FLAIR super-resolution erase or hallucinate small white-matter lesions-.md"
source_note: "[[信息源/arXiv cs.CV RSS/Does FLAIR super-resolution erase or hallucinate small white-matter lesions-]]"
source_sha256: 7b75bf13faeec0b8d4724664febc40ef6d72d810de8c11d3ff38dd69375b89be
original_url: "https://arxiv.org/abs/2608.06311"
processed: 2026-08-07
language: zh-CN
---

# FLAIR 超分辨率会抹除或幻觉化小白质病变吗？

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zahra Khodakarami, Yue Li, Pulkit Khandelwal, John Detre, Sandhitsu Das, Christopher Brown, David Wolk, Paul Yushkevich
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06311)

## 摘要

- 白质高信号（WMH）——液体衰减反转恢复（FLAIR）扫描上的亮区——与脑血管病理与神经退行相关；FLAIR 临床常用厚层采集，层内分辨率差。
- 超分辨率（SR）是从各向异性扫描恢复各向同性体积的广泛使用的方法，但 WMH 分割前应用它是否保留病变内容未知：模型可能抹除小的真实病变或幻觉化不存在的病变。
- 用 ADNI 队列 29 人的 1 mm 各向同性高分辨率（HR）FLAIR 扫描（专家逐人手动分割 WMH），退化为模拟 3 与 5 mm 层内采集；用多对比隐式神经表征（INR）、单对比自监督模型（ECLARE）与三次插值上采样到 HR 网格；模拟厚层与原始 HR FLAIR 的 WMH 分割设逐病变分析的下限与上限。
- 四种 WMH 分割方法中（WMH-SynthSeg、segcsvd、MARS-WMH、TrUE-Net），在最敏感于 HR 小病变的方法（MARS-WMH）下用检测敏感度、抹除率（重建后丢失的 HR 检测病变）与幻觉率（手动与 HR 分割均缺的预测成分）评估；SR 的主导效应是抹除小真实病变而非幻觉，且随层厚增加，但每次重建仍改进相对原始厚层的病变检测；ECLARE 在两种厚度下最好恢复小病变信号，INR 不优于三次插值。

## 正文

白质高信号（white matter hyperintensities, WMH）——液体衰减反转恢复（FLAIR）扫描上的亮区——与脑血管病理与神经退行相关。FLAIR 临床设置中通常以厚层采集，层内（through-plane）分辨率差。超分辨率（super-resolution, SR）是从各向异性扫描恢复各向同性体积的广泛使用的方法。然而，在 WMH 分割之前应用它是否保留病变内容仍未知：模型可能抹除小的真实病变，或幻觉化不存在的病变。研究使用 ADNI 队列 29 人的 1 mm 各向同性高分辨率（HR）FLAIR 扫描，每例由专家手动分割 WMH。随后将每例退化为模拟 3 与 5 mm 层内采集。多对比隐式神经表征（INR）、单对比自监督模型（ECLARE）与三次插值用于将它们上采样到 HR 网格。来自模拟厚层与原始 HR FLAIR 的 WMH 分割分别为逐病变分析设定下限与上限。在四种 WMH 分割方法（WMH-SynthSeg、segcsvd、MARS-WMH、TrUE-Net）中，研究在 HR 上对小病变最敏感的一种（MARS-WMH）下运行分析，评估指标为检测敏感度、抹除率（HR 检测病变在重建后丢失）与幻觉率（手动与 HR 分割均缺失的预测成分）。SR 的主导效应是抹除小的真实病变，而非幻觉，且随层厚增加；不过每次重建仍改进相对原始厚层的病变检测。ECLARE 在两种厚度下都最好地恢复小病变信号，而 INR 不优于三次插值。

## 关键词

FLAIR、超分辨率、白质病变、抹除、幻觉
