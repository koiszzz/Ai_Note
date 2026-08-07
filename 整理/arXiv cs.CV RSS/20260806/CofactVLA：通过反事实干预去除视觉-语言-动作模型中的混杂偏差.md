---
published: 2026-08-06
title: CofactVLA：通过反事实干预去除视觉-语言-动作模型中的混杂偏差
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/CofactVLA- Deconfounding Vision-Language-Action Models via Counterfactual Intervention.md
source_note: "[[信息源/arXiv cs.CV RSS/CofactVLA- Deconfounding Vision-Language-Action Models via Counterfactual Intervention]]"
source_sha256: e84f9be585eb17bf61fff31b5ca19d66921b7d99b32360fe4b5190ce82ce5874
original_url: https://arxiv.org/abs/2608.04396
processed: 2026-08-07
language: zh-CN
---

# CofactVLA：通过反事实干预去除视觉-语言-动作模型中的混杂偏差

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04396)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/CofactVLA- Deconfounding Vision-Language-Action Models via Counterfactual Intervention|查看原始文件]]

## 摘要

- 视觉-语言-动作（VLA）模型存在"视觉覆盖"现象：密集视觉流与稀疏语言指令之间的严重模态不平衡导致因果混淆，策略过度拟合伪视觉混杂因子而绕过原始指令
- 将动作生成过程形式化为双路径去混杂图（DDG），提出 CofactVLA 因果干预框架，在单次前向传播内动态构建语言掩码反事实分支
- 动作级正交投影引导（OPG）在连续流匹配中几何地将事实速度场投影远离反事实视觉偏差；特征级反事实协方差缩减（CCR）通过惩罚协方差差的正特征空间抑制视觉捷径
- 在多种仿真基准上取得新 SOTA；真实机器人实验中，分布外场景下绝对成功率提升 52.3%

## 正文

视觉-语言-动作（Vision-Language-Action，VLA）模型推动了机器人操作领域的重大进展，但它们从根本上受困于"视觉覆盖"（vision-override）现象。由于密集视觉流与稀疏语言指令之间存在严重的模态不平衡，VLA 模型经常陷入因果混淆。策略没有把语言作为首要的因果驱动因素，而是通过过度拟合虚假的视觉混杂因子（如显著物体或熟悉的布局）完全绕过原始指令。为系统地缓解这一偏差，我们将动作生成过程形式化为双路径去混杂图（Dual-path Deconfounding Graph，DDG），并提出 CofactVLA，一种新颖的因果干预框架。通过在单次前向传播中动态构建语言掩码的反事实分支，CofactVLA 通过两种协同机制隔离并中和视觉混杂因子。首先，动作级正交投影引导（Action-Level Orthogonal Projection Guidance，OPG）在连续流匹配过程中几何地将事实速度场投影远离反事实视觉偏差，提取出纯粹语义意图。其次，特征级反事实协方差缩减（Feature-Level Counterfactual Covariance Reduction，CCR）通过惩罚协方差差的正特征空间在数学上对潜在表示进行去混杂，在显式抑制主导性视觉捷径的同时保留因果语言意图。大量实验表明，CofactVLA 在多种仿真基准上建立了新的最先进水平。除仿真之外，真实世界机器人实验证明了该方法在弥合泛化差距方面的因果有效性，在分布外场景下绝对成功率提升 52.3%。

## 关键词

#VLA模型 #因果干预 #反事实 #机器人操作 #去混杂
