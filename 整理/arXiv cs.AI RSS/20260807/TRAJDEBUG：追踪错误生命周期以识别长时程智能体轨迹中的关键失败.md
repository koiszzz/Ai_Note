---
published: 2026-08-07
title: "TRAJDEBUG：追踪错误生命周期以识别长时程智能体轨迹中的关键失败"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/TRAJDEBUG- Tracing Error Lifecycle to Identify Critical Failures in Long-Horizon Agent Trajectories.md"
source_note: "[[信息源/arXiv cs.AI RSS/TRAJDEBUG- Tracing Error Lifecycle to Identify Critical Failures in Long-Horizon Agent Trajectories]]"
source_sha256: 6f7569bdfc35bf87b2f6e1f2b29e0615500568ffc1b6e288bc39d31091581f3e
original_url: "https://arxiv.org/abs/2608.06346"
processed: 2026-08-07
language: zh-CN
---

# TRAJDEBUG：追踪错误生命周期以识别长时程智能体轨迹中的关键失败

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yunjia Qi, Zehua Yin, Xintong Shi, Hao Peng, Songyuanyi Lu, Yixian Liu, Richeng Xuan, Yuhong Liu, Zhichao Hu, Xiaozhi Wang, Lei Hou, Bin Xu, Juanzi Li
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.06346)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/TRAJDEBUG- Tracing Error Lifecycle to Identify Critical Failures in Long-Horizon Agent Trajectories|查看原始文件]]

## 摘要

- 基于 LLM 的智能体系统在复杂领域显示卓越能力，同时饱受级联错误与调试困难；关键错误检测旨在定位失败轨迹中对最终失败负责的最早错误步骤。
- 进展面临两大挑战：①长轨迹使识别单个错误困难，因判断某步的证据可能分散在遥远指令、观察与先前上下文中；②失败轨迹常含多个下游效应不同的局部错误，其中只有部分仍对最终失败负责。
- 提出 TrajDebug：错误生命周期追踪框架，以多粒度历史压缩与基于证据的错误识别应对长轨迹错误发现，并通过追踪每个错误的解决状态与终端影响支持关键归因；构建 TrajErrBench：来自 Tau2Bench 与 SWE-Bench Pro 的 486 条人工标注失败轨迹基准，覆盖真实工具使用与编码场景。
- 多样智能体基准实验表明 TrajDebug 相对现有基线取得最佳总体性能，应用研究进一步证明其诊断提供改善下游智能体成功的可操作反馈；将发布代码与数据。

## 正文

基于 LLM 的智能体系统在复杂领域显示卓越能力，同时饱受级联错误与调试困难。关键错误检测（critical error detection）旨在定位失败轨迹中对最终失败负责的最早错误步骤。然而，进展面临两个主要挑战。首先，长轨迹使识别单个错误困难，因为判断一个步骤的证据可能分散在遥远的指令、观察与先前上下文中。其次，失败轨迹往往包含多个下游效应不同的局部错误，其中只有一些仍对最终失败负责。本工作中，我们提出 TrajDebug，一个错误生命周期追踪框架，以多粒度历史压缩与基于证据的错误识别应对长轨迹错误发现，并通过追踪每个错误的解决状态与终端影响支持关键归因。我们进一步构建 TrajErrBench，一个包含来自 Tau2Bench 与 SWE-Bench Pro 的 486 条人工标注失败轨迹的基准，覆盖真实的工具使用与编码场景。在多样智能体基准上的实验表明，TrajDebug 相对现有基线取得最佳总体性能，而应用研究进一步证明其诊断提供了改善下游智能体成功的可操作反馈。我们将发布代码与数据以促进进一步研究。

## 关键词

#智能体调试 #错误生命周期 #关键归因 #长时程
