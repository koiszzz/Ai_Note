---
title: "TACT：教学自适应英语辅导的分类学对齐训练后优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TACT- Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring.md"
source_note: "[[信息源/arXiv cs.AI RSS/TACT- Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring]]"
source_sha256: 1365ff5d100333247c62358d43b117a21d6ebd81f7789a44c21d1f44ea23c840
original_url: "https://arxiv.org/abs/2608.03952"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# TACT：教学自适应英语辅导的分类学对齐训练后优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dongjie Yang、Siyan Lin、Leixian Shen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03952)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TACT- Taxonomy-Aligned Post-Training for Pedagogically Adaptive English Tutoring|查看原始文件]]

## 摘要

- 提出 TACT（分类学对齐对话式辅导者），人类接地的训练后与评估框架：基于既有文献开发两个互补分类学——含 13 种辅导者响应策略的辅导者策略分类学与按移动类型与状态刻画学习者行为的学员移动分类学；构建 TACTCorpus，为 260 段真实师生对话补充 32,379 条标注与质量受控的增强训练数据。
- 通过监督微调加分类学对齐 GRPO 训练后优化 Qwen3.5-4B，产生 TACTutor，为支架质量（而非仅参考模仿）优化。
- 有效 ESL 辅导需要的不只是流利响应生成：辅导者必须基于学习者行为与对话上下文选择适当的教学动作；人类辅导研究为自适应支持提供原则，但常任务特定且未充分整合进基于 LLM 的 ESL 辅导者训练与评估。
- TACTBench（含 78 个真实辅导上下文的策略平衡诊断基准）上 TACTutor 相对骨干提升 20.30%，并在同一协议下优于所有评估的专有基线，同时在既定外部教育基准保持骨干性能；50 名学习者的盲测中获最高总体平均评分；发布数据、基准与模型权重。

## 正文

论文编号：arXiv:2608.03952v1（更新类型：new）。以下为摘要全文翻译。

大语言模型（LLM）日益被用于为英语作为第二语言（ESL）学习者提供会话练习。然而，有效的 ESL 辅导需要的不只是流利响应的生成：辅导者必须基于学习者行为与对话上下文选择适当的教学动作。人类辅导研究为自适应支持提供原则，但它们往往任务特定，且未充分整合进基于 LLM 的 ESL 辅导者训练与评估。我们提出 TACT（Taxonomy-Aligned Conversational Tutor，分类学对齐对话式辅导者），一个用于训练后优化与评估教学自适应 ESL 辅导者的人类接地框架。借鉴既定文献，我们开发两个互补分类学：含 13 种辅导者响应策略的辅导者策略分类学（Tutor-Strategy Taxonomy），与按移动类型和状态刻画学习者行为的学员移动分类学（Student-Move Taxonomy）。使用这些分类学，我们构建 TACTCorpus：为 260 段真实师生对话补充 32,379 条标注与质量受控的增强训练数据。随后我们通过监督微调加分类学对齐的组相对策略优化（GRPO）训练后优化 Qwen3.5-4B，产生 TACTutor，并针对支架质量（而非仅参考模仿）进行优化。在 TACTBench（一个含 78 个真实辅导上下文的策略平衡诊断基准）上，TACTutor 相对其骨干提升 20.30%，并在同一协议下优于所有评估的专有基线，同时在既定的外部教育基准上保持骨干性能；在 50 名学习者的盲测中，它也获得评估辅导者中的最高总体平均评分。我们发布数据、基准与模型权重，为开发教学自适应的 ESL 辅导者提供开放基础。

## 关键词

#ESL辅导 #教学自适应 #分类学 #训练后优化
