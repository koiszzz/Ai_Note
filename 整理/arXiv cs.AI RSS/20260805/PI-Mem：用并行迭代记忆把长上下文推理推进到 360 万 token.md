---
published: 2026-08-05
title: "PI-Mem：用并行迭代记忆把长上下文推理推进到 360 万 token"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PI-Mem- Pushing Long-Context Reasoning to 3.6M Tokens with Parallel-Iterative Memory.md"
source_note: "[[信息源/arXiv cs.AI RSS/PI-Mem- Pushing Long-Context Reasoning to 3.6M Tokens with Parallel-Iterative Memory]]"
source_sha256: 33fca9299b9d74694799bd31be24a4a87ffcc0d24d8de0898334e40cb2966089
original_url: "https://arxiv.org/abs/2608.03048"
processed: 2026-08-05
language: zh-CN
---

# PI-Mem：用并行迭代记忆把长上下文推理推进到 360 万 token

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Dawei Liu、Haixu Song、Shuang Cheng 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03048)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PI-Mem- Pushing Long-Context Reasoning to 3.6M Tokens with Parallel-Iterative Memory|查看原始文件]]

## 摘要

- 提出 PI-Mem（并行迭代记忆）：并行处理所有块，并在有界轮数上迭代精炼共享记忆——每轮并行读取所有块（条件于当前记忆），从每块选择新的或互补证据，并把所选证据合并进下一轮的紧凑共享记忆。
- 通过带辅助轮效率奖励的强化学习优化工作流，使模型在积累足够证据后自适应退出，抑制冗余轮次。
- 长上下文推理仍是 LLM 关键瓶颈：近期递归记忆方法面临两个固有挑战——顺序块式更新会用后来的无关内容覆盖早期关键证据；块间串行依赖限制并行性并使延迟随上下文长度增长。
- 用 Qwen3.5-35B-A3B 与 Qwen2.5-7B 在 HotpotQA 上、覆盖最长 360 万 token 的上下文评估：相对递归记忆基线分别 +6.25 与 +7.81 绝对分，推理加速 6.1 倍与 2.1 倍——打破长上下文推理的准确率-效率权衡，为超长文档上的复杂多跳问答提供可扩展方法。

## 正文

论文编号：arXiv:2608.03048v1（更新类型：cross）。以下为摘要全文翻译。

长上下文推理仍是大语言模型的关键瓶颈，因为近期的递归记忆方法面临两个固有挑战：顺序的块式更新可能用后来的无关内容覆盖早期关键证据，而块间串行依赖限制并行性，使延迟随上下文长度增长。为解决这些问题，我们提出 PI-Mem（Parallel-Iterative Memory，并行迭代记忆），一个在有界轮数上并行处理所有块并迭代精炼共享记忆的机制。每轮中，PI-Mem 条件于当前记忆并行读取所有块，从每块选择新的或互补证据，并把所选证据合并进下一轮的紧凑共享记忆。为抑制冗余轮次，我们通过带辅助轮效率奖励的强化学习优化工作流，使模型在积累足够证据后自适应退出。我们用 Qwen3.5-35B-A3B 与 Qwen2.5-7B 在 HotpotQA 基准上评估 PI-Mem，上下文长度覆盖最长 360 万 token，发现它相对递归记忆基线分别提升 +6.25 与 +7.81 绝对分，同时实现 6.1 倍与 2.1 倍的推理加速。这些结果表明，PI-Mem 打破了长上下文推理中的准确率-效率权衡，并为超长文档上的复杂多跳问答提供了可扩展方法。

## 关键词

#长上下文 #记忆机制 #多跳问答 #并行推理
