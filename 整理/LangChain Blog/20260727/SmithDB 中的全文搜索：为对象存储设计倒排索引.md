---
published: 2026-07-27
title: SmithDB 中的全文搜索：为对象存储设计倒排索引
source: LangChain Blog
original_file: 信息源/LangChain Blog/Full Text Search in SmithDB- Designing an Inverted Index for Object Storage.md
source_note: "[[信息源/LangChain Blog/Full Text Search in SmithDB- Designing an Inverted Index for Object Storage]]"
source_sha256: 78c1361d3100470e7ab9fa281974ce6cb13c594a37adcb1b2567bcf9f3334238
original_url: https://www.langchain.com/blog/full-text-search-in-smithdb-designing-an-inverted-index-for-object-storage
processed: 2026-08-07
language: zh-CN
---

# SmithDB 中的全文搜索：为对象存储设计倒排索引

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-07-27
> - 原文链接：[打开原文](https://www.langchain.com/blog/full-text-search-in-smithdb-designing-an-inverted-index-for-object-storage)
> - Vault 原文件：[[信息源/LangChain Blog/Full Text Search in SmithDB- Designing an Inverted Index for Object Storage|查看原始文件]]

## 摘要

- SmithDB 支持对智能体追踪记录（agent traces）进行全文搜索与 JSON 过滤
- 中位（P50）延迟为 400 毫秒
- 底层数据是存储在对象存储中的大型、深度嵌套 JSON 文档

## 正文

SmithDB 支持对智能体追踪记录（agent traces）进行全文搜索和 JSON 过滤，其中位（P50）延迟为 400 毫秒（median (P50) latency of 400 ms），尽管底层数据由存储在对象存储（object storage）中的大型、深度嵌套的 JSON 文档（large, deeply nested JSON documents）组成。

## 关键词

#SmithDB #全文搜索 #倒排索引 #对象存储 #可观测性
