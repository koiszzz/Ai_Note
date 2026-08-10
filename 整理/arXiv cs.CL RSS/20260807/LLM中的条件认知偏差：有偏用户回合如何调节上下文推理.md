---
published: 2026-08-07
title: "LLM 中的条件认知偏差：有偏用户回合如何调节上下文推理"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Conditional Cognitive Biases in LLMs- How Biased User Turns Modulate In-Context Reasoning.md"
source_note: "[[信息源/arXiv cs.CL RSS/Conditional Cognitive Biases in LLMs- How Biased User Turns Modulate In-Context Reasoning]]"
source_sha256: f95b0ac45392d3a6297de9d19da2b7f24ba0c6ba75a1ceb49bc12d85b743b822
original_url: "https://arxiv.org/abs/2608.05166"
processed: 2026-08-07
language: zh-CN
---

# LLM 中的条件认知偏差：有偏用户回合如何调节上下文推理

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Sachini Weerasekara, Sagar Kamarthi, Jacqueline Isaacs
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05166)

## 摘要

- 在现实多轮交互设定下评估最先进指令微调 LLM 的认知偏差表达，引入三条件实验框架，分离暴露于有偏用户回合与回合语义内容的效应。
- 基准含 24300 个陪审团验证用户提示，覆盖 9×9 目标-人类偏差交互矩阵的全部 81 个单元。
- 8 个前沿 LLM 中 6 个的有偏对话上下文相对零样本基线系统性增加偏差表达。
- 识别两种竞争动态：有偏推理的对话暴露通常放大下游偏差倾向，而显式偏差线索常触发对齐相关抑制行为，降低显式偏差表达。

## 正文

本文在现实多轮交互设定下对最先进指令微调 LLM 的认知偏差表达进行评估。工作引入新颖的三条件实验框架，将暴露于有偏用户回合的效应与回合语义内容的效应分离，并配套 24300 个经陪审团验证的用户提示基准，覆盖 9×9 目标-人类偏差交互矩阵的全部 81 个单元。在 8 个前沿 LLM 上，研究发现有偏对话上下文相对零样本基线在 8 个模型中的 6 个上系统性增加偏差表达。研究识别出该效应背后的两种竞争行为动态：对有偏推理的对话暴露通常会放大下游偏差倾向，而显式陈述的偏差线索往往触发对齐相关的抑制行为，降低显式偏差表达。研究发布框架、代码库与数据集，以支持 LLM 上下文条件认知偏差与行为适应的未来研究。

## 关键词

认知偏差、LLM、上下文学习、多轮交互、对齐
