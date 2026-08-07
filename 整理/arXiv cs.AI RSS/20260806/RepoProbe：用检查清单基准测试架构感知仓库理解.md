---
published: 20260806
title: "RepoProbe：用检查清单基准测试架构感知仓库理解"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/RepoProbe- Benchmarking Architecture-Aware Repository Comprehension with Checklists.md"
source_note: "[[信息源/arXiv cs.AI RSS/RepoProbe- Benchmarking Architecture-Aware Repository Comprehension with Checklists]]"
source_sha256: 2af7227c839a3417e0fbe69b62546ff035d4b191c3ce01352a1bba8e7f28bac1
original_url: "https://arxiv.org/abs/2608.04783"
processed: 2026-08-06
language: zh-CN

---

# RepoProbe：用检查清单基准测试架构感知仓库理解

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuexi Yang, Alyssa Wu, Ji Luo, Richeng Xuan, Zhichao Hu, Yuhong Liu, Zhen Qin
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04783)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/RepoProbe- Benchmarking Architecture-Aware Repository Comprehension with Checklists|查看原始文件]]

## 摘要

- 大语言模型（LLM）集成到软件工程已将焦点从函数级生成转向仓库级辅助，但现有基准大多依赖 GitHub Issues 的 bug 报告，常允许模型通过错误日志模式匹配绕过真正理解；此错位低估编辑偏差（过早生成：模型过早提出代码修改而非理解现有仓库架构）。
- 本文引入 RepoProbe，一个通过开放式问答（用 GitHub Discussions）评估仓库级代码理解的新基准，聚焦开放式架构查询而非缺陷报告；提出基于检查清单的验证协议，将答案分解为原子、可验证事实，用客观验证取代主观评分。
- 最先进（SOTA）LLM 评估揭示高清晰度与证据接地技术正确性之间的持续差距，定量确认编辑偏差普遍性（模型优先代码生成而非架构分析）；验证协议显著改进相对传统标量评分评估的可靠性。

## 正文

大语言模型（LLM）集成到软件工程已将焦点从函数级生成转向仓库级辅助。然而，现有基准大多依赖 GitHub Issues 的 bug 报告，常允许模型通过错误日志模式匹配绕过真正理解。此错位低估编辑偏差（Edit Bias），指过早生成——模型过早提出代码修改而非理解现有仓库架构。此外，当前 LLM 作为评判者的标量评分遭受高方差和低可解释性。本工作引入 RepoProbe，一个通过开放式问答（使用 GitHub Discussions）评估仓库级代码理解的新基准，聚焦开放式架构查询而非缺陷报告。为确保严格评估，我们提出基于检查清单的验证协议（Checklist-Based Verification Protocol），将答案分解为原子、可验证事实，用客观验证取代主观评分。我们对最先进（SOTA）LLM 的评估揭示高清晰度与证据接地技术正确性之间的持续差距。它还定量确认编辑偏差的普遍性，其中模型优先代码生成而非架构分析。最后，我们证明验证协议相对传统标量评分评估显著改进评估可靠性。

## 关键词

#仓库理解 #基准 #检查清单 #架构意识 #arXiv