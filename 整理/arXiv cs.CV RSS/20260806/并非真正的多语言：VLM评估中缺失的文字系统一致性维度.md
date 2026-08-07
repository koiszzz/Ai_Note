---
published: 2026-08-06
title: 并非真正的多语言：VLM评估中缺失的文字系统一致性维度
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation.md
source_note: "[[信息源/arXiv cs.CV RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation|查看原始文件]]"
source_sha256: ab35eb2162355c66011b294245d2a3a8587f844958e3322f10dc17f5bd258e45
original_url: https://arxiv.org/abs/2606.17188
processed: 2026-08-07
language: zh-CN
---

# 并非真正的多语言：VLM评估中缺失的文字系统一致性维度

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.17188)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation|查看原始文件]]

## 摘要

- 当前 VLM 多语言评估假设语言与文字系统一一对应，忽视了数十亿多文字系统语言用户
- 提出 PuMVR（旁遮普语多模态视觉推理）：1,000 条跨旁遮普语三种活跃文字（Gurmukhi、Shahmukhi、罗马字）严格平行的图文实例基准
- 评估 10 个 SOTA VLM，暴露显著且系统性的文字系统差距（Script Gap）：模型常在一个文字下解决视觉任务、在另一文字下失败，准确率差高达 16%；视觉输入统一提升绝对性能却无法弥合文字差距；跨文字上下文内迁移非常脆弱
- 提出文字系统一致性率（SCR），在基准上低至 24.8%，作为文字无关评估的强制指标

## 正文

当前视觉语言模型（VLM）的多语言评估假定语言与文字系统（orthography）之间存在一一对应关系，从而忽视了数十亿使用多文字系统语言的用户。我们提出 PuMVR（Punjabi Multimodal Visual Reasoning，旁遮普语多模态视觉推理），一个包含 1,000 条严格平行图文实例的基准，覆盖旁遮普语的三种活跃文字系统：Gurmukhi（古木基文）、Shahmukhi（沙穆基文）和罗马字（Roman）。

在评估 10 个最先进的 VLM 时，我们揭示了一个显著且系统性的文字系统差距（Script Gap）。模型经常能用一种文字解决视觉任务，却在另一种文字中在同一任务上失败，准确率差异最高达 16%。关键的是，视觉输入会均匀地提升绝对性能，却无法弥合文字层面的差距。此外，跨文字系统（cross-script）的上下文内迁移非常脆弱，暴露了以文字锁定（script-locked）的知识表示。在 McNemar 检验支持下，我们针对所有文字对的分析表明，当前"多语言"VLM 并非真正的多文字系统。

我们提出文字系统一致性率（Script Consistency Rate，SCR）——在我们的基准上最低仅为 24.8%——并将其作为文字无关（script-agnostic）评估的强制性指标，以确保公平的 AI 访问。数据与代码可在 https://github.com/prabhjotschugh/Not-Truly-Multilingual-PuMVR 获取。

## 关键词

#视觉语言模型 #多语言评估 #文字系统一致性 #旁遮普语 #评测基准
