---
published: 2026-08-06
title: TopoChunker：拓扑感知的智能体文档分块框架
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/TopoChunker- Topology-Aware Agentic Document Chunking Framework.md
source_note: "[[信息源/arXiv cs.CL RSS/TopoChunker- Topology-Aware Agentic Document Chunking Framework]]"
source_sha256: c4941295969efa03a32a3c4d015b4fe4f8f7871e23c251b0922591a2604be89f
original_url: https://arxiv.org/abs/2603.18409
processed: 2026-08-07
language: zh-CN
---

# TopoChunker：拓扑感知的智能体文档分块框架

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2603.18409)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/TopoChunker- Topology-Aware Agentic Document Chunking Framework|查看原始文件]]

## 摘要

- 现有用于检索增强生成（RAG）的文档分块方法通常将文本线性化，这种强制的线性化剥离了内在的拓扑层级，造成"语义碎片化"，降低下游检索质量
- 提出 TopoChunker，一个智能体框架，将异构文档映射到结构化中间表征（SIR）上，以显式保留跨片段依赖关系
- 采用双智能体架构平衡结构保真度与计算成本：检查智能体（Inspector Agent）通过成本优化的提取路径动态路由文档，精炼智能体（Refiner Agent）执行容量审计与拓扑上下文消歧以重建层级谱系
- 在非结构化叙事（GutenQA）与复杂报告（GovReport）上达到 SOTA：生成准确率较最强 LLM 基线绝对提升 8.0%，Recall@3 达 83.26%，同时 token 开销降低 23.5%

## 正文

当前用于检索增强生成（RAG）的文档分块方法通常将文本线性化。这种强制的线性化剥离了文档内在的拓扑层级，造成"语义碎片化"（semantic fragmentation），从而降低下游检索质量。在本文中，我们提出 TopoChunker，一个智能体框架，它将异构文档映射到结构化中间表征（SIR）上，以显式保留跨片段依赖关系。为了在结构保真度与计算成本之间取得平衡，TopoChunker 采用双智能体架构：检查智能体（Inspector Agent）通过成本优化的提取路径动态路由文档，而精炼智能体（Refiner Agent）执行容量审计和拓扑上下文消歧，以重建层级谱系。在非结构化叙事（GutenQA）和复杂报告（GovReport）上的评估表明，TopoChunker 达到了当前最优性能。它在生成准确率上比最强的 LLM 基线绝对提升 8.0%，Recall@3 达到 83.26%，同时将 token 开销降低 23.5%，为结构感知的 RAG 提供了一种可扩展的方法。

## 关键词

#RAG #文档分块 #拓扑结构 #智能体框架 #语义碎片化 #TopoChunker #arXiv
