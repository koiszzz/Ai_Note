---
published: 2026-08-05
title: "Video-DeepResearch：迈向下一代多模态深度研究智能体"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Video-DeepResearch- Towards the Next-Generation Multimodal Deepresearch Agent.md"
source_note: "[[信息源/arXiv cs.AI RSS/Video-DeepResearch- Towards the Next-Generation Multimodal Deepresearch Agent]]"
source_sha256: 000e9663259d78a9647409bbd5d249e9aea0ce6e33daeef04f1cdc8617d9d3bd
original_url: "https://arxiv.org/abs/2608.03979"
processed: 2026-08-05
language: zh-CN
---

# Video-DeepResearch：迈向下一代多模态深度研究智能体

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhen Fang、Yu Zeng、Wenxuan Huang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03979)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Video-DeepResearch- Towards the Next-Generation Multimodal Deepresearch Agent|查看原始文件]]

## 摘要

- 引入 Video-DeepResearch（Video-DR），把多模态智能体从静态图像扩展到连续视频流：该设置需要密集时空接地与开放网络探索的结合。
- 初步评估揭示当前模型的两个关键瓶颈：模态偏差（智能体绕过视觉工具偏爱文本搜索）与参数知识泄漏（模型依赖内部记忆而非真正工具增强执行）；提出 Video-DR，采用解耦感知-探索流水线加阶段式工具解锁，强制在网络检索前进行穷尽跨帧视觉接地。
- 框架采用两阶段训练配方：监督微调后接组相对策略优化（GRPO），实现打破模仿学习天花板的自主探索；策展 Video-DR-Bench，含 200 个复杂多跳 VQA 实例的人-AI 协作基准。
- 实证：Video-DeepResearch-35B-A3B 建立 64.0% 平均准确率新最先进，超过专有 Claude-4.5-Sonnet（59.0%）5.0 分，显著优于 GPT-5（52.5%）与 Gemini 2.5 Pro（57.5%）；30B-A3B 变体达 59.3%，与 Claude-4.5-Sonnet 竞争，展示训练范式即使在紧凑规模也有效；代码：https://github.com/Osilly/Vision-DeepResearch

## 正文

论文编号：arXiv:2608.03979v1（更新类型：cross）。以下为摘要全文翻译。

我们引入 Video-DeepResearch（Video-DR），把多模态智能体从静态图像扩展到连续视频流：该设置需要密集时空接地与开放网络探索相结合。初步评估揭示当前模型的两个关键瓶颈：（1）模态偏差——智能体绕过视觉工具，偏爱文本搜索；（2）参数知识泄漏——模型依赖内部记忆而非真正工具增强执行。为应对这些挑战，我们提出 Video-DR，采用带阶段式工具解锁的解耦感知-探索流水线，强制在网络检索之前进行穷尽的跨帧视觉接地。我们的框架采用两阶段训练配方：监督微调后接组相对策略优化（GRPO），实现打破模仿学习天花板的自主探索。此外，我们策展 Video-DR-Bench，一个由 200 个复杂多跳 VQA 实例组成的人-AI 协作基准。实证结果表明，我们的 Video-DeepResearch-35B-A3B 建立了 64.0% 平均准确率的新最先进，超过专有 Claude-4.5-Sonnet（59.0%）5.0 分，并显著优于 GPT-5（52.5%）与 Gemini 2.5 Pro（57.5%）。30B-A3B 变体达到 59.3%，与 Claude-4.5-Sonnet 竞争，展示了我们训练范式即使在紧凑规模下也有效。代码：https://github.com/Osilly/Vision-DeepResearch

## 关键词

#深度研究 #视频理解 #多模态智能体 #GRPO
