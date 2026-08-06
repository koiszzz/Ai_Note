---
title: "MMLongBench-Doc-V2：MMLongBench-Doc 的修正标注、语义感知修订"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/MMLongBench-Doc-V2- A Corrected-Annotation, Semantics-Aware Revision of MMLongBench-Doc.md"
source_note: "[[信息源/arXiv cs.AI RSS/MMLongBench-Doc-V2- A Corrected-Annotation, Semantics-Aware Revision of MMLongBench-Doc]]"
source_sha256: cf7005875c2ebb0172dbed1e8209b6ba41ebc81312cc05035f0e1099f4f8582d
original_url: "https://arxiv.org/abs/2608.03397"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MMLongBench-Doc-V2：MMLongBench-Doc 的修正标注、语义感知修订

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mingtian Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03397)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/MMLongBench-Doc-V2- A Corrected-Annotation, Semantics-Aware Revision of MMLongBench-Doc|查看原始文件]]

## 摘要

- MMLongBench-Doc 是 135 个 PDF、1,082 个问题的长文档 QA 基准；两个属性使测得分数偏离其目标量：参考指标比较提取的答案（1,358,000 输给 1358000），且相当比例的真值标注错误、含糊或不完整——因其发现方式，集中在有能力系统能正确回答的问题上。
- MMLongBench-Doc-V2 修正 106 条标注（每条附解决它的页码与运算），用固定的 LLM 评判者（询问回答是否意指参考）替代字符串指标。
- 移除 10 个文档以错误文件名发布的问题与 1 个重复问题，剩 134 个文档的 1,071 个问题。
- 最具复用性的贡献是一个决策程序：何时可以放宽空集键、何时放宽会破坏刻意负面样本；应用于全部 208 行，放宽了 14 行。V2 分数与已发表 V1 数字不可比。语料、逐条目修正记录与评估框架：https://github.com/VectifyAI/MMLongBench-Doc-V2

## 正文

论文编号：arXiv:2608.03397v1（更新类型：new）。以下为摘要全文翻译。

MMLongBench-Doc 是一个覆盖 135 个 PDF、1,082 个问题的长文档 QA 基准。它的两个属性使测得分数偏离它们本应捕获的量：参考指标比较提取的答案，因此 1,358,000 输给 1358000；并且相当比例的真值标注错误、含糊或不完整——由于它们的发现方式，集中在恰好是能力强的系统能正确回答的问题上。MMLongBench-Doc-V2 修正 106 条标注，每条都发布解决它的页码与运算，并用一个固定的 LLM 评判者（询问一个回答是否意指参考）替代字符串指标。10 个文档以错误文件名发布的问题被移除而非计为错误，连同 1 个重复问题，剩余 134 个文档的 1,071 个问题。最具复用性的贡献是一个决策程序：何时可以放宽空集键，何时放宽会破坏刻意的负面样本；应用于全部 208 行，它放宽了 14 行。V2 分数与已发布的 V1 数字不可比。修正后的语料、逐条目修正记录与评估框架可在 https://github.com/VectifyAI/MMLongBench-Doc-V2 获取。

## 关键词

#长文档QA #基准修正 #语义评估 #LLM评判
