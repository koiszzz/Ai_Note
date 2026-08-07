---
published: 2026-07-31
title: datasette-agent 0.4a0 新增浏览器内运行工具机制
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/datasette-agent 0.4a0.md
source_note: "[[信息源/Simon Willison Blog/datasette-agent 0.4a0]]"
source_sha256: ce9e05cc594d4d8792be23f320c38d7e09439642c961b230374db537179c0fc7
original_url: https://simonwillison.net/2026/Jul/31/datasette-agent/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# datasette-agent 0.4a0 新增浏览器内运行工具机制

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-07-31
> - 原文链接：[打开原文](https://simonwillison.net/2026/Jul/31/datasette-agent/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/datasette-agent 0.4a0|查看原始文件]]

## 摘要

- datasette-agent 0.4a0 新增 `await context.browser_task()` 机制，让智能体工具可以直接在用户浏览器中运行代码（PR #33）。
- 这使得 Datasette Agent 插件可以轻松提供在用户浏览器中执行自定义 JavaScript 的工具。
- Simon Willison 用该机制在 datasette-apps 0.2a0 中加入了调试循环。

## 正文

**发布：[datasette-agent 0.4a0](https://github.com/datasette/datasette-agent/releases/tag/0.4a0)**

> - 新增 `await context.browser_task()` 机制，允许智能体工具直接在用户的浏览器中运行代码。[#33](https://github.com/datasette/datasette-agent/pull/33)

这是一项令人兴奋的新能力：它让 Datasette Agent 插件可以轻松提供在*用户浏览器中*执行自定义 JavaScript 的工具。

我在 [datasette-apps 0.2a0](https://simonwillison.net/2026/Aug/1/datasette-apps/) 中用它为 Datasette Apps 添加了一个调试循环。

标签：datasette、llm-tool-use、datasette-agent

## 关键词

#datasette #datasette-agent #浏览器自动化 #智能体工具 #LLM工具调用
