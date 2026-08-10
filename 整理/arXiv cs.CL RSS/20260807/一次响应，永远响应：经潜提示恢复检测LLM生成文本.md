---
published: 2026-08-07
title: "一次响应，永远响应：经潜提示恢复检测 LLM 生成文本"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Once a Response, Always a Response- Detecting LLM-generated Text via Latent Prompt Restoration.md"
source_note: "[[信息源/arXiv cs.CL RSS/Once a Response, Always a Response- Detecting LLM-generated Text via Latent Prompt Restoration]]"
source_sha256: 9ddc669331381dbc2521cfabf753edef2290e02a5831d651fc1a6b82846f0585
original_url: "https://arxiv.org/abs/2608.05741"
processed: 2026-08-07
language: zh-CN
---

# 一次响应，永远响应：经潜提示恢复检测 LLM 生成文本

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Hongrui Bao, Yubing Ren, Yanan Cao, Jinhan You, Fang Fang, Shi Wang
> - **发布时间**：2026-08-07
> - **分类**：cs.CL
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05741)

## 摘要

- LLM 可规模化生成流畅说服文本，造成错误信息传播、教育滥用与平台治理日益增长风险；稳健检测机器生成文本日益必要。
- 近期零样本检测器主要利用概率基统计差异，但不显式说明 LLM 训练过程，留下独特生成机制未充分建模、限制检测稳健性。
- 提出 EchoPrompt：基于潜提示恢复的免训练检测器；关键直觉：机器生成文本通常以上游提示为条件产生，该隐藏依赖可经前置统一通用前缀部分重新激活。
- EchoPrompt 恢复通用助手-响应情境，用指令调优模型测量诱导似然增益，对照对应基座模型校准，聚合差异为量化潜提示依赖的分数；大量实验显示 EchoPrompt 零样本检测器取得 SOTA，挑战性评估设定保持强稳健性。

## 正文

大语言模型（LLMs）可以规模化地生成流畅且有说服力的文本，为错误信息传播、教育滥用与平台治理创造日益增长的风险。这些担忧使对机器生成文本的稳健检测日益必要。近期的零样本检测器主要利用基于概率的统计差异，但它们没有显式说明 LLM 的训练过程，留下一个独特的生成机制未被充分建模，限制了检测稳健性。为解决该问题，研究提出 EchoPrompt，一个基于潜提示恢复（latent prompt restoration）的免训练检测器。关键直觉是：机器生成的文本通常以上游提示为条件产生，而这种隐藏依赖可以通过前置一个统一的通用前缀部分重新激活。具体地，EchoPrompt 恢复一个通用的助手-响应情境，用一个指令调优模型测量诱导的似然增益，对照相应的基座模型校准它，并将所得差异聚合成一个量化潜提示依赖的分数。大量实验表明，EchoPrompt 在零样本检测器中取得最先进性能，同时在挑战性的评估设定中保持强稳健性。

## 关键词

机器文本检测、潜提示、零样本、LLM、似然
