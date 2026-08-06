---
title: "注入-执行解离：有状态 LLM 智能体中持久记忆攻击与防御的机制评估"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses.md"
source_note: "[[信息源/arXiv cs.AI RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses]]"
source_sha256: 70647110e6d050c77902d2b00a0d1207251077ed634d0423b43877b8b85e5d10
original_url: "https://arxiv.org/abs/2605.08442"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 注入-执行解离：有状态 LLM 智能体中持久记忆攻击与防御的机制评估

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jun Wen Leong
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.08442)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses|查看原始文件]]

## 摘要

- 发现提示注入成功与工具执行成功是可分离的安全属性：阻止注入的防御不一定阻止执行，反之亦然；在带持久记忆的 LLM 智能体中，恶意指令存储率超过 97.5%，但下游执行率从 0% 到 95% 不等，与存储率无相关性。
- 5,040 次运行的因子实验（9 个开源模型，每条件 N=40）评估四个架构层的六种防御，针对经 RAG 检索跨会话边界持续的延迟触发攻击；防御有效性由防御相对攻击权威边界的位置决定，而非分类器质量。
- 只有 Memory Sandbox（工具层防御，从结构上把召回记忆与可执行上下文隔离）把 9 个模型中的 8 个的攻击成功率降至 0%；推理模式消融揭示双重解离：没有任何单一模式层干预在推理与非推理模型类别上都安全。
- 前沿语料评估（21 个模型、3 家供应商）揭示供应商相关模式：Anthropic 主要在注入层阻止，OpenAI 在执行层阻止（带可变代际加固），预发布 Gemini 端点在多数运行中发生数据外泄；存储但休眠的载荷在共享记忆部署中构成组合式供应链风险。

## 正文

论文编号：arXiv:2605.08442v5（更新类型：replace-cross）。以下为摘要全文翻译。

我们发现提示注入成功与工具执行成功是可分离的安全属性：阻止注入的防御不一定阻止执行，反之亦然。我们称之为注入-执行解离（injection-execution dissociation）。在带持久记忆的 LLM 智能体中，恶意指令的存储率超过 97.5%，而下游执行率从 0% 到 95% 不等，与存储率没有相关性。这重构了威胁模型：仅阻止存储是不够的，阻止执行需要在结构上强制记忆摄取与动作执行之间的权威边界。我们通过一个 5,040 次运行的因子实验证实这一点：9 个开源模型（每条件 N=40），评估四个架构层的六种防御，针对通过 RAG 检索跨会话边界持续的延迟触发攻击。防御有效性由防御相对攻击权威边界的位置决定，而非分类器质量。只有 Memory Sandbox——一种工具层防御，从结构上把召回记忆与可执行上下文隔离——把 9 个模型中的 8 个的攻击成功率降至 0%。推理模式消融揭示双重解离：没有任何单一模式层干预在推理与非推理模型类别上都是安全的。加载语料的前沿评估（21 个模型、3 家供应商；N=40 基础，头条模型加至 N=172）揭示供应商相关的模式：Anthropic 主要在注入层阻止，OpenAI 在执行层阻止且代际加固可变，而预发布 Gemini 端点在多数运行中发生数据外泄。存储但休眠的载荷在共享记忆部署中构成组合式供应链风险。

## 关键词

#提示注入 #持久记忆 #LLM智能体 #安全防御
