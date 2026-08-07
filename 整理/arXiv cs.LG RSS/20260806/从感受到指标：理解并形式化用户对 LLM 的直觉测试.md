---
published: 2026-08-06
title: "从感受到指标：理解并形式化用户对 LLM 的直觉测试"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs.md"
source_note: "[[信息源/arXiv cs.LG RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs|查看原始文件]]"
source_sha256: f99ab642227dadd160e3d13a7f5bae1eb0655d0c3ed3edd5d94b1d7dfa4f24ef
original_url: https://arxiv.org/abs/2604.14137
processed: 2026-08-07
language: zh-CN
---

# 从感受到指标：理解并形式化用户对 LLM 的直觉测试

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.14137)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs|查看原始文件]]

## 摘要

- 基准分数往往无法反映模型在真实世界中的实用价值，用户常依赖"直觉测试"（vibe-testing）——基于非正式经验进行的评估，例如在自己工作流相关的编码任务上比较模型。
- 直觉测试虽然普遍存在，但过于即兴和无结构，难以大规模分析或复现；本文先研究其在实践中的运作方式，再将其形式化以支持系统性分析。
- 作者将直觉测试形式化为两阶段过程：用户对测试内容（测什么）和评判方式（如何评判回答）都进行个性化，并提出一个概念验证评估流水线。
- 在编码基准上的实验表明，结合个性化提示与用户感知的主观评判标准会改变被偏好的模型，说明形式化的直觉测试可作为连接基准分数与真实经验的桥梁。

## 正文

评估大语言模型（LLM）充满挑战，因为基准分数往往无法捕捉模型在真实世界中的实用性。取而代之的是，用户常常依赖"直觉测试"（vibe-testing）：一种基于非正式经验的评估方式，例如在与自身工作流相关的编码任务上比较不同模型。虽然直觉测试十分普遍，但它往往过于即兴、缺乏结构，难以大规模地分析或复现。在这项工作中，我们研究了直觉测试在实践中如何运作，然后将其形式化以支持系统性的分析。我们首先分析了两类经验资源：（1）一份关于用户评估实践的问卷调查；（2）一批从博客和社交媒体收集的真实世界模型比较报告。基于这些资源，我们将直觉测试形式化为一个两阶段过程：用户既会对"测试什么"进行个性化，也会对"如何评判回答"进行个性化。随后，我们引入了一个遵循该形式化的概念验证评估流水线，它通过生成个性化提示，并利用用户感知的主观评判标准来比较模型输出。在编码基准上的实验中，我们发现将个性化提示与用户感知评估相结合，会改变哪个模型被偏好，这反映了直觉测试在实践中的作用。这些发现表明，形式化的直觉测试可以作为一种有效方法，弥合基准分数与真实世界经验之间的鸿沟。

## 关键词

#LLM评估 #直觉测试 #个性化评估 #基准测试
