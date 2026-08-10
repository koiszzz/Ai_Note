---
published: 2026-08-07
title: "MameLoshnLM：意第绪语语言模型与评估基准"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/MameLoshnLM- Yiddish Language Model and Evaluation Benchmark.md"
source_note: "[[信息源/arXiv cs.CL RSS/MameLoshnLM- Yiddish Language Model and Evaluation Benchmark]]"
source_sha256: c1b1f3b9c73eb0a2a8807cb0a0ac1cd38d4fe96d7d15209ed6d0db1706f4181a
original_url: "https://arxiv.org/abs/2608.05850"
processed: 2026-08-07
language: zh-CN
---

# MameLoshnLM：意第绪语语言模型与评估基准

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Uri Katz, Omer Goldman, Tomasz Limisiewicz, Reut Tsarfaty, Noah A. Smith
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05850)

## 摘要

- 呈现 MameLoshnLM：首个专为意第绪语构建的开源 8B 参数语言模型；意第绪语虽有丰富文本传统，但有限数字存在与可靠评估资源稀缺制约意第绪语语言建模进展。
- 现有多语言语料与基准常为该语言差代理：含大量噪声、机器翻译与误分类文本；引入 Oytser：高质量意第绪语预训练语料，结合当代网络原生来源与文学材料；Kashes：多任务基准（翻译、语言分析、信息抽取与语言理解）。
- 用这些资源持续预训练 Llama 3.1 8B 获得 MameLoshnLM；基准任务上超越相似规模开放基线。
- 分析显示增益不仅定量：相对通用多语言模型，MameLoshnLM 更好捕捉定义语言的词汇与形态模式，指向低资源语言噪声网络规模多语言数据的更广失败模式；结果为意第绪语 NLP 提供基础，也是历史丰富但数字表征不足语言开发语言模型的实用模板。

## 正文

研究呈现 MameLoshnLM，第一个专为意第绪语（Yiddish）构建的开源 8B 参数语言模型。尽管意第绪语有着丰富的文本传统，其有限的数字存在与可靠评估资源的稀缺制约了意第绪语语言建模的进展。现有的多语言语料与基准往往是该语言的差代理，含有大量噪声的、机器翻译的与误分类的文本。研究通过引入 Oytser（一个结合当代网络原生来源与文学材料的高质量意第绪语预训练语料）与 Kashes（一个涵盖翻译、语言分析、信息抽取与语言理解的多任务基准）来弥补这些空白。利用这些资源，研究持续预训练 Llama 3.1 8B 得到 MameLoshnLM。在基准的任务中，MameLoshnLM 超越相似规模的开源基线。分析表明，这些增益不仅是定量的：相对通用多语言模型，MameLoshnLM 更好地捕捉了定义语言的词汇与形态模式，指向噪声网络规模多语言数据对低资源语言的一个更广失败模式。研究结果既为意第绪语 NLP 提供了基础，也为历史丰富但数字表征不足的语言开发语言模型提供了实用模板。

## 关键词

意第绪语、语言模型、基准、低资源、预训练
