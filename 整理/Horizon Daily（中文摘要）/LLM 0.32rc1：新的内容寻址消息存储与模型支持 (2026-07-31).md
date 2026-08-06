---
title: "LLM 0.32rc1：新的内容寻址消息存储与模型支持"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)]]"
source_fragment: "LLM 0.32rc1：新的内容寻址消息存储与模型支持"
source_sha256: 898af1afa623dd8dc1fc38ee05167c63aca85eabf865591f7a539b16f4b2e1ae
original_url: "https://simonwillison.net/2026/Jul/30/llm-rc1/#atom-everything"
published: 2026-07-31
processed: 2026-08-05
language: zh-CN
---

# LLM 0.32rc1：新的内容寻址消息存储与模型支持

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/30/llm-rc1/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-07-31 (ZH)|查看原始日报]]

## 摘要

- Simon Willison 发布了 llm 0.32rc1，该候选版本完成了从 0.32a0 开始的工作，并引入新的数据库模式设计，以更好地记录最新模型家族的提示和响应细节。最关键的改动是使用内容寻址哈希 ID 存储消息，从而在数据库中实现去重，并使 LLM 能够表示分叉对话的消息树。此更新仅新增数据表，不会影响旧数据，但官方建议在升级前运行 `llm logs backup logs-backup.db` 备份现有的 logs.db。此外，该 RC 还新增了对 gpt-5……

## 正文

Simon Willison 发布了 llm 0.32rc1，该候选版本完成了从 0.32a0 开始的工作，并引入新的数据库模式设计，以更好地记录最新模型家族的提示和响应细节。最关键的改动是使用内容寻址哈希 ID 存储消息，从而在数据库中实现去重，并使 LLM 能够表示分叉对话的消息树。此更新仅新增数据表，不会影响旧数据，但官方建议在升级前运行 `llm logs backup logs-backup.db` 备份现有的 logs.db。此外，该 RC 还新增了对 gpt-5.6-sol、gpt-5.6-terra 和 gpt-5.6-luna 模型的支持。

rss · Simon Willison · 7月30日 15:30

「背景」： LLM 是 Simon Willison 开发的命令行工具，用于从终端访问大语言模型。0.32 版本的工作始于 0.32a0，本次发布的 0.32rc1 完善了新的消息存储 schema 设计，用内容可寻址哈希 ID 对消息做去重，并支持分支对话的树状结构。由于涉及新表且旧数据不受影响，官方建议升级前用 `llm logs backup` 备份 logs.db。

参考链接

- [llm 0 . 32 rc 1 | Simon Willison 's Weblog | minifeed](https://minifeed.net/items/XvZJw7EoNhfq)

- [Release : llm 0 . 32 rc 2 | Simon Willison ’s Weblog](https://simonwillison.net/2026/Jul/30/llm-rc2/)

标签: #llm, #release, #sqlite, #command-line-tools, #data-modeling

## 关键词

#llm #release #sqlite #command-line-tools #data-modeling #科技新闻
