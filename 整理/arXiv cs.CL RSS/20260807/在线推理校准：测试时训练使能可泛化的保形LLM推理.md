---
published: 2026-08-07
title: "在线推理校准：测试时训练使能可泛化的保形 LLM 推理"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Online Reasoning Calibration- Test-Time Training Enables Generalizable Conformal LLM Reasoning.md"
source_note: "[[信息源/arXiv cs.CL RSS/Online Reasoning Calibration- Test-Time Training Enables Generalizable Conformal LLM Reasoning]]"
source_sha256: 9eb36c75259b6f45d69c217fddadedccf3cc97874fd5435f4c611d675c51fc09
original_url: "https://arxiv.org/abs/2604.01170"
processed: 2026-08-07
language: zh-CN
---

# 在线推理校准：测试时训练使能可泛化的保形 LLM 推理

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Cai Zhou, Zekai Wang, Menghua Wu, Qianyu Julie Zhu, Flora C. Shi, Chenyu Wang, Ashia Wilson, Tommi Jaakkola, Stephen Bates
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2604.01170)

## 摘要

- 测试时扩展使 LLM 能解决极难任务，但最先进结果以高昂计算成本为代价；低效源于训练后语言模型的失校准与流行采样技术缺乏校准。
- 提出在线推理校准（ORCA）：借鉴保形预测与测试时训练校准采样过程的框架；引入为每个输入更新校准模块的元学习流程，在分布漂移（推理不同阶段的思想模式、开发与部署间的提示分布）下提供有效置信估计。
- ORCA 不仅提供保形风险的理论保证，还实证显示跨不同推理任务的更高效率与泛化。
- 风险水平 δ=0.1 时，ORCA 提升 Qwen2.5-32B 分布内任务效率，监督标签最高节省 47.5%、自一致性标签 40.7%；零样本域外设定下将 MATH-500 节省从静态校准基线 24.8% 提升至 67.0%，保持低经验误差率，趋势跨模型家族与下游基准一致。

## 正文

虽然测试时扩展已使大语言模型能够解决极难任务，最先进结果以高昂计算成本为代价。这些低效可归因于训练后语言模型的失校准，以及流行采样技术缺乏校准。本文提出在线推理校准（Online Reasoning Calibration, ORCA），一个校准采样过程的框架，借鉴保形预测与测试时训练。具体地，研究引入一个为每个输入更新校准模块的元学习流程，从而在分布漂移下（例如推理不同阶段出现的思想模式，或模型开发与部署之间的提示分布）提供有效的置信估计。ORCA 不仅提供保形风险的理论保证，还实证显示跨不同推理任务的更高效率与泛化。在风险水平 δ=0.1 时，ORCA 提升 Qwen2.5-32B 在分布内任务的效率，监督标签节省最高 47.5%、自一致性标签节省最高 40.7%。在零样本域外设定下，它将 MATH-500 的节省从静态校准基线的 24.8% 提升到 67.0%，同时保持低经验误差率；该趋势跨模型家族与下游基准一致。代码公开于 https://github.com/wzekai99/ORCA。

## 关键词

保形预测、测试时训练、推理校准、LLM、采样效率
