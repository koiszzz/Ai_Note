---
published: 2026-08-07
title: "英语来源多语言 RAG 中隐私风险所在：跨五种查询语言的分阶段审计"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Where Privacy Risk Lives in English-Source Multilingual RAG- A Stage-Decomposed Audit Across Five Qu.md"
source_note: "[[信息源/arXiv cs.CL RSS/Where Privacy Risk Lives in English-Source Multilingual RAG- A Stage-Decomposed Audit Across Five Qu]]"
source_sha256: 5370b10da81cb389c3d644252cfb04d508929c05b26f30769680d46475f25802
original_url: "https://arxiv.org/abs/2608.05163"
processed: 2026-08-07
language: zh-CN
---

# 英语来源多语言 RAG 中隐私风险所在：跨五种查询语言的分阶段审计

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Yanhang Li, Zhichao Fan, Zexin Zhuang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05163)

## 摘要

- 常见假设：切换到非英语语言使多语言 RAG 系统更易受个人信息的攻击；在英语来源合成 PII 语料上、五种查询语言与两阶段防御（LLM 输入评判者 + 正则输出过滤器）下测试该假设，流水线的翻译器、评判者、回译者与生成器均为 Qwen2.5-7B——因此每项发现都是流水线条件的，而非语言固有风险的因果排序。
- 仅输出过滤下，英语有最高的可观察非结构化 PII 泄漏率；文档级 bootstrap 区间下仅英语-斯瓦希里清晰分离；加入输入评判者后，阿拉伯语与斯瓦希里仍有残余泄漏，回译查询不闭合差距（作为消融报告，不能作为因果诊断，因回译者也是 Qwen）。
- 独立 n=17 多语言提示评判者残余角落：将金语料文档附加到输入评判者阻断 15/17 残余单元；将该结果框定为机制诊断而非可部署防御：使用 oracle 检索、BLOCK/ALLOW 率仅在对抗查询上测量、未测量良性查询假阳性率与答案效用成本。
- 补充材料含代码、语料、查询与逐次 JSONL；优先跟进为独立机器翻译加非 Qwen 评判者、配母语者查询集的复制，范围界定于限制章节。

## 正文

一个常见假设认为，切换到非英语语言会使多语言 RAG 系统更容易受到个人信息攻击。研究在英语来源的合成 PII 语料上、用五种查询语言与一个两阶段防御（LLM 输入评判者 + 正则表达式输出过滤器）测试了这一假设，其流水线的翻译器、评判者、回译者与生成器全部是 Qwen2.5-7B——因此下面的每一项发现都是流水线条件的（pipeline-conditional），而非语言固有风险的因果排序。在仅输出过滤下，英语具有最高的可观察非结构化 PII 泄漏率；在文档级 bootstrap 区间下，只有英语与斯瓦希里干净分离。一旦加入输入评判者，残余泄漏仍然存在于阿拉伯语与斯瓦希里上，而回译查询并不能闭合这一差距（这是研究报告的一个消融，但不能作为因果诊断使用，因为回译者也是 Qwen）。在一个独立的 n=17 多语言提示评判者残余角落上，将金语料文档附加到输入评判者阻断了 15/17 个残余单元。研究将这一最后结果框定为机制诊断，而非可部署的防御：它使用 oracle 检索，BLOCK/ALLOW 率仅在对抗查询上测量，且没有测量良性查询的假阳性率与答案效用成本。补充材料包含代码、语料、查询与逐次 JSONL；优先跟进是在限制章节中界定的：独立机器翻译加非 Qwen 评判者、配母语者查询集的复制。

## 关键词

多语言 RAG、隐私、PII、审计、防御
