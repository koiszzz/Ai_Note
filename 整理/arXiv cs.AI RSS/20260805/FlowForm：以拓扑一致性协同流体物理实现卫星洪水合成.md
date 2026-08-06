---
published: 2026-08-05
title: "FlowForm：以拓扑一致性协同流体物理实现卫星洪水合成"
source: "arXiv cs.AI RSS"
original_file: "信息源/arXiv cs.AI RSS/FlowForm- Synergizing Fluid Physics with Topological Consistency for Satellite Flood Synthesis.md"
source_note: "[[信息源/arXiv cs.AI RSS/FlowForm- Synergizing Fluid Physics with Topological Consistency for Satellite Flood Synthesis]]"
source_sha256: 40bcc5fcf7263882c4fb71adc9c6cb31f30468ca3cdb132d134c923cf43d86f5
original_url: "https://arxiv.org/abs/2608.03822"
processed: 2026-08-05
language: zh-CN
---

# FlowForm：以拓扑一致性协同流体物理实现卫星洪水合成

> [!info] 来源信息
> - 数据源：arXiv cs.AI RSS
> - 作者：Zhang Weihui、Wang Ruizhi、Xu Hongye 等
> - 发布时间：2026-08-05
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.03822)
> - Vault 原文件：[[信息源/arXiv cs.AI RSS/FlowForm- Synergizing Fluid Physics with Topological Consistency for Satellite Flood Synthesis|查看原始文件]]

## 摘要

- 提出 FlowForm，卫星洪水合成框架：把 SWE 启发的潜正则化与结构感知条件化结合——洪水描述模块（FDM）在扩散瓶颈处的辅助潜场中对稳态浅水方程的残差施加可微惩罚；地形锚点适配器（TAA）在 U-Net 的四个编码器尺度注入深度、语义与边缘特征。
- 策划 FloodScape，大规模高分辨率数据集，含灾前与灾后配对的卫星图像。
- 除标准图像生成指标外，评估淹没区域一致性、对地理留出洪水事件的零样本泛化与各组件敏感性。
- 在所有报告的比较中，FlowForm 取得更高视觉保真度、配对图像间更大相似性与淹没区域更强一致性。

## 正文

论文编号：arXiv:2608.03822v1（更新类型：cross）。以下为摘要全文翻译。

开发稳健的洪水评估模型需要高质量的配对卫星影像，然而针对洪水特定图像生成的数据仍然稀缺。虽然生成模型为数据增强提供了有前景的手段，但现有方法往往产生不合理的淹没区域空间布局并扭曲场景结构。我们提出 FlowForm，一个整合 SWE 启发潜正则化与结构感知条件化的卫星洪水合成框架。洪水描述模块（FDM）在扩散瓶颈处的辅助潜场中对稳态浅水方程（Shallow Water Equation）的残差施加可微惩罚。地形锚点适配器（TAA）在 U-Net 的四个编码器尺度注入深度、语义与边缘特征。我们进一步策划 FloodScape，一个包含灾前灾后配对卫星图像的大规模高分辨率数据集。除标准图像生成指标外，我们还评估淹没区域的一致性、对地理留出洪水事件的零样本泛化，以及对各组件（模块）的敏感性。在所有报告的比较中，FlowForm 取得更高的视觉保真度、配对图像之间更大的相似性，以及更强的淹没区域一致性。

## 关键词

#洪水检测 #卫星图像 #扩散模型 #物理约束
