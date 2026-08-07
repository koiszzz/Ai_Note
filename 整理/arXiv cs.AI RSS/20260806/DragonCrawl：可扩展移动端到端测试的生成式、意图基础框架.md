---
published: 20260806
title: "DragonCrawl：可扩展移动端到端测试的生成式、意图基础框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DragonCrawl- A Generative, Intent-Based Framework for Scalable Mobile End-to-End Testing.md"
source_note: "[[信息源/arXiv cs.AI RSS/DragonCrawl- A Generative, Intent-Based Framework for Scalable Mobile End-to-End Testing]]"
source_sha256: e8229906768ff17a5ffe454f861eef81c4ef3e22762cc6dce79c7cd3f4ead4bf
original_url: "https://arxiv.org/abs/2607.28750"
processed: 2026-08-06
language: zh-CN

---

# DragonCrawl：可扩展移动端到端测试的生成式、意图基础框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sowjanya Puligadda, Mengdie Zhang, Ali Zamani, Dhruva Dixith Kurra, Eric Chen, Juan Marcano
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28750)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DragonCrawl- A Generative, Intent-Based Framework for Scalable Mobile End-to-End Testing|查看原始文件]]

## 摘要

- 随着移动应用复杂性增长，传统端到端（E2E）测试框架在 UI 波动、维护开销和跨平台可扩展性上挣扎；本文呈现 DragonCrawl，一个用于持续回归测试的 AI 驱动移动测试系统，已从基于嵌入的相似性匹配演进到使用大语言模型的生成式意图基础推理。
- 与先前聚焦探索性测试和崩溃检测的基于 LLM 的测试研究不同，DragonCrawl 在每次代码变更上验证特定用户流，阻止破坏关键功能的提交；利用 GPT-4o 多模态能力，在 CI/CD 流水线连续运行的 1,013 个自动化测试中实现 iOS 91.6% 和 Android 92.2% 通过率。
- 系统将测试入门时间从 96-120 小时降至 4 小时以下，估计节省 27 个开发者年的测试维护努力；介绍从 V1（语义嵌入匹配）到 V2（生成式意图基础推理）的架构演进。

## 正文

随着移动应用复杂性增长，传统端到端（E2E）测试框架在 UI 波动、维护开销和跨平台可扩展性上挣扎。本文呈现 DragonCrawl，一个用于持续回归测试的 AI 驱动移动测试系统，已从基于嵌入的相似性匹配演进到使用大语言模型的生成式意图基础推理。与先前聚焦探索性测试和崩溃检测的基于 LLM 的测试研究不同，DragonCrawl 在每次代码变更上验证特定用户流，阻止破坏关键功能的提交。通过利用 GPT-4o 的多模态能力，DragonCrawl 在 CI/CD 流水线连续运行的 1,013 个自动化测试中实现 iOS 91.6% 和 Android 92.2% 的通过率。系统将测试入门时间从 96-120 小时降至 4 小时以下，并估计节省 27 个开发者年的测试维护努力。我们介绍从 V1（语义嵌入匹配）到 V2（生成式意图基础推理）的架构演进，讨论 token 爆炸和内存约束等实现挑战，并报告生产部署的运营经验。用于端状态检测的多模态视觉集成和用于后端状态转换的工具调用，实现连接 UI 交互与系统状态的全面回归测试。我们的结果表明，AI 驱动测试可保持稳定性同时消除传统自动化测试的脆弱性，实现大规模持续质量保证。

## 关键词

#移动测试 #端到端测试 #生成式AI #回归测试 #arXiv