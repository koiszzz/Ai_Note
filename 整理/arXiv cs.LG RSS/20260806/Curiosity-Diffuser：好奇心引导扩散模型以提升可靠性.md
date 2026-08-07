---
published: 2026-08-06
title: Curiosity-Diffuser：好奇心引导扩散模型以提升可靠性
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability.md
source_note: "[[信息源/arXiv cs.LG RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability]]"
source_sha256: 0f481598f46f0c6a2acb6cb93d9e94b45aaafef8e2a0d81662784436b6b4a716
original_url: https://arxiv.org/abs/2503.14833
processed: 2026-08-07
language: zh-CN
---

# Curiosity-Diffuser：好奇心引导扩散模型以提升可靠性

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2503.14833)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability|查看原始文件]]

## 摘要

- 针对模仿策略幻觉问题，提出 Curiosity-Diffuser 引导条件扩散模型生成低好奇心轨迹
- 用随机网络蒸馏（RND）好奇心模块评估行为与训练数据的一致性，经分类器引导扩散最小化好奇心
- 提出计算高效的策略可靠性评估指标，衡量生成行为与训练数据集的相似性
- 仿真与真实世界实验验证了方法的有效性与适用性，显著提升任务性能

## 正文

机器人智能的瓶颈之一在于神经网络模型的不稳定性，这导致智能在物理世界中的应用存在风险。具体而言，基于神经网络的模仿策略可能产生幻觉，导致不准确的行为，从而影响真实世界应用的安全性。为解决这一问题，本文提出 Curiosity-Diffuser，旨在引导条件扩散模型生成好奇心更低的轨迹，从而提高策略的可靠性。

其核心思想是使用随机网络蒸馏（RND）好奇心模块来评估模型行为是否与训练数据一致，然后通过分类器引导扩散最小化好奇心，以减少推理过程中的过度泛化。此外，我们提出了一种计算高效的策略可靠性评估指标，用于衡量生成行为与训练数据集之间的相似性，以促进可靠性学习的研究。

最后，仿真与真实世界实验验证了所提方法在多种场景下的有效性与适用性，表明 Curiosity-Diffuser 显著提升了任务性能，并产生与训练数据更相似的行为。本工作的代码可在 github.com/CarlDegio/Curiosity-Diffuser 获取。

## 关键词

#扩散模型 #机器人学习 #模仿学习 #可靠性 #随机网络蒸馏
