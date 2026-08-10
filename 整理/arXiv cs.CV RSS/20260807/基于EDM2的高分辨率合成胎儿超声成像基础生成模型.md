---
published: 2026-08-07
title: "基于 EDM2 的高分辨率合成胎儿超声成像基础生成模型"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/A Foundational EDM2-Based Generative Model for High-Resolution Synthetic Fetal Ultrasound Imaging fr.md"
source_note: "[[信息源/arXiv cs.CV RSS/A Foundational EDM2-Based Generative Model for High-Resolution Synthetic Fetal Ultrasound Imaging fr]]"
source_sha256: d883b47fd1bc31b21df66d0088b05d8aabcd2647bd9ed83f5d7687ad73f74227
original_url: "https://arxiv.org/abs/2608.05471"
processed: 2026-08-07
language: zh-CN
---

# 基于 EDM2 的高分辨率合成胎儿超声成像基础生成模型

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Harvey Mannering, Yilin Zhang, Ziao Liu, Zhiwu Huang, Jacqueline Matthew, Miguel Xochicale
> - **发布时间**：2026-08-07
> - **分类**：eess.IV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.05471)

## 摘要

- 提出基于 EDM2 扩散架构的高分辨率胎儿超声合成框架，在多个公开数据集上训练，可生成六大解剖类别的 512×512 图像。
- 相比仅用真实数据训练，微调后集成准确率达 93.36%，并取得更低的 FID 分数。
- 临床评估显示合成图像真实感平均分 2.67/5，真实图像评分更高；伪影包括平滑化、斑点不规则与解剖结构不一致。
- 代码、数据与模型公开于 GitHub。

## 正文

产前超声成像是评估胎儿健康的关键手段，但 AI 研究受限于稀缺、受隐私限制且难以标注的数据集。本文提出一个基于 EDM2 扩散架构的高分辨率胎儿超声合成框架，利用多个公开数据集进行训练，以生成覆盖六大解剖类别的 512×512 图像。该方法取得了更好的图像质量与更低的 FID 分数，并提升了下游胎儿平面分类性能：微调后集成准确率达到 93.36%，超越仅用真实数据训练的结果。由一名拥有 10 年以上经验的资深胎儿超声专家对 100 张图像进行临床评估，平均真实感评分为 2.67/5（满分 5），真实图像的评分高于合成图像。合成图像存在平滑化、斑点不规则和解剖结构不一致等伪影。重现本工作的代码、数据、模型及其他资源可在 https://github.com/xfetus/fetal-ultrasound-edm2 获取。

## 关键词

胎儿超声、扩散模型、EDM2、图像合成、医学影像
