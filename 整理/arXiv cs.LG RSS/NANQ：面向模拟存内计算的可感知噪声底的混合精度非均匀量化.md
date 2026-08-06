---
title: "NANQ：面向模拟存内计算的可感知噪声底的混合精度非均匀量化"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory.md"
source_note: "[[信息源/arXiv cs.LG RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory.]]"
source_sha256: bb7c75a7cce0cac8973d9a5358bef960f0362ea956faf148b32533d73a023056
original_url: "https://arxiv.org/abs/2608.02700"
published: 2026-08-05
processed: 2026-08-05
language: zh-CN
---

# NANQ：面向模拟存内计算的可感知噪声底的混合精度非均匀量化

> [!info] 来源信息
> - 数据源：arXiv cs.LG RSS
> - 作者：Yizhe Chen、Wenshuai Yao、Saiya Wang、Yuannuo Feng、Wenbo Qi、Kechao Tang、Ngai Wong、Wenyong Zhou、Wang Kang
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.02700)
> - Vault 原文件：[[信息源/arXiv cs.LG RSS/NANQ- Noise-Floor-Aware Mixed-Precision Non-Uniform Quantization for Analog Compute-in-Memory.|查看原始文件]]

## 摘要

- 模拟存内计算（CIM）实现能效神经网络推理，但器件变异与读噪声会严重损害低位量化模型；现有面向 CIM 的量化方法主要最小化理想量化误差，忽略硬件噪声底，导致精度分配低效。
- 提出 NANQ，一个面向模拟 CIM 的噪声感知混合精度非均匀量化框架：从 eFlash CIM 阵列实测响应建模幅度相关权重噪声，把噪声轮廓转换为自适应量化密度——对低噪声区域分配更细分辨率，避免在噪声主导区域浪费精度。
- 进一步用统一阈值识别每层在硬件噪声下的精度饱和点，分配层间位宽。
- eFlash CIM SoC 片上实验显示：在 2 位权重幅度量化下，NANQ 相对 PowerQuant 把视觉模型准确率平均提升 8.05 个百分点，把语言模型困惑度（PPL）平均降低 54.7%。
- 混合精度 NANQ 仅用 3.2–3.8 等效位就捕捉到额外量化资源可获得的大部分收益。

## 正文

论文编号：arXiv:2608.02700v1（更新类型：new）。以下为摘要全文翻译。

模拟存内计算（CIM）实现能效的神经网络推理，但器件变异与读噪声会严重损害低位量化模型。现有面向 CIM 的量化方法主要最小化理想量化误差，忽略硬件噪声底，从而造成低效的精度分配。我们提出 NANQ，一个面向模拟 CIM 的噪声感知混合精度非均匀量化框架。NANQ 从 eFlash CIM 阵列的实测响应建模幅度依赖的权重噪声，并把噪声轮廓转换为自适应量化密度：对低噪声区域分配更细的分辨率，同时避免在噪声主导区域投入无效精度。它进一步通过统一阈值识别每层在硬件噪声下的精度饱和点，从而分配层间位宽。eFlash CIM SoC 上的片上实验表明，在 2 位权重幅度量化下，NANQ 相对 PowerQuant 把视觉模型准确率平均提升 8.05 个百分点，把语言模型 PPL 平均降低 54.7%。混合精度 NANQ 仅用 3.2–3.8 等效位就捕捉到额外量化资源可获得的大部分收益。

## 关键词

#存内计算 #量化 #噪声感知 #混合精度 #推理加速
