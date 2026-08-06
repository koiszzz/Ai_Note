---
title: "轨迹引导的遗忘-恢复网络用于持续 LLM 遗忘"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning.md"
source_note: "[[信息源/arXiv cs.AI RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning]]"
source_sha256: b92b8da4dd9f5121da4fb777bc95bf2e47cb5dfea375c9a5a6c20818162ca35b
original_url: "https://arxiv.org/abs/2608.03123"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 轨迹引导的遗忘-恢复网络用于持续 LLM 遗忘

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zezheng Wu、Xinghe Cheng、Qinggang Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03123)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning|查看原始文件]]

## 摘要

- 提出轨迹引导遗忘-恢复网络（TFR-Net）：跨请求跟踪通道级风险——分离持久目标相关通道与瞬态热点，只抑制持久通道；通过重新激活休眠通道恢复模型容量（这些通道对保留效用有强贡献且当前与历史遗忘风险低），仅在保留效用退化保持在预定义容差内时接受恢复。
- 机器遗忘旨在消除敏感数据对模型的影响；真实世界遗忘请求持续到达，产生两个挑战：遗忘干预可能把目标相关计算重新分配到剩余通路，使先前遗忘的知识重新涌现；重复遗忘干预可能渐进减少保留效用所需的模型容量。
- 四个数据集上的实验显示 TFR-Net 在遗忘有效性与保留效用之间一致取得比代表性基线更有利的权衡。

## 正文

论文编号：arXiv:2608.03123v1（更新类型：cross）。以下为摘要全文翻译。

机器遗忘旨在消除敏感数据对模型的影响。在现实世界中，遗忘请求持续到达，这带来两个挑战。第一，一次遗忘干预可能把目标相关的计算重新分配到剩余通路，使先前被遗忘的知识重新涌现。第二，重复的遗忘干预可能渐进减少保留保留效用所需的模型容量。为应对这些挑战，我们提出轨迹引导遗忘-恢复网络（Trajectory-guided Forget-Recover Network，TFR-Net）。TFR-Net 跨请求跟踪通道级风险。它把持久的与目标相关的通道与瞬态热点分开，只抑制持久通道。TFR-Net 还通过重新激活休眠通道来恢复模型容量：这些通道对保留效用做出强贡献，且当前与历史遗忘风险低。恢复仅在保留效用退化保持在预定义容差内时被接受。在四个数据集上的实验表明，TFR-Net 在遗忘有效性与保留效用之间一致取得比代表性基线更有利的权衡。

## 关键词

#机器遗忘 #持续学习 #LLM #容量恢复
