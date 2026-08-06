---
title: "SKILL-KD：LLM 智能体的对比技能蒸馏"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SKILL-KD- Contrastive Skill Distillation for LLM Agents.md"
source_note: "[[信息源/arXiv cs.AI RSS/SKILL-KD- Contrastive Skill Distillation for LLM Agents]]"
source_sha256: 8c73a8c0bdc84afa4ebb481575879d420b610de2d7d622861528ce1c34e5b92b
original_url: "https://arxiv.org/abs/2607.28048"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# SKILL-KD：LLM 智能体的对比技能蒸馏

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Qiming Shi、Yibo Dou、Jiawen Zhu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.28048)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SKILL-KD- Contrastive Skill Distillation for LLM Agents|查看原始文件]]

## 摘要

- 提出 SKILL-KD，对比技能蒸馏框架：把技能视为不同能力智能体之间的显式蒸馏介质——给定学生失败与同一任务的教师轨迹，蒸馏其可操作差异为文本技能补丁，通过重跑学生评估补丁，学生仍失败时迭代精化补丁。
- 为防止重复局部更新导致技能漂移，维护轨迹链接的编辑历史并执行漂移感知技能整合，决定每个补丁应添加新规则、删除或修改现有规则还是跳过。
- 基于技能的提示已成为改善 LLM 智能体的实用机制，但现有技能获取方法常把技能当作经验摘要、记忆条目或成功演示的直接摘要；较弱学生失败（缺乏任务知识或操作策略）时，失败轨迹可能没有足够证据推断缺失行为，教师轨迹又可能过于隐式而无法内化为可复用指导。
- 五个智能体基准与两种学生设置下，SKILL-KD 一致改善冻结学生智能体，优于固定模型适配基线。

## 正文

论文编号：arXiv:2607.28048v2（更新类型：replace）。以下为摘要全文翻译。

基于技能的提示已成为改善大语言模型（LLM）智能体的实用机制，然而现有技能获取方法往往把技能当作经验摘要、记忆条目或成功演示的直接摘要。这给较弱的学生智能体造成错配：当学生因缺乏任务知识或操作策略而失败时，其失败轨迹可能没有足够证据推断缺失行为，而教师轨迹可能过于隐式，无法内化为可复用的指导。我们提出 SKILL-KD，一个对比技能蒸馏框架，把技能视为不同能力智能体之间的显式蒸馏介质。给定学生失败与同一任务上的教师轨迹，SKILL-KD 把它们可操作的差异蒸馏为文本技能补丁，通过重跑学生评估补丁，并在学生仍然失败时迭代精化补丁。为防止重复的局部更新造成技能漂移，SKILL-KD 进一步维护轨迹链接的编辑历史，并执行漂移感知技能整合（Drift-Aware Skill Consolidation）：决定每个补丁应添加新规则、删除或修改现有规则，还是跳过。跨五个智能体基准与两种学生设置，SKILL-KD 一致改善冻结的学生智能体，优于固定模型适配的基线。

## 关键词

#技能蒸馏 #LLM智能体 #对比学习 #技能漂移
