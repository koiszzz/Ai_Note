---
title: "CausalOPD：蒸馏因果链推理的首错步监督"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CausalOPD- First-Wrong-Step Supervision for Distilling Causal Chain Reasoning.md"
source_note: "[[信息源/arXiv cs.LG RSS/CausalOPD- First-Wrong-Step Supervision for Distilling Causal Chain Reasoning]]"
source_sha256: 180f9414d183193dc1b8f0c4cc82f44e440b03c627436fe3208677c716ab492a
original_url: "https://arxiv.org/abs/2608.03673"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# CausalOPD：蒸馏因果链推理的首错步监督

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Jian Zhang、Bingyi Wang、Yizhi Liu
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03673)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/CausalOPD- First-Wrong-Step Supervision for Distilling Causal Chain Reasoning|查看原始文件]]

## 摘要

- 提出 CausalOPD，课程在线过程蒸馏框架：知识增强教师先提供接地于领域特定因果规则、实体关系与结构约束的轨迹；学生随后生成在线策略轨迹，教师识别首错步（定义为最早可验证违反可用约束的转换）；从已验证前缀出发，短视界强化学习修复该局部失败；因果阶段课程按传播顺序从证据级推进到机制级与结论级错误。
- 许多关键推理任务（临床诊断、法律判断、工业故障诊断）需要步骤依赖因果链：早期错误传播、正确结论可掩盖无效推理；大语言模型表现良好，但隐私、延迟与可控性促使蒸馏进本地可部署模型；标准轨迹模仿不纠正学生自身 rollout 分布上的过程错误。
- 三个领域上 CausalOPD 相对序列级在线过程蒸馏把平均路径正确率提升 23.4 个百分点，把正确标签-错误推理率从 15.7% 降至 4.4%；领域特定 8B 学生还在所有领域路径正确率上超越两个评估的专有参考。

## 正文

论文编号：arXiv:2608.03673v1（更新类型：new）。以下为摘要全文翻译。

许多关键推理任务，包括临床诊断、法律判断与工业故障诊断，需要步骤依赖的因果链：早期错误会传播，而正确的结论可能掩盖无效的推理。虽然大语言模型在这些任务上表现良好，但隐私、延迟与可控性促使蒸馏到本地可部署的模型。标准的轨迹模仿不纠正学生自身 rollout 分布上的过程错误。我们提出 CausalOPD，一个课程在线过程蒸馏框架。知识增强的教师首先提供接地于领域特定因果规则、实体关系与结构约束的轨迹。学生随后生成在线策略轨迹，教师识别首错步（first wrong step）：定义为最早可验证违反可用约束的转换。从已验证前缀出发，短视界强化学习修复这一局部失败。一个因果阶段课程按传播顺序从证据级推进到机制级与结论级错误。在三个领域上，CausalOPD 相对序列级在线过程蒸馏把平均路径正确率提升 23.4 个百分点，并把正确标签-错误推理率从 15.7% 降至 4.4%。领域特定的 8B 学生还在所有领域的路径正确率上超过两个评估的专有参考。

## 关键词

#因果推理 #在线蒸馏 #过程监督 #推理修复
