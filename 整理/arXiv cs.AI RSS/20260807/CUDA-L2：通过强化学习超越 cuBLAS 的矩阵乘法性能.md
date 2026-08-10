---
published: 2026-08-07
title: "CUDA-L2：通过强化学习超越 cuBLAS 的矩阵乘法性能"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CUDA-L2- Surpassing cuBLAS Performance for Matrix Multiplication through Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.AI RSS/CUDA-L2- Surpassing cuBLAS Performance for Matrix Multiplication through Reinforcement Learning]]"
source_sha256: 7294b4b0341fa2014c14e62b8d7447f92280ad40b18672b5961bd985a4733370
original_url: "https://arxiv.org/abs/2512.02551"
processed: 2026-08-07
language: zh-CN
---

# CUDA-L2：通过强化学习超越 cuBLAS 的矩阵乘法性能

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Songqiao Su, Xiaoya Li, Albert Wang, Guoyin Wang, Jiwei Li, Chris Shum
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.02551)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CUDA-L2- Surpassing cuBLAS Performance for Matrix Multiplication through Reinforcement Learning|查看原始文件]]

## 摘要

- 提出 CUDA-L2：结合大语言模型（LLM）与强化学习（RL）自动优化半精度通用矩阵乘法（HGEMM）CUDA 内核的系统。
- 以 CUDA 执行速度作为 RL 奖励，CUDA-L2 自动在 1,000 个配置上优化 HGEMM 内核，系统性地优于从广泛使用的 torch.matmul 到英伟达最优闭源库（cuBLAS、cuBLASLt）的主要 matmul 基线。
- 离线模式（内核无时间间隔连续执行）：相对 torch.matmul 平均 +22.0%；相对最优布局配置的 cuBLAS（NN 与 TN）+19.2%；相对查询 cuBLASLt 库并按启发式建议选择算法的 cuBLASLt-heuristic +16.8%；相对从 cuBLASLt 建议中最多 100 个候选选择最快算法的 cuBLASLt-AutoTuning +11.4%。
- 服务器模式（内核随机间隔执行模拟实时推理）加速进一步增加：相对 torch.matmul、cuBLAS、cuBLASLt-heuristic、cuBLASLt-AutoTuning 分别为 +28.7%、+26.0%、+22.4%、+15.9%；证明即使 HGEMM 这类性能最关键的深度优化内核，也可通过 LLM 引导的 RL 自动化在人类难以企及的规模上系统探索配置空间来改进。

## 正文

本文中，我们提出 CUDA-L2，一个结合大语言模型（LLMs）与强化学习（RL）自动优化半精度通用矩阵乘法（Half-precision General Matrix Multiply，HGEMM）CUDA 内核的系统。使用 CUDA 执行速度作为 RL 奖励，CUDA-L2 自动在 1,000 个配置上优化 HGEMM 内核。CUDA-L2 系统性地优于迄今的主要 matmul 基线，从广泛使用的 torch.matmul 到最先进的英伟达闭源库，即 cuBLAS 与 cuBLASLt。在离线模式（内核无时间间隔连续执行）下，CUDA-L2 相对 torch.matmul 平均提升 +22.0%；相对使用最优布局配置（normal-normal NN 与 transposed-normal TN）的 cuBLAS +19.2%；相对查询 cuBLASLt 库并按启发式建议选择算法的 cuBLASLt-heuristic +16.8%；相对从 cuBLASLt 建议中最多 100 个候选选择最快算法的 cuBLASLt-AutoTuning 模型 +11.4%。在服务器模式（内核以随机间隔执行，模拟实时推理）下，加速进一步增加至相对 torch.matmul、cuBLAS、cuBLASLt-heuristic 与 cuBLASLt-AutoTuning 分别 +28.7%、+26.0%、+22.4% 与 +15.9%。CUDA-L2 表明，即使 HGEMM 这类性能最关键、深度优化的内核，也可以通过 LLM 引导的 RL 自动化，在人类不切实际的规模上系统探索配置空间来改进。项目与代码见 github.com/ornith-ai/CUDA-L2。

## 关键词

#CUDA #矩阵乘法 #强化学习 #内核优化
