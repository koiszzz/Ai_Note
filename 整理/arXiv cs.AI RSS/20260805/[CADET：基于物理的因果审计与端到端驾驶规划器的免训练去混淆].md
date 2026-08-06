---
published: 2026-08-05
title: "CADET：基于物理的因果审计与端到端驾驶规划器的免训练去混淆"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/CADET- Physics-Grounded Causal Auditing and Training-Free Deconfounding of End-to-End Driving Planne.md"
source_note: "[[信息源/arXiv cs.AI RSS/CADET- Physics-Grounded Causal Auditing and Training-Free Deconfounding of End-to-End Driving Planne]]"
source_sha256: 9413f1985f85b8191e748609cb91ebd6e0cb52b534c876ea7974b2135646c0c7
original_url: "https://arxiv.org/abs/2606.14438"
processed: 2026-08-05
language: zh-CN
---

# CADET：基于物理的因果审计与端到端驾驶规划器的免训练去混淆

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.14438)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/CADET- Physics-Grounded Causal Auditing and Training-Free Deconfounding of End-to-End Driving Planne|查看原始文件]]

## 摘要

- 通过模仿学习训练的端到端（E2E）自动驾驶规划器容易采用统计捷径：它们把仅仅与专家动作共现的场景元素（如道路旁物体、建筑立面）与驾驶决策关联起来，而不是依赖真正具有因果决定作用的变量。
- 这种因果混淆会在长尾场景中悄然损害可靠性，而且很难被发现，因为现有开放环指标（L2 位移和碰撞率）受自车状态主导，并不能说明规划器是否依赖伪相关线索。
- 现有基于因果干预训练的补救方法需要重新训练大型模型，也无法审计已经部署的规划器。
- 论文提出 CADET，一个无需训练的框架，可在不更新任何参数的情况下，对预训练端到端规划器中的伪相关依赖进行审计、基准测试和修复。

## 正文

通过模仿学习训练的端到端（E2E）自动驾驶规划器容易采用统计捷径。它们可能把只是与专家动作共同出现的场景元素，例如道路旁的物体或建筑立面，与驾驶决策联系起来，而不是依赖真正对驾驶决策具有因果决定作用的变量。

这种因果混淆会在长尾场景中悄然损害系统可靠性。它之所以难以发现，是因为当前常用的开放环指标——L2 位移和碰撞率——主要受自车状态支配，不能说明规划器是否依赖伪相关线索。

现有基于因果干预训练的补救方案需要重新训练大型模型，因此也无法审计已经部署的规划器。为此，本文提出 CADET，一个无需训练的框架，能够在不进行任何参数更新的情况下，审计、基准测试并修复预训练端到端驾驶规划器中的伪相关依赖。

## 关键词

#自动驾驶 #端到端规划 #因果审计 #去混淆 #统计捷径 #无需训练
