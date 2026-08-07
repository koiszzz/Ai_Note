---
published: 2026-08-06
title: 面向消费级 GPU 上个性化端侧小型语言模型的节能省存 PEFT 方法
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Energy- and Memory-Efficient PEFT Methods for Personalized On-Device SLMs on Consumer GPUs.md
source_note: "[[信息源/arXiv cs.CL RSS/Energy- and Memory-Efficient PEFT Methods for Personalized On-Device SLMs on Consumer GPUs]]"
source_sha256: 7f49118c43da57c53557577b0a6ced4de4d8fe3413c996c3e9eaee5b15743255
original_url: https://arxiv.org/abs/2608.04488
processed: 2026-08-07
language: zh-CN
---

# 面向消费级 GPU 上个性化端侧小型语言模型的节能省存 PEFT 方法

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04488)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Energy- and Memory-Efficient PEFT Methods for Personalized On-Device SLMs on Consumer GPUs|查看原始文件]]

## 摘要

- 尽管大语言模型（LLM）发展迅速，高显存、时间和能耗成本使资源受限设备上的部署与个性化仍不切实际；小型语言模型（SLM）的参数高效微调（PEFT）提供了有前景的替代方案。
- 作者跨架构比较了五种微调方法（全量微调、LoRA、LoRA+、QLoRA、BitFit），覆盖四个 SLM、三个 GLUE 任务和三个 LaMP 个性化任务，并用聚焦能耗的 NetScore-E 与聚焦内存的 NetScore-M 评估。
- 结果：LoRA+ 在 24 个配置中的 19 个取得最高 NetScore-E；QLoRA 可将峰值微调显存最多降低 3.9 倍，但在能耗决定取舍时仅在一个配置中被选中；TinyLlama-1.1B 在多数基准上领先，表明最优方法由主导约束决定——能耗选 LoRA+、内存选 QLoRA。

## 正文

本文编号：arXiv:2608.04488v1（公告类型：new），以下为摘要全文翻译。

尽管大语言模型（LLM）取得了快速发展，但由于高昂的显存（VRAM）、时间和能耗成本，在资源受限设备上部署并个性化定制它们仍然不切实际。对小型语言模型（SLM）进行参数高效微调（PEFT）提供了一种有前景的替代方案，但很少有研究同时使用通用基准和个性化基准、并考虑能耗来跨架构比较 PEFT 方法。我们在来自两个家族的四个 SLM 上比较了五种微调方法（全量微调 Full Fine-Tuning、LoRA、LoRA+、QLoRA 和 BitFit），这两个家族分别为基于 Transformer 的 TinyLlama-1.1B、Qwen3-1.7B 和基于 SSM 的 Mamba-1.4B、Mamba-2-1.3B，评估覆盖三个 GLUE 任务（SST-2、QNLI、STS-B）和三个 LaMP 个性化任务（LaMP-1、LaMP-2、LaMP-3）。每种配置都使用聚焦能耗的 NetScore-E 和聚焦内存的 NetScore-M 两种指标进行评估，这两个变体反映了制约端侧部署的约束条件。方法选择遵循严格的能耗优先规则（NetScore-E 最高者优先，若并列则按 NetScore-M 打破平局）。LoRA+ 在 24 个配置中的 19 个取得最高 NetScore-E，在 24 个中的 13 个取得最高 NetScore-M，并在 24 个中的 18 个成为最终被选中的方法。仅适用于 Transformer 模型的 QLoRA 相比 LoRA 可将微调峰值显存最高降低 3.9 倍，因此在 12 个 Transformer 配置中的 5 个取得最佳 NetScore-M，但其反量化开销使其在由能耗决定取舍时仅在一个配置中被选中。BitFit 和全量微调在两个指标变体上几乎都不具竞争力，而 TinyLlama-1.1B 在六个基准中的五个上领跑聚焦能耗的 NetScore-E，并在四个上领跑聚焦内存的 NetScore-M。这些结果表明，紧凑型 SLM 与 PEFT 相结合提供了一条实用且节能的个性化端侧部署路径，最优方法由主导约束决定：能耗优先选 LoRA+，内存优先选 QLoRA。

## 关键词

#PEFT #LoRA #QLoRA #小型语言模型 #端侧部署 #能耗
