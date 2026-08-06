---
published: 2026-08-05
title: "CVPO：通过值方差自适应与动态课程学习增强 LLM 强化学习推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CVPO- Enhancing LLM Reinforcement Learning Reasoning via Value-Variance Adaptation and Dynamic Curri.md"
source_note: "[[信息源/arXiv cs.AI RSS/CVPO- Enhancing LLM Reinforcement Learning Reasoning via Value-Variance Adaptation and Dynamic Curri]]"
source_sha256: 9296560a9273f42ec66b241e80cda7612c24b33a9f45c11e7811c5f0359a4b38
original_url: "https://arxiv.org/abs/2608.03068"
processed: 2026-08-05
language: zh-CN
---

# CVPO：通过值方差自适应与动态课程学习增强 LLM 强化学习推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ziqi Jia、Yalu Ouyang、Bo Pang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03068)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CVPO- Enhancing LLM Reinforcement Learning Reasoning via Value-Variance Adaptation and Dynamic Curri|查看原始文件]]

## 摘要

- 提出 CVPO（课程引导的值方差策略优化）：发现 token 级值方差与探索强度相关，理论分析显示该方差界定策略更新幅度，据此用估计的轨迹值方差量化生成的固有随机性，并设计方差感知的优势调整机制。
- 在问题层面引入动态课程加权方法，适应问题难度，帮助模型在每阶段聚焦与其当前能力匹配的任务。
- 实验显示方法优于 VAPO 等强基于值的基线，取得更好性能与更强探索，使语言模型在各类数学任务上获得更准确稳健的推理。

## 正文

论文编号：arXiv:2608.03068v1（更新类型：cross）。以下为摘要全文翻译。

强化学习（RL）已成为增强大语言模型（LLM）推理能力的有效方法。然而，现有方法在生成答案轨迹的反馈精度上不足，并表现出问题难度漂移现象。为应对这些挑战，我们提出 CVPO——课程引导的值方差策略优化（Curriculum-guided Value-Variance Policy Optimization）。在响应轨迹层面，我们发现 token 级值方差与探索强度相关。我们的理论分析表明，该方差界定了策略更新幅度。随后我们用估计的轨迹值方差量化生成的固有随机性。在此基础上，我们为不同奖励类型设计方差感知的优势调整机制。在问题层面，我们引入适应问题难度的动态课程加权方法，帮助模型在每个训练阶段聚焦与其当前能力匹配的任务。实验结果表明，我们的方法优于 VAPO 等强基于值的基线，取得更好的性能与更强的探索，使语言模型在各类数学任务上获得更准确、更稳健的推理。

## 关键词

#强化学习 #LLM推理 #值方差 #课程学习
