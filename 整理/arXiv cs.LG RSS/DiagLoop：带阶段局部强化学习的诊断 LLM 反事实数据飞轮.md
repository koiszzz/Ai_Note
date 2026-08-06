---
title: "DiagLoop：带阶段局部强化学习的诊断 LLM 反事实数据飞轮"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/DiagLoop- A Counterfactual Data Flywheel with Stage-Localized Reinforcement for Diagnostic LLMs.md"
source_note: "[[信息源/arXiv cs.LG RSS/DiagLoop- A Counterfactual Data Flywheel with Stage-Localized Reinforcement for Diagnostic LLMs]]"
source_sha256: d6da3e180c5f2050337d73aaf2d98974863f0698c25b79c9246c4fed26a7f2ad
original_url: "https://arxiv.org/abs/2608.03674"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# DiagLoop：带阶段局部强化学习的诊断 LLM 反事实数据飞轮

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jian Zhang、Bingyi Wang、Yizhi Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03674)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DiagLoop- A Counterfactual Data Flywheel with Stage-Localized Reinforcement for Diagnostic LLMs|查看原始文件]]

## 摘要

- 提出 DiagLoop，反事实数据飞轮：把按机制家族编写一次的编码物理关系或临床指南转化为记录病例之外的训练监督——仅训练教师通过变化原因、上下文与观测提出反事实世界，独立混合检查器只接纳有效世界；学生经症状抽象、因果链构建与根因归因推理；阶段特定标准识别其最早失败。
- 因果诊断模型必须解释结论如何从证据推出，因为诊断指导修复与治疗；但严重病例稀缺、记录少有推理路径、数据跨配置迁移差，使本地部署复杂。
- 非终端失败用有界修复探测下游能力，所得弱点画像引导后续数据生成；阶段局部强化学习只更新模型生成的延续，重放与保持减少遗忘；相同标准经与提议者分离的检查治理接纳、归因、奖励与再生成。
- 仅用合成场景、无病例级专家推理标注，8B 模型相对最强常规基线改善严格路径正确率：八个工业系统 11.6 分、十个疾病类别 5.5 分；相对乱路由对照 3.9 与 2.3 分；模型还超过两个领域评估的专有参考（即使它们收到少样本示例或上下文规范）。

## 正文

论文编号：arXiv:2608.03674v1（更新类型：new）。以下为摘要全文翻译。

因果诊断模型必须解释结论如何从证据推出，因为诊断指导修复与治疗。然而，严重病例稀缺、记录很少包含推理路径、数据跨配置迁移差，使本地部署复杂化。我们提出 DiagLoop，一个反事实数据飞轮：把按机制家族编写一次的编码物理关系或临床指南，转化为记录病例之外的训练监督。一个仅训练教师通过变化原因、上下文与观测提出反事实世界，而一个独立的混合检查器只接纳有效世界。学生经症状抽象、因果链构建与根因归因进行推理。阶段特定标准识别其最早失败。对非终端失败，一个有界修复探测下游能力，而所得的弱点画像引导后续数据生成。阶段局部强化学习只更新模型生成的延续，而重放与保持减少遗忘。相同的标准通过独立于提议者的检查治理接纳、归因、奖励与再生成。仅使用合成场景且无病例级专家推理标注，所得的 8B 模型相对最强常规基线改善严格路径正确率。增益为：八个工业系统 11.6 分、十个疾病类别 5.5 分。相对乱路由对照的增益分别为 3.9 与 2.3 分。该模型还超过两个领域评估的专有参考，即使它们收到少样本示例或上下文中的规范。

## 关键词

#诊断LLM #反事实数据 #飞轮 #阶段局部强化
