---
published: 2026-06-30
title: "为什么意图预测需要的不仅仅是 LLM"
source: "Stack Overflow Blog"
original_file: "信息源/Stack Overflow Blog/Why intent prediction needs more than an LLM​​​​‌﻿‍﻿​‍​‍‌‍﻿﻿‌﻿​‍‌‍‍‌‌‍‌﻿‌‍‍‌‌‍﻿‍​‍​‍​﻿‍‍​‍​‍‌﻿​﻿‌‍​‌.md"
source_note: "[[信息源/Stack Overflow Blog/Why intent prediction needs more than an LLM​​​​‌﻿‍﻿​‍​‍‌‍﻿﻿‌﻿​‍‌‍‍‌‌‍‌﻿‌‍‍‌‌‍﻿‍​‍​‍​﻿‍‍​‍​‍‌﻿​﻿‌‍​‌]]"
source_sha256: 616091816b9c26db1de5c676d19312fb52d6e8acaa572bb1a9c318c5707bd9a8
original_url: "https://stackoverflow.blog/2026/06/30/why-intent-prediction-needs-more-than-an-llm/"
processed: 2026-08-05
language: zh-CN
---

# 为什么意图预测需要的不仅仅是 LLM

> [!info] 来源信息
> - 数据源：Stack Overflow Blog
> - 作者：Phoebe Sajor
> - 发布时间：2026-06-30
> - 原文链接：[打开原文](https://stackoverflow.blog/2026/06/30/why-intent-prediction-needs-more-than-an-llm/)
> - Vault 原文件：[[信息源/Stack Overflow Blog/Why intent prediction needs more than an LLM|查看原始文件]]

## 摘要

- Ryan 与 Yobi CTO Frank Portman 对话。
- 讨论为什么下一 token 预测虽然对语言很好，却不是预测人类行为的正确归纳偏置。
- Yobi 如何用 Transformer 与图神经网络构建"行为基础模型"，而非聊天式 LLM。
- 以及如何在保持消费者数据私密的同时，每秒运行数百万次个性化决策。

## 正文

以下是文章内容全文翻译。

Ryan 与 Yobi CTO Frank Portman 坐下来聊：为什么下一 token 预测虽然对语言很好，却不是预测人类行为的正确归纳偏置。他们讨论 Yobi 如何用 Transformer 与图神经网络构建"行为基础模型"，而非聊天式 LLM，以及在保持消费者数据私密的同时，每秒运行数百万次个性化决策需要什么。

## 关键词

#意图预测 #图神经网络 #行为基础模型 #个性化 #隐私
