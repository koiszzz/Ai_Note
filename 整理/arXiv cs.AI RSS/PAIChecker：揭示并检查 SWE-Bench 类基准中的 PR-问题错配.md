---
title: "PAIChecker：揭示并检查 SWE-Bench 类基准中的 PR-问题错配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PAIChecker- Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks.md"
source_note: "[[信息源/arXiv cs.AI RSS/PAIChecker- Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks]]"
source_sha256: a6a9b496f8a4c98716698446e7cd0f97abb311b08f8c24a5c0f88861cddcb47e
original_url: "https://arxiv.org/abs/2607.28587"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PAIChecker：揭示并检查 SWE-Bench 类基准中的 PR-问题错配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Manyi Wang、Junjielong Xu、Pinjia He
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28587)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PAIChecker- Uncovering and Checking PR-Issue Misalignment in SWE-Bench-Like Benchmarks|查看原始文件]]

## 摘要

- 系统研究 SWE-bench Verified 实例：13.6% 在五种模式、十一个细粒度场景中表现出错配。
- 提出 PAIChecker，检查 SWE-bench 类基准中 PR-问题错配的多智能体系统：三阶段设计，结合特定模式识别、跨智能体标签合成与代码级验证，实现更准确、可泛化、渐进验证的检测。
- SWE-bench 类基准通常按共同构建流水线生成：每个 PR 通过从 PR 描述提取问题引用与链接问题配对，问题描述作为问题陈述，PR 补丁作为测试预言；由于大型仓库开发与维护的固有复杂性，此类 PR-问题配对在实践中常错配。
- SWE-Gym 与 SWE-bench Multilingual 上的实验显示 PAIChecker 在全部四个 LLM 骨干上取得最佳性能，二元准确率分别达 92.12% 与 91.67%。

## 正文

论文编号：arXiv:2607.28587v2（更新类型：replace-cross）。以下为摘要全文翻译。

SWE-bench 类基准被广泛用于评估 LLM 的问题解决能力。它们通常遵循一个共同的构建流水线：每个 PR（拉取请求）通过从 PR 描述提取问题引用与其链接的问题配对；问题描述用作问题陈述，PR 补丁作为测试预言。然而，由于开发与维护大型仓库的固有复杂性，此类 PR-问题配对在实践中常常错配。在本工作中，我们系统研究 SWE-bench Verified 实例，发现 13.6% 在五种模式、十一个细粒度场景中表现出错配。为在未来实现这些基准的可靠、可扩展构建，我们提出 PAIChecker，一个检查 SWE-bench 类基准中 PR-问题错配的多智能体系统。具体而言，PAIChecker 采用三阶段设计，结合特定模式识别、跨智能体标签合成与代码级验证，从而支持更准确、可泛化且渐进验证的检测。在 SWE-Gym 与 SWE-bench Multilingual 上的实验表明，PAIChecker 在全部四个 LLM 骨干上取得最佳性能，二元准确率分别达到 92.12% 与 91.67%。

## 关键词

#SWE-bench #PR-问题错配 #多智能体 #基准质量
