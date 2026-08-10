---
published: 2026-08-07
title: "SearchAuditor：审计与归因长时程搜索智能体的失败"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SearchAuditor- Auditing and Attributing Failures in Long-Horizon Search Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/SearchAuditor- Auditing and Attributing Failures in Long-Horizon Search Agents]]"
source_sha256: 081884156eb32d9703ee571d4f1842c0d0d761b2a32828a4089f5377e3bb2cc1
original_url: "https://arxiv.org/abs/2608.05212"
processed: 2026-08-07
language: zh-CN
---

# SearchAuditor：审计与归因长时程搜索智能体的失败

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhixiang Liang, Yifei Liu, Yidan Huang, Haozhe Zhao, Beichen Huang, Jiaqi Wang, Nan Duan, Qiong Cao
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05212)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SearchAuditor- Auditing and Attributing Failures in Long-Horizon Search Agents|查看原始文件]]

## 摘要

- 深度搜索智能体通过长时程网络交互应对挑战性问题，该过程既复杂又脆弱：小推理错误可能沿长而嘈杂轨迹传播为流畅但错误的答案；诊断此类失败困难，需要人工检查极长执行轨迹，可能超出人类能力。
- 引入 SearchAuditBench：评估 LLM 审计器能否定位、归因与修复这些失败，减轻人类负担的基准——含 1,243 条失败轨迹，平均 73.1 条消息与 65.1K token，从五个深度搜索基准的八个开源权重模型收集，每条经专家标注关键错误步骤、搜索特定根本原因与带评分标准的参考修复。
- 提出 SearchAuditor：多视角审计框架，通过证据接地裁决有效定位、归因与修复搜索智能体失败。
- 实验结果显示即使最强基线（由 GPT-5.5 等前沿模型驱动）仅达 26.6% 端到端通过率；SearchAuditor 在不同前沿模型上一致优于所有基线，实现 32.3% 端到端通过率，且用其修复恢复失败运行使智能体能更好从错误恢复。

## 正文

深度搜索智能体通过长时程网络交互应对挑战性问题，这一过程既复杂又脆弱：小的推理错误可能沿长而嘈杂的轨迹传播成流畅但错误的答案。诊断此类失败很困难，需要人工检查极长的执行轨迹，这可能超出人类能力。因此我们引入 SearchAuditBench，一个评估 LLM 审计器能否定位、归因并修复这些失败、从而减轻人类负担的基准。SearchAuditBench 包含 1,243 条失败轨迹，平均 73.1 条消息与 65.1K token，从五个深度搜索基准上的八个开源权重模型收集，每条都经专家标注关键错误步骤、搜索特定的根本原因与带评分标准的参考修复。我们进一步提出 SearchAuditor，一个通过证据接地裁决（evidence-grounded adjudication）有效定位、归因并修复搜索智能体失败的多视角审计框架。实验结果显示，即使由 GPT-5.5 等前沿模型驱动的最强基线也只达到 26.6% 的端到端通过率。相比之下，我们的 SearchAuditor 在不同前沿模型上一致优于所有基线，实现 32.3% 的端到端通过率，且用其修复恢复失败运行使智能体能够更好地从错误中恢复。

## 关键词

#搜索智能体 #审计 #失败归因 #长时程
