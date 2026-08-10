---
published: 2026-08-07
title: "PolyAlign：条件化人类分布对齐"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/PolyAlign- Conditional Human-Distribution Alignment.md"
source_note: "[[信息源/arXiv cs.CL RSS/PolyAlign- Conditional Human-Distribution Alignment]]"
source_sha256: 2598c33723c681a50623450427a96159a77620f208c1bf75a7545e320789f8bf
original_url: "https://arxiv.org/abs/2606.13227"
processed: 2026-08-07
language: zh-CN
---

# PolyAlign：条件化人类分布对齐

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：L. D. M. S. Sai Teja, Ufaq Khan, Sathira Silva, Xiao Wu, Muhammad Haris Khan
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2606.13227)

## 摘要

- 监督微调（SFT）与偏好优化等训练后方法通常将语言模型对齐向单一全局助手行为；虽对平均有用性有效，但可抑制人类响应跨语言、任务与对话设定的自然变异。
- 将该问题研究为条件化人类分布对齐：模型应匹配当前交互情境对应的人类响应分布，而非普适响应风格。
- 引入 PolyAlign：分布感知对齐框架，将双语交互数据组织为桶特定人类参考分布（由语言、交互轨道、响应家族与长度定义）。
- PolyAlign 结合桶感知 SFT（平衡跨异构桶优化）与人类分布偏好优化（HDPO）（用批评者估计到桶特定人类支持的分布距离正则化偏好学习）；覆盖英语与中文单轮与多轮设定的双语评估套件上，PolyAlign 改进条件自然度与分布保真度，同时保持竞争任务效用；训练后应从全局对齐目标转向人类响应分布的交互感知对齐。

## 正文

监督微调（supervised fine-tuning, SFT）与偏好优化等训练后方法通常将语言模型对齐向一个单一的全局助手行为。虽然对改进平均有用性有效，这可以抑制人类响应在语言、任务与对话设定间的自然变异。研究将该问题研究为条件化人类分布对齐（conditional human-distribution alignment）：模型应该匹配当前交互情境所对应的人类响应分布，而非一个普适的响应风格。研究引入 PolyAlign，一个分布感知的对齐框架：将双语交互数据组织为桶特定的人类参考分布，由语言、交互轨道、响应家族与长度定义。PolyAlign 结合桶感知 SFT（Bucket-Aware SFT），它在异构桶之间平衡优化，以及人类分布偏好优化（Human-Distribution Preference Optimization, HDPO），它使用批评者估计的到桶特定人类支持的分布距离来正则化偏好学习。在一个覆盖英语与中文单轮与多轮设定的双语评估套件上，PolyAlign 改进了条件自然度与分布保真度，同时保持竞争的任务效用。结果表明，训练后应当超越全局对齐目标，走向与人类响应分布交互感知的对齐。

## 关键词

对齐、人类分布、双语、偏好优化、自然度
