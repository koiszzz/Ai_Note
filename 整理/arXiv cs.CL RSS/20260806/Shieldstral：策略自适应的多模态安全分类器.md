---
published: 2026-08-06
title: Shieldstral：策略自适应的多模态安全分类器
source: arXiv cs.CL RSS
original_file: 信息源/arXiv cs.CL RSS/Shieldstral.md
source_note: "[[信息源/arXiv cs.CL RSS/Shieldstral]]"
source_sha256: 76b6d3b81dbbacc99184041a2a32c9a2638f650cce9857f249f308d317c1f037
original_url: https://arxiv.org/abs/2607.25857
processed: 2026-08-07
language: zh-CN
---

# Shieldstral：策略自适应的多模态安全分类器

> [!info] 来源信息
> - 数据源：arXiv cs.CL RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.25857)
> - Vault 原文件：[[信息源/arXiv cs.CL RSS/Shieldstral|查看原始文件]]

## 摘要

- Shieldstral 是一个 30 亿参数（3B）的策略自适应多模态安全分类器，在文本安全基准上达到或超过其近 7 倍规模的模型，并在多模态安全分类上树立新的最先进水平。
- 它将内容审核形式化为二元问答（binary question-answering）任务；这一简洁形式把多样的审核任务统一为一个"是/否"问题，使具有不同分类法的异构安全数据集能在统一训练框架下合并。
- 展示了数据构建配方，涵盖约 5410 万样本的策展与生成，以及一个用于评估策略适应性的细粒度评估集；这些共同使一个小型自适应模型达到或超过远大于它的模型。

## 正文

本文编号：arXiv:2607.25857v2（公告类型：replace），以下为摘要全文翻译。

我们介绍 Shieldstral——一个 30 亿参数（3B）的策略自适应多模态安全分类器，它在文本安全基准上达到或超过其近 7 倍规模的模型，并在多模态安全分类上树立了新的最先进水平。Shieldstral 将内容审核形式化为一个二元问答任务。这一简洁的形式将多样化的审核任务统一为单一的"是/否"问题，使具有不同分类法的异构安全数据集能够在一个统一的训练框架下整合。我们展示了数据构建配方，涵盖约 5410 万个样本的策展与生成，以及一个细粒度的评估集，用于评估策略适应性。这些共同使一个小型自适应模型能够达到或超过远大于它的模型。

## 关键词

#安全分类 #多模态 #内容审核 #策略自适应 #小模型
