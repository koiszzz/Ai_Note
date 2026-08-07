---
published: 2026-08-06
title: 迈向技能原生 LLM：用于长程推理评测与训练的技能熵
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning.md
source_note: "[[信息源/arXiv cs.CL RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning]]"
source_sha256: 566e335e52a68c6134fa4cbed593fd834bea30df97289c7fc1e1b828365a2379
original_url: https://arxiv.org/abs/2608.05139
processed: 2026-08-07
language: zh-CN
---

# 迈向技能原生 LLM：用于长程推理评测与训练的技能熵

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05139)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning|查看原始文件]]

## 摘要

- 近期 LLM 的长程推理要求模型在推理链内部切换不同技能，如先做数学推导、再用结果规划日程，称为跨技能长程任务；现有基准多评估单一技能，缺少衡量模型技能切换能力的规范化方法
- 提出 Skill Entropy（技能熵），衡量从一种技能切换到另一种技能的难度
- 提出 Skill^2-Bench 基准：基于 9 个可验证与开放式领域的 558 项技能构建跨技能长程任务，每项任务分配任务级技能熵分数并分为三个难度等级
- 对 8 个前沿模型与 4 个开源模型的评估揭示"技能切换缺口"：在更高熵任务上准确率下降
- 将技能熵从基准度量转化为训练信号，提出 Skill-Entropy RL：模型每一步不仅预测答案，还预测生成答案所用的技能，奖励结合逐步正确性与衡量模型预测技能序列与黄金技能序列对齐度的技能熵奖励
- 在 Qwen3-4B-Instruct 与 Qwen3-1.7B 上，Skill-Entropy RL 将 Skill^2-Bench 得分分别从 34.4% 提升至 68.4%、从 14.6% 提升至 40.1%，超过竞争基线；代码见 https://github.com/Gen-Verse/Skill-Entropy-RL

## 正文

近期 LLM 中的长程推理要求模型在推理链内部切换不同技能，例如先进行数学推导，然后利用结果规划日程。我们称此类问题为跨技能长程任务：即多个步骤需要不同推理技能、且各步骤依赖于先前输出的多步任务。现有基准通常评估单一技能，缺乏衡量模型技能切换能力的规范化方法。我们从评测和训练两侧弥合这一差距。我们提出 Skill Entropy（技能熵），一种衡量从一种技能切换到另一种技能难度的度量。随后我们提出 Skill^2-Bench，一个基于 9 个可验证与开放式领域中的 558 项技能构建的跨技能长程任务基准。每个任务被赋予一个任务级技能熵分数，并划分为三个难度等级。在 Skill^2-Bench 上评估 8 个前沿模型和 4 个开源模型，揭示了一个技能切换缺口：在更高熵任务上准确率下降。随后我们把技能熵从基准度量转变为训练信号。我们提出 Skill-Entropy RL，一个强化学习框架，其中模型在每一步不仅预测答案，还预测生成该答案所使用的技能。奖励结合了逐步正确性奖励与技能熵奖励，后者衡量模型预测的技能序列与黄金技能序列之间的对齐程度。在 Qwen3-4B-Instruct 和 Qwen3-1.7B 上，Skill-Entropy RL 将 Skill^2-Bench 得分分别从 34.4% 提升到 68.4%、从 14.6% 提升到 40.1%，优于竞争基线。同一流水线可应用于现成的训练数据（如 OpenR1-Math），表明技能熵是一种可复用的训练信号。代码可在 https://github.com/Gen-Verse/Skill-Entropy-RL 获取。

## 关键词

#长程推理 #技能切换 #技能熵 #强化学习 #评测基准 #LLM #arXiv
