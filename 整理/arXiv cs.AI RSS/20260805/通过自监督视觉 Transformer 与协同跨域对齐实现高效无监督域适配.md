---
published: 2026-08-05
title: "通过自监督视觉 Transformer 与协同跨域对齐实现高效无监督域适配"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/Efficient unsupervised domain adaptation via self-supervised vision transformer and synergistic cros.md"
source_note: "[[信息源/arXiv cs.AI RSS/Efficient unsupervised domain adaptation via self-supervised vision transformer and synergistic cros]]"
source_sha256: faaf89c73b4805eb8024c4196faa218567233762b98a46b25f982ea2646a960a
original_url: "https://arxiv.org/abs/2407.21311"
processed: 2026-08-05
language: zh-CN
---

# 通过自监督视觉 Transformer 与协同跨域对齐实现高效无监督域适配

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Ali Abedi、Q. M. Jonathan Wu、Ning Zhang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2407.21311)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/Efficient unsupervised domain adaptation via self-supervised vision transformer and synergistic cros|查看原始文件]]

## 摘要

- 提出 EUDA（高效无监督域适配）：参数高效框架，用冻结的 DINOv2 骨干作为特征提取器，只更新轻量瓶颈与分类头。
- 采用协同域对齐损失（SDAL）：结合交叉熵（CE）与最大均值差异（MMD），同时促进判别学习与跨域对齐。
- 在 Office-Home、Office-31、VisDA-2017 与 DomainNet 上取得跨不同域复杂度的竞争性能，同时可训练参数减少 42% 至 99.7%。
- 结果表明该方法适用于资源受限与分布式环境。

## 正文

论文编号：arXiv:2407.21311v2（更新类型：replace-cross）。以下为摘要全文翻译。

无监督域适配（UDA）旨在缓解域偏移，即带标签源数据与无标签目标数据的分布不同。尽管近期有进展，现有方法往往依赖微调大型骨干模型，导致计算成本高并限制资源受限环境的可扩展性。这一局限凸显了对参数高效方法的需求：在降低训练复杂度的同时保持强性能。DINOv2 等自监督基础模型提供高度可迁移的表示，引出一个问题：能否在不完全微调的情况下实现有效的域适配？为回答这一问题，我们提出高效无监督域适配（EUDA），一个参数高效框架：利用冻结的 DINOv2 骨干作为特征提取器，只更新轻量瓶颈与分类头。我们还采用协同域对齐损失（SDAL），结合交叉熵（CE）与最大均值差异（MMD），同时促进判别学习与跨域对齐。Office-Home、Office-31、VisDA-2017 与 DomainNet 上的实验结果表明，EUDA 在多样的域复杂度下取得竞争性能，同时将可训练参数减少 42% 至 99.7%。这些结果显示了所提方法对资源受限与分布式环境的适用性。

## 关键词

#无监督域适配 #DINOv2 #参数高效 #域对齐
