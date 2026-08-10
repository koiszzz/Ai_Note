---
published: 2026-08-07
title: "MM-ISTS：用多模态视觉-文本 LLM 协作不规则采样时序预测"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MM-ISTS- Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/MM-ISTS- Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs]]"
source_sha256: 72971c687a04abad4cdbc3631b60d76c246bfabfd54e7e2f55762bf8a0812868
original_url: "https://arxiv.org/abs/2603.05997"
processed: 2026-08-07
language: zh-CN
---

# MM-ISTS：用多模态视觉-文本 LLM 协作不规则采样时序预测

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhi Lei, Chenxi Liu, Hao Miao, Wanghui Qiu, Bin Yang, Chenjuan Guo
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.05997)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MM-ISTS- Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs|查看原始文件]]

## 摘要

- 不规则采样时序（ISTS）在真实场景中普遍存在，跨多样变量在不等时间间隔上展示异步观测；现有 ISTS 预测方法常仅利用历史观测预测未来，在习得上下文语义与细粒度时间模式上不足。
- 提出 MM-ISTS：由视觉-文本大语言模型增强的多模态 ISTS 预测框架，桥接时间、视觉与文本模态——包含两阶段编码机制：跨模态视觉-文本编码模块自动生成信息丰富的视觉图像与文本数据，与多模态 LLM（MLLM）协作捕获复杂时间模式与全面上下文理解；同时 ISTS 编码从历史 ISTS 观测提取互补而丰富的时序特征，包括多视图嵌入融合与时序-变量编码器。
- 提出自适应查询特征提取器压缩 MLLM token 嵌入同时保留有用知识，降低计算成本；设计带模态感知门控的多模态对齐模块缓解模态差距。
- 真实数据的大量实验洞悉所提方案的有效性。

## 正文

不规则采样时序（Irregularly sampled time series，ISTS）在真实世界场景中普遍存在，跨多样变量在不等时间间隔上展示异步观测。现有 ISTS 预测方法往往仅利用历史观测预测未来，而在学习上下文语义与细粒度时间模式方面不足。为解决这些问题，我们提出 MM-ISTS，一个由视觉-文本大语言模型增强的多模态 ISTS 预测框架，桥接时间、视觉与文本模态。MM-ISTS 包含两阶段编码机制。特别地，提出跨模态视觉-文本编码模块，自动生成信息丰富的视觉图像与文本数据，与多模态 LLM（MLLMs）协作，捕获复杂时间模式与全面上下文理解。并行地，ISTS 编码从历史 ISTS 观测提取互补而丰富的时序特征，包括多视图嵌入融合与一个时序-变量编码器。此外，我们提出自适应查询特征提取器，压缩 MLLM token 嵌入同时保留有用知识，从而降低计算成本。另外，设计一个带模态感知门控的多模态对齐模块，以缓解模态差距。真实数据上的大量实验为所提方案的有效性提供洞见。

## 关键词

#不规则采样时序 #多模态LLM #预测 #模态对齐
