---
published: 2026-08-05
title: "LLM 评审与人类同行评审的契合度有多高"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/How Closely Do LLM Reviews Align with Human Peer Review-.md"
source_note: "[[信息源/arXiv cs.AI RSS/How Closely Do LLM Reviews Align with Human Peer Review-]]"
source_sha256: c88c6ffd7efd5c01802e0da10833255024f139420fbe795a91141305801a58cd
original_url: "https://arxiv.org/abs/2608.03659"
processed: 2026-08-05
language: zh-CN
---

# LLM 评审与人类同行评审的契合度有多高

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Abraham Camelo-Guerrero、Jairo Diaz-Rodriguez
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03659)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/How Closely Do LLM Reviews Align with Human Peer Review-|查看原始文件]]

## 摘要

- 在同一受控设置中比较 OpenAI GPT-5.4、Google Gemini 3.1 Pro Preview 与 Anthropic Claude Opus 4.6 的评审与人类评审及最终决定：300 篇主题匹配的 ICLR 2026 投稿（口头、海报、被拒均分），每篇论文用相同指令与评分尺度评审（移除决定信息后）。
- 三个 LLM 都区分了录用与拒稿论文，但没有一个重现人类评分中的口头对海报区分；评分模式因供应商而异（Gemini 系统性地给更高分）。
- 人类与 LLM 评审的重点也不同：LLM 更常识别缺失的基线比较，人类更常提出计算效率关切。
- 结论：宽泛的决策对齐并不意味与更细粒度的人类判断或评审优先级的契合。

## 正文

论文编号：arXiv:2608.03659v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）日益被用于生成科学评审，然而现有评估很少考察不同供应商在同一受控设置内是否与会议决定和人类评审优先级同时对齐。我们比较 OpenAI GPT-5.4、Google Gemini 3.1 Pro Preview 与 Anthropic Claude Opus 4.6 的评审与人类评审及 300 篇主题匹配的 ICLR 2026 投稿的最终决定（口头、海报与被拒论文均分）。每个模型在移除决定信息后用相同的指令与评分尺度评审每篇论文。我们的研究贡献了三个互补维度的跨供应商分析：与宽泛与细粒度决定类别的对齐、推荐尺度使用上的差异，以及所识别弱点的主题一致性。三个 LLM 都区分了录用与被拒论文，但都没有重现人类评分中存在的口头对海报区分。评分模式因供应商而异：Gemini 系统性地给出更高评分，而 OpenAI 与 Claude 对被拒与海报论文更接近人类，但对口头论文更严苛。人类与 LLM 评审的重点也不同：LLM 更频繁地识别缺失的基线比较，人类更常提出计算效率的关切。这些结果表明，宽泛的决策对齐并不意味着与更细粒度的人类判断或评审优先级一致。

## 关键词

#同行评审 #LLM评审 #学术评估 #跨供应商
