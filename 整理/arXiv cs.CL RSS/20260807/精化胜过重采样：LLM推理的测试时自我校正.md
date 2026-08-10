---
published: 2026-08-07
title: "精化胜过重采样：LLM 推理的测试时自我校正"
source: "arXiv cs.CL RSS"
original_file: "信息源/arXiv cs.CL RSS/Refining Over Resampling- Test-Time Self-Correction for LLM Reasoning.md"
source_note: "[[信息源/arXiv cs.CL RSS/Refining Over Resampling- Test-Time Self-Correction for LLM Reasoning]]"
source_sha256: 8a66d4a995a09098fe04f78c07b5fcbd9f6bbe513c83eacb296122caf1c0b1d9
original_url: "https://arxiv.org/abs/2608.05643"
processed: 2026-08-07
language: zh-CN
---

# 精化胜过重采样：LLM 推理的测试时自我校正

> [!info] 来源信息
> - **来源**：[arXiv cs.CL RSS](https://export.arxiv.org/rss/cs.CL)
> - **作者**：Ahsan Bilal, Muhammad Ahmed Mohsin, Muhammad Umer, Lena Trigg, Ali Subhan, Muhammad Ali, Dean F. Hougen
> - **发布时间**：2026-08-07
> - **分类**：cs.AI
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05643)

## 摘要

- 测试时扩展经额外推理计算改进 LLM 推理，但仅更宽采样可受收益递减：新 rollout 常重复既有答案模式而非增加有用推理多样性；验证器基选择提供替代，但性能依赖外部奖励模型校准。
- 提出免验证器广度-深度精化框架：用测试时计算既探索又改进候选解；方法采样多个独立推理 rollout，经迭代自我批评与自我校正精化每个 rollout，多数投票聚合精化答案。
- 广度保留多样初始尝试，深度在聚合前修复局部推理错误；AIME24、AIME25、AMC、OlympiadBench 与 MATH500 上方法一致优于贪心解码、多数投票、验证器基 best-of-N、束搜索与前瞻解码（多个开源权重模型）。
- Qwen2.5-1.5B 下准确率从最强验证器基线提升至 MATH500 58.0%、AMC 25.0% 至 32.5%；测试时计算用于精化采样轨迹比仅采样更多候选或依赖验证器引导选择更有效。

## 正文

测试时扩展通过使用额外的推理计算改进 LLM 推理，但仅更宽采样可能遭受收益递减：新的 rollout 常常重复现有的答案模式，而不是增加有用的推理多样性。基于验证器的选择提供了一种替代方案，但其性能取决于外部奖励模型的校准。研究提出一个免验证器的广度-深度（breadth-depth）精化框架：使用测试时计算既探索又改进候选解决方案。该方法采样多个独立的推理 rollout，通过迭代的自我批评与自我校正精化每个 rollout，并通过多数投票聚合精化后的答案。广度保留了多样的初始尝试，而深度在聚合之前修复局部的推理错误。跨 AIME24、AIME25、AMC、OlympiadBench 与 MATH500，该方法在多个开源权重模型上一致优于贪心解码、多数投票、基于验证器的 best-of-N、束搜索与前瞻解码。例如，使用 Qwen2.5-1.5B，准确率从最强的基于验证器的基线提升到 MATH500 上的 58.0%，以及 AMC 上从 25.0% 到 32.5%。这些结果表明，当测试时计算被用于精化采样到的轨迹，而非仅用于采样更多候选或依赖验证器引导的选择时，它可以更有效。

## 关键词

测试时扩展、自我校正、推理、验证器、精化
