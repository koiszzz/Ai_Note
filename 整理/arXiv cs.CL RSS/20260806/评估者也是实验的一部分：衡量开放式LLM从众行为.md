---
published: 2026-08-06
title: 评估者也是实验的一部分：衡量开放式 LLM 从众行为
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/The Evaluator Is Part of the Experiment- Measuring Open-Ended LLM Conformity.md
source_note: "[[信息源/arXiv cs.CL RSS/The Evaluator Is Part of the Experiment- Measuring Open-Ended LLM Conformity]]"
source_sha256: 1d66e4baa75d491af019dc8d7c212f8915a3ffa1fda77d040115487174af5040
original_url: https://arxiv.org/abs/2608.04463
processed: 2026-08-07
language: zh-CN
---

# 评估者也是实验的一部分：衡量开放式 LLM 从众行为

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04463)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/The Evaluator Is Part of the Experiment- Measuring Open-Ended LLM Conformity|查看原始文件]]

## 摘要

- 既有 LLM 从众研究大多在有可验证标签下测量离散答案翻转；开放式修订需要不同测量策略，因为答案质量是分级、潜在且被不完美评判的。
- 实验表明，全错同侪输入在每个生成器-数据集单元中都产生质量最差的修订；对相同答案的盲评与知情评分也会因评估者而异——一位评估者向同侪背书的方向偏移，两位反向偏移，一位大致中立，GPT-4o 与 GPT-5.4-mini 审计也并非中立。
- 锚点审计显示，简洁正确的锚点被误读的频率足以动摇潜在量表，除非显式检查校准；四项结论：翻转率不足以完整衡量开放式从众、错误同侪损害开放式修订、评估者并非中立、锚点校准必不可少。

## 正文

关于 LLM 从众行为的既有工作大多在可验证标签下测量离散的答案翻转。开放式修订需要不同的测量策略，因为答案质量是分级的、潜在的，并且由不完美的评判者评估。我们引入了一个实验协议，在一个合并的主同侪条件语料库以及分别构建的分解语料库上实施，使我们能够分离普通重新作答、候选内容暴露、捆绑的同侪呈现残差，以及评判者对可见同侪情境的方向性敏感性。在四个开源权重生成器和三个基准上，全错同侪输入在每个生成器-数据集单元中都产生质量最差的修订。对相同答案的盲评与知情评分也因评估者而异：一位评估者向同侪背书的位置偏移，两位向相反方向偏移，一位大致中立，而 GPT-4o 和 GPT-5.4-mini 审计同样并非中立。最后，一项锚点审计表明，简洁正确的锚点被误读的频率足以动摇潜在量表，除非显式检查校准。这些结果支持四个结论：翻转率不足以作为开放式从众的完整度量；错误同侪损害开放式修订；评估者并非中立；锚点校准必不可少。

## 关键词

#LLM从众 #开放式修订 #评估者偏差 #同侪影响 #锚点校准 #对齐
