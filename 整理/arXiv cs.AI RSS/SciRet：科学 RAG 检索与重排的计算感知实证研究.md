---
title: "SciRet：科学 RAG 检索与重排的计算感知实证研究"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SciRet- A Compute-Aware Empirical Study of Retrieval and Reranking for Scientific RAG.md"
source_note: "[[信息源/arXiv cs.AI RSS/SciRet- A Compute-Aware Empirical Study of Retrieval and Reranking for Scientific RAG]]"
source_sha256: 8d5e12905732d16524d2ec30a28833dec6b3b741ad8a8b280f7c6ae548f81609
original_url: "https://arxiv.org/abs/2608.03860"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SciRet：科学 RAG 检索与重排的计算感知实证研究

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kaysarul Anas Apurba、Md. Hasibul Hasan、Rofiqul Alam Shehab 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03860)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SciRet- A Compute-Aware Empirical Study of Retrieval and Reranking for Scientific RAG|查看原始文件]]

## 摘要

- 引入 SciRet，CORD-19 上科学问答检索增强生成的计算感知实证研究：不提出新模型，而是在三种语料规模（1,034 块/1K 论文、5,160 块/5K 论文、15,480 块/15K 论文）上评估固定科学 RAG 流水线。
- 流水线结合句子窗口分块、BM25、BGE-M3 稠密检索、倒数排名融合、可选交叉编码器重排与接地答案生成；混合检索比单独稀疏或稠密检索更稳健，1K 与 15K 上 Recall@10 达 1.000。
- 对比之下，MS MARCO 训练的交叉编码器重排器降低科学语料上的精确率，表明域错配可能超过更强查询-段落交互的收益；生成忠实度（RAGAS 测量）在我们的设置中随语料规模增加。
- 检索评估使用从混合系统派生的伪相关标签，因此把结果视为受控比较证据而非基准主张；发布代码、索引与评估输出支持复现与后续研究。

## 正文

论文编号：arXiv:2608.03860v1（更新类型：cross）。以下为摘要全文翻译。

我们引入 SciRet，一个在 CORD-19 上对科学问答检索增强生成的计算感知实证研究。我们不提出新模型，而是在三种语料规模上评估一个固定的科学 RAG 流水线：1,034 块（1K 论文）、5,160 块（5K 论文）与 15,480 块（15K 论文）。流水线结合句子窗口分块、BM25、BGE-M3 稠密检索、倒数排名融合、可选交叉编码器重排与接地答案生成。在这些设置中，混合检索在我们的设置中比单独稀疏或稠密检索更稳健，在 1K 与 15K 上 Recall@10 达到 1.000。对比之下，MS MARCO 训练的交叉编码器重排器降低科学语料上的精确率，表明域错配可能超过更强查询-段落交互的收益。用 RAGAS 测量的生成忠实度在我们的设置中随语料规模增加。检索评估使用从混合系统派生的伪相关标签，因此我们把结果视为受控比较证据，而非基准主张。我们发布代码、索引与评估输出，以支持复现与后续研究。

## 关键词

#RAG #科学问答 #混合检索 #重排
