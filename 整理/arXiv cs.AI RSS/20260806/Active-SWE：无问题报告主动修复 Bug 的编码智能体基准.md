---
published: 20260806
title: "Active-SWE：无问题报告主动修复 Bug 的编码智能体基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Active-SWE- Benchmarking Coding Agents for Proactive Bug Fixing without Issue Reports.md"
source_note: "[[信息源/arXiv cs.AI RSS/Active-SWE- Benchmarking Coding Agents for Proactive Bug Fixing without Issue Reports]]"
source_sha256: d694323f3d9062673fd7fec44e6005847903c7d5c0d058d30089d9f119a4e2d6
original_url: "https://arxiv.org/abs/2608.04682"
processed: 2026-08-06
language: zh-CN

---

# Active-SWE：无问题报告主动修复 Bug 的编码智能体基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Haobin Li, Ping Deng, Weizhong Qian, Liang Jiang, Zhenyu Huang, Mouxing Yang, Xi Peng
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04682)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Active-SWE- Benchmarking Coding Agents for Proactive Bug Fixing without Issue Reports|查看原始文件]]

## 摘要

- 由大语言模型驱动的编码智能体日益被采用于软件工程场景，能够修复大规模代码库中的特定 bug；但现有 SWE 基准通常假设高质量问题报告始终可用，这在实践中常因报告获取和整理的复杂性而被违背。
- 本文引入 Active-SWE，一个评估编码智能体在没有报告指导情况下主动发现和修复多个 bug 的基准，覆盖六个 bug 类别、八种语言的 1,663 个任务。
- 提出困难度感知的任务构建流水线和双轨评估框架；广泛实验显示大多数最先进编码智能体在主动修复任务上挣扎，定位和解决记录 bug、处理多 bug 场景和发现有效潜在 bug 的能力有限。

## 正文

由大语言模型（LLM）驱动的编码智能体日益被采用于软件工程（SWE）场景，能够修复大规模代码库中的特定 bug。然而，现有 SWE 基准通常假设带有详细信息的高质量问题报告始终可用，这在实践中常因报告获取和整理的复杂性而容易被违背。为解决此问题，我们引入 Active-SWE，一个评估编码智能体在没有报告指导情况下主动发现和修复多个 bug 的基准，覆盖六个 bug 类别和八种语言的 1,663 个任务。除了将焦点从现有反应式 bug 修复转向主动 bug 修复，Active-SWE 通过将范围从修复特定记录 bug 扩展到多 bug 修复和潜在 bug 发现场景，实现更深入的评估。为构建 Active-SWE，我们提出一种新颖的困难度感知任务构建流水线，配合双轨评估框架，促进对主动 bug 修复能力的全面评估。广泛实验揭示，大多数最先进编码智能体在主动 bug 修复任务上挣扎，在定位和解决记录 bug、处理多 bug 修复场景以及发现有效潜在 bug 方面表现出有限性能。

## 关键词

#编码智能体 #主动Bug修复 #基准 #软件工程 #arXiv