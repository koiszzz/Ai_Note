---
title: "DataSpace：异构工作区可验证分析的数据智能体基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DataSpace- Benchmarking Data Agents for Verifiable Analytics over Heterogeneous Workspaces.md"
source_note: "[[信息源/arXiv cs.AI RSS/DataSpace- Benchmarking Data Agents for Verifiable Analytics over Heterogeneous Workspaces]]"
source_sha256: 63f6bff1e80c2caee09dabfc80337e9dc0aaae23abe16240e7373360d255f4e9
original_url: "https://arxiv.org/abs/2608.03451"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DataSpace：异构工作区可验证分析的数据智能体基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Boyan Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03451)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DataSpace- Benchmarking Data Agents for Verifiable Analytics over Heterogeneous Workspaces|查看原始文件]]

## 摘要

- 引入 DataSpace 基准：数据智能体从任务本地异构工作区产出可验证的表格结果，包含 410 个跨语言任务与 7,439 个工件（合计 15.01 GB，覆盖 CSV、JSON、SQLite、Markdown、PDF 与视频），并作为 KDD Cup 2026 数据智能体竞赛的官方评估基准。
- 用 DataSpace-Builder 构建：执行接地框架，涵盖跨语言转换、约束感知的关系采样、模态路由与工件渲染，以及 11 位领域专家的人工审查与任务修复。
- 确定性评估器执行标题不变的列对齐、类型与精度感知的归一化、顺序感知的行比较。
- 六个前沿多模态模型与五个常用智能体框架中，最佳准确率达 66.34%；固定骨干时框架选择造成 15.36 个百分点的差距；多模态证据集成与连接在全部六个骨干上一致降低准确率——基准尚未饱和，并揭示提升数据智能体可靠性的关键挑战。

## 正文

论文编号：arXiv:2608.03451v1（更新类型：new）。以下为摘要全文翻译。

数据智能体支持对组织工作区进行自然语言分析，其中相关证据可能分散在数据库、结构化文件、长文档与多媒体中。现有基准大多孤立地覆盖结构化查询、检索或开放性分析，未能把异构证据发现、完整表格输出与确定性评估统一起来。我们引入 DataSpace，一个基准，其中数据智能体从任务本地的异构工作区产出可验证的表格结果。它包含 410 个跨语言任务与 7,439 个工件，合计 15.01 GB，覆盖 CSV、JSON、SQLite、Markdown、PDF 与视频。DataSpace 还担任 KDD Cup 2026“复杂数据分析数据智能体”竞赛的官方评估基准。每个智能体只收到一个问题与工作区，并返回完整的所请求表格结果。我们用 DataSpace-Builder 构建 DataSpace，这是一个执行接地框架，包含跨语言转换、约束感知的关系采样、模态路由与工件渲染，以及 11 位领域专家的人工审查与任务修复。确定性评估器执行标题不变的列对齐、类型与精度感知的归一化以及顺序感知的行比较。在六个近期发布的前沿多模态模型与五个广泛使用的智能体框架中，最佳准确率达到 66.34%，而固定骨干时框架选择产生 15.36 个百分点的差距。多模态证据集成与连接在全部六个骨干上一致降低准确率。这些结果表明 DataSpace 尚未饱和，并指出了提升数据智能体可靠性的关键挑战。

## 关键词

#数据智能体 #基准测试 #数据分析 #可验证结果
