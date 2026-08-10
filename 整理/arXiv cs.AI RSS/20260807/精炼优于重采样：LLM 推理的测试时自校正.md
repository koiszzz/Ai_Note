---
published: 2026-08-07
title: "精炼优于重采样：LLM 推理的测试时自校正"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Refining Over Resampling- Test-Time Self-Correction for LLM Reasoning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Refining Over Resampling- Test-Time Self-Correction for LLM Reasoning]]"
source_sha256: 4b9888c1436523ab30691141072e3cdada75ee77bdc48b58cb03ef36686f9318
original_url: "https://arxiv.org/abs/2608.05643"
processed: 2026-08-07
language: zh-CN
---

# 精炼优于重采样：LLM 推理的测试时自校正

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ahsan Bilal, Muhammad Ahmed Mohsin, Muhammad Umer, Lena Trigg, Ali Subhan, Muhammad Ali, Dean F. Hougen
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05643)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Refining Over Resampling- Test-Time Self-Correction for LLM Reasoning|查看原始文件]]

## 摘要

- 测试时扩展通过使用额外推理计算改进 LLM 推理，但单独更宽采样可能收益递减：新 rollout 常重复现有答案模式而非增加有用推理多样性。
- 基于验证器的选择提供替代，但其性能依赖外部奖励模型的校准。
- 提出免验证器的广度-深度精炼框架，使用测试时计算既探索又改进候选解——方法采样多个独立推理 rollout，通过迭代自批判与自校正精炼每个 rollout，并通过多数投票聚合精炼答案；广度保留多样初始尝试，深度在聚合前修复局部推理错误。
- 跨 AIME24、AIME25、AMC、OlympiadBench 与 MATH500，方法在多个开放权重模型上一致优于贪心解码、多数投票、基于验证器的 best-of-N、束搜索与前瞻解码；例如 Qwen2.5-1.5B 上，MATH500 准确率从最强基于验证器基线提升到 58.0%，AMC 从 25.0% 到 32.5%。
- 结果显示测试时计算用于精炼采样轨迹而非仅采样更多候选或依赖验证器引导选择时更有效。

## 正文

测试时扩展通过使用额外推理计算改进 LLM 推理，但单独更宽的采样可能收益递减：新的 rollout 常常重复现有答案模式，而非增加有用的推理多样性。基于验证器的选择提供一种替代，但其性能取决于外部奖励模型的校准。我们提出一个免验证器的广度-深度精炼框架，使用测试时计算既探索又改进候选解。该方法采样多个独立的推理 rollout，通过迭代自批判与自校正精炼每个 rollout，并通过多数投票聚合精炼后的答案。广度保留多样化的初始尝试，而深度在聚合之前修复局部推理错误。在 AIME24、AIME25、AMC、OlympiadBench 与 MATH500 上，我们的方法在多个开放权重模型上一致优于贪心解码、多数投票、基于验证器的 best-of-N、束搜索与前瞻解码。例如，使用 Qwen2.5-1.5B，准确率从最强的基于验证器基线提升到 MATH500 上的 58.0%，AMC 上从 25.0% 提升到 32.5%。这些结果表明，测试时计算在用于精炼采样轨迹而非仅采样更多候选或依赖验证器引导的选择时更有效。

## 关键词

#测试时扩展 #自校正 #推理精炼 #多数投票
