---
published: 2026-08-07
title: "D-CLOT：无监督动作分割的双闭环最优传输"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/D-CLOT- Double Closed Loop Optimal Transport for Unsupervised Action Segmentation.md"
source_note: "[[信息源/arXiv cs.CV RSS/D-CLOT- Double Closed Loop Optimal Transport for Unsupervised Action Segmentation]]"
source_sha256: 8dad6f73ecd95fcf5d229f4e822c18a849d07992c65c15e92135a224d1fd6a21
original_url: "https://arxiv.org/abs/2608.05877"
processed: 2026-08-07
language: zh-CN
---

# D-CLOT：无监督动作分割的双闭环最优传输

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Elena Bueno-Benito, Mariella Dimiccoli
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05877)

## 摘要

- 最优传输（OT）已成为无监督动作分割的有效框架；现有 OT 基方法中，定义 OT 成本的潜动作原型不从未精化帧几何重新估计，仅经伪标签损失梯度演化；识别该表征-原型不一致为关键瓶颈（尤其模糊过渡与短或罕见动作）。
- 基于近期 CLOT（从估计段嵌入精化帧嵌入）构建，并从精化帧嵌入重新估计动作原型：引入图约束模块，通过保留编码器输出的局部邻域几何正则化 OT 精化帧与段表征；动作嵌入精化步骤随后周期性地将原型重新锚定到该稳定表征几何。
- 研究两个共享同一骨干、图模块与目标的实例化：D-CLOT 用 k 均值更新原型，D-CLOT_B 用精化传输计划加权的 OT 重心更新原型，产生与当前传输几何一致的分配感知原型更新。
- 五个既有基准上两变体都改进段级质量（相对 CLOT）：每视频增益最高 +12.7 F1 与 +10.2 mIoU（YTI），活动级增益最高 +8.9 F1（FS-Eval）；建立 Assembly101（比先前常用基准精细得多的程序性基准）首个无监督动作分割基线；广泛消融与敏感性分析显示两种精化机制互补且稳健。

## 正文

最优传输（optimal transport, OT）已成为无监督动作分割的有效框架。然而，现有 OT 基方法中，定义 OT 成本的潜动作原型不从未精化帧几何重新估计；它们仅通过伪标签损失的梯度演化。研究识别该表征-原型不一致（representation-prototype inconsistency）为关键瓶颈，尤其在模糊过渡以及短或罕见动作周围。为解决该问题，研究基于近期引入的 CLOT（根据估计段嵌入精化帧嵌入）构建，并进一步从精化帧嵌入重新估计动作原型。具体地，研究引入一个图约束模块，通过保留编码器输出的局部邻域几何来正则化 OT 精化的帧与段表征。动作嵌入精化步骤随后周期性地将原型重新锚定到该稳定表征几何。研究考察两个共享同一骨干、图模块与目标的实例化：D-CLOT 使用 k 均值更新原型，而 D-CLOT_B 将它们更新为经精化传输计划加权的 OT 重心，产生与当前传输几何一致的分配感知原型更新。跨五个既有基准，两个变体都改进相对 CLOT 的段级质量：每视频增益最高 +12.7 F1 与 +10.2 mIoU（YTI），活动级增益最高 +8.9 F1（FS-Eval）。研究还建立 Assembly101——一个比先前工作常用基准精细得多的程序性基准——上的首个无监督动作分割基线。广泛消融与敏感性分析证明两种精化机制互补且稳健。

## 关键词

动作分割、最优传输、无监督、原型、视频理解
