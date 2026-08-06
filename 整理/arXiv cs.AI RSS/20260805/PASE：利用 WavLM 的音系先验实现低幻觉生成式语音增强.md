---
published: 2026-08-05
title: "PASE：利用 WavLM 的音系先验实现低幻觉生成式语音增强"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PASE- Leveraging the Phonological Prior of WavLM for Low-Hallucination Generative Speech Enhancement.md"
source_note: "[[信息源/arXiv cs.AI RSS/PASE- Leveraging the Phonological Prior of WavLM for Low-Hallucination Generative Speech Enhancement]]"
source_sha256: c4f47d0fa115c753c3a88ec25a364dd0985784c226714d344c68f5ef4c36dfa3
original_url: "https://arxiv.org/abs/2511.13300"
processed: 2026-08-05
language: zh-CN
---

# PASE：利用 WavLM 的音系先验实现低幻觉生成式语音增强

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Xiaobin Rong、Qinwen Hu、Mansur Yesilbursa 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.13300)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PASE- Leveraging the Phonological Prior of WavLM for Low-Hallucination Generative Speech Enhancement|查看原始文件]]

## 摘要

- 提出音系锚定语音增强器（PASE），生成式语音增强框架：利用预训练 WavLM 模型中嵌入的稳健音系先验缓解幻觉——先通过表示蒸馏把 WavLM 适配为去噪专家以清理其末层特征，在模型内在音系先验引导下实现稳健去噪并最小化语言幻觉。
- 进一步用双流表示训练声码器降低声学幻觉：高层音系表示提供干净的语言内容，低层声学表示保留说话人身份与韵律。
- 生成式 SE 方法常忽视严重噪声下的幻觉风险，导致错误口语内容或不一致的说话人特征（分别称为语言幻觉与声学幻觉）；语言幻觉源于模型未能约束有效音系结构，是更根本的挑战。
- 实验显示 PASE 不仅在感知质量上超越最先进判别模型，还以显著更低的语言与声学幻觉大幅优于先前生成模型。

## 正文

论文编号：arXiv:2511.13300v1（更新类型：cross）。以下为摘要全文翻译。

生成模型在语音增强（SE）中表现出卓越性能，取得优于传统判别方法的感知质量。然而，现有生成式 SE 方法往往忽视严重噪声下的幻觉风险，导致错误的口语内容或不一致的说话人特征，我们分别称之为语言幻觉与声学幻觉。我们认为，语言幻觉源于模型未能约束有效的音系结构，是更根本的挑战。虽然语言模型（LM）通过建模离散 token 分布非常适合捕获底层语音结构，但现有方法在学习来自噪声污染表示方面存在局限，可能导致污染的先验与幻觉。为克服这些局限，我们提出音系锚定语音增强器（PASE），一个利用预训练 WavLM 模型中嵌入的稳健音系先验来缓解幻觉的生成式 SE 框架。首先，我们通过表示蒸馏把 WavLM 适配为去噪专家，以清理其末层特征。在模型内在音系先验的引导下，这一过程实现稳健去噪，同时最小化语言幻觉。为进一步降低声学幻觉，我们用双流表示训练声码器：高层音系表示提供干净的语言内容，而低层声学表示保留说话人身份与韵律。实验结果表明，PASE 不仅在感知质量上超越最先进的判别模型，还以显著更低的语言与声学幻觉大幅优于先前的生成模型。

## 关键词

#语音增强 #幻觉 #WavLM #生成模型
