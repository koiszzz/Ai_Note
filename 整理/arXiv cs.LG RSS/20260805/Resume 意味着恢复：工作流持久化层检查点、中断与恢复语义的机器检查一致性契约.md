---
published: 2026-08-05
title: "Resume 意味着恢复：工作流持久化层检查点、中断与恢复语义的机器检查一致性契约"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Resume Means Resume- A Machine-Checked Conformance Contract for Checkpoint, Interrupt, and Resume Se.md"
source_note: "[[信息源/arXiv cs.LG RSS/Resume Means Resume- A Machine-Checked Conformance Contract for Checkpoint, Interrupt, and Resume Se.]]"
source_sha256: 06f2e2b894ed118ba8d6def4d08a4cab1f5d4cd76b49ac03d0c05daff47d4c66
original_url: "https://arxiv.org/abs/2608.03836"
processed: 2026-08-05
language: zh-CN
---

# Resume 意味着恢复：工作流持久化层检查点、中断与恢复语义的机器检查一致性契约

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Sajjad Khan
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03836)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Resume Means Resume- A Machine-Checked Conformance Contract for Checkpoint, Interrupt, and Resume Se.|查看原始文件]]

## 摘要

- 持久化执行状态以便运行可被中断、挺过崩溃并继续的框架，必须决定"恢复"对已经触发的效应意味着什么；五个广泛部署的智能体工作流框架回答各不相同，没有一个暴露机器可检查契约，且行为甚至违反其声称的片段。
- RESUME CONTRACT 在持久化 API 上陈述六个性质（前缀延续、效应恰好一次、分叉确定性、检查点有效性、消费一次、恢复确定性），加上分叉意图与活性义务；TLA+ 模型穷举检查参考语义，在缩放边界下不变（740 万个状态）。
- 39 单元故障矩阵给出独立性所需的分离模型，消费一次被拆分，其消费条款独立于其他六个。
- 确定性的、无 LLM 的测试装置在固定版本上测量它们：LangGraph 1.2.9 持久记录第二个恢复值却从不查阅它、静默持久化 schema 无效状态、并在真实 SIGKILL 后重执行持久记录的工作——在中断间恰好一次、崩溃间至少一次，出现在同一 API 上。
- CrewAI 1.15.2 重执行已完成的有效应方法，违背其书面声明；pydantic-graph 1.x 无法在节点中途崩溃后恢复；没有两个探测框架共享一致性画像。
- 消费一次在顺序上成立，在并发投递下失败：k 个进程恢复一个停放的中断会触发门控效应 k 次，40 个单元中 36 个饱和度为 1.0，且失败跨主机。
- REMIT，一个参考排序器，其 Verus 验证的恢复核心与发布的可执行文件逐行相同，修复分叉与有效性单元；跨进程单元在读路径修复，且该修复随产品发布：一个可选门在共享存储中断言消费，为单个竞争进程服务并在任何节点执行前拒绝其余。

## 正文

论文编号：arXiv:2608.03836v1（更新类型：new）。以下为摘要全文翻译。

一个持久化执行状态以便运行可以被中断、挺过崩溃并继续的框架，必须决定"恢复"对已经触发的效应意味着什么。五个广泛部署的智能体工作流框架回答各不相同，没有一个暴露机器可检查的契约，且行为甚至违反它们声明的片段。RESUME CONTRACT 在持久化 API 上陈述六个性质（前缀延续、效应恰好一次、分叉确定性、检查点有效性、消费一次、恢复确定性），加上分叉意图与活性义务。一个 TLA+ 模型穷举检查参考语义，在缩放边界下不变（740 万个状态）；一个 39 单元的故障矩阵产生独立性所需的分离模型，消费一次被拆分，其消费条款独立于其他六个。一个确定性、无 LLM 的测试装置在固定版本上测量它们。LangGraph 1.2.9 持久记录第二个恢复值却从不查阅它，静默持久化 schema 无效的状态，并在真实 SIGKILL 后重执行持久记录的工作：在中断之间恰好一次，在崩溃之间至少一次，出现在同一个 API 上。CrewAI 1.15.2 重执行已完成的含效应方法，违背其书面声明；pydantic-graph 1.x 无法在节点中途崩溃后恢复；没有两个被探测的框架共享一致性画像。消费一次在顺序上成立，在并发投递下失败：k 个进程恢复一个停放的中断会触发门控效应 k 次，40 个单元中 36 个饱和度为 1.0，且失败跨越主机。REMIT，一个参考排序器，其 Verus 验证的恢复核心与发布的可执行文件逐行相同，修复了分叉与有效性单元。跨进程单元在读路径被修复，且该修复随产品发布：一个可选门在共享存储中断言消费，为单个竞争进程服务，并在任何节点执行前拒绝其余进程。

## 关键词

#工作流持久化 #检查点 #恢复语义 #形式验证 #TLA+
