---
published: 20260806
title: "小芯片与 LLM 时代的硬件设计与安全"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Hardware Design and Security in the Era of Chiplets and LLMs.md"
source_note: "[[信息源/arXiv cs.AI RSS/Hardware Design and Security in the Era of Chiplets and LLMs]]"
source_sha256: 745b4e94c3d2fe96bbd70b0235bb3a1e1b267806035a1127b2fa0f3512875686
original_url: "https://arxiv.org/abs/2608.05063"
processed: 2026-08-06
language: zh-CN

---

# 小芯片与 LLM 时代的硬件设计与安全

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Johann Knechtel, Ozgur Sinanoglu, Paul V. Gratz, Ramesh Karri
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05063)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Hardware Design and Security in the Era of Chiplets and LLMs|查看原始文件]]

## 摘要

- 半导体行业正经历双重革命：向异构 2.5D 小芯片系统转变，以及将大语言模型（LLM）集成到电子设计自动化（EDA）流程；这些范式在良率、模块化、设计生产力等方面提供前所未有的收益，但急剧扩大硬件攻击面。
- 本文提供这些前沿的统一分析，涵盖从小芯片系统攻击（包括 LLM 加速硬件栈）跨架构、逻辑和物理层面，到针对 LLM 驱动 EDA 流水线的各种利用。
- 为保障小芯片系统，综述利用 2.5D 分割制造和有源中介层实现物理隔离信任根（RoT）架构的强大防御方法；为保障 LLM 驱动 EDA 流水线，先识别原生威胁再综述最先进防御技术；最后讨论 LLM 系统如何推进现代系统（包括小芯片）的硬件安全工作。

## 正文

半导体行业正经历双重革命：向异构 2.5D 小芯片（chiplet）系统转变，以及将大语言模型（LLM）集成到电子设计自动化（EDA）流程。这些范式在良率、模块化、设计生产力等方面提供前所未有的收益，但它们急剧扩大硬件攻击面。本文提供这些前沿的统一分析，涵盖从小芯片系统攻击（包括 LLM 加速硬件栈）跨架构、逻辑和物理层面，到针对 LLM 驱动 EDA 流水线的各种利用。为保障小芯片系统，我们综述一种强大的防御方法，利用 2.5D 分割制造和有源中介层实现物理隔离的信任根（Root of Trust，RoT）架构。为保障 LLM 驱动的 EDA 流水线，我们首先识别原生威胁，然后综述最先进的防御技术。最后，我们讨论 LLM 系统如何推进现代系统（包括小芯片）的硬件安全工作。

## 关键词

#小芯片 #硬件安全 #LLM #EDA #arXiv