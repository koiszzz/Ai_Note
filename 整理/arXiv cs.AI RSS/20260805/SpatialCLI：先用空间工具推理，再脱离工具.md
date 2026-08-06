---
published: 2026-08-05
title: "SpatialCLI：先用空间工具推理，再脱离工具"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/SpatialCLI- Learning to Reason With Spatial Tools, Then Without Them.md"
source_note: "[[信息源/arXiv cs.AI RSS/SpatialCLI- Learning to Reason With Spatial Tools, Then Without Them]]"
source_sha256: 3084fede919bdce09d50de63b81b3e9f806e8445850d71effe4f6d55470ab095
original_url: "https://arxiv.org/abs/2607.27703"
processed: 2026-08-05
language: zh-CN
---

# SpatialCLI：先用空间工具推理，再脱离工具

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yang Zhou、Zixuan Huang、Sunzhu Li 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.27703)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/SpatialCLI- Learning to Reason With Spatial Tools, Then Without Them|查看原始文件]]

## 摘要

- 提出 SpatialCLI，三阶段框架：调用（Call）把专业视觉模型作为空间工具暴露以增强 VLM 感知；学习（Learn）用冷启动 SFT 与智能体 RL 改善工具使用；内化（Internalize）言语化成功工具使用轨迹以内化专业感知能力。
- 视觉-语言模型（VLM）日益用于具身智能体：解释视觉输入、推理空间关系、基于该推理做任务级决策；但存在根本能力错配——通用 VLM 能推理整体任务却常错过决定成功的视觉细节，专业视觉模型能捕获细节却无法转化为任务级决策。
- 引入 SpatialCLI-Bench，516 个示例的组合感知基准，覆盖定位、分割、深度与姿态。
- MindCube 上，SpatialCLI 把 Qwen3-VL-8B-Instruct 从 29.3% 提升到带工具 84.6%，超越带工具 GPT-5.6 Sol（72.1%），内化后无工具保留 73.8%。

## 正文

论文编号：arXiv:2607.27703v2（更新类型：replace）。以下为摘要全文翻译。

视觉-语言模型（VLM）日益被用于具身智能体：解释视觉输入、推理空间关系，并基于该推理做任务级决策。然而，一个根本的能力错配仍然存在：通用 VLM 可以推理整体任务，但往往错过决定成功的视觉细节；而专业视觉模型可以捕获这些细节，却无法把它们转化为任务级决策。在本工作中，我们提出 SpatialCLI，一个教 VLM 先用空间工具推理、再渐进内化它们提供的专业感知能力的框架。SpatialCLI 分三阶段进行：（1）调用（Call）：把专业视觉模型暴露为空间工具，以增强 VLM 的感知；（2）学习（Learn）：用冷启动 SFT 与智能体 RL 改善工具使用；（3）内化（Internalize）：言语化成功的工具使用轨迹，以内化专业感知能力。我们进一步引入 SpatialCLI-Bench，一个覆盖定位、分割、深度与姿态的 516 示例组合感知基准。在 MindCube 上，SpatialCLI 把 Qwen3-VL-8B-Instruct 从 29.3% 提升到带工具 84.6%，超越带工具 GPT-5.6 Sol（72.1%），同时在内化后无工具保留 73.8%。

## 关键词

#具身智能 #空间推理 #VLM #工具学习
