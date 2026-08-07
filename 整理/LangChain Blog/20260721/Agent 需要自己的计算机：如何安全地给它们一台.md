---
published: 2026-07-21
title: "Agent 需要自己的计算机：如何安全地给它们一台"
source: "LangChain Blog"
original_file: "信息源/LangChain Blog/Agents need their own computer. Here's how to give them one safely..md"
source_note: "[[信息源/LangChain Blog/Agents need their own computer. Here's how to give them one safely.]]"
source_sha256: 089c6c48b6ff606d3c788192fb165d33dd536171b223c7a089826db50503825f
original_url: "https://www.langchain.com/blog/agents-need-their-own-computer"
processed: 2026-08-07
language: zh-CN
---

# Agent 需要自己的计算机：如何安全地给它们一台

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-07-21
> - 原文链接：[打开原文](https://www.langchain.com/blog/agents-need-their-own-computer)
> - Vault 原文件：[[信息源/LangChain Blog/Agents need their own computer. Here's how to give them one safely.|查看原始文件]]

## 摘要

- 在计算历史的大部分时间里，开发者环境意味着实体机、虚拟机、容器，每一种都在所承载的工作之间共享，都需要刻意的搭建与拆除。
- 让每个 Agent 拥有自己的隔离计算机（一秒内启动、用完即清理）过去在规模上不可行。
- 沙箱提供了一种更安全地运行升级后工作流的方式：提供一个隔离环境来运行需要迭代、验证和访问人类通常使用的工具的任务，无需人工监督。
- 每个人类开发者都有一台笔记本电脑。每个 Agent 都可以拥有一台计算机。

## 正文

在计算历史的大部分时间里，开发者环境意味着一台实体机器，然后是虚拟机，再然后是容器，每一种都在其上承载的工作之间共享，每一种都需要刻意的搭建和拆除。让每个 Agent 拥有自己隔离的计算机——在一秒内启动、完成后清理——的想法，在规模化的情况下并不现实。沙箱为你提供了一种更安全地运行升级后工作流的方式，为你提供一个隔离的环境来运行需要迭代、验证以及访问人类通常会使用的工具的任务，而且完全不需要人工监督。每个人类开发者都有一台笔记本电脑。每个 Agent 都可以拥有一台计算机。

## 关键词

#LangChain #沙箱 #AI智能体 #安全 #开发环境
