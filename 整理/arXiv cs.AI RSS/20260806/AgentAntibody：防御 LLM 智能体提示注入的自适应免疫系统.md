---
published: 20260806
title: "AgentAntibody：防御 LLM 智能体提示注入的自适应免疫系统"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/AgentAntibody- An Adaptive Immune System for Defending LLM Agents against Prompt Injection.md"
source_note: "[[信息源/arXiv cs.AI RSS/AgentAntibody- An Adaptive Immune System for Defending LLM Agents against Prompt Injection]]"
source_sha256: 4f8914a6ffae6a4c8bfe582c40a692688c2fe731b78a5bc040c592212acd7e7f
original_url: "https://arxiv.org/abs/2608.04053"
processed: 2026-08-06
language: zh-CN

---

# AgentAntibody：防御 LLM 智能体提示注入的自适应免疫系统

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shihao Weng, Yang Feng, Xiaofei Xie, Jiongchi Yu
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04053)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/AgentAntibody- An Adaptive Immune System for Defending LLM Agents against Prompt Injection|查看原始文件]]

## 摘要

- 提示注入仍是 LLM 智能体的关键威胁，但现有防御将每个任务视为自包含问题，独立于先前遭遇；实践中用户请求常欠指定，注入可利用此模糊性。
- 本文受自适应免疫启发，提出 AgentAntibody，为 LLM 智能体配备自我进化的提示注入免疫系统：将不断演进的对用户安全边界的理解表示为持久的抗体库，运行时识别威胁并发动相应免疫响应。
- 跨三个基准和四个骨干 LLM 的广泛实验表明，通过经验学习用户边界，AgentAntibody 在阻止有害行动同时保留合法任务完成方面优于现有防御，即使有害和合法行动都与所述任务兼容。

## 正文

提示注入仍是 LLM 智能体的关键威胁，然而现有防御将每个任务视为自包含问题，独立于先前遭遇。实践中，用户请求往往欠指定：它们描述期望结果而不完全指定可接受行为。注入可以利用这种模糊性，使智能体以用户会拒绝的方式完成任务。随着用户期望通过具体案例变得更清晰，防御应从每次遭遇学习并将其应用到下一次。受自适应免疫启发，我们提出 AgentAntibody，为 LLM 智能体配备自我进化的提示注入免疫系统。AgentAntibody 将对用户安全边界的不断演进的理解表示为持久抗体库。运行时，该库识别对该边界的威胁并发动相应免疫响应。跨遭遇，它演进以强化智能体对未来攻击的免疫力。跨三个基准和四个骨干 LLM 的广泛实验表明，通过经验学习用户边界，AgentAntibody 在防止有害行动同时保留合法任务完成方面优于现有防御，即使有害和合法行动都与所述任务兼容。

## 关键词

#提示注入 #免疫系统 #LLM智能体 #安全 #arXiv