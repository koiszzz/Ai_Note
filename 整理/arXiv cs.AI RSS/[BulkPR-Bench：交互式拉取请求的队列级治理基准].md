---
title: "BulkPR-Bench：交互式拉取请求的队列级治理基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/BulkPR-Bench- Benchmarking Queue-Level Governance of Interacting Pull Requests.md"
source_note: "[[信息源/arXiv cs.AI RSS/BulkPR-Bench- Benchmarking Queue-Level Governance of Interacting Pull Requests]]"
source_sha256: 3cf4e000518d1dbe5b1e2f7d442c7dfc65fc4253feb8b8c29a63568540109514
original_url: "https://arxiv.org/abs/2608.02685"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# BulkPR-Bench：交互式拉取请求的队列级治理基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02685)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/BulkPR-Bench- Benchmarking Queue-Level Governance of Interacting Pull Requests|查看原始文件]]

## 摘要

- 编程智能体基准越来越多地覆盖长时程、端到端和交互式开发，但通常仍只要求一个结果或一条固定变更序列。
- 顺序策略可以一次处理队列中的一个拉取请求（PR），但当排队的 PR 彼此交互时，要最大化安全交付，可能需要联合决定合并哪些变更以及合并顺序。
- 论文提出 BulkPR-Bench，这是一个可执行基准：智能体需要恢复具有后果的 PR 关系，并在滚动发布协议下，以可执行顺序返回一个规模尽可能大的安全子集。
- 基准包含来自 18 个真实仓库冻结快照的 581 个新编写候选 PR。逐状态注册的仓库执行（包括隐藏安全检查）用于验证真实关系图，精确预言机则计算最大安全子集。
- 主要指标关系交付分数（RDS）根据实际合并轨迹中的关系组，对安全交付和正确拒绝进行评分；全局安全门控产出（Global-SGY）则单独衡量实际整队列计划的严格交付。
- 在批大小 K=32 的缓冲主协议下，6 个模型中三个最高 RDS 估计值为 66.6%、62.0% 和 57.9%，而最强顺序基线为 53.1%。324 次模型运行中只有 8 次完整准确地完成队列；关键关系召回率为 35.2%—57.7%。
- 即使提供真实关系进行诊断，模型仍有明显提升空间；关系组上的收益尚未转化为可靠的整队列治理能力。

## 正文

编程智能体基准正在越来越多地覆盖长时程、端到端和交互式开发，但通常仍然只保留一个请求的结果，或要求遵循固定的变更序列。顺序策略可以一次处理拉取请求（PR）队列中的一个候选，但当队列中的 PR 彼此交互时，要最大化安全交付，可能需要联合决定哪些变更应该合并，以及合并的顺序。

本文提出 BulkPR-Bench，一个可执行的基准。在滚动发布协议下，智能体必须恢复具有实际后果的 PR 关系，并以可执行顺序返回规模尽可能大的安全子集。该测试套件包含来自 18 个真实仓库冻结快照的 581 个新编写候选 PR。

仓库按状态逐步执行，并包括隐藏的安全检查，用于验证真实的关系图；随后由精确预言机计算最大的安全子集。论文提出关系交付分数（Relational Delivery Score，RDS），根据实际合并轨迹中形成的关系组，对安全交付和正确拒绝进行评分；全局安全门控产出（Global Safety-Gated Yield，Global-SGY）则单独衡量实际整队列计划是否被严格交付。

在批大小 K=32 的缓冲主协议下，6 个模型中最高的三个 RDS 估计值分别为 66.6%、62.0% 和 57.9%，而最强顺序基线为 53.1%。324 次模型运行中只有 8 次能够准确完成整个队列。关键关系召回率介于 35.2% 和 57.7% 之间。即使在提供真实关系的诊断运行中，仍然可以看到很大的提升空间。因此，关系组层面的收益尚未转化为可靠的整队列治理能力。

## 关键词

#编程智能体 #拉取请求 #代码仓库治理 #基准测试 #合并规划 #安全交付
