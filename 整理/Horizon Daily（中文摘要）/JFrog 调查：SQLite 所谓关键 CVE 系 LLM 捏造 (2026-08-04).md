---
title: "JFrog 调查：SQLite 所谓关键 CVE 系 LLM 捏造"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)]]"
source_fragment: "JFrog 调查：SQLite 所谓关键 CVE 系 LLM 捏造"
source_sha256: 394593e54b3a42b7dc4973ca5a342d896120ce9bbc7a6f374ffa92c89c7b9829
original_url: "https://lwn.net/Articles/1086936/"
published: 2026-08-04
processed: 2026-08-05
language: zh-CN
---

# JFrog 调查：SQLite 所谓关键 CVE 系 LLM 捏造

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-04
> - 原文链接：[打开原文](https://lwn.net/Articles/1086936/)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-04 (ZH)|查看原始日报]]

## 摘要

- JFrog 的研究揭示，一些被报告为 SQLite 关键漏洞的 CVE 实际上是 LLM 完全捏造的，其中部分还进入了知名漏洞数据库。这些“LLM slop CVE”会浪费组织调查和修复不存在漏洞的时间，同时污染漏洞数据库。在关键漏洞会被自动优先处理或根据漏洞分数自动开票的环境中，虚构 CVE 会变成实际负担。当 AI 用于自动化漏洞分类和修复时，AI 代理可能去定位不存在的函数、生成补丁或建议更改，将安全团队引向完全错误的方向。

## 正文

JFrog 的研究揭示，一些被报告为 SQLite 关键漏洞的 CVE 实际上是 LLM 完全捏造的，其中部分还进入了知名漏洞数据库。这些“LLM slop CVE”会浪费组织调查和修复不存在漏洞的时间，同时污染漏洞数据库。在关键漏洞会被自动优先处理或根据漏洞分数自动开票的环境中，虚构 CVE 会变成实际负担。当 AI 用于自动化漏洞分类和修复时，AI 代理可能去定位不存在的函数、生成补丁或建议更改，将安全团队引向完全错误的方向。

rss · LWN.net · 8月3日 14:59

「背景」 CVE（公共漏洞和暴露）是用于唯一标识和追踪软件漏洞的编号，NVD 等漏洞数据库会汇总并维护这些条目，供安全团队按优先级处置。然而，JFrog 研究团队发现，部分被收录进高风险漏洞数据库的 SQLite “严重” CVE 条目完全由大型语言模型（LLM）臆造，引用了不存在的代码。LLM 本质上是基于概率的文本生成模型，在大量 CVE 数据训练后可能输出看似合理但完全虚构的漏洞描述，这就是所谓“LLM 垃圾” CVE 的由来。

「影响」 对于使用自动化漏洞优先级排序或 AI 辅助分类的组织，这类捏造 CVE 会触发对不存在代码的调查、补丁生成或变更建议，造成浪费时间并引入不必要的改动。

参考链接

- [Critical CVE issued for hallucinated SQLite vulnerability | Hacker News](https://news.ycombinator.com/item?id=49154332)

- [GitHub - morpheuslord/ CVE - llm _dataset: This is a dataset intended to...](https://github.com/morpheuslord/CVE-llm_dataset)

标签: #security, #LLM, #CVE, #SQLite, #vulnerability-management

## 关键词

#security #LLM #CVE #SQLite #vulnerability-management #科技新闻
