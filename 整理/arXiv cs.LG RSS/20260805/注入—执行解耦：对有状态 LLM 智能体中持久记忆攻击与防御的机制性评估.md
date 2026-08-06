---
published: 2026-08-05
title: "注入—执行解耦：对有状态 LLM 智能体中持久记忆攻击与防御的机制性评估"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses.md"
source_note: "[[信息源/arXiv cs.LG RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses.]]"
source_sha256: 4d109aa7bf9b3dc51d518889e15b436759fd75a64e7f5bce376a0b5a46c6b1b6
original_url: "https://arxiv.org/abs/2605.08442"
processed: 2026-08-05
language: zh-CN
---

# 注入—执行解耦：对有状态 LLM 智能体中持久记忆攻击与防御的机制性评估

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jun Wen Leong
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.08442)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Injection-Execution Dissociation- A Mechanistic Evaluation of Persistent Memory Attacks and Defenses.|查看原始文件]]

## 摘要

- 发现提示注入成功与工具执行成功是可分离的安全性质：阻止注入的防御不一定阻止执行，反之亦然，称为"注入—执行解耦"。
- 在具有持久记忆的 LLM 智能体中，恶意指令以超过 97.5% 的比率被存储，但下游执行范围仅为 0% 到 95%，与存储率无相关性；这重塑了威胁模型：仅阻止存储并不足够，阻止执行需要结构性强制记忆摄入与动作执行之间的权威边界。
- 通过 5,040 次全因子实验（九个开源模型，每条件 N=40）证实：在四个架构层评估六种防御，针对通过 RAG 检索跨会话边界持续的延迟触发攻击；防御有效性由防御相对攻击权威边界的位置决定，而非分类器质量。
- 只有 Memory Sandbox——一种在工具层把召回记忆与可执行上下文结构性隔离的防御——在九分之八的模型上把攻击成功率降至 0%；推理模式消融揭示双重解耦：没有单一 schema 层干预能同时安全覆盖推理与非推理模型类别。
- 载入语料前沿评估（21 个模型、3 家提供商；N=40 基础，旗舰模型补足至 N=172）揭示供应商相关模式：Anthropic 主要在注入处拦截，OpenAI 在执行处拦截且各代加固程度不同，一个预发布 Gemini 端点在多数字中发生数据外泄。
- 存储但休眠的载荷在共享记忆部署中构成组合式供应链风险。

## 正文

论文编号：arXiv:2605.08442v5（更新类型：replace-cross）。以下为摘要全文翻译。

我们发现提示注入成功与工具执行成功是可分离的安全性质：阻止注入的防御不一定阻止执行，反之亦然。我们称之为注入—执行解耦。在具有持久记忆的 LLM 智能体中，恶意指令以超过 97.5% 的比率被存储，然而下游执行范围从 0% 到 95%，与存储率没有相关性。这重塑了威胁模型：仅阻止存储是不够的，阻止执行需要结构性强制记忆摄入与动作执行之间的权威边界。

我们通过一个 5,040 次运行的全因子实验证实了这一点，该实验跨九个开源模型（每条件 N=40），在四个架构层评估六种防御，针对通过 RAG 检索跨会话边界持续的延迟触发攻击。防御有效性由防御相对于攻击权威边界所处的位置决定，而非分类器质量。只有 Memory Sandbox——一种在工具层把召回记忆与可执行上下文结构性隔离的防御——在九分之八的模型上把攻击成功率降至 0%。推理模式消融揭示了一种双重解耦：没有单一的 schema 层干预能在推理与非推理模型类别上同时安全。

一项载入语料前沿评估（21 个模型、3 家提供商；N=40 基础，旗舰模型补足至 N=172）揭示了供应商相关模式：Anthropic 主要在注入处拦截，OpenAI 在执行处拦截且各代加固程度可变，而一个预发布 Gemini 端点在多数字的运行中发生数据外泄。存储但休眠的载荷在共享记忆部署中构成组合式供应链风险。

## 关键词

#提示注入 #LLM安全 #持久记忆 #智能体防御 #供应链风险
