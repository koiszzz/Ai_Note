---
published: 2026-08-07
title: "DocQT：经多样 JPEG 量化表改进文档伪造定位稳健性"
source: "arXiv cs.CV RSS"
original_file: "信息源/arXiv cs.CV RSS/DocQT- Improving Document Forgery Localization Robustness via Diverse JPEG Quantization Tables.md"
source_note: "[[信息源/arXiv cs.CV RSS/DocQT- Improving Document Forgery Localization Robustness via Diverse JPEG Quantization Tables]]"
source_sha256: 042148913a6f0e1bf24f5e10fd3f3500fd2780c047d503e2c64485da04df3204
original_url: "https://arxiv.org/abs/2605.19688"
processed: 2026-08-07
language: zh-CN
---

# DocQT：经多样 JPEG 量化表改进文档伪造定位稳健性

> [!info] 来源信息
> - **来源**：[arXiv cs.CV RSS](https://export.arxiv.org/rss/cs.CV)
> - **作者**：Kylian Ronfleux-Corail (L3I, ULR), Guillaume Bernard (L3I, ULR), Mickaël Coustaty (L3I, ULR), Nicolas Sidère (L3I, ULR)
> - **发布时间**：2026-08-07
> - **分类**：cs.CV
> - **原文**：[打开链接](https://arxiv.org/abs/2605.19688)

## 摘要

- 文档操纵定位模型在公开基准表现强，却无法泛化到运营文档工作流；识别该差距的一个关键且被忽视来源：训练所用 JPEG 量化表的窄分布（限于标准 libjpeg 质量因子）与真实保险文档流水线中遇到的异构压缩概况之间的错配。
- 隔离该因素：受控因子研究比较两种量化表感知水平对比的架构（FFDN 与 Mesorch），每种在标准质量因子增广（Standard-QT）或从 DocQT 采样运营校准量化表（Real-QT）下训练，并在三种重压缩条件下评估。
- Real-QT 训练在 DocTamper 上带来显著定位增益，并大幅降低真实运营文档上的像素级误报率——但仅对显式将量化表作为输入摄入的架构。
- 发布 DocQT 量化表数据集与压缩复现材料；标准质量因子增广不能充分代理运营压缩多样性，显式条件化于量化表的架构选择为真实部署提供有意义的稳健性优势。

## 正文

文档操纵定位模型在公开基准上取得强性能，却无法泛化到运营文档工作流。研究识别该差距的一个关键且被忽视的来源：训练期间所用 JPEG 量化表的窄分布——限于标准 libjpeg 质量因子——与真实保险文档流水线中遇到的异构压缩概况之间的错配。为隔离该因素，研究进行受控因子研究，比较两种量化表感知水平对比的架构——FFDN 与 Mesorch——每种在标准质量因子增广（Standard-QT）或从 DocQT 采样的运营校准量化表（Real-QT）下训练，并在三种重压缩条件下评估。Real-QT 训练在 DocTamper 上产生显著的定位增益，并大幅降低真实运营文档上的像素级误报率——但仅对显式将量化表作为输入摄入的架构。发布的 DocQT 量化表数据集与压缩复现材料直接见 https://github.com/Kyliroco/Improving-Document-Forgery-Localization-Robustness-via-Diverse-JPEG-Quantization-Tables。这些结果表明，标准质量因子增广不能充分代理运营压缩多样性，而显式条件化于量化表的架构选择为真实世界部署提供有意义的稳健性优势。

## 关键词

文档伪造、定位、JPEG 量化、稳健性、取证
