---
published: 2026-08-06
title: 迈向技能原生的 LLM：用于长程推理基准评测与训练的技能熵
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning.md
source_note: "[[信息源/arXiv cs.LG RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning]]"
source_sha256: 51cc99138f1fa53e1ea5e50705801bc4005d468e5fe9ecf779321495bd4fe207
original_url: https://arxiv.org/abs/2608.05139
processed: 2026-08-07
language: zh-CN
---

# 迈向技能原生的 LLM：用于长程推理基准评测与训练的技能熵

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05139)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Toward Skill-Native LLMs- Skill Entropy for Benchmarking and Training Long-Horizon Reasoning|查看原始文件]]

## 摘要

- 提出技能熵（Skill Entropy）以度量技能切换难度，并构建 Skill^2-Bench——基于 9 个领域 558 项技能的跨技能长程任务基准；评测 8 个前沿与 4 个开源模型发现"技能切换差距"：熵越高准确率越低。
- 提出 Skill-Entropy RL：模型同时预测每一步的答案与所用技能，奖励结合步骤级正确性与技能熵奖励。
- 在 Qwen3-4B-Instruct 与 Qwen3-1.7B 上分别将 Skill^2-Bench 分数从 34.4% 提升至 68.4%、从 14.6% 提升至 40.1%，且可复用于 OpenR1-Math 等现成训练数据。

## 正文

近期 LLM 中的长程推理要求模型在推理链内部切换不同的技能，例如先做数学推导，然后利用结果来规划时间表。我们将此类问题称为跨技能长程任务（cross-skill long-horizon tasks）：多步任务，其步骤需要不同的推理技能并依赖之前的输出。现有基准常常独立评估单个技能，缺乏衡量模型在技能间切换能力的原理性方法。我们从评测和训练两个方面来弥补这一缺口。我们引入了技能熵（Skill Entropy）——衡量从一种技能切换到另一种技能难度的指标。然后提出 Skill^2-Bench，一个基于 9 个可验证与开放式领域中 558 项技能构建的跨技能长程任务基准。每个任务被赋予一个任务级技能熵分数，并划分为三个难度级别。在 Skill^2-Bench 上评测 8 个前沿模型和 4 个开源模型，揭示了一个技能切换差距：任务熵越高，准确率越低。然后，我们将技能熵从基准尺度转变为训练信号。我们提出 Skill-Entropy RL，一种强化学习框架，其中模型不仅预测每一步的答案，还预测产生该答案所用的技能。奖励结合了步骤级正确性与技能熵奖励——后者衡量模型预测的技能序列与金标准技能序列之间的对齐程度。在 Qwen3-4B-Instruct 和 Qwen3-1.7B 上，Skill-Entropy RL 将 Skill^2-Bench 分数分别从 34.4% 提升到 68.4%、从 14.6% 提升到 40.1%，优于有竞争力的基线。同一流程可应用于现成的训练数据（如 OpenR1-Math），表明技能熵是一种可复用的训练信号。代码见：https://github.com/Gen-Verse/Skill-Entropy-RL

## 关键词

#技能熵 #长程推理 #强化学习 #LLM基准 #技能切换
