---
published: 2026-08-07
title: "一次响应，永远响应：通过潜在提示恢复检测 LLM 生成文本"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Once a Response, Always a Response- Detecting LLM-generated Text via Latent Prompt Restoration.md"
source_note: "[[信息源/arXiv cs.AI RSS/Once a Response, Always a Response- Detecting LLM-generated Text via Latent Prompt Restoration]]"
source_sha256: 346de2b70c7912539b142aea0077286702ef4de3f7543779ac18cf253219e85f
original_url: "https://arxiv.org/abs/2608.05741"
processed: 2026-08-07
language: zh-CN
---

# 一次响应，永远响应：通过潜在提示恢复检测 LLM 生成文本

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Hongrui Bao, Yubing Ren, Yanan Cao, Jinhan You, Fang Fang, Shi Wang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05741)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Once a Response, Always a Response- Detecting LLM-generated Text via Latent Prompt Restoration|查看原始文件]]

## 摘要

- 大语言模型（LLM）能大规模生成流畅有说服力的文本，造成错误信息传播、教育滥用与平台治理日益增长的风险；这些担忧使机器生成文本的稳健检测越来越必要。
- 近期零样本检测器主要利用基于概率的统计差异，但不显式考虑 LLM 的训练过程，使独特生成机制未被充分建模并限制检测稳健性。
- 提出 EchoPrompt：基于潜在提示恢复的免训练检测器——关键直觉是机器生成文本通常以上游提示为条件产生，该隐藏依赖可通过前置统一通用前缀部分重新激活；EchoPrompt 恢复通用助手-响应上下文，用指令调优模型测量诱导似然增益，对照对应基础模型校准，并将所得差异聚合为量化潜在提示依赖的分数。
- 大量实验表明 EchoPrompt 在零样本检测器中取得最优性能，同时在挑战性评估设置中保持强稳健性。

## 正文

大语言模型（LLMs）能大规模生成流畅且令人信服的文本，为错误信息传播、教育滥用与平台治理创造日益增长的风险。这些担忧使机器生成文本的稳健检测越来越必要。近期零样本检测器主要利用基于概率的统计差异，但它们不显式考虑 LLM 的训练过程，留下一个独特的生成机制未被充分建模，限制检测稳健性。为解决该问题，我们提出 EchoPrompt，一个基于潜在提示恢复（latent prompt restoration）的免训练检测器。我们的关键直觉是，机器生成文本通常以上游提示为条件产生，而这种隐藏依赖可以通过前置一个统一的通用前缀部分重新激活。具体而言，EchoPrompt 恢复一个通用助手-响应上下文，用指令调优模型测量诱导的似然增益，对照对应基础模型校准，并将所得差异聚合为一个量化潜在提示依赖的分数。大量实验表明，EchoPrompt 在零样本检测器中取得最优性能，同时在挑战性评估设置中保持强稳健性。

## 关键词

#AI文本检测 #零样本 #潜在提示 #LLM安全
