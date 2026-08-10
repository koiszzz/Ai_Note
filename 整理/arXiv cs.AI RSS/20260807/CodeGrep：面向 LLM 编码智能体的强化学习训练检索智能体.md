---
published: 2026-08-07
title: "CodeGrep：面向 LLM 编码智能体的强化学习训练检索智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CodeGrep- An RL-Trained Retrieval Agent for LLM Coding Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/CodeGrep- An RL-Trained Retrieval Agent for LLM Coding Agents]]"
source_sha256: 554e7ceca417fd478503ba45c0143fcb348c256c879848a54c7b30a55b27a0d4
original_url: "https://arxiv.org/abs/2608.05886"
processed: 2026-08-07
language: zh-CN
---

# CodeGrep：面向 LLM 编码智能体的强化学习训练检索智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Wuya Chen, Yihao yang, Yang Cao, Yue Lin
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05886)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CodeGrep- An RL-Trained Retrieval Agent for LLM Coding Agents|查看原始文件]]

## 摘要

- Claude Code 与 OpenHands 等现代 LLM 编码智能体共享一个常见低效：它们花大量 token 预算找要修补的文件而非修补本身；SWE-Bench Verified 上 30B OpenHands 智能体平均每个已解决问题 23 轮、631K token，许多调用花在仓库探索的 grep、glob 与 view_file 上。
- 引入 CodeGrep：14B 检索智能体，用 GRPO 端到端训练，发出多轮并行 grep、glob 与 read 工具调用，并将候选文件返回给冻结的下游编码智能体。
- 全部 500 个 SWE-Bench Verified 实例上，CodeGrep 保持解决率的同时显著提升效率：27.0% 对比无检索基线 25.8%，已解决问题上少 15% 轮次与 19% token。
- 跨检索器，下游效用遵循精度阈值：BM25（精度 0.375）使智能体退化，Jina（0.445）中性，CodeGrep（0.677）越过检索开始降低 rollout 成本的阈值；为支持研究，用 CATM 从 67K 开源智能体轨迹挖掘监督，构建多轮智能体 RL 的 Git-worktree 环境；在优势层而非奖励层应用效率信号减少 KL 漂移并干净转化为下游效率。将发布模型、训练流水线、RL 环境与评估工具。

## 正文

Claude Code 与 OpenHands 等现代 LLM 编码智能体共享一个常见低效：它们花大量 token 预算寻找要修补的文件，而不是修补它。在 SWE-Bench Verified 上，30B OpenHands 智能体平均每个已解决问题 23 轮、631K token，许多调用花在仓库探索期间的 grep、glob 与 view_file 上。我们引入 CodeGrep，一个 14B 检索智能体，用 GRPO 端到端训练，发出多轮并行 grep、glob 与 read 工具调用，并将候选文件返回给冻结的下游编码智能体。在全部 500 个 SWE-Bench Verified 实例上，CodeGrep 保持解决率的同时显著提升效率：27.0% 对比无检索基线的 25.8%，在已解决实例上少 15% 轮次与 19% token。跨检索器，下游效用遵循精度阈值：精度 0.375 的 BM25 使智能体退化，精度 0.445 的 Jina 中性，精度 0.677 的 CodeGrep 越过检索开始降低 rollout 成本的阈值。为支持本研究，我们使用 CATM 从 67K 开源智能体轨迹中挖掘监督，并构建用于多轮智能体 RL 的 Git-worktree 环境。在我们的设置中，在优势层而非奖励层应用效率信号可减少 KL 漂移，并干净地转化为下游效率。我们将发布模型、训练流水线、RL 环境与评估工具。

## 关键词

#编码智能体 #检索智能体 #GRPO #SWE-Bench
