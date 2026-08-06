---
title: "Lean Refactor：通过智能体策略搜索实现多目标可控证明优化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search.md"
source_note: "[[信息源/arXiv cs.LG RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search.]]"
source_sha256: 39cb179b26ff8323cb441c665469b02a9ed2c504dd13b11f74ce13115913fa41
original_url: "https://arxiv.org/abs/2605.20244"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# Lean Refactor：通过智能体策略搜索实现多目标可控证明优化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jialin Lu、Soonho Kong、Rodrigo Stehling、Kaiyu Yang、Zhangyang Wang、Weiran Sun、Wuyang Chen
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.20244)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Lean Refactor- Multi-Objective Controllable Proof Optimization via Agentic Strategy Search.|查看原始文件]]

## 摘要

- 提出 Lean Refactor，一个即插即用的检索增强智能体框架，用于多目标、可控、版本鲁棒的 Lean 证明重构。
- LLM 生成的证明以"正确但冗长"著称，且跨库版本脆弱，但现有重构工作忽视了三个实践挑战：1) Lean 重构本质上是多目标的（证明长度、编译成本与版本兼容性常常相互冲突）；2) Lean 仓库兼容性脆弱，而 LLM 发布不了解 Lean/Mathlib 版本；3) 基于训练的流水线随每次新 LLM 发布需要反复微调，既无法随模型更替扩展，也无法随 Lean 发布周期扩展。
- Lean Refactor 用来自精选多目标重构策略数据库的检索引导冻结的智能体 LLM，每条策略都密集标注元数据（如支持的 Lean/Mathlib 版本与预期编译成本降低）。
- 实验显示：竞赛基准上 token 级压缩超过 70%，研究仓库上超过 20%，编译时间最多降低 60%，优于先前工作与 Claude Code。
- 版本过滤检索进一步改善目标 Lean 版本上的压缩；重构后的 miniF2F 证明对未来 Lean 发布表现出比未重构对应物更强的零样本版本迁移能力。

## 正文

论文编号：arXiv:2605.20244v2（更新类型：replace-cross）。以下为摘要全文翻译。

我们提出 Lean Refactor，一个即插即用的检索增强智能体框架，用于多目标、可控、版本鲁棒的 Lean 证明重构。LLM 生成的证明以"正确但冗长"著称，且跨库版本脆弱，然而现有重构工作忽视了三个实践挑战：1) Lean 重构本质上是多目标的（证明长度、编译成本与版本兼容性常常处于紧张关系中）；2) Lean 仓库兼容性脆弱，而 LLM 发布不了解 Lean/Mathlib 版本；3) 基于训练的流水线要求随每次新 LLM 发布反复微调，既不能随模型更替扩展，也不能随 Lean 的发布周期扩展。Lean Refactor 用来自精选多目标重构策略数据库的检索引导一个冻结的智能体 LLM，每条策略都密集标注元数据，如支持的 Lean/Mathlib 版本与预期的编译成本降低。实验表明，在竞赛基准上 token 级压缩超过 70%，在研究仓库上超过 20%，编译时间最多降低 60%，优于先前工作和 Claude Code。版本过滤检索进一步改善了目标 Lean 版本上的压缩，而重构后的 miniF2F 证明对未来 Lean 发布表现出比未重构对应物更强的零样本版本迁移能力。

## 关键词

#Lean #形式证明 #智能体 #检索增强 #证明重构
