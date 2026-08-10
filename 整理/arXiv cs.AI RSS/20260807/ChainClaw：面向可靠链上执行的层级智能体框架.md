---
published: 2026-08-07
title: "ChainClaw：面向可靠链上执行的层级智能体框架"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/ChainClaw- A Layered Agent Framework for Reliable On-Chain Execution.md"
source_note: "[[信息源/arXiv cs.AI RSS/ChainClaw- A Layered Agent Framework for Reliable On-Chain Execution]]"
source_sha256: a3286b087327b033bcb1ff881aecaad5e7a7118f9b729cd1debd02d2b0eac6bf
original_url: "https://arxiv.org/abs/2608.05790"
processed: 2026-08-07
language: zh-CN
---

# ChainClaw：面向可靠链上执行的层级智能体框架

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jiacheng Wei, Zhaoxin Fan, Xin Wen, Yuqin Lan, Dongrun Li, Wenjun Wu, Faguo Wu, Xiao Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05790)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/ChainClaw- A Layered Agent Framework for Reliable On-Chain Execution|查看原始文件]]

## 摘要

- 通用大语言模型智能体在工具增强任务上表现强劲，但其依赖的假设在区块链环境中失效；链上执行是有状态、对抗性且经济上不可逆的，暴露三个根本缺口：反应性（Reactivity）、不可逆性（Irreversibility）与可观察性（Observability）。
- 提出 ChainClaw：构建于 OpenClaw 之上的区块链原生智能体框架，通过层级架构解决全部三个缺口——事件驱动编排层、基于模拟的安全智能层与链上监控运行时层，由跨层记忆子系统统一。
- ChainClaw 通过事件摄取与模拟反馈弥合反应性缺口，通过带交易模拟与动作防护的预执行安全流水线弥合不可逆性缺口，通过链上读取适配器与交易监控器弥合可观察性缺口。
- 在覆盖四类七项任务与五个维度的专用基准上评估，ChainClaw 在安全性与任务完成上一致优于代表基线。

## 正文

通用大语言模型智能体在工具增强任务上取得了强劲性能，但它们依赖的假设在区块链环境中失效。链上执行是有状态（stateful）、对抗性（adversarial）且经济上不可逆的（economically irreversible），暴露三个根本缺口：反应性（Reactivity）、不可逆性（Irreversibility）与可观察性（Observability）。我们提出 ChainClaw，一个构建于 OpenClaw 之上的区块链原生智能体框架，通过层级架构解决全部三个缺口：事件驱动编排层、基于模拟的安全智能层与链上监控运行时层，由跨层记忆子系统统一。ChainClaw 通过事件摄取与模拟反馈弥合反应性缺口，通过带交易模拟与动作防护的预执行安全流水线弥合不可逆性缺口，通过链上读取适配器与交易监控器弥合可观察性缺口。我们在覆盖四类七项任务与五个维度的专用基准上评估 ChainClaw。ChainClaw 在安全性与任务完成上一致优于代表基线。

## 关键词

#区块链 #智能体 #链上执行 #安全
