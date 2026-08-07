---
published: 2026-08-06
title: 潜在通信何时值得：多智能体 LLM 中继 KV 缓存的因果审计
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs.md
source_note: "[[信息源/arXiv cs.LG RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs]]"
source_sha256: 8d8357d17df30220b7ef0b4fc0a717b29c1bd4c0c07984439d7837768d741540
original_url: https://arxiv.org/abs/2608.04893
processed: 2026-08-07
language: zh-CN
---

# 潜在通信何时值得：多智能体 LLM 中继 KV 缓存的因果审计

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04893)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/When Does Latent Communication Pay- A Causal Audit of Relayed KV Caches in Multi-Agent LLMs|查看原始文件]]

## 摘要

- 对多智能体 LLM 系统中继键值缓存（KV cache）的"潜在思想传递"收益进行因果审计：用错乱、清零与矩匹配随机缓存替换中继缓存，考察其收益是否确实源于被中继的特定示例。
- 在接收方需要发送方私有信息时，回答相关中继与答案无关中继在主干上为 100% 对 23-25%，对比在三个模型族、五个检查点及文档 QA 任务中复现；不需要私有信息时，预注册五种子方案确立 2.8 个百分点内的等价性。
- 大的缓存效应并不等于配对效应（清零中继损失 14.7 分、错配缓存仅 0.4 分），且需求并非充分条件；基准增量本身不能证明潜在思想传递，须进行错配缓存审计。

## 正文

多智能体 LLM 系统以中继键值（key-value）缓存代替文本进行通信，并将其收益归功于交换的"潜在思想"（latent thoughts）。这种归因是一个关于被中继的是"哪一个"示例的缓存的论断，而不仅仅是"存在一个"缓存的论断。我们在已发布的系统中对此进行了因果审计。

在两种机制下（由接收方是否需要发送方的私有信息来界定），缓存被替换为错乱（错配示例）、清零和矩匹配的随机对应物。在需要私有信息的情况下，测试结果呈现天花板效应：在主干 backbone 上，回答相关的中继对比答案无关的中继为 100% 对 23-25%，这一对比在三个模型族、五个检查点和一个散文式文档问答任务上得以复现。

在不需要私有信息的情况下，一个预注册的五种子方案确立了在 2.8 个百分点以内的等价性，该裕度锚定于被审计系统报告的收益，采用了 Holm 校正的 TOST 检验，在 GSM8K 和 ARC-Challenge 上的三个 Qwen3 规模以及 MedQA 8B 上进行（一个单元格在裕度内显示出微小的可检测优势）；另一个模型族未显示可检测的优势。

大的缓存效应不一定就是配对效应。在一个自然的单元格中，清零中继损失 14.7 个百分点；错配缓存则仅损失 0.4 个百分点。需求也不是充分条件：在同一测试下，交付通道涵盖了从天花板（LatentMAS 的原生中继）、部分（KVComm 的层子集）到无可检测的示例特定传递（C2C 发布的投影器）。基准增量本身并不能确立潜在思想的传递；确立它需要错配缓存审计，我们将该审计代码公开发布。

## 关键词

#多智能体LLM #KV缓存 #因果审计 #潜在通信 #TOST等价性检验
