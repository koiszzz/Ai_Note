---
title: "MDLMPE：掩码扩散语言模型的分布感知位置编码"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MDLMPE- Distribution Aware Positional Encoding for Masked Diffusion Language Models.md"
source_note: "[[信息源/arXiv cs.AI RSS/MDLMPE- Distribution Aware Positional Encoding for Masked Diffusion Language Models]]"
source_sha256: e13aa973c0a7c96397f20c5a0b6ad9d24180fc7261b6dff216c0bfc611d52b86
original_url: "https://arxiv.org/abs/2608.03769"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MDLMPE：掩码扩散语言模型的分布感知位置编码

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tong Ling、Hang Lei、Feng Xiao 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03769)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MDLMPE- Distribution Aware Positional Encoding for Masked Diffusion Language Models|查看原始文件]]

## 摘要

- 提出 MDLMPE，专为掩码扩散设计的位置编码：把 token 可用性表示为二元序列，应用距离感知高斯加权，并通过余弦基投影所得模式获得分布感知位置特征；特征加到 token 嵌入，由轻量 MLP 映射为调制标准 RoPE 相位的角度偏移。
- 掩码扩散语言模型（MDLM）的上下文与自回归（AR）模型根本不同：AR 解码暴露连续前缀，MDLM 去噪产生动态、非连续的揭示与掩码 token 配置；RoPE 等常规位置编码对序列顺序与成对位移敏感，但对这种演化的 token 可用性结构不敏感。
- 在 LLaDA 与 DREAM 上的大量实验显示，MDLMPE 在监督微调、预训练、零样本评估与块扩散设置中普遍优于常规位置编码方法。
- 消融显示可用性状态、高斯局部性、谱基与嵌入注入的完整组合产生最强结果，确立演化的 token 可用性分布是掩码扩散语言模型的有用位置信号。

## 正文

论文编号：arXiv:2608.03769v1（更新类型：cross）。以下为摘要全文翻译。

掩码扩散语言模型（MDLM）支持并行生成与双向上下文建模，但其位置上下文与自回归（AR）模型根本不同。AR 解码暴露连续的词缀，而 MDLM 去噪产生揭示与掩码 token 的动态、非连续配置。RoPE 等常规位置编码捕获序列顺序与成对位移，但对这种演化的 token 可用性结构不敏感。为克服这一局限，我们提出 MDLMPE，一种专为掩码扩散设计的位置编码。据我们所知，MDLMPE 是第一个使位置表示显式感知不断变化的揭示/掩码配置的方法。它把 token 可用性表示为二元序列，应用距离感知高斯加权，并通过余弦基投影所得模式，获得分布感知的位置特征。这些特征加到 token 嵌入，并由轻量 MLP 映射为调制标准 RoPE 相位的角度偏移。在 LLaDA 与 DREAM 上的大量实验表明，MDLMPE 在监督微调、预训练、零样本评估与块扩散设置中普遍优于常规位置编码方法。进一步消融表明，可用性状态、高斯局部性、谱基与嵌入注入的完整组合产生最强结果。这些结果确立了演化的 token 可用性分布是掩码扩散语言模型的有用位置信号。

## 关键词

#扩散语言模型 #位置编码 #掩码扩散 #RoPE
