---
published: 2026-08-06
title: DeepInvert：针对混淆语言模型的半监督嵌入反转
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models.md
source_note: "[[信息源/arXiv cs.LG RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models]]"
source_sha256: daf7caa3613eaca2fa604da0624153dcb0ceee1f1a7d9062e820a18c41ec733a
original_url: https://arxiv.org/abs/2608.04477
processed: 2026-08-07
language: zh-CN
---

# DeepInvert：针对混淆语言模型的半监督嵌入反转

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04477)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DeepInvert- Semi-Supervised Embedding Inversion Against Obfuscated Language Models|查看原始文件]]

## 摘要

- 证明混淆类防御（ObfusLM、SentinelLMs、TextObfuscator、DPNR）提供的保护远低于预期
- 提出 DeepInvert，半监督嵌入反转攻击，从混淆表示中恢复原始词元，准确率超过先前方法
- 针对 ObfusLM 实现 73.5% 的 top-1 词元恢复率，此前最佳为 26.2%
- 揭示任务相关两难：效用与抗反转不可兼得，呼吁重新评估该类防御

## 正文

基于云的语言模型服务通常会处理包含敏感信息的提示。基于混淆的防御——包括 ObfusLM、SentinelLMs、TextObfuscator 和 DPNR——通过传输前转换提示表示来缓解这一风险，为密码学解决方案提供了一种轻量级替代方案。我们证明这些防御提供的保护远低于之前认为的水平。

我们提出 DeepInvert，一种半监督嵌入反转攻击，能够以比先前方法更高的准确率从混淆表示中恢复原始词元。关键洞察在于，无标注的混淆嵌入尽管受到扰动，仍保留了可利用的语义结构。DeepInvert 将带标注影子数据上的监督训练与无标注目标嵌入上的新型无监督一致性目标相结合，并通过混合训练流水线在两者之间交替。防御感知的适配进一步将攻击扩展到基于编码器与自回归架构的多种混淆机制。

在九种防御、五个任务和四种模型架构上的实验表明，DeepInvert 在大多数防御上优于先前的攻击。针对 ObfusLM，DeepInvert 实现了 73.5% 的 top-1 词元恢复率，而先前最佳为 26.2%。我们的结果揭示了任务相关的两难困境：为效用保留足够信号的混淆方案也保留了足以用于反转的结构，而抵抗反转的方案则破坏了效用。在较简单的分类任务上，某些基于差分隐私（DP）的防御可以同时维持两者。我们呼吁重新评估这一类防御。

## 关键词

#嵌入反转 #提示混淆 #语言模型安全 #半监督学习 #隐私攻击
