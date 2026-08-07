---
published: 2026-06-16
title: Deep Agents 的上下文管理
source: LangChain Blog
original_file: 信息源/LangChain Blog/Context Management for Deep Agents.md
source_note: "[[信息源/LangChain Blog/Context Management for Deep Agents]]"
source_sha256: 956aa4ce8a3da83a67d1db0ac59b95eebc2deb73a19477adf98684249c8ea30f
original_url: https://www.langchain.com/blog/context-management-for-deepagents
processed: 2026-08-07
language: zh-CN
---

# Deep Agents 的上下文管理

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-06-16
> - 原文链接：[打开原文](https://www.langchain.com/blog/context-management-for-deepagents)
> - Vault 原文件：[[信息源/LangChain Blog/Context Management for Deep Agents|查看原始文件]]

## 摘要

- 介绍 Deep Agents SDK 如何为长时间运行的 AI 任务管理上下文
- 采用卸载（offloading）、摘要（summarization）与文件系统抽象（filesystem abstraction）三种机制
- 目标是防止"上下文腐烂"（context rot）

## 正文

了解 Deep Agents SDK 如何通过卸载（offloading）、摘要（summarization）和文件系统抽象（filesystem abstraction）来管理长时间运行 AI 任务的上下文，以防止上下文腐烂（context rot）。

## 关键词

#DeepAgents #上下文管理 #LLM智能体 #LangChain
