---
published: 2026-08-07
title: "LangChoiceBench：测量与解释 LLM 中的编程语言选择"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/LangChoiceBench- Measuring and Explaining Programming-Language Choice in LLMs.md"
source_note: "[[信息源/arXiv cs.CL RSS/LangChoiceBench- Measuring and Explaining Programming-Language Choice in LLMs]]"
source_sha256: 44d375dcf9ee1bee4f66708968674e70846443787e5ab31f30ff9febcdc8dc5e
original_url: "https://arxiv.org/abs/2608.06041"
processed: 2026-08-07
language: zh-CN
---

# LangChoiceBench：测量与解释 LLM 中的编程语言选择

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Lukas Twist, Twm Stone, Helen Yannakoudakis, Jie M. Zhang
> - **发布时间**：2026-08-07
> - **分类**：cs.SE
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06041)

## 摘要

- LLM 被证明在生成项目级代码时展现强 Python 偏好，但目前无系统方式测量新模型该行为。
- 引入 LangChoiceBench：项目级代码生成基准，测量 Python 偏好、推荐-实现一致性与语言多样性；覆盖七个软件领域的 28 个项目（Python 常为差默认）。
- 评估 25 个多样 LLM：Python 仍被重度过度选择、推荐-实现一致性低、更小开源权重模型一般显示更强 Python 偏好与更低语言多样性。
- 分析 9826 条推理轨迹：多数 Python 选择是自动的或主要由易用驱动，而非显式考虑项目要求；更小但重要案例集中模型编造选择 Python 的上下文支持——称幻影证据的失败模式——或产生与自己推理所选语言矛盾代码。

## 正文

大语言模型（LLMs）已被证明在生成项目级代码时表现出强烈的 Python 偏好，但目前没有系统的方法来衡量新模型的这种行为。为弥合该差距，研究引入 LangChoiceBench，一个用于测量 Python 偏好、推荐-实现一致性与语言多样性的项目级代码生成基准。LangChoiceBench 覆盖七个软件领域的 28 个项目，在这些领域 Python 通常是一个差的默认选择。研究评估 25 个多样的 LLM，发现 Python 仍然被重度过度选择，推荐-实现一致性较低，并且较小的开源权重模型通常表现出更强的 Python 偏好与较低的语言多样性。研究进一步分析 9,826 条推理轨迹，发现大多数 Python 选择是自动的，或主要由易用性驱动，而非显式考虑项目要求。在一个较小但重要的案例集中，模型编造了选择 Python 的上下文支持——一个研究称之为幻影证据（phantom evidence）的失败模式——或产生了与自己推理中选定的语言相矛盾的代码。

## 关键词

编程语言选择、LLM、Python 偏好、基准、推理
