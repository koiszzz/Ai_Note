---
published: 2026-08-06
title: 从感觉走向指标：理解并形式化用户如何对 LLM 进行氛围测试
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs.md
source_note: "[[信息源/arXiv cs.CL RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs]]"
source_sha256: bbe887a9276c2dcf0503ea8d48e4e22a5920111af2a7314a26736ec34a09aeb7
original_url: https://arxiv.org/abs/2604.14137
processed: 2026-08-07
language: zh-CN
---

# 从感觉走向指标：理解并形式化用户如何对 LLM 进行氛围测试

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.14137)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs|查看原始文件]]

## 摘要

- 基准分数常无法反映模型真实可用性，用户普遍依赖"氛围测试"（vibe-testing）这类非正式经验评估，但它过于临时、难以规模分析。
- 基于用户评估实践调查与来自博客和社交媒体的真实模型对比报告，将氛围测试形式化为两阶段过程：用户个性化"测试什么"和"如何评判响应"。
- 引入概念验证评估流水线：生成个性化提示、用用户感知的主观标准比较输出；在编码基准上，结合两者会改变被偏好的模型，表明形式化氛围测试可弥合基准分数与现实经验的差距。

## 正文

本文编号：arXiv:2604.14137v3（公告类型：replace），以下为摘要全文翻译。

评估 LLM 颇具挑战性，因为基准分数往往无法捕捉模型在现实世界中的实用性。相反，用户经常依赖"氛围测试"（vibe-testing）：一种非正式的基于经验的评估，例如在与自身工作流相关的编码任务上比较模型。虽然氛围测试很普遍，但它往往过于临时和缺乏结构，难以在规模上进行分析或复现。在本工作中，我们研究了氛围测试在实践中如何运作，然后将其形式化以支持系统分析。我们首先分析两类经验资源：（1）一项关于用户评估实践的调查，以及（2）来自博客和社交媒体的现实世界模型对比报告集合。基于这些资源，我们将氛围测试形式化为一个两阶段过程：用户既个性化"测试什么"，也个性化"如何评判响应"。然后我们引入一个概念验证评估流水线，按照这一形式生成个性化提示，并使用用户感知的主观标准比较模型输出。在编码基准上的实验中，我们发现将个性化提示与用户感知评估相结合会改变被偏好的模型，这反映了氛围测试在实践中的作用。这些发现表明，形式化的氛围测试可以成为弥合基准分数与现实世界经验之间差距的有用方法。

## 关键词

#氛围测试 #LLM评估 #个性化 #基准 #用户体验
