---
published: 2026-08-07
title: "PoolBench：解码器专用 LLM 概念表征评估中池化策略的基准"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/PoolBench- A Benchmark for Pooling Strategies in Concept Representation Evaluation for Decoder-Only .md"
source_note: "[[信息源/arXiv cs.CL RSS/PoolBench- A Benchmark for Pooling Strategies in Concept Representation Evaluation for Decoder-Only ]]"
source_sha256: 214c720dee707179c43a3594eea195e95849463cda91d4951cdac716b53a7c68
original_url: "https://arxiv.org/abs/2608.05162"
processed: 2026-08-07
language: zh-CN
---

# PoolBench：解码器专用 LLM 概念表征评估中池化策略的基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Ayushi Agarwal
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05162)

## 摘要

- 池化是解码器专用概念表征工作中重要但少被审视的设计选择：实践者必须将 token 级隐藏状态压缩为段落级向量，但跨概念、模型与任务比较该选择缺乏共享协议；报告增益被数据集、层、构造方法与池化规则的同时变化混淆。
- 引入 PoolBench：固定评估协议下将池化隔离为实验变量的基准；覆盖 17 个概念、19 种池化策略、3 个开源权重解码器专用模型（Llama-3.1-8B、Gemma-2-9B、Mistral-7B），在经审计的 37693 段真实文本语料上评估。
- 主轴为线性可分性（D1/AUROC）；引导概念流行度（D2/SCP）与输出级解纠缠（D3）为诊断轴；主要发现明确：W4_hierarchical 达跨模型平均 AUROC 0.7799，广泛采用的 P1_last_token 基线仅 0.7640 且统计显著更差（Friedman+Nemenyi，p=2.0e-36；18 种有效策略中 77 个显著对）；排名跨层稳定。
- 关键阴性结果：强检测不意味强引导——多数概念 D2 与 D3 显著弱于 D1，指示根本表征极限而非池化失败；中难度概念上 W4_hierarchical 超出 P1_last_token 0.042–0.113 AUROC；构造方法选择（DiffMean vs REPE）的影响（ΔAUROC 0.15）大于池化（ΔAUROC 0.016）。

## 正文

池化是解码器专用概念表征工作中重要但少被审视的设计选择：实践者必须将 token 级隐藏状态折叠为段落级向量，然而不存在跨概念、模型与任务比较该选择的共享协议。报告增益被数据集、层、构造方法与池化规则的同时变化混淆，使原则性决策不可能。研究引入 PoolBench，一个在固定评估协议下将池化隔离为实验变量的基准。PoolBench 覆盖 17 个概念、19 种池化策略与 3 个开源权重解码器专用模型（Llama-3.1-8B、Gemma-2-9B、Mistral-7B），在单个经审计的 37693 段真实文本语料上评估。主轴是线性可分性（D1/AUROC）；引导概念流行度（D2/SCP）与输出级解纠缠（D3）作为诊断轴。主要发现明确：W4_hierarchical 达到跨模型平均 AUROC 0.7799，而广泛采用的 P1_last_token 基线仅达 0.7640 且统计显著更差（Friedman+Nemenyi，p=2.0e-36；18 种有效策略中 77 个显著对）。排名跨层稳定（rho=0.961–0.990）。一个关键阴性结果：强检测不意味强引导——对多数概念，D2 与 D3 显著弱于 D1，指示根本的表征极限而非池化失败。在中难度概念上，W4_hierarchical 超出 P1_last_token 0.042–0.113 AUROC；构造方法选择（DiffMean vs REPE）的影响（ΔAUROC 0.15）大于池化（ΔAUROC 0.016），确立正确的实践层级。研究发布语料、预提取激活、评分模型、引导向量与评估代码，作为池化研究的可复用协议。

## 关键词

池化、概念表征、解码器专用 LLM、线性可分性、引导向量
