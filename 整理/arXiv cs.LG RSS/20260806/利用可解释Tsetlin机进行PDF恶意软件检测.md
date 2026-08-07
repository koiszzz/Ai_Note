---
published: 2026-08-06
title: 利用可解释Tsetlin机进行PDF恶意软件检测
source: arXiv cs.LG RSS
original_file: 信息源/arXiv cs.LG RSS/Leveraging Interpretable Tsetlin Machine for PDF Malware Detection.md
source_note: "[[信息源/arXiv cs.LG RSS/Leveraging Interpretable Tsetlin Machine for PDF Malware Detection]]"
source_sha256: 68e2bc1ed689f0a731e887b560959c611d8958e5e3907f66aa20b69ff685dafd
original_url: https://arxiv.org/abs/2607.09290
processed: 2026-08-07
language: zh-CN
---

# 利用可解释Tsetlin机进行PDF恶意软件检测

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2607.09290)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/Leveraging Interpretable Tsetlin Machine for PDF Malware Detection|查看原始文件]]

## 摘要

- 提出基于可解释 Tsetlin 机（TM）的 PDF 恶意软件检测框架，通过静态分析提取特征，无需执行文件
- 在 RIT-PDFMal-2026 数据集上达到 98.02% 准确率，优于多种最先进机器学习分类器
- 提供内在可解释性，并在树莓派上支持实时、设备端检测

## 正文

在数字时代，便携式文档格式（Portable Document Format，PDF）因其平台无关性与丰富功能，成为存储和交换数字文档使用最广泛的文件格式之一。然而，这些同样的能力也使 PDF 文件成为网络攻击者的诱人攻击载体，他们会在看似合法的文档中嵌入恶意代码以危害目标系统。本文提出一种新颖的、基于可解释 Tsetlin 机（Tsetlin Machine，TM）的 PDF 恶意软件检测框架。所提框架通过静态分析提取 PDF 文档的关键特征，无需执行文件，并采用基于规则的学习对良性与恶意 PDF 文档进行准确分类。在 RIT-PDFMal-2026 数据集上的数值评估表明，该框架达到 98.02% 的准确率，优于多种最先进的机器学习分类器。此外，该框架通过透明地解释其分类决策，提供了内在可解释性。在树莓派（Raspberry Pi）上的边缘部署进一步支持实时、设备端 PDF 恶意软件检测。更好的准确率、计算效率与内在可解释性的结合，使该框架成为实际 PDF 恶意软件检测的有前景的解决方案。

## 关键词

#Tsetlin机 #PDF恶意软件 #可解释AI #网络安全 #静态分析 #边缘部署
