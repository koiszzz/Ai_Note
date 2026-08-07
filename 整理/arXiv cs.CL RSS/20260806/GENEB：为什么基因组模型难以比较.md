---
published: 2026-08-06
title: GENEB：为什么基因组模型难以比较
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/GENEB- Why Genomic Models Are Hard to Compare.md
source_note: "[[信息源/arXiv cs.CL RSS/GENEB- Why Genomic Models Are Hard to Compare]]"
source_sha256: f53af167cabd6b64477f5ea135a151e863ae153792c29d6a5e906c4263bea947
original_url: https://arxiv.org/abs/2606.04525
processed: 2026-08-07
language: zh-CN
---

# GENEB：为什么基因组模型难以比较

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2606.04525)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/GENEB- Why Genomic Models Are Hard to Compare|查看原始文件]]

## 摘要

- 基因组基础模型进展因基准碎片化、评估协议不兼容和按任务报告而难以评估，优越性或泛化性宣称往往无法直接比较。
- 引入 GENEB 大规模诊断基准：在统一基于探测的协议下评估 40 个基因组基础模型的冻结表示，覆盖 13 个功能类别的 100 个任务，含少样本设置。
- 分析表明聚合排行榜不稳定：模型排名随任务类别剧烈变化，规模收益温和且不一致，架构与预训练对齐往往比参数量更重要；GENEB 定位为原则性比较与类别感知模型选择的参考框架。

## 正文

本文编号：arXiv:2606.04525v4（公告类型：replace），以下为摘要全文翻译。

基因组基础模型的进展因基准碎片化、评估协议不兼容和按任务报告的惯例而难以评估。因此，跨模型优越性或泛化性的宣称往往无法直接比较。我们引入 GENEB，一个大规模诊断基准，在统一基于探测（probing）的协议下，评估来自 40 个基因组基础模型的冻结表示，覆盖 13 个功能类别的 100 个任务，并包含少样本（few-shot）设置。GENEB 支持跨模型规模、架构、分词（tokenization）和预训练数据的受控比较，同时明确暴露任务层面的权衡。我们的分析表明，聚合排行榜不稳定：模型排名随任务类别剧烈变化，规模只带来温和且不一致的收益，而架构和预训练对齐往往比参数量更重要。这些结果凸显了当前评估实践的局限，并将 GENEB 定位为基因组机器学习中原则性比较与类别感知模型选择的参考框架。

## 关键词

#GENEB #基因组基础模型 #基准 #评估协议 #少样本
