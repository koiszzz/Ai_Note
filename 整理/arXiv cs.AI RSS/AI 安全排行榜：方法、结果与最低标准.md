---
title: "AI 安全排行榜：方法、结果与最低标准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AI Security Leaderboard- Methodology, Results and Minimal Standard.md"
source_note: "[[信息源/arXiv cs.AI RSS/AI Security Leaderboard- Methodology, Results and Minimal Standard]]"
source_sha256: e5374e1e8ccb50dccc1579d3bbe34a789e95c03d090cf53073400ba38378de5e
original_url: "https://arxiv.org/abs/2608.03070"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# AI 安全排行榜：方法、结果与最低标准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03070)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AI Security Leaderboard- Methodology, Results and Minimal Standard|查看原始文件]]

## 摘要

- 前沿 AI 模型开发者越来越依赖分层防护措施来防止灾难性滥用，但公开证据很少，无法说明这些防护提供了多少保护，以及不同开发者之间是否一致。
- 论文提出 FAR.AI 防护最低标准 1.0 版，包括 67 种易于获取的静态越狱技术、将其组合成大型攻击空间的方法，以及针对旗舰模型的基准测试。
- 作者使用涵盖化学、生物、放射性/核与爆炸威胁以及攻击性网络安全的两个互补数据集，评估四个旗舰模型和 360 个攻击目标，并用三阶段漏斗寻找普适越狱。
- 模型稳健性差异很大：攻破模型的成本相差超过百倍；Claude Fable 5 和 GPT-5.6 Sol 在两种策略下都没有发现普适越狱，而 Grok 4.5 和 Gemini 3.1 Pro 分别发现 63 个和 18 个。

## 正文

前沿 AI 模型开发者越来越依赖分层防护措施来防止灾难性滥用，但公开证据很少，无法说明这些防护能提供多大程度的保护，也无法说明不同开发者之间的防护是否一致。

本文提出 FAR.AI 防护最低标准 1.0 版：包含 67 种易于获取的静态越狱技术、将这些技术组合成大型攻击空间的方法，以及针对旗舰模型样本的基准测试。作者在两个互补数据集上评估 Claude Fable 5、GPT-5.6 Sol、Gemini 3.1 Pro 和 Grok 4.5，数据集共包含 360 个攻击目标，覆盖化学、生物、放射性/核与爆炸（CBRNE）威胁以及攻击性网络安全。

研究使用三阶段漏斗来识别普适越狱，即能够让模型针对某个领域超过 75% 的目标生成操作上合规响应的单一提示模板。作者还提出越狱成本指标，直接建模攻击者支出；当没有找到普适越狱时，则给出右删失下界。

模型稳健性高度不均衡，攻破模型的成本相差超过百倍。对技术池进行随机搜索，发现针对 Grok 4.5 的 63 个普适越狱，以及针对 Gemini 3.1 Pro 的 18 个普适越狱，找到一个越狱的平均成本约为 58 美元和 278 美元；专家引导的组合搜索则将数量提高到 385 个和 231 个。Claude Fable 5 和 GPT-5.6 Sol 在两种策略下都没有产生普适越狱。

由于达到最低标准只需要使用其他生产系统中已经公开描述并部署的防御措施，这些差距似乎可以用现有技术弥合。作者建议采用纵深防御，结合推理监控、激活监控以及输入/输出监控。结果持续维护在排行榜网站上。

## 关键词

#AI安全 #越狱攻击 #模型评估 #防护标准
