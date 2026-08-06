---
published: 2026-08-05
title: "不要偷看答案：用于无标签 RLVR 的结果掩码组相对策略优化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Don't Peek at the Answer- Outcome-Masked Group Relative Policy Optimization for Label-Free RLVR.md"
source_note: "[[信息源/arXiv cs.AI RSS/Don't Peek at the Answer- Outcome-Masked Group Relative Policy Optimization for Label-Free RLVR]]"
source_sha256: 8ac398ac6cab8710e4db3cf7096e488927fb1035a64b381a76dfe3893bbd83b4
original_url: "https://arxiv.org/abs/2608.03119"
processed: 2026-08-05
language: zh-CN
---

# 不要偷看答案：用于无标签 RLVR 的结果掩码组相对策略优化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yongshi Ye、Liang Zhang、Yidong Chen 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03119)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Don't Peek at the Answer- Outcome-Masked Group Relative Policy Optimization for Label-Free RLVR|查看原始文件]]

## 摘要

- 提出 OM-GRPO，无标签 RLVR 框架，解耦奖励估计与策略优化：掩码答案跨度上的梯度，同时通过软共识信号保留答案级奖励，把优化压力从答案 token 转移开。
- 引入对比增强奖励（Contrast-Augmented Reward）：无需额外 rollout，通过现有轨迹上的低成本成对比较精炼奖励估计。
- 在多个推理基准与三个 LLM 骨干上，OM-GRPO 一致优于现有无标签 RLVR 方法，并以稳定优化匹配有监督 GT 奖励训练。
- 该稳定性在测试时训练设置中尤其有益，OM-GRPO 超过多数投票 4.24 分。

## 正文

论文编号：arXiv:2608.03119v1（更新类型：new）。以下为摘要全文翻译。

可验证奖励强化学习（RLVR）改善 LLM 推理，但通常依赖真实（GT）答案，限制可扩展性。基于投票的无标签 RLVR 用模型样本的答案级共识替代黄金监督。然而，当同一答案级信号既用于估计奖励又驱动 token 级策略优化时，会出现坍缩：模型被鼓励直接强化答案 token 而非改进推理。我们提出 OM-GRPO，一个解耦奖励估计与策略优化的无标签 RLVR 框架。OM-GRPO 掩码答案跨度上的梯度，同时通过软共识信号保留答案级奖励，把优化压力从答案 token 转移开。我们进一步引入对比增强奖励（Contrast-Augmented Reward），通过现有轨迹上的低成本成对比较精炼奖励估计，无需额外 rollout。在多个推理基准与三个 LLM 骨干上，OM-GRPO 一致优于现有无标签 RLVR 方法，并以稳定优化匹配有监督 GT 奖励训练。这种稳定性在测试时训练（Test-Time Training）设置中尤其有益，OM-GRPO 在该设置中超过多数投票 4.24 分。

## 关键词

#强化学习 #RLVR #无标签 #策略优化
