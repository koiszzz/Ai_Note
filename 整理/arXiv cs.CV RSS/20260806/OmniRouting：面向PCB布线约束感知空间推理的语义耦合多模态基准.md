---
published: 2026-08-06
title: OmniRouting：面向PCB布线约束感知空间推理的语义耦合多模态基准
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/OmniRouting- A Semantic-Coupled Multimodal Benchmark for Constraint-Aware Spatial Reasoning in PCB R.md
source_note: "[[信息源/arXiv cs.CV RSS/OmniRouting- A Semantic-Coupled Multimodal Benchmark for Constraint-Aware Spatial Reasoning in PCB R|查看原始文件]]"
source_sha256: 1c22d423c8a5b5a01aff38f1043125aef9a48821414e626b39b83f44aa9ab27d
original_url: https://arxiv.org/abs/2608.04434
processed: 2026-08-07
language: zh-CN
---

# OmniRouting：面向PCB布线约束感知空间推理的语义耦合多模态基准

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04434)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/OmniRouting- A Semantic-Coupled Multimodal Benchmark for Constraint-Aware Spatial Reasoning in PCB R|查看原始文件]]

## 摘要

- 大语言模型（LLM）在约束感知导航、迷宫推理与图推理方面进展显著，但在严格几何、拓扑与电气约束下的复杂布线推理能力仍鲜有探索，尽管布线是电子设计自动化（EDA）最具挑战与关键的阶段之一
- 提出 OmniRouting：首个大规模基准，评估 LLM 在真实工业设计规则、可制造性与连通性约束下的 PCB 布线推理；包含 1,681 个工业级原理图耦合 PCB 设计
- 四个任务：几何布线推理、设计规则感知布线推理、电气功能推理、工具增强智能体布线
- 结果揭示当前 LMM 在 PCB 布线上的重大局限：路径规划能力弱、设计规则约束遵循差、电气功能保持不一致；将开源全部数据、评估代码与工具接口

## 正文

近期的大语言模型（LLM）在约束感知导航、迷宫推理和图推理方面取得了显著进展。然而，它们在严格几何、拓扑与电气约束下对复杂布线问题进行推理的能力在很大程度上仍未得到探索，尽管布线是电子设计自动化（EDA）中最具挑战性且最关键的阶段之一。

为弥合这一差距，我们提出 OmniRouting——首个旨在评估 LLM 在真实工业设计规则、可制造性与连通性约束下进行印刷电路板（PCB）布线推理的大规模基准。OmniRouting 包含 1,681 个工业级原理图耦合的 PCB 设计，涵盖板级几何、由人类工程师完成的可布线元件布局、封装（footprints）、焊盘位置、网表（netlists）、叠层（stackup）信息与布线约束。

该基准包含四个任务：（1）几何布线推理：在受限板区域内生成物理有效的铜走线、过孔与层分配以连接电路网络；（2）设计规则感知布线推理：产出满足间距、走线宽度、过孔、避障与板边界约束的可布线布局；（3）电气功能推理：在推理网络名称与功能角色的同时保持原理图规定的连通性，产生电气正确的布线；（4）工具增强智能体布线：利用外部工具完成任务（1）—（3）。

我们的结果揭示了当前大语言多模态模型（LMM）在 PCB 布线上的重大局限，包括路径规划能力薄弱、对设计规则约束遵循不佳以及电气功能保持不一致。我们将开源所有基准数据、评估代码与工具接口，以促进未来研究。

## 关键词

#PCB布线 #电子设计自动化 #空间推理 #大语言模型 #多模态基准
