---
title: "PRIVEE：抵御特征推断攻击的隐私保护纵向联邦学习"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks.md"
source_note: "[[信息源/arXiv cs.LG RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks.]]"
source_sha256: bd459c1a3679490f199cfbaedd71cca6c2cb62fc99f60134b36a9ffd3644b62b
original_url: "https://arxiv.org/abs/2512.12840"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PRIVEE：抵御特征推断攻击的隐私保护纵向联邦学习

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Sindhuja Madabushi、Haider Ali、Ahmad Faraz Khan、Rui Ning、Hongyi Wu、Chunsheng Xin、Ali. R. Butt、Jin-Hee Cho
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2512.12840)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PRIVEE- Privacy-Preserving Vertical Federated Learning Against Feature Inference Attacks.|查看原始文件]]

## 摘要

- 纵向联邦学习（VFL）允许共享相同用户样本但拥有不相交特征空间的组织间协作训练模型；尽管有潜力，VFL 易受特征推断攻击：恶意方利用推理期间共享的置信分数（预测概率）重建其他参与者的私有输入特征。
- 提出 PRIVEE（隐私保护纵向联邦学习），一个新颖防御机制，名字取自法语 privée（"私有"）：混淆置信分数，同时保留相对排名与分数间距离等关键性质。
- PRIVEE 不暴露原始分数，只共享变换后的表示，在不降低模型预测准确率的情况下降低重建攻击风险。
- 大量实验表明：相对最强竞争防御，PRIVEE 对特征推断攻击的重建误差（MSE）最多增加 30 倍，同时针对高级特征推断攻击保持完整预测性能。

## 正文

论文编号：arXiv:2512.12840v2（更新类型：replace）。以下为摘要全文翻译。

纵向联邦学习（VFL）允许共享相同用户样本但拥有不相交特征空间的组织之间进行协作模型训练。尽管有潜力，VFL 易受特征推断攻击：恶意方在推理期间利用共享的置信分数（预测概率）重建其他参与者的私有输入特征。为对抗这一威胁，我们提出 PRIVEE（PRivacy-preserving Vertical fEderated lEarning，隐私保护纵向联邦学习），一个新颖的防御机制，名字取自法语 privée，意为"私有"。PRIVEE 混淆置信分数，同时保留相对排名与分数间距离等关键性质。PRIVEE 不暴露原始分数，只共享变换后的表示，从而在不降低模型预测准确率的情况下减轻重建攻击的风险。大量实验表明，相对最强的竞争防御，PRIVEE 对特征推断攻击的重建误差（MSE）最多增加 30 倍，同时针对高级特征推断攻击保持完整的预测性能。

## 关键词

#纵向联邦学习 #特征推断攻击 #隐私保护 #置信分数 #安全
