---
title: "Token Buncher：保护 LLM 免受有害强化学习微调"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Token Buncher- Shielding LLMs from Harmful Reinforcement Learning Fine-Tuning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Token Buncher- Shielding LLMs from Harmful Reinforcement Learning Fine-Tuning.]]"
source_sha256: a236d8e103eb061289731888cdf482689c20a6b7daf329e159956a95454c33f9
original_url: "https://arxiv.org/abs/2508.20697"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Token Buncher：保护 LLM 免受有害强化学习微调

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Weitao Feng、Lixu Wang、Peizhuo Lv、Tianyi Wei、Jie Zhang、Chongyang Gao、Sinong Zhan、Wei Dong
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2508.20697)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Token Buncher- Shielding LLMs from Harmful Reinforcement Learning Fine-Tuning.|查看原始文件]]

## 摘要

- 大语言模型（LLM）能力持续增长，通过微调有害误用的风险也随之增长；先前研究大多假设攻击者依赖监督微调（SFT）进行此类误用，本文系统表明在匹配计算预算下强化学习（RL）使对手能更有效打破安全对齐、促进更高级有害任务协助。
- 提出 TokenBuncher，第一个专门针对基于 RL 有害微调的有效防御：压制 RL 赖以存在的基础——模型响应熵。
- 通过约束熵，基于 RL 的微调不能再利用不同奖励信号把模型推向有害行为。
- 通过熵即奖励 RL 与防有害能力升级的 Token Noiser 机制实现该防御。
- 跨多个模型与 RL 算法的大量实验显示：TokenBuncher 稳健缓解有害 RL 微调，同时保留良性任务性能与可微调性。
- 结果凸显基于 RL 的有害微调比 SFT 构成更大系统性风险，而 TokenBuncher 提供有效且通用的防御。

## 正文

论文编号：arXiv:2508.20697v4（更新类型：replace）。以下为摘要全文翻译。

随着大语言模型（LLM）能力的持续增长，通过微调进行有害误用的风险也在增长。虽然大多数先前研究假设攻击者依赖监督微调（SFT）进行此类误用，我们系统地表明，在匹配的计算预算下，强化学习（RL）使对手能够更有效地打破安全对齐并促进更高级的有害任务协助。为应对这一新兴威胁，我们提出 TokenBuncher，第一个专门针对基于 RL 的有害微调的有效防御。TokenBuncher 压制 RL 赖以存在的基础：模型响应熵。通过约束熵，基于 RL 的微调不再能利用不同的奖励信号把模型推向有害行为。我们通过熵即奖励 RL 与一个旨在防止有害能力升级的 Token Noiser 机制实现这一防御。跨多个模型与 RL 算法的大量实验表明，TokenBuncher 稳健地缓解有害的 RL 微调，同时保留良性任务性能与可微调性。我们的结果凸显基于 RL 的有害微调比 SFT 构成更大的系统性风险，而 TokenBuncher 提供一种有效且通用的防御。

## 关键词

#LLM安全 #有害微调 #强化学习 #熵约束 #防御
