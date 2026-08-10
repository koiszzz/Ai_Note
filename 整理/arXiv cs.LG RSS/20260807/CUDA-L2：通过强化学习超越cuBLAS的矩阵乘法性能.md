---
published: 2026-08-07
title: "CUDA-L2：通过强化学习超越 cuBLAS 的矩阵乘法性能"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/CUDA-L2- Surpassing cuBLAS Performance for Matrix Multiplication through Reinforcement Learning.md"
source_note: "[[信息源/arXiv cs.LG RSS/CUDA-L2- Surpassing cuBLAS Performance for Matrix Multiplication through Reinforcement Learning]]"
source_sha256: a33ae3d1fb1b3e778c400a5b9a6efff17bb9d332542032a4105e48a8c27025a4
original_url: "https://arxiv.org/abs/2512.02551"
processed: 2026-08-07
language: zh-CN
---

# CUDA-L2：通过强化学习超越 cuBLAS 的矩阵乘法性能

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Songqiao Su, Xiaoya Li, Albert Wang, Guoyin Wang, Jiwei Li, Chris Shum
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2512.02551)

## 摘要

- 提出 CUDA-L2：结合 LLM 与强化学习自动优化半精度通用矩阵乘法（HGEMM）CUDA 内核，以 CUDA 执行速度为 RL 奖励，跨 1000 个配置自动优化。
- 离线模式平均较 torch.matmul +22.0%、较最优布局 cuBLAS +19.2%、较 cuBLASLt-heuristic +16.8%、较最具竞争力的 cuBLASLt-AutoTuning +11.4%。
- 服务器模式下加速进一步提升至 +28.7%、+26.0%、+22.4%、+15.9%。
- 证明即使 HGEMM 这类最关键、重度优化的内核也能通过 LLM 引导 RL 自动化以人类不可及规模系统探索配置空间来改进。

## 正文

本文提出 CUDA-L2，一个结合大语言模型（LLM）与强化学习（RL）自动优化半精度通用矩阵乘法（HGEMM）CUDA 内核的系统。以 CUDA 执行速度作为 RL 奖励，CUDA-L2 跨 1000 个配置自动优化 HGEMM 内核。CUDA-L2 系统性超越迄今的主要矩阵乘法基线，从广泛使用的 torch.matmul 到最先进的英伟达闭源库 cuBLAS、cuBLASLt。在离线模式（内核无时间间隔连续执行）下，CUDA-L2 相对 torch.matmul 平均 +22.0%；相对使用最优布局配置（normal-normal NN 与转置-normal TN）的 cuBLAS +19.2%；相对查询 cuBLASLt 库并按启发式建议选择算法的 cuBLASLt-heuristic +16.8%；相对从 cuBLASLt 建议的多达 100 个候选中选择最快算法的 cuBLASLt-AutoTuning +11.4%。在服务器模式（内核以随机间隔执行、模拟实时推理）下，加速进一步提升至 torch.matmul +28.7%、cuBLAS +26.0%、cuBLASLt-heuristic +22.4%、cuBLASLt-AutoTuning +15.9%。CUDA-L2 表明，即使 HGEMM 这类最关键、重度优化的内核，也能通过 LLM 引导的 RL 自动化得到改进——以对人类不切实际的规模系统探索配置空间。项目与代码见 github.com/ornith-ai/CUDA-L2。

## 关键词

CUDA 内核优化、强化学习、LLM、矩阵乘法、cuBLAS
