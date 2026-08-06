---
title: "TraceCompiler：技能引导挖掘并把 LLM 智能体轨迹编译为基本确定性工作流"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor.md"
source_note: "[[信息源/arXiv cs.LG RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor.]]"
source_sha256: 6dd482c72d3c2b23b75a27a278e99b547ce6b1da7f0b2eeb73a7d4618fb6ecdf
original_url: "https://arxiv.org/abs/2608.02680"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TraceCompiler：技能引导挖掘并把 LLM 智能体轨迹编译为基本确定性工作流

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Salma El Yadouni（EPFL）、Guanyi Li（Binome Technologies）
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02680)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/TraceCompiler- Skill-Guided Mining and Compilation of LLM Agent Traces into Mostly Deterministic Wor.|查看原始文件]]

## 摘要

- 使用工具的 LM 智能体反复重新发现它们已执行过的流程，产生混合可复用结构与重试、探索、意外顺序与重复查找的轨迹。
- 提出 TraceCompiler，一个技能引导系统：挖掘噪声智能体轨迹簇，编译为可执行、基本确定性的工作流。
- 只在消费者参数包含唯一可归因于早期生产者的值时接纳跨工具依赖；每条硬边携带可审计证据元组，歧义关系标记为疑似且不施加排序约束。
- 绑定分类为常量、用户输入、复制输出、变换或残余 LLM 决策。
- T1 上规则机械化形式在训练划分 15,775 条 def-use 边以 0.928 精度与 0.943 召回恢复生产者—消费者依赖，对照邻接 0.711 F1 与相同数据上频率阈值化直接跟随度量 0.712；编译技能盲跑在 250 条边达 0.992。
- AppWorld 上在确定性模拟器中重放发布轨迹以恢复掩码返回值，对照 563 条 token 边以 0.993 精度测量规则——自洽检查，因为重放由相关启发式注入 token。
- 编译两个重复意图：Venmo 请求付款意图把 34 次观测 API 调用减少到 11 次运行时调用，在留一执行下对基准自身状态测试通过 21 个中的 15 个（失败折叠升级而非行动，因为所需分支从未被观测）；Spotify/Todoist 意图被编译器正确拒绝编译，因为不可逆副作用欠确定。
- 测量调用减少但不测量离线编译成本，因此不声明净效率结果。

## 正文

论文编号：arXiv:2608.02680v1（更新类型：cross）。以下为摘要全文翻译。

使用工具的 LM 智能体会反复重新发现它们已经执行过的流程，产生把可复用结构与重试、探索、意外顺序与重复查找混合的轨迹。我们提出 TraceCompiler，一个技能引导系统，挖掘噪声智能体轨迹簇并把它们编译为可执行、基本确定性的工作流。它只在消费者参数包含可唯一归因于早期生产者的值时接纳跨工具依赖；每条硬边携带一个可审计的证据元组，歧义关系被标记为疑似且不施加排序约束。绑定被分类为常量、用户输入、复制输出、变换或残余的 LLM 决策。在 T1 上，该规则的一种机械化形式在其训练划分的 15,775 条 def-use 边上以 0.928 的精度与 0.943 的召回恢复生产者—消费者依赖，对照邻接度量的 0.711 F1 与相同数据上频率阈值化直接跟随度量的 0.712；编译技能盲跑在其中的 250 条边上达到 0.992。在 AppWorld 上，我们在确定性模拟器中重放已发布轨迹以恢复掩码的返回值，并在 563 条 token 边上以 0.993 的精度测量该规则——这是一个自洽检查，因为重放由相关启发式注入 token。我们编译两个重复意图：一个 Venmo 请求付款意图把 34 次观测的 API 调用减少到 11 次运行时调用，并在针对基准自身状态测试的留一执行下通过 21 个中的 15 个，失败的折叠升级而非行动，因为其所需分支从未被观测到；一个 Spotify/Todoist 意图被编译器正确拒绝编译，因为一个不可逆的副作用欠确定。我们测量调用减少但不测量离线编译成本，因此不声明净效率结果。

## 关键词

#LLM智能体 #工作流编译 #轨迹挖掘 #工具使用 #依赖恢复
