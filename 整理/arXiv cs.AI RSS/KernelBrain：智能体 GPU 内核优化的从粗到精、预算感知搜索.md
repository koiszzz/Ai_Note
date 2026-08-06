---
title: "KernelBrain：智能体 GPU 内核优化的从粗到精、预算感知搜索"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/KernelBrain- Coarse-to-Fine, Budget-Aware Search for Agentic GPU Kernel Optimization.md"
source_note: "[[信息源/arXiv cs.AI RSS/KernelBrain- Coarse-to-Fine, Budget-Aware Search for Agentic GPU Kernel Optimization]]"
source_sha256: 211178dd7fe084bd4f6b6587be9c903f65cc8f183558c290f823ed71feea5a2c
original_url: "https://arxiv.org/abs/2608.02611"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# KernelBrain：智能体 GPU 内核优化的从粗到精、预算感知搜索

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Shuai Che、Gang Peng
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02611)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/KernelBrain- Coarse-to-Fine, Budget-Aware Search for Agentic GPU Kernel Optimization|查看原始文件]]

## 摘要

- 提出实用优化智能体：结合 LLM 引导突变、自适应资源分配、策略门控评估与剖析器知情的诊断。
- 系统用低成本评估筛选大量候选，只把高保真预算分配给有前景的幸存者，以优化与进化 GPU 内核。
- 在重要的 Triton 内核生成任务上，该设计同时改善内核质量与搜索效率：相对 PyTorch 达到 0.88x–6.72x 加速，相对最先进内核智能体最高 1.4x 加速，优化时间最高降低 48%。

## 正文

论文编号：arXiv:2608.02611v1（更新类型：cross）。以下为摘要全文翻译。

自动化 GPU 内核优化在实践中仍然困难：生成的变体可能违反正确性约束，运行时测量带噪，搜索常常过早停滞。我们提出一个实用优化智能体，结合 LLM 引导突变、自适应资源分配、策略门控评估与剖析器知情的诊断。该系统用低成本评估筛选大量候选，只把更高保真的预算分配给有前景的幸存者，以优化与进化 GPU 内核。在重要的 Triton 内核生成任务上，这种设计同时改善内核质量与搜索效率：相对 PyTorch 达到 0.88x–6.72x 的加速，相对最先进的智能体内核最高 1.4x 加速，优化时间最高降低 48%。

## 关键词

#GPU内核优化 #智能体 #Triton #预算感知搜索
