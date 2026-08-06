---
published: 2026-08-05
title: "GROW：自回归-扩散 TTS 模型的组相对优势加权在线策略强化学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/GROW- Group-Relative Advantage-Weighted On-Policy Reinforcement Learning of Autoregressive-Diffusion.md"
source_note: "[[信息源/arXiv cs.AI RSS/GROW- Group-Relative Advantage-Weighted On-Policy Reinforcement Learning of Autoregressive-Diffusion]]"
source_sha256: 980d2f02eb9d9ff0b10396739c41d0e992a936a61d48a62178c06af8ef264e4e
original_url: "https://arxiv.org/abs/2608.03215"
processed: 2026-08-05
language: zh-CN
---

# GROW：自回归-扩散 TTS 模型的组相对优势加权在线策略强化学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Guanrou Yang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03215)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/GROW- Group-Relative Advantage-Weighted On-Policy Reinforcement Learning of Autoregressive-Diffusion|查看原始文件]]

## 摘要

- 提出 GROW，直接作用于标准流匹配目标的组相对优势加权在线策略 RL 方法：对每个提示采样一组在线话语，在组内分别标准化可懂度与说话人相似度奖励并组合，用于对流匹配回归重新加权。
- Wasserstein-2 速度惩罚把更新模型锚定到冻结的预训练参考；引入组平均奖励基线把奖励加权转化为优势加权。
- 实例化于 DiTAR 并在 LibriSpeech 与 Seed-TTS EN/ZH 上评估：平均 WER 从 2.016 降至 1.558，说话人相似度从 0.676 升至 0.715，同时保持 UTMOS；用 10-NFE 训练 rollout 与 32-NFE 评估，训练比 32-NFE DiTAR-GRPO 快 2.9 倍，性能相当。
- 将开源完整 GROW 代码、忠实 DiTAR 复现与全部模型检查点。

## 正文

论文编号：arXiv:2608.03215v1（更新类型：cross）。以下为摘要全文翻译。

面向流匹配文本转语音的强化学习因确定性 ODE 采样而复杂化：轨迹级策略梯度方法通常把 ODE 转换为 SDE 并跟踪逐步骤似然比，引入随机扰动与可观开销。我们提出 GROW，一个组相对优势加权的在线策略 RL 方法，直接作用于标准流匹配目标。对每个提示，GROW 采样一组在线话语，在组内分别标准化可懂度与说话人相似度奖励，并组合它们对流匹配回归重新加权。Wasserstein-2 速度惩罚把更新后的模型锚定到冻结的预训练参考。引入组平均奖励基线，把奖励加权转化为优势加权。对于奖励集中的强预训练 TTS 模型，正指数加权被无视奖励的自模仿主导，而零均值有符号优势保留有效的组内信用分配。实例化于 DiTAR 并在 LibriSpeech 与 Seed-TTS EN/ZH 上评估，GROW 把平均 WER 从 2.016 降至 1.558，把说话人相似度从 0.676 提升到 0.715，同时保持 UTMOS。使用 10-NFE 训练 rollout 与 32-NFE 评估，GROW 保持相当性能，同时训练比 32-NFE DiTAR-GRPO 快 2.9 倍。我们将开源完整的 GROW 代码、忠实的 DiTAR 复现与全部模型检查点。

## 关键词

#语音合成 #TTS #强化学习 #流匹配
