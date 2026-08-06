---
title: "多少标签才够？ALDA：医学图像分类的主动学习部署顾问"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio.md"
source_note: "[[信息源/arXiv cs.AI RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio]]"
source_sha256: e6e534c8e3321d496819aa55cfaf811378db6a19db226ae9ab2da3649a0c6cf5
original_url: "https://arxiv.org/abs/2608.03511"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# 多少标签才够？ALDA：医学图像分类的主动学习部署顾问

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Julia Machnio、Mads Nielsen、Mostafa Mehdipour Ghazi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03511)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio|查看原始文件]]

## 摘要

- 提出 ALDA（主动学习部署顾问），面向临床性能约束下 AL 方法选择的部署导向框架：短试点阶段后，为每个候选策略拟合参数化学习曲线模型，估计该策略能否达到所需临床性能目标，并预测达到该目标所需专家标注数量。
- 除绝对标注成本外，ALDA 引入部署窗口，量化该成本估计对临床阈值不确定性的敏感性；最终推荐遵循风险感知规则：在成本近最优的策略中，偏好部署窗口最窄、对阈值修订最稳健的策略。
- 在四个医学影像分类领域上，ALDA 从预期预算的 15–30% 试点即可预测部署最优方法，相比劣策略选择把标注成本降低最高 82%。
- 不引入新采样启发式，而是提供回答部署关键问题（多少标签才够）的实用决策层。

## 正文

论文编号：arXiv:2608.03511v1（更新类型：cross）。以下为摘要全文翻译。

主动学习（AL）承诺通过减少所需临床标签数量来降低医学影像项目的成本。然而，实际部署要求在完整标注预算花完之前就承诺采用某种采样策略，而选错策略可能增加而非减少成本。我们提出 ALDA（Active-Learning Deployment Advisor，主动学习部署顾问），一个面向临床性能约束下 AL 方法选择的部署导向框架。给定一个短试点阶段，ALDA 为每个候选策略拟合参数化学习曲线模型，估计该策略预期能否达到所需临床性能目标，并预测达到该目标所需的专家标注数量。除绝对标注成本外，ALDA 还引入部署窗口（deployment window），量化该成本估计对临床阈值不确定性的敏感性。最终推荐遵循风险感知规则：在预测成本近最优的策略中，ALDA 偏好部署窗口最窄、对阈值修订最稳健的策略。在四个医学影像分类领域上的实验表明，ALDA 从预期预算的 15–30% 试点即可预测部署最优方法，并相比劣策略选择把标注成本降低最高 82%。ALDA 不引入新的采样启发式，而是提供一个回答部署关键问题——多少标签才够——的实用决策层。

## 关键词

#主动学习 #医学影像 #部署决策 #学习曲线
