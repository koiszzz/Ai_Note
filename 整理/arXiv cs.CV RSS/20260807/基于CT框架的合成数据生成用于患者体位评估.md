---
published: 2026-08-07
title: "基于 CT 框架的合成数据生成用于患者体位评估"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/Patient Pose Assessment Using a CT-Based Framework for Synthetic Data Generation.md"
source_note: "[[信息源/arXiv cs.CV RSS/Patient Pose Assessment Using a CT-Based Framework for Synthetic Data Generation]]"
source_sha256: fdaae789d154496956394cdfeea53dc945952c66657938bc90c933f27044772a
original_url: "https://arxiv.org/abs/2608.06126"
processed: 2026-08-07
language: zh-CN
---

# 基于 CT 框架的合成数据生成用于患者体位评估

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Manuel Laufer, Dominik Mairhöfer, Malte Sieren, Hauke Gerdes, Fabio Leal dos Reis, Arpad Bischof, Thomas Käster, Erhardt Barth, Jörg Barkhausen, Thomas Martinetz
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2608.06126)

## 摘要

- 足够的放射照片诊断质量对可靠诊断与治疗规划必不可少；患者拍摄时的体位是决定诊断质量的最重要因素之一。
- 患者摆位困难且不标准化，基于 AI 的自动化方法（用深度图像在拍摄前自动评估患者体位）会有帮助；但监管障碍使实践中难以获取所需深度图像与对应放射照片。
- 呈现可从 CT 扫描合成生成此类训练数据的框架；展示在生成合成数据集（3077 对上踝关节图像对）上预训练可将真实上踝关节的体位评估改进最多 11 个百分点。

## 正文

足够的放射照片（radiograph）诊断质量对可靠诊断与治疗规划必不可少。患者拍摄时的体位是决定诊断质量的最重要因素之一。由于患者摆位困难且不标准化，一个基于 AI 的自动化方法（使用深度图像在拍摄放射照片前自动评估患者体位）会很有帮助。然而，由于监管障碍，在实践中难以获取所需的深度图像与对应的放射照片。本文呈现一个可以从计算机断层扫描（CT）扫描合成生成此类训练数据的框架。研究进一步证明，在生成的合成数据集（包含 3,077 对上踝关节图像对）上预训练，可将真实上踝关节的体位评估改进最多 11 个百分点。

## 关键词

患者体位、合成数据、CT、深度图像、放射
