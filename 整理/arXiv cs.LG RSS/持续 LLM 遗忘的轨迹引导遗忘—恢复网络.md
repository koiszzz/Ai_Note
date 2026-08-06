---
title: "持续 LLM 遗忘的轨迹引导遗忘—恢复网络"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning.md"
source_note: "[[信息源/arXiv cs.LG RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning.]]"
source_sha256: a6bbffe4c7870cb61f0f45df54060389baee0ef017e99c1c6bcd437badff1e64
original_url: "https://arxiv.org/abs/2608.03123"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 持续 LLM 遗忘的轨迹引导遗忘—恢复网络

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Zezheng Wu、Xinghe Cheng、Qinggang Zhang、Haoran Luo、Jiapu Wang、Qing Yang、Jingwei Zhang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03123)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Trajectory-Guided Forget-Recover Network for Continual LLM Unlearning.|查看原始文件]]

## 摘要

- 机器遗忘旨在消除敏感数据对模型的影响；真实世界中遗忘请求持续到达，产生两个挑战：
- 第一，遗忘干预可能把目标相关计算重新分配到剩余通路，使先前遗忘的知识重新涌现；
- 第二，重复遗忘干预可能逐渐减少保留效用所需的模型容量。
- 提出轨迹引导遗忘—恢复网络（TFR-Net）：跨请求跟踪通道级风险，把持续目标相关通道与瞬态热点分离，只抑制持续通道。
- TFR-Net 还通过重新激活休眠通道恢复模型容量：这些通道对保留效用贡献强、当前与历史遗忘风险低；仅当保留效用退化保持在预定容差内时接受恢复。
- 四个数据集上的实验表明 TFR-Net 一致取得比代表性基线更有利的遗忘有效性与保留效用权衡。

## 正文

论文编号：arXiv:2608.03123v1（更新类型：new）。以下为摘要全文翻译。

机器遗忘旨在消除敏感数据对模型的影响。在现实世界中，遗忘请求持续到达，这产生两个挑战。首先，一次遗忘干预可能把目标相关的计算重新分布到剩余通路，使先前被遗忘的知识重新涌现。其次，重复的遗忘干预可能逐步减少保留效用所需的模型容量。为应对这些挑战，我们提出轨迹引导遗忘—恢复网络（Trajectory-guided Forget-Recover Network，TFR-Net）。TFR-Net 跨请求跟踪通道级风险。它把持续的目标相关通道与瞬态热点分离，并只抑制持续通道。TFR-Net 还通过重新激活休眠通道恢复模型容量。这些通道对保留效用做出强贡献，并表现出低当前与历史遗忘风险。只有当保留效用退化保持在预定义容差内时，恢复才被接受。在四个数据集上的实验表明，TFR-Net 一致地取得比代表性基线更有利的遗忘有效性与保留效用之间的权衡。

## 关键词

#机器遗忘 #持续学习 #LLM #通道级风险 #容量恢复
