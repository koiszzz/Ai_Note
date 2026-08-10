---
published: 2026-08-07
title: "立场：是时候优化 LLM 的自一致性了"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Position- It's Time to Optimize LLMs for Self-Consistency.md"
source_note: "[[信息源/arXiv cs.CL RSS/Position- It's Time to Optimize LLMs for Self-Consistency]]"
source_sha256: 0439e2e849114045b2cbd3e829690408d3bf3b26d2787b82dc5a30c22fb34dfb
original_url: "https://arxiv.org/abs/2608.05188"
processed: 2026-08-07
language: zh-CN
---

# 立场：是时候优化 LLM 的自一致性了

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Itamar Pres, Belinda Z. Li, Laura Ruis, Zifan Carl Guo, Keya Hu, Mehul Damani, Isha Puri, Ekdeep Singh Lubana, Jacob Andreas
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05188)

## 摘要

- 尽管 LM 预训练与训练后流水线日益复杂，许多重要失败持续：模型过度条件化用户框架（"奉承"）、逻辑泛化不完整、产生自信但错误响应。
- 论证这些失败源于渗透流水线各方面的建模假设：行为可独立于单输出对指定与评估；许多模型失败若不推理跨输入模型响应关系则难甚至不可能检测。
- 提出自一致性作为理解这些失败的框架；观察为改进 LM 行为特定方面设计的广泛技术（针对对抗稳健性与事实连贯性等不同属性）可理解为通用"一致性优化"过程特例，用标准优化工具集处理。
- 概述经优化一致性可达成的新模型属性集，讨论开发一般一致性 LM 的含义（使能能力与引发异议）。

## 正文

尽管语言模型（LM）的预训练与训练后流水线日益复杂，许多重要的失败仍然持续：模型过度条件化于用户的框架（"奉承"），表现出不完整的逻辑泛化，并产生自信但错误的响应。研究论证，这些失败源于一个渗透流水线所有方面的建模假设：即行为可以在单输出对上独立指定与评估。许多模型失败如果不推理模型跨输入的响应之间的关系，就很难甚至不可能被检测到。在这篇立场论文中，研究提出自一致性（self-consistency）作为理解这些失败的框架。研究首先观察到，为改进 LM 行为特定方面而设计的广泛技术——针对对抗稳健性与事实连贯性等不同属性——可以被理解为一种通用"一致性优化"过程的特例，并用一套标准的优化工具处理。研究接下来概述一组可以通过优化一致性达成的新模型属性，并以讨论开发一般一致性 LM 意味着什么作为结尾，包括它们将使能的能力与它们引发的异议。

## 关键词

自一致性、立场、LM、优化、可靠性
