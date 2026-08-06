---
title: "SimulRAG：在长文科学问答中为 LLM 接地的基于模拟器 RAG"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/SimulRAG- Simulator-based RAG for Grounding LLMs in Long-form Scientific QA.md"
source_note: "[[信息源/arXiv cs.LG RSS/SimulRAG- Simulator-based RAG for Grounding LLMs in Long-form Scientific QA.]]"
source_sha256: 41327e7eb9784d9e36ed92e7dc6d2515081446d6978fd46093e62a5a74f535b0
original_url: "https://arxiv.org/abs/2509.25459"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SimulRAG：在长文科学问答中为 LLM 接地的基于模拟器 RAG

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Haozhou Xu、Dongxia Wu、Matteo Chinazzi、Ruijia Niu、Rose Yu、Yi-An Ma
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2509.25459)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/SimulRAG- Simulator-based RAG for Grounding LLMs in Long-form Scientific QA.|查看原始文件]]

## 摘要

- 大语言模型（LLM）在生成综合证据并连接多个因素的长文科学解释方面显现前景；但长文科学问答中 LLM 常产生幻觉，生成无支撑或不一致的声明。
- 检索增强生成（RAG）通过把生成接地在外部来源改善可信度；科学模拟器很有价值，因为它们能验证定量假设并捕捉演化动力学；但基于模拟的 RAG 因两个挑战而不平凡：如何从科学模拟器检索，以及如何高效验证与更新长文答案。
- 提出 SimulRAG，一个基于模拟器的 RAG 框架，带广义检索界面，在文本与模拟器参数/输出间转换。
- SimulRAG 进一步引入带不确定性估计与模拟器边界评估（UE+SBA）的声明级生成，以选择性地验证与更新声明；与工具优先或整体答案修订不同，它先无检索引出多样答案，然后用模拟器证据接地不确定、可模拟器验证的原子声明。
- 发布一个长文科学 QA 基准，覆盖气候科学、流行病学与城市规划，ground truth 经模拟与人类标注者验证。
- 实验显示：SimulRAG 相对最强适配 RAG 基线把信息量提升 30.4%、事实性提升 16.3%，而 UE+SBA 增强声明级效率与质量。

## 正文

论文编号：arXiv:2509.25459v2（更新类型：replace-cross）。以下为摘要全文翻译。

大语言模型（LLM）在生成长文科学解释方面显现前景，这些解释综合证据并连接多个因素。然而，在长文科学问答中，LLM 常常产生幻觉，生成无支撑或不一致的声明。检索增强生成（RAG）通过把生成接地在外部来源改善可信度；科学模拟器很有价值，因为它们可以验证定量假设并捕捉演化的动力学。然而，基于模拟的 RAG 因两个挑战而不平凡：如何从科学模拟器检索，以及如何高效地验证与更新长文答案。为克服这些挑战，我们提出 SimulRAG，一个基于模拟器的 RAG 框架，带有一个在文本与模拟器参数/输出之间转换的广义检索界面。SimulRAG 进一步引入带不确定性估计与模拟器边界评估（UE+SBA）的声明级生成，以选择性地验证与更新声明。与工具优先或整体答案修订不同，它首先在没有检索的情况下引出多样的答案，然后用模拟器证据接地不确定的、可模拟器验证的原子声明。我们还发布一个长文科学 QA 基准，覆盖气候科学、流行病学与城市规划，ground truth 经模拟与人类标注者验证。实验表明，SimulRAG 相对最强适配 RAG 基线把信息量提升 30.4%、事实性提升 16.3%，而 UE+SBA 增强声明级的效率与质量。

## 关键词

#RAG #科学问答 #模拟器 #声明级生成 #长文生成
