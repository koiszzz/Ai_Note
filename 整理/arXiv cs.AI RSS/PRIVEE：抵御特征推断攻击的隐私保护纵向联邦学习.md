---
title: "PRIVEE：抵御特征推断攻击的隐私保护纵向联邦学习"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks.md"
source_note: "[[信息源/arXiv cs.AI RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks]]"
source_sha256: 9fa4c7e14d2de05e45a436de1cf4e473627218003e1f12009224df406b2b481b
original_url: "https://arxiv.org/abs/2512.12840"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PRIVEE：抵御特征推断攻击的隐私保护纵向联邦学习

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Sindhuja Madabushi、Haider Ali、Ahmad Faraz Khan 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.12840)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks|查看原始文件]]

## 摘要

- 提出 PRIVEE（隐私保护纵向联邦学习），新颖防御机制（名称源自法语 privée，意为“私密”）：混淆置信分数，同时保留相对排名与分数间距离等关键属性——不暴露原始分数，只共享变换后的表示，在不降低模型预测准确率的情况下缓解重建攻击风险。
- 纵向联邦学习（VFL）使共享共同用户样本但持有不相交特征空间的组织能够协作训练模型；VFL 易受特征推断攻击：对抗方在推理期间利用共享置信分数（预测概率）重建其他参与者的私有输入特征。
- 大量实验显示：相对最强竞争防御，PRIVEE 对特征推断攻击的重建误差（MSE）最高提升 30 倍，同时对高级特征推断攻击保持完整预测性能。

## 正文

论文编号：arXiv:2512.12840v2（更新类型：replace-cross）。以下为摘要全文翻译。

纵向联邦学习（VFL）使共享共同用户样本但持有不相交特征空间的组织能够协作训练模型。尽管有潜力，VFL 易受特征推断攻击：对抗方在推理期间利用共享的置信分数（预测概率）重建其他参与者的私有输入特征。为抵御这一威胁，我们提出 PRIVEE（PRIvacy-preserving Vertical fEderated lEarning，隐私保护纵向联邦学习），一种以法语 privée（意为“私密”）命名的新颖防御机制。PRIVEE 混淆置信分数，同时保留相对排名与分数间距离等关键属性。PRIVEE 不暴露原始分数，只共享变换后的表示，从而在不让模型预测准确率退化的情况下缓解重建攻击风险。大量实验表明，相对最强的竞争防御，PRIVEE 对特征推断攻击的重建误差（MSE）最高提升 30 倍，同时针对高级特征推断攻击保持完整的预测性能。

## 关键词

#纵向联邦学习 #隐私保护 #特征推断攻击 #置信分数
