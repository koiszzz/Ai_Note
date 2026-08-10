---
published: 2026-08-07
title: "DeepForgeSeal：用对抗强化学习进行深度伪造检测的潜空间驱动半脆弱水印"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DeepForgeSeal- Latent Space-Driven Semi-Fragile Watermarking for Deepfake Detection Using Adversaria.md"
source_note: "[[信息源/arXiv cs.CV RSS/DeepForgeSeal- Latent Space-Driven Semi-Fragile Watermarking for Deepfake Detection Using Adversaria]]"
source_sha256: 53a4e4293a0efd14e4a3967f45b3ce9612ce433e4e5259f15fc11317c75647de
original_url: "https://arxiv.org/abs/2511.04949"
processed: 2026-08-07
language: zh-CN
---

# DeepForgeSeal：用对抗强化学习进行深度伪造检测的潜空间驱动半脆弱水印

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Tharindu Fernando, Clinton Fookes, Sridha Sridharan
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2511.04949)

## 摘要

- 生成式 AI 快速发展导致日益逼真的深度伪造，对执法与公众信任构成日益严峻的挑战；现有被动深度伪造检测器难跟上，主要因依赖特定伪造伪影，限制泛化到新深度伪造类型。
- 基于水印的主动深度伪造检测出现以应对识别高质量合成媒体；但这些方法常难平衡对良性失真的稳健性与对恶意篡改的敏感性。
- 引入新颖深度学习框架：利用高维潜空间表征与对抗强化学习（ARL）范式开发稳健自适应水印方法；开发在潜空间运行的可学习水印嵌入器，捕捉高层图像语义，同时对消息编码与提取提供精确控制。
- ARL 范式使可学习水印模块通过与被模拟良性与恶意图像操作的对抗攻击者智能体交互，追求稳健性与脆弱性的最优平衡；CelebA 与 CelebA-HQ 基准评估显示一致优于 SOTA：挑战性操纵场景下 CelebA 提升超 4.5%、CelebA-HQ 超 5.3%。

## 正文

生成式 AI 的快速进展导致日益逼真的深度伪造（deepfakes），对执法与公众信任构成日益严峻的挑战。现有被动深度伪造检测器难以跟上步伐，主要因为它们依赖特定伪造伪影，限制其泛化到新深度伪造类型的能力。基于水印的主动深度伪造检测已出现，以应对识别高质量合成媒体的挑战。然而，这些方法常常难以平衡对良性失真的稳健性与对恶意篡改的敏感性。本文引入一个新颖的深度学习框架：利用高维潜空间表征与对抗强化学习（Adversarial Reinforcement Learning, ARL）范式，开发稳健且自适应的水印方法。具体地，研究开发一个在潜空间运行的可学习水印嵌入器：捕捉高层图像语义，同时对消息编码与提取提供精确控制。ARL 范式使可学习水印模块能够通过与一个对抗攻击者智能体交互——该智能体模拟良性与恶意图像操作的动态课程——追求稳健性与脆弱性之间的最优平衡。CelebA 与 CelebA-HQ 基准上的综合评估显示，该方法一致优于最先进方法：在挑战性操纵场景下，CelebA 改进超过 4.5%、CelebA-HQ 超过 5.3%。

## 关键词

深度伪造检测、水印、潜空间、对抗强化学习、半脆弱
