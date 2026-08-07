---
published: 20260806
title: "Curiosity-Diffuser：好奇心引导扩散模型提升可靠性"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability.md"
source_note: "[[信息源/arXiv cs.AI RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability]]"
source_sha256: 3694c00549adbc7b7c97232302842db1beb721d92a0c738df6983804d1239620
original_url: "https://arxiv.org/abs/2503.14833"
processed: 2026-08-06
language: zh-CN

---

# Curiosity-Diffuser：好奇心引导扩散模型提升可靠性

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zihao Liu, Xing Liu, Yuhang Dong, Haitao Chang, Zhengxiong Liu, Panfeng Huang
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2503.14833)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Curiosity-Diffuser- Curiosity Guide Diffusion Models for Reliability|查看原始文件]]

## 摘要

- 机器人智能的瓶颈之一是神经网络模型的不稳定性，导致在物理世界应用智能时存在风险：基于神经网络的模仿策略可能产生幻觉，导致影响真实应用安全的不准确行为。
- 本文提出 Curiosity-Diffuser，旨在引导条件扩散模型生成好奇心更低的轨迹，从而提高策略可靠性：核心思想是用随机网络蒸馏（RND）好奇心模块评估模型行为是否与训练数据对齐，再通过分类器引导扩散最小化好奇心，减少推理期间过度泛化。
- 提出计算高效的策略可靠性评估指标，测量生成行为与训练数据集的相似性；仿真和真实世界实验验证方法在多种场景的有效性，显著改进任务性能并产生更接近训练数据的行为。

## 正文

机器人智能的瓶颈之一是神经网络模型的不稳定性。这导致在物理世界应用智能时存在风险。具体来说，基于神经网络的模仿策略可能产生幻觉，导致影响真实世界应用安全的不准确行为。为解决此问题，本文提出 Curiosity-Diffuser，旨在引导条件扩散模型生成好奇心更低的轨迹，从而提高策略可靠性。核心思想是使用随机网络蒸馏（RND）好奇心模块评估模型行为是否与训练数据对齐，然后通过分类器引导扩散最小化好奇心，以减少推理期间的过度泛化。此外，我们提出一个计算高效的策略可靠性评估指标，测量生成行为与训练数据集之间的相似性，以促进可靠性学习研究。最后，仿真和真实世界实验验证所提方法在多种场景中的有效性和适用性，表明 Curiosity-Diffuser 显著改进任务性能，并产生与训练数据更相似的行为。本工作的代码可在此获取：github.com/CarlDegio/Curiosity-Diffuser。

## 关键词

#扩散模型 #机器人 #可靠性 #好奇心 #arXiv