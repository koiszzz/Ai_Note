---
published: 2026-08-05
title: "KnowHal：全面多模态幻觉评估的知识驱动基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/KnowHal- A Knowledge-Driven Benchmark for Comprehensive Multimodal Hallucination Evaluation.md"
source_note: "[[信息源/arXiv cs.AI RSS/KnowHal- A Knowledge-Driven Benchmark for Comprehensive Multimodal Hallucination Evaluation]]"
source_sha256: 6bb984c4ef9fe311c4ab1ddcb0b43291bfbf5b5ad501457669938575b998a5e8
original_url: "https://arxiv.org/abs/2608.03782"
processed: 2026-08-05
language: zh-CN
---

# KnowHal：全面多模态幻觉评估的知识驱动基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ruihan Li、Jiyang Tan、Kailin Jiang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03782)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/KnowHal- A Knowledge-Driven Benchmark for Comprehensive Multimodal Hallucination Evaluation|查看原始文件]]

## 摘要

- 提出 KnowHal：明确把知识幻觉纳入多模态幻觉评估，覆盖实体、属性、关系与知识四个维度。
- 在共享图像与实体上构造配对的正面与负面问题，支持对感知错误、知识相关错误与虚假前提接受的受控比较。
- 基准含 10 个领域、50 个类别的 1,800 个样本，通过结合 LLM 辅助、CLIP 过滤与人工验证的半自动流水线构建。
- 评估 14 个代表性 MLLM：知识维度对几乎所有模型都是最大挑战，多数模型在负面问题上大幅退化，显示对虚假前提的鲁棒性有限；通过配对问题设计统一四个幻觉维度，弥补现有评估框架的重要空白。

## 正文

论文编号：arXiv:2608.03782v1（更新类型：new）。以下为摘要全文翻译。

幻觉仍是开发可信多模态大语言模型（MLLM）的关键挑战。虽然现有基准主要关注实体、属性与关系幻觉，知识相关失败往往被分开研究，缺乏跨不同幻觉维度的统一评估框架。为克服这一点，我们提出 KnowHal，一个明确把知识幻觉纳入多模态幻觉评估的基准，涵盖实体、属性、关系与知识四个维度。KnowHal 在共享图像与实体上构造配对的正面与负面问题，支持对感知错误、知识相关错误与虚假前提接受的受控比较。该基准包含 10 个领域、50 个类别的 1,800 个样本，通过结合 LLM 辅助、CLIP 过滤与人工验证的半自动流水线构建。我们在 KnowHal 上评估 14 个代表性 MLLM 并进行大量分析。结果表明，知识维度对几乎所有评估模型都是一致的最大挑战，而多数模型在负面问题上表现出大幅性能退化，暴露对虚假前提的鲁棒性有限。通过配对问题设计统一四个幻觉维度，KnowHal 弥补了现有评估框架的一个重要空白，支持对 MLLM 幻觉进行更全面的评估。

## 关键词

#多模态幻觉 #知识幻觉 #评估基准 #MLLM
