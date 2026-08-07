---
published: 20260806
title: "OctoLong：跨仓库代码上下文中间训练增强长上下文建模"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling.md"
source_note: "[[信息源/arXiv cs.AI RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling]]"
source_sha256: 16b0bcd37f0ab3aa656bf6f39cd72449ef57ad097313ed65994a9b99762d0dbb
original_url: "https://arxiv.org/abs/2608.05141"
processed: 2026-08-06
language: zh-CN

---

# OctoLong：跨仓库代码上下文中间训练增强长上下文建模

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Indraneil Paul, Falko Helm, Goran Glava\v{s}, Iryna Gurevych
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05141)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling|查看原始文件]]

## 摘要

- 语言模型（LM）上下文长度显著增加，由上下文学习、自我改进和长时程智能体工作流需求驱动；但现有长上下文语料由书籍、学术文章和代码仓库主导，这些是有限资源且长距离依赖常稀缺。
- 本文引入 OctoLong，一个上下文工程流水线，使用 AST 解析器、语言服务器后端和包管理器促进代码引用的递归检索，实现策展数百万 token 长、依赖丰富的代码上下文；训练 OctoLong-Instruct，一套能力长上下文开放 LM（从 600M 到 14B 参数的基座模型派生），通过约 500 亿 token 混合（含约 62 亿 token OctoLong 代码上下文）的上下文扩展中间训练，后接约 100 亿 token 指令调优。
- 对 18 个最先进开放权重长上下文 LM 的训练消融和实验评估显示，用 OctoLong 数据取代仅 12% 传统上下文扩展语料在长程检索、长期状态跟踪、仓库级代码理解和下游智能体任务产生显著增益，同时增强短上下文编码场景的 API 使用。

## 正文

语言模型（LM）上下文长度显著增加，由上下文学习、自我改进和长时程智能体工作流需求驱动。然而，现有长上下文语料由书籍、学术文章和代码仓库主导，这些是有限资源，长距离依赖常稀缺。在本工作中，我们引入 OctoLong，一个上下文工程流水线，使用 AST 解析器、语言服务器后端和包管理器促进代码引用的递归检索，实现策展数百万 token 长、依赖丰富的代码上下文。然后我们训练 OctoLong-Instruct，一套能力长上下文开放 LM，从 600M 到 14B 参数的基座模型派生，通过约 500 亿 token 混合（含约 62 亿 token OctoLong 代码上下文）的上下文扩展中间训练，后接约 100 亿 token 指令调优。我们对 18 个最先进开放权重长上下文 LM 的训练消融和实验评估显示，用 OctoLong 数据取代仅 12% 传统上下文扩展语料，在长程检索、长期状态跟踪、仓库级代码理解和下游智能体任务上产生显著增益，同时增强短上下文编码场景的 API 使用。

## 关键词

#长上下文 #代码上下文 #中间训练 #智能体 #arXiv