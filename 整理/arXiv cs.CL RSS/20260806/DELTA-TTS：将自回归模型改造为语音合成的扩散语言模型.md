---
published: 2026-08-06
title: "DELTA-TTS：将自回归模型改造为语音合成的扩散语言模型"
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/DELTA-TTS- Adapting Autoregressive Model into Diffusion Language Model for Text-to-Speech.md
source_note: "[[信息源/arXiv cs.CL RSS/DELTA-TTS- Adapting Autoregressive Model into Diffusion Language Model for Text-to-Speech]]"
source_sha256: 396214af9687fe019ef6983a9d4914420416efddb89a3cc0b8ab609f6927bf58
original_url: https://arxiv.org/abs/2607.04140
processed: 2026-08-07
language: zh-CN
---

# DELTA-TTS：将自回归模型改造为语音合成的扩散语言模型

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.04140)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/DELTA-TTS- Adapting Autoregressive Model into Diffusion Language Model for Text-to-Speech|查看原始文件]]

## 摘要

- 自回归（AR）TTS 模型顺序生成离散语音词元，推理慢且鲁棒性差——局部错误会向后传播甚至升级为幻觉；根源是自左向右的自回归承诺
- 提出 DELTA-TTS：基于 LoRA 的轻量适配框架，将预训练 AR TTS 模型转换为离散扩散语言模型（dLLM），实现按置信度排序的语音词元解码
- 引入卷积模块注入局部声学上下文，配合 1/t 加权训练目标与时间平移推理调度，将低置信位置推迟到后续步骤
- 仅用 LibriTTS 585 小时训练，DELTA-TTS 在 Seed-TTS test-en 上 WER 达 1.75%，优于其 AR 骨干，且词元生成快 3.3 倍；文本-语音对齐更锐利、整体解码置信度更高并缓解了 AR 生成中的幻觉

## 正文

自回归（AR）文本到语音（TTS）模型按顺序生成离散语音词元，这使得推理速度慢，并可能降低鲁棒性，因为局部错误会传播到后续位置，甚至可能升级为幻觉。这一局限源于它们从左到右的自回归承诺：每个词元都必须在未来语音词元上下文可用之前被确定。然而，这种顺序并不是 TTS 的内在要求，因为模型在合成之前就已收到完整的输入文本。在本文中，我们介绍 DELTA-TTS，一个基于 LoRA 的轻量适配框架，它将预训练的 AR TTS 模型转换为离散扩散语言模型（dLLM），用于按置信度排序的语音词元解码。为了更好地捕捉语音的局部结构，DELTA-TTS 引入了一个注入局部声学上下文的卷积模块，并配合 1/t 加权训练目标与时间平移推理调度，共同将低置信度的位置推迟到后续步骤。仅使用 LibriTTS 的 585 小时数据进行训练，DELTA-TTS 在 Seed-TTS test-en 上实现了 1.75% 的词错误率（WER），优于其 AR 骨干模型，同时生成词元的速度是其 3.3 倍。进一步的分析表明，DELTA-TTS 产生了更锐利的文本-语音对齐，提升了整体解码置信度，并缓解了 AR 生成中观察到的幻觉。

## 关键词

#文本转语音 #扩散语言模型 #自回归模型 #LoRA #语音合成
