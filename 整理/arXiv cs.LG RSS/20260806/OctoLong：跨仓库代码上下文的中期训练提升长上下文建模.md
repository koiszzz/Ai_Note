---
published: 2026-08-06
title: OctoLong：跨仓库代码上下文的中期训练提升长上下文建模
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling.md
source_note: "[[信息源/arXiv cs.LG RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling]]"
source_sha256: 7e05c986423c9b31779f1f2154e0b3003876b746b9f8d7fc5b81b0ab2351896e
original_url: https://arxiv.org/abs/2608.05141
processed: 2026-08-07
language: zh-CN
---

# OctoLong：跨仓库代码上下文的中期训练提升长上下文建模

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05141)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/OctoLong- Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling|查看原始文件]]

## 摘要

- 现有长上下文语料以书籍、学术文章和代码仓库为主，是有限资源且常缺乏长距离依赖
- 提出 OctoLong 上下文工程流水线：AST 解析器、语言服务器后端与包管理器促进代码引用递归检索，整理百万 token 级的依赖丰富代码上下文
- 训练 OctoLong-Instruct（600M 至 14B 参数）：约 50B token 混合数据（含 6.2B OctoLong 上下文）做上下文扩展中期训练，再经约 10B token 指令微调
- 仅以 OctoLong 数据替代 12% 传统上下文扩展语料，即在长距离检索、长期状态跟踪、仓库级代码理解与下游智能体任务上显著提升

## 正文

语言模型（LM）的上下文长度已大幅增长，这由上下文学习、自我改进和长时程智能体工作流的需求驱动。然而，现有的长上下文语料库以书籍、学术文章和代码仓库为主，这些是有限资源，且往往缺乏长距离依赖。在本工作中，我们介绍 OctoLong，一条上下文工程流水线，它使用 AST 解析器、语言服务器后端和包管理器来促进代码引用的递归检索，从而能够整理长度达数百万 token 的依赖丰富的代码上下文。然后我们训练 OctoLong-Instruct，一套能力强大的长上下文开源 LM 套件，从 600M 到 14B 参数规模的基座模型出发，通过上下文扩展中期训练，使用约 50B token 的混合数据，其中包含约 6.2B token 的 OctoLong 代码上下文，随后进行约 10B token 的指令微调。我们的训练消融和针对 18 个最先进开源权重长上下文 LM 的实验评估表明，仅用 OctoLong 数据替代 12% 的传统上下文扩展语料，就能在长距离检索、长期状态跟踪、仓库级代码理解和下游智能体任务上带来显著提升，同时增强短上下文编码场景中的 API 使用。

## 关键词

#长上下文 #语言模型 #代码理解 #中期训练 #智能体
