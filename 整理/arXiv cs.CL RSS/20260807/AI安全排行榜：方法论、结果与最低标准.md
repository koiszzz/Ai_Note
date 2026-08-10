---
published: 2026-08-07
title: "AI 安全排行榜：方法论、结果与最低标准"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/AI Security Leaderboard- Methodology, Results and Minimal Standard.md"
source_note: "[[信息源/arXiv cs.CL RSS/AI Security Leaderboard- Methodology, Results and Minimal Standard]]"
source_sha256: 38b90f2b9d9884330e5b62b73db967d34928caf55466db935b13737f48fb87fa
original_url: "https://arxiv.org/abs/2608.03070"
processed: 2026-08-07
language: zh-CN
---

# AI 安全排行榜：方法论、结果与最低标准

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Jasper Timm, Lukas Struppek, Ziwei Xu, Grace Cheong, Oscar Mata, Dan Zhao, Mick Yang, Isadora De Andrade, Xiaojun Jia, Yiming Li, Samuel Bauer, Heather McIntyre, Adam Gleave, Edward Yee, Kellin Pelrine
> - **发布时间**：2026-08-07
> - **分类**：cs.CR
> - **原文**：[打开链接](https://arxiv.org/abs/2608.03070)

## 摘要

- AI 安全排行榜是独立基准，将前沿 AI 模型的安全保障从最不安全到最安全排名；对照 FAR.AI 安全保障最低标准测试模型：满足它不保证模型安全，但未满足保证缺乏最先进安全性。
- 1.0 版覆盖化学、生物、放射、核与爆炸（CBRNE）威胁及进攻性网络安全的严重滥用请求；测试四个领先模型的普适越狱：发现超百倍安全差异。
- Claude Fable 5 与 GPT-5.6 Sol 抵御每项攻击，未发现普适越狱；估计用该方法破解（若可能）需超 14200 美元；同时发现 Grok 4.5 与 Gemini 3.1 Pro 数百个普适越狱：每个低于 300 美元破解，Grok 最弱领域（网络安全）普适越狱低至 24 美元。
- 差距可修复：每个发现的弱点属于已知攻击类别，已有生产模型部署防御；排行榜随新模型发布滚动更新，评估方法论与最低标准将定期修订；见 leaderboard.far.ai。

## 正文

AI 安全排行榜是一个独立的基准，将前沿 AI 模型的安全保障从最不安全到最安全排名。它对照 FAR.AI 安全保障最低标准（Minimal Standard for Safeguards）测试模型，该标准代表安全的最低门槛：满足它不保证模型安全，但未满足它则保证缺乏最先进的安全性。1.0 版覆盖化学、生物、放射、核与爆炸（CBRNE）威胁以及进攻性网络安全的严重滥用请求。本报告中，研究在该最低标准背景下测试四个领先模型的普适越狱（universal jailbreaks），发现超过一百倍的安全差异。Claude Fable 5 与 GPT-5.6 Sol 抵御了所运行的每项攻击，未发现普适越狱；研究估计如果可能的话，用该方法破解它们可能需要超过 14,200 美元。同时，研究为 Grok 4.5 与 Gemini 3.1 Pro 发现了数百个普适越狱；每个都在 300 美元以下破解，Grok 最弱领域（网络安全）的普适越狱低至 24 美元。该差距是可修复的：每个发现的弱点都属于已知的攻击类别，且已有生产模型部署了对应的防御。排行榜将随新模型发布滚动更新，评估方法论与最低标准将定期修订，以考虑最新能力与安全保障的最先进水平。排行榜见 leaderboard.far.ai。

## 关键词

AI 安全、越狱、基准、排行榜、CBRNE
