---
published: 2026-08-07
title: "SkillMOO：软件工程智能体技能的多目标优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillMOO- Multi-Objective Optimization of Agent Skills for Software Engineering.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillMOO- Multi-Objective Optimization of Agent Skills for Software Engineering]]"
source_sha256: a6209535ab89f3a9b1bf574ef001c3e64377dde3c1e5c534e3ec4dc07ed6d61a
original_url: "https://arxiv.org/abs/2604.09297"
processed: 2026-08-07
language: zh-CN
---

# SkillMOO：软件工程智能体技能的多目标优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Jingzhi Gong, Ruizhen Gu, Zhiwei Fei, Yazhuo Cao, Lukas Twist, Alina Geiger, Shuo Han, Dominik Sobania, Federica Sarro, Jie M. Zhang
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.09297)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillMOO- Multi-Objective Optimization of Agent Skills for Software Engineering|查看原始文件]]

## 摘要

- 智能体技能日益用于配置软件工程（SE）任务的编码智能体，但当前实践将其视为静态、手工制作资产，或仅按通过率进化；这不够：技能可提升任务成功的同时大幅提高 token 成本，或引入误导性指导。
- 论证 SE 智能体技能包可视为多目标搜索对象，呈现 SkillMOO：通过 LLM 提议编辑与 NSGA-II 帕累托选择（按通过率与推理成本）进化技能包的框架。
- 在 SkillsBench 全部 16 个 SE 任务评估，SkillMOO 在 12 个非零通过任务的 11 个取得最高通过率排名，同时相对静态包实现最多 31.7% 成本降低，通过率增益最多 21 个百分点。
- 38 次技能编辑分析显示剪枝与替换主导成功操作，为技能包设计提供可行原则；部署技能而无成本感知验证的当前实践留下更优技能配置未被探索，激励新一类成本感知、基于搜索的技能工程。

## 正文

智能体技能日益用于配置软件工程（SE）任务的编码智能体，但当前实践将它们视为静态、手工制作的资产，或仅按通过率进化。这不够：一个技能可以在提高任务成功的同时大幅提升 token 成本，或引入误导性指导。我们认为 SE 智能体技能包可以视为多目标搜索对象，并呈现 SkillMOO，一个通过 LLM 提议编辑与 NSGA-II 帕累托选择（在通过率与推理成本上）进化技能包的框架。在 SkillsBench 全部 16 个 SE 任务上评估，SkillMOO 在 12 个非零通过任务中的 11 个取得最高通过率排名，同时相对静态包实现最多 31.7% 的成本降低，通过率增益最多 21 个百分点。对 38 次技能编辑的分析表明，剪枝与替换主导成功的操作，为技能包设计提供可行的原则。因此，当前部署技能而无成本感知验证的实践留下了更优的技能配置未被探索，激励一种新一类成本感知、基于搜索的技能工程。

## 关键词

#技能优化 #多目标 #NSGA-II #软件工程
