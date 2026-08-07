---
published: 2026-08-06
title: DeepThinkVLA：增强视觉-语言-动作模型的推理能力
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models.md
source_note: "[[信息源/arXiv cs.LG RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models]]"
source_sha256: e662f40142fd77317d8db0ccd5faa8dcde54fcc933499b2da27578c10da41407
original_url: https://arxiv.org/abs/2511.15669
processed: 2026-08-07
language: zh-CN
---

# DeepThinkVLA：增强视觉-语言-动作模型的推理能力

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.15669)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/DeepThinkVLA- Enhancing Reasoning Capability of Vision-Language-Action Models|查看原始文件]]

## 摘要

- 确定 CoT 在 VLA 中有效的两个必要条件：解码对齐与因果对齐
- 解码对齐：语言用因果注意力、动作用双向注意力的混合注意力解码器
- 因果对齐：两阶段 SFT-后-RL 流水线，用稀疏任务成功奖励对齐推理-动作链
- LIBERO 成功率 97.0%、LIBERO-Plus 鲁棒性 79.0%、RoboTwin 2.0 成功率 59.3%，均大幅超越基线

## 正文

思维链（CoT）推理真的能改进视觉-语言-动作（VLA）模型，还是仅仅增加了开销？现有的 CoT-VLA 系统报告的收益有限且不一致，然而此前没有任何工作严格诊断过 CoT 在何时以及为何能帮助机器人行动。通过系统性实验，我们确定了 CoT 在 VLA 中有效必须同时满足的两个必要条件：

（1）解码对齐：CoT 与动作必须通过适合各自模态的机制生成；强制二者通过单一自回归解码器不仅次优，而且有害，会使性能下降 4.2 个百分点；

（2）因果对齐：CoT 必须通过基于结果的优化与任务成功建立因果联系；缺少这一点时，在动作执行敏感的动态变化下，有监督的 CoT 与完全没有推理没有区别，表现出 32.0 个百分点的性能下降，与无推理基线的 31.6 个百分点下降几乎相同。

在这些发现的指导下，我们构建了 DeepThinkVLA：一个混合注意力解码器满足条件 1，通过为语言配备因果注意力、为并行动作解码配备双向注意力；一个两阶段 SFT-后-RL 流水线满足条件 2，将完整的推理-动作链与稀疏的任务成功奖励对齐。

DeepThinkVLA 在 LIBERO 上达到 97.0% 的成功率，在 LIBERO-Plus 上达到 79.0% 的鲁棒性（相比之下 `π0`-FAST 为 61.6%），在 RoboTwin 2.0 上达到 59.3% 的成功率，超过最强基线 21.7 个百分点。此外，真实机器人实验为我们的 CoT 数据构建与混合架构的物理适用性提供了初步证据。我们的代码可在 https://github.com/OpenBMB/DeepThinkVLA 获取。

## 关键词

#VLA模型 #思维链 #机器人学习 #强化学习 #推理
