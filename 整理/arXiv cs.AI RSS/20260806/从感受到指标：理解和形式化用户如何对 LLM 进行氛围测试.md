---
published: 20260806
title: "从感受到指标：理解和形式化用户如何对 LLM 进行氛围测试"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs]]"
source_sha256: 53a6f6b902d1094309cc11b0a8e11b1895264d25691df73eec15531059132420
original_url: "https://arxiv.org/abs/2604.14137"
processed: 2026-08-06
language: zh-CN

---

# 从感受到指标：理解和形式化用户如何对 LLM 进行氛围测试

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Itay Itzhak, Eliya Habba, Gabriel Stanovsky, Yonatan Belinkov
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.14137)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/From Feelings to Metrics- Understanding and Formalizing How Users Vibe-Test LLMs|查看原始文件]]

## 摘要

- 评估 LLM 具挑战性，基准分数常无法捕捉模型真实世界有用性；用户转而依赖「氛围测试」：基于经验非正式评估，如在与其工作流相关的编码任务上比较模型。
- 本文研究氛围测试在实践中如何运作，然后形式化以支持系统分析：先分析两个经验资源（用户评估实践调查和博客社交媒体野外模型比较报告集合），据此将氛围测试形式化为两部分过程——用户既个性化测试什么，也个性化如何判断响应。
- 引入遵循此表述的概念验证评估流水线：生成个性化提示，用用户感知主观标准比较模型输出；编码基准实验发现，组合个性化提示和用户感知评估可改变偏好哪个模型，反映氛围测试在实践中的作用。

## 正文

评估 LLM 具挑战性，因为基准分数常无法捕捉模型的真实世界有用性。用户转而依赖「氛围测试」（vibe-testing）：非正式、基于经验的评估，如在与其自身工作流相关的编码任务上比较模型。虽然普遍，氛围测试往往过于临时和结构化不足，难以在规模上分析或复现。在本工作中，我们研究氛围测试在实践中如何运作，然后形式化它以支持系统分析。我们首先分析两个经验资源：（1）用户评估实践调查，（2）来自博客和社交媒体的野外模型比较报告集合。基于这些资源，我们将氛围测试形式化为两部分过程：用户既个性化他们测试什么，也个性化他们如何判断响应。然后我们引入一个遵循此表述的概念验证评估流水线：生成个性化提示，并用用户感知主观标准比较模型输出。在编码基准实验中，我们发现组合个性化提示和用户感知评估可改变偏好哪个模型，反映氛围测试在实践中的作用。这些发现表明，形式化氛围测试可作为桥接基准分数与真实世界经验的有用方法。

## 关键词

#LLM评估 #氛围测试 #个性化 #用户体验 #arXiv