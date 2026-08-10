---
published: 2026-08-07
title: "CANOE：面向开放式护理计划协调的自适应竞技场式可争论专家网络"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Adaptive Arena-based Contestable Argumentative Network-of-Experts for Open-Ended Care Plan Coordinat.md"
source_note: "[[信息源/arXiv cs.AI RSS/Adaptive Arena-based Contestable Argumentative Network-of-Experts for Open-Ended Care Plan Coordinat]]"
source_sha256: ee97d65923af52df9cf22ef63a3ec2d9095379c4ccbbdfa974e10a53c41a93a2
original_url: "https://arxiv.org/abs/2608.05391"
processed: 2026-08-07
language: zh-CN
---

# CANOE：面向开放式护理计划协调的自适应竞技场式可争论专家网络

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Truong Thanh Hung Nguyen, Hoang-Loc Cao, Phuc Ho, Phuc Truong Loc Nguyen, Ren\'e Richard, Hung Cao
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05391)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Adaptive Arena-based Contestable Argumentative Network-of-Experts for Open-Ended Care Plan Coordinat|查看原始文件]]

## 摘要

- 护理计划协调需要综合多个专业学科的异构临床、功能与社会心理信息，单一 LLM 流水线无法以透明或安全的方式完成。
- 提出 CANOE（可争论专家网络）：包含复杂度评估、自适应团队招募、基于竞技场的定量双极论证框架（A-QBAF）的角色化论证计算、人在环可争论性与护理计划综合五个模块的多智能体神经符号框架。
- 角色化专家代理为候选干预生成支持性与攻击性论证；冲突通过基于竞技场的冲突消解解决，之后可接受性分数在论证图上传播；护理计划制定者可接受、拒绝、编辑或添加论证，框架确定性重算最终计划。
- 在 Discharge Me! 与 MedicalRAG 上以 ROUGE-L、AlignScore、MEDCON F1、FKGL 与 LLM-as-a-judge 评估：医学微调模型临床正确性与安全性最强，CANOE 的论证结构提供忠实解释与人工可争论性。

## 正文

护理计划协调要求综合多个专业学科的异构临床、功能与社会心理信息，而单一 LLM 流水线无法以透明或安全的方式完成。我们提出 CANOE（Contestable Argumentative Network-of-Experts，可争论专家网络），一个通过五个模块解决这些局限的多智能体神经符号框架：复杂度评估、自适应团队招募、基于竞技场的定量双极论证框架（A-QBAF）的角色化论证计算、人在环可争论性，以及护理计划综合。角色化专家代理为候选干预生成支持性与攻击性论证；冲突通过基于竞技场的冲突消解解决，之后可接受性分数跨论证图传播。护理计划制定者可接受、拒绝、编辑或添加论证，框架将确定性重算最终计划。在 Discharge Me! 与 MedicalRAG 上使用 ROUGE-L、AlignScore、MEDCON F1、FKGL 与 LLM-as-a-judge 的评估显示，医学微调模型在临床正确性与安全性上表现最强，而 CANOE 的论证结构提供了忠实解释与人工可争论性。

## 关键词

#护理计划 #多智能体 #神经符号 #可争论AI
