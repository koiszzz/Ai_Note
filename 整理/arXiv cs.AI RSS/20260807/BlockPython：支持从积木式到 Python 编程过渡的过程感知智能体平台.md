---
published: 2026-08-07
title: "BlockPython：支持从积木式到 Python 编程过渡的过程感知智能体平台"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BlockPython- A Process-Aware Agent-Supported Platform for the Transition from Block-Based to Python .md"
source_note: "[[信息源/arXiv cs.AI RSS/BlockPython- A Process-Aware Agent-Supported Platform for the Transition from Block-Based to Python ]]"
source_sha256: ab45b9df12a380ff17ed12128a4cc610234b08cda9dad50d36410dce19fa9d13
original_url: "https://arxiv.org/abs/2608.05716"
processed: 2026-08-07
language: zh-CN
---

# BlockPython：支持从积木式到 Python 编程过渡的过程感知智能体平台

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jesse Yusuf Chan (Zexi Chen), Haoming Wang, Mingwei Xu, Xianlong Xu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05716)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BlockPython- A Process-Aware Agent-Supported Platform for the Transition from Block-Based to Python |查看原始文件]]

## 摘要

- 从积木式到文本式编程的过渡要求学习者将可见程序结构转化为抽象文本表达，可能在理解计算概念与用 Python 语法表达之间造成认知差距。
- 设计并实现 BlockPython：平台以积木与 Python 的双向翻译为中心，引导学习者经历四个阶段——任务分解、积木式练习、代码挑战与扩展互动；学习者逐步建立程序结构、运行时行为与文本代码之间的联系。
- 学习期间平台持续收集过程证据（积木工件、代码版本、运行结果、支持使用与对话）；确定性诊断、程序可视化与学习助手用这些证据识别计算理解与 Python 表达中的不同困难。
- 规则系统负责程序执行、客观评估与阶段控制，学习助手用已验证证据提供解释、提示与引导性问题；论文描述设计原理、学习工作流与过程感知支持机制，为支持积木式到文本式编程过渡与学习过程分析提供系统设计参考。

## 正文

从积木式到文本式编程的过渡要求学习者将可见的程序结构转化为抽象文本表达，这可能造成理解计算概念与用 Python 语法表达之间的认知差距。为支持这一过渡，我们设计并实现了 BlockPython。该平台以积木与 Python 之间的双向翻译为核心，引导学习者经历四个阶段：任务分解、积木式练习、代码挑战与扩展互动。在这些阶段中，学习者逐步建立程序结构、运行时行为与文本代码之间的联系。学习期间，平台持续收集过程证据，包括积木工件、代码版本、运行结果、支持使用与对话。确定性诊断、程序可视化与学习助手使用这些证据识别计算理解与 Python 表达中的不同困难。规则系统负责程序执行、客观评估与阶段控制，而学习助手使用已验证的证据提供解释、提示与引导性问题。本报告描述 BlockPython 的设计原理、学习工作流与过程感知支持机制，并为支持从积木式到文本式编程过渡与学习过程分析提供系统设计参考。

## 关键词

#编程教育 #积木式编程 #Python #学习智能体
