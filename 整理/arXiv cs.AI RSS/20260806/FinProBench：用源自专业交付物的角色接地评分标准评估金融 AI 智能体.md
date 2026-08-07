---
published: 20260806
title: "FinProBench：用源自专业交付物的角色接地评分标准评估金融 AI 智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del.md"
source_note: "[[信息源/arXiv cs.AI RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del]]"
source_sha256: b07b9fab63b1632f9430737220f9ab7ddc31734f02530ba50106d477e579bb5b
original_url: "https://arxiv.org/abs/2608.04077"
processed: 2026-08-06
language: zh-CN

---

# FinProBench：用源自专业交付物的角色接地评分标准评估金融 AI 智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ben Wang, Kang Zhou, Lifan Guo, Feng Chen, Chi Zhang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04077)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FinProBench- Evaluating Financial AI Agents with Role-Grounded Rubrics Derived from Professional Del|查看原始文件]]

## 摘要

- 评估金融 AI 智能体需要与真实专业工作对齐的标准；现有评分标准方法通常从任务提示或模型输出推导标准，忽视仅在从业者交付物中可见的隐性标准。
- 本文引入 FinProBench（专业金融任务基准）和角色接地评分标准构建（RGRC），一个从同角色从业者产生的交付物推导评分标准的可复用流水线：包含交付物收集、能力提取、评分标准综合和验证四阶段，其评分标准捕捉隐性标准、区分质量级别并跨角色内任务迁移。
- 将 57 个职业按交付物类型分为 30 个先验丰富常规角色和 27 个先验稀疏角色专业化角色；RGRC 对角色专业化角色大幅优于仅提示（99.1% 对 78.0%）；FinProBench 由覆盖 57 个职业、8 个金融子行业和 161 种交付物类型的 1,723 个策展交付物构建，发布 20 个完整任务的初始评估集。

## 正文

评估金融 AI 智能体需要与真实专业工作对齐的标准。现有评分标准方法通常从任务提示或模型输出推导标准，忽视仅在从业者交付物中可见的隐性标准。我们引入 FinProBench，一个专业金融任务基准，以及角色接地评分标准构建（Role-Grounded Rubric Construction，RGRC），一个从同角色从业者产生的交付物推导评分标准的可复用流水线。RGRC 包含四阶段：交付物收集、能力提取、评分标准综合和验证。其评分标准捕捉隐性标准、区分质量级别并跨角色内任务迁移。分析前，我们将 57 个职业按交付物类型分为 30 个先验丰富常规角色和 27 个先验稀疏角色专业化角色。跨所有角色，仅提示对常规角色几乎匹配 RGRC（89.2% 对 90.7%），但 RGRC 对角色专业化角色大幅优于它（99.1% 对 78.0%）。此分裂表明，约定在模型先验中充分表示时提示工程可近似评分标准，而超出这些先验的标准需要专业接地。FinProBench 由覆盖 57 个职业、8 个金融子行业和 161 种交付物类型的 1,723 个策展交付物构建，并发布覆盖 7 个子行业 20 个角色的 20 个完整任务的初始评估集。使用异构 LLM 评判者和角色级评分标准，人类交付物平均排名第一（100 分制 73.7 对 70.3、70.2 和 69.6），而四个系统显示重叠的 95% 置信区间和互补优势。角色级复用评分标准相对从零编写每个评分标准，将估计的每任务构建努力减少 6.7 倍。

## 关键词

#金融AI #评分标准 #角色接地 #智能体评估 #arXiv