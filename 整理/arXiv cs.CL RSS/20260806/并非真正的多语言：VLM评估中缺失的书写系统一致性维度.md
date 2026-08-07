---
published: 2026-08-06
title: 并非真正的多语言：VLM评估中缺失的书写系统一致性维度
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation.md
source_note: "[[信息源/arXiv cs.CL RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation]]"
source_sha256: 67f2bfea7a4caa44812154f00412c9239998855d2a7c7bd9ec0f6091dd022695
original_url: https://arxiv.org/abs/2606.17188
processed: 2026-08-07
language: zh-CN
---

# 并非真正的多语言：VLM评估中缺失的书写系统一致性维度

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.17188)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Not Truly Multilingual- Script Consistency as a Missing Dimension in VLM Evaluation|查看原始文件]]

## 摘要

- 当前 VLM 多语言评估假设语言与正字法一一对应，忽视了多书写系统语言用户
- 提出 PuMVR 基准（1,000 个严格并行图文实例，覆盖旁遮普语三种活跃书写系统），暴露系统性的"书写系统差距"，准确率差距最高达 16%
- 提出书写系统一致率（SCR）作为书写系统无关评估的强制指标，在基准上低至 24.8%

## 正文

当前针对视觉语言模型（VLM）的多语言评估假设语言与正字法之间存在一一对应关系，忽视了数十亿使用多书写系统语言的用户。我们提出了 PuMVR（Punjabi Multimodal Visual Reasoning，旁遮普语多模态视觉推理），一个包含 1,000 个严格并行图文实例的基准，覆盖旁遮普语的三种活跃书写系统：Gurmukhi、Shahmukhi 和 Roman。

在评估 10 个最先进的 VLM 时，我们揭示了一个重大且系统性的"书写系统差距"。模型经常能在一种书写系统中解决视觉任务，却在另一种书写系统中解决相同任务时失败，准确率差距高达 16%。至关重要的是，视觉输入能均匀地提升绝对表现，却无法弥合正字法差距。此外，跨书写系统的上下文内迁移非常脆弱，暴露出锁定于书写系统的知识表征。

在 McNemar 检验对全部书写系统对的支持下，我们的发现表明，当前的"多语言"VLM 并非真正的多书写系统模型。我们提出书写系统一致率（Script Consistency Rate，SCR）——在我们的基准上低至 24.8%——作为书写系统无关评估的强制指标，以确保公平的 AI 访问。数据和代码可在 https://github.com/prabhjotschugh/Not-Truly-Multilingual-PuMVR 获取。

## 关键词

#VLM #多语言评估 #书写系统 #旁遮普语 #公平AI
