---
published: 20260806
title: "SafeCommit：认证记忆接地智能体何时可安全行动"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act.md"
source_note: "[[信息源/arXiv cs.AI RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act]]"
source_sha256: 14e514dabf434ee72236d8ba46b4b6f26ee048720809ff172cf064b36b381a5f
original_url: "https://arxiv.org/abs/2608.04289"
processed: 2026-08-06
language: zh-CN

---

# SafeCommit：认证记忆接地智能体何时可安全行动

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mayur Akewar, Ravi Ranjan
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04289)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SafeCommit- Certifying When Memory-Grounded Agents May Safely Act|查看原始文件]]

## 摘要

- 长时程智能体日益使用持久记忆和工具采取有外部副作用的行动；核心失败模式是过早承诺：智能体在解决记忆接地是否过时、冲突、不完整或损坏前行动。
- 本文将问题形式化为记忆不确定性下的安全承诺，引入 SafeCommit，一个位于智能体推理与外部执行之间的风险控制层：从记忆、观测、工具输出、来源和政策约束构建校准的合理潜在世界集。
- 仅当一致性行动证书显示行动在每个保留世界安全时才允许副作用行动；否则选择针对阻止认证世界的低副作用探针，或返回保守回退；在校准世界覆盖下，不安全认证承诺概率最多为目标水平 α；依赖无关受控模拟器说明安全-效用权衡并复现所有报告结果。

## 正文

长时程智能体日益使用持久记忆和工具采取有外部副作用的行动。核心失败模式是过早承诺：智能体在解决记忆接地是否过时、冲突、不完整或损坏前行动。我们将此问题形式化为记忆不确定性下的安全承诺（safe commitment），并引入 SafeCommit，一个位于智能体推理与外部执行之间的风险控制层。该层从记忆、观测、工具输出、来源和政策约束构建校准的合理潜在世界集。仅当一致性行动证书（conformal action certificate）显示行动在每个保留世界安全时才允许副作用行动。否则，它选择针对阻止认证世界的低副作用探针，或返回保守回退。在校准世界覆盖下，不安全认证承诺的概率最多为目标水平 α；世界提议不完美时，界分离校准和表示误差。依赖无关的受控模拟器说明安全-效用权衡，并用一条命令复现所有报告结果。目标是提供具体方法，不仅决定智能体应做什么，还决定何时可用证据足以安全地做。

## 关键词

#智能体安全 #记忆不确定性 #承诺 #一致性预测 #arXiv