---
published: 2026-08-06
title: "DeepInvert：针对混淆语言模型的半监督嵌入反演"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models.md
source_note: "[[信息源/arXiv cs.CL RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models]]"
source_sha256: 8d0b7d734870608f1513b0e483f1e273ef45359a7140cf64311b8e79eb01f214
original_url: https://arxiv.org/abs/2608.04477
processed: 2026-08-07
language: zh-CN
---

# DeepInvert：针对混淆语言模型的半监督嵌入反演

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04477)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models|查看原始文件]]

## 摘要

- 云端语言模型服务常处理含敏感信息的提示；基于混淆的防御（ObfusLM、SentinelLMs、TextObfuscator、DPNR）在传输前变换提示表示，但其保护作用远低于此前认知
- 提出 DeepInvert：半监督嵌入反演攻击，从未标注的混淆嵌入中恢复原始词元，准确率高于此前方法；关键洞察是未标注混淆嵌入在扰动后仍保留可利用的语义结构
- 通过混合训练流程在带标签影子数据上的监督训练与未标注目标嵌入上的无监督一致性目标之间交替；防御感知的适配进一步扩展到编码器与自回归架构的多种混淆机制
- 在九种防御、五个任务和四种模型架构上，DeepInvert 多数情况下优于此前攻击：对 ObfusLM 的 top-1 词元恢复率达 73.5%，而此前最佳仅 26.2%

## 正文

基于云的语言模型服务通常会处理包含敏感信息的提示。基于混淆的防御——包括 ObfusLM、SentinelLMs、TextObfuscator 和 DPNR——通过在传输前变换提示表示来缓解这一风险，提供了加密方案之外的轻量级替代。我们表明，这些防御所提供的保护远低于此前人们所相信的程度。

我们提出 DeepInvert，一种半监督的嵌入反演攻击，它能够以高于此前方法的准确率从混淆表示中恢复原始词元。其关键洞察在于：未标注的混淆嵌入在扰动之后仍保留着可利用的语义结构。DeepInvert 将基于带标签影子数据的监督训练，与针对未标注目标嵌入的一种新颖的无监督一致性目标相结合，并通过混合训练流程在两者之间交替进行。防御感知的适配进一步将攻击扩展到编码器架构与自回归架构上的多种混淆机制。

在九种防御、五个任务和四种模型架构上的实验表明，DeepInvert 在大多数防御上优于此前的攻击。针对 ObfusLM，DeepInvert 实现了 73.5% 的 top-1 词元恢复率，而此前最佳为 26.2%。我们的结果揭示了一种任务依赖的张力：保留了足够信号以供实用的混淆方案，同时也保留了足以被反演的语义结构；而抵抗反演的方案则会损害实用性。在较简单的分类任务上，某些基于 DP（差分隐私）的防御可以兼顾两者。我们呼吁重新评估这一类防御。

## 关键词

#嵌入反演 #隐私攻击 #混淆防御 #语言模型安全 #差分隐私
