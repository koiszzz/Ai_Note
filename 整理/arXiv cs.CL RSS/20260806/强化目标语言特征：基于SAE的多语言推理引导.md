---
published: 2026-08-06
title: 强化目标语言特征：基于 SAE 的多语言推理引导
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Strengthening Target-Language Features- SAE-Based Steering for Multilingual Inference.md
source_note: "[[信息源/arXiv cs.CL RSS/Strengthening Target-Language Features- SAE-Based Steering for Multilingual Inference]]"
source_sha256: 8831c61e6d7eec847e5406dfffb8d81c3b2a417bb3b77c06bb1a44de55436ed5
original_url: https://arxiv.org/abs/2608.04904
processed: 2026-08-07
language: zh-CN
---

# 强化目标语言特征：基于 SAE 的多语言推理引导

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04904)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Strengthening Target-Language Features- SAE-Based Steering for Multilingual Inference|查看原始文件]]

## 摘要

- 多语言大语言模型在不同语言上表现差异显著，而现有适配方法往往需要参数更新和大量多语言训练数据；本文提出一种推理时的多语言引导方法。
- 方法利用预训练的稀疏自编码器（SAE）识别并强化与目标语言相关的特征：基于多语言平行句比较各语言的 SAE 激活，为每种目标语言挑选少量逐层特征，解码为引导信号注入模型隐状态，无需额外训练。
- 在 Gemma-3-12B-it 上的实验显示，XCOPA 平均准确率提升 10.9 个百分点、XNLI 提升 5.3 个百分点、MGSM 提升 1.9 个百分点。

## 正文

多语言大语言模型在不同语言上表现出显著的性能差异，而现有适配方法往往需要参数更新和大量的多语言训练数据。我们提出一种推理时的多语言引导方法，使用预训练的稀疏自编码器（SAE）来识别并强化与目标语言相关的特征。利用多语言平行句子，我们比较各语言间的 SAE 激活，为每种目标语言挑选少量与层相关的特征。这些特征被解码为引导信号并注入模型的隐状态，无需额外训练。在 Gemma-3-12B-it 上的实验表明，XCOPA 的平均准确率提升了 10.9 个百分点，XNLI 提升了 5.3 个百分点，MGSM 提升了 1.9 个百分点。

## 关键词

#多语言 #稀疏自编码器 #推理时引导 #SAE #XCOPA #XNLI #MGSM
