---
published: 2026-08-07
title: "LC-GRPO：用朗之万校正弥合基于流的 GRPO 训练-推理差距"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/LC-GRPO- Bridging Train-Inference Gap for Flow-Based GRPO with Langevin Correction.md"
source_note: "[[信息源/arXiv cs.CV RSS/LC-GRPO- Bridging Train-Inference Gap for Flow-Based GRPO with Langevin Correction]]"
source_sha256: f9f18c992f30edd30914da2cd25de79b83764d9e52ce03d247255d808e62ad36
original_url: "https://arxiv.org/abs/2608.05600"
processed: 2026-08-07
language: zh-CN
---

# LC-GRPO：用朗之万校正弥合基于流的 GRPO 训练-推理差距

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Yingqing Guo, Hui Yuan, Zijian He, Mengdi Wang, Zheng Ding
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05600)

## 摘要

- 基于流的生成模型通常求解确定性 ODE 采样，而在线强化学习需要随机 rollout 进行策略探索与优化；现有流模型 GRPO 方法因此在训练时用 SDE 替换推理时 ODE。
- ODE 与 SDE 在连续时间共享边际分布，但有限步离散化可能差异显著；SDE rollout 常因探索噪声增加而变模糊，产生 RL 样本与测试时 ODE 采样器生成样本的错配。
- 提出 LC-GRPO：带朗之万校正的流式 GRPO 框架；每个 rollout 转移先取推理对齐的 ODE 欧拉步，再应用针对所得时间步边际分布的随机朗之万校正；所需分数直接从流速度恢复，无需额外分数模型，转移保持各向同性高斯且似然可处理。
- 理论上证明一个朗之万校正步减少不完美 ODE 欧拉步的 Wasserstein 误差；匹配随机性水平下所提转移比反向 SDE 的标准欧拉-丸山离散化更准；SD3.5-Medium、FLUX.1-Dev 与 HunyuanVideo 上一致提升奖励优化并保持生成质量。

## 正文

基于流的生成模型通常通过求解确定性常微分方程（ODE）采样，而在线强化学习需要随机 rollout 进行策略探索与优化。现有流模型 GRPO 方法因此在训练时用随机微分方程（SDE）替换推理时 ODE。尽管 ODE 与 SDE 在连续时间共享相同边际分布，其有限步离散化可能差异显著。特别是，SDE rollout 常因探索噪声增加而变得模糊，造成强化学习所用样本与测试时 ODE 采样器生成样本之间的错配。研究引入 LC-GRPO，一个带朗之万校正的流式 GRPO 框架。每个 rollout 转移先取推理对齐的 ODE 欧拉步，再应用针对所得时间步边际分布的随机朗之万校正。所需分数直接从流速度恢复，无需额外分数模型，而所得转移保持各向同性高斯、似然可处理，利于策略优化。研究理论上证明，在合适条件下，一个朗之万校正步减少不完美 ODE 欧拉步的 Wasserstein 误差；在匹配随机性水平下，所提转移可比反向 SDE 的标准欧拉-丸山离散化更准确。SD3.5-Medium、FLUX.1-Dev 与 HunyuanVideo 上的实验表明，LC-GRPO 在文生图与文生视频任务上一致提升奖励优化、保持生成质量，并大幅缩小随机训练 rollout 与确定性测试时 ODE 推理之间的差距。

## 关键词

GRPO、基于流生成模型、朗之万校正、强化学习、文生图
