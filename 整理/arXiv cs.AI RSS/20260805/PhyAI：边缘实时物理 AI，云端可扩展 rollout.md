---
published: 2026-08-05
title: "PhyAI：边缘实时物理 AI，云端可扩展 rollout"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PhyAI- Real-Time Physical AI at the Edge, Scalable Rollouts in the Cloud.md"
source_note: "[[信息源/arXiv cs.AI RSS/PhyAI- Real-Time Physical AI at the Edge, Scalable Rollouts in the Cloud]]"
source_sha256: 1b73ef076a96a08af58d1afdefbbc89553b1a70e0ed8d2be5c819c0d96f3e003
original_url: "https://arxiv.org/abs/2608.03682"
processed: 2026-08-05
language: zh-CN
---

# PhyAI：边缘实时物理 AI，云端可扩展 rollout

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Chenghua Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03682)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PhyAI- Real-Time Physical AI at the Edge, Scalable Rollouts in the Cloud|查看原始文件]]

## 摘要

- 构建 PhyAI，单一运行时的物理 AI 推理引擎：把架构特定条件化、求解器、缓存与输出逻辑放在模型适配器中，共享图执行、内核、内存管理与并行服务；同一代码库在机载、边缘与云端部署的单或多 GPU 上运行 VLA 模型与世界-动作模型（WAM）。
- 物理 AI 策略在整个生命周期需要推理（模型评估、云端 RL rollout、边缘 GPU 服务与机载部署），这些设置共享同一检查点与动作语义，却常依赖分离的推理程序。
- PhyAI 相对 pi0、pi0.5、GR00T N1.7 与 MiniCPM-Robot 的官方实现取得 1.40x–4.65x 加速；Cosmos3-Nano-Policy-DROID 上把 8 张 H20 GPU 的延迟从 2.46 秒降至 1.18 秒（CFG=2、TP=4），2.08 倍加速；在适配器接口上于发布当天加入 MiniCPM-Robot。
- 详细剖析显示不同模型需要不同执行策略：Hopper 系列 GPU 批量 1 时 pi0.5 动作专家占 FLOPs 8.8% 却占延迟 57.2%，批量 32 时占比降至 13.5% 且吞吐约 100 样本/秒；Cosmos3 保持生成主导，批量从 1 增至 16 吞吐仅增 14.3%；引入控制时间 Roofline 区分推理受限与环境受限控制；代码与基准：https://github.com/mingti-org/phyai

## 正文

论文编号：arXiv:2608.03682v1（更新类型：new）。以下为摘要全文翻译。

物理 AI 策略在其整个生命周期都需要推理，包括模型评估、云端强化学习 rollout、边缘 GPU 服务与机载部署。虽然这些设置共享相同的检查点与动作语义，它们往往依赖分离的推理程序。为统一它们，我们构建 PhyAI，一个物理 AI 推理引擎，使用单一运行时：把架构特定的条件化、求解器、缓存与输出逻辑放在模型适配器中，同时共享图执行、内核、内存管理与并行服务。同一代码库在机载、边缘与云端部署的单或多 GPU 上运行视觉-语言-动作（VLA）模型与世界-动作模型（WAM）。我们使用适配器接口在 MiniCPM-Robot 发布当天将其加入。PhyAI 相对 pi0、pi0.5、GR00T N1.7 与 MiniCPM-Robot 的官方实现取得 1.40x–4.65x 的加速。在 Cosmos3-Nano-Policy-DROID 上，它把 8 张 H20 GPU 上的延迟从 2.46 秒降至 1.18 秒（CFG=2、TP=4），即 2.08 倍加速。专用运行时在若干配置中仍然更快，因此我们的目标是一个延迟有竞争力的单一运行时，而非在每种情况下都是最快结果。详细剖析揭示为什么不同模型需要不同的执行策略：在 Hopper 系列 GPU 上批量大小为 1 时，pi0.5 动作专家占 FLOPs 的 8.8%，却占延迟的 57.2%；批量大小 32 时其占比降至 13.5%，吞吐达到约 100 样本/秒。Cosmos3 保持生成主导，批量大小从 1 增至 16 时吞吐仅提升 14.3%。我们进一步引入控制时间 Roofline，区分推理受限与环境受限的控制；测得的 pi0.5 在四个 LIBERO 套件上是环境受限的，而 Cosmos3 保持推理受限。代码与基准：https://github.com/mingti-org/phyai

## 关键词

#物理AI #VLA模型 #推理引擎 #边缘部署
