---
published: 2026-08-06
title: 隔离的代价：估算对称双侧A/B测试的生态成本
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/The Price of Isolation- Estimating the Ecosystem Cost of Symmetric Two-Sided A-B Testing.md
source_note: "[[信息源/arXiv cs.LG RSS/The Price of Isolation- Estimating the Ecosystem Cost of Symmetric Two-Sided A-B Testing]]"
source_sha256: fbabe666f5afc09c77bf8f8819a2b0750b8c985d9506851b8cc93451a9738d07
original_url: https://arxiv.org/abs/2608.04432
processed: 2026-08-07
language: zh-CN
---

# 隔离的代价：估算对称双侧A/B测试的生态成本

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04432)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/The Price of Isolation- Estimating the Ecosystem Cost of Symmetric Two-Sided A-B Testing|查看原始文件]]

## 摘要

- 对称双侧隔离通过消除跨臂市场干扰服务创作者侧与冷启动实验，但会变薄每位观众的候选目录。
- 极值理论给出尖锐二分法：轻尾或有界尾下损失随候选池增长消失；重尾下收敛到与规模无关的常数，扩大候选池无法消除成本。
- 两个生产实验（A/A 流量扫描、单侧目录消融）与尾指数标定预测一致；提供启动前估算成本的预检流程与备选设计建议。

## 正文

在双边内容平台上，对称双侧隔离（即将匹配比例的创作者和观众分配到隔离的处理和对照子市场）被广泛用于创作者侧和冷启动实验，因为它消除了跨臂市场干扰。然而，隔离会变薄每位观众的候选目录，直觉上由此产生的参与度成本应随平台增长而消退：巨大目录的一小部分仍然是巨大的。我们证明，在参与度的次序统计模型中，这一直觉是否成立取决于匹配质量的上尾。极值理论给出具有尖锐二分法的尾类损失定律：对于轻尾或有界尾，损失随候选池增长而消失；而在重尾下，它收敛到与规模无关的常数，因此扩大候选池（即使扩大几个数量级）也无法渐进消除该成本。来自拥有数百万活跃创作者平台的两个生产实验的证据与该图景一致：一次纯 A/A 流量扫描揭示了可测量的、深度分级的参与度成本；一次单侧目录消融独立表明每观众目录变薄对损失有贡献；而在小探索池上标定的尾指数预测的效果与在规模大得多的全目录消融中观察到的效果一致。因此，隔离带有代价，实验者应当像任何其他成本一样为其做出预算。我们为实践者提供一种预检流程：在启动前估算该成本，据此调整流量规模，并在预测成本超过所选容限时推荐备选设计。

## 关键词

#A/B测试 #双边平台 #隔离 #极值理论 #实验设计 #市场干扰
