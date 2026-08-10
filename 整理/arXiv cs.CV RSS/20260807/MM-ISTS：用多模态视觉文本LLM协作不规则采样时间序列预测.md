---
published: 2026-08-07
title: "MM-ISTS：用多模态视觉文本 LLM 协作不规则采样时间序列预测"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/MM-ISTS- Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs.md"
source_note: "[[信息源/arXiv cs.CV RSS/MM-ISTS- Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs]]"
source_sha256: 200f40a7e16c02de9a3302f9d9d23be6e9c5df4fad9969456351ee025d51f542
original_url: "https://arxiv.org/abs/2603.05997"
processed: 2026-08-07
language: zh-CN
---

# MM-ISTS：用多模态视觉文本 LLM 协作不规则采样时间序列预测

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zhi Lei, Chenxi Liu, Hao Miao, Wanghui Qiu, Bin Yang, Chenjuan Guo
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2603.05997)

## 摘要

- 不规则采样时间序列（ISTS）在真实场景中广泛存在，不同变量在不均匀时间间隔上呈现异步观测；现有 ISTS 预测方法常仅用历史观测预测未来，在学习上下文语义与细粒度时间模式上不足。
- 提出 MM-ISTS：视觉文本大语言模型增强的多模态 ISTS 预测框架，桥接时间、视觉与文本模态；含两阶段编码机制。
- 跨模态视觉文本编码模块自动生成信息性视觉图像与文本数据，与多模态 LLM（MLLM）协作捕捉复杂时间模式与全面上下文理解；ISTS 编码从历史 ISTS 观测提取互补且丰富的时间特征（多视图嵌入融合与时间-变量编码器）；自适应查询特征提取器压缩 MLLM token 嵌入同时保留有用知识，降低计算成本；带模态感知门控的多模态对齐模块缓解模态差距。
- 真实数据大量实验提供所提方案有效性的洞见。

## 正文

不规则采样时间序列（irregularly sampled time series, ISTS）在真实世界场景中广泛存在，不同变量在不均匀时间间隔上呈现异步观测。现有 ISTS 预测方法常常仅利用历史观测预测未来观测，而在学习上下文语义与细粒度时间模式上不足。为解决这些问题，研究提出 MM-ISTS，一个视觉文本大语言模型增强的多模态 ISTS 预测框架，桥接时间、视觉与文本模态。MM-ISTS 包含一个两阶段编码机制。特别地，研究提出跨模态视觉文本编码（Cross-Modal Vision-Text Encoding）模块：自动生成信息性的视觉图像与文本数据，与多模态 LLM（MLLMs）协作，捕捉复杂的时间模式与全面的上下文理解。并行地，ISTS 编码从历史 ISTS 观测中提取互补且丰富的时间特征，包括多视图嵌入融合与时间-变量编码器（Temporal-Variable Encoder）。此外，研究提出自适应查询特征提取器（Adaptive Query-Based Feature Extractor）压缩 MLLM token 嵌入，同时保留有用知识，从而降低计算成本。另外，研究设计带模态感知门控（Modality-Aware Gating）的多模态对齐（Multimodal Alignment）模块，缓解模态差距。真实数据上的大量实验为所提方案的有效性提供了洞见。

## 关键词

不规则采样时间序列、多模态 LLM、预测、视觉文本编码、时间序列
