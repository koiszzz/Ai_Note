---
published: 2026-08-07
title: "在线推理校准：测试时训练实现可泛化的保形 LLM 推理"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Online Reasoning Calibration- Test-Time Training Enables Generalizable Conformal LLM Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Online Reasoning Calibration- Test-Time Training Enables Generalizable Conformal LLM Reasoning]]"
source_sha256: 691507b2ccc3a3be4b0a89e5c9968d4b8167592cc797688808e13b3330766b33
original_url: "https://arxiv.org/abs/2604.01170"
processed: 2026-08-07
language: zh-CN
---

# 在线推理校准：测试时训练实现可泛化的保形 LLM 推理

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Cai Zhou, Zekai Wang, Menghua Wu, Qianyu Julie Zhu, Flora C. Shi, Chenyu Wang, Ashia Wilson, Tommi Jaakkola, Stephen Bates
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2604.01170)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Online Reasoning Calibration- Test-Time Training Enables Generalizable Conformal LLM Reasoning|查看原始文件]]

## 摘要

- 测试时扩展使大语言模型能解决极难任务，但最先进结果以高昂计算成本为代价；这些低效可归因于后训练语言模型的误校准与流行采样技术缺乏校准。
- 呈现在线推理校准（ORCA）：校准采样过程的框架，借鉴保形预测与测试时训练——引入元学习程序，为每个输入更新校准模块，在分布漂移下（如推理不同阶段的思维模式，或模型开发与部署之间提示分布）提供有效置信估计。
- ORCA 不仅提供保形风险的理论保证，还在不同推理任务上实证展示更高效率与泛化；在风险水平 δ=0.1 下，ORCA 提升 Qwen2.5-32B 分布内任务效率，监督标签节省最多 47.5%、自一致性标签节省 40.7%。
- 零样本域外设置下，将 MATH-500 节省从静态校准基线 24.8% 提升到 67.0%，同时保持低经验错误率，且相同趋势跨模型家族与下游基准保持；代码公开。

## 正文

虽然测试时扩展使大语言模型能够解决极难的任务，最先进的结果以高昂的计算成本为代价。这些低效可归因于后训练语言模型的误校准（miscalibration）以及流行采样技术缺乏校准。这里，我们呈现在线推理校准（Online Reasoning Calibration，ORCA），一个校准采样过程的框架，借鉴保形预测（conformal prediction）与测试时训练（test-time training）。具体而言，我们引入一个元学习程序，为每个输入更新校准模块。这使我们能在分布漂移（distributional shift）下提供有效的置信估计，例如推理不同阶段出现的思维模式，或模型开发与部署之间提示分布的变化。ORCA 不仅提供保形风险的理论保证，还实证展示跨不同推理任务的更高效率与泛化。在风险水平 δ=0.1 下，ORCA 提升 Qwen2.5-32B 在分布内任务上的效率，监督标签节省最多 47.5%，自一致性标签节省 40.7%。在零样本域外设置下，它将 MATH-500 的节省从静态校准基线的 24.8% 提升到 67.0%，同时保持低经验错误率，且相同趋势跨模型家族与下游基准保持。我们的代码公开于 https://github.com/wzekai99/ORCA。

## 关键词

#保形预测 #测试时训练 #推理校准 #采样效率
