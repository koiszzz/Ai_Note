---
published: 2026-08-06
title: SafeCommit：认证基于记忆的智能体何时可以安全行动
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act.md
source_note: "[[信息源/arXiv cs.CL RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act]]"
source_sha256: e63f8d49fc5ad2a38dea57f8da0e4ac6c06ebf1029bf1a2fafc726eee4819d44
original_url: https://arxiv.org/abs/2608.04289
processed: 2026-08-07
language: zh-CN
---

# SafeCommit：认证基于记忆的智能体何时可以安全行动

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04289)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act|查看原始文件]]

## 摘要

- 长时程智能体日益使用持久记忆与工具来执行具有外部副作用的行为；核心失效模式是"过早承诺"：智能体在解决记忆锚定是否过期、冲突、不完整或损坏之前就行动。
- 将该问题形式化为"记忆不确定下的安全承诺"，提出 SafeCommit——位于智能体推理与外部执行之间的风险受控层。
- 该层从记忆、观测、工具输出、溯源与策略约束构建一组校准的 plausible latent worlds（可能潜在世界）；仅当一致性行动证书表明该行动在每个保留世界中都安全时，才允许有副作用的行动。
- 否则选择针对阻碍认证世界的低副作用探针，或返回保守回退；在校准的世界覆盖下，不安全认证承诺的概率至多为目标水平 α；世界提议不完美时，界将校准误差与表征误差分离。
- 一个无依赖的受控模拟器展示了安全-效用权衡，一条命令即可复现全部报告结果；目标是为"智能体该做什么"以及"现有证据何时足以安全去做"提供具体方法。

## 正文

本文编号：arXiv:2608.04289v1（公告类型：cross），以下为摘要全文翻译。

长时程智能体日益使用持久记忆和工具来采取具有外部副作用的行动。一个核心失效模式是过早承诺：智能体在解决其记忆锚定是否过期、冲突、不完整或损坏之前就采取行动。我们将这一问题形式化为"记忆不确定下的安全承诺"（safe commitment under memory uncertainty），并引入 SafeCommit——位于智能体推理与外部执行之间的风险受控层。该层从记忆、观测、工具输出、溯源和策略约束构建一个校准的 plausible latent worlds（可能潜在世界）集合。仅当一致性行动证书（conformal action certificate）表明该行动在每个保留世界中都安全时，它才允许一个具有副作用的行动。否则，它选择一个针对阻碍认证的世界的低副作用探针，或返回保守回退。在校准的世界覆盖下，不安全认证承诺的概率至多为目标水平 $\alpha$；在世界提议不完美的情况下，该界将校准误差与表征误差分离开来。一个无依赖的受控模拟器展示了安全-效用权衡，并用一条命令复现所有报告的结果。目标是提供一种具体方法，不仅决定智能体应当做什么，还决定何时现有证据足以安全地去做。

## 关键词

#智能体安全 #合规性 #记忆 #风险控制 #长时程智能体 #一致性
