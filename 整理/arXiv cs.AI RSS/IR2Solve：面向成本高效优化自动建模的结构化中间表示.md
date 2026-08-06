---
title: "IR2Solve：面向成本高效优化自动建模的结构化中间表示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/IR2Solve- Structured Intermediate Representations for Cost-Efficient Optimization Autoformulation.md"
source_note: "[[信息源/arXiv cs.AI RSS/IR2Solve- Structured Intermediate Representations for Cost-Efficient Optimization Autoformulation]]"
source_sha256: d28d0d07973c0e68e3923fed32e9bd9b2b0555aaff83be1a2e673c51215b73b7
original_url: "https://arxiv.org/abs/2608.02641"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# IR2Solve：面向成本高效优化自动建模的结构化中间表示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Penglin Zhu、Linhai Zhang、Jungang Xu 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02641)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/IR2Solve- Structured Intermediate Representations for Cost-Efficient Optimization Autoformulation|查看原始文件]]

## 摘要

- 提出 IR2Solve，中间表示优先的自动建模流水线：单次语义 LLM 调用产生 schema 约束的 ModelIR，随后是两个确定性阶段——验证与 IR 到求解器编译。
- ModelIR 用受限的类 Python 表达式字符串显式表示集合、参数、变量、目标与约束；具体标量约束约定把有限的逐索引约束族表示为单独条目，减少自由索引与隐式量化错误，同时简化下游验证与编译。
- 在六个清洗后的优化基准上取得强目标正确性，与近期优化建模系统保持竞争。
- 153 个 IndustryOR 与 ComplexLP 实例的受控消融显示结构化 IR 接口、标量约束指令与确定性验证的顺序增益；匹配的十实例成本面板上，IR2Solve 每实例一次语义调用，而 Chain-of-Experts 与 SAC-Opt 每实例 8 与 39 次调用、token 量分别为 IR2Solve 的 3.3 与 22.9 倍。

## 正文

论文编号：arXiv:2608.02641v1（更新类型：cross）。以下为摘要全文翻译。

大语言模型（LLM）可以把自然语言优化问题翻译成求解器可用的建模，但直接代码生成是脆弱的：schema、索引与语义错误可能导致编译失败、模型不可行或目标错误，而迭代修复、搜索与多智能体工作流增加推理成本。我们提出 IR2Solve，一个中间表示优先的自动建模流水线：使用单次语义 LLM 调用产生 schema 约束的 ModelIR，随后是两个确定性阶段——验证与 IR 到求解器编译。ModelIR 使用受限的类 Python 表达式字符串显式表示集合、参数、变量、目标与约束。一种具体标量约束约定把有限的逐索引约束族表示为单独条目，减少自由索引与隐式量化错误，同时简化下游验证与编译。在六个清洗后的优化基准上，IR2Solve 取得强的目标正确性，并与近期的优化建模系统保持竞争。在 153 个 IndustryOR 与 ComplexLP 实例上的受控消融显示，结构化 IR 接口、标量约束指令与确定性验证带来顺序增益。在一个匹配的十实例成本面板上，IR2Solve 每实例使用一次语义调用，而 Chain-of-Experts 与 SAC-Opt 每实例使用 8 次与 39 次调用，分别消耗 IR2Solve 的 3.3 倍与 22.9 倍 token 量。这些结果表明，结构化中间表示与确定性的生成后处理相结合，为基于 LLM 的优化自动建模提供了实用的准确率-成本权衡。

## 关键词

#优化建模 #中间表示 #LLM #自动公式化
