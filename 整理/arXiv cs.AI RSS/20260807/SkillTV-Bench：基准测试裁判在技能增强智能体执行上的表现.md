---
published: 2026-08-07
title: "SkillTV-Bench：基准测试裁判在技能增强智能体执行上的表现"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SkillTV-Bench- Benchmarking How Well Judges Perform on Skill-Augmented Agentic Execution.md"
source_note: "[[信息源/arXiv cs.AI RSS/SkillTV-Bench- Benchmarking How Well Judges Perform on Skill-Augmented Agentic Execution]]"
source_sha256: 3351cd28f8d316190b6cd1a877d67925000b37aa32f4eeb7e6672567e4d5502c
original_url: "https://arxiv.org/abs/2608.05573"
processed: 2026-08-07
language: zh-CN
---

# SkillTV-Bench：基准测试裁判在技能增强智能体执行上的表现

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhi Han, Chenxi Zeng, Liuhaichen Yang, Zihan Guo, Ming Zhou, Yang Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05573)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SkillTV-Bench- Benchmarking How Well Judges Perform on Skill-Augmented Agentic Execution|查看原始文件]]

## 摘要

- LLM 智能体日益通过工具使用与环境交互执行长时程任务，将评估从最终响应评分转向完整执行验证；对技能增强智能体，验证还需任务时技能编码的程序知识，因为该知识指示检查什么证据与哪些失败任务关键。
- 现有裁判基准常暴露最终响应或静态轨迹，很少结合任务时技能与可直接检查工件与环境。
- 引入 SkillTV-Bench：来自 11 个领域 50 个任务的 681 个真实智能体轨迹案例基准，设计评估 LLM 作为裁判与智能体作为裁判方法的技能感知轨迹验证；提出 SkillTV-Evolve：将验证知识外部化为可复用裁判技能（JudgeSkill），引导智能体裁判规划针对性检查并发布证据接地裁决；在不相交开发池上，自动进化循环用误判案例进一步精炼裁判技能。
- SkillTV-Bench 上精炼技能将同一智能体裁判准确率提升 14.8 个百分点；离线 rollout 池选择中，将所选轨迹成功从单 rollout 22.9% 提升到十个 rollout 45.5%；代码与数据公开。

## 正文

LLM 智能体日益通过工具使用与环境交互执行长时程任务，将评估从最终响应评分转向完整执行的验证。对于技能增强智能体，验证还需要任务时（task-time）技能编码的程序知识，因为该知识指示检查什么证据与哪些失败是任务关键的。然而，现有裁判基准常常暴露最终响应或静态轨迹，很少结合任务时技能与可直接检查的工件与环境。因此我们引入 SkillTV-Bench，一个 681 个案例的真实智能体轨迹基准，来自 11 个领域 50 个任务，设计用于评估 LLM-as-a-Judge 与 Agent-as-a-Judge 方法的技能感知轨迹验证。此外，我们提出 SkillTV-Evolve，将验证知识外部化为一个可复用的裁判技能（JudgeSkill），引导智能体裁判规划针对性的检查并发布证据接地的裁决。在一个不相交的开发池上，一个自动化进化循环进一步用误判案例精炼该裁判技能。在 SkillTV-Bench 上，精炼的技能将同一智能体裁判的准确率提升 14.8 个百分点。在离线 rollout 池选择中，它将以一个 rollout 的所选轨迹成功从 22.9% 提升到十个 rollouts 的 45.5%。代码与数据见 https://github.com/HanZhi306/SkillTV-Bench。

## 关键词

#轨迹验证 #智能体裁判 #技能增强 #基准测试
