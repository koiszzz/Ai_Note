---
title: "学习把软提示翻译成硬 LLM 提示"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Learning to Translate from Soft to Hard LLM Prompts.md"
source_note: "[[信息源/arXiv cs.LG RSS/Learning to Translate from Soft to Hard LLM Prompts.]]"
source_sha256: ed346aee2f99a86667d720877aa24bbc42e0bb9a276c685f1cef318752d17de9
original_url: "https://arxiv.org/abs/2605.27642"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 学习把软提示翻译成硬 LLM 提示

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Pitipat Kongsomjit、Suryansh Goyal、Jacob Whitehill
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.27642)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Learning to Translate from Soft to Hard LLM Prompts.|查看原始文件]]

## 摘要

- 软提示（又称连续提示）是面向特定任务微调 LLM 的参数高效方法；与其他机器学习技术一样，其参数编码某种隐藏过程：能否训练一个模型解码该过程——把原始参数"翻译"成自然语言？
- 提出一个前景看好的概念验证：一个能把软提示学得的嵌入口语化为流利自然语言描述的翻译器模型。
- 表明这些口语化描述用作独立推理提示时超越基线，说明它们不只是听起来合理的描述，而是与任务真正相关；平均而言，口语化保留了原始软提示 32% 的性能——适度但显著。
- 展望未来方向：这可用于可解释性、推理，甚至扩展到其他机器学习技术。

## 正文

论文编号：arXiv:2605.27642v2（更新类型：replace-cross）。以下为摘要全文翻译。

软提示（soft prompting），又称连续提示，是一种面向特定任务微调 LLM 的参数高效方法。与其他机器学习技术一样，其参数编码某种隐藏过程：能否训练一个模型来解码这个过程——把原始参数"翻译"成自然语言？在这项工作中，我们给出一个前景看好的概念验证：一个能够把软提示学得的嵌入口语化为流利自然语言描述的翻译器模型。我们表明，这些口语化描述在用作独立推理提示时超越基线，说明它们不只是听起来合理的描述，而是与任务真正相关。平均而言，口语化保留了原始软提示性能的 32%——适度但显著。我们展望了未来方向，探讨这如何用于可解释性或推理，甚至可能扩展到其他机器学习技术。

## 关键词

#软提示 #提示工程 #可解释性 #LLM #参数高效微调
