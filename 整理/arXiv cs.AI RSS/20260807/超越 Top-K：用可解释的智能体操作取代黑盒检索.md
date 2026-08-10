---
published: 2026-08-07
title: "超越 Top-K：用可解释的智能体操作取代黑盒检索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Beyond Top-K- Replacing Black-Box Retrieval with Interpretable Agentic Operations.md"
source_note: "[[信息源/arXiv cs.AI RSS/Beyond Top-K- Replacing Black-Box Retrieval with Interpretable Agentic Operations]]"
source_sha256: af728848e554ffc8b58bc6f4de934fbf6947dea14cd5429feaeff7a0ddbfbaf2
original_url: "https://arxiv.org/abs/2608.06305"
processed: 2026-08-07
language: zh-CN
---

# 超越 Top-K：用可解释的智能体操作取代黑盒检索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sagar Tamang, Ayush Vyas, Tabarakul Hazarika
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06305)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Beyond Top-K- Replacing Black-Box Retrieval with Interpretable Agentic Operations|查看原始文件]]

## 摘要

- 长文档的检索增强生成被一种设计主导：切分文本、嵌入块、返回查询的 top-k 最近邻；论文认为对财务报告、审计报告、监管申报等重要文档类别，该设计结构性不健全，并使论证可测量。
- 在一份 780 页政府财务报告中，86.8% 的内容行是表格行，数千个近相同数字在同一嵌入空间竞争，一个数字的计量单位从中位 13 行之上的表头继承——因此块边界常把数字与其是"十万（lakh）"还是"千万（crore）"单位分开，造成两个数量级的误差。
- 表格感知切分器（作为"稻草人"构建）解决单位问题，但在我们尝试的每个块大小下仍留下 27-30% 的数字块无财政年度表头。
- 提出 READ（可靠无嵌入智能体文档搜索）：智能体通过三种确定性操作读取原始文档——归一化词法搜索、结构导航与有界跨度读取——通过模型上下文协议（MCP）暴露，使轨迹成为可回放的审计轨迹而非不透明相似度分数。
- 51 个已验证问题上 READ 答对 58.8%，稠密检索为 15.7%（p_Holm=2×10⁻⁵）；调优后 35.3% 仍领先 23.5 个点（p_Holm=0.017）；给相同循环但用 top-k 工具的智能体仅达 27.5%，定位增益在接口而非迭代；BM25 与 READ 统计上不可区分，因此结果区分的是基于嵌入与无嵌入检索，而非智能体与词法搜索。

## 正文

长文档的检索增强生成被一种设计主导：切分文本、嵌入块、并返回查询的 top-k 最近邻。我们认为对一类重要文档——财务报表、审计报告、监管申报——这一设计在结构上不健全，并使论证可测量。在一份 780 页的政府财务报告中，86.8% 的内容行是表格行，数千个近相同的数字在同一嵌入空间竞争，且一个数字从中位数 13 行之上的表头继承其单位——因此块边界常常把数字与它属于"lakh"（十万）还是"crore"（千万）分开，造成两个数量级的误差。一个表格感知切分器（作为"稻草人"构建）解决了单位问题，但在我们尝试的每个块大小下仍留下 27-30% 的数字块没有财政年度表头。我们提出 READ（Reliable Embedding-free Agentic Document-search，可靠无嵌入智能体文档搜索）：其中智能体通过三种确定性操作读取原始文档——归一化词法搜索、结构导航与有界跨度读取——通过模型上下文协议（Model Context Protocol）暴露，因此轨迹是可回放的审计轨迹，而非不透明的相似度分数。在 51 个已验证问题上，READ 答对 58.8%，而稠密检索为 15.7%（p_Holm = 2×10⁻⁵）——或调优后 35.3%，READ 仍领先 23.5 个点（p_Holm = 0.017）。给定相同循环但只有 top-k 工具的智能体仅达 27.5%，将增益定位于接口而非迭代。我们还报告证据不支持的内容：BM25 与 READ 统计上不可区分，因此我们的结果区分的是基于嵌入与无嵌入的检索，而非智能体与词法搜索。

## 关键词

#检索增强生成 #智能体检索 #表格文档 #可解释性
