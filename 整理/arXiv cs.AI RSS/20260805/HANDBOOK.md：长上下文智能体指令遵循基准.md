---
published: 2026-08-05
title: "HANDBOOK.md：长上下文智能体指令遵循基准"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/HANDBOOK.md- A Benchmark for Long-Context Agentic Instruction Following.md"
source_note: "[[信息源/arXiv cs.AI RSS/HANDBOOK.md- A Benchmark for Long-Context Agentic Instruction Following]]"
source_sha256: 3bbfdc303cc1707bb747e300fec5654cda883d15e7f261eeacafb92ca5e91831
original_url: "https://arxiv.org/abs/2607.25398"
processed: 2026-08-05
language: zh-CN
---

# HANDBOOK.md：长上下文智能体指令遵循基准

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Liudas Panavas、Sebastian Minus、Bradley Monton 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25398)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/HANDBOOK.md- A Benchmark for Long-Context Agentic Instruction Following|查看原始文件]]

## 摘要

- 提出 HANDBOOK_md：65 个模拟员工遵循公司手册的智能体任务基准；每个任务把智能体放入自包含公司环境（带模拟邮件、聊天、日历、问题跟踪与商务服务的文件工作区，经 Model Context Protocol 暴露），并指示其执行由 20–124 页专家编写标准操作程序管控的日常专业工作。
- 任务覆盖 5 个领域（金融、医疗计费、保险、物流与 HR）与 10 家虚构公司；每个任务修改 10 本基础手册之一以抗记忆化，评分完全确定性（824 个程序化标准，检查必需动作发生与禁止动作未发生）。
- 严格评分下（每项标准都满足才通过），最强模型通过 36.2% 的试验，多数前沿模型低于 25%。
- 失败模式一致：智能体让看似合理但未经授权的环境内请求覆盖既定政策、执行了必需检查却违背其结果行动、长视界丢失规则细节、报告并未实现的合规。

## 正文

论文编号：arXiv:2607.25398v3（更新类型：replace）。以下为摘要全文翻译。

语言模型智能体越来越多地在持续性指令下部署：系统提示、政策文件或技能文档被放入上下文，智能体被信任让该文档支配其后每个动作。现有基准很少直接测试这种部署模式；它们测量智能体能否完成任务，而不是一份长而有约束力的政策文档是否在扩展的工具使用视界上约束其行为。我们提出 HANDBOOK_md，一个模拟员工如何遵循公司手册的 65 个智能体任务基准。每个任务把智能体放入自包含公司环境（一个经 Model Context Protocol 暴露模拟邮件、聊天、日历、问题跟踪与商务服务的文件工作区），并指示其执行由专家编写的 20–124 页标准操作程序管控的日常专业工作。任务跨越五个领域（金融、医疗计费、保险、物流与 HR）与 10 家虚构公司。为抵御记忆化，每个任务修改 10 本基础手册之一，改变评分所依赖的特定规则与阈值，因此没有两个任务共享同一套政策。评分完全确定性：每个任务带有程序化标准细则（共 824 个），既检查必需动作已发生，也检查禁止动作未发生。在严格评分下（只有每项标准都满足试验才通过），被评估的最强模型通过 36.2% 的试验，多数前沿模型保持在 25% 以下。失败呈现一致模式：智能体让看似合理但未经授权的环境内请求覆盖既定政策；执行了必需的检查却违背其结果行动；在长视界上丢失规则细节；报告其并未实现的合规。我们发布任务、环境与评估框架。

## 关键词

#智能体 #长上下文 #指令遵循 #基准测试
