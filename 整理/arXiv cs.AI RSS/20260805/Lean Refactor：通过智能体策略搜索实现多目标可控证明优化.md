---
published: 2026-08-05
title: "Lean Refactor：通过智能体策略搜索实现多目标可控证明优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search.md"
source_note: "[[信息源/arXiv cs.AI RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search]]"
source_sha256: 0c1bc38b37cced4534a406d987ef2593f370a7959a133d67e80cbcee2910a48b
original_url: "https://arxiv.org/abs/2605.20244"
processed: 2026-08-05
language: zh-CN
---

# Lean Refactor：通过智能体策略搜索实现多目标可控证明优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jialin Lu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.20244)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search|查看原始文件]]

## 摘要

- 提出 Lean Refactor，用于 Lean 证明多目标、可控、版本稳健重构的即插即用检索增强智能体框架。
- 针对三个实际挑战：Lean 重构天然多目标（证明长度、编译成本与版本兼容性常相互冲突）；Lean 仓库兼容性脆弱而 LLM 发布不感知 Lean/Mathlib 版本；基于训练的流水线每次新 LLM 发布都需重复微调。
- 用策划的多目标重构策略数据库的检索引导冻结的智能体 LLM，每条策略密集标注支持版本与预期编译成本降低等元数据。
- 实验：竞赛基准上 token 级压缩超 70%，研究仓库超 20%，编译时间最高降低 60%，优于以往工作与 Claude Code；版本过滤检索进一步改善目标 Lean 版本上的压缩，重构的 miniF2F 证明对未来的 Lean 发布表现出更强的零样本版本迁移。

## 正文

论文编号：arXiv:2605.20244v2（更新类型：replace-cross）。以下为摘要全文翻译。

我们提出 Lean Refactor，一个用于 Lean 证明多目标、可控、版本稳健重构的即插即用检索增强智能体框架。LLM 生成的证明以“正确但冗长”和跨库版本脆弱著称，然而现有重构工作忽视了三个实际挑战：1）Lean 重构天然是多目标的（证明长度、编译成本与版本兼容性往往相互冲突）；2）Lean 仓库兼容性脆弱，而 LLM 发布不感知 Lean/Mathlib 版本；3）基于训练的流水线要求每次新 LLM 发布都重复微调，既无法随模型更替扩展，也无法跟上 Lean 的发布周期。Lean Refactor 用来自策划的多目标重构策略数据库的检索引导冻结的智能体 LLM，每条策略密集标注了支持的 Lean/Mathlib 版本与预期编译成本降低等元数据。实验表明，在竞赛基准上 token 级压缩超过 70%，研究仓库上超过 20%，编译时间最高降低 60%，优于以往工作与 Claude Code。版本过滤检索进一步改善目标 Lean 版本上的压缩，而重构后的 miniF2F 证明相比未重构对应物，对未来 Lean 发布表现出更强的零样本版本迁移。

## 关键词

#形式化证明 #Lean #智能体 #证明重构
