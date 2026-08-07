---
published: 2026-08-06
title: HalluScope：多模态大语言模型的细粒度幻觉诊断
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/HalluScope- Fine-grained Hallucination Diagnosis for Multimodal Large Language Models.md
source_note: "[[信息源/arXiv cs.CV RSS/HalluScope- Fine-grained Hallucination Diagnosis for Multimodal Large Language Models]]"
source_sha256: 65386e024bc360c6ae1a624e4b9efab6a31403bc0c301436591533745620a5ac
original_url: https://arxiv.org/abs/2607.21105
processed: 2026-08-07
language: zh-CN
---

# HalluScope：多模态大语言模型的细粒度幻觉诊断

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.21105)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/HalluScope- Fine-grained Hallucination Diagnosis for Multimodal Large Language Models|查看原始文件]]

## 摘要

- 提出细粒度幻觉诊断统一任务，联合执行幻觉检测、分类与可解释的解释生成，弥补粗粒度检测诊断信息不足的问题
- 开发自动化数据生成流水线，构建覆盖八种来源、五个任务类别的 HalluScope-30K 大规模诊断数据集；训练 HalluScope-4B 与 HalluScope-8B，在 MHALO 基准与细粒度幻觉分类基准上均取得最先进性能
- 联合优化下检测与分类相互促进；诊断驱动的反馈实验表明细粒度诊断解释能有效引导 Qwen3-VL-8B-Instruct 与 LLaVA-1.5-7B 纠正幻觉，完整诊断显著超越所有基线

## 正文

尽管多模态大语言模型（MLLM）在广泛的视觉语言任务上取得了强劲性能，它们仍存在幻觉问题，即模型输出与视觉内容、文本上下文或常识知识不一致。现有研究主要通过粗粒度检测来处理该问题。然而，这些方法往往提供不足的诊断信息，难以理解幻觉类型并支持下游幻觉缓解。为弥补这一差距，我们提出 MLLM 的细粒度幻觉诊断（fine-grained hallucination diagnosis），一个全新的统一任务，联合执行幻觉检测、分类和可解释的解释生成。我们开发了一个自动化数据生成流水线，构建了 HalluScope-30K，一个覆盖八种来源和五个任务类别的大规模诊断数据集。基于该数据集，我们设计了一个多粒度联合奖励函数，并训练了两个诊断模型 HalluScope-4B 和 HalluScope-8B，它们在 MHALO 基准和我们的细粒度幻觉分类基准上均取得最先进性能。值得注意的是，在联合优化下检测与分类相互促进。此外，诊断驱动的反馈实验表明，我们模型生成的细粒度诊断解释能有效引导目标模型纠正幻觉，完整的诊断在 Qwen3-VL-8B-Instruct 和 LLaVA-1.5-7B 上都显著优于所有基线。我们的代码、数据和模型可在 https://github.com/wkinglin/HalluScope 获取。

## 关键词

#多模态大语言模型 #幻觉检测 #细粒度诊断 #可解释性
