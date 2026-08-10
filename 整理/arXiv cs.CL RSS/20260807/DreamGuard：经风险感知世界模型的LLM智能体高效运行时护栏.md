---
published: 2026-08-07
title: "DreamGuard：经风险感知世界模型的 LLM 智能体高效运行时护栏"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/DreamGuard- Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model.md"
source_note: "[[信息源/arXiv cs.CL RSS/DreamGuard- Efficient Runtime Guardrail for LLM Agents via Risk-Aware World Model]]"
source_sha256: 32f787303b6bcc9a34c7ecec6dba95b46daf6356a8d2e0ec91ea67558996ca09
original_url: "https://arxiv.org/abs/2608.05695"
processed: 2026-08-07
language: zh-CN
---

# DreamGuard：经风险感知世界模型的 LLM 智能体高效运行时护栏

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Wenhao Lin, Chenyu Yu, Xingwei Lin, Sicong Cao, Xiang Chen, Lei Xue, Le Yu, Letian Sha, Chunming Wu
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05695)

## 摘要

- LLM 智能体日益调用外部工具并与真实系统交互，不安全动作可能对外部状态、用户数据与下游服务造成不可逆后果；近期运行时护栏在执行前检查提议动作缓解此类风险，但许多仍是被动：主要评估当前动作的表面安全，缺乏风险如何跨轨迹演化的显式模型。
- 该局限为长时程风险创造关键盲区：单个看似良性的动作可逐渐将智能体漂向危险状态。
- 提出 DreamGuard：围绕风险感知世界模型构建的 LLM 智能体主动护栏；世界模型维护轨迹上紧凑循环潜状态，预测未来潜状态，DreamGuard 从中派生即时危险与前缀风险证据，执行前融合多视界信号成干预决策。
- 四个基准与在线护栏评估实验显示 DreamGuard 优于通用、被动与主动护栏基线，取得评估护栏中最佳安全-效用权衡，平均端到端延迟 25 ms/调用。

## 正文

随着大语言模型（LLM）智能体日益调用外部工具并与真实世界系统交互，不安全的动作可能对外部状态、用户数据与下游服务造成不可逆的后果。近期的运行时护栏通过在执行前检查提议的动作来缓解此类风险，但许多仍然是被动的：它们主要评估当前动作的表面安全性，缺乏风险如何跨轨迹演化的显式模型。这一局限为长时程风险创造了一个关键盲区：单个看起来良性的动作可以逐渐将智能体漂向危险状态。作为回应，研究提出 DreamGuard，一个围绕风险感知世界模型构建的 LLM 智能体主动护栏。世界模型在轨迹上维护一个紧凑的循环潜状态，并预测未来的潜状态，DreamGuard 从中派生即时危险与前缀风险证据。然后它在执行前将这些多视界信号融合为干预决策。跨四个基准与一个在线护栏评估的实验表明，DreamGuard 优于通用、被动与主动护栏基线，在评估的护栏中取得最佳的安全-效用权衡，并保持平均每次调用 25 ms 的端到端延迟。

## 关键词

LLM 智能体、护栏、世界模型、安全、运行时
