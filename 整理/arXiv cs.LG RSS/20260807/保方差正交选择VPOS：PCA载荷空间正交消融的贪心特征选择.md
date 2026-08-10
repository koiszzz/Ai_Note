---
published: 2026-08-07
title: "保方差正交选择（VPOS）：PCA 载荷空间正交消融的贪心特征选择"
source: "arXiv cs.LG RSS"
original_file: "信息源/arXiv cs.LG RSS/Variance-Preserving Orthogonal Selection (VPOS)- Greedy Feature Selection via Orthogonal Deflation i.md"
source_note: "[[信息源/arXiv cs.LG RSS/Variance-Preserving Orthogonal Selection (VPOS)- Greedy Feature Selection via Orthogonal Deflation i]]"
source_sha256: 5936677e922c9e85b468383e16b5764d145c2e8b18321c2a4193d4211b3652f9
original_url: "https://arxiv.org/abs/2607.23198"
processed: 2026-08-07
language: zh-CN
---

# 保方差正交选择（VPOS）：PCA 载荷空间正交消融的贪心特征选择

> [!info] 来源信息
> - **来源**：[arXiv cs.LG RSS](https://export.arxiv.org/rss/cs.LG)
> - **作者**：Baran Koseoglu, Berrin Yanikoglu
> - **发布时间**：2026-08-07
> - **分类**：cs.LG
> - **原文**：[打开链接](https://arxiv.org/abs/2607.23198)

## 摘要

- 提出保方差正交选择（VPOS）：无监督特征选择方法，在方差加权 PCA 载荷空间 V_dΛ_d^{1/2} 中执行序贯正交消融。
- 每选一个特征后将其载荷方向从所有剩余候选中投影出去，后续选择覆盖秩 d 协方差近似的互补方向，同时返回原始变量；建立秩缩减保证与行列式增长解释，并将 VPOS 与原始数据贪心选择、非加权特征向量枢轴、主特征分析（PFA）与主变量选择（PVS）区分。
- 实验强制 k≤d、在验证观测上调方法特定参数、在未见外折评估；七个标注基准上 VPOS 在每个数据集都改进匹配无消融 PCA 的保留归一化重建误差（降低 1–78%）；在 Wine、Breast Cancer 与 MNIST 取得最低平均重建误差，CIFAR-10 与 HighDim 距最低误差 1.7% 以内。
- CIFAR-10 上 VPOS 比密切相关的 PVS 基线快约 24 倍，重建差距仅 1.7%；确立 VPOS 为高效协方差覆盖方法，尤其相关高维数据须由一小集可识别原始变量表示时。

## 正文

研究提出保方差正交选择（Variance-Preserving Orthogonal Selection, VPOS），一种无监督特征选择方法：在方差加权主成分分析（PCA）载荷空间 V_dΛ_d^{1/2} 中执行序贯正交消融。每选择一个特征，其载荷方向从所有剩余候选中投影出去，因此后续选择覆盖秩 d 协方差近似的互补方向，同时返回原始变量。研究确立秩缩减保证与行列式增长解释，并将 VPOS 与原始数据上的贪心选择、非加权特征向量枢轴、主特征分析（Principal Feature Analysis, PFA）与主变量选择（Principal Variable Selection, PVS）区分。实验强制 k≤d、在验证观测上调整方法特定参数，并在未见外折上评估。跨七个标注基准，VPOS 在每个数据集都改进匹配无消融 PCA 的保留归一化重建误差，降低 1–78%。它在 Wine、Breast Cancer 与 MNIST 上取得最低平均重建误差，并在 CIFAR-10 与 HighDim 上距最低误差 1.7% 以内。在 CIFAR-10 上，VPOS 比密切相关的 PVS 基线快约 24 倍，同时仅产生 1.7% 的重建差距。这些结果确立 VPOS 为高效的协方差覆盖方法，尤其当相关高维数据必须由一小集可识别原始变量表示时。

## 关键词

特征选择、PCA、正交消融、无监督学习、协方差覆盖
