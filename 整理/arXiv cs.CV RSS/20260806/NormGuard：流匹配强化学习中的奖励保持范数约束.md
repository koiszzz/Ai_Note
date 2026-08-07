---
published: 2026-08-06
title: NormGuard：流匹配强化学习中的奖励保持范数约束
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning.md
source_note: "[[信息源/arXiv cs.CV RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning|查看原始文件]]"
source_sha256: e94032b331665f520f3ec25d5bd72a0b60c05ea57ddbe5b2bbaf8e2e431ec273
original_url: https://arxiv.org/abs/2606.27771
processed: 2026-08-07
language: zh-CN
---

# NormGuard：流匹配强化学习中的奖励保持范数约束

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.27771)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/NormGuard- Reward-Preserving Norm Constraints in Flow-Matching Reinforcement Learning|查看原始文件]]

## 摘要

- 强化学习（RL）后训练提升了流式生成器的奖励对齐，但常以奖励代理无法捕捉的方式退化感知质量；识别出漂移的简单结构特征：在 NFT、AWM、DPO 三种后训练方法下，RL 微调将逐步速度范数 `‖v_θ‖` 相对参考值膨胀 5% 至 15%
- 推理时将 `v_θ` 重新缩放以匹配 `‖v_ref‖`，既不能提升奖励也不能修复质量退化，因为膨胀已被共同适应进模型权重；伴随灵敏度分析显示速度幅度重新缩放不携带一致的一阶奖励信号
- 由于推理时重归一化失败且范数抑制无奖励代价，训练时干预是合适策略
- 提出 NormGuard：仅当 `‖v_θ‖` 超过 `‖v_ref‖` 时激活的铰链惩罚，与任何速度局部基础损失可加性组合；在两个基础模型、三种后训练方法、两个奖励代理下一致提升 MLLM 评判的图像质量与取证真实性，同时保持奖励

## 正文

强化学习（RL）后训练提升了基于流（flow-based）生成器的奖励对齐，但往往以奖励代理无法捕捉的方式退化感知质量。我们识别出这种漂移的一个简单结构特征：在三种后训练方法（NFT、AWM、DPO）下，RL 微调会将逐步速度范数 `‖v_θ‖` 相对参考值膨胀 5% 至 15%。

范数膨胀的一种形式已在无分类器引导（CFG）中得到研究，在推理时将速度重新缩放回参考范数可以缓解由此产生的伪影。然而，这种推理时修正无法干净地迁移到 RL：在推理时将 `v_θ` 重新缩放以匹配 `‖v_ref‖`，既不会提升奖励，也无法修复质量退化，因为膨胀已被共同适应进模型权重。此外，伴随灵敏度分析表明，速度幅度重新缩放（velocity magnitude rescaling）在批量层面不携带一致的一阶奖励信号，说明抑制范数膨胀不太可能移除一个持续携带奖励的分量。

由于推理时重归一化失败，而范数抑制又不带来奖励代价，训练时干预成为合适的策略。这些发现共同催生了 NormGuard：一个铰链惩罚（hinge penalty），仅在 `‖v_θ‖` 超过 `‖v_ref‖` 时激活，并且可以与任何速度局部的（velocity-local）基础损失相加组合。在两个基础模型、三种后训练方法和两个奖励代理下，NormGuard 在保持奖励的同时一致地提升了 MLLM 评判的图像质量与取证真实性，且收益在少步推理下进一步放大，并且无法用早停来解释。

## 关键词

#流匹配 #强化学习 #扩散模型 #图像质量 #奖励对齐
