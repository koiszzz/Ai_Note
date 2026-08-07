---
published: 2026-08-06
title: 潜在通信何时值得？多智能体 LLM 中继 KV 缓存的因果审计
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs.md
source_note: "[[信息源/arXiv cs.AI RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs]]"
source_sha256: 4d41f78cb862261f5477bf45924f99eb62eb128130ee50053ac6676e282709e7
original_url: https://arxiv.org/abs/2608.04893
processed: 2026-08-07
language: zh-CN
---

# 潜在通信何时值得？多智能体 LLM 中继 KV 缓存的因果审计

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04893)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs|查看原始文件]]

## 摘要

- 多智能体 LLM 系统中继 KV 缓存而非文本，并把收益归功于"潜在想法"；这一归因声称的是中继了哪个样本的缓存，需要用因果手段审计
- 用错乱（样本不匹配）、置零与矩匹配随机缓存替换原缓存：接收者需要发送者私有信息时，答案相关中继达 100% 对 23–25%（三个家族、五个检查点、散文文档问答场景复现）；不需要时在 Holm 校正 TOST 下两条件 2.8 点内等价
- 大缓存效应不等于配对效应：置零中继损失 14.7 点，错配缓存仅 0.4 点；基准增量本身不足以证明潜在想法传输，须做错配缓存审计

## 正文

多智能体 LLM 系统转而中继键值（key-value）缓存而非文本，并将其收益归功于交换的"潜在想法（latent thoughts）"。这种归因是一个关于中继的是"哪个"样本缓存的主张，而不仅仅是"中继了缓存"这一事实。我们在已发布系统中对其进行了因果审计。我们将缓存替换为错乱（样本不匹配）、置零以及矩匹配的随机对应物，并在两种机制下进行：接收者是否需要发送者的私有信息。当需要时，测试得到上限结果：在主骨干网络上，答案相关的中继达到 100%，对 23–25% 的答案无关中继，这一对比在三个模型家族、五个检查点以及一个散文文档问答场景中得到复现。当不需要时，预先注册的五种子协议在 Holm 校正的 TOST 下确立了两者在 2.8 个点以内的等价性（该裕度锚定于被审计系统所报告的收益），覆盖 GSM8K 与 ARC-Challenge 上三个 Qwen3 规模以及 8B 的 MedQA（有一个单元在裕度内显示小幅检测到的优势）；第二个家族未检测到优势。大的缓存效应不一定是配对效应。在一个自然的单元中，将中继置零损失 14.7 个点；而错配缓存仅损失 0.4 个点。需求也不充分：在相同测试下，交付通道跨度从上限（LatentMAS 的原生中继）、部分（KVComm 的层子集）到无检测到的示例特定迁移（C2C 发布的投影器）。基准增量本身并不能确立潜在想法的传输；确立它需要进行错配缓存审计，我们已发布该审计。

## 关键词

#多智能体 #KV缓存 #潜在通信 #因果审计
