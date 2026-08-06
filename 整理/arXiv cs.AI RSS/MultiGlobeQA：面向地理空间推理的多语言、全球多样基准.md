---
title: "MultiGlobeQA：面向地理空间推理的多语言、全球多样基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MultiGlobeQA- A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/MultiGlobeQA- A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning]]"
source_sha256: a8a9d1810fbfd8c04c7243318105cdd9b27ef06b07735992a443e05f75ab6d38
original_url: "https://arxiv.org/abs/2608.03882"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MultiGlobeQA：面向地理空间推理的多语言、全球多样基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Martin Böckling、Elizaveta Nosova、Heiko Paulheim 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03882)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MultiGlobeQA- A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning|查看原始文件]]

## 摘要

- 引入 MultiGlobeQA，多语言基准：46,060 个问答对，覆盖 14 个空间函数族与 15 种答案格式，基于三个知识图谱的执行真值；通过收入与密度分层抽样覆盖 201 个国家和地区，提供英语与另外 16 种高低资源语言的平行问题。
- 参数化、推理与智能体设置中，LLM 在网格索引与形状计算任务上坍缩，拓扑关系与方向表现最佳。
- 检索与工具使用带来可观增益，但即使提供黄金事实，性能也停滞在三分之二以下，表明瓶颈是计算而非知识获取。
- 模型在低收入地区表现不佳，黄金事实反而扩大而非缩小这一差距。

## 正文

论文编号：arXiv:2608.03882v1（更新类型：cross）。以下为摘要全文翻译。

地理空间推理——计算真实世界实体上的距离、包含与其他空间关系——对导航与物流至关重要，然而大语言模型（LLM）尽管存储了可观的地理知识，却在所需的几何与拓扑计算上表现挣扎。现有基准只部分定位这些失败：它们要么是合成的，要么规模小，大多单语，并且对地理覆盖的控制有限。我们引入 MultiGlobeQA，一个多语言基准：46,060 个问答对，覆盖 14 个空间函数族与 15 种答案格式，基于三个知识图谱的执行真值。它通过收入与密度分层抽样覆盖 201 个国家和地区，并提供英语与另外 16 种高、低资源语言的平行问题。在参数化、推理与智能体设置中，LLM 在需要网格索引与形状计算的任务上坍缩，而拓扑关系与方向表现最佳。检索与工具使用带来可观增益，然而即使提供黄金事实，性能也停滞在三分之二以下，表明瓶颈是计算而非知识获取。模型在低收入地区表现也不佳，而黄金事实扩大而非缩小这一差距。

## 关键词

#地理空间推理 #多语言基准 #LLM #空间计算
