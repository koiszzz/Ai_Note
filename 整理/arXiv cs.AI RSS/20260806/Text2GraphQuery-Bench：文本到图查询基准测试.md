---
published: 2026-08-06
title: Text2GraphQuery-Bench：文本到图查询基准测试
source: arXiv cs.AI RSS
original_file: 信息源/arXiv cs.AI RSS/Text2GraphQuery-Bench- A Text to Graph Query Benchmark.md
source_note: "[[信息源/arXiv cs.AI RSS/Text2GraphQuery-Bench- A Text to Graph Query Benchmark]]"
source_sha256: 539ca45c79a56c01c1a2469e33beee0f8b6e05d42700a3ca832154128e848e36
original_url: https://arxiv.org/abs/2602.11745
processed: 2026-08-07
language: zh-CN
---

# Text2GraphQuery-Bench：文本到图查询基准测试

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2602.11745)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Text2GraphQuery-Bench- A Text to Graph Query Benchmark|查看原始文件]]

## 摘要

- 首个覆盖全部主流声明式属性图查询语言（Cypher、GQL、SQL/PGQ）的基准，含 267,276 个（问题，图查询）对，覆盖 34 个数据库、13 个领域
- 评估协议在图原生难度、问题抽象与模式别名下报告 Grammar、GLEU、Similarity 与 EX 指标
- 8 个 LLM 的实验显示：零样本 GQL 与 SQL/PGQ 的 Grammar 远低于 Cypher，但少量示例提示基本可弥补该语言差距
- 微调 8B 模型可达或超过零样本大模型，表明主要障碍是语言陌生而非模型容量

## 正文

图模型是充满复杂关系领域中进行数据分析的基础。与拥有相对统一的标准且广为人知的 SQL 不同，图查询语言多种多样（例如 Cypher、GQL、SQL/PGQ），对大多数用户来说远不那么熟悉，这使得它们显著更难学习和使用。文本到图查询（Text-to-Graph-Query）系统通过将自然语言翻译为可执行的图查询来消除这一障碍，使 LLM 能够充当图数据库管理系统（GDBMS）的接口。

现有基准在语言覆盖上有限，依赖僵硬的合成方式，且缺乏全面的评估。我们提出了 Text2GraphQuery-Bench，第一个覆盖所有主流声明式属性图查询语言（Cypher、GQL 和 SQL/PGQ）的基准。它包含跨越 34 个数据库和 13 个领域的 267,276 个（问题，图查询）对。其构建方式支持从异构资源进行适配以及领域感知合成，而其基于 Graph-IR 的设计使其能够快速扩展到新语言。评估协议在图原生难度、问题抽象和模式别名三种条件下报告 Grammar、GLEU、Similarity 和 EX 指标。

在 8 个 LLM 上的实验揭示了以下发现：(i) 存在显著的语言差距——零样本 GQL 和 SQL/PGQ 的 Grammar 远低于 Cypher，而少量示例提示基本可以弥补这一差距；(ii) 微调一个 8B 模型即可达到或超过零样本的大模型，表明不熟悉（而非模型容量）才是主要障碍；(iii) 随着监督的增加，语法错误逐渐消退，瓶颈转移到 GQL 中的聚合逻辑和 SQL/PGQ 中的模式链接；(iv) 更高的问题抽象因意图到模式（intent-to-schema）的落地问题而降低 EX 指标，而模式别名的影响很小；(v) EX 从 Easy 到 Extra Hard 持续下降，其中 Extra Hard 仍是持久的瓶颈。（由于 arXiv 的限制，本摘要有所缩短。完整版请参见 PDF。）

## 关键词

#arXiv #图数据库 #Text2SQL #基准测试 #LLM
