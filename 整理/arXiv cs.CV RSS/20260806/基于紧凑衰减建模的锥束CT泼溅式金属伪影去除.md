---
published: 2026-08-06
title: 基于紧凑衰减建模的锥束CT泼溅式金属伪影去除
source: arXiv cs.CV RSS
original_file: 信息源/arXiv cs.CV RSS/Splat-Based Metal Artifact Reduction in Cone-Beam CT via Compact Attenuation Modeling.md
source_note: "[[信息源/arXiv cs.CV RSS/Splat-Based Metal Artifact Reduction in Cone-Beam CT via Compact Attenuation Modeling]]"
source_sha256: d66d9da0ac47de0c789a441600de14c489e08c1f45ebca47d5af7ec1ccd3cc81
original_url: https://arxiv.org/abs/2608.04764
processed: 2026-08-07
language: zh-CN
---

# 基于紧凑衰减建模的锥束CT泼溅式金属伪影去除

> [!info] 来源信息
> - 数据源：arXiv cs.CV RSS
> - 发布时间：2026-08-06
> - 原文链接：[打开原文](https://arxiv.org/abs/2608.04764)
> - Vault 原文件：[[信息源/arXiv cs.CV RSS/Splat-Based Metal Artifact Reduction in Cone-Beam CT via Compact Attenuation Modeling|查看原始文件]]

## 摘要

- 提出泼溅式（splat-based）金属伪影去除框架，将物理上有依据的多色前向模型融入锥束 CT 的连续高斯表示。
- 每个高斯用紧凑的材料参数化编码能量相关衰减，可在不依赖金属掩膜的情况下高效联合优化几何与材料属性。
- 在仿真与真实锥束 CT 扫描上，比现有重建与神经场方法收敛显著更快、金属伪影抑制更有效。

## 正文

X 射线计算机断层扫描（CT）在存在牙科填充物或骨科植入物等高衰减物体时会出现严重的金属伪影。这些伪影源于 X 射线的多色性质——衰减随光子能量和材料成分强烈变化，打破了传统重建算法所依据的单色假设。近期神经渲染方法试图通过可微多色投影模型解决这一失配问题，但在扩展到大规模锥束 CT 时仍受困于平滑性偏差、精细结构丢失和难以承受的计算量。我们提出一个泼溅式金属伪影去除框架，将物理上有依据的多色前向模型融入锥束 CT 的连续高斯表示。每个高斯使用紧凑的材料参数化来编码底层材料的能量相关衰减，从而能够在不依赖金属掩膜的情况下高效联合优化几何与材料属性。这种紧凑衰减公式捕捉了生物组织与金属植入物之间的关键差异，使我们的模型既能解释金属引入的非线性，又保留高频结构。在仿真和真实锥束 CT 扫描上的实验表明，与现有重建及基于神经场的方法相比，我们的方法收敛显著更快，并能更有效地抑制金属伪影。

## 关键词

#CT成像 #金属伪影去除 #神经场 #高斯泼溅
