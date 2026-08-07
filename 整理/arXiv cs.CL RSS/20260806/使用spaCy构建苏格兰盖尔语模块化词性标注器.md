---
published: 2026-08-06
title: 使用 spaCy 构建苏格兰盖尔语模块化词性标注器
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/A Modular Part-of-Speech Tagger for Scottish Gaelic using spaCy.md
source_note: "[[信息源/arXiv cs.CL RSS/A Modular Part-of-Speech Tagger for Scottish Gaelic using spaCy]]"
source_sha256: 2a880d40dcebd776fdcf63e27cfdd64b784c66b4c0dbc782751ff77250cc5e3d
original_url: https://arxiv.org/abs/2608.04808
processed: 2026-08-07
language: zh-CN
---

# 使用 spaCy 构建苏格兰盖尔语模块化词性标注器

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04808)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/A Modular Part-of-Speech Tagger for Scottish Gaelic using spaCy|查看原始文件]]

## 摘要

- 用模块化 spaCy NLP 框架基于苏格兰盖尔语标注参考语料库（ARCOSG）构建词性标注器，形态丰富且濒危的盖尔语适合检验轻量级处理方法
- 仅用最少预处理与配置训练两个模型（细粒度与粗粒度标签集），无外部嵌入与预训练语言模型，纯监督学习
- 细粒度模型标注准确率 88.6%，粗粒度模型 93.7%，与此前两个已发表盖尔语标注器相当；开箱即用流水线在低资源、形态复杂语言中表现良好

## 正文

低资源语言的词性标注因标注数据有限而仍然具有挑战性，尤其对语言学上复杂的语言。盖尔语（Gaidhlig，苏格兰盖尔语）是一种形态丰富且濒危的语言，数字资源有限，适合检验轻量级语言处理方法。本文描述使用模块化的 spaCy 自然语言处理框架，基于苏格兰盖尔语标注参考语料库（Annotated Reference Corpus of Scottish Gaelic）为盖尔语构建词性标注器。我们用最少的预处理与配置训练两个模型：一个使用细粒度标签集，另一个使用简化的粗粒度标签集。两个模型均在无外部嵌入或预训练语言模型的情况下训练，仅使用来自现有语料库的监督学习。细粒度模型达到 88.6% 的标注准确率，粗粒度模型达到 93.7%。结果与此前发表的两个盖尔语标注器相当，表明简单、开箱即用的语言处理流水线能在低资源与形态复杂的语言环境中表现出良好性能。

## 关键词

#词性标注 #低资源语言 #苏格兰盖尔语 #spaCy
