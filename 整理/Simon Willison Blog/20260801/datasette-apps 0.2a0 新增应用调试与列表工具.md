---
published: 2026-08-01
title: datasette-apps 0.2a0 新增应用调试与列表工具
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/datasette-apps 0.2a0.md
source_note: "[[信息源/Simon Willison Blog/datasette-apps 0.2a0]]"
source_sha256: 4fdf7712fd7d0519ffa76bb58da0b34435ae1505524dea682a18335215fd39c0
original_url: https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# datasette-apps 0.2a0 新增应用调试与列表工具

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-01
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/datasette-apps 0.2a0|查看原始文件]]

## 摘要

- datasette-apps 0.2a0 改善了使用 Datasette Agent 创建和编辑 Datasette Apps 的体验。
- 新增 `app_debug()` 工具：智能体可在 `opacity: 0`、`pointer-events: none` 的沙箱 iframe 中显示并测试应用，包括测量元素尺寸等操作（PR #33）。
- 新增 `app_list()` 工具：列出用户有权限编辑的应用，便于智能体编辑它们（Issue #36）。
- 该实现依赖 datasette-agent 0.4a0 新增的 `context.browser_task()` 机制。

## 正文

**发布：[datasette-apps 0.2a0](https://github.com/datasette/datasette-apps/releases/tag/0.2a0)**

> 使用 [Datasette Agent](https://agent.datasette.io/) 创建和编辑 Datasette Apps 时的改进：
>
> - 新增 `app_debug()` 工具，允许智能体（以不可见的方式）打开应用并使用 JavaScript 进行测试。[#33](https://github.com/datasette/datasette-apps/pull/33)
> - 新增 `app_list()` 工具，用于列出用户拥有编辑权限的应用，以便智能体编辑它们。[#36](https://github.com/datasette/datasette-apps/issues/36)

`app_debug()` 工具相当巧妙：它的工作原理是在一个 `opacity: 0`（透明度为零）、`pointer-events: none`（禁用指针事件）的 iframe 中显示应用（因此应用既不可见也无法交互），然后在该沙箱 iframe 内执行智能体提供的 JavaScript。这意味着智能体可以对应用进行冒烟测试，甚至执行诸如测量不同元素尺寸之类的操作。

这使用了 [datasette-agent 0.4a0](https://simonwillison.net/2026/Jul/31/datasette-agent/) 中新增的 `context.browser_task()` 机制。

标签：iframes、datasette、datasette-apps

## 关键词

#datasette #datasette-apps #iframe #智能体 #自动化测试
