---
published: 2026-08-03
title: 使用 ReviewBench 评估代码审查智能体
source: LangChain Blog
original_file: 信息源/LangChain Blog/Evaluating code review agents with ReviewBench.md
source_note: "[[信息源/LangChain Blog/Evaluating code review agents with ReviewBench]]"
source_sha256: a9a82d96101308abba738a90be29697635acfef898e506de2733494535ced1ee
original_url: https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench
processed: 2026-08-07
language: zh-CN
---

# 使用 ReviewBench 评估代码审查智能体

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-08-03
> - 原文链接：[打开原文](https://www.langchain.com/blog/evaluating-code-review-agents-with-reviewbench)
> - Vault 原文件：[[信息源/LangChain Blog/Evaluating code review agents with ReviewBench|查看原始文件]]

## 摘要

- LangChain 构建了 ReviewBench 基准
- 用于评估代码审查智能体的表现
- 以可信审查者给出的真实 PR 反馈作为对照标准

## 正文

了解 LangChain 如何构建 ReviewBench——一个用于评估代码审查智能体的基准（benchmark），以来自可信审查者（trusted reviewers）的真实 PR 反馈（real PR feedback）为对照标准。

## 关键词

#ReviewBench #代码审查 #智能体评估 #基准测试 #LangChain
