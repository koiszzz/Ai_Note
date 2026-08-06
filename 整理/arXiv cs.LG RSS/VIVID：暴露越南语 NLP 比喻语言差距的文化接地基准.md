---
title: "VIVID：暴露越南语 NLP 比喻语言差距的文化接地基准"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/VIVID- A Culturally Grounded Benchmark Exposing the Figurative Language Gap in Vietnamese NLP.md"
source_note: "[[信息源/arXiv cs.LG RSS/VIVID- A Culturally Grounded Benchmark Exposing the Figurative Language Gap in Vietnamese NLP.]]"
source_sha256: 6b1e6ae35a3f2e23d3195c69589f49da514d0f91231ecdebd9493bb30c43091b
original_url: "https://arxiv.org/abs/2608.03095"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# VIVID：暴露越南语 NLP 比喻语言差距的文化接地基准

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Tu Tran Do、Nhat Ngoc Nguyen、Khanh-Tung Tran、Hoang D. Nguyen、Tu Minh Phuong、Long Hoang Dang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03095)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/VIVID- A Culturally Grounded Benchmark Exposing the Figurative Language Gap in Vietnamese NLP.|查看原始文件]]

## 摘要

- 提出 VIVID（Vietnamese Idioms for Validation and Interpretation Depth，用于验证与解释深度的越南语习语），第一个系统评估越南语文化接地比喻语言理解的基准。
- VIVID 包含 1,636 条习语与谚语，标注五个复杂度特征（字面表达、语用细微、汉越词、不常见词汇、民俗知识）与七个语义主题。
- 建立结合生成与判别任务的评估框架，提出 LLM 即评判者方法（基于方面的提示），对照人类判断验证（Cohen's kappa = 0.792）。
- 评估八个最先进模型揭示关键差距：越南语专用模型大幅逊于多语言系统（VinaLLaMA-7B: 0.13 对 GPT-4o: 2.46），即使顶级模型也达不到最高分的 50%。
- 值得注意的是，少样本提示并不普遍改善性能，GPT-4o 因文体过拟合表现出退化。
- 分析暴露系统性失败：字面过度解释、词汇缺口与语用扁平化，表明当前模型缺乏细粒度比喻解释所需的文化能力。
- VIVID 为推进文化丰富语境中的比喻语言理解提供必要工具。

## 正文

论文编号：arXiv:2608.03095v1（更新类型：cross）。以下为摘要全文翻译。

我们提出 VIVID（Vietnamese Idioms for Validation and Interpretation Depth，用于验证与解释深度的越南语习语），第一个用于系统评估越南语文化接地比喻语言理解的基准。VIVID 包含 1,636 条习语与谚语，标注五个复杂度特征（字面表达、语用细微、汉越词、不常见词汇、民俗知识）与七个语义主题。我们建立一个结合生成与判别任务的评估框架，提出一种经人类判断验证的 LLM 即评判者方法（基于方面的提示）（Cohen's kappa = 0.792）。评估八个最先进的模型揭示关键差距：越南语专用模型大幅逊于多语言系统（VinaLLaMA-7B: 0.13 对 GPT-4o: 2.46），甚至顶级模型也达到最高分不到 50% 的水平。值得注意的是，少样本提示并不普遍改善性能，GPT-4o 因文体过拟合表现出退化。我们的分析暴露系统性失败，包括字面过度解释、词汇缺口与语用扁平化，表明当前模型缺乏细粒度比喻解释所需的文化能力。VIVID 为推进文化丰富语境中的比喻语言理解提供了必要工具。

## 关键词

#越南语NLP #比喻语言 #习语 #文化接地 #基准
