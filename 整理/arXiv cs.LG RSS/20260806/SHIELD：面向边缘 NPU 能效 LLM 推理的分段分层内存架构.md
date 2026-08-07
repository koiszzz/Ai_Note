---
published: 2026-08-06
title: SHIELD：面向边缘 NPU 能效 LLM 推理的分段分层内存架构
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/SHIELD- A Segmented Hierarchical Memory Architecture for Energy-Efficient LLM Inference on Edge NPUs.md
source_note: "[[信息源/arXiv cs.LG RSS/SHIELD- A Segmented Hierarchical Memory Architecture for Energy-Efficient LLM Inference on Edge NPUs]]"
source_sha256: c885957f080051c78757b8085fb790d21db058fa3325f5d0e25364a99d7f4b8f
original_url: https://arxiv.org/abs/2604.07396
processed: 2026-08-07
language: zh-CN
---

# SHIELD：面向边缘 NPU 能效 LLM 推理的分段分层内存架构

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.07396)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SHIELD- A Segmented Hierarchical Memory Architecture for Energy-Efficient LLM Inference on Edge NPUs|查看原始文件]]

## 摘要

- 边缘 NPU 上的 LLM 推理从根本上受限于片上内存容量；高密度嵌入式 DRAM（eDRAM）适合存储激活工作区，但其周期性刷新消耗大量能量。
- 现有工作主要聚焦减少片外流量或优化持久 KV 缓存的刷新，而瞬态、容错的 Query 与 Attention Output（QO）激活在很大程度上被忽视；提出 SHIELD，一种生命周期感知的分段 eDRAM 架构，联合利用 bfloat16（BF16）激活的驻留时间与比特级敏感性。
- SHIELD 将符号与指数域从尾数中分离，禁用瞬态 QO 尾数的刷新，并对持久 KV 尾数施加放宽刷新；在多个 LLM 与推理场景下相对标准刷新基线将 eDRAM 刷新能耗降低 35%，同时在 WikiText-2、PIQA 与 ARC-Easy 上保持准确率。

## 正文

边缘神经处理单元（NPU）上的大语言模型（LLM）推理从根本上受限于片上内存容量。尽管高密度嵌入式 DRAM（eDRAM）对存储激活工作区颇具吸引力，但其周期性刷新消耗大量能量。

先前工作主要集中于减少片外流量或优化持久 Key-Value（KV）缓存的刷新，而瞬态且具有错误容限的 Query 与 Attention Output（QO）激活在很大程度上被忽视。作者提出 SHIELD，一种生命周期感知的分段 eDRAM 架构，联合利用 bfloat16（BF16）激活的时间驻留性与比特级敏感性。SHIELD 将符号与指数域从尾数中隔离，禁用瞬态 QO 尾数的刷新，并对持久 KV 尾数施加放宽的刷新。

在多个 LLM 与推理场景下，SHIELD 相对标准刷新基线将 eDRAM 刷新能耗降低 35%，同时在 WikiText-2、PIQA 与 ARC-Easy 上保持准确率。

## 关键词

#边缘NPU #LLM推理 #eDRAM #能效 #内存架构 #KV缓存
