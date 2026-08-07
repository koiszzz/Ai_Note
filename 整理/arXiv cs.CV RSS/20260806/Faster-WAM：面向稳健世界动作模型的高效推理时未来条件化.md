---
published: 2026-08-06
title: Faster-WAM：面向稳健世界动作模型的高效推理时未来条件化
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Faster-WAM- Efficient Inference-Time Future Conditioning for Robust World Action Models.md
source_note: "[[信息源/arXiv cs.CV RSS/Faster-WAM- Efficient Inference-Time Future Conditioning for Robust World Action Models]]"
source_sha256: 04a3e22c3af3f7f684cf2f8a18bd06f7aa93f8571a41b0175414605aa2119a42
original_url: https://arxiv.org/abs/2608.04404
processed: 2026-08-07
language: zh-CN
---

# Faster-WAM：面向稳健世界动作模型的高效推理时未来条件化

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04404)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Faster-WAM- Efficient Inference-Time Future Conditioning for Robust World Action Models|查看原始文件]]

## 摘要

- 世界动作模型（WAM）通过学习当前观察之外环境如何演变来改进机器人操控，但现有方法面临根本性两难：Joint-WAM 在推理时保留未来感知表示但计算成本高昂，高效替代方案在推理时移除未来建模、可能失去时序推理的鲁棒性收益。
- 重新审视 WAM 中未来表示的作用，表明推理时未来条件化对分布偏移下的泛化至关重要。
- 提出 Faster-WAM，一个高效的未来条件化 WAM，保留未来表示同时避免昂贵的视频-动作交互：稀疏未来条件化框架只计算一次未来表示并在动作去噪过程中选择性复用；SparseMoT 用紧凑网络阶段的稀疏视频-动作交互替代无处不在的逐层融合，Interval KV-Fusion 在不增加注意力复杂度的情况下聚合多深度未来表示。
- 实验表明 Faster-WAM 的性能-效率权衡显著优于现有 WAM：在分布外 LIBERO-Plus 基准上相比 Fast-WAM 成功率从 49.14% 提升到 73.57%，同时比 Joint-WAM 快 2.21 倍；并在 LIBERO 和 RoboTwin 2.0 上取得最先进性能，在真实世界操控中展现出强鲁棒性。

## 正文

世界动作模型（WAMs）通过学习环境在当前观察之外如何演变来改进机器人操控。然而，现有方法面临一个根本性两难：Joint-WAM 在推理时保留未来感知表示，但带来高昂的计算成本；而高效的替代方案在推理时移除未来建模，可能失去时序推理的鲁棒性收益。在本工作中，我们重新审视未来表示在 WAM 中的作用，并表明推理时的未来条件化对于分布偏移下的泛化至关重要。这一观察催生了 Faster-WAM，一个高效的未来条件化 WAM，它在保留未来表示的同时避免了昂贵的视频-动作交互。Faster-WAM 引入一个稀疏未来条件化框架，只计算一次未来表示，并在整个动作去噪过程中选择性地复用它们。具体而言，我们提出 SparseMoT，用紧凑网络阶段子集上的选择性视频-动作交互替代无处不在的逐层融合；以及 Interval KV-Fusion，在不增加注意力复杂度的情况下聚合多深度的未来表示。实验表明，Faster-WAM 实现了比现有 WAM 显著更优的性能-效率权衡。在分布外 LIBERO-Plus 基准上，与 Fast-WAM 相比，Faster-WAM 将成功率从 49.14% 提升到 73.57%，同时运行速度比 Joint-WAM 快 2.21 倍。它还在 LIBERO 和 RoboTwin 2.0 上取得了最先进的性能，并在真实世界操控中展现出强鲁棒性。

## 关键词

#世界模型 #机器人操控 #未来条件化 #扩散模型 #效率
