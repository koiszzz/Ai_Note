---
published: 2026-08-06
title: Skill-Use：LLM 在智能体框架中真的会使用技能吗？
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Skill-Use- Can LLMs Actually Use Skills in Agentic Harnesses-.md
source_note: "[[信息源/arXiv cs.CL RSS/Skill-Use- Can LLMs Actually Use Skills in Agentic Harnesses-]]"
source_sha256: 85fba196b5fe4435400cdd6ce0f5317ad054d4d9ed2900187f130468cfd85b6b
original_url: https://arxiv.org/abs/2608.04828
processed: 2026-08-07
language: zh-CN
---

# Skill-Use：LLM 在智能体框架中真的会使用技能吗？

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04828)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Skill-Use- Can LLMs Actually Use Skills in Agentic Harnesses-|查看原始文件]]

## 摘要

- 现有评测大多只评判技能本身的质量或其对任务成功的贡献，而未检验智能体能否自主识别相关技能并加以应用；为此本文提出 Skill-Use 基准，在渐进式披露（progressive disclosure）设置下评测技能使用。
- Skill-Use 将技能使用拆分为三个维度：触发（Trigger）衡量智能体是否调用相关技能，合规（Compliance）衡量其遵循规定程序的忠实程度，边界（Boundary）衡量其是否规避被禁止的操作；三者合成 Skill-Use（SU）分数。
- 在 8 个 LLM 与 2 种智能体框架下的评估显示，最强行配置的 SU 仅达 0.613；触发与程序合规各自构成独立的瓶颈，且分数与排名随框架变化，说明技能使用是依赖框架的能力而非模型的固定属性。

## 正文

大语言模型（LLM）智能体日益依赖技能（skills）——一种结构化文档，规定了何时行动、遵循何种程序以及允许使用哪些工具。现有评测大多评判技能的质量或其对任务成功的贡献，而未检验智能体能否自主识别相关技能并加以应用。我们提出 Skill-Use，一个在渐进式披露下评估技能使用的基准：智能体只看到技能的名称和简短描述，必须自行检索完整程序后才能遵循它。Skill-Use 将技能使用分为三个维度。触发衡量智能体是否调用相关技能，合规衡量其遵循规定程序的忠实程度，边界衡量其是否避免被禁止的操作。Skill-Use（SU）分数将三者结合，且仅在技能被触发后才计入执行结果。Skill-Use 将 79 个真实技能与横跨九个领域的 177 个可执行任务配对，每个任务都基于真实文件落地，在隔离的 Docker 沙箱中运行，并由基于轨迹的评分规则打分。在两种智能体框架下评估八个 LLM 后，我们发现可靠的技能使用仍遥不可及：最强配置的 SU 也仅达 0.613。触发与程序合规作为独立的瓶颈双双失败，且分数与模型排名都会随框架变化，因此技能使用表现为一种以框架为条件的能力，而非模型的固定属性。

## 关键词

#技能使用 #LLM智能体 #评测基准 #渐进式披露 #合规性 #智能体框架
