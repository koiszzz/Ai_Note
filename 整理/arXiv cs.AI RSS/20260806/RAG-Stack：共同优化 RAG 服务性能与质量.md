---
published: 20260806
title: "RAG-Stack：共同优化 RAG 服务性能与质量"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RAG-Stack- Co-Optimizing RAG Serving Performance and Quality.md"
source_note: "[[信息源/arXiv cs.AI RSS/RAG-Stack- Co-Optimizing RAG Serving Performance and Quality]]"
source_sha256: 42742b5c63e982d07502c0a01f530bc5c0670aa4b3d393975aeb0d9da66bc823
original_url: "https://arxiv.org/abs/2608.03487"
processed: 2026-08-06
language: zh-CN

---

# RAG-Stack：共同优化 RAG 服务性能与质量

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haiqiang Zhang, Yuanqing Lei, Wanting Li, Tao Zhang, Wenqi Jiang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03487)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RAG-Stack- Co-Optimizing RAG Serving Performance and Quality|查看原始文件]]

## 摘要

- 检索增强生成（RAG）——用从数据库检索的信息增强 LLM 生成——已成为知识密集应用广泛使用的方法；现代 RAG 系统暴露许多配置选择（检索索引、模型选择、模型如何调用检索），每个配置产生答案质量与服务性能之间的不同权衡。
- 本文呈现 RAG-Stack，一个高效发现跨多样 RAG 应用和服务系统质量-性能帕累托前沿的框架：RAG-PE 迭代设计空间探索算法选择下一个待评估 RAG 配置；RAG-IR 多样 RAG 算法工作负载抽象；RAG-CM 预测给定硬件上最优部署和服务性能的性能模型。
- 组件使 RAG-Stack 无需部署每个候选即可搜索联合算法-系统配置空间，并将现有帕累托前沿迁移到新服务系统；相同优化迭代数下，RAG-Stack 发现的帕累托前沿覆盖归一化质量-性能空间比最先进配置搜索方法多 52.5%-153.2%。

## 正文

检索增强生成（RAG）——用从数据库检索的信息增强大语言模型（LLM）生成——已成为知识密集应用广泛使用的方法。然而，现代 RAG 系统暴露许多配置选择，如检索索引、模型选择以及模型如何调用检索。每个配置产生答案质量与服务性能之间的不同权衡，使为特定应用部署选择最优设置具挑战性。我们呈现 RAG-Stack，一个高效发现跨多样 RAG 应用和服务系统质量-性能帕累托前沿的框架。RAG-Stack 由 RAG-PE（迭代设计空间探索算法，选择下一个待评估 RAG 配置）、RAG-IR（多样 RAG 算法的工作负载抽象）和 RAG-CM（预测给定硬件上最优部署和服务性能的性能模型）组成。这些组件共同使 RAG-Stack 无需部署每个候选即可搜索联合算法-系统配置空间，并将现有帕累托前沿迁移到新服务系统。在相同优化迭代数下跨多样数据集，RAG-Stack 发现的帕累托前沿覆盖归一化质量-性能空间比同一 RAG 设计空间评估的最先进配置搜索方法多 52.5%-153.2%。

## 关键词

#RAG #服务优化 #帕累托前沿 #性能建模 #arXiv