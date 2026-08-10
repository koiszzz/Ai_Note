---
published: 2026-08-07
title: "MameLoshnLM：意第绪语语言模型与评估基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MameLoshnLM- Yiddish Language Model and Evaluation Benchmark.md"
source_note: "[[信息源/arXiv cs.AI RSS/MameLoshnLM- Yiddish Language Model and Evaluation Benchmark]]"
source_sha256: f360d0600e25550f37973a744c652210294c974c5d26cf748c09812d3abe7d25
original_url: "https://arxiv.org/abs/2608.05850"
processed: 2026-08-07
language: zh-CN
---

# MameLoshnLM：意第绪语语言模型与评估基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Uri Katz, Omer Goldman, Tomasz Limisiewicz, Reut Tsarfaty, Noah A. Smith
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05850)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MameLoshnLM- Yiddish Language Model and Evaluation Benchmark|查看原始文件]]

## 摘要

- 呈现 MameLoshnLM：首个专为意第绪语构建的开源 8B 参数语言模型；尽管意第绪语文本传统丰富，其有限的数字存在与可靠评估资源稀缺制约意第绪语语言建模进展。
- 现有多语言语料与基准常是该语言的低质代理，包含大量含噪、机器翻译与误分类文本。
- 引入 Oytser：高质量意第绪语预训练语料，结合当代网络原生来源与文学材料；以及 Kashes：跨翻译、语言分析、信息抽取与语言理解的多任务基准。
- 使用这些资源继续预训练 Llama 3.1 8B 获得 MameLoshnLM；基准任务中优于类似规模开放基线；分析显示这些增益不仅是数量上的：相对通用多语言模型，MameLoshnLM 更好捕获语言定义的词汇与形态模式，指向含噪网络规模多语言数据对低资源语言的更广失败模式；结果为意第绪语 NLP 提供基础，并为历史上丰富但数字代表性不足语言的语言模型开发提供实用模板。

## 正文

我们呈现 MameLoshnLM，首个专为意第绪语（Yiddish）构建的开源 8B 参数语言模型。尽管意第绪语文本传统丰富，其有限的数字存在与可靠评估资源的稀缺制约了意第绪语语言建模的进展。现有多语言语料与基准往往是该语言的低质代理，包含大量含噪、机器翻译与误分类的文本。我们通过引入 Oytser 填补这些空白：一个结合当代网络原生来源与文学材料的高质量意第绪语预训练语料；以及 Kashes：一个跨翻译、语言分析、信息抽取与语言理解的多任务基准。使用这些资源，我们继续预训练 Llama 3.1 8B 获得 MameLoshnLM。在基准任务中，MameLoshnLM 优于类似规模的开放基线。我们的分析表明，这些增益不仅是数量上的：相对通用多语言模型，MameLoshnLM 更好地捕获了语言定义的词汇与形态模式，指向含噪网络规模多语言数据对低资源语言的更广失败模式。我们的结果为意第绪语 NLP 提供基础，并为历史上丰富但数字代表性不足语言的语言模型开发提供实用模板。

## 关键词

#意第绪语 #低资源语言 #语言模型 #预训练语料
