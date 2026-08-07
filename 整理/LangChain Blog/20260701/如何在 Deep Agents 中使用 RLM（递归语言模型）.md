---
published: 2026-07-01
title: "如何在 Deep Agents 中使用 RLM（递归语言模型）"
source: "LangChain Blog"
original_file: "信息源/LangChain Blog/How to Use RLMs in Deep Agents.md"
source_note: "[[信息源/LangChain Blog/How to Use RLMs in Deep Agents]]"
source_sha256: cf025542471a95ed2bb4755c789e236b7369201e193289ef3f4dec3c2e9f45cf
original_url: "https://www.langchain.com/blog/how-to-use-rlms-in-deep-agents"
processed: 2026-08-07
language: zh-CN
---

# 如何在 Deep Agents 中使用 RLM（递归语言模型）

> [!info] 来源信息
> - 数据源：LangChain Blog
> - 发布时间：2026-07-01
> - 原文链接：[打开原文](https://www.langchain.com/blog/how-to-use-rlms-in-deep-agents)
> - Vault 原文件：[[信息源/LangChain Blog/How to Use RLMs in Deep Agents|查看原始文件]]

## 摘要

- 递归语言模型（RLM）通过让智能体编写代码、将子智能体分发到各个上下文分块上，来解决上下文腐化（context rot）问题，而不是把所有内容塞进一个上下文窗口。
- Deep Agents 现在通过动态子智能体（dynamic subagents）和轻量级代码解释器实现这一思路，让智能体以编程方式在大型输入上展开 grep、map、reduce 等工作。
- 作者在长上下文推理任务 OOLONG 上评测了该方法，证明其在逐轮（turn-by-turn）智能体开始失效的场景下依然可靠。

## 正文

原文（RSS 摘要）提供了一段简介，未提供完整正文。

原文内容：递归语言模型（RLMs）通过让智能体编写代码、把子智能体分发到上下文分块上，而不是把所有内容都塞进同一个上下文窗口，来解决上下文腐化问题。Deep Agents 现在通过动态子智能体和轻量级代码解释器实现这一点，让智能体能够以编程方式在大型输入上展开诸如 grep、map 和 reduce 之类的扇出操作。我们在长上下文推理任务 OOLONG 上对这种方法进行了基准测试，证明它在逐轮智能体开始崩溃的地方依然站得住脚。

## 关键词

#LangChain-Blog #Deep-Agents #递归语言模型 #长上下文
