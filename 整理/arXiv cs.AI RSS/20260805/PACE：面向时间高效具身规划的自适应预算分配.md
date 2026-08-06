---
published: 2026-08-05
title: "PACE：面向时间高效具身规划的自适应预算分配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PACE- Adaptive Budget Allocation for Time-Efficient Embodied Planning.md"
source_note: "[[信息源/arXiv cs.AI RSS/PACE- Adaptive Budget Allocation for Time-Efficient Embodied Planning]]"
source_sha256: 688a2d893431761c5d71e5ca7ed9a7619918fa01c01acf737b5eba497aa5f535
original_url: "https://arxiv.org/abs/2608.03034"
processed: 2026-08-05
language: zh-CN
---

# PACE：面向时间高效具身规划的自适应预算分配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yuchen Huang、Xijiang Ying、Zhenhua Ma 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03034)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PACE- Adaptive Budget Allocation for Time-Efficient Embodied Planning|查看原始文件]]

## 摘要

- 提出 PACE（带自适应认知努力的规划）：通过两项关键创新实现推理与执行的交错——交错思考-行动架构（把认知处理与动作执行流水线化）与动态预算分配器（把推理 token 预算适配到可用执行时间窗口）。
- 推理增强的 LLM 在规划任务上取得显著改善，但其部署因推理延迟难以承受（每个规划实例常超过数分钟）而在具身系统中不切实际；根本瓶颈在于现有范式的串行性：模型必须在任何动作执行前完成全部推理，执行时间窗口完全未被利用。
- Robotouille 基准上（Qwen3-8B-AWQ），PACE 实现 10% 的成功率——相对 ReAct+Think 基线提升 67%——同时思考时间相对无约束推理加速 6.9 倍。
- 框架把 66.8% 的思考时间隐藏在执行窗口内，证明战略性认知努力分配能同时改善规划质量与时间效率；时间感知架构创新使推理模型能在延迟敏感的具身领域运行。

## 正文

论文编号：arXiv:2608.03034v1（更新类型：cross）。以下为摘要全文翻译。

推理增强的大语言模型在规划任务上取得了显著改善，然而它们在具身系统中的部署仍不切实际，因为推理延迟难以承受——每个规划实例常常超过数分钟。根本瓶颈源于现有范式的串行性：模型必须在任何动作执行之前完成所有推理，使执行时间窗口完全未被利用。我们引入 PACE（Planning with Adaptive Cognitive Effort，带自适应认知努力的规划），一个通过两项关键创新实现推理与执行交错的框架：交错思考-行动架构（Interleaved Think-Act），把认知处理与动作执行流水线化；动态预算分配器（Dynamic Budget Allocator），把推理 token 预算适配到可用的执行时间窗口。在 Robotouille 基准上使用 Qwen3-8B-AWQ，PACE 实现 10% 的成功率——相对 ReAct+Think 基线提升 67%——同时相对无约束推理提供 6.9 倍的思考时间加速。该框架把 66.8% 的思考时间隐藏在执行窗口内，证明战略性的认知努力分配可以同时改善规划质量与时间效率。这些结果提供证据：时间感知的架构创新使推理模型能够在延迟敏感的具身领域运行，而此前它们在那里不切实际。

## 关键词

#具身智能 #规划 #推理加速 #时间效率
