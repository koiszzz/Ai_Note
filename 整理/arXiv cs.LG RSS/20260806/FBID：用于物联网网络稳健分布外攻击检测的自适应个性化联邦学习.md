---
published: 2026-08-06
title: FBID：用于物联网网络稳健分布外攻击检测的自适应个性化联邦学习
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io.md
source_note: "[[信息源/arXiv cs.LG RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io]]"
source_sha256: 8cb295384eaaf429b89f6a5a9adc9dafd93f990703c71a4087f88d0a8c1ea2be
original_url: https://arxiv.org/abs/2608.04073
processed: 2026-08-07
language: zh-CN
---

# FBID：用于物联网网络稳健分布外攻击检测的自适应个性化联邦学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04073)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io|查看原始文件]]

## 摘要

- 提出 FBID：通过服务器端个性化控制解决 PFL 过度个性化导致 OOD 检测退化的问题
- 服务器端上下文多臂赌博机动态调节各客户端本地训练强度，信任混合机制插值全局/本地模型
- 在 CICIoT2023 上 OOD 检测率最多提高 7.66%、F1 最多提高 5.08%，并增强对未知攻击类的鲁棒性

## 正文

个性化联邦学习（Personalized Federated Learning, PFL）已成为异构 IoT 环境中入侵检测的一种有前景的解决方案，因为它能在高度非独立同分布（non-IID）的数据分布下改善本地自适应能力。然而，现有的 PFL 方法通常依赖客户端侧的自我调整，这可能导致过度个性化，并显著降低分布外（out-of-distribution, OOD）攻击检测的性能。

在本文中，我们提出联邦赌博机入侵检测（Federated Bandit Intrusion Detection, FBID），一种新颖的自适应 PFL 框架，通过服务器端个性化控制来解决这一局限。具体而言，FBID 在服务器端采用上下文多臂赌博机（contextual multi-armed bandit），根据观察到的行为和更新质量动态调节每个客户端的本地训练强度。此外，FBID 引入了一种基于信任的混合机制，用于推导全局模型与本地模型之间的客户端特定插值系数，从而在保留全局攻击检测知识的同时，仍允许有益的本地特化。

通过在 CICIoT2023 数据集上异构客户端分布和 OOD 压力测试设置下的大量实验，我们表明：与最强稳定基线相比，FBID 将单个客户端的 OOD 检测率（Detection Rate, DR）最多提高 7.66%，F1 分数（F1）最多提高 5.08%（相对值），同时提高了对之前未见过的攻击类的鲁棒性。

## 关键词

#联邦学习 #入侵检测 #物联网安全 #分布外检测 #多臂赌博机
