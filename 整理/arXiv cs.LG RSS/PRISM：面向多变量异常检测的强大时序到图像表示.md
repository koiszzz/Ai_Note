---
title: "PRISM：面向多变量异常检测的强大时序到图像表示"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection.md"
source_note: "[[信息源/arXiv cs.LG RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection.]]"
source_sha256: c1d100a3a6d602b0e3a5dc2bfb82cc0578616a568095e2257cd8a12560144356
original_url: "https://arxiv.org/abs/2608.03926"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# PRISM：面向多变量异常检测的强大时序到图像表示

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Mateusz Smendowski、Kamil Faber、Piotr Nawrocki、Nathalie Japkowicz、Roberto Corizzo
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03926)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/PRISM- Powerful Time Series to Image (TS2I) Representations for Multivariate Anomaly Detection.|查看原始文件]]

## 摘要

- 时序异常检测（TSAD）支撑预测性维护、金融与云计算应用，但性能对表示选择敏感，尤其在多变量设置中；把时序转换为图像在预测与分类中已获成功，但多变量高维序列应如何映射到多通道图像、视觉骨干能否在 TSAD 中匹敌时域基线仍不清楚。
- 引入 PRISM，一个即插即用元工作流，支持系统化构建与评估面向多变量 TSAD 的基于图像的表示。
- 覆盖 7,000+ 实验的评估显示：设计良好的 PRISM 配置与 24 个时域基线竞争，在 14 个数据集中的 10 个上取得最佳 VUS-PR，在这些数据集上比最强竞争方法平均提升 41%。
- 识别"通道化"（多通道图像通道维度如何构建）为一个关键且此前研究不足的设计维度，引入 MSM，一个新颖的基于统计的方案，相对 PCA 替代方案取得 11–27% 增益。
- ImageNet 预训练编码器有效迁移到 TSAD：冻结编码器保留微调性能的 92%，同时训练快 1.8 倍。
- 代码：https://github.com/Smendowski/PRISM

## 正文

论文编号：arXiv:2608.03926v1（更新类型：new）。以下为摘要全文翻译。

时序异常检测（TSAD）支撑预测性维护、金融与云计算等应用，然而性能对表示选择仍然敏感，尤其在多变量设置中。虽然把时序转换为图像在预测与分类中已获成功，但多变量、高维序列应如何映射到多通道图像、以及视觉骨干能否在 TSAD 中匹敌时域基线，仍不清楚。我们引入 PRISM，一个即插即用的元工作流，支持面向多变量 TSAD 的基于图像表示的系统化构建与评估。我们覆盖 7,000 多个实验的评估表明，设计良好的 PRISM 配置与 24 个时域基线竞争，在 14 个数据集中的 10 个上取得最佳 VUS-PR，在这些数据集上比最强竞争方法平均提升 41%。此外，我们识别"通道化"——多通道图像的通道维度如何构建——为一个关键且此前研究不足的设计维度，并引入 MSM，一个新颖的基于统计的方案，相对 PCA 替代方案取得 11–27% 的增益。最后，ImageNet 预训练编码器有效迁移到 TSAD，冻结编码器保留微调性能的 92%，同时训练快 1.8 倍。我们的代码可在 https://github.com/Smendowski/PRISM 获取。

## 关键词

#时序异常检测 #时序到图像 #视觉骨干 #多通道 #元工作流
