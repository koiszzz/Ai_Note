---
published: 2026-08-07
title: "BenHalluEval：孟加拉语大语言模型的多任务幻觉评估框架"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/BenHalluEval- A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali.md"
source_note: "[[信息源/arXiv cs.CL RSS/BenHalluEval- A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali]]"
source_sha256: 4c5782974de78eee5b8b6f305b7a40abc19560232a969322b7954808ac030a29
original_url: "https://arxiv.org/abs/2605.31483"
processed: 2026-08-07
language: zh-CN
---

# BenHalluEval：孟加拉语大语言模型的多任务幻觉评估框架

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Shefayat E Shams Adib, Ahmed Alfey Sani, Ekramul Alam Esham, Ajwad Abrar, Ishmam Tashdeed, Md Taukir Azam Chowdhury
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2605.31483)

## 摘要

- 尽管孟加拉语是世界第六大语言，先前无工作系统评估 LLM 的孟加拉语幻觉；引入 BenHalluEval：孟加拉语细粒度幻觉评估框架，覆盖四个任务：生成问答（GQA）、孟加拉-英语混码 QA、摘要与推理。
- 用 GPT-5.4 跨十二种任务特定幻觉类型构建 12000 个幻觉候选（源自三个既有孟加拉语数据集），评估七个涵盖推理导向、多语言与孟加拉语中心的 LLM，双轨协议独立测量真值实例误报率（Track A）与幻觉候选检测率（Track B）。
- 提出 BenHalluScore：双轨校准度量，同时惩罚两种失败模式并防均匀响应偏误膨胀分数；跨模型与任务 7.72%–55.42%，揭示幻觉校准显著变异。
- 思维链提示作为缓解策略移动响应分布而不一致改进幻觉判别；BenHalluEval 确立首个孟加拉语专用幻觉基准，凸显单轨与仅提示评估方法对低资源语言设定的不足；数据集与代码公开。

## 正文

尽管孟加拉语是世界第六大使用语言，先前没有工作系统评估大语言模型（LLMs）在孟加拉语中的幻觉。研究引入 BenHalluEval，一个孟加拉语细粒度幻觉评估框架，覆盖四个任务：生成问答（Generative Question Answering, GQA）、孟加拉-英语混码 QA、摘要与推理。研究使用 GPT-5.4 跨十二种任务特定幻觉类型构建 12,000 个幻觉候选，源自三个既有孟加拉语数据集，并在一个双轨协议下评估七个涵盖推理导向、多语言与孟加拉语中心的 LLM：独立测量真值实例上的误报率（Track A）与幻觉候选上的检测率（Track B）。为同时惩罚两种失败模式并防止均匀响应偏误导致的分数膨胀，研究提出 BenHalluScore，一个双轨校准度量，跨模型与任务从 7.72% 到 55.42% 不等，揭示幻觉校准的巨大变异。作为缓解策略应用的思维链提示，移动了响应分布，却没有一致改进幻觉判别。BenHalluEval 确立了第一个孟加拉语专用幻觉基准，并凸显单轨与仅提示评估方法在低资源语言设定中的不足。数据集与代码见 https://anonymous.4open.science/r/BanglaHalluEval-EB77。

## 关键词

幻觉、孟加拉语、评估、低资源、校准
