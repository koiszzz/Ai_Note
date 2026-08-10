---
published: 2026-08-07
title: "DeepForgeSeal：用对抗强化学习做深度伪造检测的潜在空间驱动半脆弱水印"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/DeepForgeSeal- Latent Space-Driven Semi-Fragile Watermarking for Deepfake Detection Using Adversaria.md"
source_note: "[[信息源/arXiv cs.AI RSS/DeepForgeSeal- Latent Space-Driven Semi-Fragile Watermarking for Deepfake Detection Using Adversaria]]"
source_sha256: 7ca67e231e8507bf83f65a76ef6b955a742109bd2b510d89a84c9c708a577ebb
original_url: "https://arxiv.org/abs/2511.04949"
processed: 2026-08-07
language: zh-CN
---

# DeepForgeSeal：用对抗强化学习做深度伪造检测的潜在空间驱动半脆弱水印

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Tharindu Fernando, Clinton Fookes, Sridha Sridharan
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2511.04949)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/DeepForgeSeal- Latent Space-Driven Semi-Fragile Watermarking for Deepfake Detection Using Adversaria|查看原始文件]]

## 摘要

- 生成式 AI 的快速发展带来日益逼真的深度伪造，给执法与公众信任带来挑战；现有被动深度伪造检测器难以跟上，主要因其依赖特定伪造痕迹，限制对新深度伪造类型的泛化。
- 使用水印的主动深度伪造检测应运而生，但这些方法常难以在良性失真的稳健性与恶意篡改的敏感性之间取得平衡。
- 提出新颖深度学习框架：利用高维潜在空间表示与对抗强化学习（ARL）范式开发稳健且自适应的水印方法——开发在潜在空间运作的可学习水印嵌入器，捕获高层图像语义，同时提供对消息编码与提取的精确控制。
- ARL 范式使可学习水印模块通过与对抗攻击者智能体模拟的良性/恶意图像操作动态课程交互，追求稳健性与脆弱性的最优平衡；在 CelebA 与 CelebA-HQ 基准上全面评估，方法在挑战性操作场景下分别优于最先进方法 4.5% 与 5.3% 以上。

## 正文

生成式 AI 的快速发展带来日益逼真的深度伪造（deepfakes），对执法与公众信任构成日益增长的挑战。现有被动深度伪造检测器难以跟上，很大程度上由于它们依赖特定伪造痕迹，这限制了其泛化到新深度伪造类型的能力。使用水印的主动深度伪造检测应运而生，以应对识别高质量合成媒体的挑战。然而，这些方法常常难以在抵抗良性失真的稳健性与对恶意篡改的敏感性之间取得平衡。本文引入一个新颖的深度学习框架，利用高维潜在空间表示与对抗强化学习（Adversarial Reinforcement Learning，ARL）范式，开发稳健且自适应的水印方法。具体而言，我们开发一个在潜在空间运作的可学习水印嵌入器，捕获高层图像语义，同时提供对消息编码与提取的精确控制。ARL 范式使可学习水印模块能够通过与对抗攻击者智能体模拟的良性与恶意图像操作动态课程交互，追求稳健性与脆弱性之间的最优平衡。在 CelebA 与 CelebA-HQ 基准上的全面评估显示，我们的方法在挑战性操作场景下持续优于最先进方法，在 CelebA 上提升超过 4.5%，在 CelebA-HQ 上提升超过 5.3%。

## 关键词

#深度伪造检测 #水印 #对抗强化学习 #潜在空间
