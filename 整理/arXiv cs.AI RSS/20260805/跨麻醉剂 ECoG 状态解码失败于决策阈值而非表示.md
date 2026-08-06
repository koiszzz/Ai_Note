---
published: 2026-08-05
title: "跨麻醉剂 ECoG 状态解码失败于决策阈值而非表示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Cross-Anesthetic ECoG State Decoding Fails at the Decision Threshold, Not the Representation.md"
source_note: "[[信息源/arXiv cs.AI RSS/Cross-Anesthetic ECoG State Decoding Fails at the Decision Threshold, Not the Representation]]"
source_sha256: 71eb9723257e497349aa1946f741b3cde85637548bbd0395f9d93212a04b0fc8
original_url: "https://arxiv.org/abs/2608.02646"
processed: 2026-08-05
language: zh-CN
---

# 跨麻醉剂 ECoG 状态解码失败于决策阈值而非表示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Kunkun Zhang、Qianwei Zhou
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02646)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Cross-Anesthetic ECoG State Decoding Fails at the Decision Threshold, Not the Representation|查看原始文件]]

## 摘要

- 在受控制备与真实标签下分离“表示失败”与“决策阈值失败”：从小鼠皮层脑电图（250 Hz 限带局部场电位，1,875 Hz 采样）解码清醒与麻醉状态，采用留一麻醉剂评估，覆盖五种机制不同的麻醉剂（异氟烷、右美托咪定、氯胺酮、丙泊酚与咪达唑仑）。
- 表示可迁移：频带功率排序在每种留出药物上会话级 AUROC 至少 0.96，包括氯胺酮（0.980）；失败局限于阈值层面。
- 黎曼域自适应为净负效应；锚定于受试者自身诱导前基线的因果、无标签阈值可修复氯胺酮（平衡准确率从 0.50 提升到 0.85），并优于域自适应。
- 结论：在跨药物状态解码中，可操作的失败点是校准而非表示；该结果属于受试者内跨药物迁移。

## 正文

论文编号：arXiv:2608.02646v1（更新类型：cross）。以下为摘要全文翻译。

从皮层活动解码麻醉状态的解码器在跨药物类别时失败，最著名的就是氯胺酮，但所报告的准确率无法说明是神经表示失败，还是仅仅是决策阈值失败；我们在带真实标签的受控制备中把两者分开。我们在留一麻醉剂评估下，从小鼠皮层脑电图（250 Hz 限带的局部场电位，1,875 Hz 采样）解码清醒与麻醉状态，覆盖五种机制不同的麻醉剂（异氟烷、右美托咪定、氯胺酮、丙泊酚和咪达唑仑），比较空间盲的频带功率解码器、协方差/Riemannian 表示与 Riemannian 域自适应，所有统计在会话级进行，并对氯胺酮折采用小鼠级聚类自助法。表示能够迁移：频带功率在每种留出药物上以会话 AUROC 至少 0.96 区分清醒与麻醉，包括氯胺酮（0.980，聚类置信区间 0.821–1.000）。失败局限于阈值：在三种表示下，氯胺酮的排序几乎不变，而其平衡准确率从偶然水平摆动到高水平；置换检验对排序显著（p=0.0025），但对固定阈值准确率不显著（p=0.3795）。Riemannian 域自适应为净负效应。一种锚定于受试者自身诱导前基线的因果、无标签阈值修复了氯胺酮（平衡准确率从 0.50 提升到 0.85），并优于域自适应。由于氯胺酮测试会话来自同时提供训练药物的三只小鼠，这是受试者内跨药物迁移；我们不声称跨受试者的群体级迁移。在跨药物状态解码中，可操作的失败是校准，而非表示。

## 关键词

#麻醉监测 #ECoG #跨域泛化 #决策阈值
