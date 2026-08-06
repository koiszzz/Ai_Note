---
title: "MCP 2.0 无状态规范发布，Willison 推出 mcp-explorer 与 datasette-mcp"
source: "Horizon Daily（中文摘要）"
source_category: "科技新闻"
original_file: "信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH).md"
source_note: "[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)]]"
source_fragment: "MCP 2.0 无状态规范发布，Willison 推出 mcp-explorer 与 datasette-mcp"
source_sha256: 2393bfb8413683a472d8dd29a4d57eae2c4368a79f7d1d4bd862891940f60de6
original_url: "https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything"
published: 2026-08-01
processed: 2026-08-05
language: zh-CN
---

# MCP 2.0 无状态规范发布，Willison 推出 mcp-explorer 与 datasette-mcp

> [!info] 来源信息
> - 数据源：Horizon Daily（中文摘要）
> - 所属分类：科技新闻
> - 发布时间：2026-08-01
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/stateless-mcp/#atom-everything)
> - Vault 原文件：[[信息源/Horizon Daily（中文摘要）/Horizon Summary- 2026-08-01 (ZH)|查看原始日报]]

## 摘要

- 2026 年 7 月 28 日发布的 Model Context Protocol 2.0（又称 stateless MCP）是 MCP 自发布以来最重要的规范更新，将原来的两次 HTTP 请求（先初始化会话获取 Mcp-Session-Id，再调用工具）简化为一次携带 MCP-Protocol-Version、Mcp-Method 和 Mcp-Name 头的请求。Simon Willison 认为这大幅降低客户端和服务端实现复杂度，也更适合无状态可扩展的 Web 应用。基于……

## 正文

2026 年 7 月 28 日发布的 Model Context Protocol 2.0（又称 stateless MCP）是 MCP 自发布以来最重要的规范更新，将原来的两次 HTTP 请求（先初始化会话获取 Mcp-Session-Id，再调用工具）简化为一次携带 MCP-Protocol-Version、Mcp-Method 和 Mcp-Name 头的请求。Simon Willison 认为这大幅降低客户端和服务端实现复杂度，也更适合无状态可扩展的 Web 应用。基于新规范，他发布了 mcp-explorer（可用 uvx 直接运行，用于列出、检查和调用 MCP 服务器的 CLI）和 datasette-mcp（给 Datasette 实例增加 /-/mcp 端点，提供 list_databases、get_database_schema 和只读 execute_sql 三个工具）。目前 datasette-mcp 已运行在 datasette.simonwillison.net/-/mcp，并接入了 ChatGPT 与 Claude。MCP 由 Anthropic 于 2024 年 11 月提出，此前曾因 Skills 等方案而热度下降，但 stateless 版本重新吸引了作者的兴趣。

rss · Simon Willison · 7月31日 23:13

「背景」 Model Context Protocol（MCP）是 Anthropic 在 2024 年 11 月提出的开放协议，用于统一描述 LLM 智能体如何调用外部工具。旧版 MCP 采用有状态会话，客户端需要先 POST initialize 获取服务端分配的会话 ID，再在后续调用中携带该 ID；新版无状态 MCP 通过请求头直接标识协议版本、方法和工具名，单次请求即可完成调用。

「影响」 开发者现在可以用 `uvx mcp-explorer` 快速探测和调用任何兼容 stateless MCP 的服务器，并可为 Datasette 实例启用 `/-/mcp` 端点，让 ChatGPT、Claude 等代理直接对托管数据库执行（当前只读的）SQL 查询。

标签: #MCP, #AI, #developer tools, #protocols

## 关键词

#MCP #AI #developer-tools #protocols #科技新闻
