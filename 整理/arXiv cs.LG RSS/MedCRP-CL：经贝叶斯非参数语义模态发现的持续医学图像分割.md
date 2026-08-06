---
title: "MedCRP-CL：经贝叶斯非参数语义模态发现的持续医学图像分割"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/MedCRP-CL- Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discove.md"
source_note: "[[信息源/arXiv cs.LG RSS/MedCRP-CL- Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discove.]]"
source_sha256: 57649aa19cdcfefda68bf8e5822b5981136a5468f1520bca172b0bb7f59184e2
original_url: "https://arxiv.org/abs/2605.20297"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# MedCRP-CL：经贝叶斯非参数语义模态发现的持续医学图像分割

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Ziyuan Gao
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2605.20297)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/MedCRP-CL- Continual Medical Image Segmentation via Bayesian Nonparametric Semantic Modality Discove.|查看原始文件]]

## 摘要

- 医学图像分割在持续学习中面临根本挑战：数据从异构来源顺序到达，而有效持续学习需要发现哪些任务共享足够结构以从联合学习中受益。
- 现有方法要么对所有任务应用统一约束（任务冲突时造成灾难性遗忘），要么需要无法预知未来任务多样性的预定义任务分组。
- 引入 MedCRP-CL，一个执行在线任务结构发现与结构感知持续学习的框架：利用中餐馆过程（CRP），方法在任务到达时从临床文本提示动态推断任务分组，无需预定义簇数或访问未来任务。
- 把这些发现的分组称为语义模态：通过整合解剖区域与病理上下文，它们捕捉比物理成像模态更细粒度的结构。
- 在该发现结构引导下，维护语义模态特定的 LoRA 适配器，用模态内 EWC 正则化，在不相似任务组间确保参数隔离，同时促进相似组内的知识迁移；框架也免回放，只存储聚合统计量而非原始患者数据。
- 在跨四种成像模态的 16 个医学分割任务上的实验表明：MedCRP-CL 取得 73.3% 的 Dice 分数，仅 4.1% 遗忘，优于最佳基线 8.0%，且所需参数少 6 倍。
- 代码：https://github.com/zygao930/MedCRP-CL

## 正文

论文编号：arXiv:2605.20297v2（更新类型：replace-cross）。以下为摘要全文翻译。

医学图像分割在持续学习中面临根本挑战：数据从异构来源顺序到达，而有效的持续学习需要发现哪些任务共享足够结构以从联合学习中受益。现有方法要么对所有任务应用统一约束，在任务冲突时造成灾难性遗忘；要么需要无法预知未来任务多样性的预定义任务分组。我们引入 MedCRP-CL，一个执行在线任务结构发现与结构感知持续学习的框架。利用中餐馆过程（CRP），我们的方法在任务到达时从临床文本提示动态推断任务分组，无需预定义的簇数或对未来任务的访问。我们把发现的分组称为语义模态，因为通过整合解剖区域与病理上下文，它们捕捉比物理成像模态更细粒度的结构。在该发现结构的引导下，我们维护语义模态特定的 LoRA 适配器，并用模态内 EWC 正则化，确保不相似任务组之间的参数隔离，同时促进相似组内的知识迁移。该框架还免回放，只存储聚合统计量而非原始患者数据。在跨四种成像模态的 16 个医学分割任务上的实验表明，MedCRP-CL 取得 73.3% 的 Dice 分数，仅有 4.1% 的遗忘，优于最佳基线 8.0%，同时所需的参数少 6 倍。代码见 https://github.com/zygao930/MedCRP-CL。

## 关键词

#持续学习 #医学图像分割 #中餐馆过程 #贝叶斯非参数 #LoRA
