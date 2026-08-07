---
published: 2026-08-06
title: 一个代理模型骗过所有模型：基于CLIP的通用可迁移目标对抗攻击
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/One Surrogate to Fool Them All- Universal, Transferable, and Targeted Adversarial Attacks with CLIP.md
source_note: "[[信息源/arXiv cs.LG RSS/One Surrogate to Fool Them All- Universal, Transferable, and Targeted Adversarial Attacks with CLIP]]"
source_sha256: 522a655a6712c8dcfe5ee47ba6e6977cdfa43950bd931b127f9b7b0157080256
original_url: https://arxiv.org/abs/2505.19840
processed: 2026-08-07
language: zh-CN
---

# 一个代理模型骗过所有模型：基于CLIP的通用可迁移目标对抗攻击

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2505.19840)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/One Surrogate to Fool Them All- Universal, Transferable, and Targeted Adversarial Attacks with CLIP|查看原始文件]]

## 摘要

- 提出 UnivIntruder：仅依赖单个公开可用的 CLIP 模型与公开数据集，用文本概念生成通用、可迁移、有目标的对抗扰动
- ImageNet 上攻击成功率（ASR）高达 85%，CIFAR-10 上超过 99%，显著优于现有基于迁移的方法
- 无需查询目标模型即可攻破 Google、百度等图像搜索引擎（ASR 高达 84%）以及 GPT-4、Claude-3.5 等视觉语言模型（ASR 高达 80%）
- 凸显了在传统攻击途径受阻场景中该攻击的实用性，提示需重新评估 AI 应用的安全范式

## 正文

深度神经网络（DNN）已取得广泛成功，但仍容易受到对抗攻击。通常，这类攻击要么涉及对目标模型的频繁查询，要么依赖与目标模型高度相似的代理模型——通常使用目标模型训练数据的子集训练——通过可迁移性实现高攻击成功率。然而，在训练数据不可访问、过度查询可能引起警觉的现实场景中，构造对抗样本变得更加困难。在本文中，我们提出 UnivIntruder，一个新颖的攻击框架，仅依赖单个公开可用的 CLIP 模型和公开数据集。通过使用文本概念，UnivIntruder 生成通用、可迁移且有针对性的对抗扰动，诱导 DNN 将输入误分类为文本概念定义的攻击者指定类别。

我们的大量实验表明，我们的方法在 ImageNet 上实现了高达 85% 的攻击成功率（ASR），在 CIFAR-10 上超过 99%，显著优于现有基于迁移的方法。此外，我们揭示了真实世界的漏洞：即使不查询目标模型，UnivIntruder 也能以高达 84% 的 ASR 攻破 Google 和百度等图像搜索引擎，并以高达 80% 的 ASR 攻破 GPT-4 和 Claude-3.5 等视觉语言模型。这些发现强调了我们的攻击在传统途径受阻场景中的实用性，凸显了重新评估 AI 应用安全范式的必要性。

## 关键词

#对抗攻击 #CLIP #可迁移攻击 #图像搜索 #安全
