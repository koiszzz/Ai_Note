---
published: 2026-08-07
title: "从失败中学习：经硬负样本的检索中心 CoT 用于统一多模态检索"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Learning from Failures- Retrieval-Centric CoT via Hard Negatives for Unified Multimodal Retrieval.md"
source_note: "[[信息源/arXiv cs.CV RSS/Learning from Failures- Retrieval-Centric CoT via Hard Negatives for Unified Multimodal Retrieval]]"
source_sha256: 17918a0076f9414d8397a45cd8b006a2b8bb48e5433a8dae2d9079b155a6ca48
original_url: "https://arxiv.org/abs/2608.06060"
processed: 2026-08-07
language: zh-CN

---

# 从失败中学习：经硬负样本的检索中心 CoT 用于统一多模态检索

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Zelong Sun, Jun Wang, Kaicheng Yang, Tiancheng Gu, Ziyong Feng, Zhiwu Lu
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06060)

## 摘要

- 统一多模态检索旨在识别满足经异构输入表达的复杂用户意图的候选；大视觉语言模型（LVLM）基检索器高效可扩展，但直接编码原始多模态输入常遗漏细粒度判别线索，导致语义相似候选间混淆。
- 近期方法经生成思维链（CoT）理由丰富查询表征缓解该局限；此类推理通常仅从查询派生：它解释查询描述什么，而非检索器误解什么；有效检索推理应条件化于检索反馈。
- 引入 UniME-R1：嵌入器-顾问框架，学习对初始检索候选推理并生成检索中心思维链（RC-CoT）；顾问逐候选分析识别嵌入器混淆的判别线索；目标出现在初始 top-k 集时直接重排候选，否则生成 RC-CoT 精化检索方向并用双模式嵌入器执行全语料重新检索。
- 训练框架挖掘硬负样本模拟真实检索失败，联合优化直接检索与 RC-CoT 增强检索，并经监督学习与检索导向强化学习将顾问与检索结局对齐；MMEB-V2 与多样通用多模态检索基准大量实验显示 UniME-R1 一致改进检索性能。

## 正文

统一多模态检索旨在识别满足通过异构输入表达的复杂用户意图的候选。虽然大视觉语言模型（LVLM）基检索器高效且可扩展，直接编码原始多模态输入常常遗漏细粒度的判别线索，导致语义相似候选之间的混淆。近期方法通过生成思维链（Chain-of-Thought, CoT）理由来丰富查询表征，从而缓解该局限。然而，此类推理通常仅从查询派生：它解释查询描述了什么，但不解释检索器误解了什么。研究认为，有效的检索推理应条件化于检索反馈。基于该洞见，研究引入 UniME-R1，一个嵌入器-顾问（embedder-adviser）框架：学习对初始检索候选进行推理，并生成检索中心思维链（Retrieval-Centric Chain-of-Thought, RC-CoT）。顾问逐个分析候选，识别嵌入器混淆的判别线索。如果目标出现在初始 top-k 集中，UniME-R1 直接重排候选；否则，它生成 RC-CoT 以精化检索方向，并使用双模式嵌入器执行全语料重新检索。为训练该框架，研究挖掘硬负样本模拟真实检索失败，联合优化直接检索与 RC-CoT 增强检索，并通过监督学习与检索导向的强化学习将顾问与检索结局对齐。MMEB-V2 与一组多样的通用多模态检索基准上的大量实验表明，UniME-R1 相对强基线一致改进检索性能。

## 关键词

多模态检索、思维链、硬负样本、检索反馈、嵌入器-顾问
