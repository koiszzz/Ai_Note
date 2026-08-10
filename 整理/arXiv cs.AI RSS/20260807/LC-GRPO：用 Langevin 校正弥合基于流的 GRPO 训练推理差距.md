---
published: 2026-08-07
title: "LC-GRPO：用 Langevin 校正弥合基于流的 GRPO 训练推理差距"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/LC-GRPO- Bridging Train-Inference Gap for Flow-Based GRPO with Langevin Correction.md"
source_note: "[[信息源/arXiv cs.AI RSS/LC-GRPO- Bridging Train-Inference Gap for Flow-Based GRPO with Langevin Correction]]"
source_sha256: 6c09acd807db747803ab71b08c9f480be9d1e7c2bbc2eb3e32e41cc82c8768d0
original_url: "https://arxiv.org/abs/2608.05600"
processed: 2026-08-07
language: zh-CN
---

# LC-GRPO：用 Langevin 校正弥合基于流的 GRPO 训练推理差距

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yingqing Guo, Hui Yuan, Zijian He, Mengdi Wang, Zheng Ding
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05600)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/LC-GRPO- Bridging Train-Inference Gap for Flow-Based GRPO with Langevin Correction|查看原始文件]]

## 摘要

- 基于流的生成模型通常通过求解确定性常微分方程（ODE）采样，而在线强化学习需要随机 rollout 进行策略探索与优化；现有用于流模型的 GRPO 方法因此在训练期间用随机微分方程（SDE）替换推理时 ODE。
- 尽管 ODE 与 SDE 在连续时间共享相同边缘分布，其有限步离散化可能差异显著；尤其 SDE rollout 常随探索噪声增大而变模糊，造成强化学习所用样本与测试时 ODE 采样器生成样本之间的失配。
- 引入 LC-GRPO：带 Langevin 校正的基于流 GRPO 框架——每个 rollout 迁移先取推理对齐的 ODE Euler 步，再应用针对所得时间步边缘分布的随机 Langevin 校正；所需分数直接从流速度恢复，无需额外分数模型，所得迁移保持各向同性高斯且似然可处理，便于策略优化。
- 理论上证明在合适条件下一步 Langevin 校正降低不完美 ODE Euler 步的 Wasserstein 误差；在匹配随机性水平下，所提迁移可比反向 SDE 的标准 Euler-Maruyama 离散化更准确；SD3.5-Medium、FLUX.1-Dev 与 HunyuanVideo 实验表明 LC-GRPO 在文生图与文生视频任务中一致改善奖励优化、保持生成质量，并大幅缩小随机训练 rollout 与确定性测试时 ODE 推理之间的差距。

## 正文

基于流的生成模型通常通过求解确定性常微分方程（ODE）采样，而在线强化学习需要随机 rollout 进行策略探索与优化。现有用于流模型的 GRPO 方法因此在训练期间用随机微分方程（SDE）替换推理时 ODE。尽管 ODE 与 SDE 在连续时间共享相同边缘分布，其有限步离散化可能差异显著。尤其 SDE rollout 常随探索噪声增大而变模糊，在强化学习所用样本与测试时 ODE 采样器生成样本之间造成失配。我们引入 LC-GRPO，一个带 Langevin 校正的基于流 GRPO 框架。每个 rollout 迁移首先采取推理对齐的 ODE Euler 步，然后应用针对所得时间步边缘分布的随机 Langevin 校正。所需分数直接从流速度恢复，无需额外分数模型，而所得迁移保持各向同性高斯且似然可处理，便于策略优化。我们理论上表明，在合适条件下，一步 Langevin 校正降低不完美 ODE Euler 步的 Wasserstein 误差。在匹配随机性水平下，我们进一步表明所提迁移可以比反向 SDE 的标准 Euler-Maruyama 离散化更准确。SD3.5-Medium、FLUX.1-Dev 与 HunyuanVideo 上的实验表明，LC-GRPO 在文生图与文生视频任务中一致改善奖励优化、保持生成质量，并大幅缩小随机训练 rollout 与确定性测试时 ODE 推理之间的差距。

## 关键词

#基于流的生成模型 #GRPO #Langevin校正 #训练推理差距
