---
title: "泄密轨迹：用思维链动力学检测 LLM 推理失败"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics.md"
source_note: "[[信息源/arXiv cs.AI RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics]]"
source_sha256: db0272d274d2f2f16b0c04a7561501e312fefb30abc2829bc3d93a1ae2a917da
original_url: "https://arxiv.org/abs/2608.03291"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 泄密轨迹：用思维链动力学检测 LLM 推理失败

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shashwat Sourav、Aishwarya Balwani
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03291)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/The Tell-Tale Trace- Detecting Reasoning Failures in LLMs Using Chain-of-Thought Dynamics|查看原始文件]]

## 摘要

- 在可变复杂度的可验证布尔可满足性任务上研究一系列 LLM，实现在各模型能力前沿附近进行受控比较；按推理功能标注 CoT 句子揭示 SAT 问题上的过早验证坍缩：错误轨迹更早进入子句检查、重复类似操作并更早收尾；UNSAT 问题上模型妄断地走向错误 SAT 结论，检查候选赋值而非跨构造案例推导矛盾。
- 目标证明搜索提示干预把 Llama3-70B 准确率从 13.3% 提升到 85%，纠正这些错误的 84.6%。
- 思维链（CoT）推理改善 LLM 性能，同时提供模型推理过程的可观测接口；利用言语化 CoT 监控推理正确性的现有方法主要评估单个中间步骤的语义正确性或一致性，而非推理过程跨轨迹如何演化——分布在推理轨迹上的失败（而非定位于单一错误步骤）相对未被充分探索；且言语化 CoT 不必忠实反映模型内部推理，促使不把单个陈述当作内部计算字面账目的分析。
- 结果显示能力失败可表现为可见推理结构中的分布、任务依赖变化，对言语化轨迹是否反映模型内部计算保持不可知的 CoT 动力学可帮助诊断与纠正失败。

## 正文

论文编号：arXiv:2608.03291v1（更新类型：cross）。以下为摘要全文翻译。

思维链（CoT）推理改善了大语言模型（LLM）的性能，同时提供模型推理过程的可观测接口。然而，利用言语化 CoT 监控推理正确性的现有方法，主要评估单个中间步骤的语义正确性或一致性，而非推理过程如何跨轨迹演化。因此，分布在推理轨迹上的失败（而非定位于单一错误步骤的失败）相对未被充分探索。此外，言语化 CoT 不必忠实反映模型的内部推理，这促使采用不把单个陈述当作内部计算字面账目的分析。在本工作中，我们因此询问：可见 CoT 的动力学能否被用来系统区分成功与失败推理，而不假设这种语义忠实性？我们在可变复杂度的可验证布尔可满足性任务上研究一系列 LLM，实现在各模型能力前沿附近进行受控比较。按推理功能标注 CoT 句子揭示 SAT 问题上的过早验证坍缩（premature verification collapse）：不正确的轨迹更早进入子句检查、重复类似操作并更早收尾。在 UNSAT 问题上，模型妄断地走向不正确的 SAT 结论，检查候选赋值而非跨构造案例推导矛盾。随后，一个目标证明搜索提示干预把 Llama3-70B 的准确率从 13.3% 提升到 85%，纠正了这些错误的 84.6%。这些结果表明，能力失败可以表现为可见推理结构中的分布、任务依赖的变化，而对言语化轨迹是否反映模型内部计算保持不可知的 CoT 动力学，可以帮助诊断与纠正失败。

## 关键词

#思维链 #推理失败 #SAT求解 #监控
