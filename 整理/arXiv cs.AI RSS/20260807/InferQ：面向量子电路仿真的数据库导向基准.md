---
published: 2026-08-07
title: "InferQ：面向量子电路仿真的数据库导向基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/InferQ- A Database-Oriented Benchmark for Quantum Circuits Simulation.md"
source_note: "[[信息源/arXiv cs.AI RSS/InferQ- A Database-Oriented Benchmark for Quantum Circuits Simulation]]"
source_sha256: 1029c7c8d1c78faad7d099d6d3a49b67d8c20fcb995eea189b8aafd532fc8816
original_url: "https://arxiv.org/abs/2607.29134"
processed: 2026-08-07
language: zh-CN
---

# InferQ：面向量子电路仿真的数据库导向基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Andrei Ilinescu, Aadi Patwardhan, Rihan Hai
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.29134)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/InferQ- A Database-Oriented Benchmark for Quantum Circuits Simulation|查看原始文件]]

## 摘要

- 近期工作表明关系数据库管理系统（RDBMS）可通过将仿真编译为 SQL 工作负载（主要是连接与聚合张量收缩）执行量子电路仿真；早期结果有前景，但 largely 聚焦狭窄的高结构化电路集，对系统化数据库研究（如跨广泛电路的查询优化、物理设计与引擎级评估）支持有限。
- 呈现 InferQ：量子电路仿真的数据库导向基准——从电路模板集组装子电路生成通用、组合电路，将每个仿真任务输出为 RDBMS 就绪 SQL 工作负载，并提取电路与查询特征（静态、图、SQL 与动态）用于工作负载刻画。
- InferQ 还在线发布 202,975 个电路的大数据集，带网页查看器支持搜索、过滤与下载电路及特征记录。
- 跨 RDBMS 引擎（PostgreSQL、SQLite、DuckDB 与 Umbra）与广泛使用的 Qiskit Aer 模拟器的实验中，发现 RDBMS 在 InferQ 生成电路的 50% 以上上取得比 Qiskit Aer 更好的峰值内存使用；此外，使用 InferQ 特征，轻量机器学习模型（线性与树模型）可准确预测何时 SQL 执行更可取（运行时准确率高达 95.6%、内存 97.4%），实现数据中心的模拟器选择，为基于 SQL 的量子电路仿真打开有原则优化的门。

## 正文

近期工作表明，关系数据库管理系统（RDBMSs）可以通过将仿真编译为 SQL 工作负载（主要是连接与聚合张量收缩）来执行量子电路仿真。虽然早期结果有前景，它们 largely 聚焦于狭窄的高结构化电路集，且对系统化数据库研究（如查询优化、物理设计与跨广泛电路的引擎级评估）支持有限。我们呈现 InferQ，一个量子电路仿真的数据库导向基准。InferQ 通过从一组电路模板组装子电路生成通用、组合电路，将每个仿真任务输出为 RDBMS 就绪的 SQL 工作负载，并提取电路与查询特征（静态、图、SQL 与动态）用于工作负载刻画。InferQ 还在线发布一个 202,975 个电路的大数据集，带一个基于网页的查看器，支持搜索、过滤与下载电路与特征记录。跨 RDBMS 引擎（PostgreSQL、SQLite、DuckDB 与 Umbra）与广泛使用的 Qiskit Aer 模拟器的实验中，我们发现 RDBMS 在 InferQ 生成的 50% 以上电路上取得比 Qiskit Aer 更好的峰值内存使用。此外，使用 InferQ 特征，轻量机器学习模型（线性与基于树的模型）可以准确预测何时 SQL 执行更可取（运行时准确率高达 95.6%，内存 97.4%），实现数据中心的模拟器选择，并为基于 SQL 的量子电路仿真的有原则优化打开大门。

## 关键词

#量子电路仿真 #数据库 #基准测试 #SQL
