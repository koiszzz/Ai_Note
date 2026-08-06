---
published: 2026-08-05
title: "PRISM：面向多元异常检测的强大时序到图像表示"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection.md"
source_note: "[[信息源/arXiv cs.AI RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection]]"
source_sha256: 648d93b9e76667e5c047cbc24690b95120f72caaa680eee8e5cdc9adb7e3648a
original_url: "https://arxiv.org/abs/2608.03926"
processed: 2026-08-05
language: zh-CN
---

# PRISM：面向多元异常检测的强大时序到图像表示

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Mateusz Smendowski、Kamil Faber、Piotr Nawrocki 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03926)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection|查看原始文件]]

## 摘要

- 提出 PRISM，即插即用元工作流：系统化构建与评估面向多元 TSAD 的基于图像的表示；评估跨越 7,000 多个实验，显示精心设计的 PRISM 配置与 24 个时域基线竞争，在 14 个数据集中的 10 个上取得最佳 VUS-PR，平均比这些数据集上最佳竞争方法提升 41%。
- 识别通道化（多通道图像通道维度的构建方式）为关键且此前未充分研究的设计维度，提出 MSM 新统计方案，相对基于 PCA 的替代方案取得 11–27% 增益。
- ImageNet 预训练编码器有效迁移到 TSAD：冻结编码器保留微调性能的 92%，训练快 1.8 倍。
- 代码：https://github.com/Smendowski/PRISM

## 正文

论文编号：arXiv:2608.03926v1（更新类型：cross）。以下为摘要全文翻译。

时序异常检测（TSAD）支撑预测性维护、金融与云计算等应用，然而性能对表示选择仍然敏感，尤其在多元设置中。虽然把时序转换为图像已在预测与分类中取得成功，但多元、高维序列应如何映射到多通道图像，以及视觉骨干能否在 TSAD 中匹敌时域基线，仍不清楚。我们引入 PRISM，一个即插即用元工作流，支持系统化构建与评估面向多元 TSAD 的基于图像的表示。我们的评估跨越 7,000 多个实验，表明精心设计的 PRISM 配置与 24 个时域基线竞争，在 14 个数据集中的 10 个上取得最佳 VUS-PR，平均比这些数据集上最佳竞争方法提升 41%。此外，我们识别出通道化（多通道图像的通道维度如何构建）为一个关键且此前未充分研究的设计维度，并引入 MSM，一种新颖的基于统计的方案，相对基于 PCA 的替代方案取得 11–27% 的增益。最后，ImageNet 预训练编码器有效迁移到 TSAD：冻结编码器保留微调性能的 92%，而训练快 1.8 倍。我们的代码可在 https://github.com/Smendowski/PRISM 获取。

## 关键词

#时序异常检测 #时序转图像 #视觉骨干 #多变量
