---
published: 2026-06-30
title: Deep Agents 如何在没有沙箱的情况下运行不可信代码
source: LangChain Blog
original_file: 信息源/LangChain Blog/How Deep Agents Run Untrusted Code Without a Sandbox.md
source_note: "[[信息源/LangChain Blog/How Deep Agents Run Untrusted Code Without a Sandbox]]"
source_sha256: 26f48e5e32de818c95dba2ec6fc66856028fe3504ccfe89703743b95222d6b1b
original_url: https://www.langchain.com/blog/running-untrusted-agent-code-without-a-sandbox
processed: 2026-08-07
language: zh-CN
---

# Deep Agents 如何在没有沙箱的情况下运行不可信代码

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-06-30
> - 原文链接：[打开原文](https://www.langchain.com/blog/running-untrusted-agent-code-without-a-sandbox)
> - Vault 原文件：[[信息源/LangChain Blog/How Deep Agents Run Untrusted Code Without a Sandbox|查看原始文件]]

## 摘要

- 提出一种比完整沙箱更小、进程内（in-process）的替代方案
- 采用 WASM + QuickJS 实现隔离
- 支持最小权限能力（least-privilege capabilities）与基于快照的持久化暂停（durable pauses）

## 正文

一种比完整沙箱（full sandboxes）更小、进程内（in-process）的替代方案：使用 WASM + QuickJS 实现隔离（isolation），提供最小权限能力（least-privilege capabilities），并支持基于快照的持久化暂停（snapshot-based durable pauses）。

## 关键词

#WASM #QuickJS #沙箱 #不可信代码 #隔离 #DeepAgents
