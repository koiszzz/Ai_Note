---
published: 2026-08-07
title: "隐私风险在多语言 RAG 中存于何处：跨五种查询语言的分阶段审计"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Where Privacy Risk Lives in English-Source Multilingual RAG- A Stage-Decomposed Audit Across Five Qu.md"
source_note: "[[信息源/arXiv cs.LG RSS/Where Privacy Risk Lives in English-Source Multilingual RAG- A Stage-Decomposed Audit Across Five Qu]]"
source_sha256: 2d7625a49ebc1d23c5ab0520e7848b6890a2417c895a65c95aaecd760b70674b
original_url: "https://arxiv.org/abs/2608.05163"
processed: 2026-08-07
language: zh-CN
---

# 隐私风险在多语言 RAG 中存于何处：跨五种查询语言的分阶段审计

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Yanhang Li, Zhichao Fan, Zexin Zhuang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05163)

## 摘要

- 常见假设：切换到非英语语言使多语言 RAG 系统更易被攻击以获取个人信息；在英语源合成 PII 语料上、五种查询语言、两阶段防御（LLM 输入评审 + 正则输出过滤器）的流水线中测试——翻译器、评审器、回译器与生成器均为 Qwen2.5-7B，因此每个发现是流水线条件的，而非语言固有风险的因果排名。
- 仅输出过滤下，英语观测非结构化 PII 泄漏率最高；仅英语对斯瓦希里语在文档级 bootstrap 区间下干净分离；加入输入评审后阿拉伯语与斯瓦希里语上仍有残余泄漏，回译查询不能弥合差距（报告为消融，因回译器也是 Qwen，不能作为因果诊断）。
- 单独 n=17 多语言提示评审器残余角落中，向输入评审附加黄金语料文档阻断 15/17 残余单元；该结果作为机制诊断而非可部署防御：用 oracle 检索、BLOCK/ALLOW 率仅在对抗查询上测量、未测良性查询误报率与答案效用成本。
- 补充材料含代码、语料、查询与逐次 JSONL；优先后续是独立 MT 加非 Qwen 评审器、母语查询集的复制。

## 正文

一个常见假设认为，切换到非英语语言使多语言 RAG 系统更容易被攻击以获取个人信息。研究在英语源合成 PII 语料上、五种查询语言、两阶段防御（LLM 输入评审 + 正则输出过滤器）的流水线中测试该假设——该流水线的翻译器、评审器、回译器与生成器都是 Qwen2.5-7B——因此以下每个发现都是流水线条件的（pipeline-conditional），而非语言固有风险的因果排名。在仅输出过滤下，英语观测到最高的非结构化 PII 泄漏率；仅英语对斯瓦希里语在文档级 bootstrap 区间下干净分离。一旦加入输入评审，阿拉伯语与斯瓦希里语上仍有残余泄漏，且回译查询无法弥合该差距（一个作为消融报告、但不能作为因果诊断的消融，因为回译器也是 Qwen）。在单独 n=17 的多语言提示评审器残余角落中，向输入评审附加黄金语料文档可阻断 15/17 的残余单元。研究将最后结果框定为机制诊断而非可部署防御：它使用 oracle 检索，BLOCK/ALLOW 率仅在对抗查询上测量，且未测量良性查询误报率与答案效用成本。补充材料包含代码、语料、查询与逐次 JSONL；优先后续是带母语查询集的独立 MT 与非 Qwen 评审器复制，范围见局限部分。

## 关键词

RAG、多语言、隐私、PII 泄漏、审计
