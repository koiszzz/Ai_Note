---
published: 2026-08-07
title: "LLM 对库与编程语言偏好的研究"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/A Study of LLMs' Preferences for Libraries and Programming Languages.md"
source_note: "[[信息源/arXiv cs.CL RSS/A Study of LLMs' Preferences for Libraries and Programming Languages]]"
source_sha256: c2c15d3048952f83b036e196cf946d2c69550029b7ecff2f359ba70d83b157cd
original_url: "https://arxiv.org/abs/2503.17181"
processed: 2026-08-07
language: zh-CN
---

# LLM 对库与编程语言偏好的研究

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Lukas Twist, Mark Harman, Don Syme, Joost Noppen, Helen Yannakoudakis, Detlef Nauck, Jie M. Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.SE
> - **原文**：[打开链接](https://arxiv.org/abs/2503.17181)

## 摘要

- 尽管 LLM 在代码生成快速进展，现有评估聚焦功能正确性或语法有效性，忽视 LLM 如何做关键设计选择（用哪个库或编程语言）。
- 首次实证研究 LLM 生成代码时对库与编程语言的偏好，覆盖八个多样 LLM；观察到强烈倾向过度使用 NumPy 等广泛采用库：最多 45% 情形不必要且偏离真值解。
- 研究 LLM 显著偏好 Python 为默认语言；高性能项目初始化任务中 Python 非最优语言时仍在 58% 情形保持主导选择，Rust 一次未用。
- 结果凸显 LLM 优先熟悉度与流行度而非适用性与任务特定最优性，强调针对性微调、数据多样化与显式测量语言与库选择保真度的评估基准的必要性。

## 正文

尽管大语言模型（LLMs）在代码生成方面快速进步，现有评估聚焦功能正确性或语法有效性，忽视了 LLM 如何做出关键的设计选择，例如使用哪个库或编程语言。为填补该空白，研究执行首次关于 LLM 生成代码时库与编程语言偏好的实证研究，覆盖八个多样 LLM。研究观察到强烈倾向过度使用广泛采用的库（如 NumPy）：最多 45% 的情形中这种使用并不必要，且偏离真值解。所研究的 LLM 还表现出显著偏好 Python 作为默认语言。对于 Python 并非最优语言的高性能项目初始化任务，它在 58% 的情形中仍是主导选择，而 Rust 一次也未使用。这些结果凸显 LLM 如何将熟悉度与流行度置于适用性与任务特定最优性之上，并强调需要进行针对性微调、数据多样化，以及显式测量语言与库选择保真度的评估基准。

## 关键词

LLM、代码生成、库偏好、编程语言、评估
