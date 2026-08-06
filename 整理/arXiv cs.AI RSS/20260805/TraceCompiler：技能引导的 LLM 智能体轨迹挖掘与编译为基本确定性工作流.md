---
published: 2026-08-05
title: "TraceCompiler：技能引导的 LLM 智能体轨迹挖掘与编译为基本确定性工作流"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor.md"
source_note: "[[信息源/arXiv cs.AI RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor]]"
source_sha256: 03d7de1e49ae495b9bd4bd8561a0f41400ba7ee1e49e4ed96315b79a853a3e88
original_url: "https://arxiv.org/abs/2608.02680"
processed: 2026-08-05
language: zh-CN
---

# TraceCompiler：技能引导的 LLM 智能体轨迹挖掘与编译为基本确定性工作流

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Salma El Yadouni、Guanyi Li
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02680)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor|查看原始文件]]

## 摘要

- 提出 TraceCompiler，技能引导系统：挖掘带噪智能体轨迹簇并编译为可执行、基本确定性的工作流——仅当消费者参数包含可唯一归因于更早生产者的值时接受跨工具依赖；每条硬边携带可审计证据元组，歧义关系标记为疑似且不施加排序约束；绑定分类为常量、用户输入、复制输出、变换或残差 LLM 决策。
- 工具使用语言模型智能体反复重新发现它们已执行的过程，产生混合可复用结构与重试、探索、意外排序与重复查找的轨迹。
- T1 上（规则机械化形式）训练拆分 15,775 条 def-use 边以 0.928 精度与 0.943 召回恢复生产者-消费者依赖（邻接法 F1 0.711、频率阈值直接跟随法 0.712）；编译技能盲跑在这些边中的 250 条上达 0.992；AppWorld 上在确定性模拟器中重放已发布轨迹恢复掩码返回值，对 563 条 token 边以 0.993 精度测量规则（自洽性检查）。
- 编译两个重复意图：Venmo 汇款意图把 34 次观测 API 调用减为 11 次运行时调用，留一执行对基准自身状态测试 21 中通过 15（失败折因必需分支从未被观测而升级而非行动）；Spotify/Todoist 意图被正确拒绝编译（不可逆副作用未确定）；测量调用减少而非离线编译成本，因此不主张净效率结果。

## 正文

论文编号：arXiv:2608.02680v1（更新类型：cross）。以下为摘要全文翻译。

工具使用语言模型智能体反复重新发现它们已经执行的过程，产生混合可复用结构与重试、探索、意外排序与重复查找的轨迹。我们提出 TraceCompiler，一个技能引导系统：挖掘带噪智能体轨迹簇，并把它们编译为可执行、基本确定性的工作流。它仅在消费者参数包含可唯一归因于更早生产者的值时接受跨工具依赖；每条硬边携带可审计的证据元组，歧义关系被标记为疑似且不施加排序约束。绑定被分类为常量、用户输入、复制输出、变换或残差 LLM 决策。在 T1 上（规则的机械化形式），训练拆分的 15,775 条 def-use 边以 0.928 精度与 0.943 召回恢复生产者-消费者依赖（对照：邻接法 F1 0.711、频率阈值直接跟随法 0.712）；编译技能盲跑在其 250 条边上达到 0.992。在 AppWorld 上，我们在确定性模拟器中重放已发布轨迹以恢复掩码返回值，并对 563 条 token 边以 0.993 精度测量规则——一个自洽性检查，因为重放通过相关启发式注入 token。我们编译两个重复意图：一个 Venmo 汇款意图把 34 次观测 API 调用减少为 11 次运行时调用，并在对基准自身状态测试的留一执行中通过 21 中的 15，失败的折因为其必需分支从未被观测而升级而非行动；一个 Spotify/Todoist 意图被编译器正确拒绝编译，因为不可逆副作用未被确定。我们测量调用减少，但不测量离线编译成本，因此不主张净效率结果。

## 关键词

#工作流编译 #智能体轨迹 #依赖挖掘 #确定性
