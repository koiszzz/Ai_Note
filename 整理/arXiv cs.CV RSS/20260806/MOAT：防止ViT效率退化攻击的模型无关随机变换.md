---
published: 2026-08-06
title: MOAT：防止ViT效率退化攻击的模型无关随机变换
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/MOAT- Model-Agnostic Randomized Transformations for preventing Efficiency Degradation Attacks on ViT.md
source_note: "[[信息源/arXiv cs.CV RSS/MOAT- Model-Agnostic Randomized Transformations for preventing Efficiency Degradation Attacks on ViT|查看原始文件]]"
source_sha256: 6f05f1833839b65a67352bb684e64909c5040d4e15dee82fad2ad9b61a505c99
original_url: https://arxiv.org/abs/2608.04680
processed: 2026-08-07
language: zh-CN
---

# MOAT：防止ViT效率退化攻击的模型无关随机变换

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04680)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/MOAT- Model-Agnostic Randomized Transformations for preventing Efficiency Degradation Attacks on ViT|查看原始文件]]

## 摘要

- 在资源受限环境中部署视觉 Transformer（ViT）时，Token 剪枝被广泛用于在保证精度的同时降低计算成本
- 攻击者已针对 Token 剪枝技术开发出定向攻击，破坏 ViT 高效化的努力
- 提出 MOAT：模型无关的预处理防御流水线，通过组合输入变换保护高效 ViT 实现免受对抗性效率攻击
- MOAT 直接作用于输入，无需修改模型架构或 Token 剪枝机制；在所有评估的 ViT 模型上，将对抗攻击下的 GFLOPs 退化限制在未受攻击原始模型的 3.4% 以内

## 正文

为了在资源受限的环境中采用视觉 Transformer（ViTs），Token 剪枝被广泛用于在不影响准确率的前提下降低计算成本。然而，攻击者已经针对上述 Token 剪枝技术开发出定向攻击，以破坏这些使 ViT 更加高效的尝试。

在本文中，我们提出 MOAT，一个模型无关的预处理防御流水线，它应用输入变换的组合来保护高效的 ViT 实现免受对抗性效率攻击。MOAT 直接对输入进行操作，不需要修改模型架构或 Token 剪枝机制。实验结果表明，在所有评估的 ViT 模型上，MOAT 都将对抗攻击下的 GFLOPs 退化限制在未受攻击原始模型的 3.4% 以内。

## 关键词

#视觉Transformer #Token剪枝 #对抗攻击 #效率安全 #防御机制
