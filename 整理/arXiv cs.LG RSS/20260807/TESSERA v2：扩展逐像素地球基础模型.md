---
published: 2026-08-07
title: "TESSERA v2：扩展逐像素地球基础模型"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/TESSERA v2- Scaling Pixel-wise Earth Foundation Models.md"
source_note: "[[信息源/arXiv cs.LG RSS/TESSERA v2- Scaling Pixel-wise Earth Foundation Models]]"
source_sha256: 2e821e8a6fde6a3a8c214ef8fc87b390fda9b8f6d01f51ad59c89b1b0210422f
original_url: "https://arxiv.org/abs/2607.03949"
processed: 2026-08-07
language: zh-CN
---

# TESSERA v2：扩展逐像素地球基础模型

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Zhengpeng Feng, Sadiq Jaffer, Ira Shokar, Jovana Knezevic, James Ball, Pedro Sousa, Mark Elvers, Madeline Lisaius, Clement Atzberger, Robin Young, Aneesh Naik, Niall Robinson, David Coomes, Anil Madhavapeddy, Srinivasan Keshav
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2607.03949)

## 摘要

- 逐像素地球观测（EO）基础模型现经生成空间嵌入取得 SOTA 性能，但这些模型如何扩展与如何最佳花费预训练预算仍知之甚少。
- 呈现迄今最大受控 EO 扩展研究：固定逐像素 Barlow Twins 家族内 395 次训练运行，每次在 15 个多样下游任务上评估；发现预训练损失几乎不预测下游性能（|Pearson r|<0.2），按损失选模型浪费大量算力。
- 训练预算增长时编码器与数据应同步增长而投影器保持固定，给出简单算力分配规则。
- 用该规则训练逐像素教师家族（0.5B、1B、2B），将最大者蒸馏为紧凑学生用于嵌入即数据部署；4400 万参数蒸馏学生在聚合上优于测试的每个开放与专有嵌入产品（若干大一个数量级）；学生产生 Matryoshka 表征：16 维前缀在 1/8 存储下保留全 128 维性能的 92%；计划发布 2017–2025 全球 10 米年度嵌入作为 TESSERA 基础模型嵌入产品 v2。

## 正文

逐像素地球观测（Earth-observation, EO）基础模型现在通过生成的空间嵌入实现最先进性能。然而，这些模型如何扩展以及如何最好地花费预训练预算仍知之甚少。研究呈现迄今最大规模的受控 EO 扩展研究：在固定逐像素 Barlow Twins 家族内进行 395 次训练运行，每次在 15 个多样下游任务上评估。研究发现预训练损失几乎不预测下游性能（|Pearson r|<0.2），因此按损失选择模型浪费了很大一部分算力。研究还发现，随训练预算增长，编码器与数据应一起增长，而投影器保持固定——这给出一个简单的算力分配规则。使用该规则，研究训练一个逐像素教师家族（0.5B、1B 与 2B），并将最大的教师蒸馏为紧凑学生，用于嵌入即数据（embeddings-as-data）部署。总体而言，4400 万参数的蒸馏学生优于所测试的每一个开放与专有嵌入产品，其中几个大一个数量级。这些学生产生 Matryoshka 表征，服务成本低廉：16 维前缀在 1/8 的存储下保留完整 128 维性能的 92%。综合起来，这些结果为扩展逐像素 EO 基础模型给出具体、经验扎实的配方：训练大型编码器、按下游性能选择、蒸馏为灵活学生模型。研究计划发布覆盖 2017–2025 的全球 10 米年度嵌入，作为 TESSERA 基础模型嵌入产品的第 2 版。所有代码见 https://github.com/ucam-eo/tessera。

## 关键词

地球观测、基础模型、扩展律、蒸馏、嵌入
