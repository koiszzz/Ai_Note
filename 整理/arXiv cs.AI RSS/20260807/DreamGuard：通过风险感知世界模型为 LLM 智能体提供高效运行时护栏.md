---
published: 2026-08-07
title: "DreamGuard：通过风险感知世界模型为 LLM 智能体提供高效运行时护栏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DreamGuard- Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model.md"
source_note: "[[信息源/arXiv cs.AI RSS/DreamGuard- Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model]]"
source_sha256: 8eb726ee4397527cd405daa8472e30c81a07c961afe02ec6a9d5cf86346f0cfc
original_url: "https://arxiv.org/abs/2608.05695"
processed: 2026-08-07
language: zh-CN
---

# DreamGuard：通过风险感知世界模型为 LLM 智能体提供高效运行时护栏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wenhao Lin, Chenyu Yu, Xingwei Lin, Sicong Cao, Xiang Chen, Lei Xue, Le Yu, Letian Sha, Chunming Wu
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05695)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DreamGuard- Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model|查看原始文件]]

## 摘要

- 随着大语言模型（LLM）智能体越来越多地调用外部工具并与真实世界系统交互，不安全动作可能对外部状态、用户数据与下游服务造成不可逆后果。
- 近期运行时护栏通过在执行前检查提议动作缓解此类风险，但许多仍是反应式的：主要评估当前动作的表观安全性，缺乏风险如何在轨迹中演化的显式模型；该局限为长时程风险造成关键盲区——单独看良性的动作可逐渐将智能体漂移到危险状态。
- 提出 DreamGuard：围绕风险感知世界模型构建的 LLM 智能体主动护栏——世界模型在轨迹上维护紧凑循环潜在状态，预测未来潜在状态，从中导出即时危险与前缀风险证据，并在执行前将这些多视野信号融合进干预决策。
- 在四个基准与在线护栏评估上的实验显示，DreamGuard 优于通用、反应式与主动护栏基线，在评估护栏中取得最佳安全-效用权衡，并保持每次调用平均 25ms 的端到端延迟。

## 正文

随着大语言模型（LLM）智能体越来越多地调用外部工具并与真实世界系统交互，不安全动作可能对外部状态、用户数据与下游服务造成不可逆后果。近期运行时护栏通过在执行前检查提议动作来缓解此类风险，但许多仍然是被动的：它们主要评估当前动作的表观安全性，缺乏风险如何在轨迹中演化的显式模型。这一局限为长时程风险创造了关键盲区，其中单独看良性的动作可以逐渐将智能体漂移向危险状态。作为回应，我们提出 DreamGuard，一个围绕风险感知世界模型构建的 LLM 智能体主动护栏。世界模型在轨迹上维护一个紧凑的循环潜在状态，并预测未来潜在状态，DreamGuard 从中导出即时危险与前缀风险证据。然后它在执行前将这些多视野信号融合为干预决策。在四个基准与在线护栏评估上的实验表明，DreamGuard 优于通用、反应式与主动护栏基线，在被评估护栏中实现最佳安全-效用权衡，并保持每次调用平均 25 ms 的端到端延迟。

## 关键词

#LLM智能体 #运行时护栏 #世界模型 #安全
