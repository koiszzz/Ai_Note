---
title: "告密轨迹：用思维链动力学检测 LLM 中的推理失败"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics.md"
source_note: "[[信息源/arXiv cs.LG RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics.]]"
source_sha256: ca0fef6d672f4532eca6ff325b3642c4763839ef241e563597edb489bd2c8bda
original_url: "https://arxiv.org/abs/2608.03291"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 告密轨迹：用思维链动力学检测 LLM 中的推理失败

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Shashwat Sourav、Aishwarya Balwani
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03291)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics.|查看原始文件]]

## 摘要

- 思维链（CoT）推理改善大语言模型（LLM）性能，同时提供观察模型推理过程的可接口；现有利用言语化 CoT 监控推理正确性的方法主要评估单个中间步的语义正确性或一致性，而非推理过程如何跨轨迹演化。
- 因此，分布在推理轨迹上的失败（而非局限于单个错误步的失败）相对未被充分探索；此外言语化 CoT 未必忠实反映模型内部推理，激励不把单个陈述当作内部计算字面记述的分析。
- 研究可见 CoT 的动力学能否被用来系统区分成功与失败推理，而不假设这种语义忠实性。
- 在可验证的布尔可满足性任务上研究一系列 LLM，任务复杂度可变，能在每个模型能力前沿附近受控比较；按推理功能标记 CoT 句子揭示 SAT 问题上的过早验证坍缩：错误轨迹更早进入子句检查、重复类似操作、更早定稿。
- UNSAT 问题上模型鲁莽转向错误 SAT 结论，检查候选赋值而非在构造案例中推导矛盾；随后定向证明搜索提示干预把 Llama3-70B 准确率从 13.3% 提升到 85%，纠正这些错误的 84.6%。
- 结果表明能力失败可以表现为可见推理结构中分布式的、任务依赖的变化，且对言语化轨迹是否反映模型内部计算不可知的 CoT 动力学能帮助诊断与纠正失败。

## 正文

论文编号：arXiv:2608.03291v1（更新类型：new）。以下为摘要全文翻译。

思维链（CoT）推理改善大语言模型（LLM）的性能，同时提供观察模型推理过程的一个可接口界面。然而，利用言语化 CoT 监控推理正确性的现有方法主要评估单个中间步骤的语义正确性或一致性，而不是推理过程如何跨轨迹演化。因此，分布在推理轨迹上的失败，而不是局限于单个错误步骤的失败，相对未被充分探索。此外，言语化的 CoT 不需要忠实反映模型的内部推理，这激励了不把单个陈述当作内部计算字面记述的分析。在这项工作中，因此我们问：可见 CoT 的动力学能否被用来系统地区分成功与失败的推理，而不假设这种语义忠实性？我们在可验证的布尔可满足性任务上研究一系列 LLM，任务复杂度可变，允许在每个模型能力前沿附近进行受控比较。按推理功能标记 CoT 句子揭示了 SAT 问题上的过早验证坍缩：不正确的轨迹更早进入子句检查，重复相似的操作，并更早定稿。在 UNSAT 问题上，模型鲁莽地转向不正确的 SAT 结论，检查候选赋值而不是在构造的案例中推导矛盾。随后，一个定向的证明搜索提示干预把 Llama3-70B 的准确率从 13.3% 提升到 85%，纠正了这些错误的 84.6%。这些结果表明，能力失败可以表现为可见推理结构中分布式的、任务依赖的变化，并且对言语化轨迹是否反映模型内部计算不可知的 CoT 动力学，可以帮助诊断与纠正失败。

## 关键词

#思维链 #推理失败 #SAT #动力学分析 #LLM
