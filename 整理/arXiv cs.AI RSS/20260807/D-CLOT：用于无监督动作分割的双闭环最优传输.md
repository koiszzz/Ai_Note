---
published: 2026-08-07
title: "D-CLOT：用于无监督动作分割的双闭环最优传输"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/D-CLOT- Double Closed Loop Optimal Transport for Unsupervised Action Segmentation.md"
source_note: "[[信息源/arXiv cs.AI RSS/D-CLOT- Double Closed Loop Optimal Transport for Unsupervised Action Segmentation]]"
source_sha256: 5a6066d507ea167dab36115ee0aec44be34aa2649ff9550486bdfcd4766bd7ab
original_url: "https://arxiv.org/abs/2608.05877"
processed: 2026-08-07
language: zh-CN
---

# D-CLOT：用于无监督动作分割的双闭环最优传输

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Elena Bueno-Benito, Mariella Dimiccoli
> - 发布时间：2026-08-07
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.05877)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/D-CLOT- Double Closed Loop Optimal Transport for Unsupervised Action Segmentation|查看原始文件]]

## 摘要

- 最优传输（OT）已成为无监督动作分割的有效框架；但现有基于 OT 的方法中，定义 OT 成本的潜在动作原型不会从精炼帧几何中重新估计，而是仅通过伪标签损失的梯度演化，论文将此"表示-原型不一致"识别为中心瓶颈，尤其在模糊过渡与短或低频动作周围。
- 基于近期引入的 CLOT（根据估计片段嵌入精炼帧嵌入），进一步从精炼帧嵌入重新估计动作原型：引入图约束模块，通过保留编码器输出的局部邻域几何正则化 OT 精炼的帧与片段表示；动作嵌入精炼步骤随后周期性地将原型重新锚定到该稳定表示几何。
- 研究共享相同骨干、图模块与目标的两种实例化：D-CLOT 用 k-means 更新原型，D-CLOT_B 将其更新为由精炼传输计划加权的 OT 重心，产生与当前传输几何一致的赋值感知原型更新。
- 在五个既有基准上，两个变体均提升片段级质量：每视频增益最高 +12.7 F1 与 +10.2 mIoU（YTI），活动级增益最高 +8.9 F1（FS-Eval）；还在 Assembly101（比先前工作常用基准更程序化、细粒度）上建立首个无监督动作分割基线；消融与敏感性分析表明两种精炼机制互补且稳健。

## 正文

最优传输（optimal transport，OT）已成为无监督动作分割的有效框架。然而，在现有基于 OT 的方法中，定义 OT 成本的潜在动作原型不会从精炼帧几何中重新估计，而是仅通过伪标签损失的梯度演化。我们将此"表示-原型不一致"（representation–prototype inconsistency）识别为中心瓶颈，尤其在模糊过渡以及短或低频动作周围。为解决该问题，我们在近期引入的 CLOT（根据估计片段嵌入精炼帧嵌入）基础上，进一步从精炼帧嵌入重新估计动作原型。具体而言，我们引入一个图约束模块，通过保留编码器输出的局部邻域几何来正则化 OT 精炼的帧与片段表示。随后，动作嵌入精炼步骤周期性地将原型重新锚定到这一稳定表示几何。我们研究两个共享相同骨干、图模块与目标的实例化：D-CLOT 使用 k-means 更新原型，而 D-CLOT_B 将它们更新为按精炼传输计划加权的 OT 重心，产生与当前传输几何一致的赋值感知原型更新。跨五个既有基准，两个变体都提升片段级质量：每视频增益最高 +12.7 F1 与 +10.2 mIoU（YTI），活动级增益最高 +8.9 F1（FS-Eval）。我们还在 Assembly101（一个比先前工作常用基准更程序化且细粒度得多的基准）上建立首个无监督动作分割基线。大量消融与敏感性分析表明，这两种精炼机制互补且稳健。

## 关键词

#动作分割 #最优传输 #无监督学习 #原型更新
