---
title: "ChartAnno：评估多模态大语言模型生成图表注释"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ChartAnno- Evaluating MLLMs for Chart Annotation Generation.md"
source_note: "[[信息源/arXiv cs.AI RSS/ChartAnno- Evaluating MLLMs for Chart Annotation Generation]]"
source_sha256: 358c805b9fe6ca589b3eb8d39dad626e8d6e923dd51d5839fddba95ecb5e7e1b
original_url: "https://arxiv.org/abs/2608.03464"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# ChartAnno：评估多模态大语言模型生成图表注释

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03464)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ChartAnno- Evaluating MLLMs for Chart Annotation Generation|查看原始文件]]

## 摘要

- 多模态大语言模型在图表理解、生成和编辑方面取得了显著进展，但对现有图表进行注释的能力仍缺乏研究。
- 图表注释是一项常见但具有挑战性的沟通任务，要求模型推断预期信息、理解图表语义，并放置合适的文字或图形元素。
- 论文提出 ChartAnno，一个评估多模态大语言模型生成图表注释的基准，包含 1200 个真实世界图表，以及配套代码和三种指令具体程度的注释指令。
- 作者在两种主要输入设置下评估 10 个代表性多模态大语言模型：仅提供图表代码；同时提供图表代码和图表图像；另有仅提供图像的消融研究。
- 专有模型总体仍然更强，但大规模开源模型正在缩小差距。更具体的指令会提升注释质量，而推断抽象意图仍是当前模型最困难的部分。
- 提供图表图像带来的总体收益有限，改进主要出现在设计相关指标上。图表注释生成仍是一项需要语义 grounding 和有效注释设计的挑战性任务。

## 正文

多模态大语言模型（MLLM）在图表理解、图表生成和图表编辑方面取得了显著进展，但它们对已有图表进行注释的能力仍未得到充分研究。图表注释是一项常见却困难的沟通任务，要求模型推断图表想要传达的信息，解释图表语义，并放置恰当的文字或图形元素。

为弥补这一空缺，本文提出 ChartAnno，一个评估 MLLM 生成图表注释能力的基准。ChartAnno 包含 1200 个真实世界图表，每个图表都配有代码和注释指令；指令覆盖三个具体程度层级。

作者在两种主要输入设置下评估了 10 个代表性 MLLM：第一种只提供图表代码，第二种同时提供图表代码和图表图像；此外还进行了只提供图表图像的消融研究。结果显示，专有模型总体上仍然更强，但大规模开源模型正在缩小差距。

更具体的指令能够提升注释质量，而推断抽象意图仍然是当前 MLLM 最困难的部分。提供图表图像带来的总体收益有限，改进主要体现在与设计相关的指标上。这些发现表明，图表注释生成是一项具有挑战性的任务，需要语义 grounding 和有效的注释设计。代码和数据将在未来版本发布。

## 关键词

#多模态大语言模型 #图表理解 #图表注释 #视觉语言模型 #语义 grounding #基准测试
