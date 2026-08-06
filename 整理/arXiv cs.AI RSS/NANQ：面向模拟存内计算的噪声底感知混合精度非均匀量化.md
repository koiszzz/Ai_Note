---
title: "NANQ：面向模拟存内计算的噪声底感知混合精度非均匀量化"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory.md"
source_note: "[[信息源/arXiv cs.AI RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory]]"
source_sha256: a8a5afedb4ed506c4ebc6bdef9d17ed90c646050af9a57315013ebb81b7dc850
original_url: "https://arxiv.org/abs/2608.02700"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# NANQ：面向模拟存内计算的噪声底感知混合精度非均匀量化

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Yizhe Chen、Wenshuai Yao、Saiya Wang 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02700)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory|查看原始文件]]

## 摘要

- 提出 NANQ，面向模拟 CIM 的噪声感知混合精度非均匀量化框架：从 eFlash CIM 阵列的实测响应建模幅度相关权重噪声，把噪声分布转化为自适应量化密度——低噪声区域分配更细分辨率，避免在噪声主导区域的无效精度。
- 用统一阈值识别每层在硬件噪声下的精度饱和点，分配逐层位宽。
- eFlash CIM SoC 的片上实验显示：2 位权重幅度量化下，NANQ 相对 PowerQuant 平均把视觉模型准确率提升 8.05 个百分点，语言模型 PPL 降低 54.7%。
- 混合精度 NANQ 仅用 3.2–3.8 等效比特即捕获额外量化资源可获得的大部分增益。

## 正文

论文编号：arXiv:2608.02700v1（更新类型：cross）。以下为摘要全文翻译。

模拟存内计算（CIM）实现能效高的神经网络推理，但器件变异与读取噪声会严重退化低位量化模型。现有面向 CIM 的量化方法主要最小化理想量化误差，忽视硬件噪声底，导致精度分配低效。我们提出 NANQ，面向模拟 CIM 的噪声感知混合精度非均匀量化框架。NANQ 从 eFlash CIM 阵列的实测响应建模幅度依赖的权重噪声，并把噪声分布转化为自适应量化密度：为低噪声区域分配更细的分辨率，同时避免在噪声主导区域分配无效精度。它进一步通过统一阈值识别每层在硬件噪声下的精度饱和点，分配逐层位宽。eFlash CIM SoC 上的片上实验显示，在 2 位权重幅度量化下，NANQ 相对 PowerQuant 平均把视觉模型准确率提升 8.05 个百分点，并把语言模型 PPL 平均降低 54.7%。混合精度 NANQ 仅用 3.2–3.8 等效比特即捕获了额外量化资源可获得的大部分增益。

## 关键词

#存内计算 #量化 #噪声感知 #边缘推理
