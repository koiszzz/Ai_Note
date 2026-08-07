---
published: 2017-08-18
title: "OpenAI Baselines：ACKTR 与 A2C"
source: "OpenAI News"
original_file: "信息源/OpenAI News/OpenAI Baselines- ACKTR & A2C.md"
source_note: "[[信息源/OpenAI News/OpenAI Baselines- ACKTR & A2C]]"
source_sha256: d2e96c87e4f81152f8d0e65fe3264768a9695b788f6d188a3293e7798f1222a1
original_url: "https://openai.com/index/openai-baselines-acktr-a2c"
processed: 2026-08-06
language: zh-CN

---

# OpenAI Baselines：ACKTR 与 A2C

> [!info] 来源信息
> - 数据源：OpenAI News
> - 作者：原始来源未提供
> - 发布时间：2017-08-18
> - 原文链接：[打开原文](https://openai.com/index/openai-baselines-acktr-a2c)
> - Vault 原文件：[[信息源/OpenAI News/OpenAI Baselines- ACKTR & A2C|查看原始文件]]

## 摘要

- 我们发布两个新的 OpenAI Baselines 实现：ACKTR 和 A2C。
- A2C 是异步优势 Actor-Critic（A3C）的同步确定性变体，表现相当；ACKTR 比 TRPO 和 A2C 样本效率更高，每次更新仅需略多一点计算。

## 正文

我们发布两个新的 OpenAI Baselines 实现：ACKTR 和 A2C。A2C 是异步优势 Actor-Critic（A3C）的同步、确定性变体，我们发现其表现与 A3C 相当。ACKTR 是比 TRPO 和 A2C 样本效率更高的强化学习算法，每次更新所需的计算只比 A2C 略多。

## 关键词

#OpenAI #Baselines #ACKTR #A2C