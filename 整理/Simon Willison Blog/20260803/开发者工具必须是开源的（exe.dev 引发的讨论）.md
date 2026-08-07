---
published: 2026-08-03
title: 开发者工具必须是开源的（exe.dev 引发的讨论）
source: Simon Willison Blog
original_file: 信息源/Simon Willison Blog/Devtools must be open source (exe.dev).md
source_note: "[[信息源/Simon Willison Blog/Devtools must be open source (exe.dev)]]"
source_sha256: 87c5d95ebf3415644560c8bdf38ff81c2916c08f44d413eb6bbd2f8b53729386
original_url: https://simonwillison.net/2026/Aug/3/devtools-must-be-open-source-exedev/#atom-everything
processed: 2026-08-07
language: zh-CN
---

# 开发者工具必须是开源的（exe.dev 引发的讨论）

> [!info] 来源信息
> - 数据源：Simon Willison Blog
> - 发布时间：2026-08-03
> - 原文链接：[打开原文](https://simonwillison.net/2026/Aug/3/devtools-must-be-open-source-exedev/#atom-everything)
> - Vault 原文件：[[信息源/Simon Willison Blog/Devtools must be open source (exe.dev)|查看原始文件]]

## 摘要

- 针对 Hacker News 上"开发者工具必须是开源的（exe.dev）"的讨论，Simon Willison 发表评论：面向最终用户的开源软件的核心论据，一直是检查并修改其工作方式的自由。
- 但现实中，对大多数人（甚至专业程序员）而言，这种自由更多意味着可以依赖*其他人*去完成检查与修改——因为阅读并修改常用工具代码所需的时间投入往往不值得。
- 他认为 LLM 改变了这一等式，使当初的理想变得切实可行：现在他会让 Claude Code 或 Codex 去"克隆并构建"某个项目，而不是因为编译门槛而放弃。
- 他尚未养成修改所用软件的习惯，但已经看到一条一年前还不存在的路径。

## 正文

我在 Hacker News 的[开发者工具必须是开源的（exe.dev）](https://news.ycombinator.com/item?id=49156111)讨论下的[评论](https://news.ycombinator.com/item?id=49156111#49156719) —— Hacker News。

对最终用户而言，开源软件的一个论据始终是：拥有检查和修改该软件工作方式的自由。

但对大多数人来说——即使是专家级程序员——现实是，这种自由更多意味着能够依赖*其他人*去做这件事。大多数人无法承担阅读并修改自己常用工具代码所需的时间投入。

我认为 LLM 改变了这一等式，让最初的梦想变得更加切实可行。

我一天有好几次会提示普通的 Claude 聊天，"从 GitHub 克隆 x/y，然后告诉我 Z 是如何工作的"。

为了让软件能够编译、以便开始动手修改它——过去这种摩擦常常让我懒得去做。现在我把这当作一个零时间投入的挑战：让 Codex 或 Claude Code 去 checkout 并构建 X，然后十分钟后回来看它进展如何。

我还没有养成*修改*我所用软件的习惯，但我已经能看到一条通往那里的路径，而这条路径在一两年前并不存在。

标签：hacker-news、open-source、ai、generative-ai、llms、ai-assisted-programming

## 关键词

#开源 #LLM #AI辅助编程 #开发者工具 #HackerNews
