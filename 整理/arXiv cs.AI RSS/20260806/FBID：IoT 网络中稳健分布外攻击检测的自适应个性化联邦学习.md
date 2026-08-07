---
published: 20260806
title: "FBID：IoT 网络中稳健分布外攻击检测的自适应个性化联邦学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io.md"
source_note: "[[信息源/arXiv cs.AI RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io]]"
source_sha256: 76a1045ac5a21e9275ec32ee7c9dc4d36df06963e2836b8a16764fed3afc51d8
original_url: "https://arxiv.org/abs/2608.04073"
processed: 2026-08-06
language: zh-CN

---

# FBID：IoT 网络中稳健分布外攻击检测的自适应个性化联邦学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：An Khanh Bui, Cong Thanh Nguyen, Hoang-Anh Pham, Hoang Thai Dinh, Diep N. Nguyen
> - 发布时间：20260806
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04073)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FBID- Adaptive Personalized Federated Learning for Robust Out-of-Distribution Attack Detection in Io|查看原始文件]]

## 摘要

- 个性化联邦学习（PFL）已成为异构 IoT 环境中入侵检测的有前景解决方案，可改善高度非独立同分布（non-IID）数据分布下的本地适应，但现有 PFL 方法常依赖客户端侧自我调整，可能导致过度个性化和分布外（OOD）攻击检测大幅退化。
- 本文提出联邦赌博机入侵检测（FBID），一个通过服务器侧个性化控制解决此局限的新颖自适应 PFL 框架：服务器使用上下文多臂赌博机，根据观察行为和更新质量动态调节每个客户端的本地训练强度。
- FBID 引入基于信任的混合机制，推导客户端特定全局与本地模型间插值系数，保留全局攻击检测知识同时允许有益本地专业化；CICIoT2023 数据集异构客户端分布和 OOD 压力测试设置实验显示，FBID 相对最强稳定基线改进个体客户端 OOD 检测率（DR）最高 7.66%、F1 分数最高 5.08%，并改进对未见攻击类别的鲁棒性。

## 正文

个性化联邦学习（PFL）已成为异构 IoT 环境中入侵检测的有前景解决方案，因为它可在高度非独立同分布（non-IID）数据分布下改善本地适应。然而，现有 PFL 方法常依赖客户端侧自我调整，可能导致过度个性化和分布外（OOD）攻击检测大幅退化。在本文中，我们提出联邦赌博机入侵检测（Federated Bandit Intrusion Detection，FBID），一个通过服务器侧个性化控制解决此局限的新颖自适应 PFL 框架。具体来说，FBID 在服务器使用上下文多臂赌博机，根据观察行为和更新质量动态调节每个客户端的本地训练强度。此外，FBID 引入基于信任的混合机制，推导客户端特定全局与本地模型之间的插值系数，从而保留全局攻击检测知识，同时允许有益的本地专业化。通过在 CICIoT2023 数据集上异构客户端分布和 OOD 压力测试设置的广泛实验，我们表明 FBID 相对最强稳定基线改进个体客户端 OOD 检测率（DR）最高 7.66%，F1 分数（F1）最高 5.08%（相对），同时改进对以前未见攻击类别的鲁棒性。

## 关键词

#联邦学习 #入侵检测 #IoT #分布外检测 #arXiv