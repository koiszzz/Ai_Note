---
published: 2026-08-06
title: NormGuard：流匹配强化学习中保持奖励的范数约束
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning.md
source_note: "[[信息源/arXiv cs.LG RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning]]"
source_sha256: f6f0f16b299ffc951e671c88bfe794afca5e2b6174c79321ed40e8a87f992a11
original_url: https://arxiv.org/abs/2606.27771
processed: 2026-08-07
language: zh-CN
---

# NormGuard：流匹配强化学习中保持奖励的范数约束

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.27771)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning|查看原始文件]]

## 摘要

- 发现 RL 后训练使流式生成器的每步速度范数相对参考膨胀 5% 到 15%，三种后训练方法（NFT、AWM、DPO）下该结构特征稳定
- 推理时范数重缩放无法修复：膨胀已与模型权重协同适应，且不携带一致的一阶奖励信号
- 提出 NormGuard 铰链惩罚：仅在速度范数超过参考范数时激活，可与任何基于速度的局部基础损失相加组合
- 在两个基础模型、三种后训练方法、两个奖励代理上一致提升 MLLM 评判的图像质量与取证真实感，同时保持奖励

## 正文

强化学习（RL）后训练改善了流式生成器的奖励对齐，但常常以奖励代理（reward proxy）无法捕捉的方式损害感知质量。我们识别出这种漂移的一个简单结构特征：在三种后训练方法（NFT、AWM、DPO）中，RL 微调使每步速度范数 `\|v_\theta\|` 相对参考膨胀了 5% 到 15%。在无分类器引导（CFG）中已研究过一种范数膨胀形式，在推理时将速度重新缩放到参考范数可以减轻由此产生的伪影。然而，这种推理时修正并不能干净地迁移到 RL：在推理时将 `v_\theta` 重新缩放到与 `\|v_\text{ref}\|` 匹配，既不能改善奖励，也不能修复质量退化，因为膨胀已经与模型权重协同适应。此外，伴随灵敏度分析（adjoint sensitivity analysis）表明，速度大小重缩放在该批次层面不携带一致的一阶奖励信号，说明抑制范数膨胀不太可能移除某个始终携带奖励的分量。由于推理时重整化失败而范数抑制不产生奖励代价，训练时干预是合适的策略。综合这些发现，我们提出 NormGuard，一种仅在 `\|v_\theta\|` 超过 `\|v_\text{ref}\|` 时激活的铰链惩罚，并能与任何基于速度的局部基础损失相加组合。在两个基础模型、三种后训练方法和两个奖励代理下，NormGuard 一致地改善了 MLLM 评判的图像质量和取证真实感，同时保持奖励，且增益在少步推理下放大，不能由提前停止解释。

## 关键词

#强化学习 #后训练 #流匹配 #范数膨胀 #图像质量
