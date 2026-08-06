---
title: "FedCARE：智能医疗的多目标个性化联邦学习框架"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/FedCARE- A Multi-Objective Personalised Federated Learning Framework for Smart Healthcare.md"
source_note: "[[信息源/arXiv cs.LG RSS/FedCARE- A Multi-Objective Personalised Federated Learning Framework for Smart Healthcare]]"
source_sha256: f58fd15ead3e6dda882bc7726937fceec33ac6280f465ef86858595993bc484f
original_url: "https://arxiv.org/abs/2608.03498"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# FedCARE：智能医疗的多目标个性化联邦学习框架

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Rojalini Tripathy、Padmalochan Bera、Shreya Ghosh 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03498)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/FedCARE- A Multi-Objective Personalised Federated Learning Framework for Smart Healthcare|查看原始文件]]

## 摘要

- 提出 FedCARE，智能医疗服务的多目标个性化 FL 框架：两阶段训练——先经帕累托驱动多目标联邦优化从共同临床特征学习共享全局骨干；再各客户端用私有特征与本地临床目标独立微调共享骨干（机构特定个性化，无额外通信开销）。
- 联邦学习（FL）使分布式医疗机构无需集中敏感患者数据即可协作训练；但现实医疗联邦不仅非 IID 数据，还异构临床目标与部分重叠特征空间：不同医院可能优化不同且潜在冲突目标（死亡风险预测、再入院减少或住院时长估计），同时保留无法与其他参与者共享的机构特定临床特征；现有个性化 FL 主要处理统计异质性，多目标 FL 通常学习共享全局模型而无显式客户端级适配。
- Melbourne Research Cloud 云客户端-服务器联邦部署实现，MIMIC-III 与 Diabetes 130-US Hospitals 两个真实医疗数据集评估：FedCARE 一致优于标准 FL、多目标 FL 与个性化 FL 基线，AUROC 最高提升 12.5%、MAE 相对 FedAvg 降低 32.0%。

## 正文

论文编号：arXiv:2608.03498v1（更新类型：new）。以下为摘要全文翻译。

联邦学习（FL）使分布式医疗机构能够在不集中敏感患者数据的情况下协作训练模型。然而，现实世界的医疗联邦不仅以非 IID 数据为特征，还以异构的临床目标与部分重叠的特征空间为特征。不同的医院可能优化不同且潜在冲突的目标，例如死亡风险预测、再入院减少或住院时长估计，同时保留无法与其他参与者共享的机构特定临床特征。现有的个性化 FL 方法主要处理统计异质性，而多目标 FL 方法通常学习一个共享的全局模型，没有显式的客户端级适配。为应对这些局限，我们提出 FedCARE，一个面向智能医疗服务的多目标个性化联邦学习框架。FedCARE 遵循两阶段训练策略。第一，它使用帕累托驱动的多目标联邦优化，从共同临床特征学习一个共享的全局骨干。第二，每个客户端使用其私有特征与本地临床目标独立微调共享骨干，实现机构特定个性化，且无额外通信开销。我们在 Melbourne Research Cloud 的云客户端-服务器联邦部署中实现 FedCARE，并在两个真实世界医疗数据集（MIMIC-III 与 Diabetes 130-US Hospitals）上评估。实验结果表明，FedCARE 一致优于标准 FL、多目标 FL 与个性化 FL 基线，相对 FedAvg 实现最高 12.5% 的 AUROC 提升与 32.0% 的 MAE 降低。

## 关键词

#联邦学习 #多目标优化 #个性化 #智能医疗
