---
published: 2026-08-07
title: "超越 Top-K：用可解释智能体操作替换黑盒检索"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Beyond Top-K- Replacing Black-Box Retrieval with Interpretable Agentic Operations.md"
source_note: "[[信息源/arXiv cs.CL RSS/Beyond Top-K- Replacing Black-Box Retrieval with Interpretable Agentic Operations]]"
source_sha256: 0feccd69a1138d62c5cd54d4ffcd1d4ed359c0b8d4c2a51684d3e0536b69c916
original_url: "https://arxiv.org/abs/2608.06305"
processed: 2026-08-07
language: zh-CN
---

# 超越 Top-K：用可解释智能体操作替换黑盒检索

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Sagar Tamang, Ayush Vyas, Tabarakul Hazarika
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06305)

## 摘要

- 长文档检索增强生成被一种设计主导：分块文本、嵌入块、浮现查询的 top-k 最近邻；对重要文档类别（财务报表、审计报告、监管申报）该设计结构上不健全，并使论证可测量。
- 780 页政府财务报告上 86.8% 内容行为表格行，数千个近相同数字在同一嵌入空间竞争，数字从上方中位数 13 行的页眉继承单位——分块边界常规分离数字与其 lakh 或 crore 单位（两个数量级错误）；表格感知分块器（钢人式构建）修复单位问题，但在所有尝试块大小留下 27–30% 数字块无财年页眉。
- 提出 READ（可靠免嵌入智能体文档搜索）：智能体经三个确定性操作（归一化词汇搜索、结构导航、有界跨度读取）经模型上下文协议读取原始文档，轨迹为可重放审计线索而非不透明相似性分数。
- 51 个验证问题上 READ 答 58.8% 对稠密检索 15.7%（p_Holm=2×10⁻⁵）——或调优后 35.3%，READ 仍领先 23.5 点（p_Holm=0.017）；给同一循环但 top-k 工具的智能体仅达 27.5%，将增益定位于接口而非迭代；证据不支持：BM25 与 READ 统计不可区分，结果分离基于嵌入与免嵌入检索，而非智能体与词汇搜索。

## 正文

长文档上的检索增强生成被一种设计主导：对文本分块、嵌入这些块，并浮现查询的 top-k 最近邻。研究论证，对一类重要的文档——财务报表、审计报告、监管申报——这种设计结构上不健全，并让该论证可测量。在一份 780 页的政府财务报告上，86.8% 的内容行是表格行，数千个近乎相同的数字在同一嵌入空间中竞争，一个数字从它上方中位数 13 行处的页眉继承其单位——因此一个分块边界常规性地将一个数字与它是在 lakh 还是 crore（两个数量级的误差）分开。一个构建为"钢人"（steelman）的表格感知分块器修复了单位问题，但在尝试的每个块大小下，仍留下 27–30% 的数字块没有财年页眉。研究提出 READ（Reliable Embedding-free Agentic Document-search，可靠免嵌入智能体文档搜索），其中智能体通过三个确定性操作——归一化词汇搜索、结构导航与有界跨度读取——在模型上下文协议（MCP）上读取原始文档，因此轨迹是可重放的审计线索，而非不透明的相似性分数。在 51 个验证问题上，READ 回答 58.8%，而稠密检索为 15.7%（p_Holm=2×10⁻⁵）——或调优后 35.3%，READ 仍领先 23.5 点（p_Holm=0.017）。被给予相同循环但只有 top-k 工具的智能体仅达到 27.5%，将增益定位于接口而非迭代。研究还报告证据不支持的内容：BM25 与 READ 统计上不可区分，因此研究结果分离的是基于嵌入与免嵌入的检索，而非智能体与词汇搜索。

## 关键词

RAG、检索、智能体、财务文档、可解释性
