---
published: 2026-08-06
title: STRIVE：探究分级合理性生成与评估中的推理极限
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/STRIVE- Probing Reasoning Limits in Graded Plausibility Generation and Evaluation.md
source_note: "[[信息源/arXiv cs.CL RSS/STRIVE- Probing Reasoning Limits in Graded Plausibility Generation and Evaluation]]"
source_sha256: b3cc1a62afd52b863a7eddfe296c69baa36b2e8823cbb52cb5babe8010c628aa
original_url: https://arxiv.org/abs/2608.04567
processed: 2026-08-07
language: zh-CN
---

# STRIVE：探究分级合理性生成与评估中的推理极限

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04567)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/STRIVE- Probing Reasoning Limits in Graded Plausibility Generation and Evaluation|查看原始文件]]

## 摘要

- 事件合理性判断是心理语言学考察事件知识如何支撑人类语言处理的重要工具，但构造受控事件集（一个事件槽位变化、其余特征固定）的人工成本很高。
- 本文提出 STRIVE，一个基于 LLM 的联合生成与评估框架，在合理性类别（合理 vs. 不合理）与预期分类难度（容易 vs. 困难）两个维度上交叉构建受控事件集；加入全局推理草稿本（scratchpad）和评估器引导的细化后，GPT-5.1 的高质量生成率从基线提示的 16.7% 提升到 75.0%。
- 靠近合理性边界的事件仍最难处理：人类分歧最大，最佳评估器在"不合理-困难"条件下的准确率也只有 57%，说明仍需人工介入；总体上 STRIVE 提供了一种通过自动化事件集初始生成与评估来减少人工投入的可扩展方案。

## 正文

事件知识关乎"谁对谁做了什么"。心理语言学家使用事件合理性判断来考察这类知识如何支撑人类语言处理。为隔离合理性效应，这类研究需要受控事件集：一个事件槽位在多个合理性水平间变化，而其他所有事件特征保持固定。手工构造这样的集合劳动强度大。为此我们提出 STRIVE，一个基于 LLM 的框架，用于联合生成和评估受控事件集，在合理性类别（合理 vs. 不合理）与预期分类难度（容易 vs. 困难）之间交叉设计。给定一个动词，STRIVE 构建一个共享事件框架，然后通过只改变一个槽位、保持其他槽位不变，为每个条件生成一个事件。在涉及 60 个动词、6 个模型的实验中，使用基线生成提示时 GPT-5.1 仅 16.7% 的时间能产出高质量集合；加入全局推理草稿本和评估器引导的细化后，这一比例提高到 75.0%。更多的推理投入也改善了评估器与人类的一致性。尽管如此，靠近合理性边界的事件仍然最难处理：它们引发最大的人类分歧，最佳评估器在"不合理-困难"条件下也仅达到 57% 的准确率，表明仍需要人工输入。总体而言，STRIVE 通过自动化心理语言学研究的初始事件集生成与评估，提供了一种减少人工投入的可扩展方法。

## 关键词

#事件合理性 #心理语言学 #LLM评估 #STRIVE #事件集生成 #评估器
