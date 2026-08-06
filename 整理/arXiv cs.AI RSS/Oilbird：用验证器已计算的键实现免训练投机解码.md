---
title: "Oilbird：用验证器已计算的键实现免训练投机解码"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Oilbird- Training-Free Speculative Decoding with Keys the Verifier Already Computes.md"
source_note: "[[信息源/arXiv cs.AI RSS/Oilbird- Training-Free Speculative Decoding with Keys the Verifier Already Computes]]"
source_sha256: 048f167a4f55579ac018b5595a133d9fc35feba1654615b048dd22f30933d8c3
original_url: "https://arxiv.org/abs/2608.03839"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Oilbird：用验证器已计算的键实现免训练投机解码

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tao Jin、Phuong Minh Nguyen、Zhenzhu Yan 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03839)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Oilbird- Training-Free Speculative Decoding with Keys the Verifier Already Computes|查看原始文件]]

## 摘要

- 免训练投机解码通过把上下文的精确后缀与早期上下文池匹配来起草；该查找会漏掉池中已有的正确草稿，在工具调用流量上最明显——请求几乎重复一切，只有少量为它铸造的值不同，一个被拒绝的 token 会丢弃其后正确的延续。
- 逐位置诊断十个基准的失败位置，发现这是寻址问题而非覆盖问题：在密度最高的工具调用基准上，最强精确匹配起草者遗漏的约一半内容存在于池中，但无法通过精确匹配到达。
- 提出第二个语义草稿来源：同一池，用验证器在每个已提交 token 上已计算的隐藏状态重新键控，并配一个合并使它能寄居在现有词汇起草者的树内。
- 在三个已发表起草者中，匹配池与预算下，被接受长度提升 24–29%；Oilbird 在 API-Bank 上达到 4.4 倍自回归解码速度（框架中最强免训练基线 3.9 倍，EAGLE-3 2.0 倍）。

## 正文

论文编号：arXiv:2608.03839v1（更新类型：new）。以下为摘要全文翻译。

免训练投机解码通过把上下文的精确后缀与早期上下文池匹配来起草。该查找会漏掉池中已有的正确草稿，在工具调用流量上最为明显：请求几乎重复一切，只有为它铸造的少数值不同，而一个被拒绝的 token 会丢弃其后正确的延续。我们逐位置诊断十个基准的失败位置，发现这是一个寻址问题而非覆盖问题：在我们密度最高的工具调用基准上，最强精确匹配起草者遗漏的约一半内容存在于池中，却无法通过精确匹配到达。因此我们提出第二个语义草稿来源：同一个池，用验证器在每个已提交 token 上已经计算的隐藏状态重新键控，并配一个合并机制，使它能够寄居在现有词汇起草者的树内。在三个已发表的起草者中，于匹配的池与预算下，它把被接受长度提升 24–29%。Oilbird 在 API-Bank 上达到 4.4 倍的自回归解码速度，而我们框架中最强的免训练基线为 3.9 倍，EAGLE-3 为 2.0 倍。

## 关键词

#投机解码 #推理加速 #LLM服务 #工具调用
