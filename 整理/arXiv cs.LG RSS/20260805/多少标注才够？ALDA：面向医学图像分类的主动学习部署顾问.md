---
published: 2026-08-05
title: "多少标注才够？ALDA：面向医学图像分类的主动学习部署顾问"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio.md"
source_note: "[[信息源/arXiv cs.LG RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio.]]"
source_sha256: beb541630e21a31246bb5a024ceb946092b06dd37a680ec9f232de43d7707109
original_url: "https://arxiv.org/abs/2608.03511"
processed: 2026-08-05
language: zh-CN
---

# 多少标注才够？ALDA：面向医学图像分类的主动学习部署顾问

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Julia Machnio、Mads Nielsen、Mostafa Mehdipour Ghazi
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03511)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/How Many Labels Are Enough- ALDA- Active Learning Deployment Advisor for Medical Image Classificatio.|查看原始文件]]

## 摘要

- 主动学习（AL）有望通过减少所需临床标注数量来降低医学影像项目的成本；但实际部署要求在完整标注预算耗尽前就选定采样策略，选错策略反而可能增加而非降低成本。
- 提出主动学习部署顾问（ALDA），一个在临床性能约束下进行 AL 方法选择的部署导向框架。
- 给定短暂的试点阶段，ALDA 为每个候选策略拟合参数化学习曲线模型，估计该策略能否达到所需临床性能目标，并预测达成所需专家标注数量。
- 除绝对标注成本外，ALDA 引入部署窗口（deployment window），量化该成本估计对临床阈值不确定性的敏感度；最终建议遵循风险感知规则：在预测成本接近最优的策略中，ALDA 偏好部署窗口最窄、对阈值修订最鲁棒的策略。
- 四个医学影像分类领域的实验显示：ALDA 能从计划预算 15–30% 的试点中预测部署最优方法，相比糟糕的策略选择可将标注成本降低多达 82%。
- 与其引入新的采样启发式，ALDA 提供一个回答部署关键问题的实用决策层：多少标注才够？

## 正文

论文编号：arXiv:2608.03511v1（更新类型：cross）。以下为摘要全文翻译。

主动学习（AL）有望通过减少所需临床标注数量来降低医学影像项目的成本。然而，实际部署要求在完整标注预算耗尽之前就承诺采用某种采样策略，而选错策略可能增加而不是降低成本。我们提出主动学习部署顾问（Active-Learning Deployment Advisor，ALDA），一个在临床性能约束下进行 AL 方法选择的部署导向框架。给定短暂的试点阶段，ALDA 为每个候选策略拟合参数化学习曲线模型，估计该策略是否有望达到所需临床性能目标，并预测实现该目标所需的专家标注数量。除绝对标注成本外，ALDA 引入一个部署窗口，量化该成本估计对临床阈值不确定性的敏感度。最终建议遵循风险感知规则：在预测成本接近最优的策略中，ALDA 偏好部署窗口最窄、对阈值修订最鲁棒的策略。在四个医学影像分类领域的实验表明，ALDA 能从计划预算 15–30% 的试点中预测部署最优方法，与糟糕的策略选择相比可将标注成本降低多达 82%。与其引入新的采样启发式，ALDA 提供了一个回答部署关键问题的实用决策层：多少标注才够？

## 关键词

#主动学习 #医学图像 #标注成本 #学习曲线 #模型部署
